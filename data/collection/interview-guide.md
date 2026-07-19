# Interview Guide

A reusable set of open questions for collecting oral history. **Ask the same questions across multiple informants** — that is what makes triangulation (§4 of the method) possible. Fill the metadata block first; it becomes one row in `source-template.csv`.

> Method of record: `Educate-Org/docs/data-gathering-method.md`.

## Before you start — informant metadata (→ source row)

- `source_id`: (assign, e.g. `s-014`)
- `informant_name`:
- `role_standing`: (e.g. Eze, elder, chief priest, town-union secretary)
- `community`:
- `interview_date`:
- `location`:
- `language`: (language the interview was conducted in)
- `consent_given`: (yes/no — **required before recording**)
- Note any knowledge the informant marks as **restricted / sacred** — do not publish it.

## Question sets by theme

Record the answers as `entry-template.csv` rows; note which `entry_type` each answer maps to.

### Origins & migration
- Where do the people say they came from? Who was the founding ancestor?
- Are there different accounts of the origin? (capture each — they may be `disputed`)
- What clans/communities descend from that origin, and how are they related?

### Governance & social structure
- How were decisions made traditionally? What titles exist (e.g. Eze) and how are they conferred?
- How do age-grades or councils work? What are their roles?

### Belief & cosmology
- What deities, spirits, or shrines are/were central? *(ask what is public vs restricted)*
- What rites of passage mark birth, adulthood, marriage, death?

### Language & oral literature
- Collect proverbs (with literal + figurative meaning) and at least one folktale.
- Collect 15–20 everyday words for the lexicon, with pronunciation.
- Which words/expressions are being lost by younger speakers? *(→ `is_endangered`)*

### Economy & livelihood
- What were the main forms of farming, fishing, trade? What crops/foods are distinctive?
- Which crafts or skills are dying out?

### Festivals & events
- What festivals are celebrated, and what do they commemorate? *(link back to origins/events)*
- What major historical events (conflicts, migrations, the colonial encounter) shaped the community?

## After — for every claim

Assign `source_id`(s) to each entry. A claim with only this one interview behind it stays `unverified` until a second independent source type agrees.
