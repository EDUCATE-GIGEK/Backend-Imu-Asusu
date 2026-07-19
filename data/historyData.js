// Mirrors the `cultural_history` table in Postgres.sql.
// Each entry has a `category` field that is one of:
//   'origin' | 'language' | 'government' | 'architecture' | 'religion' | 'art'
// `entry.origins` describes where the group came from.
// `entry.eras`    describes the key historical periods.
export const historyData = [
  // ============================================================================
  // IKWERRE — Ikeja, Lagos, Nigeria
  // ============================================================================

  {
    category: "origin",
    subject_name: "Ikwerre Origins",
    subject_description:
      "The Ikwerre are an Igboid people indigenous to the coastal forests of Rivers State, regarded as the original landowners of what is now Port Harcourt. They strongly assert a distinct identity from mainstream Igbo, tracing their ancestry to a common founding ancestor named Eze Ikwerre.",
    is_endangered: false,
    is_written: false,
    ethnic_group_id: "ikwerre-ikeja",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "ikeja",
    entry: {
      origins:
        "Ikwerre oral tradition names Eze Ikwerre as the founding ancestor from whom the nine major clans descend. Linguistic evidence places Ikwerre within the Igboid branch of Niger-Congo, sharing a common proto-language with Igbo, Ekpeye, and Ogba — though Ikwerre speakers consider their language a separate tongue, not a dialect. Archaeological evidence suggests continuous habitation of the Niger Delta forest zone for over 2,000 years.",
      eras:
        "Pre-1800s: Nine-clan structure (Emohua, Rumuola, Rumuche, Rumuji, Engenni, and others) governs the Rivers State hinterland as independent village republics with no centralised paramount ruler. " +
        "1913: British colonial administration forcibly resettles Ikwerre communities to create the new town of Port Harcourt, named after the British Colonial Secretary. Ikwerre clans lose ancestral land without compensation — a grievance that persists to the present day. " +
        "1967–1970: Nigerian Civil War; Ikwerre territory becomes a major theatre of conflict as the oil-rich Eastern Region. " +
        "1976: Rivers State created from the former Eastern Region, formally separating Ikwerre administrative identity from Igbo-dominated Anambra/Imo. " +
        "1980s–present: Oil industry transforms Ikwerre homeland; community land conflicts with Shell and NLNG intensify. Significant Ikwerre diaspora settles in Lagos.",
    },
  },

  {
    category: "language",
    subject_name: "Ikwerre Language",
    subject_description:
      "Ikwerre is an Igboid language spoken by roughly 500,000 people primarily in Rivers State. Though closely related to Igbo, it is not mutually intelligible with standard Igbo and is considered by its speakers — and increasingly by linguists — as a distinct language rather than a dialect.",
    is_endangered: false,
    is_written: false,
    ethnic_group_id: "ikwerre-ikeja",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "ikeja",
    entry: {
      origins:
        "Ikwerre belongs to the Igboid branch of the Volta-Niger family (Niger-Congo). It shares core vocabulary with Igbo but has diverged in tonal system, morphology, and several hundred lexical items. The Ikwerre identity dispute with Igbo has political roots: during the 1967–70 Civil War, Ikwerre communities were classified as Igbo by the Biafran state, a designation many Ikwerre resisted.",
      eras:
        "Pre-1900s: Purely oral; transmitted through community storytelling, proverbs (ilu), and ceremonial speech at village assemblies. " +
        "1900–1960: Colonial and missionary schools taught in standard Igbo, not Ikwerre, further blurring the linguistic boundary and fuelling resentment among Ikwerre identity advocates. " +
        "1967–1970: Civil War political context accelerates Ikwerre insistence on a separate linguistic and ethnic identity from Igbo. " +
        "1980s–2000s: University of Port Harcourt linguists begin documenting Ikwerre grammar and vocabulary; a proposed Ikwerre orthography is developed but never formally standardised. " +
        "2000–present: Ikwerre language is under pressure from English and Nigerian Pidgin among youth in Port Harcourt; transmission to children is declining in urban households, including the Lagos diaspora.",
    },
  },

  {
    category: "government",
    subject_name: "Ikwerre Governance Traditions",
    subject_description:
      "Ikwerre society is historically a village republic — authority is held collectively by a council of elders (Ndị Isi) and enforced through age-grade societies (Ogbo). There is no traditional paramount king; each of the nine Ikwerre clans governs itself independently.",
    is_endangered: false,
    is_written: false,
    ethnic_group_id: "ikwerre-ikeja",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "ikeja",
    entry: {
      origins:
        "The absence of a paramount ruler is a defining Ikwerre cultural feature that distinguishes them from the Yoruba Oba system or the Oyo imperial model. Governance authority is distributed: the Ndị Isi (elders' council) handles disputes and ritual matters, while Ogbo (age-grade associations) are responsible for communal labour, security, and the enforcement of council decisions.",
      eras:
        "Pre-1900s: Nine-clan village republic structure; inter-clan disputes resolved through arbitration by neutral elder panels or, in serious cases, by oath-taking before the Amadioha (thunder deity) shrine. " +
        "1913–1960: British colonial administration imposes Warrant Chiefs on Ikwerre communities that had no such institution — a system that generated significant resistance, mirroring the wider Aba Women's Riot context (1929) across southeastern Nigeria. " +
        "1960–1976: Post-independence Ikwerre communities fall under Eastern Region, then Rivers State, government. Traditional governance institutions are legally subordinate to elected local government councils but retain social authority. " +
        "1976–present: Local Government Reform Act creates elected Obio-Akpor and Ikwerre LGAs in Rivers State. Traditional age-grade systems and elder councils continue to function alongside formal government structures.",
    },
  },

  {
    category: "architecture",
    subject_name: "Ikwerre Architectural Traditions",
    subject_description:
      "Traditional Ikwerre architecture centres on the obu — the men's meeting house at the heart of each compound — surrounded by rectangular mud-walled family dwellings with thatched or corrugated-iron roofs. The obu serves as courthouse, guest house, and community assembly space.",
    is_endangered: true,
    is_written: false,
    ethnic_group_id: "ikwerre-ikeja",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "ikeja",
    entry: {
      origins:
        "The obu (men's hall) is common across Igboid cultures and reflects the centrality of communal male deliberation in village governance. Ikwerre family compounds (ulo) are arranged in a linear pattern around a shared courtyard — a layout suited to the extended patrilineal family unit. Construction used compressed laterite mud walls, wooden frames, and raffia-palm thatch.",
      eras:
        "Pre-1900s: Mud-and-thatch compound architecture; the obu is the largest and most carefully maintained structure in any Ikwerre settlement. Carved wooden doors and posts signal the status of the compound head. " +
        "1913–1960: The forced relocation of Ikwerre communities for Port Harcourt's construction destroys many ancestral compound layouts. Colonial-era corrugated zinc roofing replaces thatch among wealthier households. " +
        "1960–1980s: Oil boom brings rapid concrete construction to Rivers State; traditional mud-brick compounds are demolished for cement-block houses throughout Ikwerre LGA. " +
        "1980–present: Traditional obu structures survive mostly in rural Ikwerre villages; in Port Harcourt and the Lagos diaspora, the communal meeting function has shifted to rented halls. No formal effort to document or preserve remaining traditional compounds.",
    },
  },

  {
    category: "religion",
    subject_name: "Ikwerre Religious Traditions",
    subject_description:
      "Ikwerre traditional religion (Odinala Ikwerre) centres on Tamuno (the supreme creator deity) and a pantheon of nature spirits, with Amadioha (thunder and justice) as the most prominent. Christianity arrived with British missionaries in the early 1900s and is now the majority faith, though Odinala practices persist beneath the surface.",
    is_endangered: false,
    is_written: false,
    ethnic_group_id: "ikwerre-ikeja",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "ikeja",
    entry: {
      origins:
        "Tamuno (the supreme being) governs the cosmos, while Amadioha — the thunder deity associated with justice and oaths — is invoked in serious disputes and covenant-making. Ancestor veneration through the Masiri (ancestral spirit shrine) maintained in each family compound is central to Odinala practice. Divination specialists (Dibia) interpret signs from the spirit world.",
      eras:
        "Pre-1900s: Odinala Ikwerre is the universal community religion; Amadioha shrines serve as courts of last resort for inter-clan disputes where human arbitration has failed. " +
        "1900–1930s: Anglican and Catholic missionaries establish schools and churches in Ikwerre villages; conversion is accelerated by the prestige attached to mission education. " +
        "1913: The founding of Port Harcourt brings Anglican and Catholic institutional presence directly into Ikwerre territory. " +
        "1940s–1970s: Pentecostal and charismatic Christianity grows rapidly; Ikwerre Christians are instructed to abandon Amadioha shrines and Dibia consultation. " +
        "1970–present: Ikwerre in Rivers State and Lagos are predominantly Christian (Anglican, Catholic, and Pentecostal); a minority continues Odinala practices, often privately alongside Christian observance. Masiri ancestor shrines survive in many rural compounds.",
    },
  },

  {
    category: "art",
    subject_name: "Ikwerre Cultural Expressions",
    subject_description:
      "Ikwerre artistic life is anchored in the Ikenga warrior masquerade, intricate body art (uli patterns), ceremonial music using the ogene (metal gong) and ekwe (wooden slit drum), and a tradition of carved wooden ikenga figures representing personal achievement and masculine power.",
    is_endangered: true,
    is_written: false,
    ethnic_group_id: "ikwerre-ikeja",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "ikeja",
    entry: {
      origins:
        "The ikenga (personal shrine figure) is a carved wooden object given to a man at adulthood representing his right hand, personal effort, and accumulated achievements. It is one of the most recognisable art forms across Igboid cultures and has been widely collected by Western museums since the early 20th century. The Ikenga masquerade (separate from the personal shrine object) is a community performance tradition associated with warrior societies and harvest celebrations.",
      eras:
        "Pre-1900s: Ikenga shrine figures carved by specialist woodworkers; masquerade traditions (Ikenga, Odo) performed at agricultural festivals and funerals. Ogene and ekwe percussion ensembles accompany communal ceremonies. " +
        "1900–1960s: Christian missionary influence discourages masquerade performances and ikenga veneration as 'idol worship'; many carved figures are destroyed or sold to European collectors. Significant numbers of Ikwerre ikenga figures now sit in British and German museum collections. " +
        "1967–1970: Civil War disrupts cultural transmission; masquerade performances largely cease in war-affected communities. " +
        "1970–1990s: Post-war cultural revival in Rivers State; Ikwerre masquerades are partially revived as cultural performances at state festivals, though their ritual content is diminished. " +
        "1990–present: Urban Ikwerre in Port Harcourt and Lagos diaspora communities maintain cultural identity mainly through food (banga soup, ofe akwu), music, and annual clan union meetings rather than traditional art forms. Masquerade knowledge is held by a shrinking pool of older men.",
    },
  },
];
