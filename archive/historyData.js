// Mirrors the `cultural_history` table in Postgres.sql.
// Each entry has a `category` field that is one of:
//   'origin' | 'language' | 'government' | 'architecture' | 'religion' | 'art'
// `entry.origins` describes where the group came from.
// `entry.eras`    describes the key historical periods.
export const historyData = [

  // ============================================================================
  // YORUBA — Ikeja, Lagos, Nigeria
  // ============================================================================

  {
    category: "origin",
    subject_name: "Yoruba Origins",
    subject_description:
      "The Yoruba trace their collective ancestry to Ile-Ife in present-day Osun State, considered the cradle of Yoruba civilisation and the spot where Oduduwa, the founding deity-ancestor, descended from the heavens to create the earth.",
    is_endangered: false,
    is_written: true,
    ethnic_group_id: "yoruba-ikeja",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "ikeja",
    entry: {
      origins:
        "Mythological origin at Ile-Ife; Oduduwa descended on a chain from the sky and spread sand on primordial waters to form land. Historians also link early Yoruba settlement to migrations from the northeast, possibly the Nile Valley region, around 500–800 AD.",
      eras:
        "c. 800 AD: Formation of Ile-Ife as sacred centre. " +
        "1300–1400s: Rise of the Oyo Kingdom north of the forest belt. " +
        "1600–1836: Peak of the Oyo Empire — the largest Yoruba state, controlling trans-Saharan and coastal trade. " +
        "1836–1893: Collapse of Oyo, inter-Yoruba wars (Kiriji War, Ekitiparapo alliance). " +
        "1893: British protectorate established over Yorubaland. " +
        "1914–1960: Colonial amalgamation; Lagos becomes the administrative capital of Nigeria. " +
        "1960–present: Post-independence Yoruba cultural revival; Ikeja established as Lagos State capital (1976).",
    },
  },

  {
    category: "language",
    subject_name: "Yoruba Language",
    subject_description:
      "Yoruba is a tonal Niger-Congo language spoken by over 45 million people. It is one of Africa's most widely studied languages and carries a rich oral literary tradition of praise poetry (oriki), proverbs, and narrative verse.",
    is_endangered: false,
    is_written: true,
    ethnic_group_id: "yoruba-ikeja",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "ikeja",
    entry: {
      origins:
        "Belongs to the Yoruboid branch of the Volta-Niger language family. Proto-Yoruba diverged from closely related Igala and Itsekiri around 1,000–1,500 years ago. The language has four main dialect clusters: Northwest (Oyo), Northeast (Ekiti), Southwest (Egba/Ijebu), and Southeast (Ijesa).",
      eras:
        "Pre-1800s: Purely oral tradition; oriki (praise poetry) and ifa divination corpus transmitted by specialists. " +
        "1840s: Bishop Samuel Ajayi Crowther — a Yoruba former slave — produces the first Yoruba Bible translation and standardises the Roman-script orthography. " +
        "1880s–1960: Missionary schools expand Yoruba literacy; Standard Yoruba emerges as the prestige written form. " +
        "1960s–1980s: Yoruba radio, television, and print media flourish in Lagos and Ibadan. " +
        "2000–present: Yoruba faces urban pressure from English and Nigerian Pidgin among Lagos youth; active revitalisation efforts ongoing.",
    },
  },

  {
    category: "government",
    subject_name: "Yoruba Governance Traditions",
    subject_description:
      "Yoruba governance centred on the Oba (divine king) system — a constitutional monarchy where a council of chiefs (Oyo Mesi in Oyo; Ogboni society in Egba areas) held the power to depose an Oba who governed poorly.",
    is_endangered: false,
    is_written: true,
    ethnic_group_id: "yoruba-ikeja",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "ikeja",
    entry: {
      origins:
        "The Oba institution derives from Oduduwa's descendants, each of whom founded a separate Yoruba kingdom (Oyo, Benin, Ketu, Ijebu). Authority was legitimised through divine lineage, ritual coronation, and the Ifa oracle.",
      eras:
        "Pre-1600s: City-state model — each Yoruba town governed by an Oba with a graded chieftaincy council. " +
        "1600–1836: Oyo Empire develops a more centralised structure; the Alafin governs with the Oyo Mesi council. The Oyo Mesi could compel the Alafin to 'open the calabash' (commit ritual suicide) if he became tyrannical. " +
        "1861: British annexation of Lagos; colonial Residents marginalise traditional Obas but retain them under indirect rule. " +
        "1914–1960: Native Authority system formalises Yoruba chieftaincy under colonial law. " +
        "1976–present: Ikeja becomes Lagos State capital; modern local government councils coexist with traditional Oba institutions.",
    },
  },

  {
    category: "architecture",
    subject_name: "Yoruba Architectural Traditions",
    subject_description:
      "Yoruba traditional architecture is characterised by the agbo-ile (compound house) — rectangular mud-brick rooms arranged around a central courtyard, designed for extended family living and communal ceremony.",
    is_endangered: false,
    is_written: false,
    ethnic_group_id: "yoruba-ikeja",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "ikeja",
    entry: {
      origins:
        "The agbo-ile form developed from the need to house large patrilineal extended families within defensive perimeters. Palace compounds (afin) followed the same courtyard logic on a grander scale, with carved wooden pillars (opa) and elaborate door panels depicting royal histories.",
      eras:
        "Pre-1800s: Compressed mud walls, thatched roofs, elaborately carved wooden doors and verandah posts. Ile-Ife's Oba palace is the archetype. " +
        "1840s–1900s: Brazilian returnees (Aguda community) bring Afro-Brazilian architecture to Lagos — two-storey stucco houses with ornate facades and wrought-iron balconies. Still visible on Lagos Island. " +
        "1900–1960: Colonial bungalows and zinc-roofed brick structures displace mud construction in urban Yoruba centres. " +
        "1960–present: High-rise development in Ikeja; the traditional agbo-ile survives mainly in smaller Yoruba towns.",
    },
  },

  {
    category: "religion",
    subject_name: "Yoruba Religious Traditions",
    subject_description:
      "The Yoruba traditional religion (Isese) centres on Olodumare (the supreme being) and a pantheon of 401 Orisha (deities). The Ifa divination system serves as the primary interface between humans and the divine. UNESCO inscribed Ifa on its Intangible Cultural Heritage list in 2005.",
    is_endangered: false,
    is_written: true,
    ethnic_group_id: "yoruba-ikeja",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "ikeja",
    entry: {
      origins:
        "Yoruba religion predates recorded history; the Ifa corpus (odu) contains over 256 chapters of oral scripture, each with associated myths, proverbs, and ritual prescriptions. Each Orisha governs a domain: Sango (thunder), Ogun (iron), Yemoja (water), Osun (fertility and rivers).",
      eras:
        "Pre-1800s: Isese is the universal Yoruba religion; each city-state maintains specific Orisha cults. " +
        "1840s–1900s: Christian missionary activity intensifies; many Yoruba adopt Christianity while maintaining Orisha practices privately. " +
        "1850–1900: Islam, already present in northern Yorubaland, spreads to Lagos through Hausa and Nupe traders. " +
        "1900–1960: Aladura (prayer) churches emerge — blending Christian structure with Yoruba spiritual practice. " +
        "1960–present: Lagos Yoruba population is roughly 50% Christian, 40% Muslim, 10% Isese. Isese Day (August 20) is an official Lagos State public holiday since 2020.",
    },
  },

  {
    category: "art",
    subject_name: "Yoruba Visual and Performing Arts",
    subject_description:
      "Yoruba artistic production is among the most diverse in sub-Saharan Africa — spanning bronze casting, beadwork, Egungun masquerade, adire textile dyeing, and a rich tradition of narrative wooden sculpture.",
    is_endangered: false,
    is_written: false,
    ethnic_group_id: "yoruba-ikeja",
    country_id: "nigeria",
    state_id: "lagos",
    local_government_id: "ikeja",
    entry: {
      origins:
        "Ile-Ife's terracotta and bronze naturalistic portraits (c. 1000–1400 AD) demonstrate a mastery of lost-wax casting that surprised Western art historians when first documented in the early 20th century. The Benin Kingdom inherited and extended this bronze tradition.",
      eras:
        "c. 1000–1400 AD: Ile-Ife naturalistic bronze and terracotta portrait heads — among the finest figural art of medieval Africa. " +
        "1400–1800s: Gelede and Egungun masquerade traditions develop as communal theatre honouring ancestors and feminine spiritual power. " +
        "1800s: Adire (resist-dyed indigo cloth) becomes a signature Yoruba textile art, centred in Abeokuta. " +
        "1900–1960: Oshogbo art movement emerges — blending Yoruba mythological imagery with modern printmaking. " +
        "1960–present: Juju music (King Sunny Ade) and Fuji (Sikiru Ayinde) gain international audiences; Afrobeats inherits Yoruba drum patterns. Lagos becomes a global hub for contemporary African art.",
    },
  },


  // ============================================================================
  // SHUWA ARAB — Fagge, Kano, Nigeria
  // ============================================================================

  {
    category: "origin",
    subject_name: "Shuwa Arab Origins",
    subject_description:
      "The Shuwa (also Shoa or Suwa) are Arab-descended pastoralists who migrated from the Arabian Peninsula westward across the Sahel over many centuries, settling across the Lake Chad Basin and into northeastern Nigeria.",
    is_endangered: false,
    is_written: false,
    ethnic_group_id: "shuwa-arab-fagge",
    country_id: "nigeria",
    state_id: "kano",
    local_government_id: "fagge",
    entry: {
      origins:
        "Shuwa Arabs claim descent from the Juhayna tribal confederation who migrated westward following the 7th-century Islamic expansion through Egypt and Sudan. Centuries of intermediate settlement around Lake Chad, with intermarriage among Kanuri and Buduma peoples, produced a distinct Chadian Arab identity before further dispersal into Nigeria.",
      eras:
        "7th–10th century: Ancestral Arab migration westward following Islamic expansion into North Africa. " +
        "11th–14th century: Shuwa ancestors settle around the Lake Chad Basin; intermarriage with Kanuri and Buduma shapes a distinct Chadian Arab identity. " +
        "15th–18th century: Shuwa communities become established semi-nomadic cattle herders across Borno, northeastern Nigeria, and northern Cameroon. " +
        "1804–1903: Usman dan Fodio's Sokoto Jihad reorganises northern Nigeria; Shuwa Arabs, already Muslim, integrate into the Caliphate's social order without losing their distinct Arab identity. " +
        "1900s–present: British colonialism fixes Shuwa communities within new national borders; urbanisation draws Shuwa traders to Kano, where a significant community settled in Fagge.",
    },
  },

  {
    category: "language",
    subject_name: "Shuwa Arabic Language",
    subject_description:
      "Shuwa Arabic (locally called Arabi) is a variety of Chadian Arabic — a dialect that diverged significantly from Modern Standard Arabic through centuries of contact with Kanuri, Hausa, and Fulfulde. Spoken by roughly one million people across the Lake Chad Basin.",
    is_endangered: false,
    is_written: false,
    ethnic_group_id: "shuwa-arab-fagge",
    country_id: "nigeria",
    state_id: "kano",
    local_government_id: "fagge",
    entry: {
      origins:
        "Chadian Arabic developed from Classical Arabic through contact with sub-Saharan African languages over roughly 1,000 years. It belongs to the Maghrebi-Saharan Arabic cluster but is not mutually intelligible with Gulf or Levantine Arabic. In Nigeria, Shuwa speakers use Hausa as a daily lingua franca and Classical Arabic for Quranic education.",
      eras:
        "7th–13th century: Ancestral Arabic carried westward; begins absorbing Kanuri and Nilo-Saharan vocabulary. " +
        "14th–18th century: Chadian Arabic crystallises as a distinct dialect around Lake Chad; develops loan structures from Hausa and Fulfulde. " +
        "1800s: The Sokoto Caliphate strengthens Classical Arabic literacy for religious purposes; spoken Shuwa Arabic continues to diverge from the classical form. " +
        "1900–1960: British linguists begin documenting Shuwa Arabic in Nigeria in the 1930s. " +
        "1960–present: Urban Shuwa in Kano increasingly shift to Hausa as primary daily language; no standardised writing system exists for the Nigerian variety.",
    },
  },

  {
    category: "government",
    subject_name: "Shuwa Arab Governance Traditions",
    subject_description:
      "Shuwa communities are traditionally organised around clan-based leadership — a Sheikh (Shaikh al-Arab) arbitrates disputes, manages grazing rights, and represents the community before external authorities. This decentralised model reflects their historically mobile, pastoral way of life.",
    is_endangered: false,
    is_written: false,
    ethnic_group_id: "shuwa-arab-fagge",
    country_id: "nigeria",
    state_id: "kano",
    local_government_id: "fagge",
    entry: {
      origins:
        "The Sheikh system derives from Arabian tribal governance traditions carried westward during migration. Authority is earned through lineage, piety, and skill in arbitration. In practice, Shuwa communities have always nested their internal governance within the dominant external political system of the era.",
      eras:
        "Pre-1804: Shuwa communities in northeastern Nigeria operate within the Kanem-Bornu sphere; clan Sheikhs handle day-to-day authority. " +
        "1804–1903: Sokoto Jihad integrates Shuwa communities into the Caliphate's Emirate structure; Shuwa clan elders are recognised as ward leaders. " +
        "1903–1960: British indirect rule retains the Emirate system in Kano; Shuwa community leaders in Fagge function as ward-level intermediaries under the Kano Emir. " +
        "1960–present: Nigerian local government reforms (1976) create elected councils that formally supersede traditional leadership, though Sheikh-led dispute resolution continues informally for matrimonial and grazing-rights conflicts.",
    },
  },

  {
    category: "architecture",
    subject_name: "Shuwa Arab Dwelling Traditions",
    subject_description:
      "Shuwa Arab architecture reflects pastoral origins — historically the zeribah (portable thorn-fence enclosure with grass-mat huts) for migration seasons, and in settled contexts, flat-roofed mud-brick compounds influenced by the Sudano-Sahelian style dominant across the Lake Chad Basin.",
    is_endangered: true,
    is_written: false,
    ethnic_group_id: "shuwa-arab-fagge",
    country_id: "nigeria",
    state_id: "kano",
    local_government_id: "fagge",
    entry: {
      origins:
        "The zeribah — a circular thorn-bush enclosure sheltering mat-walled huts — is the canonical dwelling of mobile Shuwa pastoralists. As communities settled, this gave way to the rectangular flat-roofed mud compound found across the Sahel, a building tradition shared with Hausa, Kanuri, and Kanembu neighbours.",
      eras:
        "Pre-1900s: Nomadic zeribah construction — quickly assembled from local thorn branches and grass mats, abandoned on seasonal migration. " +
        "1900–1950s: Settled Shuwa communities adopt Hausa-style tubali (sun-dried mud brick) courtyard compounds with flat banco roofs supported by doum-palm timber. " +
        "1950s–1980s: Zinc corrugated-iron roofs increasingly replace flat mud roofs in urban Kano, seen as a status marker. " +
        "1980–present: Urban Shuwa in Fagge live in standard cement-block housing indistinguishable from neighbouring Hausa homes; zeribah and mud-brick construction survive only in rural communities near Lake Chad.",
    },
  },

  {
    category: "religion",
    subject_name: "Shuwa Arab Islamic Practice",
    subject_description:
      "The Shuwa Arab community is entirely Muslim. Islam is both faith and the primary cultural identity marker defining Shuwa life since their westward migration. Their practice blends Maliki jurisprudence (dominant in West Africa) with Sufi influences from the Tijaniyya and Qadiriyya brotherhoods.",
    is_endangered: false,
    is_written: true,
    ethnic_group_id: "shuwa-arab-fagge",
    country_id: "nigeria",
    state_id: "kano",
    local_government_id: "fagge",
    entry: {
      origins:
        "Shuwa ancestors carried Islam westward as one of the earliest sub-Saharan communities to convert, tracing their faith to the initial 7th-century Islamic expansion. Their identity as Arab Muslims — the 'people of the Prophet's language' — has historically granted them religious prestige within West African Islamic communities.",
      eras:
        "7th century: Ancestral Arab communities adopt Islam; faith is central to Shuwa identity from the outset of westward migration. " +
        "11th–14th century: Shuwa communities around Lake Chad serve as Islamic teachers and traders, spreading the faith among Kanuri and Buduma peoples. " +
        "1804: The Sokoto Jihad reforms Islamic practice across northern Nigeria; Shuwa communities align with the Caliphate's Maliki-Sufi framework. " +
        "1900–1960: Tijaniyya Sufi brotherhood spreads widely among Kano Muslims; Shuwa community in Fagge participates in Tijaniyya zikr (devotional gatherings). " +
        "1960–present: Salafi reform movements (Izala) challenge Sufi practices in Kano; younger Shuwa Arabs are divided between Tijaniyya and Salafi orientations. Arabic Quranic education remains a community point of pride.",
    },
  },

  {
    category: "art",
    subject_name: "Shuwa Arab Cultural Expressions",
    subject_description:
      "Shuwa Arab artistic life centres on oral poetry (shi'r), livestock decoration, leatherwork, and ceremonial music — all portable art forms suited to a historically mobile people. In urban Kano, these traditions persist mainly in ceremonial contexts such as weddings and naming ceremonies.",
    is_endangered: true,
    is_written: false,
    ethnic_group_id: "shuwa-arab-fagge",
    country_id: "nigeria",
    state_id: "kano",
    local_government_id: "fagge",
    entry: {
      origins:
        "Shuwa oral poetry follows Arabic poetic conventions — metres, rhyme schemes, and praise-song structures rooted in pre-Islamic Arabic literary tradition. Cattle decoration (painting or branding animals for ceremonies) and leather saddle craft reflect the centrality of cattle in Shuwa identity and wealth.",
      eras:
        "Pre-1900s: Oral poetry and song are the primary art forms; professional poets (shu'ara) compose praise poems for clan leaders and are rewarded with cattle. Women produce decorative leather goods and woven grass mats. " +
        "1900–1960s: Trans-Saharan trade routes decline; Shuwa leatherwork finds a smaller market. Contact with Hausa culture in Kano introduces Hausa instruments (kakaki trumpet, goge fiddle) into Shuwa ceremonial music. " +
        "1960–1990s: Shuwa wedding music in Kano blends Arabic call-and-response song with Hausa rhythmic patterns; no formal recording of this hybrid tradition occurs. " +
        "1990–present: Traditional Shuwa oral poetry is practised almost exclusively by elders in Kano. No systematic effort to document or teach it to younger generations — at quiet risk of disappearing within one or two generations.",
    },
  },


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
