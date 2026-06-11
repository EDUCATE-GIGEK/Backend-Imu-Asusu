-- ============================================================================
-- Educate — Database Schema
-- ============================================================================
-- Conventions:
--   * Table names: plural, snake_case
--   * Column names: snake_case
--   * Primary keys: UUID via gen_random_uuid() (PostgreSQL 13+, no extension needed)
--   * TIMESTAMPTZ for all timestamps
--
-- Tables are created in dependency order: parent tables before child tables.
-- ============================================================================


-- ----------------------------------------------------------------------------
-- Drop everything in reverse dependency order before recreating.
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS cultural_history      CASCADE;
DROP TABLE IF EXISTS learning_progress     CASCADE;
DROP TABLE IF EXISTS user_interests        CASCADE;
DROP TABLE IF EXISTS user_settings         CASCADE;
DROP TABLE IF EXISTS users                 CASCADE;
DROP TABLE IF EXISTS tribe                 CASCADE;
DROP TABLE IF EXISTS ethnic_group          CASCADE;
DROP TABLE IF EXISTS local_governments     CASCADE;
DROP TABLE IF EXISTS states                CASCADE;
DROP TABLE IF EXISTS countries             CASCADE;
DROP TABLE IF EXISTS continents            CASCADE;
DROP TYPE  IF EXISTS history_entry         CASCADE;
DROP TYPE  IF EXISTS tribe_info            CASCADE;
DROP TYPE  IF EXISTS ethnic_group_info     CASCADE;
DROP TYPE  IF EXISTS local_government_info CASCADE;
DROP TYPE  IF EXISTS state_info            CASCADE;
DROP TYPE  IF EXISTS country_info          CASCADE;


-- ============================================================================
-- 1. GEOGRAPHIC HIERARCHY
-- ============================================================================
-- Strict containment: Continent → Country → State → Local Government.
-- All cultural content anchors to one of these levels.
-- ============================================================================

CREATE TABLE continents (
    id    UUID       PRIMARY KEY DEFAULT gen_random_uuid(),
    code  VARCHAR(2) NOT NULL UNIQUE,
    name  TEXT       NOT NULL,
    color VARCHAR(7) NOT NULL   -- hex color, e.g. #FF5733
);

CREATE TYPE country_info AS (
    countryDescription       TEXT,
    statesCount              INTEGER,
    localGovernmentsCount    INTEGER,
    ethnicGroupsCount        INTEGER,
    endangeredGroupsCount    INTEGER,
    endangeredLanguagesCount VARCHAR(50)
);

CREATE TABLE countries (
    id           UUID       PRIMARY KEY DEFAULT gen_random_uuid(),
    continent_id UUID       NOT NULL REFERENCES continents(id),
    name         TEXT       NOT NULL,
    iso_code     VARCHAR(3) UNIQUE,
    general_info country_info
);

CREATE TYPE state_info AS (
    stateDescription         TEXT,
    localGovernmentsCount    INTEGER,
    ethnicGroupsCount        INTEGER,
    endangeredGroupsCount    INTEGER,
    endangeredLanguagesCount INTEGER
);

CREATE TABLE states (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    country_id   UUID NOT NULL REFERENCES countries(id),
    name         TEXT NOT NULL,
    general_info state_info
);

CREATE TYPE local_government_info AS (
    localGovernmentDescription TEXT,
    ethnicGroupsCount          INTEGER,
    endangeredGroupsCount      INTEGER,
    endangeredLanguagesCount   INTEGER,
    tribesCount                INTEGER
);

CREATE TABLE local_governments (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    state_id     UUID NOT NULL REFERENCES states(id),
    name         TEXT NOT NULL,
    general_info local_government_info
);


-- ============================================================================
-- 2. CULTURAL GROUPS
-- ============================================================================

CREATE TYPE ethnic_group_info AS (
    ethnicGroupDescription TEXT,
    isEndangered           BOOLEAN,
    tribesCount            INTEGER,
    spokenLanguagesCount   INTEGER,
    writtenLanguagesCount  INTEGER
);

CREATE TABLE ethnic_group (
    id                  UUID   PRIMARY KEY DEFAULT gen_random_uuid(),
    country_id          UUID   NOT NULL REFERENCES countries(id),
    state_id            UUID   NOT NULL REFERENCES states(id),
    local_government_id UUID   REFERENCES local_governments(id),
    name                TEXT   NOT NULL,
    languages           TEXT[],
    general_info        ethnic_group_info
);

CREATE TYPE tribe_info AS (
    tribeDescription      TEXT,
    isEndangered          BOOLEAN,
    spokenLanguagesCount  INTEGER,
    writtenLanguagesCount INTEGER
);

CREATE TABLE tribe (
    id                  UUID   PRIMARY KEY DEFAULT gen_random_uuid(),
    country_id          UUID   NOT NULL REFERENCES countries(id),
    state_id            UUID   NOT NULL REFERENCES states(id),
    local_government_id UUID   REFERENCES local_governments(id),
    ethnic_group_id     UUID   REFERENCES ethnic_group(id),
    name                TEXT   NOT NULL,
    languages           TEXT[],
    general_info        tribe_info
);


