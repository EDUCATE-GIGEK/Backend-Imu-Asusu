-- ============================================================================
-- Educate — History Data Model (Tier 2)
-- ============================================================================
-- The "rich culture" layer of the history model. Implements Tier 2 of the spec:
--   Educate-Org/docs/history-model.md  (§9 — validated final entity list)
--
-- DEPENDS ON Tier 1: run SQL/history_model_tier1.sql FIRST. This file adds
-- foreign keys into entries, sources, and peoples (all created in Tier 1).
--
-- Tables (10): the 8 from §9 plus the two provenance joins §9 footnotes so
-- figures and lexicon are sourced with the same discipline as entries:
--   people  : figures, figure_relationships, entry_figures
--   language: languages, dialects, lexicon
--   media   : media, entry_media
--   sourcing: figure_sources, lexicon_sources
--
-- Conventions match Tier 1 / Postgres.sql: UUID PKs via gen_random_uuid(),
-- plural snake_case, TIMESTAMPTZ, JSONB general_info, heavy comments. Small
-- stable vocabularies use CHECK constraints.
-- ============================================================================


-- ----------------------------------------------------------------------------
-- Drop this tier's tables in reverse dependency order (idempotent re-run).
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS lexicon_sources      CASCADE;
DROP TABLE IF EXISTS figure_sources       CASCADE;
DROP TABLE IF EXISTS entry_media          CASCADE;
DROP TABLE IF EXISTS entry_figures        CASCADE;
DROP TABLE IF EXISTS figure_relationships CASCADE;
DROP TABLE IF EXISTS figures              CASCADE;
DROP TABLE IF EXISTS lexicon              CASCADE;
DROP TABLE IF EXISTS dialects             CASCADE;
DROP TABLE IF EXISTS languages            CASCADE;
DROP TABLE IF EXISTS media                CASCADE;


-- ============================================================================
-- 1. MEDIA
-- ============================================================================
-- Images, audio (pronunciation, music, oral recordings), video, maps, docs.
-- Created before lexicon because a lexicon word may point at an audio clip.
--   source_id  provenance of the media asset itself (photographer, archive…)
-- ============================================================================
CREATE TABLE media (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    media_type    TEXT NOT NULL CHECK (media_type IN
                  ('image', 'audio', 'video', 'map', 'document')),
    url           TEXT NOT NULL,
    caption       TEXT,
    source_id     UUID REFERENCES sources(id),
    is_restricted BOOLEAN NOT NULL DEFAULT FALSE,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);


