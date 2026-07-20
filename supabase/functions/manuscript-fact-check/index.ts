import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const GROQ_MODEL = Deno.env.get("GROQ_MODEL") ?? "llama-3.3-70b-versatile";
const GROQ_API_KEY = Deno.env.get("GROQ_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const VERDICTS = ["supported", "contradicted", "no_evidence"] as const;
type Verdict = (typeof VERDICTS)[number];

// Keep any single source from crowding the others out of the prompt window.
const MAX_CHARS_PER_SOURCE = 2000;

const SYSTEM_PROMPT = `You fact-check history manuscripts against a fixed set of numbered source records. You are the last line of defence against a textbook teaching students something false, so you are strict and literal.

You will receive the instructor's draft and a numbered list of SOURCES drawn from the platform's own historical records. Extract the draft's discrete, checkable factual claims — dates, names, places, institutions, causal and comparative statements — and judge each one against the SOURCES.

THE CARDINAL RULE: the SOURCES are your ONLY evidence. You must never judge a claim using your own knowledge of history, however confident you feel. If the SOURCES do not speak to a claim, the correct verdict is "no_evidence" — that is a useful, honest answer, not a failure.

Verdicts:
- "supported" — a source directly affirms the claim. Cite it.
- "contradicted" — a source directly conflicts with the claim. Cite it, and supply a correction.
- "no_evidence" — the sources neither affirm nor conflict with the claim. Cite nothing, correct nothing.

Do not stretch a source. A source about Ikwerre governance says nothing about Yoruba governance. A source that mentions a date range does not thereby confirm an unrelated event inside it. When a source is merely adjacent to the claim rather than about it, the verdict is "no_evidence".

Respond with ONLY a JSON object in this exact shape, no other text:
{
  "claims": [{ "excerpt": string, "verdict": "supported" | "contradicted" | "no_evidence", "explanation": string, "sourceIds": string[], "correction": string }]
}

- "excerpt": a short, VERBATIM substring copied exactly from the draft — same case, punctuation, and spacing — so the caller can locate it. Keep it as short as possible while still being unique, ideally under 15 words. Do not paraphrase.
- "verdict": one of the three values above.
- "explanation": one or two sentences. For "supported" and "contradicted", say what the source establishes. For "no_evidence", say plainly that the records do not cover this claim — never speculate about whether it is true.
- "sourceIds": the exact bracketed ids (strings) of the SOURCES you relied on. Required for "supported" and "contradicted". Must be an empty array for "no_evidence".
- "correction": for "contradicted" only, the exact revised text that should replace "excerpt" in place — a drop-in substitute, faithful to the source, with no commentary. Use an empty string for every other verdict.

Only report claims that are genuinely checkable. Ignore opinions, pedagogical framing, and rhetorical questions. If the draft makes no checkable claims, return an empty array.`;

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** The manuscript's `contexts` jsonb stores place/people ids as UUID strings. */
function toIds(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((v) => typeof v === "string" && v.length > 0))];
}

type EntryRow = {
  id: string;
  entry_type: string | null;
  title: string | null;
  summary: string | null;
  body: string | null;
  significance: string | null;
};

/**
 * The ONLY place that knows the shape of an `entries` row. Everything downstream
 * (prompt, validation, UI) sees just { id, label, category, text }, so reshaping
 * the entries schema means rewriting this function and nothing else.
 */
