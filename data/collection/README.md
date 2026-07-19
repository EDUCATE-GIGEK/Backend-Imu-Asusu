# data/collection — capture templates

Blank templates for gathering **reliable, well-sourced** history entries, plus the collected sample as it comes in. These map 1:1 to the future database tables, so import will be mechanical once the schema is finalized.

- **Method of record (why + how):** [`Educate-Org/docs/data-gathering-method.md`](https://github.com/EDUCATE-GIGEK/Educate-Org/blob/main/docs/data-gathering-method.md)
- **Data model:** [`Educate-Org/docs/history-model.md`](https://github.com/EDUCATE-GIGEK/Educate-Org/blob/main/docs/history-model.md)

## The two rules (from the first keystroke)

1. **No claim without a source.** Every entry references ≥1 source row.
2. **Contested history is captured, not flattened.** Log disagreements with each side's sources; never assert a citation from memory.

## Files

| File | Fill in a… | Produces rows for |
| --- | --- | --- |
| `entry-template.csv` | spreadsheet | the `entries` table |
| `source-template.csv` | spreadsheet | the `sources` table |
| `lexicon-template.csv` | spreadsheet | the `lexicon` table |
| `interview-guide.md` | interview | drives entry + source rows |

## Field reference

### entry-template.csv
- `entry_id` — assign, e.g. `e-001`.
- `entry_type` — one of the controlled types (see history-model §5): `origin_tradition`, `migration`, `settlement_founding`, `institution`, `figure`, `festival`, `proverb`, `folktale`, `language`, `craft`, `cuisine`, `colonial_encounter`, `modern_identity`, …
- `title`, `summary`, `body`, `significance` — the content (short teachable summary; full text in `body`).
- `period_start`, `period_end` — dates; may be years, decades, or blank if unknown.
- `date_precision` — `year` | `decade` | `century` | `era` | `relative`.
- `is_approximate` — `true`/`false`.
- `era` — `pre-colonial` | `colonial` | `post-independence` | `contemporary`.
- `place`, `people` — the place and/or people group this attaches to.
- `is_endangered`, `is_written` — `true`/`false`.
- `relates_to` — links to other entries, format `relation_type:entry_id`, semicolon-separated. e.g. `commemorates:e-003;founded_by:e-007`.
- `source_ids` — semicolon-separated `source_id`s backing this entry.
- `status` — `draft` | `in_review` | `published`.

### source-template.csv
- `source_id` — assign, e.g. `s-001`.
- `source_type` — `oral_tradition` | `book` | `journal` | `archival` | `interview` | `museum` | `web`.
- `author_or_informant`, `title`, `year`, `citation_or_url`, `reliability_tier`.
- Oral-only: `informant_name`, `role_standing`, `community`, `interview_date`, `location`, `language`, `consent_given` (**required before recording**).

### lexicon-template.csv
- `word`, `pronunciation` (IPA or `audio_file` ref), `meaning`, `example_sentence`, `dialect`, `audio_file`, `source_ids`.

## Verification

A claim becomes `verified` only when **≥2 independent source types** agree (e.g. a scholarly text *and* an elder). One source ⇒ `unverified`. Conflicting accounts ⇒ separate entries marked `disputed`, each with its sources.

## Ethics

Consent and attribution for every oral informant. Mark sacred/restricted knowledge and do **not** publish it. On charged topics, collect all sourced perspectives and take no editorial side.

## Worked example (illustrative — treat as `unverified`)

**entry row**

| entry_id | entry_type | title | date_precision | era | people | relates_to | source_ids | status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| e-001 | origin_tradition | Akalaka descent account | relative | pre-colonial | Ikwerre | — | s-001;s-002 | draft |

**source rows**

| source_id | source_type | author_or_informant | year | consent_given |
| --- | --- | --- | --- | --- |
| s-001 | oral_tradition | (elder, name) | 2026 | yes |
| s-002 | journal | (real citation to be added) | — | — |

Because only one source *type* currently agrees, e-001 stays `unverified` until s-002 is a real, checkable citation.
