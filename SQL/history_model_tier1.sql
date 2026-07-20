-- ============================================================================
-- Educate — History Data Model (Tier 1)
-- ============================================================================
-- The validated core of the new history model. Implements Tier 1 of the spec:
--   Educate-Org/docs/history-model.md  (§9 — validated final entity list)
--
-- Tier 1 is the 8 tables that, on their own, deliver a working experience:
-- collect a people group's knowledge, connect the pieces, and source them.
-- (Tier 2 — figures, languages, lexicon, media — comes in a later file.)
--
-- Conventions (match SQL/Postgres.sql):
--   * Table names: plural, snake_case
--   * Column names: snake_case
--   * Primary keys: UUID via gen_random_uuid() (PostgreSQL 13+, no extension)
--   * TIMESTAMPTZ for all timestamps
--   * general_info is JSONB here (not a composite TYPE) so it can vary freely
--     by culture / designation — the whole point of the generalized model.
--
-- This model REPLACES the old flat geo/ethnic/history tables (continents,
-- countries, states, local_governments, ethnic_group, tribe, cultural_history)
-- from Postgres.sql. It is written as a standalone, re-runnable build script;
-- migrating/back-filling the existing rows is a separate step.
--
-- Two controlled-vocabulary strategies (a deliberate line):
--   * LOOKUP TABLE for things that vary by country/culture and should be
--     extendable by contributors without code — currently: designations.
--   * CHECK constraint for small, stable, developer-owned vocabularies
--     (statuses, eras, relation types).
-- ============================================================================


-- ----------------------------------------------------------------------------
-- Drop this model's tables in reverse dependency order (idempotent re-run).
-- Does NOT touch the old Postgres.sql tables.
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS entry_sources       CASCADE;
DROP TABLE IF EXISTS sources             CASCADE;
DROP TABLE IF EXISTS entry_relationships CASCADE;
DROP TABLE IF EXISTS entries             CASCADE;
DROP TABLE IF EXISTS people_places       CASCADE;
DROP TABLE IF EXISTS peoples             CASCADE;
DROP TABLE IF EXISTS places              CASCADE;
DROP TABLE IF EXISTS designations        CASCADE;


-- ============================================================================
-- 1. DESIGNATIONS  (lookup)
-- ============================================================================
-- The "level label" for a node in the places or peoples tree — e.g. a place
-- may be a Country / State / Province / LGA / Village; a people may be an
-- Ethnic Group / Clan / Community. A lookup table (not an enum) so a new
-- country's vocabulary can be added as DATA by a contributor, no migration.
--   kind          which tree this label belongs to: 'place' or 'people'
--   default_rank  optional ordering hint (lower = higher in the hierarchy)
-- ============================================================================
CREATE TABLE designations (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    kind         TEXT NOT NULL CHECK (kind IN ('place', 'people')),
    label        TEXT NOT NULL,
    default_rank INTEGER,
    UNIQUE (kind, label)
);