-- ============================================================================
-- 3. CULTURAL HISTORY
-- ============================================================================
-- A single table covers all history categories. The `category` column
-- identifies which kind of history a row holds.
--
-- category values: 'origin' | 'language' | 'government' |
--                  'architecture' | 'religion' | 'art'
-- ============================================================================

CREATE TYPE history_entry AS (
    origins TEXT,
    eras    TEXT
);

CREATE TABLE cultural_history (
    id                  UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
    category            TEXT    NOT NULL
        CHECK (category IN ('origin', 'language', 'government', 'architecture', 'religion', 'art')),
    subject_name        TEXT    NOT NULL,
    subject_description TEXT,
    is_endangered       BOOLEAN NOT NULL DEFAULT FALSE,
    is_written          BOOLEAN NOT NULL DEFAULT FALSE,
    continent_id        UUID    REFERENCES continents(id),
    country_id          UUID    REFERENCES countries(id),
    state_id            UUID    REFERENCES states(id),
    local_government_id UUID    REFERENCES local_governments(id),
    ethnic_group_id     UUID    REFERENCES ethnic_group(id),
    tribe_id            UUID    REFERENCES tribe(id),
    entry               history_entry
);


-- ============================================================================
-- 4. USERS & SETTINGS
-- ============================================================================

CREATE TABLE users (
    id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    name          TEXT        NOT NULL,
    email         TEXT        NOT NULL UNIQUE,
    google_id     TEXT        UNIQUE,
    home_country  TEXT,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_login_at TIMESTAMPTZ
);

CREATE TABLE user_settings (
    id                    UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id               UUID    NOT NULL UNIQUE REFERENCES users(id),
    preferred_language    TEXT,
    theme                 TEXT,
    notifications_enabled BOOLEAN NOT NULL DEFAULT TRUE
);


-- ============================================================================
-- 5. USER INTERESTS & LEARNING PROGRESS
-- ============================================================================
-- The CHECK constraint enforces that exactly ONE geographic FK is set per row.
-- ============================================================================

CREATE TABLE user_interests (
    id                  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID        NOT NULL REFERENCES users(id),
    continent_id        UUID        REFERENCES continents(id),
    country_id          UUID        REFERENCES countries(id),
    state_id            UUID        REFERENCES states(id),
    local_government_id UUID        REFERENCES local_governments(id),
    added_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CHECK (
        (continent_id        IS NOT NULL)::int +
        (country_id          IS NOT NULL)::int +
        (state_id            IS NOT NULL)::int +
        (local_government_id IS NOT NULL)::int
        = 1
    )
);

CREATE TABLE learning_progress (
    id                  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID        NOT NULL REFERENCES users(id),
    continent_id        UUID        REFERENCES continents(id),
    country_id          UUID        REFERENCES countries(id),
    state_id            UUID        REFERENCES states(id),
    local_government_id UUID        REFERENCES local_governments(id),
    viewed              BOOLEAN     NOT NULL DEFAULT FALSE,
    last_viewed_at      TIMESTAMPTZ,
    CHECK (
        (continent_id        IS NOT NULL)::int +
        (country_id          IS NOT NULL)::int +
        (state_id            IS NOT NULL)::int +
        (local_government_id IS NOT NULL)::int
        = 1
    )
);


-- ============================================================================
-- FUTURE WORK
-- ============================================================================

-- CREATE TABLE industries (
--     id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--     name        TEXT NOT NULL,
--     type        TEXT NOT NULL,
--     description TEXT,
--     CHECK (type IN ('academic', 'fashion', 'music', 'tech', 'agriculture',
--                     'manufacturing', 'media', 'finance', 'other'))
-- );

-- CREATE TABLE industry_presence (
--     id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--     industry_id         UUID NOT NULL REFERENCES industries(id),
--     continent_id        UUID REFERENCES continents(id),
--     country_id          UUID REFERENCES countries(id),
--     state_id            UUID REFERENCES states(id),
--     local_government_id UUID REFERENCES local_governments(id),
--     history             TEXT,
--     CHECK (
--         (continent_id        IS NOT NULL)::int +
--         (country_id          IS NOT NULL)::int +
--         (state_id            IS NOT NULL)::int +
--         (local_government_id IS NOT NULL)::int
--         = 1
--     )
-- );

-- CREATE TABLE academic_institutions (
--     id                UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
--     state_id          UUID    NOT NULL REFERENCES states(id),
--     name              TEXT    NOT NULL,
--     founded_year      INTEGER,
--     short_description TEXT
-- );

-- CREATE TABLE prominent_people (
--     id                        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--     name                      TEXT NOT NULL,
--     bio                       TEXT,
--     birth_date                DATE,
--     death_date                DATE,
--     birth_continent_id        UUID REFERENCES continents(id),
--     birth_country_id          UUID REFERENCES countries(id),
--     birth_state_id            UUID REFERENCES states(id),
--     birth_local_government_id UUID REFERENCES local_governments(id),
--     CHECK (
--         (birth_continent_id        IS NOT NULL)::int +
--         (birth_country_id          IS NOT NULL)::int +
--         (birth_state_id            IS NOT NULL)::int +
--         (birth_local_government_id IS NOT NULL)::int
--         = 1
--     )
-- );

-- CREATE TABLE awards (
--     id        UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
--     person_id UUID    NOT NULL REFERENCES prominent_people(id),
--     name      TEXT    NOT NULL,
--     year      INTEGER
-- );
