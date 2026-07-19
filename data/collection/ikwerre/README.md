# Ikwerre — first sample (DRAFT)

A first pass at the ~15-entry representative sample described in the [data-gathering method](https://github.com/EDUCATE-GIGEK/Educate-Org/blob/main/docs/data-gathering-method.md). Its purpose is to **stress-test the data model before any SQL is written** — not to serve as finished content.

Files use the same fields as the blank templates in `../` (JSON instead of CSV, for readable prose and to match the repo's `data/*.js` convention):
- `entries.json` — 14 entries across the model's types (incl. the disputed path)
- `sources.json` — the source rows the entries reference
- `lexicon.json` — a concept scaffold (English glosses to collect the Ikwerre words *for*)

## ⚠️ Status: everything here is UNVERIFIED

- **Every entry is `status: draft`.** None is verified. The narrative/structural content was drafted from general knowledge and **must be checked against real sources** before it is ever shown to a learner.
- **No fabricated content.** Where responsible authoring was impossible, the entry is an explicit **`[SLOT]`** to be collected, not invented:
  - `e-012` (proverb), `e-013` (folktale) — Ikwerre-language text left empty; collect from an elder or documented source.
  - `lexicon.json` — Ikwerre `word` and `pronunciation` fields are **blank on purpose**; only the English meanings are filled, as collection targets.
- **No fabricated citations.** Most `sources.json` rows are marked `TO BE SOURCED` with the source *type* and where to look. The only concrete pointers (`s-002` Ethnologue, `s-003` Glottolog) are real reference sites, and even their specifics (e.g. the ISO 639-3 code) are flagged to verify on the page.

## How to take this forward

1. Conduct elder interviews (`s-001`) and pull the scholarly/archival citations (`s-004`, `s-005`, `s-006`) — replace every `TO BE SOURCED`.
2. An entry becomes `verified` only when **≥2 independent source types agree**; log conflicts as `disputed` (see `e-002` / `e-011`).
3. Collect the `[SLOT]` proverbs/folktales and fill the lexicon words.
4. Then run the schema-validation checklist (method §8) and reshape the model where the real data didn't fit — **only then write migrations.**

## Sensitive topics

`e-011` (Ikwerre–Igbo identity) and `e-010` (Port Harcourt land) are politically charged. Record all sourced perspectives as `disputed`; take no editorial side. Flag any sacred/restricted knowledge and do not publish it.
