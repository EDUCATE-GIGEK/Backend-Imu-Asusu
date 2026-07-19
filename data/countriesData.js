// Each country references its parent continent via continent_id.
// Mirrors the `countries` table in Postgres.sql.
export const countriesData = [
  // ── AFRICA ──────────────────────────────────────────────────────────────────
  {
    name: "Nigeria",
    country_id: "nigeria",
    continent_id: "africa",
    iso_code: "NG",
    general_info: {
      countryDescription:
        "Most populous country in Africa with over 200 million people and 250+ ethnic groups.",
      statesCount: 36,
      localGovernmentsCount: 774,
      ethnicGroupsCount: 250,
      endangeredGroupsCount: 5,
      endangeredLanguagesCount: "~30",
    },
  },
];

