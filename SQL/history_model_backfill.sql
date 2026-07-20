-- ============================================================================
-- Educate — History Data Model: Back-fill (old schema -> new schema)
-- ============================================================================
-- Copies the existing rows from the OLD flat schema (Postgres.sql) into the
-- NEW model (history_model_tier1.sql). Run order:
--   1. Postgres.sql            (old tables, populated with the current data)
--   2. history_model_tier1.sql (new core tables)
--   3. history_model_tier2.sql (optional here — this back-fill targets Tier 1)
--   4. THIS FILE
--
-- Design:
--   * PRESERVES the old UUIDs — every old row keeps its id in the new table,
--     so foreign keys carry over without a mapping table. (continents,
--     countries, states, local_governments all merge into `places`; their
--     ids are globally unique, so no collision.)
--   * Idempotent — ON CONFLICT DO NOTHING, safe to re-run.
--   * Migrated entries land as workflow_status = 'in_review' and
--     verification_status = 'unverified': old content has no sources under the
--     new provenance model, so it must be reviewed before being published.
--
-- Scope: the old schema only has geography, ethnic groups/tribes, and
-- cultural_history — so this fills Tier 1 (places, peoples, people_places,
-- entries). There is no old figures/lexicon/media data. The old ethnic_group
-- /tribe `languages[]` arrays are preserved inside peoples.general_info and can
-- be promoted into the Tier-2 `languages`/`lexicon` tables later.
-- ============================================================================

BEGIN;

-- ----------------------------------------------------------------------------
-- 1. Designations used by the back-fill (idempotent)
-- ----------------------------------------------------------------------------
INSERT INTO designations (kind, label, default_rank) VALUES
    ('place',  'Continent',    1),
    ('place',  'Country',      2),
    ('place',  'State',        3),
    ('place',  'LGA',          4),
    ('people', 'Ethnic Group', 1),
    ('people', 'Tribe',        2)
ON CONFLICT (kind, label) DO NOTHING;


-- ----------------------------------------------------------------------------
-- 2. PLACES  (continents -> countries -> states -> LGAs, in parent-first order)
--    parent_id is taken from the old containment FK; ids are preserved.
-- ----------------------------------------------------------------------------
INSERT INTO places (id, parent_id, name, designation_id, level_rank, general_info)
SELECT c.id, NULL, c.name,
       (SELECT id FROM designations WHERE kind='place' AND label='Continent'),
       1, jsonb_build_object('code', c.code, 'color', c.color)
FROM continents c
ON CONFLICT (id) DO NOTHING;

INSERT INTO places (id, parent_id, name, designation_id, level_rank, iso_code, general_info)
SELECT co.id, co.continent_id, co.name,
       (SELECT id FROM designations WHERE kind='place' AND label='Country'),
       2, co.iso_code, to_jsonb(co.general_info)
FROM countries co
ON CONFLICT (id) DO NOTHING;

INSERT INTO places (id, parent_id, name, designation_id, level_rank, general_info)
SELECT s.id, s.country_id, s.name,
       (SELECT id FROM designations WHERE kind='place' AND label='State'),
       3, to_jsonb(s.general_info)
FROM states s
ON CONFLICT (id) DO NOTHING;

INSERT INTO places (id, parent_id, name, designation_id, level_rank, general_info)
SELECT l.id, l.state_id, l.name,
       (SELECT id FROM designations WHERE kind='place' AND label='LGA'),
       4, to_jsonb(l.general_info)
FROM local_governments l
ON CONFLICT (id) DO NOTHING;


-- ----------------------------------------------------------------------------
-- 3. PEOPLES  (ethnic groups first, then tribes whose parent is their group)
--    The old languages[] array is folded into general_info for later use.
-- ----------------------------------------------------------------------------
INSERT INTO peoples (id, parent_id, name, designation_id, general_info)
SELECT eg.id, NULL, eg.name,
       (SELECT id FROM designations WHERE kind='people' AND label='Ethnic Group'),
       COALESCE(to_jsonb(eg.general_info), '{}'::jsonb)
         || jsonb_build_object('languages', to_jsonb(eg.languages))
FROM ethnic_group eg
ON CONFLICT (id) DO NOTHING;

INSERT INTO peoples (id, parent_id, name, designation_id, general_info)
SELECT t.id, t.ethnic_group_id, t.name,
       (SELECT id FROM designations WHERE kind='people' AND label='Tribe'),
       COALESCE(to_jsonb(t.general_info), '{}'::jsonb)
         || jsonb_build_object('languages', to_jsonb(t.languages))
FROM tribe t
ON CONFLICT (id) DO NOTHING;


-- ----------------------------------------------------------------------------
-- 4. PEOPLE_PLACES  (each group's homeland = its most specific old geo FK)
-- ----------------------------------------------------------------------------
INSERT INTO people_places (people_id, place_id, relationship)
SELECT eg.id, COALESCE(eg.local_government_id, eg.state_id, eg.country_id), 'homeland'
FROM ethnic_group eg
WHERE COALESCE(eg.local_government_id, eg.state_id, eg.country_id) IS NOT NULL
ON CONFLICT DO NOTHING;

INSERT INTO people_places (people_id, place_id, relationship)
SELECT t.id, COALESCE(t.local_government_id, t.state_id, t.country_id), 'homeland'
FROM tribe t
WHERE COALESCE(t.local_government_id, t.state_id, t.country_id) IS NOT NULL
ON CONFLICT DO NOTHING;


-- ----------------------------------------------------------------------------
-- 5. ENTRIES  (from cultural_history)
--    * category -> entry_type (best-effort; see note on 'language').
--    * place_id  = most specific old geo FK; people_id = ethnic group or tribe.
--    * the old `entry` composite (origins/eras) is folded into `body`.
--
--    NOTE on 'language': the old 'language' category described the group's
--    language, which is now its OWN entity. There is no exact entry_type, so it
--    is mapped to 'naming_custom' and left in_review — a candidate to be
--    promoted into the Tier-2 `languages`/`lexicon` tables by a curator.
-- ----------------------------------------------------------------------------
INSERT INTO entries (
    id, entry_type, title, summary, body,
    is_endangered, is_written, place_id, people_id,
    verification_status, workflow_status
)
SELECT
    ch.id,
    CASE ch.category
        WHEN 'origin'       THEN 'origin_tradition'
        WHEN 'government'   THEN 'institution'
        WHEN 'architecture' THEN 'architecture'
        WHEN 'religion'     THEN 'cosmology'
        WHEN 'art'          THEN 'craft'
        WHEN 'language'     THEN 'naming_custom'  -- see note above
        ELSE 'event'
    END,
    ch.subject_name,
    ch.subject_description,
    NULLIF(
        trim(BOTH E'\n' FROM
            COALESCE('Origins: '  || (ch.entry).origins, '') ||
            COALESCE(E'\n\nEras: ' || (ch.entry).eras,    '')
        ), ''
    ),
    ch.is_endangered,
    ch.is_written,
    COALESCE(ch.local_government_id, ch.state_id, ch.country_id, ch.continent_id),
    COALESCE(ch.ethnic_group_id, ch.tribe_id),
    'unverified',
    'in_review'
FROM cultural_history ch
ON CONFLICT (id) DO NOTHING;

COMMIT;

-- ============================================================================
-- End of back-fill. Suggested check:
--   SELECT 'places' t, count(*) FROM places
--   UNION ALL SELECT 'peoples', count(*) FROM peoples
--   UNION ALL SELECT 'people_places', count(*) FROM people_places
--   UNION ALL SELECT 'entries', count(*) FROM entries;
-- ============================================================================
