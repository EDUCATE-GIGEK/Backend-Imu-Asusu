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

## Provenance status

A verification pass has been run — see
`SQL/history_model_romansh_verify_and_publish.sql`.

| verification_status | count |
|---|---|
| verified | 10 |
| unverified | 10 |
| disputed | 1 |

**All 21 are `workflow_status='published'`.** These are separate axes on purpose:
`workflow_status` is editorial readiness, `verification_status` is evidential
standing. Publishing an unverified entry is fine — the UI badges it. Marking an
unchecked entry `verified` would not be.

Verified entries were confirmed against the **Historical Dictionary of
Switzerland (HLS)** plus at least one independent source: the 843 Treaty of
Verdun diocese reassignment, Germanisation of Lower Raetia, Walser settlement,
the Chur fire, Travers 1527, Bifrun 1552/1560, Campell 1562, Lia Rumantscha 1919,
and the 1938 national-language referendum.

### Correction made

**The Chur fire was 27 April 1464, not 1465.** HLS and the City of Chur both give
1464; 17 January 1465 is when the guild constitution was adopted, which English
Wikipedia appears to conflate with the fire. Wikipedia is retained on that entry
with `stance='contradicts'` — the disagreement is part of the record, not
something to quietly drop.

### Still open

- [ ] Pin a single BFS series for the speaker count. Figures in circulation
      (35,095 / ~44,000 / 40,000–60,000 / ~60,000) answer *different survey
      questions* and must not be mixed. Lia Rumantscha gives "60,000 speak
      Romansh, over 100,000 consume/use it".
- [ ] Verify the 91.6% figure for the 1938 referendum — HLS confirms the vote and
      the constitutional articles revised, but not the percentage.
- [ ] Confirm 1996 as the year of official-language status. HLS confirms the
      limited official standing but not the date.
- [ ] Verify Pallioppi (1857) and Carigiet (1858) titles bibliographically.
- [ ] Verify 15 BC, 537, the Bibla da Cuera dates, 1880 and 1885.
- [ ] Reconcile name variants: HLS uses **Johann Travers** and **Ulrich Campell**;
      the Romansh forms are Gian Travers and Durich Chiampel. Entry titles
      currently use the Romansh forms.

### A rule that needs revisiting

Rumantsch Grischun (1982) and the present-day endangerment entry are both
supported by strong sources — Lia Rumantscha and UNESCO respectively — but every
such source is type `web`, so the **≥2-independent-source-types** rule cannot be
satisfied and they stay `unverified`. That rule was designed to triangulate oral
history; applied to well-documented written history it produces odd results.
Worth revisiting in `docs/data-gathering-method.md` — possibly by letting
`reliability_tier` carry weight alongside source-type diversity.

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
