// Mirrors the `ethnic_group` table in Postgres.sql.
// country_id and state_id are NOT NULL FKs in the schema — required on every row.
// local_government_id is optional but always provided here.
// languages matches the `languages ARRAY(TEXT)` column.
export const ethnicGroupData = [

  // ── IKEJA, Lagos, Nigeria ────────────────────────────────────────────────────
  {
    name: "Yoruba",
    ethnic_group_id: "yoruba-ikeja",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "ikeja",
    languages: ["Yoruba", "English"],
    general_info: {
      ethnicGroupDescription: "The dominant ethnic group in Lagos and southwestern Nigeria, the Yoruba built powerful pre-colonial city-states and developed one of Africa's richest artistic and religious traditions.",
      isEndangered: false, tribesCount: 16, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Igbo",
    ethnic_group_id: "igbo-ikeja",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "ikeja",
    languages: ["Igbo", "English"],
    general_info: {
      ethnicGroupDescription: "Southeastern Nigeria's largest group, the Igbo are prominent in Lagos commerce and maintain vibrant institutions including the New Yam Festival and Ozo title societies.",
      isEndangered: false, tribesCount: 30, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  {
    name: "Ikwerre",
    ethnic_group_id: "ikwerre-ikeja",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "ikeja",
    languages: ["Ikwerre", "Igbo", "English"],
    general_info: {
      ethnicGroupDescription: "An Igboid people indigenous to Rivers State and the original landowners of Port Harcourt, the Ikwerre maintain a fiercely distinct identity from mainstream Igbo and are known for their Ikenga warrior masquerade, banga palm-nut cuisine, and strong age-grade governance systems. A significant professional diaspora has settled in Lagos, particularly in oil-sector and commercial roles.",
      isEndangered: false, tribesCount: 9, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },

  // ── LAGOS ISLAND, Lagos, Nigeria ─────────────────────────────────────────────
  {
    name: "Awori Yoruba",
    ethnic_group_id: "awori-lagos-island",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "lagos-island",
    languages: ["Awori Yoruba dialect", "Yoruba", "English"],
    general_info: {
      ethnicGroupDescription: "The original Yoruba sub-group who settled Lagos Island centuries before colonialism, the Awori are the traditional landowners of the Lagos peninsula and custodians of its earliest history.",
      isEndangered: false, tribesCount: 4, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Efik",
    ethnic_group_id: "efik-lagos-island",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "lagos-island",
    languages: ["Efik", "English"],
    general_info: {
      ethnicGroupDescription: "A maritime trading people of Cross River origin, the Efik community in Lagos Island traces its roots to the colonial-era palm oil trade and maintains its Ekpe secret society traditions.",
      isEndangered: false, tribesCount: 3, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── KANO MUNICIPAL, Kano, Nigeria ────────────────────────────────────────────
  {
    name: "Hausa-Fulani",
    ethnic_group_id: "hausa-fulani-kano-municipal",
    country_id: "nigeria",
    state_id: "kano",
    local_government_id: "kano-municipal",
    languages: ["Hausa", "Fulfulde", "Arabic", "English"],
    general_info: {
      ethnicGroupDescription: "The political and cultural heartland of northern Nigeria, the Hausa-Fulani dominate Kano's emirate system and are renowned for their Durbar cavalry festivals and leather craftsmanship.",
      isEndangered: false, tribesCount: 5, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Kanuri",
    ethnic_group_id: "kanuri-kano-municipal",
    country_id: "nigeria",
    state_id: "kano",
    local_government_id: "kano-municipal",
    languages: ["Kanuri", "Hausa", "English"],
    general_info: {
      ethnicGroupDescription: "Heirs to the ancient Kanem-Bornu Empire, Kanuri traders have been present in Kano since the trans-Saharan trade era, maintaining distinct embroidery and oral epic traditions.",
      isEndangered: false, tribesCount: 3, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── FAGGE, Kano, Nigeria ─────────────────────────────────────────────────────
  {
    name: "Hausa-Fulani",
    ethnic_group_id: "hausa-fulani-fagge",
    country_id: "nigeria",
    state_id: "kano",
    local_government_id: "fagge",
    languages: ["Hausa", "Fulfulde", "Arabic"],
    general_info: {
      ethnicGroupDescription: "The majority group in Fagge, engaged primarily in textile trading at the historic Kantin Kwari Market, the largest fabric market in West Africa.",
      isEndangered: false, tribesCount: 5, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Shuwa Arab",
    ethnic_group_id: "shuwa-arab-fagge",
    country_id: "nigeria",
    state_id: "kano",
    local_government_id: "fagge",
    languages: ["Chadian Arabic", "Hausa"],
    general_info: {
      ethnicGroupDescription: "Semi-nomadic cattle herders descended from Arab migrants to the Lake Chad basin. The Fagge community maintains Arabic oral poetry and a distinct pastoral identity threatened by urbanisation.",
      isEndangered: false, tribesCount: 2, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── WESTLANDS, Nairobi, Kenya ────────────────────────────────────────────────
  {
    name: "Kikuyu",
    ethnic_group_id: "kikuyu-westlands",
    country_id: "kenya",
    state_id: "nairobi",
    local_government_id: "westlands",
    languages: ["Gikuyu", "Swahili", "English"],
    general_info: {
      ethnicGroupDescription: "Kenya's largest ethnic group from Mount Kenya's slopes, the Kikuyu dominate Nairobi's business districts and maintain their Mũgumo sacred fig tree rituals and age-grade governance traditions.",
      isEndangered: false, tribesCount: 9, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Asian Kenyan",
    ethnic_group_id: "asian-kenyan-westlands",
    country_id: "kenya",
    state_id: "nairobi",
    local_government_id: "westlands",
    languages: ["Gujarati", "Punjabi", "Swahili", "English"],
    general_info: {
      ethnicGroupDescription: "Descendants of South Asian labourers brought to build the Uganda Railway in the 1890s, Asian Kenyans shaped East African commerce and maintain Gujarati, Punjabi, and Ismaili community traditions centred in Westlands.",
      isEndangered: false, tribesCount: 5, spokenLanguagesCount: 4, writtenLanguagesCount: 4,
    },
  },

  // ── EMBAKASI, Nairobi, Kenya ─────────────────────────────────────────────────
  {
    name: "Kamba",
    ethnic_group_id: "kamba-embakasi",
    country_id: "kenya",
    state_id: "nairobi",
    local_government_id: "embakasi",
    languages: ["Kikamba", "Swahili", "English"],
    general_info: {
      ethnicGroupDescription: "Eastern Kenya's renowned traders and woodcarvers, the Kamba have a large community in Embakasi maintaining their Kilumi healing ceremonies and kithatu musical bow tradition.",
      isEndangered: false, tribesCount: 6, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Luhya",
    ethnic_group_id: "luhya-embakasi",
    country_id: "kenya",
    state_id: "nairobi",
    local_government_id: "embakasi",
    languages: ["Luhya", "Swahili", "English"],
    general_info: {
      ethnicGroupDescription: "Kenya's second largest ethnic group from the western highlands, a confederation of 18 sub-tribes known for the Isukuti drum ceremony, with a major migrant presence in Nairobi's eastern suburbs.",
      isEndangered: false, tribesCount: 18, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },

  // ── MVITA, Mombasa, Kenya ────────────────────────────────────────────────────
  {
    name: "Swahili",
    ethnic_group_id: "swahili-mvita",
    country_id: "kenya",
    state_id: "mombasa",
    local_government_id: "mvita",
    languages: ["Swahili", "Arabic", "English"],
    general_info: {
      ethnicGroupDescription: "The cosmopolitan Swahili people emerged from centuries of trade between Bantu Africans and Arab, Persian, and Indian merchants. Mvita is their cultural heart, where coral-stone architecture and taarab music endure.",
      isEndangered: false, tribesCount: 3, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Bajuni",
    ethnic_group_id: "bajuni-mvita",
    country_id: "kenya",
    state_id: "mombasa",
    local_government_id: "mvita",
    languages: ["Bajuni dialect", "Swahili"],
    general_info: {
      ethnicGroupDescription: "A small Bantu coastal people of the Lamu Archipelago and Somali coast, expert fishermen and dhow sailors whose distinct dialect and culture face pressure from Somali political instability.",
      isEndangered: true, tribesCount: 2, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── LIKONI, Mombasa, Kenya ───────────────────────────────────────────────────
  {
    name: "Digo",
    ethnic_group_id: "digo-likoni",
    country_id: "kenya",
    state_id: "mombasa",
    local_government_id: "likoni",
    languages: ["Digo", "Swahili", "English"],
    general_info: {
      ethnicGroupDescription: "The Digo are a Mijikenda sub-group south of Mombasa, known for their spirit possession (pepo) healing dances and the sacred kaya forest shrines shared with related Mijikenda peoples.",
      isEndangered: false, tribesCount: 4, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Duruma",
    ethnic_group_id: "duruma-likoni",
    country_id: "kenya",
    state_id: "mombasa",
    local_government_id: "likoni",
    languages: ["Duruma", "Swahili", "English"],
    general_info: {
      ethnicGroupDescription: "One of the nine Mijikenda peoples of the Kenyan coast, the Duruma occupy the hinterland south of Mombasa and maintain their kaya sacred forest governance traditions and initiation rites.",
      isEndangered: false, tribesCount: 3, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── MUMBAI CITY, Maharashtra, India ─────────────────────────────────────────
  {
    name: "Marathi",
    ethnic_group_id: "marathi-mumbai",
    country_id: "india",
    state_id: "maharashtra",
    local_government_id: "mumbai-city",
    languages: ["Marathi", "Hindi", "English"],
    general_info: {
      ethnicGroupDescription: "Descendants of the great Maratha Empire builders, Marathi people are the founding community of Mumbai and express their identity through the massive Ganesh Chaturthi festival and the Warkari bhakti tradition.",
      isEndangered: false, tribesCount: 8, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Gujarati",
    ethnic_group_id: "gujarati-mumbai",
    country_id: "india",
    state_id: "maharashtra",
    local_government_id: "mumbai-city",
    languages: ["Gujarati", "Hindi", "English"],
    general_info: {
      ethnicGroupDescription: "Gujarati merchants have shaped Mumbai's commercial culture since the colonial era, dominating trade and industry. Their Jain and Hindu communities maintain the Paryushana festival and elaborate temple traditions.",
      isEndangered: false, tribesCount: 4, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },

  // ── PUNE, Maharashtra, India ─────────────────────────────────────────────────
  {
    name: "Marathi (Deshastha Brahmin)",
    ethnic_group_id: "deshastha-pune",
    country_id: "india",
    state_id: "maharashtra",
    local_government_id: "pune",
    languages: ["Marathi", "Sanskrit", "English"],
    general_info: {
      ethnicGroupDescription: "The Deshastha Brahmins were the Peshwa administrators of the Maratha Empire and shaped Pune as Maharashtra's intellectual capital, with strong classical music and Sanskrit learning traditions.",
      isEndangered: false, tribesCount: 2, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Kannada",
    ethnic_group_id: "kannada-pune",
    country_id: "india",
    state_id: "maharashtra",
    local_government_id: "pune",
    languages: ["Kannada", "Marathi", "English"],
    general_info: {
      ethnicGroupDescription: "A significant Kannada-speaking community from neighbouring Karnataka settled in Pune's western suburbs, maintaining Karnataka Rajyotsava celebrations and distinct Lingayat temple traditions.",
      isEndangered: false, tribesCount: 3, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── CHENNAI, Tamil Nadu, India ───────────────────────────────────────────────
  {
    name: "Tamil",
    ethnic_group_id: "tamil-chennai",
    country_id: "india",
    state_id: "tamil-nadu",
    local_government_id: "chennai",
    languages: ["Tamil", "English"],
    general_info: {
      ethnicGroupDescription: "Speakers of one of the world's oldest classical languages, the Tamil of Chennai are the cultural guardians of Bharatanatyam dance, Carnatic music, and the Pongal harvest festival.",
      isEndangered: false, tribesCount: 10, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Telugu",
    ethnic_group_id: "telugu-chennai",
    country_id: "india",
    state_id: "tamil-nadu",
    local_government_id: "chennai",
    languages: ["Telugu", "Tamil", "English"],
    general_info: {
      ethnicGroupDescription: "A large Telugu-speaking community with historic roots in Chennai influenced the city's early film industry and maintains the Bathukamma and Ugadi festival traditions.",
      isEndangered: false, tribesCount: 5, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── COIMBATORE, Tamil Nadu, India ────────────────────────────────────────────
  {
    name: "Tamil (Gounder)",
    ethnic_group_id: "gounder-coimbatore",
    country_id: "india",
    state_id: "tamil-nadu",
    local_government_id: "coimbatore",
    languages: ["Kongu Tamil dialect", "Tamil", "English"],
    general_info: {
      ethnicGroupDescription: "The Kongu Vellalar Gounder are the dominant agricultural community of western Tamil Nadu, maintaining distinct Kongu cultural practices and a strong identity separate from coastal Tamil culture.",
      isEndangered: false, tribesCount: 4, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Irula",
    ethnic_group_id: "irula-coimbatore",
    country_id: "india",
    state_id: "tamil-nadu",
    local_government_id: "coimbatore",
    languages: ["Irula", "Tamil"],
    general_info: {
      ethnicGroupDescription: "An indigenous people of the Nilgiri foothills, the Irula are renowned snake-catchers and forest-dwellers whose traditional ecological knowledge is internationally recognised but whose land rights remain under threat.",
      isEndangered: true, tribesCount: 2, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── GUANGZHOU, Guangdong, China ──────────────────────────────────────────────
  {
    name: "Han (Cantonese)",
    ethnic_group_id: "han-cantonese-guangzhou",
    country_id: "china",
    state_id: "guangdong",
    local_government_id: "guangzhou",
    languages: ["Cantonese", "Mandarin"],
    general_info: {
      ethnicGroupDescription: "Cantonese-speaking Han Chinese are the historic majority of Guangzhou, with a globally influential diaspora. Their dim sum culinary tradition, Cantonese opera, and lion dance are practiced worldwide.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Hakka",
    ethnic_group_id: "hakka-guangzhou",
    country_id: "china",
    state_id: "guangdong",
    local_government_id: "guangzhou",
    languages: ["Hakka", "Cantonese", "Mandarin"],
    general_info: {
      ethnicGroupDescription: "The Hakka ('guest people') are a Han sub-group who migrated south from the Yellow River Plain over many centuries, known for their circular tulou earth buildings and strong academic culture.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── SHENZHEN, Guangdong, China ───────────────────────────────────────────────
  {
    name: "Han (Cantonese villagers)",
    ethnic_group_id: "han-cantonese-shenzhen",
    country_id: "china",
    state_id: "guangdong",
    local_government_id: "shenzhen",
    languages: ["Cantonese", "Hakka", "Mandarin"],
    general_info: {
      ethnicGroupDescription: "Original Cantonese-Hakka farming communities whose ancestral village lands were absorbed into one of history's fastest-growing cities when the Special Economic Zone was declared in 1980.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Han (Mandarin migrants)",
    ethnic_group_id: "han-mandarin-shenzhen",
    country_id: "china",
    state_id: "guangdong",
    local_government_id: "shenzhen",
    languages: ["Mandarin"],
    general_info: {
      ethnicGroupDescription: "The dominant population of modern Shenzhen are internal migrants from Hunan, Hubei, Sichuan, and other Mandarin-speaking provinces who came to work in electronics factories and tech firms.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── CHENGDU, Sichuan, China ──────────────────────────────────────────────────
  {
    name: "Han (Sichuanese)",
    ethnic_group_id: "han-sichuanese-chengdu",
    country_id: "china",
    state_id: "sichuan",
    local_government_id: "chengdu",
    languages: ["Sichuanese Mandarin", "Mandarin"],
    general_info: {
      ethnicGroupDescription: "Sichuanese Han have a distinct cultural identity centred on spicy Sichuan cuisine, teahouse culture, and Sichuan opera with its fire-breathing and face-changing acrobatics.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Tibetan (Kham)",
    ethnic_group_id: "tibetan-kham-chengdu",
    country_id: "china",
    state_id: "sichuan",
    local_government_id: "chengdu",
    languages: ["Khampa Tibetan", "Mandarin"],
    general_info: {
      ethnicGroupDescription: "Khampa Tibetans from eastern Tibet maintain Buddhist monastery traditions, thangka painting, and the vibrant Tibetan-area trade that flows through Chengdu.",
      isEndangered: false, tribesCount: 5, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },

  // ── GARZÊ, Sichuan, China ────────────────────────────────────────────────────
  {
    name: "Tibetan (Kham)",
    ethnic_group_id: "tibetan-kham-garze",
    country_id: "china",
    state_id: "sichuan",
    local_government_id: "garze",
    languages: ["Khampa Tibetan", "Mandarin"],
    general_info: {
      ethnicGroupDescription: "The Khampa Tibetans of Garzê are renowned as skilled horsemen and traders. Their Yilhun Lhatso sacred lake ceremonies and Litang Horse Festival are central cultural events on the high plateau.",
      isEndangered: false, tribesCount: 8, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Yi",
    ethnic_group_id: "yi-garze",
    country_id: "china",
    state_id: "sichuan",
    local_government_id: "garze",
    languages: ["Nuosu Yi", "Mandarin"],
    general_info: {
      ethnicGroupDescription: "A Tibeto-Burman people of Sichuan and Yunnan, the Yi maintain their own syllabic script — one of the few indigenous writing systems still in use in China — alongside fire torch festival traditions and elaborate embroidered dress.",
      isEndangered: false, tribesCount: 6, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },

  // ── MOSCOW CITY, Moscow Oblast, Russia ──────────────────────────────────────
  {
    name: "Russian",
    ethnic_group_id: "russian-moscow-city",
    country_id: "russia",
    state_id: "moscow-oblast",
    local_government_id: "moscow-city",
    languages: ["Russian"],
    general_info: {
      ethnicGroupDescription: "Ethnic Russians form the overwhelming majority of Moscow, expressing their culture through Orthodox Christian festivals, the banya steam-bath tradition, and the classical literary heritage of Pushkin and Tolstoy.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Armenian",
    ethnic_group_id: "armenian-moscow-city",
    country_id: "russia",
    state_id: "moscow-oblast",
    local_government_id: "moscow-city",
    languages: ["Armenian", "Russian"],
    general_info: {
      ethnicGroupDescription: "One of Moscow's largest diaspora communities, many Armenians descended from refugees of the 1915 Genocide. They maintain the Armenian Apostolic Church, duduk music, and lavash flatbread traditions.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },

  // ── PODOLSK, Moscow Oblast, Russia ───────────────────────────────────────────
  {
    name: "Russian",
    ethnic_group_id: "russian-podolsk",
    country_id: "russia",
    state_id: "moscow-oblast",
    local_government_id: "podolsk",
    languages: ["Russian"],
    general_info: {
      ethnicGroupDescription: "Podolsk's predominantly Russian population is rooted in its textile-manufacturing history, maintaining Orthodox Christian traditions and the Soviet-era workers' collective memory.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 1, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Ukrainian",
    ethnic_group_id: "ukrainian-podolsk",
    country_id: "russia",
    state_id: "moscow-oblast",
    local_government_id: "podolsk",
    languages: ["Ukrainian", "Russian"],
    general_info: {
      ethnicGroupDescription: "Ukrainian workers arrived in Podolsk during Soviet industrialisation and maintain cultural memory of vyshyvanka embroidered shirts and the hopak Cossack dance, though cultural expression has been suppressed since the 2022 invasion.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },

  // ── KAZAN, Tatarstan, Russia ─────────────────────────────────────────────────
  {
    name: "Tatar",
    ethnic_group_id: "tatar-kazan",
    country_id: "russia",
    state_id: "tatarstan",
    local_government_id: "kazan",
    languages: ["Tatar", "Russian"],
    general_info: {
      ethnicGroupDescription: "The Tatars of Kazan are descendants of the Volga Bulgars and the Golden Horde, converted to Islam in the 14th century. They celebrate the Sabantuy plowing festival and maintain a strong Tatar-language cultural identity.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Russian",
    ethnic_group_id: "russian-kazan",
    country_id: "russia",
    state_id: "tatarstan",
    local_government_id: "kazan",
    languages: ["Russian"],
    general_info: {
      ethnicGroupDescription: "The Russian community of Kazan has coexisted with the Tatar majority since Ivan the Terrible's conquest in 1552. The city's Orthodox churches stand alongside mosques in a unique example of religious cohabitation.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── NABEREZHNYE CHELNY, Tatarstan, Russia ────────────────────────────────────
  {
    name: "Tatar",
    ethnic_group_id: "tatar-naberezhnye-chelny",
    country_id: "russia",
    state_id: "tatarstan",
    local_government_id: "naberezhnye-chelny",
    languages: ["Tatar", "Russian"],
    general_info: {
      ethnicGroupDescription: "The Tatar majority of Naberezhnye Chelny work largely in the KAMAZ automotive complex, blending industrial Soviet identity with Tatar language, Muslim calendar, and embroidered costume traditions.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Bashkir",
    ethnic_group_id: "bashkir-naberezhnye-chelny",
    country_id: "russia",
    state_id: "tatarstan",
    local_government_id: "naberezhnye-chelny",
    languages: ["Bashkir", "Tatar", "Russian"],
    general_info: {
      ethnicGroupDescription: "Bashkirs from the neighbouring Republic of Bashkortostan have settled here, maintaining their uzlyau throat-singing tradition and nomadic pastoral memories while integrating into the industrial workforce.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },

  // ── PARIS, Île-de-France, France ─────────────────────────────────────────────
  {
    name: "French",
    ethnic_group_id: "french-paris",
    country_id: "france",
    state_id: "ile-de-france",
    local_government_id: "paris",
    languages: ["French"],
    general_info: {
      ethnicGroupDescription: "The dominant ethnic and cultural group of Paris, whose laïc Republican identity, café culture, haute cuisine, and couture fashion have made Paris a global cultural capital.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Algerian French",
    ethnic_group_id: "algerian-french-paris",
    country_id: "france",
    state_id: "ile-de-france",
    local_government_id: "paris",
    languages: ["French", "Darija (Algerian Arabic)", "Berber (Tamazight)"],
    general_info: {
      ethnicGroupDescription: "France's largest immigrant-origin community, Algerian French (Beurs) have profoundly shaped French hip-hop, cuisine (couscous is France's most popular dish), and the banlieue urban culture.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },

  // ── BOULOGNE-BILLANCOURT, Île-de-France, France ──────────────────────────────
  {
    name: "French",
    ethnic_group_id: "french-boulogne",
    country_id: "france",
    state_id: "ile-de-france",
    local_government_id: "boulogne-billancourt",
    languages: ["French"],
    general_info: {
      ethnicGroupDescription: "The affluent French professional class of Boulogne-Billancourt, historically connected to the Renault auto-manufacturing legacy and now dominant in media and tech industries.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Portuguese French",
    ethnic_group_id: "portuguese-french-boulogne",
    country_id: "france",
    state_id: "ile-de-france",
    local_government_id: "boulogne-billancourt",
    languages: ["Portuguese", "French"],
    general_info: {
      ethnicGroupDescription: "Portuguese immigrants came to France from the 1960s to work in construction and auto manufacturing. The community maintains Fado music, Catholic religious festivals, and strong ties to Portugal.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },

  // ── RENNES, Bretagne, France ─────────────────────────────────────────────────
  {
    name: "Breton",
    ethnic_group_id: "breton-rennes",
    country_id: "france",
    state_id: "bretagne",
    local_government_id: "rennes",
    languages: ["Breton", "French"],
    general_info: {
      ethnicGroupDescription: "A Celtic people whose language, Breton, is the last surviving Celtic language on the European mainland. The Breton of Rennes lead cultural revival movements centred on the Fest-Noz night festival and the gaita bagpipe tradition.",
      isEndangered: true, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },
  {
    name: "French (Gallo-speaking)",
    ethnic_group_id: "gallo-rennes",
    country_id: "france",
    state_id: "bretagne",
    local_government_id: "rennes",
    languages: ["Gallo", "French"],
    general_info: {
      ethnicGroupDescription: "The Gallo-speaking population of eastern Brittany speaks a distinct Oïl Romance language different from both French and Breton. Gallo is severely endangered with fewer than 30,000 regular speakers.",
      isEndangered: true, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── BREST, Bretagne, France ──────────────────────────────────────────────────
  {
    name: "Breton",
    ethnic_group_id: "breton-brest",
    country_id: "france",
    state_id: "bretagne",
    local_government_id: "brest",
    languages: ["Breton", "French"],
    general_info: {
      ethnicGroupDescription: "Brest's Breton community is shaped by its naval heritage, with strong Breton nationalist sentiment and active Diwan Breton-medium schools working to transmit the language to new generations.",
      isEndangered: true, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },
  {
    name: "French",
    ethnic_group_id: "french-brest",
    country_id: "france",
    state_id: "bretagne",
    local_government_id: "brest",
    languages: ["French"],
    general_info: {
      ethnicGroupDescription: "The French-speaking majority of Brest, a working-class naval port city rebuilt after WWII bombing, maintains a secular republican identity distinct from Breton cultural nationalism.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 1, writtenLanguagesCount: 1,
    },
  },

  // ── LOS ANGELES COUNTY, California, USA ─────────────────────────────────────
  {
    name: "Hispanic/Latino (Mexican American)",
    ethnic_group_id: "mexican-american-la",
    country_id: "united-states",
    state_id: "california",
    local_government_id: "los-angeles-county",
    languages: ["Spanish", "English", "Nahuatl"],
    general_info: {
      ethnicGroupDescription: "Mexican Americans form the largest ethnic group in Los Angeles County. East LA is a cultural heartland where Día de los Muertos altars, lowrider culture, and mariachi tradition thrive.",
      isEndangered: false, tribesCount: 5, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Korean American",
    ethnic_group_id: "korean-american-la",
    country_id: "united-states",
    state_id: "california",
    local_government_id: "los-angeles-county",
    languages: ["Korean", "English"],
    general_info: {
      ethnicGroupDescription: "Los Angeles has the largest Korean American population outside Korea. Koreatown is a 24-hour cultural hub where K-pop fandom, Korean BBQ culture, and the Chuseok harvest festival are visible.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },

  // ── SAN FRANCISCO COUNTY, California, USA ───────────────────────────────────
  {
    name: "Chinese American",
    ethnic_group_id: "chinese-american-sf",
    country_id: "united-states",
    state_id: "california",
    local_government_id: "san-francisco-county",
    languages: ["Cantonese", "Mandarin", "English"],
    general_info: {
      ethnicGroupDescription: "San Francisco's Chinatown is the oldest in North America, established by Cantonese Gold Rush-era migrants. The community maintains Lunar New Year parades, Tong community associations, and Cantonese opera clubs.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },
  {
    name: "White American",
    ethnic_group_id: "white-american-sf",
    country_id: "united-states",
    state_id: "california",
    local_government_id: "san-francisco-county",
    languages: ["English"],
    general_info: {
      ethnicGroupDescription: "San Francisco's white American population includes major Irish and Italian communities who shaped the city's character, as well as LGBTQ+ communities centred in the Castro district that define the city's progressive identity globally.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── HARRIS COUNTY, Texas, USA ────────────────────────────────────────────────
  {
    name: "Hispanic/Latino (Tejano)",
    ethnic_group_id: "tejano-harris",
    country_id: "united-states",
    state_id: "texas",
    local_government_id: "harris-county",
    languages: ["Spanish", "English", "Tex-Mex"],
    general_info: {
      ethnicGroupDescription: "Tejanos are Texans of Mexican descent whose roots predate US annexation of Texas. Houston's East End barrio maintains Tejano music, the quinceañera tradition, and the Cinco de Mayo celebration.",
      isEndangered: false, tribesCount: 3, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },
  {
    name: "African American",
    ethnic_group_id: "african-american-harris",
    country_id: "united-states",
    state_id: "texas",
    local_government_id: "harris-county",
    languages: ["English", "African American Vernacular English"],
    general_info: {
      ethnicGroupDescription: "Houston's African American community is the birthplace of Juneteenth (June 19). The Third Ward neighbourhood is the cultural heart of this community, which has shaped American blues and gospel.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── TRAVIS COUNTY, Texas, USA ────────────────────────────────────────────────
  {
    name: "White American",
    ethnic_group_id: "white-american-travis",
    country_id: "united-states",
    state_id: "texas",
    local_government_id: "travis-county",
    languages: ["English"],
    general_info: {
      ethnicGroupDescription: "Austin's white American population, many with German and Czech pioneer settler heritage from the 1840s, created a city-wide identity around live music and a countercultural tradition summed up in 'Keep Austin Weird'.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Hispanic/Latino (Mexican American)",
    ethnic_group_id: "mexican-american-travis",
    country_id: "united-states",
    state_id: "texas",
    local_government_id: "travis-county",
    languages: ["Spanish", "English"],
    general_info: {
      ethnicGroupDescription: "Austin's historic East Side is the heart of the Mexican American community, whose families have lived in Travis County since before Texas statehood. The community maintains the Fiesta Patrias celebration.",
      isEndangered: false, tribesCount: 2, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },

  // ── GUADALAJARA, Jalisco, Mexico ─────────────────────────────────────────────
  {
    name: "Mestizo (Tapatío)",
    ethnic_group_id: "tapatio-guadalajara",
    country_id: "mexico",
    state_id: "jalisco",
    local_government_id: "guadalajara",
    languages: ["Spanish"],
    general_info: {
      ethnicGroupDescription: "Tapatíos are the people of Guadalajara, whose Mestizo identity gave birth to mariachi music, the Mexican Hat Dance (Jarabe Tapatío), and tequila culture that define Mexico's image worldwide.",
      isEndangered: false, tribesCount: 2, spokenLanguagesCount: 1, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Purépecha",
    ethnic_group_id: "purepecha-guadalajara",
    country_id: "mexico",
    state_id: "jalisco",
    local_government_id: "guadalajara",
    languages: ["Purépecha", "Spanish"],
    general_info: {
      ethnicGroupDescription: "Purépecha (Tarascan) migrants from Michoacán are known for their extraordinary lacquerware, copper-working, and the unique Purépecha language — unrelated to any other known language — that resisted Aztec conquest.",
      isEndangered: false, tribesCount: 4, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── ZAPOPAN, Jalisco, Mexico ─────────────────────────────────────────────────
  {
    name: "Mestizo",
    ethnic_group_id: "mestizo-zapopan",
    country_id: "mexico",
    state_id: "jalisco",
    local_government_id: "zapopan",
    languages: ["Spanish"],
    general_info: {
      ethnicGroupDescription: "Zapopan's Mestizo majority centres its cultural life on the Basilica of Zapopan, whose Virgin statue is carried in one of Mexico's largest religious processions on October 12, drawing over a million pilgrims.",
      isEndangered: false, tribesCount: 1, spokenLanguagesCount: 1, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Huichol (Wixáritari)",
    ethnic_group_id: "huichol-zapopan",
    country_id: "mexico",
    state_id: "jalisco",
    local_government_id: "zapopan",
    languages: ["Wixáritari", "Spanish"],
    general_info: {
      ethnicGroupDescription: "The Huichol are one of Mexico's most culturally intact indigenous peoples, famous for their psychedelic peyote pilgrimage to the sacred desert of Wirikuta and their vibrant yarn paintings (nierikas).",
      isEndangered: false, tribesCount: 3, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── OAXACA DE JUÁREZ, Oaxaca, Mexico ─────────────────────────────────────────
  {
    name: "Zapotec",
    ethnic_group_id: "zapotec-oaxaca-city",
    country_id: "mexico",
    state_id: "oaxaca",
    local_government_id: "oaxaca-de-juarez",
    languages: ["Valley Zapotec", "Spanish"],
    general_info: {
      ethnicGroupDescription: "Builders of Monte Albán (500 BCE), one of the Americas' first cities, the Zapotec maintain the Guelaguetza festival, black clay (barro negro) pottery, and Valley Zapotec language in Oaxaca city.",
      isEndangered: false, tribesCount: 8, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Mixtec",
    ethnic_group_id: "mixtec-oaxaca-city",
    country_id: "mexico",
    state_id: "oaxaca",
    local_government_id: "oaxaca-de-juarez",
    languages: ["Mixtec", "Spanish"],
    general_info: {
      ethnicGroupDescription: "The Mixtec ('People of the Rain') produced the finest pre-Columbian screenfold books (codices) in the Americas and are renowned goldsmiths. Their community maintains filigree jewelry-making and the temazcal healing tradition.",
      isEndangered: false, tribesCount: 6, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },

  // ── TEHUANTEPEC, Oaxaca, Mexico ──────────────────────────────────────────────
  {
    name: "Zapotec (Isthmus)",
    ethnic_group_id: "zapotec-isthmus-tehuantepec",
    country_id: "mexico",
    state_id: "oaxaca",
    local_government_id: "tehuantepec",
    languages: ["Isthmus Zapotec", "Spanish"],
    general_info: {
      ethnicGroupDescription: "The Isthmus Zapotec are known for their matriarchal market society where women control commerce and wear the elaborate Tehuana dress immortalised by Frida Kahlo, alongside the Muxe third-gender tradition.",
      isEndangered: false, tribesCount: 3, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Huave (Ikoots)",
    ethnic_group_id: "huave-tehuantepec",
    country_id: "mexico",
    state_id: "oaxaca",
    local_government_id: "tehuantepec",
    languages: ["Huave", "Spanish"],
    general_info: {
      ethnicGroupDescription: "The Huave (Ikoots — 'us people') are a coastal fishing people of the Mar Muerto lagoon whose language is a geographic isolate, unrelated to any neighbouring language family. Their traditional culture faces pressure from Zapotec expansion.",
      isEndangered: true, tribesCount: 4, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── SÃO PAULO CITY, São Paulo, Brazil ────────────────────────────────────────
  {
    name: "Japanese Brazilian (Nikkei)",
    ethnic_group_id: "nikkei-sao-paulo",
    country_id: "brazil",
    state_id: "sao-paulo",
    local_government_id: "sao-paulo-city",
    languages: ["Japanese", "Portuguese"],
    general_info: {
      ethnicGroupDescription: "Brazil holds the world's largest Japanese diaspora outside Japan, concentrated in São Paulo's Liberdade neighbourhood. Five generations of Nikkei Brazilians have created a unique Japanese-Brazilian fusion culture.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Lebanese Brazilian",
    ethnic_group_id: "lebanese-brazilian-sao-paulo",
    country_id: "brazil",
    state_id: "sao-paulo",
    local_government_id: "sao-paulo-city",
    languages: ["Arabic", "Portuguese"],
    general_info: {
      ethnicGroupDescription: "Brazil has the world's largest Lebanese diaspora. São Paulo's Árabe neighbourhood is the hub of a community that has produced presidents, mayors, and shaped Brazilian cuisine with esfiha and kibbeh.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },

  // ── CAMPINAS, São Paulo, Brazil ──────────────────────────────────────────────
  {
    name: "White Brazilian (Italian descent)",
    ethnic_group_id: "italian-brazilian-campinas",
    country_id: "brazil",
    state_id: "sao-paulo",
    local_government_id: "campinas",
    languages: ["Portuguese", "Italian (Talian dialect)"],
    general_info: {
      ethnicGroupDescription: "Italian immigrants dominated Campinas' coffee plantation labour force from the 1880s. Their descendants maintain Italian-origin surnames, cuisine, and Oktoberfest-style festivals.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Afro-Brazilian",
    ethnic_group_id: "afro-brazilian-campinas",
    country_id: "brazil",
    state_id: "sao-paulo",
    local_government_id: "campinas",
    languages: ["Portuguese"],
    general_info: {
      ethnicGroupDescription: "Campinas was a major coffee economy centre and its Afro-Brazilian community traces descent from enslaved workers. The city hosts active Quilombola (maroon descendants) communities and significant Congado festival traditions.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 1, writtenLanguagesCount: 1,
    },
  },

  // ── SALVADOR, Bahia, Brazil ──────────────────────────────────────────────────
  {
    name: "Afro-Brazilian (Candomblé communities)",
    ethnic_group_id: "afro-brazilian-salvador",
    country_id: "brazil",
    state_id: "bahia",
    local_government_id: "salvador",
    languages: ["Portuguese", "Yoruba (ceremonial)", "Fon (ceremonial)"],
    general_info: {
      ethnicGroupDescription: "Salvador is the spiritual capital of Afro-Brazilian culture. The city's terreiro (Candomblé temple) network maintains Yoruba, Fon, and Bantu orixá worship brought by enslaved Africans.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Mixed/Pardo Brazilian",
    ethnic_group_id: "pardo-salvador",
    country_id: "brazil",
    state_id: "bahia",
    local_government_id: "salvador",
    languages: ["Portuguese"],
    general_info: {
      ethnicGroupDescription: "The majority of Salvador's population is Pardo — of mixed African, indigenous, and European ancestry. They lead the world's largest street carnival and maintain capoeira angola traditions.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 1, writtenLanguagesCount: 1,
    },
  },

  // ── FEIRA DE SANTANA, Bahia, Brazil ──────────────────────────────────────────
  {
    name: "Mixed/Pardo Brazilian",
    ethnic_group_id: "pardo-feira-de-santana",
    country_id: "brazil",
    state_id: "bahia",
    local_government_id: "feira-de-santana",
    languages: ["Portuguese"],
    general_info: {
      ethnicGroupDescription: "Feira de Santana's Pardo majority is rooted in the sertão cattle-herding vaqueiro culture, forró music, and the vibrant micareta off-season carnival tradition that spreads Afro-Brazilian axé music inland.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 1, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Afro-Brazilian",
    ethnic_group_id: "afro-brazilian-feira",
    country_id: "brazil",
    state_id: "bahia",
    local_government_id: "feira-de-santana",
    languages: ["Portuguese"],
    general_info: {
      ethnicGroupDescription: "The Afro-Brazilian community of Feira de Santana maintains Quilombo (maroon community) heritage and Candomblé traditions, alongside the jongo and samba de roda circle dance traditions.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 1, writtenLanguagesCount: 1,
    },
  },

  // ── LIMA PROVINCE, Lima, Peru ─────────────────────────────────────────────────
  {
    name: "Mestizo (Limeño)",
    ethnic_group_id: "mestizo-lima",
    country_id: "peru",
    state_id: "lima",
    local_government_id: "lima-province",
    languages: ["Spanish"],
    general_info: {
      ethnicGroupDescription: "Limeños created one of the world's richest culinary cultures — ceviche, lomo saltado, and chifa — through the blending of Andean, Amazonian, Spanish, African, and Asian influences.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Quechua migrants",
    ethnic_group_id: "quechua-migrants-lima",
    country_id: "peru",
    state_id: "lima",
    local_government_id: "lima-province",
    languages: ["Quechua", "Spanish"],
    general_info: {
      ethnicGroupDescription: "Massive internal migration from the Andes brought millions of Quechua speakers to Lima. The cone (periphery) districts maintain highland festivals, Andean music, and the ayni reciprocal labour tradition.",
      isEndangered: false, tribesCount: 5, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── CALLAO, Lima, Peru ────────────────────────────────────────────────────────
  {
    name: "Afro-Peruvian",
    ethnic_group_id: "afro-peruvian-callao",
    country_id: "peru",
    state_id: "lima",
    local_government_id: "callao",
    languages: ["Spanish"],
    general_info: {
      ethnicGroupDescription: "Afro-Peruvians in Callao descended from enslaved Africans brought to work the coastal port economy. They invented the cajón (box drum) that became central to Spanish flamenco and maintain the festejo and landó tradition.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 1, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Chinese Peruvian (Tusán)",
    ethnic_group_id: "tusan-callao",
    country_id: "peru",
    state_id: "lima",
    local_government_id: "callao",
    languages: ["Cantonese", "Spanish"],
    general_info: {
      ethnicGroupDescription: "Tusán are Peruvian-born descendants of Cantonese contract labourers who arrived in Callao from 1849. They created chifa (Cantonese-Peruvian) cuisine, now eaten by all Peruvians, and maintain Lunar New Year traditions.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },

  // ── CUSCO CITY, Cusco, Peru ───────────────────────────────────────────────────
  {
    name: "Quechua (Cusqueño)",
    ethnic_group_id: "quechua-cusco-city",
    country_id: "peru",
    state_id: "cusco",
    local_government_id: "cusco-city",
    languages: ["Cusco Quechua", "Spanish"],
    general_info: {
      ethnicGroupDescription: "The Quechua people of Cusco are direct descendants of the Inca imperial core. They maintain the Inti Raymi sun festival, the world's most elaborate weaving traditions, and an agricultural calendar tied to Andean cosmology.",
      isEndangered: false, tribesCount: 8, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Mestizo (Cusqueño)",
    ethnic_group_id: "mestizo-cusco-city",
    country_id: "peru",
    state_id: "cusco",
    local_government_id: "cusco-city",
    languages: ["Spanish", "Quechua"],
    general_info: {
      ethnicGroupDescription: "Cusco's Mestizo urban population blends Spanish colonial and Inca heritage, maintaining baroque colonial churches built on Inca stone foundations, the Corpus Christi festival, and a distinct Andean-Baroque artistic school.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── URUBAMBA, Cusco, Peru ─────────────────────────────────────────────────────
  {
    name: "Quechua (Sacred Valley)",
    ethnic_group_id: "quechua-urubamba",
    country_id: "peru",
    state_id: "cusco",
    local_government_id: "urubamba",
    languages: ["Cusco Quechua", "Spanish"],
    general_info: {
      ethnicGroupDescription: "The Quechua communities of the Sacred Valley are traditional weavers producing the most technically complex textiles in the Andes, maintaining pre-Inca weaving patterns in villages like Chinchero and Pisac.",
      isEndangered: false, tribesCount: 5, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Aymara",
    ethnic_group_id: "aymara-urubamba",
    country_id: "peru",
    state_id: "cusco",
    local_government_id: "urubamba",
    languages: ["Aymara", "Spanish"],
    general_info: {
      ethnicGroupDescription: "A smaller Aymara-speaking community from the Lake Titicaca borderlands settled in the Urubamba area, maintaining their Andean cosmology centred on Pachamama (Earth Mother) and the totora reed-boat building tradition.",
      isEndangered: false, tribesCount: 3, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── SYDNEY, New South Wales, Australia ───────────────────────────────────────
  {
    name: "Eora (Aboriginal)",
    ethnic_group_id: "eora-sydney",
    country_id: "australia",
    state_id: "new-south-wales",
    local_government_id: "sydney",
    languages: ["Darug (Eora language)", "English"],
    general_info: {
      ethnicGroupDescription: "The Eora are the Aboriginal peoples of the Sydney coastal region whose Songlines, rock engravings, and middens record 65,000 years of continuous habitation. The name 'Sydney' overlies Gadigal country.",
      isEndangered: true, tribesCount: 5, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Chinese Australian",
    ethnic_group_id: "chinese-australian-sydney",
    country_id: "australia",
    state_id: "new-south-wales",
    local_government_id: "sydney",
    languages: ["Cantonese", "Mandarin", "English"],
    general_info: {
      ethnicGroupDescription: "Sydney has Australia's largest Chinese community, with roots in the Gold Rush of the 1850s. Burwood, Chatswood, and Haymarket host Lunar New Year and Mid-Autumn festival traditions.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },

  // ── NEWCASTLE, New South Wales, Australia ────────────────────────────────────
  {
    name: "Awabakal (Aboriginal)",
    ethnic_group_id: "awabakal-newcastle",
    country_id: "australia",
    state_id: "new-south-wales",
    local_government_id: "newcastle",
    languages: ["Awabakal language", "English"],
    general_info: {
      ethnicGroupDescription: "The Awabakal are the traditional custodians of the Newcastle and Lake Macquarie region. Their language, nearly extinct by the 20th century, is undergoing active revitalization by the Awabakal community.",
      isEndangered: true, tribesCount: 3, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Anglo-Celtic Australian",
    ethnic_group_id: "anglo-celtic-newcastle",
    country_id: "australia",
    state_id: "new-south-wales",
    local_government_id: "newcastle",
    languages: ["English"],
    general_info: {
      ethnicGroupDescription: "Newcastle's Anglo-Celtic majority is rooted in the coal mining and steel-working heritage of the Hunter Valley, shaping a distinct working-class identity expressed through rugby league and ANZAC Day commemorations.",
      isEndangered: false, tribesCount: 0, spokenLanguagesCount: 1, writtenLanguagesCount: 1,
    },
  },

  // ── BRISBANE, Queensland, Australia ──────────────────────────────────────────
  {
    name: "Turrbal and Jagera (Aboriginal)",
    ethnic_group_id: "turrbal-jagera-brisbane",
    country_id: "australia",
    state_id: "queensland",
    local_government_id: "brisbane",
    languages: ["Turrbal language", "Yuggera language", "English"],
    general_info: {
      ethnicGroupDescription: "The Turrbal and Jagera peoples are the traditional owners of Brisbane. Their Musgrave Park in South Brisbane is a nationally significant Aboriginal cultural space.",
      isEndangered: true, tribesCount: 4, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Pacific Islander Australian",
    ethnic_group_id: "pacific-islander-brisbane",
    country_id: "australia",
    state_id: "queensland",
    local_government_id: "brisbane",
    languages: ["Samoan", "Tongan", "Fijian", "English"],
    general_info: {
      ethnicGroupDescription: "Brisbane has Australia's largest Pacific Islander community outside Sydney, with significant Samoan, Tongan, and Fijian populations. They contribute vibrant church choir, umu feast, and slit-drum cultural traditions.",
      isEndangered: false, tribesCount: 5, spokenLanguagesCount: 4, writtenLanguagesCount: 3,
    },
  },

  // ── CAIRNS, Queensland, Australia ────────────────────────────────────────────
  {
    name: "Torres Strait Islander",
    ethnic_group_id: "torres-strait-islander-cairns",
    country_id: "australia",
    state_id: "queensland",
    local_government_id: "cairns",
    languages: ["Meriam Mir", "Kala Lagaw Ya", "Kriol", "English"],
    general_info: {
      ethnicGroupDescription: "Torres Strait Islanders are a Melanesian people with a sea-based culture centred on dugong hunting, traditional canoe navigation, and the dhari (headdress) dance. Cairns is their main urban centre on the mainland.",
      isEndangered: false, tribesCount: 8, spokenLanguagesCount: 4, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Djabugay (Aboriginal)",
    ethnic_group_id: "djabugay-cairns",
    country_id: "australia",
    state_id: "queensland",
    local_government_id: "cairns",
    languages: ["Djabugay language", "English"],
    general_info: {
      ethnicGroupDescription: "The Djabugay are the Aboriginal rainforest people of the Cairns hinterland whose language and culture were nearly destroyed by the sugar industry. Active revitalisation programmes operate through Tjapukai Cultural Centre.",
      isEndangered: true, tribesCount: 3, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── MORESBY NORTH-EAST, NCD, Papua New Guinea ────────────────────────────────
  {
    name: "Motu-Koitabu",
    ethnic_group_id: "motu-koitabu-moresby-ne",
    country_id: "papua-new-guinea",
    state_id: "ncd",
    local_government_id: "moresby-north-east",
    languages: ["Motu", "Koita", "Tok Pisin", "English"],
    general_info: {
      ethnicGroupDescription: "The Motu-Koitabu are the traditional landowners of Port Moresby, known historically for their hiri trade voyages — long-distance canoe expeditions exchanging Motu pottery for Papuan sago along the Gulf of Papua coast.",
      isEndangered: false, tribesCount: 4, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Koiari",
    ethnic_group_id: "koiari-moresby-ne",
    country_id: "papua-new-guinea",
    state_id: "ncd",
    local_government_id: "moresby-north-east",
    languages: ["Koiari", "Tok Pisin"],
    general_info: {
      ethnicGroupDescription: "The Koiari (Koita) are the Papuan-speaking traditional owners of the hinterland behind Port Moresby. Their traditional garden magic ceremonies and sago palm management practices are maintained alongside modern urban life.",
      isEndangered: false, tribesCount: 3, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── MORESBY SOUTH, NCD, Papua New Guinea ─────────────────────────────────────
  {
    name: "Motu-Koitabu",
    ethnic_group_id: "motu-koitabu-moresby-s",
    country_id: "papua-new-guinea",
    state_id: "ncd",
    local_government_id: "moresby-south",
    languages: ["Motu", "Hiri Motu", "Tok Pisin", "English"],
    general_info: {
      ethnicGroupDescription: "The southern Port Moresby Motu community at Badili and Hanuabada (the original stilt-house village) maintain the most visible traditional Motu culture in the capital, including the hiri moale festival.",
      isEndangered: false, tribesCount: 3, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Highland Migrants (Huli, Chimbu)",
    ethnic_group_id: "highland-migrants-moresby-s",
    country_id: "papua-new-guinea",
    state_id: "ncd",
    local_government_id: "moresby-south",
    languages: ["Huli", "Chimbu", "Tok Pisin"],
    general_info: {
      ethnicGroupDescription: "Migrants from PNG's Highlands — particularly Huli wigmen from Hela Province and Chimbu from the Eastern Highlands — maintain their elaborate feather-and-fur headdresses and brideprice exchange ceremonies in an urban context.",
      isEndangered: false, tribesCount: 8, spokenLanguagesCount: 4, writtenLanguagesCount: 1,
    },
  },

  // ── LAE, Morobe, Papua New Guinea ────────────────────────────────────────────
  {
    name: "Adzera",
    ethnic_group_id: "adzera-lae",
    country_id: "papua-new-guinea",
    state_id: "morobe",
    local_government_id: "lae",
    languages: ["Adzera", "Tok Pisin", "English"],
    general_info: {
      ethnicGroupDescription: "The Adzera are the traditional inhabitants of the Markham Valley, an Austronesian-speaking agricultural people known for elaborate yam festivals and the wanpis (men's ceremonial house) tradition.",
      isEndangered: false, tribesCount: 5, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Melanesian (urban migrants)",
    ethnic_group_id: "melanesian-urban-lae",
    country_id: "papua-new-guinea",
    state_id: "morobe",
    local_government_id: "lae",
    languages: ["Tok Pisin", "English"],
    general_info: {
      ethnicGroupDescription: "Lae's urban population draws migrants from across PNG's highlands and islands, creating a dense ethnic mixture where Tok Pisin serves as the shared language. Sing-sing gatherings are where inter-ethnic PNG cultural exchange is most visible.",
      isEndangered: false, tribesCount: 15, spokenLanguagesCount: 5, writtenLanguagesCount: 1,
    },
  },

  // ── HUON GULF, Morobe, Papua New Guinea ──────────────────────────────────────
  {
    name: "Siassi Islanders",
    ethnic_group_id: "siassi-huon-gulf",
    country_id: "papua-new-guinea",
    state_id: "morobe",
    local_government_id: "huon-gulf",
    languages: ["Siassi", "Tok Pisin"],
    general_info: {
      ethnicGroupDescription: "The Siassi Islanders of Morobe are renowned throughout PNG as long-distance traders who historically carried wooden bowls, pigs, and taro across hundreds of kilometres by outrigger canoe.",
      isEndangered: false, tribesCount: 4, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Bukawa",
    ethnic_group_id: "bukawa-huon-gulf",
    country_id: "papua-new-guinea",
    state_id: "morobe",
    local_government_id: "huon-gulf",
    languages: ["Bukawa", "Tok Pisin"],
    general_info: {
      ethnicGroupDescription: "The Bukawa are a coastal Austronesian-speaking people of the Huon Gulf whose distinctive carved canoe prow boards and elaborate spirit-house carvings are among Morobe's most celebrated traditional art forms.",
      isEndangered: false, tribesCount: 3, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
];
