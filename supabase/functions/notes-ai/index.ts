// In-note AI assist for the study-notes feature. Unlike the manuscript functions,
// this reads no database: the caller passes CONTEXT (the surrounding surface — a
// timeline group's entries, or a learning module) already filtered by the user's
// own RLS in the browser, so the model only ever sees what the user can see.
//
// One call, no modes: the learner types a single REQUEST and the model works out
// what they want (write new content, answer a question, summarize, rewrite/improve
// the note, list key points…) and does it. It also returns where the result should
// go — "append" for new material/answers, "replace" for a rewrite of the note.
//
// The reply is PLAIN TEXT, not JSON: a first `ACTION:` line then the note text.
// Notes are multi-line prose and cramming that into a JSON string trips Groq's
// json_validate (it emits unescaped newlines) — a leading control line has no such
// failure mode. Notes are a plain textarea anyway, so plain text is the right shape.

const GROQ_MODEL = Deno.env.get("GROQ_MODEL") ?? "llama-3.3-70b-versatile";
const GROQ_API_KEY = Deno.env.get("GROQ_API_KEY");

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Keep any one input from crowding the prompt window. Context can be a whole
// group's entries, so it gets the most room; the note body and request are small.
const MAX_CONTEXT_CHARS = 6000;
const MAX_BODY_CHARS = 3000;
const MAX_PROMPT_CHARS = 2000;

const SYSTEM_PROMPT =
  `You are a study assistant embedded in a single note. A learner is studying the history of real peoples and cultures on a platform that teaches history independently of a Western frame. You help them think and take notes — you never do their thinking for them by inventing facts.

You are given the learner's REQUEST, their current NOTE (may be empty), and optionally CONTEXT drawn from the platform's own historical records (the entries around this note). Work out what the REQUEST wants and do it — e.g. write a passage, answer a question, summarize the context, rewrite or improve the note, pull out key points.

GROUNDING RULES:
- CONTEXT is your evidence. Ground concrete claims — dates, names, places, events — in it, and never contradict it.
- Never invent specific facts CONTEXT does not support. If asked for something CONTEXT does not cover, say so plainly and offer how to approach it (what to look for, questions to ask) rather than fabricating. A fabricated fact about a real people is a serious harm, not a stylistic choice.
- When there is no CONTEXT, help with structure, framing, and questions, and avoid asserting specific unverifiable facts.

DECIDE WHERE THE RESULT GOES:
- replace — the REQUEST is to transform the existing NOTE into a new version: improve, rewrite, summarize, shorten, clean up, reorganize.
- append — the REQUEST adds new material or answers a question. If the NOTE is empty, always use append.

STYLE: concise, plain study-note prose. Plain text only — you may use "-" bullet lists and blank lines, but no Markdown headings, bold, or HTML.

FORMAT your reply EXACTLY like this and nothing else:
- The first line is either "ACTION: append" or "ACTION: replace".
- Then one blank line.
- Then the note text itself — no preamble like "Here is", no surrounding quotes, no JSON.`;

function textResponse(text: string, action: "append" | "replace", grounded: boolean) {
  return jsonResponse({ text, action, grounded });
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
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
  // verify_jwt is on, but require the header explicitly for a clear 401.
  if (!req.headers.get("Authorization")) {
    return jsonResponse({ error: "Missing Authorization header" }, 401);
  }

  let body: {
    prompt?: string;
    body?: string;
    contextType?: string;
    contextId?: string;
    contextText?: string;
  };
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body" }, 400);
  }

  const prompt = (body.prompt ?? "").trim().slice(0, MAX_PROMPT_CHARS);
  const note = (body.body ?? "").trim().slice(0, MAX_BODY_CHARS);
  const context = (body.contextText ?? "").trim().slice(0, MAX_CONTEXT_CHARS);

  if (!prompt) {
    return jsonResponse({ error: "prompt is required" }, 400);
  }

  // ── Assemble the prompt ───────────────────────────────────────────
  const sections = [`REQUEST:\n${prompt}`];
  sections.push(note ? `NOTE:\n${note}` : "NOTE: (empty)");
  sections.push(
    context
      ? `CONTEXT:\n${context}`
      : "CONTEXT: none provided — help with structure and framing, and do not assert specific unverifiable facts.",
  );

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
        // Low warmth: these are study notes about real history, not creative prose.
        temperature: 0.4,
      }),
    },
  );

  if (!groqResponse.ok) {
    const errText = await groqResponse.text();
    return jsonResponse({ error: `Groq API error: ${errText}` }, 502);
  }

  const groqData = await groqResponse.json();
  const content = (groqData.choices?.[0]?.message?.content ?? "").trim();

  // Pull the leading "ACTION: append|replace" line off the front; the rest is the
  // note text. If the model omits it, default to the safe, non-destructive append.
  let action: "append" | "replace" = "append";
  let text = content;
  const marker = content.match(/^ACTION:\s*(append|replace)\b[^\n]*\n?/i);
  if (marker) {
    action = marker[1].toLowerCase() as "append" | "replace";
    text = content.slice(marker[0].length).trim();
  }

  // Never replace an empty note — there's nothing to replace, so it's an add.
  if (action === "replace" && !note) action = "append";

  if (!text) {
    return jsonResponse({ error: "Model returned no content" }, 502);
  }

  return textResponse(text, action, context.length > 0);
});
