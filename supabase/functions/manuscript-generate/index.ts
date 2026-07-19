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

// Keep any single source from crowding the others out of the prompt window.
const MAX_CHARS_PER_SOURCE = 2000;
// The existing draft is context for continuity, not the subject of the task —
// cap it so a long manuscript can't crowd out the sources or the instruction.
const MAX_DRAFT_CHARS = 4000;

const SYSTEM_PROMPT = `You write passages for history instructors who are drafting teaching manuscripts for their students. The instructor gives you an INSTRUCTION describing what to write, the intended student AUDIENCE, optionally the DRAFT they have so far (for continuity of voice and to avoid repetition), and optionally a numbered list of SOURCES drawn from the platform's own historical records.

Your job is to write that passage — ready to drop straight into the manuscript.

GROUNDING RULES:
- When SOURCES are provided, they are your evidence for specific factual claims — dates, names, places, institutions, events. Ground concrete claims in them and do not contradict them.
- Never invent specific facts that the SOURCES do not support. If the instruction asks for something the sources do not cover, write the pedagogical structure and framing honestly (definitions, questions to investigate, how to approach the topic) rather than fabricating dates, names, or events.
- When no SOURCES are provided, write structure, framing, and prompts for the audience, and avoid asserting specific unverifiable facts.
- This material is for teaching real students the history of real peoples — a fabricated fact is a serious harm, not a stylistic choice.

AUDIENCE — write for the stated level:
- preschool (ages ~3–5): very simple words, short concrete sentences, no abstract concepts.
- kindergarten (ages ~5–6): simple vocabulary, concrete examples, gentle pacing.
- high_school (ages ~14–18): abstract ideas are fine but define jargon; moderate sentence length.
- undergrad: assume some domain familiarity; a measured academic tone is appropriate.
- grad: assume strong background; dense, technical prose is appropriate.
If no audience is stated, assume high_school.

Respond with ONLY a JSON object in this exact shape, no other text:
{ "html": string }

- "html": the generated passage as clean HTML. Use ONLY these tags: <p>, <h2>, <h3>, <ul>, <ol>, <li>, <strong>, <em>, <blockquote>. Do not include a document wrapper, headings above <h2>, styles, classes, or any other tags. Return the passage only — no preamble like "Here is the passage".`;

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

/** The manuscript's `contexts` jsonb stores ids as strings; Postgres wants numbers. */
function toIds(value: unknown): number[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.map(Number).filter((n) => Number.isInteger(n)))];
}

type HistoryRow = {
  id: number;
  category: string | null;
  subject_name: string | null;
  subject_description: string | null;
  entry: { eras?: string; origins?: string } | null;
};

/**
 * The ONLY place that knows the shape of a `history` row. Everything downstream
 * (prompt, response) sees just { id, label, text } — mirrors manuscript-fact-check.
 */