-- ============================================================================
-- 2. LANGUAGES
-- ============================================================================
-- A language as a first-class entity (the Ikwerre language is under pressure,
-- so it deserves more than a text[] column).
--   classification       family/branch, e.g. "Igboid"
--   endangerment_status  UNESCO-style scale
--   people_id            the group whose language this is
-- ============================================================================
CREATE TABLE languages (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name                TEXT NOT NULL,
    iso_code            TEXT,   -- ISO 639-3
    classification      TEXT,
    endangerment_status TEXT CHECK (endangerment_status IN
                        ('safe', 'vulnerable', 'definitely_endangered',
                         'severely_endangered', 'critically_endangered', 'extinct')),
    people_id           UUID REFERENCES peoples(id),
    general_info        JSONB,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_languages_people_id ON languages(people_id);


-- ============================================================================
-- 3. DIALECTS
-- ============================================================================
CREATE TABLE dialects (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    language_id UUID NOT NULL REFERENCES languages(id) ON DELETE CASCADE,
    name        TEXT NOT NULL,
    region_note TEXT,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_dialects_language_id ON dialects(language_id);


-- ============================================================================
-- 4. LEXICON
-- ============================================================================
-- Words with meaning and (crucially) a pronunciation audio clip. This is the
-- language-preservation front line.
--   dialect_id      optional — which dialect the form belongs to
--   audio_media_id  a pronunciation recording in `media`
-- ============================================================================
CREATE TABLE lexicon (
    id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    language_id      UUID NOT NULL REFERENCES languages(id) ON DELETE CASCADE,
    dialect_id       UUID REFERENCES dialects(id),
    word             TEXT NOT NULL,
    pronunciation    TEXT,   -- IPA or descriptive note
    meaning          TEXT NOT NULL,
    example_sentence TEXT,
    audio_media_id   UUID REFERENCES media(id),
    created_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_lexicon_language_id ON lexicon(language_id);


-- ============================================================================
-- 5. FIGURES  (people as their own entity — not an entry_type)
-- ============================================================================
-- Persons: an Eze, a founder, a warrior, a priest. Lifespans are usually
-- fuzzy, so birth/death are free-text notes, not dates.
-- ============================================================================
CREATE TABLE figures (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name          TEXT NOT NULL,
    role          TEXT,
    people_id     UUID REFERENCES peoples(id),
    birth_note    TEXT,   -- e.g. "~1850", "unknown"
    death_note    TEXT,
    is_restricted BOOLEAN NOT NULL DEFAULT FALSE,
    general_info  JSONB,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_figures_people_id ON figures(people_id);


-- ============================================================================
-- 6. FIGURE_RELATIONSHIPS  (figure <-> figure: genealogy & succession)
-- ============================================================================
-- Directional: from_figure -> to_figure, e.g. A --parent_of--> B,
-- Eze X --succeeded_by--> Eze Y.
-- ============================================================================
CREATE TABLE figure_relationships (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    from_figure_id UUID NOT NULL REFERENCES figures(id) ON DELETE CASCADE,
    to_figure_id   UUID NOT NULL REFERENCES figures(id) ON DELETE CASCADE,
    relation_type  TEXT NOT NULL CHECK (relation_type IN
                   ('parent_of', 'succeeded_by', 'married', 'sibling_of')),
    note           TEXT,
    CHECK (from_figure_id <> to_figure_id),
    UNIQUE (from_figure_id, to_figure_id, relation_type)
);

CREATE INDEX idx_figure_rel_from ON figure_relationships(from_figure_id);
CREATE INDEX idx_figure_rel_to   ON figure_relationships(to_figure_id);


-- ============================================================================
-- 7. ENTRY_FIGURES  (link entries to the people in them)
-- ============================================================================
-- e.g. a settlement_founding entry --founded_by--> a figure; a festival entry
-- --about--> the Eze who instituted it. `role` says how the figure relates to
-- the entry (this is where `founded_by` lives — it is entry<->figure, not
-- entry<->entry).
-- ============================================================================
CREATE TABLE entry_figures (
    entry_id  UUID NOT NULL REFERENCES entries(id)  ON DELETE CASCADE,
    figure_id UUID NOT NULL REFERENCES figures(id)  ON DELETE CASCADE,
    role      TEXT NOT NULL CHECK (role IN
              ('founded_by', 'led_by', 'about', 'mentions', 'attributed_to')),
    PRIMARY KEY (entry_id, figure_id, role)
);

CREATE INDEX idx_entry_figures_figure_id ON entry_figures(figure_id);


-- ============================================================================
-- 8. ENTRY_MEDIA  (attach media to entries)
-- ============================================================================
CREATE TABLE entry_media (
    entry_id UUID NOT NULL REFERENCES entries(id) ON DELETE CASCADE,
    media_id UUID NOT NULL REFERENCES media(id)   ON DELETE CASCADE,
    caption  TEXT,
    PRIMARY KEY (entry_id, media_id)
);

CREATE INDEX idx_entry_media_media_id ON entry_media(media_id);


-- ============================================================================
-- 9. FIGURE_SOURCES  (provenance for figures — same pattern as entry_sources)
-- ============================================================================
CREATE TABLE figure_sources (
    figure_id  UUID NOT NULL REFERENCES figures(id) ON DELETE CASCADE,
    source_id  UUID NOT NULL REFERENCES sources(id) ON DELETE CASCADE,
    stance     TEXT CHECK (stance IN ('supports', 'contradicts', 'mentions')),
    confidence TEXT CHECK (confidence IN ('low', 'medium', 'high')),
    reviewer   TEXT,
    note       TEXT,
    PRIMARY KEY (figure_id, source_id)
);


-- ============================================================================
-- 10. LEXICON_SOURCES  (provenance for lexicon entries)
-- ============================================================================
CREATE TABLE lexicon_sources (
    lexicon_id UUID NOT NULL REFERENCES lexicon(id) ON DELETE CASCADE,
    source_id  UUID NOT NULL REFERENCES sources(id) ON DELETE CASCADE,
    stance     TEXT CHECK (stance IN ('supports', 'contradicts', 'mentions')),
    confidence TEXT CHECK (confidence IN ('low', 'medium', 'high')),
    reviewer   TEXT,
    note       TEXT,
    PRIMARY KEY (lexicon_id, source_id)
);

-- ============================================================================
-- End of Tier 2.
-- ============================================================================