function entryToEvidence(row: EntryRow) {
  const parts = [row.summary, stripHtml(row.body ?? ""), row.significance].filter(Boolean);

  return {
    id: row.id,
    label: row.title ?? `Entry ${row.id}`,
    category: row.entry_type ?? null,
    text: parts.join("\n").slice(0, MAX_CHARS_PER_SOURCE),
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: CORS_HEADERS });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  if (!GROQ_API_KEY) {
    return jsonResponse({ error: "GROQ_API_KEY is not configured" }, 500);
  }

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return jsonResponse({ error: "Missing Authorization header" }, 401);
  }

  let body: {
    manuscriptId?: number;
    content?: string;
    contexts?: Record<string, unknown>;
  };
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body" }, 400);
  }

  const { manuscriptId, content, contexts } = body;

  if (!content || typeof content !== "string") {
    return jsonResponse({ error: "content is required" }, 400);
  }

  const draft = stripHtml(content);
  if (!draft) {
    return jsonResponse({ error: "content is empty" }, 400);
  }

  // Scoped to the caller's own JWT (not the service role), so every read below
  // is subject to the same RLS the user gets in the browser.
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  });

  // A non-owner's manuscriptId 404s here under the owner-only RLS policy, so no
  // separate ownership check is needed. Unsaved drafts have no id yet and skip it.
  if (manuscriptId != null) {
    const { data: manuscript, error } = await supabase
      .from("manuscripts")
      .select("id")
      .eq("id", manuscriptId)
      .single();

    if (error || !manuscript) {
      return jsonResponse(
        { error: "Manuscript not found or access denied" },
        404,
      );
    }
  }

  // ── Resolve the manuscript's contexts into entries ─────────────────────────
  // contexts = { places: uuid[], peoples: uuid[] }. The RPC returns published
  // entries anywhere in the subtree of a selected place or people.
  const placeIds = toIds(contexts?.places);
  const peopleIds = toIds(contexts?.peoples);

  // No contexts selected — nothing to check against. Say so rather than letting
  // the model fall back on its own knowledge of history.
  if (placeIds.length === 0 && peopleIds.length === 0) {
    return jsonResponse({ claims: [], sources: [], sourceCount: 0 });
  }

  const { data: rows, error: entriesError } = await supabase.rpc("entries_for_contexts", {
    place_ids: placeIds,
    people_ids: peopleIds,
  });

  if (entriesError) {
    return jsonResponse(
      { error: `Failed to load entries: ${entriesError.message}` },
      502,
    );
  }

  const sources = ((rows ?? []) as EntryRow[]).map(entryToEvidence).filter((s) => s.text);

  if (sources.length === 0) {
    return jsonResponse({ claims: [], sources: [], sourceCount: 0 });
  }

  // ── Ask the model to judge the draft against those sources ─────────────────
  const sourceBlock = sources
    .map((s) => `[${s.id}] ${s.label}${s.category ? ` (${s.category})` : ""}\n${s.text}`)
    .join("\n\n");

  const userPrompt = `SOURCES:\n${sourceBlock}\n\nDRAFT:\n${draft}`;

  const groqResponse = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        response_format: { type: "json_object" },
        temperature: 0,
      }),
    },
  );

  if (!groqResponse.ok) {
    const errText = await groqResponse.text();
    return jsonResponse({ error: `Groq API error: ${errText}` }, 502);
  }

  const groqData = await groqResponse.json();
  const raw = groqData.choices?.[0]?.message?.content ?? "{}";

  let parsed: { claims?: unknown };
  try {
    parsed = JSON.parse(raw);
  } catch {
    return jsonResponse({ error: "Model returned invalid JSON" }, 502);
  }

  const knownIds = new Set(sources.map((s) => s.id));

  // The prompt asks the model to stay inside the sources; this makes it so. An
  // affirmative verdict is only allowed to stand if it cites a source we
  // actually sent — otherwise it is the model's own knowledge talking, and it
  // gets demoted to no_evidence rather than shown to an instructor as fact.
  const claims = (Array.isArray(parsed.claims) ? parsed.claims : [])
    .map((raw: Record<string, unknown>) => {
      const excerpt = typeof raw?.excerpt === "string" ? raw.excerpt.trim() : "";
      if (!excerpt) return null;

      const sourceIds = toIds(raw?.sourceIds).filter((id) => knownIds.has(id));
      const claimed = raw?.verdict;
      let verdict: Verdict = VERDICTS.includes(claimed as Verdict)
        ? (claimed as Verdict)
        : "no_evidence";

      if (verdict !== "no_evidence" && sourceIds.length === 0) {
        verdict = "no_evidence";
      }

      return {
        excerpt,
        verdict,
        explanation: typeof raw?.explanation === "string" ? raw.explanation : "",
        sourceIds: verdict === "no_evidence" ? [] : sourceIds,
        correction:
          verdict === "contradicted" && typeof raw?.correction === "string"
            ? raw.correction
            : "",
      };
    })
    .filter(Boolean);

  return jsonResponse({
    claims,
    // Every record the draft was checked against, so the client can resolve a
    // claim's sourceIds to names without a second round-trip.
    sources: sources.map(({ id, label, category }) => ({ id, label, category })),
    sourceCount: sources.length,
  });
});
