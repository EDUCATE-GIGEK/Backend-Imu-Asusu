// Mirrors the `ethnic_group` table in Postgres.sql.
// country_id and state_id are NOT NULL FKs in the schema — required on every row.
// local_government_id is optional but always provided here.
// languages matches the `languages ARRAY(TEXT)` column.
export const ethnicGroupData = [
  // ── IKEJA, Lagos, Nigeria ────────────────────────────────────────────────────
  {
    name: "Ikwerre",
    ethnic_group_id: "ikwerre-ikeja",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "ikeja",
    languages: ["Ikwerre", "Igbo", "English"],
    general_info: {
      ethnicGroupDescription:
        "An Igboid people indigenous to Rivers State and the original landowners of Port Harcourt, the Ikwerre maintain a fiercely distinct identity from mainstream Igbo and are known for their Ikenga warrior masquerade, banga palm-nut cuisine, and strong age-grade governance systems. A significant professional diaspora has settled in Lagos, particularly in oil-sector and commercial roles.",
      isEndangered: false,
      tribesCount: 9,
      spokenLanguagesCount: 3,
      writtenLanguagesCount: 1,
    },
  },
];
