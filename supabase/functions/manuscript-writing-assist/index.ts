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

const SYSTEM_PROMPT = `You help history instructors improve manuscripts they are writing for their students.

Given the instructor's draft and the intended student audience, return feedback in two categories:
1. toneSuggestions — places where the tone doesn't fit the stated audience (too advanced, too informal, condescending, etc).
2. grammarIssues — grammatical or spelling errors.

The user message states the audience as one of these level keys. Judge tone against the matching profile:
- preschool (ages ~3–5): very simple words, short concrete sentences, no abstract concepts.
- kindergarten (ages ~5–6): simple vocabulary, concrete examples, gentle pacing.
- high_school (ages ~14–18): abstract ideas are fine but define jargon; moderate sentence length.
- undergrad: assume some domain familiarity; a measured academic tone is appropriate.
- grad: assume strong background; dense, technical prose is appropriate.
Flag tone that is too advanced, too simplistic, too informal, or condescending for the stated level. If no audience is stated, assume high_school.

Respond with ONLY a JSON object in this exact shape, no other text:
{
  "toneSuggestions": [{ "excerpt": string, "replacement": string, "issue": string }],
  "grammarIssues": [{ "excerpt": string, "replacement": string, "issue": string }]
}

- "excerpt": a short, VERBATIM substring copied exactly from the draft — same case, punctuation, and spacing — so the caller can locate it. Keep it as short as possible while still being unique, ideally under 12 words. Do not paraphrase.
- "replacement": the exact revised text that should replace "excerpt" in place. It must be a drop-in substitute — replacing "excerpt" with "replacement" should yield correct, natural text. Do not include advice or commentary here. If the excerpt should simply be deleted, use an empty string.
- "issue": a brief explanation of what's wrong and why, phrased for the stated audience.

If there is nothing to flag in a category, return an empty array for it.`;

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
    audience?: string | null;
  };
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body" }, 400);
  }

  const { manuscriptId, content, audience } = body;

  if (!content || typeof content !== "string") {
    return jsonResponse({ error: "content is required" }, 400);
  }

  // Client is scoped to the caller's own JWT (not the service role), so this
  // select is subject to the owner-only RLS policies on `manuscripts` — a
  // non-owner's manuscriptId 404s here with no extra ownership check needed.
  if (manuscriptId != null) {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });

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

  const userPrompt = `Audience: ${audience ?? "high_school"}\n\nDraft: ${stripHtml(content)}`;

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
        temperature: 0.3,
      }),
    },
  );

  if (!groqResponse.ok) {
    const errText = await groqResponse.text();
    return jsonResponse({ error: `Groq API error: ${errText}` }, 502);
  }

  const groqData = await groqResponse.json();
  const raw = groqData.choices?.[0]?.message?.content ?? "{}";

  let parsed: { toneSuggestions?: unknown[]; grammarIssues?: unknown[] };
  try {
    console.log("Raw Groq response:", raw);
    parsed = JSON.parse(raw);
  } catch {
    return jsonResponse({ error: "Model returned invalid JSON" }, 502);
  }

  return jsonResponse({
    toneSuggestions: parsed.toneSuggestions ?? [],
    grammarIssues: parsed.grammarIssues ?? [],
  });
});
