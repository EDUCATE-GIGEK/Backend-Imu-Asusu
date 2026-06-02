-- ============================================================================
-- Educate -- Database Schema
-- ============================================================================
-- This file creates every table in the Educate database. It is the SQL
-- translation of the six class diagrams in `UML diagrams/structural/`.
--
-- Conventions used throughout:
--
--   * Table names are plural, snake_case (e.g. `countries`).
--   * Column names are snake_case (e.g. `continent_id`), even though the UML
--     used camelCase. Both refer to the same field.
--   * Primary keys are UUIDs, generated with the built-in `gen_random_uuid()`
--     (PostgreSQL 13+; no extension needed).
--   * `TIMESTAMPTZ` is used for timestamps so the database stores time zone
--     information alongside the value.
--
-- The "four-FK CHECK" pattern appears on every table that can attach to any
-- level of the geographic hierarchy. It enforces that EXACTLY ONE of the
-- columns `continent_id`, `country_id`, `state_id`, `local_government_id`
-- is non-null for a given row, using a CHECK constraint.
--
-- Tables are created in dependency order: a table that REFERENCES another
-- must come after the table it references.
-- ============================================================================


-- ----------------------------------------------------------------------------
-- Optional: clean slate. Drop everything in REVERSE dependency order so we
-- never try to drop a parent table while a child still references it.
-- `CASCADE` removes dependent objects (e.g. foreign keys) automatically.
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS architecture_history      CASCADE;
DROP TABLE IF EXISTS art_history              CASCADE;
DROP TABLE IF EXISTS government_history       CASCADE;
DROP TABLE IF EXISTS religious_history        CASCADE;
DROP TABLE IF EXISTS language_history         CASCADE;
DROP TABLE IF EXISTS ethnic_group_cultural_practices CASCADE;
DROP TABLE IF EXISTS cultural_practices       CASCADE;
DROP TABLE IF EXISTS ethnic_group_religions   CASCADE;
DROP TABLE IF EXISTS ethnic_group_presence    CASCADE;
DROP TABLE IF EXISTS ethnic_groups            CASCADE;
DROP TABLE IF EXISTS learning_progress         CASCADE;
DROP TABLE IF EXISTS user_interests            CASCADE;
DROP TABLE IF EXISTS awards                    CASCADE;
DROP TABLE IF EXISTS prominent_people          CASCADE;
DROP TABLE IF EXISTS academic_institutions     CASCADE;
DROP TABLE IF EXISTS historical_event_presence CASCADE;
DROP TABLE IF EXISTS historical_events         CASCADE;
DROP TABLE IF EXISTS historical_eras           CASCADE;
DROP TABLE IF EXISTS industry_presence         CASCADE;
DROP TABLE IF EXISTS religion_presence         CASCADE;
DROP TABLE IF EXISTS language_presence         CASCADE;
DROP TABLE IF EXISTS tribe_presence            CASCADE;
DROP TABLE IF EXISTS industries                CASCADE;
DROP TABLE IF EXISTS religions                 CASCADE;
DROP TABLE IF EXISTS languages                 CASCADE;
DROP TABLE IF EXISTS tribes                    CASCADE;
DROP TABLE IF EXISTS user_settings             CASCADE;
DROP TABLE IF EXISTS users                     CASCADE;
DROP TYPE IF EXISTS local_government_info             CASCADE;
DROP TABLE IF EXISTS local_governments         CASCADE;
DROP TYPE IF EXISTS state_info             CASCADE;
DROP TABLE IF EXISTS states                    CASCADE;
DROP TYPE IF EXISTS country_info             CASCADE;
DROP TABLE IF EXISTS countries                 CASCADE;
DROP TABLE IF EXISTS continents                CASCADE;


-- ============================================================================
-- 1. GEOGRAPHIC HIERARCHY
-- ============================================================================
-- The strict containment hierarchy: Continent -> Country -> State -> LG.
-- All cultural, historical, and people content ultimately anchors to one
-- of these levels.
-- ============================================================================

