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
      countryDescription: "Most populous country in Africa with over 200 million people and 250+ ethnic groups.",
      statesCount: 36,
      localGovernmentsCount: 774,
      ethnicGroupsCount: 250,
      endangeredGroupsCount: 5,
      endangeredLanguagesCount: "~30",
    },
  },
  {
    name: "Kenya",
    country_id: "kenya",
    continent_id: "africa",
    iso_code: "KE",
    general_info: {
      countryDescription: "East African nation known for its diverse wildlife, Rift Valley landscapes, and 42+ ethnic groups.",
      statesCount: 47,
      localGovernmentsCount: 290,
      ethnicGroupsCount: 42,
      endangeredGroupsCount: 5,
      endangeredLanguagesCount: "~8",
    },
  },

  // ── ASIA ────────────────────────────────────────────────────────────────────
  {
    name: "India",
    country_id: "india",
    continent_id: "asia",
    iso_code: "IN",
    general_info: {
      countryDescription: "World's most populous democracy with over 2,000 ethnic groups and 22 scheduled languages.",
      statesCount: 28,
      localGovernmentsCount: 250000,
      ethnicGroupsCount: 2000,
      endangeredGroupsCount: 12,
      endangeredLanguagesCount: "~90",
    },
  },
  {
    name: "China",
    country_id: "china",
    continent_id: "asia",
    iso_code: "CN",
    general_info: {
      countryDescription: "World's most populous country with 56 officially recognized ethnic groups, dominated by the Han majority.",
      statesCount: 34,
      localGovernmentsCount: 2800,
      ethnicGroupsCount: 56,
      endangeredGroupsCount: 7,
      endangeredLanguagesCount: "~20",
    },
  },

  // ── EUROPE ──────────────────────────────────────────────────────────────────
  {
    name: "Russia",
    country_id: "russia",
    continent_id: "europe",
    iso_code: "RU",
    general_info: {
      countryDescription: "World's largest country by area, spanning 11 time zones with 190+ officially recognized ethnic groups.",
      statesCount: 89,
      localGovernmentsCount: 20000,
      ethnicGroupsCount: 190,
      endangeredGroupsCount: 15,
      endangeredLanguagesCount: "~50",
    },
  },
  {
    name: "France",
    country_id: "france",
    continent_id: "europe",
    iso_code: "FR",
    general_info: {
      countryDescription: "Western European nation with distinct regional cultures including Breton, Alsatian, Basque, and Corsican identities.",
      statesCount: 101,
      localGovernmentsCount: 36000,
      ethnicGroupsCount: 8,
      endangeredGroupsCount: 4,
      endangeredLanguagesCount: "~6",
    },
  },

  // ── NORTH AMERICA ───────────────────────────────────────────────────────────
  {
    name: "United States",
    country_id: "united-states",
    continent_id: "north-america",
    iso_code: "US",
    general_info: {
      countryDescription: "Federal republic of 50 states with one of the world's most ethnically diverse populations.",
      statesCount: 50,
      localGovernmentsCount: 90000,
      ethnicGroupsCount: 500,
      endangeredGroupsCount: 30,
      endangeredLanguagesCount: "~150",
    },
  },
  {
    name: "Mexico",
    country_id: "mexico",
    continent_id: "north-america",
    iso_code: "MX",
    general_info: {
      countryDescription: "Latin American nation home to 68 indigenous peoples, the largest being Nahua and Maya descendants.",
      statesCount: 31,
      localGovernmentsCount: 2469,
      ethnicGroupsCount: 68,
      endangeredGroupsCount: 12,
      endangeredLanguagesCount: "~60",
    },
  },

  // ── SOUTH AMERICA ───────────────────────────────────────────────────────────
  {
    name: "Brazil",
    country_id: "brazil",
    continent_id: "south-america",
    iso_code: "BR",
    general_info: {
      countryDescription: "Largest country in South America with 305 indigenous nations, the world's largest Japanese diaspora, and deep Afro-Brazilian heritage.",
      statesCount: 26,
      localGovernmentsCount: 5570,
      ethnicGroupsCount: 305,
      endangeredGroupsCount: 20,
      endangeredLanguagesCount: "~100",
    },
  },
  {
    name: "Peru",
    country_id: "peru",
    continent_id: "south-america",
    iso_code: "PE",
    general_info: {
      countryDescription: "Andean nation and heart of the former Inca Empire with large Quechua and Aymara populations alongside Amazonian peoples.",
      statesCount: 25,
      localGovernmentsCount: 1874,
      ethnicGroupsCount: 80,
      endangeredGroupsCount: 10,
      endangeredLanguagesCount: "~30",
    },
  },

  // ── OCEANIA ─────────────────────────────────────────────────────────────────
  {
    name: "Australia",
    country_id: "australia",
    continent_id: "oceania",
    iso_code: "AU",
    general_info: {
      countryDescription: "Island continent with the world's oldest continuous cultures — Aboriginal Australians with over 65,000 years of heritage.",
      statesCount: 8,
      localGovernmentsCount: 537,
      ethnicGroupsCount: 500,
      endangeredGroupsCount: 20,
      endangeredLanguagesCount: "~90",
    },
  },
  {
    name: "Papua New Guinea",
    country_id: "papua-new-guinea",
    continent_id: "oceania",
    iso_code: "PG",
    general_info: {
      countryDescription: "Most linguistically diverse nation on Earth with over 800 languages and a mosaic of Melanesian, Papuan, and Polynesian cultures.",
      statesCount: 22,
      localGovernmentsCount: 89,
      ethnicGroupsCount: 800,
      endangeredGroupsCount: 15,
      endangeredLanguagesCount: "~50",
    },
  },
];
