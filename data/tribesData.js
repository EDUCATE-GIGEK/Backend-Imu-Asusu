// Each tribe references its parent ethnic group, local government, state, and country.
// `languages` is a TEXT[] matching the `languages ARRAY(TEXT)` column in tribe.
// Mirrors the `tribe` table in Postgres.sql.
// Only ethnic groups with tribesCount > 0 have entries here.
export const tribesData = [
  // ── YORUBA (Ikeja, Lagos) ────────────────────────────────────────────────────
  {
    name: "Ekiti",
    tribe_id: "ekiti-yoruba",
    ethnic_group_id: "yoruba-ikeja",
    local_government_id: "ikeja",
    state_id: "lagos",
    country_id: "nigeria",
    languages: ["Ekiti dialect of Yoruba", "English"],
    general_info: {
      tribeDescription:
        "The Ekiti are a Yoruba sub-group from the northeastern Yoruba highlands of Ekiti State, known for their fierce resistance to the Fulani jihad and their dense forest-farming culture. Large numbers live in Ikeja due to labour migration.",
      isEndangered: false,
      spokenLanguagesCount: 2,
      writtenLanguagesCount: 1,
    },
  },

  // ── IGBO (Ikeja, Lagos) ──────────────────────────────────────────────────────
  {
    name: "Aro Igbo",
    tribe_id: "aro-igbo",
    ethnic_group_id: "igbo-ikeja",
    local_government_id: "ikeja",
    state_id: "lagos",
    country_id: "nigeria",
    languages: ["Aro dialect of Igbo", "English"],
    general_info: {
      tribeDescription:
        "The Aro Igbo of Arochukwu built a long-distance trade network that spanned southeastern Nigeria, leveraging the oracle of Arochukwu as a judicial and commercial institution. Their mercantile legacy continues in Lagos commerce.",
      isEndangered: false,
      spokenLanguagesCount: 2,
      writtenLanguagesCount: 1,
    },
  },

  // ── AWORI YORUBA (Lagos Island) ──────────────────────────────────────────────
  {
    name: "Epe Awori",
    tribe_id: "epe-awori",
    ethnic_group_id: "awori-lagos-island",
    local_government_id: "lagos-island",
    state_id: "lagos",
    country_id: "nigeria",
    languages: ["Awori Yoruba", "Ijebu Yoruba", "English"],
    general_info: {
      tribeDescription:
        "The Epe Awori inhabit the Epe area of eastern Lagos, traditionally fishermen and farmers of the lagoon coast who maintain the annual Ojude Oba festival and distinct lagoon-fishing traditions.",
      isEndangered: false,
      spokenLanguagesCount: 2,
      writtenLanguagesCount: 1,
    },
  },

  // ── EFIK (Lagos Island) ──────────────────────────────────────────────────────
  {
    name: "Qua",
    tribe_id: "qua",
    ethnic_group_id: "efik-lagos-island",
    local_government_id: "lagos-island",
    state_id: "lagos",
    country_id: "nigeria",
    languages: ["Ejagham (Qua)", "Efik", "English"],
    general_info: {
      tribeDescription:
        "The Qua people are a distinct ethnic group closely associated with the Efik in Calabar, known for their Ekpe masquerade and nsibidi script — one of the few indigenous writing systems of sub-Saharan Africa.",
      isEndangered: false,
      spokenLanguagesCount: 2,
      writtenLanguagesCount: 2,
    },
  },
];
