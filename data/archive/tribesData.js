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
      tribeDescription: "The Ekiti are a Yoruba sub-group from the northeastern Yoruba highlands of Ekiti State, known for their fierce resistance to the Fulani jihad and their dense forest-farming culture. Large numbers live in Ikeja due to labour migration.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Egba",
    tribe_id: "egba-yoruba",
    ethnic_group_id: "yoruba-ikeja",
    local_government_id: "ikeja",
    state_id: "lagos",
    country_id: "nigeria",
    languages: ["Egba dialect of Yoruba", "English"],
    general_info: {
      tribeDescription: "The Egba founded Abeokuta in the 19th century and were among the first Yoruba sub-groups to adopt Christianity and Western education. Their artisan and weaving traditions are historically significant in the Lagos economy.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
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
      tribeDescription: "The Aro Igbo of Arochukwu built a long-distance trade network that spanned southeastern Nigeria, leveraging the oracle of Arochukwu as a judicial and commercial institution. Their mercantile legacy continues in Lagos commerce.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Onitsha Igbo",
    tribe_id: "onitsha-igbo",
    ethnic_group_id: "igbo-ikeja",
    local_government_id: "ikeja",
    state_id: "lagos",
    country_id: "nigeria",
    languages: ["Onitsha dialect of Igbo", "English"],
    general_info: {
      tribeDescription: "The Onitsha on the Niger River bank are one of Nigeria's most important trading groups, whose market is the largest in West Africa. Their royal Obi institution and annual Ofala festival maintain a distinct court culture.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── AWORI YORUBA (Lagos Island) ──────────────────────────────────────────────
  {
    name: "Badagry Awori",
    tribe_id: "badagry-awori",
    ethnic_group_id: "awori-lagos-island",
    local_government_id: "lagos-island",
    state_id: "lagos",
    country_id: "nigeria",
    languages: ["Awori Yoruba", "English"],
    general_info: {
      tribeDescription: "The Badagry Awori are the traditional people of Badagry on the western Lagos coast, one of the principal ports of the transatlantic slave trade. Their 'Point of No Return' heritage site is a major site of historical memory.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Epe Awori",
    tribe_id: "epe-awori",
    ethnic_group_id: "awori-lagos-island",
    local_government_id: "lagos-island",
    state_id: "lagos",
    country_id: "nigeria",
    languages: ["Awori Yoruba", "Ijebu Yoruba", "English"],
    general_info: {
      tribeDescription: "The Epe Awori inhabit the Epe area of eastern Lagos, traditionally fishermen and farmers of the lagoon coast who maintain the annual Ojude Oba festival and distinct lagoon-fishing traditions.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── EFIK (Lagos Island) ──────────────────────────────────────────────────────
  {
    name: "Efik proper",
    tribe_id: "efik-proper",
    ethnic_group_id: "efik-lagos-island",
    local_government_id: "lagos-island",
    state_id: "lagos",
    country_id: "nigeria",
    languages: ["Efik", "English"],
    general_info: {
      tribeDescription: "The Efik proper are the dominant sub-group of the Efik nation, historically centred on Calabar and the Ekpe secret society that governed commerce and law. Their community in Lagos Island maintains the Efik cultural association.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Qua",
    tribe_id: "qua",
    ethnic_group_id: "efik-lagos-island",
    local_government_id: "lagos-island",
    state_id: "lagos",
    country_id: "nigeria",
    languages: ["Ejagham (Qua)", "Efik", "English"],
    general_info: {
      tribeDescription: "The Qua people are a distinct ethnic group closely associated with the Efik in Calabar, known for their Ekpe masquerade and nsibidi script — one of the few indigenous writing systems of sub-Saharan Africa.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },

  // ── HAUSA-FULANI (Kano Municipal) ────────────────────────────────────────────
  {
    name: "Kano Hausa",
    tribe_id: "kano-hausa",
    ethnic_group_id: "hausa-fulani-kano-municipal",
    local_government_id: "kano-municipal",
    state_id: "kano",
    country_id: "nigeria",
    languages: ["Hausa", "Arabic"],
    general_info: {
      tribeDescription: "The Kano Hausa are the founding people of the Kano emirate, whose ancestors built the ancient city walls (Kano Old City). Their indigo-dyeing pits at Kofar Mata have operated continuously for over 500 years.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Sokoto Fulani",
    tribe_id: "sokoto-fulani",
    ethnic_group_id: "hausa-fulani-kano-municipal",
    local_government_id: "kano-municipal",
    state_id: "kano",
    country_id: "nigeria",
    languages: ["Fulfulde", "Hausa", "Arabic"],
    general_info: {
      tribeDescription: "The Sokoto Fulani are the Islamic scholar-warriors who launched the Sokoto Jihad of 1804, conquering the Hausa city-states and establishing the Sokoto Caliphate — once the largest empire in African history. Their descendants lead the emirate system.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },

  // ── KANURI (Kano Municipal) ──────────────────────────────────────────────────
  {
    name: "Manga Kanuri",
    tribe_id: "manga-kanuri",
    ethnic_group_id: "kanuri-kano-municipal",
    local_government_id: "kano-municipal",
    state_id: "kano",
    country_id: "nigeria",
    languages: ["Manga Kanuri", "Hausa"],
    general_info: {
      tribeDescription: "The Manga are a Kanuri sub-group of northeastern Nigeria and Niger, traditionally nomadic herders who maintained close ties to the Kanem-Bornu court. Their dialect differs from central Kanuri and preserves older linguistic features.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Yerwa Kanuri",
    tribe_id: "yerwa-kanuri",
    ethnic_group_id: "kanuri-kano-municipal",
    local_government_id: "kano-municipal",
    state_id: "kano",
    country_id: "nigeria",
    languages: ["Yerwa Kanuri", "Hausa", "Arabic"],
    general_info: {
      tribeDescription: "The Yerwa Kanuri are centred on Maiduguri (Yerwa), the modern capital of Borno State and historic seat of Kanem-Bornu influence. Their community in Kano traces its presence to inter-emirate trade relationships.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },

  // ── HAUSA-FULANI (Fagge) ─────────────────────────────────────────────────────
  {
    name: "Kantin Kwari Hausa traders",
    tribe_id: "kantin-kwari-hausa",
    ethnic_group_id: "hausa-fulani-fagge",
    local_government_id: "fagge",
    state_id: "kano",
    country_id: "nigeria",
    languages: ["Hausa", "Fulfulde"],
    general_info: {
      tribeDescription: "The textile traders of Kantin Kwari Market in Fagge constitute a distinct commercial sub-community of Hausa and Fulani traders who specialise in woven and dyed fabrics, maintaining the guild-based craft traditions of the old Kano trade.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Zaria Fulani",
    tribe_id: "zaria-fulani",
    ethnic_group_id: "hausa-fulani-fagge",
    local_government_id: "fagge",
    state_id: "kano",
    country_id: "nigeria",
    languages: ["Fulfulde", "Hausa"],
    general_info: {
      tribeDescription: "The Zaria Fulani are a pastoral and scholarly sub-group of the Fulani, settled around the Zaria emirate. Their community in Fagge specialises in cattle trading between rural Hausaland and Kano's urban markets.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── SHUWA ARAB (Fagge) ───────────────────────────────────────────────────────
  {
    name: "Shuwa Arab proper",
    tribe_id: "shuwa-arab-proper",
    ethnic_group_id: "shuwa-arab-fagge",
    local_government_id: "fagge",
    state_id: "kano",
    country_id: "nigeria",
    languages: ["Chadian Arabic", "Hausa"],
    general_info: {
      tribeDescription: "The Shuwa Arab proper are semi-nomadic cattle herders descended from Arab migrants who arrived in the Lake Chad basin in the 14th–16th centuries. They maintain a distinct Chadian Arabic dialect and patrilineal clan (ashira) social structure.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Baggara",
    tribe_id: "baggara",
    ethnic_group_id: "shuwa-arab-fagge",
    local_government_id: "fagge",
    state_id: "kano",
    country_id: "nigeria",
    languages: ["Baggara Arabic", "Hausa"],
    general_info: {
      tribeDescription: "The Baggara ('cattle people') are a related Arabised cattle-herding group straddling Chad and Nigeria whose seasonal migration patterns bring them through Kano's markets. They maintain a reputation as skilled horsemen and traders.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── KIKUYU (Westlands, Nairobi) ──────────────────────────────────────────────
  {
    name: "Kiambu Kikuyu",
    tribe_id: "kiambu-kikuyu",
    ethnic_group_id: "kikuyu-westlands",
    local_government_id: "westlands",
    state_id: "nairobi",
    country_id: "kenya",
    languages: ["Gikuyu", "Swahili", "English"],
    general_info: {
      tribeDescription: "The Kiambu Kikuyu from the fertile highlands south of Mount Kenya were among the first to engage with colonial trade and education. They have disproportionately shaped Kenyan politics and business since independence.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Nyeri Kikuyu",
    tribe_id: "nyeri-kikuyu",
    ethnic_group_id: "kikuyu-westlands",
    local_government_id: "westlands",
    state_id: "nairobi",
    country_id: "kenya",
    languages: ["Gikuyu", "Swahili", "English"],
    general_info: {
      tribeDescription: "The Nyeri Kikuyu from the northern slopes of Mount Kenya were central to the Mau Mau uprising (1952–60). Their region — the spiritual homeland of Kikuyu culture around the sacred Mũgumo tree — continues to be a stronghold of Gikuyu cultural identity.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },

  // ── ASIAN KENYAN (Westlands, Nairobi) ────────────────────────────────────────
  {
    name: "Gujarati Kenyan",
    tribe_id: "gujarati-kenyan",
    ethnic_group_id: "asian-kenyan-westlands",
    local_government_id: "westlands",
    state_id: "nairobi",
    country_id: "kenya",
    languages: ["Gujarati", "Swahili", "English"],
    general_info: {
      tribeDescription: "Gujarati Kenyans, many of Patidar and Lohana caste background, dominate East African retail and wholesale trade. The Westlands Swaminarayan temple and associated community centre is a hub of religious and cultural life for this group.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Ismaili Kenyan",
    tribe_id: "ismaili-kenyan",
    ethnic_group_id: "asian-kenyan-westlands",
    local_government_id: "westlands",
    state_id: "nairobi",
    country_id: "kenya",
    languages: ["Gujarati", "English", "Swahili"],
    general_info: {
      tribeDescription: "The Ismaili Shi'a Muslim community of Kenya, followers of the Aga Khan, have been pioneers of East African development and philanthropy. Their Westlands Jamatkhana is one of Africa's most architecturally significant Ismaili prayer houses.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },

  // ── KAMBA (Embakasi, Nairobi) ────────────────────────────────────────────────
  {
    name: "Machakos Kamba",
    tribe_id: "machakos-kamba",
    ethnic_group_id: "kamba-embakasi",
    local_government_id: "embakasi",
    state_id: "nairobi",
    country_id: "kenya",
    languages: ["Kikamba", "Swahili", "English"],
    general_info: {
      tribeDescription: "The Machakos Kamba are centred on Machakos town and were the first Kamba group to engage heavily with colonial trade and missionary Christianity. Their woodcarving tradition — introduced by Scottish missionaries who taught tool use — is now Kenya's largest craft export industry.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Kitui Kamba",
    tribe_id: "kitui-kamba",
    ethnic_group_id: "kamba-embakasi",
    local_government_id: "embakasi",
    state_id: "nairobi",
    country_id: "kenya",
    languages: ["Kikamba", "Swahili", "English"],
    general_info: {
      tribeDescription: "The Kitui Kamba from the semi-arid eastern lowlands are historically known as long-distance traders of ivory and beeswax who linked interior Kenya to the Swahili coast. Their beekeeping traditions and Kilumi dance remain culturally central.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },

  // ── LUHYA (Embakasi, Nairobi) ────────────────────────────────────────────────
  {
    name: "Bukusu",
    tribe_id: "bukusu",
    ethnic_group_id: "luhya-embakasi",
    local_government_id: "embakasi",
    state_id: "nairobi",
    country_id: "kenya",
    languages: ["Lubukusu", "Swahili", "English"],
    general_info: {
      tribeDescription: "The Bukusu are the largest Luhya sub-tribe, centred on Bungoma County in western Kenya. They are known for their vigorous male circumcision ceremony (khwitirira), in which initiates must demonstrate bravery, and for the Isukuti drum tradition.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Maragoli",
    tribe_id: "maragoli",
    ethnic_group_id: "luhya-embakasi",
    local_government_id: "embakasi",
    state_id: "nairobi",
    country_id: "kenya",
    languages: ["Lulogooli", "Swahili", "English"],
    general_info: {
      tribeDescription: "The Maragoli of Vihiga County are the most densely populated Luhya sub-tribe and among the earliest Kenyan converts to Quakerism. Their Maragoli Friends Church network has made them influential in Kenyan education and health sectors.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },

  // ── SWAHILI (Mvita, Mombasa) ─────────────────────────────────────────────────
  {
    name: "Mombasa Swahili (Twelve Tribes)",
    tribe_id: "mombasa-swahili",
    ethnic_group_id: "swahili-mvita",
    local_government_id: "mvita",
    state_id: "mombasa",
    country_id: "kenya",
    languages: ["Kiunguja Swahili", "Arabic", "English"],
    general_info: {
      tribeDescription: "The Twelve Tribes of Mombasa (Miji Kumi na Mbili) are the founding clans of Mombasa Island who trace origins to early Arab-Bantu mixing. They maintain the governance of the Old Town through the Shirazi cultural association.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Pate Swahili",
    tribe_id: "pate-swahili",
    ethnic_group_id: "swahili-mvita",
    local_government_id: "mvita",
    state_id: "mombasa",
    country_id: "kenya",
    languages: ["Kipate dialect", "Swahili"],
    general_info: {
      tribeDescription: "The Pate Swahili from Pate Island in the Lamu Archipelago maintained one of the oldest Swahili sultanates and a distinct dialect of Swahili. Their weaving and silversmithing traditions are among the oldest continuously practised crafts on the East African coast.",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── BAJUNI (Mvita, Mombasa) ──────────────────────────────────────────────────
  {
    name: "Bajuni proper",
    tribe_id: "bajuni-proper",
    ethnic_group_id: "bajuni-mvita",
    local_government_id: "mvita",
    state_id: "mombasa",
    country_id: "kenya",
    languages: ["Kibajuni", "Swahili"],
    general_info: {
      tribeDescription: "The Bajuni proper are the core fishing and dhow-sailing community of the Bajuni Islands between the Kenya-Somalia coast. Their small numbers (fewer than 50,000) and displacement due to Somali conflict make their language and culture highly vulnerable.",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Amu (Lamu Bajuni)",
    tribe_id: "amu-lamu-bajuni",
    ethnic_group_id: "bajuni-mvita",
    local_government_id: "mvita",
    state_id: "mombasa",
    country_id: "kenya",
    languages: ["Kiamu dialect", "Swahili"],
    general_info: {
      tribeDescription: "The Amu are a coastal Bajuni sub-group centred on Lamu Island whose Kiamu dialect preserves the most archaic features of classical Swahili. Lamu Old Town is a UNESCO World Heritage Site, and Amu craftsmanship in dhow-building and carved doors is world-renowned.",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── DIGO (Likoni, Mombasa) ───────────────────────────────────────────────────
  {
    name: "Digo proper",
    tribe_id: "digo-proper",
    ethnic_group_id: "digo-likoni",
    local_government_id: "likoni",
    state_id: "mombasa",
    country_id: "kenya",
    languages: ["Digo", "Swahili", "English"],
    general_info: {
      tribeDescription: "The Digo proper are the majority Digo sub-group of southern Mombasa and the Kwale Coast, strongly Muslim since the 17th-century Swahili coastal influence. Their kaya (sacred forest shrine) at Kaya Diani is a protected site.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Chonyi",
    tribe_id: "chonyi",
    ethnic_group_id: "digo-likoni",
    local_government_id: "likoni",
    state_id: "mombasa",
    country_id: "kenya",
    languages: ["Chonyi", "Swahili", "English"],
    general_info: {
      tribeDescription: "The Chonyi are one of the nine Mijikenda sub-groups inhabiting the Kenyan coast's kaya sacred forest groves. Their kaya at Ribe near Mombasa is a centre of traditional governance and religious authority, recognised by UNESCO as a World Heritage Site.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },

  // ── DURUMA (Likoni, Mombasa) ─────────────────────────────────────────────────
  {
    name: "Duruma proper",
    tribe_id: "duruma-proper",
    ethnic_group_id: "duruma-likoni",
    local_government_id: "likoni",
    state_id: "mombasa",
    country_id: "kenya",
    languages: ["Duruma", "Swahili"],
    general_info: {
      tribeDescription: "The Duruma proper are the largest Duruma sub-group, inhabiting the hinterland south of Mombasa toward the Tanzanian border. Their kaya sacred forest at Kaya Kambe is a UNESCO World Heritage Site preserving the spiritual and governance traditions of the Mijikenda.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Rabai",
    tribe_id: "rabai",
    ethnic_group_id: "duruma-likoni",
    local_government_id: "likoni",
    state_id: "mombasa",
    country_id: "kenya",
    languages: ["Rabai", "Swahili", "English"],
    general_info: {
      tribeDescription: "The Rabai are a Mijikenda sub-group from the hills north of Mombasa and were one of the first East African peoples to receive Christian missionaries (at Rabai mission, 1844). Their kaya Rabai is among the oldest continuously inhabited settlements on the Kenyan coast.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },

  // ── MARATHI (Mumbai City) ────────────────────────────────────────────────────
  {
    name: "Koli Mahadev",
    tribe_id: "koli-mahadev",
    ethnic_group_id: "marathi-mumbai",
    local_government_id: "mumbai-city",
    state_id: "maharashtra",
    country_id: "india",
    languages: ["Koli dialect of Marathi", "Marathi", "Hindi"],
    general_info: {
      tribeDescription: "The Koli are the original fishing people of Mumbai (Bombay), whose villages — koliwadas — were the settlements that preceded the colonial city. They maintain traditional fishing practices and the Narali Purnima (Coconut Full Moon) festival marking the start of the fishing season.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Warli",
    tribe_id: "warli",
    ethnic_group_id: "marathi-mumbai",
    local_government_id: "mumbai-city",
    state_id: "maharashtra",
    country_id: "india",
    languages: ["Varli language", "Marathi", "Hindi"],
    general_info: {
      tribeDescription: "The Warli are an indigenous people of the Sahyadri hills near Mumbai whose minimalist circular-motif wall paintings have become internationally recognised as a form of folk art. They maintain shamanic traditions centred on the Tarpa flute ceremony.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },

  // ── GUJARATI (Mumbai City) ───────────────────────────────────────────────────
  {
    name: "Patidar",
    tribe_id: "patidar-mumbai",
    ethnic_group_id: "gujarati-mumbai",
    local_government_id: "mumbai-city",
    state_id: "maharashtra",
    country_id: "india",
    languages: ["Gujarati", "Hindi", "English"],
    general_info: {
      tribeDescription: "The Patidar (Patel) are one of Gujarat's most prosperous farming castes who dominate Mumbai's diamond trading and textile industries. Their BAPS Swaminarayan temples are landmark institutions across Mumbai's northern suburbs.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Rabari",
    tribe_id: "rabari-mumbai",
    ethnic_group_id: "gujarati-mumbai",
    local_government_id: "mumbai-city",
    state_id: "maharashtra",
    country_id: "india",
    languages: ["Rabari language", "Gujarati", "Hindi"],
    general_info: {
      tribeDescription: "The Rabari are a pastoral nomadic caste of Kutch and Saurashtra whose women's embroidery featuring mirror-work (abhla bharat) is among the most technically refined textile arts of South Asia. A small Mumbai community maintains craft cooperatives.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },

  // ── MARATHI DESHASTHA (Pune) ─────────────────────────────────────────────────
  {
    name: "Deshastha Brahmin proper",
    tribe_id: "deshastha-brahmin-proper",
    ethnic_group_id: "deshastha-pune",
    local_government_id: "pune",
    state_id: "maharashtra",
    country_id: "india",
    languages: ["Marathi", "Sanskrit", "English"],
    general_info: {
      tribeDescription: "Deshastha Brahmins are the traditional priestly and administrative caste of the Deccan Plateau, who served as revenue administrators, priests, and scholars under the Maratha Empire. Pune's Peshwas were Chitpavan Brahmins, but the Deshastha dominated the wider administrative networks.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Chitpavan Brahmin",
    tribe_id: "chitpavan-brahmin",
    ethnic_group_id: "deshastha-pune",
    local_government_id: "pune",
    state_id: "maharashtra",
    country_id: "india",
    languages: ["Marathi", "Sanskrit", "English"],
    general_info: {
      tribeDescription: "The Chitpavan (Kokanastha) Brahmins provided the Peshwa prime ministers of the Maratha Empire and are disproportionately represented in India's intellectual and administrative elite. Pune's Deccan Gymkhana and Tilak traditions are rooted in this community.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },

  // ── KANNADA (Pune) ───────────────────────────────────────────────────────────
  {
    name: "Vokkaliga",
    tribe_id: "vokkaliga-pune",
    ethnic_group_id: "kannada-pune",
    local_government_id: "pune",
    state_id: "maharashtra",
    country_id: "india",
    languages: ["Kannada", "Marathi", "English"],
    general_info: {
      tribeDescription: "The Vokkaliga are a dominant farming caste of southern Karnataka who have established a community in Pune's western suburbs. Their Gowda Saraswat temple traditions and Karnataka Rajyotsava Day celebrations maintain a distinct identity in the Marathi city.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Lingayat",
    tribe_id: "lingayat-pune",
    ethnic_group_id: "kannada-pune",
    local_government_id: "pune",
    state_id: "maharashtra",
    country_id: "india",
    languages: ["Kannada", "Marathi", "English"],
    general_info: {
      tribeDescription: "The Lingayat are followers of the 12th-century philosopher-saint Basavanna, who founded a Shaiva reform movement rejecting caste hierarchies. Their community in Pune maintains vachana (devotional verse) traditions and the Basaveshwara temple.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },

  // ── TAMIL (Chennai) ──────────────────────────────────────────────────────────
  {
    name: "Vellalar",
    tribe_id: "vellalar-chennai",
    ethnic_group_id: "tamil-chennai",
    local_government_id: "chennai",
    state_id: "tamil-nadu",
    country_id: "india",
    languages: ["Tamil", "English"],
    general_info: {
      tribeDescription: "The Vellalar are the traditional landowning and administrative caste of Tamil Nadu, historically patrons of the arts and literature. Mudaliar, Pillai, and Gounder sub-groups of the Vellalar have shaped Chennai's cultural and educational institutions since the colonial era.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Mudaliar",
    tribe_id: "mudaliar-chennai",
    ethnic_group_id: "tamil-chennai",
    local_government_id: "chennai",
    state_id: "tamil-nadu",
    country_id: "india",
    languages: ["Tamil", "English"],
    general_info: {
      tribeDescription: "The Mudaliar are a broad caste cluster prominent in Chennai who provided military commanders and administrators to the Vijayanagara Empire and later to British colonial governance. Their Ayyavole merchant guild traditions date back to medieval Tamil trade networks.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── TELUGU (Chennai) ─────────────────────────────────────────────────────────
  {
    name: "Kamma",
    tribe_id: "kamma-chennai",
    ethnic_group_id: "telugu-chennai",
    local_government_id: "chennai",
    state_id: "tamil-nadu",
    country_id: "india",
    languages: ["Telugu", "Tamil", "English"],
    general_info: {
      tribeDescription: "The Kamma are a prosperous agrarian caste of coastal Andhra who have had an outsized influence on the Telugu film industry (Tollywood) and media. Their community in Chennai's Anna Nagar area maintains strong ties to Telugu cultural organisations.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Reddy",
    tribe_id: "reddy-chennai",
    ethnic_group_id: "telugu-chennai",
    local_government_id: "chennai",
    state_id: "tamil-nadu",
    country_id: "india",
    languages: ["Telugu", "Tamil", "English"],
    general_info: {
      tribeDescription: "The Reddy are one of Andhra Pradesh's dominant landowning castes and have played a central role in Andhra/Telangana politics since independence. Their professional and business community in Chennai participates in Telugu cultural associations and the Ugadi festival.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },

  // ── GOUNDER (Coimbatore) ─────────────────────────────────────────────────────
  {
    name: "Kongu Vellalar",
    tribe_id: "kongu-vellalar",
    ethnic_group_id: "gounder-coimbatore",
    local_government_id: "coimbatore",
    state_id: "tamil-nadu",
    country_id: "india",
    languages: ["Kongu Tamil", "Tamil", "English"],
    general_info: {
      tribeDescription: "The Kongu Vellalar Gounder are the dominant agricultural community of Coimbatore and the western Kongu Nadu region, known historically for cotton cultivation that made Coimbatore the 'Manchester of South India'. Their identity is tied to the Kaveri River and Murugan temple worship.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Nattar",
    tribe_id: "nattar-coimbatore",
    ethnic_group_id: "gounder-coimbatore",
    local_government_id: "coimbatore",
    state_id: "tamil-nadu",
    country_id: "india",
    languages: ["Tamil", "English"],
    general_info: {
      tribeDescription: "The Nattar (Nadar) are a historically marginalised caste of southern Tamil Nadu who converted in large numbers to Christianity and rose through education and commerce to become one of the most prosperous communities in modern Tamil Nadu, with a strong presence in Coimbatore's textile industry.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── IRULA (Coimbatore) ───────────────────────────────────────────────────────
  {
    name: "Irula proper",
    tribe_id: "irula-proper",
    ethnic_group_id: "irula-coimbatore",
    local_government_id: "coimbatore",
    state_id: "tamil-nadu",
    country_id: "india",
    languages: ["Irula", "Tamil"],
    general_info: {
      tribeDescription: "The Irula proper are the core forest-dwelling hunter-gatherer community of the Nilgiri foothills, renowned as expert snake-catchers whose venom extraction supports India's anti-venom industry. Their traditional knowledge of medicinal plants is recognised but insufficiently legally protected.",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Kurumba",
    tribe_id: "kurumba",
    ethnic_group_id: "irula-coimbatore",
    local_government_id: "coimbatore",
    state_id: "tamil-nadu",
    country_id: "india",
    languages: ["Kurumba language", "Kannada", "Tamil"],
    general_info: {
      tribeDescription: "The Kurumba are indigenous forest-dwellers of the Nilgiri Biosphere Reserve, believed by neighbouring Toda and Badaga communities to possess powerful magic. Their language belongs to the Dravidian family and their shamanic pulli (leopard sorcery) practices are unique in India.",
      isEndangered: true, spokenLanguagesCount: 3, writtenLanguagesCount: 0,
    },
  },

  // ── TIBETAN KHAM (Chengdu) ───────────────────────────────────────────────────
  {
    name: "Khampa proper",
    tribe_id: "khampa-proper-chengdu",
    ethnic_group_id: "tibetan-kham-chengdu",
    local_government_id: "chengdu",
    state_id: "sichuan",
    country_id: "china",
    languages: ["Khampa Tibetan", "Mandarin"],
    general_info: {
      tribeDescription: "The Khampa proper are the highland Tibetan pastoralists and traders from the Kham region (eastern Tibet/western Sichuan). Renowned for their horsemanship, long braided hair, and warrior reputation, they have a large community in Chengdu's Wuhou district near the Tibetan Buddhist quarter.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Dege Tibetan",
    tribe_id: "dege-tibetan",
    ethnic_group_id: "tibetan-kham-chengdu",
    local_government_id: "chengdu",
    state_id: "sichuan",
    country_id: "china",
    languages: ["Dege Tibetan dialect", "Khampa Tibetan", "Mandarin"],
    general_info: {
      tribeDescription: "The Dege Tibetans are from Dege County in western Sichuan, home to the Dege Parkhang printing house — one of Tibet's most important cultural institutions, housing tens of thousands of ancient woodblock texts. Their community maintains the Dege scripture-printing tradition in Chengdu.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },

  // ── TIBETAN KHAM (Garzê) ─────────────────────────────────────────────────────
  {
    name: "Khampa pastoralists",
    tribe_id: "khampa-pastoralists-garze",
    ethnic_group_id: "tibetan-kham-garze",
    local_government_id: "garze",
    state_id: "sichuan",
    country_id: "china",
    languages: ["Khampa Tibetan", "Mandarin"],
    general_info: {
      tribeDescription: "The high-altitude nomadic pastoralists of the Garzê grasslands herd yak at elevations above 4,000 m, maintaining the tent-dwelling, butter-tea, and tsampa (roasted barley) culture central to Tibetan pastoral identity. Their seasonal migration routes are under threat from fencing and settlement projects.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Gyarong Tibetan",
    tribe_id: "gyarong-tibetan",
    ethnic_group_id: "tibetan-kham-garze",
    local_government_id: "garze",
    state_id: "sichuan",
    country_id: "china",
    languages: ["Gyarong language", "Khampa Tibetan", "Mandarin"],
    general_info: {
      tribeDescription: "The Gyarong (Rgyalrong) are a distinct Tibeto-Burman people of the Garzê mountain gorges whose language differs significantly from Tibetan. They maintained independent kingdoms (tusi) until the 18th century and preserve fortified stone tower architecture unique in China.",
      isEndangered: true, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },

  // ── YI (Garzê) ───────────────────────────────────────────────────────────────
  {
    name: "Nuosu Yi",
    tribe_id: "nuosu-yi",
    ethnic_group_id: "yi-garze",
    local_government_id: "garze",
    state_id: "sichuan",
    country_id: "china",
    languages: ["Nuosu Yi", "Mandarin"],
    general_info: {
      tribeDescription: "The Nuosu are the largest Yi sub-group, centred on Liangshan Prefecture in Sichuan, and the custodians of the Yi syllabic script. Their bimo (shaman-priest) class maintains a rich corpus of oral and written ceremonial literature, and the annual Torch Festival is one of Sichuan's most spectacular celebrations.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Sani Yi",
    tribe_id: "sani-yi",
    ethnic_group_id: "yi-garze",
    local_government_id: "garze",
    state_id: "sichuan",
    country_id: "china",
    languages: ["Sani Yi dialect", "Mandarin"],
    general_info: {
      tribeDescription: "The Sani Yi are a branch of the Yi people of Yunnan and the Sichuan borderlands known for their distinctive embroidered dress (featuring large black-and-white geometric patterns) and the Ashima folk legend — a story of tragic love and resistance that has become a symbol of Yi cultural identity across China.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── MEXICAN AMERICAN (Los Angeles County) ────────────────────────────────────
  {
    name: "Tongva (Gabrielino)",
    tribe_id: "tongva-la",
    ethnic_group_id: "mexican-american-la",
    local_government_id: "los-angeles-county",
    state_id: "california",
    country_id: "united-states",
    languages: ["Tongva language (revitalising)", "Spanish", "English"],
    general_info: {
      tribeDescription: "The Tongva are the indigenous people of the Los Angeles Basin, whose homeland (Tovaangar) now includes all of Los Angeles County. They were displaced by Spanish missions in the 18th century and are currently not federally recognised despite active cultural and language revitalization efforts.",
      isEndangered: true, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Chumash",
    tribe_id: "chumash-la",
    ethnic_group_id: "mexican-american-la",
    local_government_id: "los-angeles-county",
    state_id: "california",
    country_id: "united-states",
    languages: ["Chumash languages (revitalising)", "Spanish", "English"],
    general_info: {
      tribeDescription: "The Chumash are the indigenous maritime people of the Santa Barbara Channel and Channel Islands, renowned for their tomol (plank canoes) and complex ceremonial traditions centred on the antap religion. A federally recognised band (Santa Ynez) exists, and the tomol paddling revival has become a symbol of Chumash cultural renewal.",
      isEndangered: true, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },

  // ── TEJANO (Harris County, Texas) ────────────────────────────────────────────
  {
    name: "Karankawa descendants",
    tribe_id: "karankawa-houston",
    ethnic_group_id: "tejano-harris",
    local_government_id: "harris-county",
    state_id: "texas",
    country_id: "united-states",
    languages: ["Spanish", "English"],
    general_info: {
      tribeDescription: "Tejanos with Karankawa ancestry descend from the coastal hunter-gatherers of the Texas Gulf Coast who survived into the 19th century. While the Karankawa are officially considered extinct, a small tribal organisation in Houston maintains ancestral memory and seeks federal acknowledgement.",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Coahuiltecan descendants",
    tribe_id: "coahuiltecan-houston",
    ethnic_group_id: "tejano-harris",
    local_government_id: "harris-county",
    state_id: "texas",
    country_id: "united-states",
    languages: ["Spanish", "English"],
    general_info: {
      tribeDescription: "Coahuiltecan is a collective term for dozens of small hunter-gatherer nations of southern Texas and northeastern Mexico who were absorbed into the Spanish mission system. Many South Texas Tejanos carry Coahuiltecan ancestry and some communities in Houston maintain cultural memory through the Mitote ceremony.",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── MEXICAN AMERICAN (Travis County, Texas) ──────────────────────────────────
  {
    name: "Tlaxcaltecan settlers",
    tribe_id: "tlaxcaltecan-austin",
    ethnic_group_id: "mexican-american-travis",
    local_government_id: "travis-county",
    state_id: "texas",
    country_id: "united-states",
    languages: ["Nahuatl (some)", "Spanish", "English"],
    general_info: {
      tribeDescription: "Tlaxcaltecans allied with the Spanish and were settled in northern New Spain as frontier colonisers. Many South and Central Texas Tejano families carry Tlaxcaltecan ancestry from these 17th-century settlements, maintaining distinct fiesta and folk Catholic traditions in the Austin area.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Coahuiltecan descendants (Austin)",
    tribe_id: "coahuiltecan-austin",
    ethnic_group_id: "mexican-american-travis",
    local_government_id: "travis-county",
    state_id: "texas",
    country_id: "united-states",
    languages: ["Spanish", "English"],
    general_info: {
      tribeDescription: "Austin's Eastside Tejano families who trace descent from Coahuiltecan mission communities maintain ceremonial dances and curanderismo (folk healing) practices rooted in pre-colonial traditions, though full cultural recovery of the Coahuiltecan languages and ceremonies remains incomplete.",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── MESTIZO TAPATÍO (Guadalajara) ────────────────────────────────────────────
  {
    name: "Caxcán",
    tribe_id: "caxcan-guadalajara",
    ethnic_group_id: "tapatio-guadalajara",
    local_government_id: "guadalajara",
    state_id: "jalisco",
    country_id: "mexico",
    languages: ["Spanish"],
    general_info: {
      tribeDescription: "The Caxcán were a fierce Chichimec sub-group who led the Mixtón War (1540–42) against Spanish colonisation of western Mexico — one of the few indigenous revolts that genuinely threatened the entire colonial enterprise. Their descendants are largely assimilated Mestizos in Jalisco.",
      isEndangered: false, spokenLanguagesCount: 1, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Teul-Chichimec",
    tribe_id: "teul-chichimec",
    ethnic_group_id: "tapatio-guadalajara",
    local_government_id: "guadalajara",
    state_id: "jalisco",
    country_id: "mexico",
    languages: ["Spanish"],
    general_info: {
      tribeDescription: "The Teul were a Chichimec group of the Juchipila Canyon in Zacatecas and Jalisco who resisted Spanish conquest during the Mixtón War. Their community is now entirely Mestizo but the Teul archaeological site preserves their pre-colonial cultural memory.",
      isEndangered: false, spokenLanguagesCount: 1, writtenLanguagesCount: 1,
    },
  },

  // ── PURÉPECHA (Guadalajara) ──────────────────────────────────────────────────
  {
    name: "Purépecha proper",
    tribe_id: "purepecha-proper",
    ethnic_group_id: "purepecha-guadalajara",
    local_government_id: "guadalajara",
    state_id: "jalisco",
    country_id: "mexico",
    languages: ["Purépecha", "Spanish"],
    general_info: {
      tribeDescription: "The Purépecha proper of the Pátzcuaro Lake region in Michoacán are the cultural core of the Purépecha nation, maintaining the most active Purépecha language use, the Day of the Dead (Noche de Muertos) at Janitzio island, and traditional copper and lacquerware craft industries.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Tarasco traders",
    tribe_id: "tarasco-traders",
    ethnic_group_id: "purepecha-guadalajara",
    local_government_id: "guadalajara",
    state_id: "jalisco",
    country_id: "mexico",
    languages: ["Purépecha", "Spanish"],
    general_info: {
      tribeDescription: "The Tarasco (Spanish name for Purépecha) craftspeople who trade their distinctive copper goods, lacquerware, and textiles in Guadalajara's markets form a distinct commercial community maintaining economic links between urban Jalisco and traditional Michoacán craftspeople.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── MESTIZO (Zapopan) ────────────────────────────────────────────────────────
  {
    name: "Basílica pilgrims community",
    tribe_id: "basilica-pilgrims-zapopan",
    ethnic_group_id: "mestizo-zapopan",
    local_government_id: "zapopan",
    state_id: "jalisco",
    country_id: "mexico",
    languages: ["Spanish"],
    general_info: {
      tribeDescription: "The devotional community centred on the Basílica de Zapopan maintains the annual October 12 procession of the Virgin of Zapopan through Guadalajara as a living folk-Catholic ritual tradition, blending indigenous and Spanish colonial religious imagery in one of Mexico's most attended annual events.",
      isEndangered: false, spokenLanguagesCount: 1, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Huichol urban community",
    tribe_id: "huichol-urban-zapopan",
    ethnic_group_id: "mestizo-zapopan",
    local_government_id: "zapopan",
    state_id: "jalisco",
    country_id: "mexico",
    languages: ["Wixáritari", "Spanish"],
    general_info: {
      tribeDescription: "A small Huichol (Wixáritari) artisan community sells yarn paintings (nierikas) in Zapopan's crafts market, maintaining cultural and economic links to their sacred mountain homeland in Nayarit and Durango while adapting their art for urban markets.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── HUICHOL (Zapopan) ────────────────────────────────────────────────────────
  {
    name: "Wixáritari proper",
    tribe_id: "wixaritari-proper",
    ethnic_group_id: "huichol-zapopan",
    local_government_id: "zapopan",
    state_id: "jalisco",
    country_id: "mexico",
    languages: ["Wixáritari", "Spanish"],
    general_info: {
      tribeDescription: "The Wixáritari proper inhabit the Sierra Madre Occidental in Nayarit and Jalisco and maintain the world's most intact peyote pilgrimage tradition to the sacred desert of Wirikuta in San Luis Potosí — a 900 km journey completed on foot following routes used for millennia.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Cora (Nayeri)",
    tribe_id: "cora-nayeri",
    ethnic_group_id: "huichol-zapopan",
    local_government_id: "zapopan",
    state_id: "jalisco",
    country_id: "mexico",
    languages: ["Nayeri (Cora)", "Spanish"],
    general_info: {
      tribeDescription: "The Cora (Nayeri) are a related Uto-Aztecan people of the Sierra del Nayar who resisted Spanish colonisation until 1722 — longer than almost any other Mexican group. Their Holy Week ceremony, in which masked figures represent cosmic forces of darkness conquered by the sun, is one of Mesoamerica's most dramatic religious performances.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── ZAPOTEC (Oaxaca de Juárez) ───────────────────────────────────────────────
  {
    name: "Valley Zapotec",
    tribe_id: "valley-zapotec",
    ethnic_group_id: "zapotec-oaxaca-city",
    local_government_id: "oaxaca-de-juarez",
    state_id: "oaxaca",
    country_id: "mexico",
    languages: ["Valley Zapotec", "Spanish"],
    general_info: {
      tribeDescription: "The Valley Zapotec of the Central Valleys of Oaxaca are the most numerous Zapotec group and the builders of Monte Albán. Their tlayuda (large tortilla) cuisine, mezcal traditions, and black pottery (barro negro) of San Bartolo Coyotepec define Oaxacan identity globally.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Sierra Juárez Zapotec",
    tribe_id: "sierra-juarez-zapotec",
    ethnic_group_id: "zapotec-oaxaca-city",
    local_government_id: "oaxaca-de-juarez",
    state_id: "oaxaca",
    country_id: "mexico",
    languages: ["Sierra Zapotec dialects", "Spanish"],
    general_info: {
      tribeDescription: "The Sierra Juárez Zapotec inhabit the high mountain communities northeast of Oaxaca City, speaking dialects so distinct they are sometimes considered separate languages. They maintain systems of communal governance (usos y costumbres) and reforestation traditions that have made the Sierra Juárez a global model of indigenous forest management.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── MIXTEC (Oaxaca de Juárez) ────────────────────────────────────────────────
  {
    name: "Mixteca Alta",
    tribe_id: "mixteca-alta",
    ethnic_group_id: "mixtec-oaxaca-city",
    local_government_id: "oaxaca-de-juarez",
    state_id: "oaxaca",
    country_id: "mexico",
    languages: ["Mixtec (Highland variety)", "Spanish"],
    general_info: {
      tribeDescription: "The Mixteca Alta communities of the high Oaxacan mountains produced the majority of surviving pre-Columbian Mixtec codices and are the ancestral homeland of the Mixtec nobility who competed with the Aztec Empire. Their gold filigree jewellery tradition from Yanhuitlán is still practised today.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Mixteca Baja",
    tribe_id: "mixteca-baja",
    ethnic_group_id: "mixtec-oaxaca-city",
    local_government_id: "oaxaca-de-juarez",
    state_id: "oaxaca",
    country_id: "mexico",
    languages: ["Mixtec (Lowland variety)", "Spanish"],
    general_info: {
      tribeDescription: "The Mixteca Baja communities of the lower, semi-arid Oaxaca-Puebla borderlands speak distinct Mixtec varieties and maintain a strong tradition of migrant labour to California and Mexico City. Their home communities preserve temazcal steam-bath healing traditions and the regional ceramic tradition.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── ZAPOTEC ISTHMUS (Tehuantepec) ────────────────────────────────────────────
  {
    name: "Juchitán Zapotec",
    tribe_id: "juchitan-zapotec",
    ethnic_group_id: "zapotec-isthmus-tehuantepec",
    local_government_id: "tehuantepec",
    state_id: "oaxaca",
    country_id: "mexico",
    languages: ["Isthmus Zapotec", "Spanish"],
    general_info: {
      tribeDescription: "The Juchitecos of Juchitán de Zaragoza are the largest and most politically active Isthmus Zapotec community, known for their powerful women's market associations, the Muxe third-gender tradition, and resistance to political centralisation. Their Vela (festival) cycle is one of Mexico's most elaborate regional festival traditions.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Tehuano Zapotec",
    tribe_id: "tehuano-zapotec",
    ethnic_group_id: "zapotec-isthmus-tehuantepec",
    local_government_id: "tehuantepec",
    state_id: "oaxaca",
    country_id: "mexico",
    languages: ["Isthmus Zapotec", "Spanish"],
    general_info: {
      tribeDescription: "The Tehuanos of Tehuantepec city are the sub-group who gave the Tehuana dress its name — the embroidered blouse and skirt immortalised by Frida Kahlo and worn by Isthmus women to assert cultural identity. Their market women (tehuanas) are powerful economic actors in the regional economy.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── HUAVE (Tehuantepec) ──────────────────────────────────────────────────────
  {
    name: "San Mateo del Mar Huave",
    tribe_id: "san-mateo-del-mar-huave",
    ethnic_group_id: "huave-tehuantepec",
    local_government_id: "tehuantepec",
    state_id: "oaxaca",
    country_id: "mexico",
    languages: ["Huave (San Mateo variety)", "Spanish"],
    general_info: {
      tribeDescription: "The San Mateo del Mar community is the largest Huave settlement and the main custodian of Huave (Ikoots) language and culture. Their traditional net-fishing from dugout canoes on the Mar Muerto lagoon is the economic and cultural foundation of the community, and their annual Tehuantepec festival is a major expression of Huave identity.",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "San Francisco del Mar Huave",
    tribe_id: "san-francisco-del-mar-huave",
    ethnic_group_id: "huave-tehuantepec",
    local_government_id: "tehuantepec",
    state_id: "oaxaca",
    country_id: "mexico",
    languages: ["Huave (San Francisco variety)", "Spanish"],
    general_info: {
      tribeDescription: "The San Francisco del Mar Huave community speaks a dialect that differs from San Mateo del Mar Huave enough to be considered a separate language variety by linguists. Their community is smaller and faces more acute language endangerment, with intensive documentation efforts by INALI (Mexico's linguistic institute).",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── QUECHUA MIGRANTS (Lima Province) ─────────────────────────────────────────
  {
    name: "Ayacucho Quechua",
    tribe_id: "ayacucho-quechua-lima",
    ethnic_group_id: "quechua-migrants-lima",
    local_government_id: "lima-province",
    state_id: "lima",
    country_id: "peru",
    languages: ["Chanka Quechua", "Spanish"],
    general_info: {
      tribeDescription: "The Ayacucho Quechua migrated to Lima in massive numbers during the Shining Path insurgency of the 1980s–90s. Their communities in Villa El Salvador and Comas maintain Ayacucho retablo (miniature altarpiece) craft, the scissors dance (Danza de las Tijeras), and Chanka Quechua language.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Ancash Quechua",
    tribe_id: "ancash-quechua-lima",
    ethnic_group_id: "quechua-migrants-lima",
    local_government_id: "lima-province",
    state_id: "lima",
    country_id: "peru",
    languages: ["Ancash Quechua", "Spanish"],
    general_info: {
      tribeDescription: "The Ancash Quechua from the Callejón de Huaylas in the Cordillera Blanca are known as the 'Quechua with white peaks' — their homeland features some of the world's highest tropical mountains. Their community in Lima maintains the annual Santiago (cattle marking) ritual and Huayno music tradition.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── QUECHUA CUSQUEÑO (Cusco City) ────────────────────────────────────────────
  {
    name: "Kana (Canas)",
    tribe_id: "kana-cusco",
    ethnic_group_id: "quechua-cusco-city",
    local_government_id: "cusco-city",
    state_id: "cusco",
    country_id: "peru",
    languages: ["Southern Quechua", "Spanish"],
    general_info: {
      tribeDescription: "The Kana people of the southern Cusco highlands near Yanaoca are the custodians of the Yawar Fiesta — a ritual bullfight in which a condor tied to a bull represents the indigenous world battling colonialism. It was immortalised in José María Arguedas' novel of the same name.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Q'ero",
    tribe_id: "qero-cusco",
    ethnic_group_id: "quechua-cusco-city",
    local_government_id: "cusco-city",
    state_id: "cusco",
    country_id: "peru",
    languages: ["Q'ero Quechua", "Spanish"],
    general_info: {
      tribeDescription: "The Q'ero are an Andean people of the high puna above Paucartambo, considered the last direct descendants of the Inca who fled conquest to the high mountains. Their pago a la tierra (earth payment) ceremonies and ch'uncho dance are central to Andean ceremonial life. They hold a central place in Andean mysticism.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── QUECHUA SACRED VALLEY (Urubamba) ─────────────────────────────────────────
  {
    name: "Chinchero weavers",
    tribe_id: "chinchero-weavers",
    ethnic_group_id: "quechua-urubamba",
    local_government_id: "urubamba",
    state_id: "cusco",
    country_id: "peru",
    languages: ["Cusco Quechua", "Spanish"],
    general_info: {
      tribeDescription: "The Chinchero community is home to Peru's finest traditional weavers, whose backstrap-loom textiles using natural dyes derived from plants and insects encode Andean cosmological symbolism in their geometric patterns. The Chinchero Weavers' Association has become a global model of indigenous craft revitalisation.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Pisac Quechua",
    tribe_id: "pisac-quechua",
    ethnic_group_id: "quechua-urubamba",
    local_government_id: "urubamba",
    state_id: "cusco",
    country_id: "peru",
    languages: ["Cusco Quechua", "Spanish"],
    general_info: {
      tribeDescription: "The Pisac community occupies the Sacred Valley below the spectacular Inca terraced citadel of Pisac. Their Sunday market is the most important traditional market in the Cusco region, where ayni (reciprocal community labour) goods and Andean textiles are exchanged, and where Quechua is the daily language of commerce.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── AYMARA (Urubamba) ────────────────────────────────────────────────────────
  {
    name: "Lupaca",
    tribe_id: "lupaca-urubamba",
    ethnic_group_id: "aymara-urubamba",
    local_government_id: "urubamba",
    state_id: "cusco",
    country_id: "peru",
    languages: ["Aymara", "Spanish"],
    general_info: {
      tribeDescription: "The Lupaca were once the most powerful Aymara chiefdom (señorío) on the western shores of Lake Titicaca before Inca conquest. Their descendants in the Cusco region maintain the ch'alla blessing ceremony and the distinctive ayllu (kinship community) land management traditions.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Colla",
    tribe_id: "colla-urubamba",
    ethnic_group_id: "aymara-urubamba",
    local_government_id: "urubamba",
    state_id: "cusco",
    country_id: "peru",
    languages: ["Aymara", "Spanish"],
    general_info: {
      tribeDescription: "The Colla (Qolla) were one of the two greatest Aymara kingdoms of the Titicaca basin — rivals of the Lupaca — who were conquered by the Inca. Their identity is preserved in the Qolla dance performed at Corpus Christi and Inti Raymi festivals in Cusco, in which they represent the conquered highland peoples.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── EORA ABORIGINAL (Sydney) ─────────────────────────────────────────────────
  {
    name: "Gadigal",
    tribe_id: "gadigal",
    ethnic_group_id: "eora-sydney",
    local_government_id: "sydney",
    state_id: "new-south-wales",
    country_id: "australia",
    languages: ["Darug language (revitalising)", "English"],
    general_info: {
      tribeDescription: "The Gadigal are the traditional custodians of the southern shore of Port Jackson (Sydney Harbour), including the Sydney CBD. They are acknowledged at all Sydney council and government events, and the suburb of Gadigal (formerly Zetland) was renamed in their honour in 2020.",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Wangal",
    tribe_id: "wangal",
    ethnic_group_id: "eora-sydney",
    local_government_id: "sydney",
    state_id: "new-south-wales",
    country_id: "australia",
    languages: ["Darug language (revitalising)", "English"],
    general_info: {
      tribeDescription: "The Wangal are the traditional custodians of the western shore of Sydney Harbour and the Parramatta River, including the inner west suburbs. Biruwa (Wangal for 'a person of this place') cultural programs active in Balmain and Leichhardt reconnect community members to Wangal language and Songlines.",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── AWABAKAL ABORIGINAL (Newcastle) ──────────────────────────────────────────
  {
    name: "Awabakal proper",
    tribe_id: "awabakal-proper",
    ethnic_group_id: "awabakal-newcastle",
    local_government_id: "newcastle",
    state_id: "new-south-wales",
    country_id: "australia",
    languages: ["Awabakal language (revitalising)", "English"],
    general_info: {
      tribeDescription: "The Awabakal proper are the custodians of the Newcastle-Lake Macquarie coastline, whose language was documented by Reverend Lancelot Threlkeld in the 1820s — providing a rare early record now central to language revival. The Awabakal community runs an active land council and cultural programs.",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Worimi",
    tribe_id: "worimi",
    ethnic_group_id: "awabakal-newcastle",
    local_government_id: "newcastle",
    state_id: "new-south-wales",
    country_id: "australia",
    languages: ["Worimi language (revitalising)", "English"],
    general_info: {
      tribeDescription: "The Worimi are the custodians of the Port Stephens and Barrington area north of Newcastle, known for the Stockton Bight sand dunes (Worimi Conservation Lands). Their land management of this 4,500 ha national park is co-managed with the NSW government as a model of indigenous-led conservation.",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── TURRBAL AND JAGERA (Brisbane) ────────────────────────────────────────────
  {
    name: "Turrbal",
    tribe_id: "turrbal",
    ethnic_group_id: "turrbal-jagera-brisbane",
    local_government_id: "brisbane",
    state_id: "queensland",
    country_id: "australia",
    languages: ["Turrbal language (revitalising)", "English"],
    general_info: {
      tribeDescription: "The Turrbal are the custodians of the Brisbane River's north bank, including the current Brisbane CBD. Tom Petrie's 19th-century memoirs provide one of the richest documented records of pre-colonial Turrbal culture, and the community is now reclaiming their language and ceremony sites.",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Jagera",
    tribe_id: "jagera",
    ethnic_group_id: "turrbal-jagera-brisbane",
    local_government_id: "brisbane",
    state_id: "queensland",
    country_id: "australia",
    languages: ["Yuggera language (revitalising)", "English"],
    general_info: {
      tribeDescription: "The Jagera (Yuggera) are the custodians of the southern Brisbane area and the Darling Downs hinterland. The Jagera people led the Battle of One Tree Hill (1843), one of the last large-scale armed resistances to colonial settlement in southeastern Queensland.",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── PACIFIC ISLANDER AUSTRALIAN (Brisbane) ───────────────────────────────────
  {
    name: "Samoan Australian",
    tribe_id: "samoan-australian-brisbane",
    ethnic_group_id: "pacific-islander-brisbane",
    local_government_id: "brisbane",
    state_id: "queensland",
    country_id: "australia",
    languages: ["Samoan", "English"],
    general_info: {
      tribeDescription: "Samoan Australians in Brisbane's Logan and Ipswich suburbs maintain the fa'asamoa (Samoan way) through church-centred community life, umu (earth oven) feast traditions, and the White Sunday (Lotu a Tamaiti) church day for children. Their rugby league contribution to Australian sport is disproportionately large.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Tongan Australian",
    tribe_id: "tongan-australian-brisbane",
    ethnic_group_id: "pacific-islander-brisbane",
    local_government_id: "brisbane",
    state_id: "queensland",
    country_id: "australia",
    languages: ["Tongan", "English"],
    general_info: {
      tribeDescription: "Tongan Australians in Brisbane maintain the Tongan royal family's strong cultural influence through the Church of Tonga (Free Wesleyan Church), the lakalaka group dance (UNESCO Intangible Heritage), and the fahu (senior female relative) kinship system that governs ceremonial obligations.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 2,
    },
  },

  // ── TORRES STRAIT ISLANDER (Cairns) ──────────────────────────────────────────
  {
    name: "Meriam (Eastern Islands)",
    tribe_id: "meriam",
    ethnic_group_id: "torres-strait-islander-cairns",
    local_government_id: "cairns",
    state_id: "queensland",
    country_id: "australia",
    languages: ["Meriam Mir", "Torres Strait Creole", "English"],
    general_info: {
      tribeDescription: "The Meriam people of Mer (Murray Island) are the plaintiffs in the historic Mabo v Queensland (1992) High Court case that overturned the doctrine of terra nullius and recognised native title in Australian law. Their island community maintains Mer language and the kep-karu (octopus garden) cultural tradition.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Kaurareg (Western Islands)",
    tribe_id: "kaurareg",
    ethnic_group_id: "torres-strait-islander-cairns",
    local_government_id: "cairns",
    state_id: "queensland",
    country_id: "australia",
    languages: ["Kala Lagaw Ya", "Torres Strait Creole", "English"],
    general_info: {
      tribeDescription: "The Kaurareg are the traditional owners of the western Torres Strait islands and Cape York peninsula coasts, speaking the Kala Lagaw Ya language family. Their dugong and turtle hunting traditions are central to Islander identity, and they maintain strong relationships with Aboriginal Cape York communities.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },

  // ── DJABUGAY ABORIGINAL (Cairns) ─────────────────────────────────────────────
  {
    name: "Djabugay proper",
    tribe_id: "djabugay-proper",
    ethnic_group_id: "djabugay-cairns",
    local_government_id: "cairns",
    state_id: "queensland",
    country_id: "australia",
    languages: ["Djabugay language (revitalising)", "English"],
    general_info: {
      tribeDescription: "The Djabugay proper are the rainforest people of the Kuranda Range, whose Tjapukai Cultural Centre near Cairns has been operating since 1987 as one of Australia's most successful indigenous cultural tourism ventures, providing both economic sustainability and cultural transmission.",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Yirrganydji",
    tribe_id: "yirrganydji",
    ethnic_group_id: "djabugay-cairns",
    local_government_id: "cairns",
    state_id: "queensland",
    country_id: "australia",
    languages: ["Yirrganydji language", "English"],
    general_info: {
      tribeDescription: "The Yirrganydji are the traditional custodians of Cairns' coastal strip from Palm Cove to Edmonton, with sea country extending into the Coral Sea. They are known for their sea turtle Dreaming stories and conduct joint sea country management with the Great Barrier Reef Marine Park Authority.",
      isEndangered: true, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── MOTU-KOITABU (Moresby North-East) ────────────────────────────────────────
  {
    name: "Motu proper",
    tribe_id: "motu-proper-moresby-ne",
    ethnic_group_id: "motu-koitabu-moresby-ne",
    local_government_id: "moresby-north-east",
    state_id: "ncd",
    country_id: "papua-new-guinea",
    languages: ["Motu", "Hiri Motu", "Tok Pisin", "English"],
    general_info: {
      tribeDescription: "The Motu proper are the Austronesian-speaking fishing and pottery-making people whose historic hiri voyages linked Port Moresby to the Gulf of Papua. Their large seagoing lagatoi canoes, lashed together for the annual trading voyage, are the central symbol of Motu cultural identity.",
      isEndangered: false, spokenLanguagesCount: 4, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Koitabu",
    tribe_id: "koitabu-moresby-ne",
    ethnic_group_id: "motu-koitabu-moresby-ne",
    local_government_id: "moresby-north-east",
    state_id: "ncd",
    country_id: "papua-new-guinea",
    languages: ["Koita", "Tok Pisin"],
    general_info: {
      tribeDescription: "The Koitabu are the Papuan-speaking inland partners of the Motu, with whom they maintained a symbiotic exchange — Koitabu provided clay and sago while Motu provided fish and pottery. Their traditional garden magic (madi) ceremonies are still performed in the Sogeri Plateau villages above Port Moresby.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── KOIARI (Moresby North-East) ──────────────────────────────────────────────
  {
    name: "Koiari proper",
    tribe_id: "koiari-proper",
    ethnic_group_id: "koiari-moresby-ne",
    local_government_id: "moresby-north-east",
    state_id: "ncd",
    country_id: "papua-new-guinea",
    languages: ["Koiari", "Tok Pisin"],
    general_info: {
      tribeDescription: "The Koiari proper are the mountain forest people of the Owen Stanley foothills above Port Moresby, traditional hunters and gardeners whose Kokoda Trail crosses their territory. Their land rights in the Port Moresby hinterland are the subject of ongoing tenure disputes as the city expands.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Mountain Koiari",
    tribe_id: "mountain-koiari",
    ethnic_group_id: "koiari-moresby-ne",
    local_government_id: "moresby-north-east",
    state_id: "ncd",
    country_id: "papua-new-guinea",
    languages: ["Mountain Koiari", "Tok Pisin"],
    general_info: {
      tribeDescription: "The Mountain Koiari (Koiarian) inhabit the higher elevations of the Owen Stanley Range and speak a language distinct from lowland Koiari. Their yam-cultivation ceremonies and initiation rites differ from coastal PNG groups and preserve a highland forest culture threatened by Port Moresby's urban expansion.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── MOTU-KOITABU (Moresby South) ─────────────────────────────────────────────
  {
    name: "Hanuabada Motu",
    tribe_id: "hanuabada-motu",
    ethnic_group_id: "motu-koitabu-moresby-s",
    local_government_id: "moresby-south",
    state_id: "ncd",
    country_id: "papua-new-guinea",
    languages: ["Motu", "Tok Pisin", "English"],
    general_info: {
      tribeDescription: "The Hanuabada ('big village') Motu are the residents of Port Moresby's iconic stilt-house village, the oldest continuously inhabited settlement in the capital. The village has been rebuilt repeatedly after fires and storms, but maintains its cultural identity as the living heart of Motu tradition in the city.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Badili Motu",
    tribe_id: "badili-motu",
    ethnic_group_id: "motu-koitabu-moresby-s",
    local_government_id: "moresby-south",
    state_id: "ncd",
    country_id: "papua-new-guinea",
    languages: ["Motu", "Hiri Motu", "Tok Pisin"],
    general_info: {
      tribeDescription: "The Badili community of southern Port Moresby are a Motu residential community who have adapted to the urban formal economy while maintaining hiri moale festival participation and the lalaga weaving tradition. Their community hall is a key venue for Motu cultural events.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },

  // ── HIGHLAND MIGRANTS (Moresby South) ────────────────────────────────────────
  {
    name: "Huli Wigmen",
    tribe_id: "huli-wigmen",
    ethnic_group_id: "highland-migrants-moresby-s",
    local_government_id: "moresby-south",
    state_id: "ncd",
    country_id: "papua-new-guinea",
    languages: ["Huli", "Tok Pisin"],
    general_info: {
      tribeDescription: "The Huli Wigmen from Hela Province in PNG's southern highlands are internationally recognised by their elaborate wigs made from their own hair, decorated with feathers and flowers. In Port Moresby, Huli men maintain the wig-growing tradition and tege (ritual fighting) song traditions as markers of identity in the urban setting.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Chimbu (Kuman)",
    tribe_id: "chimbu-kuman",
    ethnic_group_id: "highland-migrants-moresby-s",
    local_government_id: "moresby-south",
    state_id: "ncd",
    country_id: "papua-new-guinea",
    languages: ["Kuman (Chimbu)", "Tok Pisin"],
    general_info: {
      tribeDescription: "The Chimbu (Simbu) from Chimbu Province are known for their spectacular bilas (personal adornment) at sing-sing gatherings and their complex bride-price (moka) exchange ceremonies. In Port Moresby, the Chimbu maintain strong community networks and are disproportionately represented in the security and construction industries.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── ADZERA (Lae) ─────────────────────────────────────────────────────────────
  {
    name: "Adzera proper",
    tribe_id: "adzera-proper",
    ethnic_group_id: "adzera-lae",
    local_government_id: "lae",
    state_id: "morobe",
    country_id: "papua-new-guinea",
    languages: ["Adzera", "Tok Pisin", "English"],
    general_info: {
      tribeDescription: "The Adzera proper are the core yam-cultivating Austronesian people of the Markham Valley whose traditional exchange ceremonies (bugambuga) involve competitive displays of yam wealth. They are the traditional landowners of much of the land on which Lae industrial estates are built.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Wampar",
    tribe_id: "wampar",
    ethnic_group_id: "adzera-lae",
    local_government_id: "lae",
    state_id: "morobe",
    country_id: "papua-new-guinea",
    languages: ["Wampar", "Tok Pisin"],
    general_info: {
      tribeDescription: "The Wampar are a Ramu-Markham Valley people closely related to the Adzera, inhabiting the lower Markham River floodplains near Lae. Their sago and fishing economy complements Adzera yam cultivation, and the two groups maintain traditional exchange relationships.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── MELANESIAN URBAN MIGRANTS (Lae) ──────────────────────────────────────────
  {
    name: "Tolai (East New Britain)",
    tribe_id: "tolai-lae",
    ethnic_group_id: "melanesian-urban-lae",
    local_government_id: "lae",
    state_id: "morobe",
    country_id: "papua-new-guinea",
    languages: ["Kuanua (Tolai)", "Tok Pisin", "English"],
    general_info: {
      tribeDescription: "The Tolai from East New Britain Province are one of PNG's most commercially successful groups, pioneering indigenous business enterprise through the tavur (shell money) currency system. Their Lae community maintains the tabu shell exchange tradition and the Warwagira cultural festival.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },
  {
    name: "Sepik River peoples",
    tribe_id: "sepik-lae",
    ethnic_group_id: "melanesian-urban-lae",
    local_government_id: "lae",
    state_id: "morobe",
    country_id: "papua-new-guinea",
    languages: ["Various Sepik languages", "Tok Pisin"],
    general_info: {
      tribeDescription: "The diverse Sepik River peoples (Iatmul, Chambri, Sawos) who have migrated to Lae are known internationally for their spectacular spirit house (haus tambaran) architecture and carved ancestor figures. In Lae, they sell their carvings and maintain identity through haus tambaran community associations.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 1,
    },
  },

  // ── SIASSI ISLANDERS (Huon Gulf) ─────────────────────────────────────────────
  {
    name: "Siassi proper",
    tribe_id: "siassi-proper",
    ethnic_group_id: "siassi-huon-gulf",
    local_government_id: "huon-gulf",
    state_id: "morobe",
    country_id: "papua-new-guinea",
    languages: ["Siassi (Tuam-Mussau)", "Tok Pisin"],
    general_info: {
      tribeDescription: "The Siassi proper of Tuam Island are the core trading community of the Siassi Archipelago, whose outrigger canoe trade network once linked the Huon Gulf to New Britain in one of Melanesia's most elaborate pre-contact exchange systems. Their wooden bowl carving tradition produced the trade items that drove this network.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Bariai",
    tribe_id: "bariai",
    ethnic_group_id: "siassi-huon-gulf",
    local_government_id: "huon-gulf",
    state_id: "morobe",
    country_id: "papua-new-guinea",
    languages: ["Bariai", "Tok Pisin"],
    general_info: {
      tribeDescription: "The Bariai are a coastal people of West New Britain who participated in the Siassi trading network as producers of sago and taro traded for Siassi wooden bowls. Their elaborate men's initiation (iniet) ceremony featuring masked figures is one of the most documented in West New Britain.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },

  // ── BUKAWA (Huon Gulf) ───────────────────────────────────────────────────────
  {
    name: "Bukawa proper",
    tribe_id: "bukawa-proper",
    ethnic_group_id: "bukawa-huon-gulf",
    local_government_id: "huon-gulf",
    state_id: "morobe",
    country_id: "papua-new-guinea",
    languages: ["Bukawa", "Tok Pisin"],
    general_info: {
      tribeDescription: "The Bukawa proper are the main Austronesian coastal community of the Huon Gulf's southern shore, whose spirit house (haus tambaran) carvings — particularly the large spirit boards (amben) — are among the most technically accomplished in Morobe Province and collected internationally.",
      isEndangered: false, spokenLanguagesCount: 2, writtenLanguagesCount: 1,
    },
  },
  {
    name: "Yabem",
    tribe_id: "yabem",
    ethnic_group_id: "bukawa-huon-gulf",
    local_government_id: "huon-gulf",
    state_id: "morobe",
    country_id: "papua-new-guinea",
    languages: ["Yabem", "Tok Pisin", "English"],
    general_info: {
      tribeDescription: "The Yabem people of Finschhafen on the Huon Peninsula became historically significant when German missionaries used their language (Jabêm) as a church and school lingua franca across Morobe Province from the 1890s. Their community maintains the oldest Lutheran church in PNG and a living Yabem literary tradition.",
      isEndangered: false, spokenLanguagesCount: 3, writtenLanguagesCount: 2,
    },
  },
];