-- ============================================================================
-- 2. PLACES  (recursive geography — replaces continents/countries/states/LGAs)
-- ============================================================================
-- One self-nesting tree of arbitrary depth. The level is a designation label,
-- so any country's administrative structure fits without new tables.
--   parent_id       the containing place (NULL at the top, e.g. a continent)
--   designation_id  must reference a designation with kind = 'place'
--                   (enforced by curation; a plain FK can't check the kind)
--   level_rank      optional depth/ordering hint
--   iso_code        for countries; NULL otherwise
-- ============================================================================
CREATE TABLE places (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_id      UUID REFERENCES places(id),
    name           TEXT NOT NULL,
    designation_id UUID NOT NULL REFERENCES designations(id),
    level_rank     INTEGER,
    iso_code       TEXT,
    general_info   JSONB,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_places_parent_id ON places(parent_id);  -- tree traversal


-- ============================================================================
-- 3. PEOPLES  (recursive people groups — replaces ethnic_group / tribe)
-- ============================================================================
-- The second self-nesting tree: e.g. Ikwerre (Ethnic Group) -> Clan ->
-- Community -> Lineage. Kept SEPARATE from places because a people rarely
-- maps 1:1 to a place (see people_places).
--   designation_id  must reference a designation with kind = 'people'
-- ============================================================================
CREATE TABLE peoples (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_id      UUID REFERENCES peoples(id),
    name           TEXT NOT NULL,
    designation_id UUID NOT NULL REFERENCES designations(id),
    general_info   JSONB,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_peoples_parent_id ON peoples(parent_id);  -- tree traversal


-- ============================================================================
-- 4. PEOPLE_PLACES  (many-to-many)
-- ============================================================================
-- A people group spans one or more places (Ikwerre across several LGAs; a
-- diaspora across countries). This is what a single merged tree could not do.
--   relationship  how the people relates to the place
-- ============================================================================
CREATE TABLE people_places (
    people_id    UUID NOT NULL REFERENCES peoples(id) ON DELETE CASCADE,
    place_id     UUID NOT NULL REFERENCES places(id)  ON DELETE CASCADE,
    relationship TEXT NOT NULL DEFAULT 'homeland'
                 CHECK (relationship IN ('homeland', 'diaspora', 'historical')),
    PRIMARY KEY (people_id, place_id, relationship)
);


-- ============================================================================
-- 5. ENTRIES  (the unit of knowledge — replaces cultural_history)
-- ============================================================================
-- One typed, time-anchored, sourced fact/topic about a people and/or place.
--
-- BELONGING vs CONNECTING (see spec §3.1):
--   * To assemble "all of Ikwerre's history": filter by people_id (and its
--     descendant clans) and/or place_id. That is what gathers a group's set.
--   * To show how entries relate to each other: see entry_relationships.
--
--   entry_type           the "best-aspect" lens (CHECK list below)
--   period_start/_end    approximate year (INTEGER), NULL when unknown
--   date_precision       granularity of the dates
--   period_note          free text for relative dating, e.g. "~4 generations"
--   is_restricted        collected but NOT for public display (sacred/secret)
--   verification_status  epistemic state of the CLAIM (rollup shown in the UI)
--   workflow_status      editorial pipeline state (separate concern)
-- ============================================================================
CREATE TABLE entries (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    entry_type     TEXT NOT NULL CHECK (entry_type IN (
        'origin_tradition', 'migration', 'settlement_founding', 'institution',
        'deity_spirit', 'shrine_site', 'cosmology', 'festival', 'rite_of_passage',
        'masquerade', 'proverb', 'folktale', 'praise_name', 'naming_custom',
        'craft', 'architecture', 'attire', 'cuisine', 'music_dance', 'economy',
        'agriculture', 'trade_route', 'marriage_custom', 'kinship', 'event',
        'conflict', 'alliance', 'colonial_encounter', 'modern_identity', 'diaspora'
    )),

    title          TEXT NOT NULL,
    summary        TEXT,
    body           TEXT,
    significance   TEXT,

    -- Time (all nullable; oral tradition is often only relatively datable)
    period_start   INTEGER,   -- approximate year
    period_end     INTEGER,   -- approximate year
    date_precision TEXT CHECK (date_precision IN
                   ('year', 'decade', 'century', 'era', 'relative')),
    is_approximate BOOLEAN NOT NULL DEFAULT TRUE,
    period_note    TEXT,
    era            TEXT CHECK (era IN
                   ('pre-colonial', 'colonial', 'post-independence', 'contemporary')),

    -- Belonging: the two trees (both optional — an entry may be about a place,
    -- a people, or both)
    place_id       UUID REFERENCES places(id),
    people_id      UUID REFERENCES peoples(id),

    is_endangered  BOOLEAN NOT NULL DEFAULT FALSE,
    is_written     BOOLEAN,
    is_restricted  BOOLEAN NOT NULL DEFAULT FALSE,

    verification_status TEXT NOT NULL DEFAULT 'unverified'
                        CHECK (verification_status IN
                        ('unverified', 'verified', 'disputed')),
    workflow_status     TEXT NOT NULL DEFAULT 'draft'
                        CHECK (workflow_status IN
                        ('draft', 'in_review', 'published')),

    created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_entries_people_id ON entries(people_id);  -- the core "collect a group" query
CREATE INDEX idx_entries_place_id  ON entries(place_id);
CREATE INDEX idx_entries_type      ON entries(entry_type);


-- ============================================================================
-- 6. ENTRY_RELATIONSHIPS  (the entry <-> entry graph)
-- ============================================================================
-- The connective tissue that powers timeline threads and the knowledge graph,
-- e.g. migration --caused--> settlement --commemorated_by--> festival.
-- Directional: from_entry -> to_entry. Relationships that involve a PERSON
-- live in Tier 2 (entry_figures / figure_relationships), not here.
-- ============================================================================
CREATE TABLE entry_relationships (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    from_entry_id UUID NOT NULL REFERENCES entries(id) ON DELETE CASCADE,
    to_entry_id   UUID NOT NULL REFERENCES entries(id) ON DELETE CASCADE,
    relation_type TEXT NOT NULL CHECK (relation_type IN (
        'caused', 'followed_by', 'part_of', 'commemorates',
        'contradicts',   -- for competing / disputed accounts
        'derived_from', 'related_to'
    )),
    note          TEXT,
    CHECK (from_entry_id <> to_entry_id),
    UNIQUE (from_entry_id, to_entry_id, relation_type)
);

CREATE INDEX idx_entry_rel_from ON entry_relationships(from_entry_id);
CREATE INDEX idx_entry_rel_to   ON entry_relationships(to_entry_id);


-- ============================================================================
-- 7. SOURCES  (provenance records)
-- ============================================================================
-- Where a claim comes from. Oral-history rows carry extra fields; consent is
-- required before recording an informant (see the data-gathering method).
-- ============================================================================
CREATE TABLE sources (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_type         TEXT NOT NULL CHECK (source_type IN
                        ('oral_tradition', 'book', 'journal', 'archival',
                         'interview', 'museum', 'web')),
    author_or_informant TEXT,
    title               TEXT,
    year                INTEGER,
    citation_or_url     TEXT,
    reliability_tier    TEXT,

    -- Oral-source metadata (NULL for written sources)
    informant_name      TEXT,
    role_standing       TEXT,
    community           TEXT,
    interview_date      DATE,
    location            TEXT,
    language            TEXT,
    consent_given       BOOLEAN,

    is_restricted       BOOLEAN NOT NULL DEFAULT FALSE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);


-- ============================================================================
-- 8. ENTRY_SOURCES  (many-to-many: which sources back which entries)
-- ============================================================================
-- The heart of reliability. One entry can cite many sources; one source can
-- back many entries. A claim becomes verified only when independent source
-- TYPES agree — that rollup lives on entries.verification_status; this table
-- records what EACH source says (stance) and how strongly (confidence).
--   stance      does this source support or contradict the claim
--   confidence  how strongly this source backs it
-- ============================================================================
CREATE TABLE entry_sources (
    entry_id   UUID NOT NULL REFERENCES entries(id)  ON DELETE CASCADE,
    source_id  UUID NOT NULL REFERENCES sources(id)  ON DELETE CASCADE,
    stance     TEXT CHECK (stance IN ('supports', 'contradicts', 'mentions')),
    confidence TEXT CHECK (confidence IN ('low', 'medium', 'high')),
    reviewer   TEXT,
    note       TEXT,
    PRIMARY KEY (entry_id, source_id)
);

-- ============================================================================
-- End of Tier 1.
-- ============================================================================
