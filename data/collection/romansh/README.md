# Romansh (Rumantschs) — second regional sample

Companion sample to `ikwerre/`. Applied to Supabase as migration
`history_model_seed_romansh`; the SQL lives at `SQL/history_model_seed_romansh.sql`.

## Why this sample exists

The Ikwerre sample is oral-tradition-heavy: 1 of its 6 entries carries a calendar
date. This sample is deliberately its opposite — a densely datable European
minority history, 21 of 21 entries dated. Together they stop Explore and Timeline
from being built against one shape of data and breaking on the other.

Both groups are minority-language communities under sustained pressure from a
dominant neighbour, so the comparison is substantive and not just a test fixture.

## What is in it

| | |
|---|---|
| Places | Europe → Switzerland → Graubünden → Chur, Surselva, Engiadina, Surmeir |
| People | Rumantschs (designation: Linguistic Community) |
| Language | Romansh (`roh`), UNESCO **Definitely Endangered** |
| Dialects | Sursilvan, Sutsilvan, Surmiran, Puter, Vallader, + Rumantsch Grischun |
| Entries | 21, spanning 15 BC → present |
| Relationships | 20, including one `contradicts` pair |
| Sources | 8 |

## Provenance status — read before using this as fact

**Every entry is `verification_status='unverified'`, `workflow_status='in_review'`,
except nothing — there are no verified entries in this sample.** One entry is
`disputed` by design (the Rumantsch Grischun schools controversy).

The narrative text was drafted from general knowledge and cross-checked against
the English Wikipedia article on Romansh. The `sources` rows record **where each
claim should be verified**, not that verification has happened. `confidence` on
each `entry_sources` link is an estimate of how safe the claim is, not a
completed check.

Before any of this is promoted to `published`:

- [ ] Verify all dates against the Historical Dictionary of Switzerland (HLS).
- [ ] **Resolve the Chur fire year.** Wikipedia gives **1465**; some popular
      sources give 1464. The seed uses 1465. HLS decides.
- [ ] Pin a single BFS series for the speaker count. Figures in circulation
      (35,095 / ~44,000 / 40,000–60,000 / ~60,000) answer *different survey
      questions* and must not be mixed.
- [ ] Verify the 91.6% figure for the 1938 referendum.
- [ ] Verify the Pallioppi (1857) and Carigiet (1858) titles bibliographically.
- [ ] Confirm the strength of the Lia Rumantscha → 1938 link. It is currently
      recorded as `related_to`, not `caused`, because the causal claim is
      plausible but unsourced.

## SLOTs — deliberately not filled

Following the Ikwerre rule: **no Romansh-language content is invented.**

- `lexicon` — **empty.** Needs words, pronunciation, and per-idiom attribution
  from Lia Rumantscha or a Romansh dictionary. Note that any lexicon row must be
  attributed to a specific idiom, since the five idioms differ lexically.
- `figures` — empty. Bifrun, Travers, Chiampel, Pallioppi, Carigiet and Schmid
  are all named in entry bodies but not modelled as `figures` rows.
- `media` — empty.
- Proverbs, folktales, festivals, cuisine, music/dance — **none collected.**
  This sample is heavily weighted toward language politics and written history
  because those are what published sources cover. It is *not* a rounded portrait
  of Romansh culture, and should not be presented as one.

## Model gaps this sample surfaced

1. **`entries.era` is Nigeria-shaped.** The enum is
   `pre-colonial | colonial | post-independence | contemporary`. Romansh history
   has no colonial period and no independence event, so `era` is NULL for all 21
   entries. **Agreed direction:** replace the global enum with an `eras` lookup
   table scoped to a people group (same pattern as `designations`), so each group
   carries its own era vocabulary, and let Timeline offer era-banding as a layout
   option alongside chronological ordering.
2. **`entry_type` has no value for a written work.** The literary and
   Bible-translation entries are typed `event`, which is lossy — they are
   artefacts, not occurrences. Candidate: `text` or `publication`.
3. **`dialects` has no notion of a constructed standard.** Rumantsch Grischun is
   stored as a dialect row with an explanatory `region_note`, but it is an
   engineered written standard, not a regional variety.
4. **Designations needed extending** — Canton, Region, City, Linguistic
   Community. This worked as intended: lookup rows, no migration.

## Caveat on scope

The application is framed around teaching history independently of Western
history. Switzerland is Western Europe. This sample earns its place as
**development and test data**, and as a genuine comparison case for minority
language loss — but it should not become the app's showcase content.
