// Each state references its parent country via country_id.
// Mirrors the `states` table in Postgres.sql.
export const statesData = [
  // ── NIGERIA ─────────────────────────────────────────────────────────────────
  {
    name: "Lagos",
    state_id: "lagos",
    country_id: "nigeria",
    general_info: {
      stateDescription: "Nigeria's commercial capital and most populous state, home to the nation's largest city and economic hub.",
      localGovernmentsCount: 20,
      ethnicGroupsCount: 50,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 2,
    },
  },
  {
    name: "Kano",
    state_id: "kano",
    country_id: "nigeria",
    general_info: {
      stateDescription: "Largest city in northern Nigeria and historic center of trans-Saharan trade, predominantly Hausa-Fulani culture.",
      localGovernmentsCount: 44,
      ethnicGroupsCount: 12,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 1,
    },
  },

  // ── KENYA ────────────────────────────────────────────────────────────────────
  {
    name: "Nairobi County",
    state_id: "nairobi",
    country_id: "kenya",
    general_info: {
      stateDescription: "Kenya's capital and largest city, a cosmopolitan hub drawing all 42 Kenyan ethnic groups.",
      localGovernmentsCount: 17,
      ethnicGroupsCount: 42,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
    },
  },
  {
    name: "Mombasa County",
    state_id: "mombasa",
    country_id: "kenya",
    general_info: {
      stateDescription: "Kenya's coastal city and main port, historically a Swahili trading hub with Arab and African cultural fusion.",
      localGovernmentsCount: 6,
      ethnicGroupsCount: 15,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 1,
    },
  },

  // ── INDIA ────────────────────────────────────────────────────────────────────
  {
    name: "Maharashtra",
    state_id: "maharashtra",
    country_id: "india",
    general_info: {
      stateDescription: "India's wealthiest state and home to Mumbai, its financial capital, with a rich Maratha cultural heritage.",
      localGovernmentsCount: 36,
      ethnicGroupsCount: 30,
      endangeredGroupsCount: 3,
      endangeredLanguagesCount: 5,
    },
  },
  {
    name: "Tamil Nadu",
    state_id: "tamil-nadu",
    country_id: "india",
    general_info: {
      stateDescription: "South Indian state with one of the world's oldest living classical languages and a distinct Dravidian cultural identity.",
      localGovernmentsCount: 38,
      ethnicGroupsCount: 20,
      endangeredGroupsCount: 2,
      endangeredLanguagesCount: 3,
    },
  },

  // ── CHINA ────────────────────────────────────────────────────────────────────
  {
    name: "Guangdong",
    state_id: "guangdong",
    country_id: "china",
    general_info: {
      stateDescription: "China's most populous province and manufacturing heartland, home to Cantonese-speaking Han and various southern minorities.",
      localGovernmentsCount: 121,
      ethnicGroupsCount: 12,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 2,
    },
  },
  {
    name: "Sichuan",
    state_id: "sichuan",
    country_id: "china",
    general_info: {
      stateDescription: "Southwestern province with significant Tibetan and Yi minority populations alongside the Han majority.",
      localGovernmentsCount: 183,
      ethnicGroupsCount: 14,
      endangeredGroupsCount: 2,
      endangeredLanguagesCount: 4,
    },
  },

  // ── RUSSIA ───────────────────────────────────────────────────────────────────
  {
    name: "Moscow Oblast",
    state_id: "moscow-oblast",
    country_id: "russia",
    general_info: {
      stateDescription: "Russia's most populous federal subject surrounding Moscow city, serving as the nation's political and cultural core.",
      localGovernmentsCount: 360,
      ethnicGroupsCount: 40,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
    },
  },
  {
    name: "Republic of Tatarstan",
    state_id: "tatarstan",
    country_id: "russia",
    general_info: {
      stateDescription: "Autonomous republic in the Volga region, heartland of the Tatar people and one of Russia's most culturally distinct regions.",
      localGovernmentsCount: 43,
      ethnicGroupsCount: 8,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 1,
    },
  },

  // ── FRANCE ───────────────────────────────────────────────────────────────────
  {
    name: "Île-de-France",
    state_id: "ile-de-france",
    country_id: "france",
    general_info: {
      stateDescription: "France's capital region containing Paris, the most ethnically diverse part of France due to immigration from former colonies.",
      localGovernmentsCount: 1276,
      ethnicGroupsCount: 20,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
    },
  },
  {
    name: "Bretagne (Brittany)",
    state_id: "bretagne",
    country_id: "france",
    general_info: {
      stateDescription: "Celtic region of northwestern France where the Breton language and distinct cultural identity have been preserved for centuries.",
      localGovernmentsCount: 1208,
      ethnicGroupsCount: 3,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 1,
    },
  },

  // ── UNITED STATES ────────────────────────────────────────────────────────────
  {
    name: "California",
    state_id: "california",
    country_id: "united-states",
    general_info: {
      stateDescription: "Most populous US state and the most ethnically diverse, home to the largest Hispanic, Asian, and Native American populations.",
      localGovernmentsCount: 482,
      ethnicGroupsCount: 100,
      endangeredGroupsCount: 10,
      endangeredLanguagesCount: 40,
    },
  },
  {
    name: "Texas",
    state_id: "texas",
    country_id: "united-states",
    general_info: {
      stateDescription: "Second largest US state with a strong Hispanic cultural presence, significant Native American heritage, and a booming diverse population.",
      localGovernmentsCount: 1214,
      ethnicGroupsCount: 80,
      endangeredGroupsCount: 8,
      endangeredLanguagesCount: 30,
    },
  },

  // ── MEXICO ───────────────────────────────────────────────────────────────────
  {
    name: "Jalisco",
    state_id: "jalisco",
    country_id: "mexico",
    general_info: {
      stateDescription: "Western Mexican state, birthplace of mariachi, tequila, and the iconic charro (Mexican cowboy) tradition.",
      localGovernmentsCount: 125,
      ethnicGroupsCount: 8,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 3,
    },
  },
  {
    name: "Oaxaca",
    state_id: "oaxaca",
    country_id: "mexico",
    general_info: {
      stateDescription: "Mexico's most ethnically diverse state, home to 16 indigenous peoples including Zapotec and Mixtec.",
      localGovernmentsCount: 570,
      ethnicGroupsCount: 16,
      endangeredGroupsCount: 4,
      endangeredLanguagesCount: 8,
    },
  },

  // ── BRAZIL ───────────────────────────────────────────────────────────────────
  {
    name: "São Paulo",
    state_id: "sao-paulo",
    country_id: "brazil",
    general_info: {
      stateDescription: "Brazil's richest and most populous state, home to the world's largest Japanese diaspora outside Japan and a highly diverse urban population.",
      localGovernmentsCount: 645,
      ethnicGroupsCount: 40,
      endangeredGroupsCount: 2,
      endangeredLanguagesCount: 5,
    },
  },
  {
    name: "Bahia",
    state_id: "bahia",
    country_id: "brazil",
    general_info: {
      stateDescription: "Brazil's most Afro-Brazilian state and cultural heartland of Candomblé, capoeira, and samba traditions rooted in the slave trade.",
      localGovernmentsCount: 417,
      ethnicGroupsCount: 20,
      endangeredGroupsCount: 3,
      endangeredLanguagesCount: 6,
    },
  },

  // ── PERU ─────────────────────────────────────────────────────────────────────
  {
    name: "Lima",
    state_id: "lima",
    country_id: "peru",
    general_info: {
      stateDescription: "Peru's capital and largest metropolitan region, home to one-third of the national population and a mix of coastal, Andean, and Amazonian migrants.",
      localGovernmentsCount: 43,
      ethnicGroupsCount: 25,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
    },
  },
  {
    name: "Cusco",
    state_id: "cusco",
    country_id: "peru",
    general_info: {
      stateDescription: "Former capital of the Inca Empire in the Andean highlands, with the highest concentration of Quechua-speaking indigenous communities.",
      localGovernmentsCount: 108,
      ethnicGroupsCount: 15,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 2,
    },
  },

  // ── AUSTRALIA ────────────────────────────────────────────────────────────────
  {
    name: "New South Wales",
    state_id: "new-south-wales",
    country_id: "australia",
    general_info: {
      stateDescription: "Australia's most populous state, home to Sydney and a significant Aboriginal population including the Eora, Dharawal, and Darkinjung peoples.",
      localGovernmentsCount: 128,
      ethnicGroupsCount: 60,
      endangeredGroupsCount: 5,
      endangeredLanguagesCount: 20,
    },
  },
  {
    name: "Queensland",
    state_id: "queensland",
    country_id: "australia",
    general_info: {
      stateDescription: "Northeastern state with the highest Torres Strait Islander population and significant Aboriginal communities in Cape York.",
      localGovernmentsCount: 77,
      ethnicGroupsCount: 50,
      endangeredGroupsCount: 8,
      endangeredLanguagesCount: 30,
    },
  },

  // ── PAPUA NEW GUINEA ─────────────────────────────────────────────────────────
  {
    name: "National Capital District",
    state_id: "ncd",
    country_id: "papua-new-guinea",
    general_info: {
      stateDescription: "PNG's capital region containing Port Moresby, the urban melting pot where all major ethnic groups converge.",
      localGovernmentsCount: 6,
      ethnicGroupsCount: 50,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
    },
  },
  {
    name: "Morobe Province",
    state_id: "morobe",
    country_id: "papua-new-guinea",
    general_info: {
      stateDescription: "PNG's second most populous province centred on Lae, with over 100 distinct language groups and a strong Melanesian cultural tradition.",
      localGovernmentsCount: 9,
      ethnicGroupsCount: 100,
      endangeredGroupsCount: 5,
      endangeredLanguagesCount: 10,
    },
  },
];
