// Each local government references its parent state via state_id.
// Mirrors the `local_governments` table in Postgres.sql.
export const localGovernmentData = [
  // ── LAGOS, Nigeria ──────────────────────────────────────────────────────────
  {
    name: "Ikeja",
    lg_id: "ikeja",
    state_id: "lagos",
    general_info: {
      localGovernmentDescription: "Administrative capital of Lagos State, home to the state secretariat, major markets, and a dense Yoruba population.",
      ethnicGroupsCount: 12,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 8,
    },
  },
  {
    name: "Lagos Island",
    lg_id: "lagos-island",
    state_id: "lagos",
    general_info: {
      localGovernmentDescription: "Historic heart of Lagos, the original settlement of the Awori Yoruba and later site of the colonial trading port.",
      ethnicGroupsCount: 20,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 1,
      tribesCount: 10,
    },
  },

  // ── KANO, Nigeria ────────────────────────────────────────────────────────────
  {
    name: "Kano Municipal",
    lg_id: "kano-municipal",
    state_id: "kano",
    general_info: {
      localGovernmentDescription: "The central LGA of Kano City, site of the ancient Kurmi Market and the Emir's Palace, the political heart of the Hausa-Fulani emirate.",
      ethnicGroupsCount: 8,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 5,
    },
  },
  {
    name: "Fagge",
    lg_id: "fagge",
    state_id: "kano",
    general_info: {
      localGovernmentDescription: "Dense commercial LGA adjacent to Kano city centre, known for textile markets and a mixed population of Hausa, Kanuri, and Arab traders.",
      ethnicGroupsCount: 6,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 4,
    },
  },

  // ── NAIROBI, Kenya ───────────────────────────────────────────────────────────
  {
    name: "Westlands",
    lg_id: "westlands",
    state_id: "nairobi",
    general_info: {
      localGovernmentDescription: "Nairobi's upmarket business and residential sub-county, home to embassies, NGO headquarters, and a diverse expatriate and Asian Kenyan population.",
      ethnicGroupsCount: 20,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 5,
    },
  },
  {
    name: "Embakasi",
    lg_id: "embakasi",
    state_id: "nairobi",
    general_info: {
      localGovernmentDescription: "Nairobi's largest and most densely populated sub-county, a working-class area with high concentrations of Kamba, Luhya, and Kikuyu communities.",
      ethnicGroupsCount: 15,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 8,
    },
  },

  // ── MOMBASA, Kenya ───────────────────────────────────────────────────────────
  {
    name: "Mvita",
    lg_id: "mvita",
    state_id: "mombasa",
    general_info: {
      localGovernmentDescription: "Mombasa's Old Town sub-county, the historic centre of Swahili culture, Arab trade, and Islamic heritage on the Kenyan coast.",
      ethnicGroupsCount: 10,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 1,
      tribesCount: 6,
    },
  },
  {
    name: "Likoni",
    lg_id: "likoni",
    state_id: "mombasa",
    general_info: {
      localGovernmentDescription: "Southern Mombasa sub-county connected by ferry, predominantly home to Digo and Duruma Mijikenda communities.",
      ethnicGroupsCount: 6,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 4,
    },
  },

  // ── MAHARASHTRA, India ───────────────────────────────────────────────────────
  {
    name: "Mumbai City",
    lg_id: "mumbai-city",
    state_id: "maharashtra",
    general_info: {
      localGovernmentDescription: "India's financial capital and most densely populated district, a megacity of Marathi, Gujarati, Muslim, and migrant communities.",
      ethnicGroupsCount: 25,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 3,
    },
  },
  {
    name: "Pune",
    lg_id: "pune",
    state_id: "maharashtra",
    general_info: {
      localGovernmentDescription: "Maharashtra's cultural capital and tech hub, historically the seat of the Maratha Peshwas and now a major education and IT centre.",
      ethnicGroupsCount: 18,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 2,
    },
  },

  // ── TAMIL NADU, India ────────────────────────────────────────────────────────
  {
    name: "Chennai",
    lg_id: "chennai",
    state_id: "tamil-nadu",
    general_info: {
      localGovernmentDescription: "Capital of Tamil Nadu and the cultural capital of South India, a hub of classical music, dance, and Tamil identity.",
      ethnicGroupsCount: 15,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 2,
    },
  },
  {
    name: "Coimbatore",
    lg_id: "coimbatore",
    state_id: "tamil-nadu",
    general_info: {
      localGovernmentDescription: "Western Tamil Nadu's industrial city on the Nilgiri foothills, near Irula and Toda tribal communities of the Blue Mountains.",
      ethnicGroupsCount: 10,
      endangeredGroupsCount: 2,
      endangeredLanguagesCount: 2,
      tribesCount: 5,
    },
  },

  // ── GUANGDONG, China ─────────────────────────────────────────────────────────
  {
    name: "Guangzhou",
    lg_id: "guangzhou",
    state_id: "guangdong",
    general_info: {
      localGovernmentDescription: "Guangdong's capital and ancient port city, the heartland of Cantonese language and cuisine, historically China's primary trading gateway.",
      ethnicGroupsCount: 8,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 1,
      tribesCount: 2,
    },
  },
  {
    name: "Shenzhen",
    lg_id: "shenzhen",
    state_id: "guangdong",
    general_info: {
      localGovernmentDescription: "China's technology and innovation hub bordering Hong Kong, transformed from a fishing village to a megacity in four decades.",
      ethnicGroupsCount: 10,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 2,
    },
  },

  // ── SICHUAN, China ───────────────────────────────────────────────────────────
  {
    name: "Chengdu",
    lg_id: "chengdu",
    state_id: "sichuan",
    general_info: {
      localGovernmentDescription: "Sichuan's capital, known for its spicy cuisine, giant panda research, and proximity to Tibetan communities of western Sichuan.",
      ethnicGroupsCount: 10,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 1,
      tribesCount: 3,
    },
  },
  {
    name: "Garzê Tibetan Autonomous Prefecture",
    lg_id: "garze",
    state_id: "sichuan",
    general_info: {
      localGovernmentDescription: "High-altitude Tibetan plateau prefecture on the eastern Tibetan borderlands, one of China's largest Tibetan-inhabited areas outside the TAR.",
      ethnicGroupsCount: 5,
      endangeredGroupsCount: 2,
      endangeredLanguagesCount: 3,
      tribesCount: 8,
    },
  },

  // ── MOSCOW OBLAST, Russia ────────────────────────────────────────────────────
  {
    name: "Moscow City",
    lg_id: "moscow-city",
    state_id: "moscow-oblast",
    general_info: {
      localGovernmentDescription: "Russia's federal capital and largest city, a cosmopolitan centre drawing ethnic Russians and minorities from across the federation.",
      ethnicGroupsCount: 30,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 0,
    },
  },
  {
    name: "Podolsk",
    lg_id: "podolsk",
    state_id: "moscow-oblast",
    general_info: {
      localGovernmentDescription: "Industrial city south of Moscow, historically a textile manufacturing centre with a predominantly Russian and Ukrainian population.",
      ethnicGroupsCount: 8,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 0,
    },
  },

  // ── TATARSTAN, Russia ────────────────────────────────────────────────────────
  {
    name: "Kazan",
    lg_id: "kazan",
    state_id: "tatarstan",
    general_info: {
      localGovernmentDescription: "Capital of Tatarstan and Russia's third largest city, equally shared by Tatar Muslims and Russian Orthodox communities.",
      ethnicGroupsCount: 10,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 1,
      tribesCount: 0,
    },
  },
  {
    name: "Naberezhnye Chelny",
    lg_id: "naberezhnye-chelny",
    state_id: "tatarstan",
    general_info: {
      localGovernmentDescription: "Tatarstan's second city and home of the KAMAZ truck factory, a Soviet-era industrial centre with a mixed Tatar and Russian population.",
      ethnicGroupsCount: 6,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 0,
    },
  },

  // ── ÎLE-DE-FRANCE, France ────────────────────────────────────────────────────
  {
    name: "Paris",
    lg_id: "paris",
    state_id: "ile-de-france",
    general_info: {
      localGovernmentDescription: "France's capital and most diverse city, where North African, Sub-Saharan African, and East Asian immigrant communities have created distinct cultural quarters.",
      ethnicGroupsCount: 25,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 0,
    },
  },
  {
    name: "Boulogne-Billancourt",
    lg_id: "boulogne-billancourt",
    state_id: "ile-de-france",
    general_info: {
      localGovernmentDescription: "Affluent western suburb of Paris, former home of the Renault car plant and home to significant Portuguese and North African communities.",
      ethnicGroupsCount: 12,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 0,
    },
  },

  // ── BRETAGNE, France ─────────────────────────────────────────────────────────
  {
    name: "Rennes",
    lg_id: "rennes",
    state_id: "bretagne",
    general_info: {
      localGovernmentDescription: "Capital of Brittany and center of Breton cultural and political life, where language revival movements are most active.",
      ethnicGroupsCount: 5,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 1,
      tribesCount: 0,
    },
  },
  {
    name: "Brest",
    lg_id: "brest",
    state_id: "bretagne",
    general_info: {
      localGovernmentDescription: "Major naval port on Brittany's Atlantic tip, a working-class city with deep Breton cultural roots and traditional maritime heritage.",
      ethnicGroupsCount: 4,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 1,
      tribesCount: 0,
    },
  },

  // ── CALIFORNIA, United States ────────────────────────────────────────────────
  {
    name: "Los Angeles County",
    lg_id: "los-angeles-county",
    state_id: "california",
    general_info: {
      localGovernmentDescription: "Most populous US county with 10 million residents, the largest urban concentration of Latinos, Armenians, Koreans, and other diaspora groups in the world.",
      ethnicGroupsCount: 80,
      endangeredGroupsCount: 5,
      endangeredLanguagesCount: 20,
      tribesCount: 8,
    },
  },
  {
    name: "San Francisco County",
    lg_id: "san-francisco-county",
    state_id: "california",
    general_info: {
      localGovernmentDescription: "Compact city-county on a peninsula, home to the oldest Chinatown in North America and a globally significant LGBTQ+ cultural history.",
      ethnicGroupsCount: 30,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 5,
      tribesCount: 3,
    },
  },

  // ── TEXAS, United States ─────────────────────────────────────────────────────
  {
    name: "Harris County",
    lg_id: "harris-county",
    state_id: "texas",
    general_info: {
      localGovernmentDescription: "Texas's most populous county containing Houston, ranked as the most ethnically diverse major city in the United States.",
      ethnicGroupsCount: 60,
      endangeredGroupsCount: 3,
      endangeredLanguagesCount: 10,
      tribesCount: 5,
    },
  },
  {
    name: "Travis County",
    lg_id: "travis-county",
    state_id: "texas",
    general_info: {
      localGovernmentDescription: "Home to Austin, the Texas state capital and tech hub, with a rapidly growing Latino majority and a historically significant African American East Austin community.",
      ethnicGroupsCount: 25,
      endangeredGroupsCount: 2,
      endangeredLanguagesCount: 5,
      tribesCount: 3,
    },
  },

  // ── JALISCO, Mexico ──────────────────────────────────────────────────────────
  {
    name: "Guadalajara",
    lg_id: "guadalajara",
    state_id: "jalisco",
    general_info: {
      localGovernmentDescription: "Mexico's second largest city and cultural capital, birthplace of mariachi music, tequila, and the charro (Mexican cowboy) tradition.",
      ethnicGroupsCount: 8,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 1,
      tribesCount: 3,
    },
  },
  {
    name: "Zapopan",
    lg_id: "zapopan",
    state_id: "jalisco",
    general_info: {
      localGovernmentDescription: "Affluent municipality of greater Guadalajara with significant Huichol (Wixáritari) indigenous cultural presence despite its urban character.",
      ethnicGroupsCount: 5,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 1,
      tribesCount: 2,
    },
  },

  // ── OAXACA, Mexico ───────────────────────────────────────────────────────────
  {
    name: "Oaxaca de Juárez",
    lg_id: "oaxaca-de-juarez",
    state_id: "oaxaca",
    general_info: {
      localGovernmentDescription: "State capital and UNESCO World Heritage city, a living museum of Zapotec and Mixtec culture, mezcal production, and pre-Columbian art.",
      ethnicGroupsCount: 12,
      endangeredGroupsCount: 2,
      endangeredLanguagesCount: 3,
      tribesCount: 6,
    },
  },
  {
    name: "Tehuantepec",
    lg_id: "tehuantepec",
    state_id: "oaxaca",
    general_info: {
      localGovernmentDescription: "City on the Isthmus of Tehuantepec known for its matriarchal Zapotec society, elaborate women's traditional dress, and the Muxe third-gender tradition.",
      ethnicGroupsCount: 6,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 2,
      tribesCount: 3,
    },
  },

  // ── SÃO PAULO, Brazil ────────────────────────────────────────────────────────
  {
    name: "São Paulo City",
    lg_id: "sao-paulo-city",
    state_id: "sao-paulo",
    general_info: {
      localGovernmentDescription: "South America's largest city and financial capital, home to the world's biggest Japanese diaspora community and one of the largest Lebanese diaspora communities outside Lebanon.",
      ethnicGroupsCount: 40,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 2,
    },
  },
  {
    name: "Campinas",
    lg_id: "campinas",
    state_id: "sao-paulo",
    general_info: {
      localGovernmentDescription: "Major inland city of São Paulo state and technology hub, with a historically significant African-descended community from its plantation-era past.",
      ethnicGroupsCount: 15,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 1,
    },
  },

  // ── BAHIA, Brazil ────────────────────────────────────────────────────────────
  {
    name: "Salvador",
    lg_id: "salvador",
    state_id: "bahia",
    general_info: {
      localGovernmentDescription: "Brazil's first colonial capital and most Afro-Brazilian city, where Candomblé, capoeira, and axé music were born and continue to thrive.",
      ethnicGroupsCount: 10,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 2,
    },
  },
  {
    name: "Feira de Santana",
    lg_id: "feira-de-santana",
    state_id: "bahia",
    general_info: {
      localGovernmentDescription: "Bahia's second largest city, historically a cattle-trade crossroads whose micareta off-season carnival maintains vibrant Afro-Brazilian cultural traditions.",
      ethnicGroupsCount: 8,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 1,
    },
  },

  // ── LIMA, Peru ───────────────────────────────────────────────────────────────
  {
    name: "Lima Province",
    lg_id: "lima-province",
    state_id: "lima",
    general_info: {
      localGovernmentDescription: "Peru's sprawling capital containing one-third of the national population, where Andean, Amazonian, and coastal cultures converge in a vast urban mosaic.",
      ethnicGroupsCount: 25,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 3,
    },
  },
  {
    name: "Callao",
    lg_id: "callao",
    state_id: "lima",
    general_info: {
      localGovernmentDescription: "Peru's main seaport adjacent to Lima, with a historically significant Afro-Peruvian and Chinese Peruvian (Tusán) community shaped by colonial labour patterns.",
      ethnicGroupsCount: 12,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 1,
    },
  },

  // ── CUSCO, Peru ──────────────────────────────────────────────────────────────
  {
    name: "Cusco City",
    lg_id: "cusco-city",
    state_id: "cusco",
    general_info: {
      localGovernmentDescription: "Former Inca capital at 3,400 m altitude, the living heart of Quechua culture and home to Inti Raymi and other Andean ceremonial traditions.",
      ethnicGroupsCount: 10,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 1,
      tribesCount: 4,
    },
  },
  {
    name: "Urubamba",
    lg_id: "urubamba",
    state_id: "cusco",
    general_info: {
      localGovernmentDescription: "Sacred Valley district below Cusco, spiritual homeland of Quechua communities who maintain pre-Columbian weaving and ceremonial traditions around Machu Picchu.",
      ethnicGroupsCount: 6,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 3,
    },
  },

  // ── NEW SOUTH WALES, Australia ───────────────────────────────────────────────
  {
    name: "Sydney",
    lg_id: "sydney",
    state_id: "new-south-wales",
    general_info: {
      localGovernmentDescription: "Australia's largest city and one of the world's most multicultural, where Aboriginal Eora peoples' land now hosts over 200 nationalities.",
      ethnicGroupsCount: 50,
      endangeredGroupsCount: 3,
      endangeredLanguagesCount: 10,
      tribesCount: 6,
    },
  },
  {
    name: "Newcastle",
    lg_id: "newcastle",
    state_id: "new-south-wales",
    general_info: {
      localGovernmentDescription: "Former steel city of the Hunter Valley, traditional country of the Awabakal and Worimi peoples, with active Aboriginal cultural revitalization.",
      ethnicGroupsCount: 15,
      endangeredGroupsCount: 2,
      endangeredLanguagesCount: 5,
      tribesCount: 4,
    },
  },

  // ── QUEENSLAND, Australia ────────────────────────────────────────────────────
  {
    name: "Brisbane",
    lg_id: "brisbane",
    state_id: "queensland",
    general_info: {
      localGovernmentDescription: "Queensland's capital on Turrbal and Jagera country, a growing Pacific Islander community hub and gateway to remote Aboriginal Cape York communities.",
      ethnicGroupsCount: 35,
      endangeredGroupsCount: 2,
      endangeredLanguagesCount: 8,
      tribesCount: 5,
    },
  },
  {
    name: "Cairns",
    lg_id: "cairns",
    state_id: "queensland",
    general_info: {
      localGovernmentDescription: "Tropical city gateway to the Great Barrier Reef and home to Australia's highest concentration of Torres Strait Islander and Aboriginal Cape York peoples.",
      ethnicGroupsCount: 20,
      endangeredGroupsCount: 5,
      endangeredLanguagesCount: 15,
      tribesCount: 10,
    },
  },

  // ── NATIONAL CAPITAL DISTRICT, Papua New Guinea ──────────────────────────────
  {
    name: "Moresby North-East",
    lg_id: "moresby-north-east",
    state_id: "ncd",
    general_info: {
      localGovernmentDescription: "Upmarket residential and business district of Port Moresby, home to government offices alongside Motu and Koiari traditional landowners.",
      ethnicGroupsCount: 20,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 2,
      tribesCount: 5,
    },
  },
  {
    name: "Moresby South",
    lg_id: "moresby-south",
    state_id: "ncd",
    general_info: {
      localGovernmentDescription: "Dense urban settlement in Port Moresby's south, a mixture of Motu-Koitabu traditional owners and settlers from highland provinces.",
      ethnicGroupsCount: 25,
      endangeredGroupsCount: 1,
      endangeredLanguagesCount: 2,
      tribesCount: 6,
    },
  },

  // ── MOROBE, Papua New Guinea ─────────────────────────────────────────────────
  {
    name: "Lae",
    lg_id: "lae",
    state_id: "morobe",
    general_info: {
      localGovernmentDescription: "PNG's second city and industrial hub at the mouth of the Markham Valley, where Adzera, Wampar, and coastal Melanesian communities live alongside a large migrant workforce.",
      ethnicGroupsCount: 30,
      endangeredGroupsCount: 2,
      endangeredLanguagesCount: 3,
      tribesCount: 8,
    },
  },
  {
    name: "Huon Gulf",
    lg_id: "huon-gulf",
    state_id: "morobe",
    general_info: {
      localGovernmentDescription: "Coastal district of Morobe facing the Huon Gulf, home to Siassi Island traders historically famous across PNG for their long-range canoe exchange networks.",
      ethnicGroupsCount: 15,
      endangeredGroupsCount: 3,
      endangeredLanguagesCount: 5,
      tribesCount: 6,
    },
  },
];