-- Continents: top level. Expected to be seeded with the seven continents
-- using the two-letter codes shown on the world-map screen
-- (AF, AS, EU, NA, SA, AN, OA).
CREATE TABLE continents (
    id                 UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    code               VARCHAR(2)  NOT NULL UNIQUE,
    name               TEXT        NOT NULL,
    color              VARCHAR(7)  NOT NULL, -- hex code for continent color (e.g. #FF5733)
    
);


-- Create the composite type (use TEXT instead of VARCHAR2)
CREATE TYPE country_info AS (
    countryDescription         TEXT,
    statesCount                INTEGER,
    localGovernmentsCount      INTEGER,
    ethnicGroupsCount          INTEGER,
    endangeredGroupsCount      INTEGER,
    endangeredLanguagesCount   VARCHAR(50) -- Fixed: Removed trailing comma
);

-- Create your table natively
CREATE TABLE countries (
    id                 UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    continent_id       UUID        NOT NULL REFERENCES continents(id),
    name               TEXT        NOT NULL,
    iso_code           VARCHAR(3)  UNIQUE,
    general_info       country_info
);


CREATE TYPE state_info AS (
    stateDescription         TEXT,
    localGovernmentsCount      INTEGER,
    ethnicGroupsCount          INTEGER,
    endangeredGroupsCount      INTEGER,
    endangeredLanguagesCount   INTEGER, 
);

-- States (or provinces): each state belongs to one country.
CREATE TABLE states (
    id                 UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
    country_id         UUID  NOT NULL REFERENCES countries(id),
    general_info       state_info,
);


CREATE TYPE local_government_info AS (
    localGovernmentDescription TEXT,
    ethnicGroupsCount          INTEGER,
    endangeredGroupsCount      INTEGER,
    endangeredLanguagesCount   INTEGER, 
    tribesCount                INTEGER
);

-- Local governments: each LG belongs to one state.
CREATE TABLE local_governments (
    id        UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
    state_id  UUID  NOT NULL REFERENCES states(id),
    general_info  local_government_info
);


CREATE TYPE ethnic_group_info AS (
    ethnicGroupDescription TEXT,
    endangeredGroupsCount      INTEGER,
    endangeredLanguagesCount   INTEGER,
    tribesCount                INTEGER,
    spokenLanguagesCount        INTEGER
);

-- Local governments: each LG belongs to one state.
CREATE TABLE ethnic_group (
    id        UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
    country_id  UUID  NOT NULL REFERENCES countries(id),
    state_id  UUID  NOT NULL REFERENCES states(id),
    local_government_id   UUID  REFERENCES local_governments(id),
    general_info  ethnic_group_info
);

CREATE TYPE tribe_info AS (
    tribeDescription TEXT,
    isEndangered      BOOLEAN,
    spokenLanguagesCount        INTEGER
);

-- Local governments: each LG belongs to one state.
CREATE TABLE tribe (
    id        UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
    country_id  UUID  NOT NULL REFERENCES countries(id),
    state_id  UUID  NOT NULL REFERENCES states(id),
    local_government_id   UUID  REFERENCES local_governments(id),
    ethnic_group_id       UUID  REFERENCES ethnic_group(id), -- optional FK to link a tribe to its
    general_info  tribe_info
);


-- ============================================================================
-- 3. CULTURAL ATTRIBUTES -- catalogue tables
-- ============================================================================
-- A "catalogue" table is a single canonical list. For example, "Yoruba"
-- exists ONCE in the `tribes` table, and is then referenced by many
-- `tribe_presence` rows describing where Yoruba people live and what its
-- history is in each of those places.
-- ============================================================================


CREATE TABLE languages (
    id          UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
    name        TEXT  NOT NULL,
    description TEXT
);

CREATE TABLE religions (
    id          UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
    name        TEXT  NOT NULL,
    description TEXT
);




-- ============================================================================
-- 5. HISTORICAL CONTENT
-- ============================================================================
-- Same catalogue + presence shape as cultural attributes. An event lives once
-- in `historical_events`, and is described at each geographic level via
-- `historical_event_presence`.
-- ============================================================================

-- An era groups events (Pre-Colonization, Post-Independence, ...).
CREATE TABLE historical_eras (
    id          UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
    name        TEXT  NOT NULL,
    description TEXT
);

-- The event catalogue. `type` distinguishes wars, policies, cultural practices,
-- and generic events; `start_date` / `end_date` support both single-day and
-- multi-day events; `category` is optional metadata mostly used by
-- cultural-practice rows (e.g. "food", "ritual", "dress").
CREATE TABLE historical_events (
    id           UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
    era_id       UUID  NOT NULL REFERENCES historical_eras(id),
    type         TEXT  NOT NULL,
    title        TEXT  NOT NULL,
    start_date   DATE,
    end_date     DATE,
    category     TEXT,
    description  TEXT,
    CHECK (type IN ('war', 'policy', 'cultural_practice', 'general'))
);

CREATE TABLE historical_event_presence (
    id                    UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
    event_id              UUID  NOT NULL REFERENCES historical_events(id),
    continent_id          UUID  REFERENCES continents(id),
    country_id            UUID  REFERENCES countries(id),
    state_id              UUID  REFERENCES states(id),
    local_government_id   UUID  REFERENCES local_governments(id),
    history               TEXT,
    CHECK (
        (continent_id        IS NOT NULL)::int +
        (country_id          IS NOT NULL)::int +
        (state_id            IS NOT NULL)::int +
        (local_government_id IS NOT NULL)::int
        = 1
    )
);


-- ============================================================================
-- 8. ETHNIC GROUPS
-- ============================================================================
-- Sourced from ethnicGroupData.js and groupsData.js.
-- An ethnic group is a named cultural community. The detail rows in
-- groupsData.js carry a free-text location description, a list of
-- religion names, and a list of cultural practice strings — each of
-- which maps to a child table below.
-- ============================================================================

-- One row per distinct ethnic group (Yoruba, Quechua, Ainu, …).
CREATE TABLE ethnic_groups (
    id          UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
    name        TEXT  NOT NULL,
    description TEXT,
    location    TEXT  -- free-text geographic summary (e.g. "Southwestern Nigeria")
);

-- Links an ethnic group to ONE geographic level (four-FK CHECK pattern).
-- is_endangered reflects the endangeredGroups[] lists in countriesData.js.
CREATE TABLE ethnic_group_presence (
    id                    UUID     PRIMARY KEY DEFAULT gen_random_uuid(),
    ethnic_group_id       UUID     NOT NULL REFERENCES ethnic_groups(id),
    continent_id          UUID     REFERENCES continents(id),
    country_id            UUID     REFERENCES countries(id),
    state_id              UUID     REFERENCES states(id),
    local_government_id   UUID     REFERENCES local_governments(id),
    is_endangered         BOOLEAN  NOT NULL DEFAULT FALSE,
    CHECK (
        (continent_id        IS NOT NULL)::int +
        (country_id          IS NOT NULL)::int +
        (state_id            IS NOT NULL)::int +
        (local_government_id IS NOT NULL)::int
        = 1
    )
);


-- ============================================================================
-- 9. DOMAIN-SPECIFIC HISTORY
-- ============================================================================
-- Each table stores narrative history content for one cultural domain
-- (language, religion, government, art, architecture) anchored to ONE
-- geographic level via the four-FK CHECK pattern.
-- Sourced from: languageHistoryData.js, religiousHistoryData.js,
--               governmentHistoryData.js, artHistoryData.js,
--               architectureHstoryData.js.
-- ============================================================================

CREATE TABLE language_history (
    id                    UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
    continent_id          UUID  REFERENCES continents(id),
    country_id            UUID  REFERENCES countries(id),
    state_id              UUID  REFERENCES states(id),
    local_government_id   UUID  REFERENCES local_governments(id),
    content               TEXT,
    CHECK (
        (continent_id        IS NOT NULL)::int +
        (country_id          IS NOT NULL)::int +
        (state_id            IS NOT NULL)::int +
        (local_government_id IS NOT NULL)::int
        = 1
    )
);

CREATE TABLE religious_history (
    id                    UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
    continent_id          UUID  REFERENCES continents(id),
    country_id            UUID  REFERENCES countries(id),
    state_id              UUID  REFERENCES states(id),
    local_government_id   UUID  REFERENCES local_governments(id),
    content               TEXT,
    CHECK (
        (continent_id        IS NOT NULL)::int +
        (country_id          IS NOT NULL)::int +
        (state_id            IS NOT NULL)::int +
        (local_government_id IS NOT NULL)::int
        = 1
    )
);

CREATE TABLE government_history (
    id                    UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
    continent_id          UUID  REFERENCES continents(id),
    country_id            UUID  REFERENCES countries(id),
    state_id              UUID  REFERENCES states(id),
    local_government_id   UUID  REFERENCES local_governments(id),
    content               TEXT,
    CHECK (
        (continent_id        IS NOT NULL)::int +
        (country_id          IS NOT NULL)::int +
        (state_id            IS NOT NULL)::int +
        (local_government_id IS NOT NULL)::int
        = 1
    )
);

CREATE TABLE art_history (
    id                    UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
    continent_id          UUID  REFERENCES continents(id),
    country_id            UUID  REFERENCES countries(id),
    state_id              UUID  REFERENCES states(id),
    local_government_id   UUID  REFERENCES local_governments(id),
    content               TEXT,
    CHECK (
        (continent_id        IS NOT NULL)::int +
        (country_id          IS NOT NULL)::int +
        (state_id            IS NOT NULL)::int +
        (local_government_id IS NOT NULL)::int
        = 1
    )
);

CREATE TABLE architecture_history (
    id                    UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
    continent_id          UUID  REFERENCES continents(id),
    country_id            UUID  REFERENCES countries(id),
    state_id              UUID  REFERENCES states(id),
    local_government_id   UUID  REFERENCES local_governments(id),
    content               TEXT,
    CHECK (
        (continent_id        IS NOT NULL)::int +
        (country_id          IS NOT NULL)::int +
        (state_id            IS NOT NULL)::int +
        (local_government_id IS NOT NULL)::int
        = 1
    )
);


-- ============================================================================
-- 6. PEOPLE & INSTITUTIONS
-- ============================================================================

-- Academic institutions are anchored to a single state with a normal FK,
-- since each institution sits in one specific state.
CREATE TABLE academic_institutions (
    id                  UUID     PRIMARY KEY DEFAULT gen_random_uuid(),
    state_id            UUID     NOT NULL REFERENCES states(id),
    name                TEXT     NOT NULL,
    founded_year        INTEGER,
    short_description   TEXT
);

-- Prominent people. The birthplace uses the four-FK CHECK pattern so we can
-- record whichever level of precision we know (just the country, the state,
-- or the local government).
CREATE TABLE prominent_people (
    id                          UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
    name                        TEXT  NOT NULL,
    bio                         TEXT,
    birth_date                  DATE,
    death_date                  DATE,
    birth_continent_id          UUID  REFERENCES continents(id),
    birth_country_id            UUID  REFERENCES countries(id),
    birth_state_id              UUID  REFERENCES states(id),
    birth_local_government_id   UUID  REFERENCES local_governments(id),
    CHECK (
        (birth_continent_id        IS NOT NULL)::int +
        (birth_country_id          IS NOT NULL)::int +
        (birth_state_id            IS NOT NULL)::int +
        (birth_local_government_id IS NOT NULL)::int
        = 1
    )
);

-- One row per award a person has received. A person can have many.
CREATE TABLE awards (
    id        UUID     PRIMARY KEY DEFAULT gen_random_uuid(),
    person_id UUID     NOT NULL REFERENCES prominent_people(id),
    name      TEXT     NOT NULL,
    year      INTEGER
);




-- ============================================================================
-- 2. USERS & SETTINGS
-- ============================================================================

-- A registered user. `google_id` is set when the user signs in with Google;
-- `email` is the primary login identifier and must be unique.
CREATE TABLE users (
    id              UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
    name            TEXT         NOT NULL,
    email           TEXT         NOT NULL UNIQUE,
    google_id       TEXT         UNIQUE,
    home_country    TEXT,
    created_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    last_login_at   TIMESTAMPTZ
);

-- One settings row per user (enforced by the UNIQUE on user_id). The matching
-- row is normally created at signup time.
CREATE TABLE user_settings (
    id                      UUID     PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id                 UUID     NOT NULL UNIQUE REFERENCES users(id),
    preferred_language      TEXT,
    theme                   TEXT,
    notifications_enabled   BOOLEAN  NOT NULL DEFAULT TRUE
);


-- ============================================================================
-- 7. USER INTERESTS & LEARNING PROGRESS
-- ============================================================================
-- Both tables link a user to a geographic entity at any level, using the
-- four-FK CHECK pattern.
-- ============================================================================

-- The continents / countries / states / LGs the user has chosen to follow.
-- Backs the "My Interests" section of the app.
CREATE TABLE user_interests (
    id                    UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id               UUID         NOT NULL REFERENCES users(id),
    continent_id          UUID         REFERENCES continents(id),
    country_id            UUID         REFERENCES countries(id),
    state_id              UUID         REFERENCES states(id),
    local_government_id   UUID         REFERENCES local_governments(id),
    added_at              TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    CHECK (
        (continent_id        IS NOT NULL)::int +
        (country_id          IS NOT NULL)::int +
        (state_id            IS NOT NULL)::int +
        (local_government_id IS NOT NULL)::int
        = 1
    )
);

-- Which pages the user has actually viewed, and when. Backs the "My Learning"
-- section of the app.
CREATE TABLE learning_progress (
    id                    UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id               UUID         NOT NULL REFERENCES users(id),
    continent_id          UUID         REFERENCES continents(id),
    country_id            UUID         REFERENCES countries(id),
    state_id              UUID         REFERENCES states(id),
    local_government_id   UUID         REFERENCES local_governments(id),
    viewed                BOOLEAN      NOT NULL DEFAULT FALSE,
    last_viewed_at        TIMESTAMPTZ,
    CHECK (
        (continent_id        IS NOT NULL)::int +
        (country_id          IS NOT NULL)::int +
        (state_id            IS NOT NULL)::int +
        (local_government_id IS NOT NULL)::int
        = 1
    )
);








--=============================================================
-- FUTURE   WORK
--=============================================================
-- Industries also carry a `type` so the UI can group them
-- (academic, fashion, music, tech, ...). The CHECK keeps the set finite.
-- CREATE TABLE industries (
--     id          UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
--     name        TEXT  NOT NULL,
--     type        TEXT  NOT NULL,
--     description TEXT,
--     CHECK (type IN (
--         'academic', 'fashion', 'music', 'tech', 'agriculture',
--         'manufacturing', 'media', 'finance', 'other'
--     ))
-- );