function historyRowToEvidence(row: HistoryRow) {
  const parts = [
    row.subject_description,
    row.entry?.origins && `Origins: ${row.entry.origins}`,
    row.entry?.eras && `Eras: ${row.entry.eras}`,
  ].filter(Boolean);

  return {
    id: row.id,
    label: row.subject_name ?? `Record ${row.id}`,
    category: row.category ?? null,
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
    prompt?: string;
    mode?: string;
    existingContent?: string;
    contexts?: Record<string, unknown>;
    audience?: string | null;
  };
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body" }, 400);
  }

  const { manuscriptId, prompt, existingContent, contexts, audience } = body;

  if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
    return jsonResponse({ error: "prompt is required" }, 400);
  }

  // Generation is mode-agnostic — the same passage serves either destination;
  // `mode` only tells the caller where the result is meant to go (into the
  // manuscript body vs. a note), and is echoed back so the frontend can route it.
  const mode = body.mode === "note" ? "note" : "content";

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

  // ── Resolve the manuscript's contexts into history rows ────────────────────
  // Grounding is optional for generation: with contexts we feed the model the
  // records to write from; without them it still produces structure and framing.
  const stateIds = toIds(contexts?.states);
  const lgaIds = toIds(contexts?.localGovernments);
  const ethnicGroupIds = toIds(contexts?.ethnicGroups);
  const tribeIds = toIds(contexts?.tribes);

  // `history` has no tribe_id, so a selected tribe contributes evidence through
  // the ethnic group / state / LGA it belongs to.
  if (tribeIds.length > 0) {
    const { data: tribes, error } = await supabase
      .from("tribes")
      .select("ethnic_group_id, state_id, local_government_id")
      .in("id", tribeIds);

    if (error) {
      return jsonResponse({ error: `Failed to resolve tribes: ${error.message}` }, 502);
    }

    for (const tribe of tribes ?? []) {
      if (tribe.ethnic_group_id) ethnicGroupIds.push(tribe.ethnic_group_id);
      if (tribe.state_id) stateIds.push(tribe.state_id);
      if (tribe.local_government_id) lgaIds.push(tribe.local_government_id);
    }
  }

  const filters = [
    ethnicGroupIds.length && `ethnic_group_id.in.(${[...new Set(ethnicGroupIds)]})`,
    stateIds.length && `state_id.in.(${[...new Set(stateIds)]})`,
    lgaIds.length && `local_government_id.in.(${[...new Set(lgaIds)]})`,
  ].filter(Boolean) as string[];

  let sources: ReturnType<typeof historyRowToEvidence>[] = [];
  if (filters.length > 0) {
    const { data: rows, error: historyError } = await supabase
      .from("history")
      .select("id, category, subject_name, subject_description, entry")
      .or(filters.join(","));

    if (historyError) {
      return jsonResponse(
        { error: `Failed to load history records: ${historyError.message}` },
        502,
      );
    }

    sources = (rows ?? []).map(historyRowToEvidence).filter((s) => s.text);
  }

  // ── Assemble the prompt ────────────────────────────────────────────────────
  const sections = [`INSTRUCTION:\n${prompt.trim()}`, `AUDIENCE: ${audience ?? "high_school"}`];

  const draft = existingContent ? stripHtml(existingContent).slice(0, MAX_DRAFT_CHARS) : "";
  if (draft) sections.push(`DRAFT SO FAR:\n${draft}`);

  if (sources.length > 0) {
    const sourceBlock = sources
      .map((s) => `[${s.id}] ${s.label}${s.category ? ` (${s.category})` : ""}\n${s.text}`)
      .join("\n\n");
    sections.push(`SOURCES:\n${sourceBlock}`);
  } else {
    sections.push(
      "SOURCES: none provided — write structure and framing, and do not assert specific unverifiable facts.",
    );
  }

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
          { role: "user", content: sections.join("\n\n") },
        ],
        response_format: { type: "json_object" },
        // A touch of warmth for prose, but well short of free invention.
        temperature: 0.5,
      }),
    },
  );

  if (!groqResponse.ok) {
    const errText = await groqResponse.text();
    return jsonResponse({ error: `Groq API error: ${errText}` }, 502);
  }

  const groqData = await groqResponse.json();
  const raw = groqData.choices?.[0]?.message?.content ?? "{}";

  let parsed: { html?: unknown };
  try {
    parsed = JSON.parse(raw);
  } catch {
    return jsonResponse({ error: "Model returned invalid JSON" }, 502);
  }

  const generatedText = typeof parsed.html === "string" ? parsed.html.trim() : "";
  if (!generatedText) {
    return jsonResponse({ error: "Model returned no content" }, 502);
  }

  return jsonResponse({
    // HTML, ready for the rich-text editor to insert. `mode` is echoed so the
    // caller knows whether to insert it into the body or save it as a note.
    generatedText,
    mode,
    // How many records the passage was grounded in, so the panel can say whether
    // this was written from the repository or is unsourced structure.
    sourceCount: sources.length,
  });
});
