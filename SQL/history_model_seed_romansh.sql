-- =============================================================================
-- history_model_seed_romansh.sql
-- -----------------------------------------------------------------------------
-- Second regional sample for the history model: the Rumantschs (Romansh) of
-- Graubünden, Switzerland.
--
-- WHY THIS SAMPLE EXISTS
--   The first sample (Ikwerre, Nigeria) is oral-tradition-heavy: almost none of
--   its entries carry a calendar date. This sample is deliberately its opposite
--   -- a well-documented European minority whose history is densely datable --
--   so that Explore and Timeline are developed against BOTH shapes of data
--   rather than over-fitting to one.
--
-- PROVENANCE DISCIPLINE (same rules as the Ikwerre sample)
--   * Every entry lands verification_status='unverified', workflow_status='in_review'.
--   * Sources listed are real, checkable reference works. They record WHERE a
--     claim is to be verified; they are not a claim that verification happened.
--   * Nothing in the Romansh language itself (lexicon, proverbs, folktales) is
--     invented here. Those are left as explicit SLOTs -- see
--     data/collection/romansh/README.md.
--
-- MODEL GAPS SURFACED BY POPULATING THIS SAMPLE (feed these back into the spec)
--   1. entries.era enum is Nigeria-shaped: pre-colonial|colonial|post-independence
--      |contemporary. Romansh history has no colonial period and no independence
--      event. era is left NULL throughout this sample; ordering relies on
--      period_start + date_precision instead. The enum needs either a neutral
--      vocabulary or per-region era vocabularies.
--   2. entry_type has no value for a written work / text / publication. The
--      early Romansh literary and Bible-translation entries are typed 'event',
--      which is lossy -- they are artefacts, not occurrences.
--   3. designations had no Canton / Region / City (place) or Linguistic
--      Community (people). Added below as lookup rows, no schema change needed.
--
-- Idempotent: fixed UUIDs + ON CONFLICT DO NOTHING. Safe to re-run.
-- Additive: touches no existing row.
-- =============================================================================


-- -----------------------------------------------------------------------------
-- 1. Designations (lookup vocabulary extension)
-- -----------------------------------------------------------------------------
INSERT INTO designations (id, kind, label, default_rank) VALUES
  ('d0000000-0000-4000-8000-000000000001', 'place',  'Canton',               3),
  ('d0000000-0000-4000-8000-000000000002', 'place',  'Region',               4),
  ('d0000000-0000-4000-8000-000000000003', 'place',  'City',                 5),
  ('d0000000-0000-4000-8000-000000000004', 'people', 'Linguistic Community', 1)
ON CONFLICT (id) DO NOTHING;


-- -----------------------------------------------------------------------------
-- 2. Places  (Europe -> Switzerland -> Graubünden -> regions / city)
-- -----------------------------------------------------------------------------
INSERT INTO places (id, parent_id, name, designation_id, level_rank, iso_code, general_info) VALUES
  ('a0000000-0000-4000-8000-000000000001', NULL,
   'Europe', '179f58c0-5479-41c1-88cf-59fb0dfce418', 1, NULL,
   '{"note": "Added for the Romansh sample; the model previously held only Africa."}'),

  ('a0000000-0000-4000-8000-000000000002', 'a0000000-0000-4000-8000-000000000001',
   'Switzerland', '85b9aa2b-2d65-4972-bef7-424c88169d03', 2, 'CHE',
   '{"official_languages": ["German", "French", "Italian", "Romansh"], "note": "Romansh is a national language (1938) and a partial official language (1996)."}'),

  ('a0000000-0000-4000-8000-000000000003', 'a0000000-0000-4000-8000-000000000002',
   'Graubünden', 'd0000000-0000-4000-8000-000000000001', 3, NULL,
   '{"names": {"de": "Graubünden", "rm": "Grischun", "it": "Grigioni"}, "note": "Switzerland''s only trilingual canton: German, Romansh, Italian. Home of nearly all Romansh speakers."}'),

  ('a0000000-0000-4000-8000-000000000004', 'a0000000-0000-4000-8000-000000000003',
   'Chur', 'd0000000-0000-4000-8000-000000000003', 5, NULL,
   '{"names": {"rm": "Cuira"}, "note": "Cantonal capital; historically Romansh-speaking, Germanised after the 1465 fire."}'),

  ('a0000000-0000-4000-8000-000000000005', 'a0000000-0000-4000-8000-000000000003',
   'Surselva', 'd0000000-0000-4000-8000-000000000002', 4, NULL,
   '{"idiom": "Sursilvan", "note": "Anterior Rhine valley; largest Romansh-speaking region."}'),

  ('a0000000-0000-4000-8000-000000000006', 'a0000000-0000-4000-8000-000000000003',
   'Engiadina', 'd0000000-0000-4000-8000-000000000002', 4, NULL,
   '{"idioms": ["Puter", "Vallader"], "note": "Engadine valley; Puter in the upper (Engiadin''Ota), Vallader in the lower (Engiadina Bassa)."}'),

  ('a0000000-0000-4000-8000-000000000007', 'a0000000-0000-4000-8000-000000000003',
   'Surmeir', 'd0000000-0000-4000-8000-000000000002', 4, NULL,
   '{"idiom": "Surmiran", "note": "Central region; Surmiran is transitional between the Rhine-valley and Engadine idiom groups."}')
ON CONFLICT (id) DO NOTHING;


-- -----------------------------------------------------------------------------
-- 3. Peoples
-- -----------------------------------------------------------------------------
INSERT INTO peoples (id, parent_id, name, designation_id, general_info) VALUES
  ('b0000000-0000-4000-8000-000000000001', NULL,
   'Rumantschs', 'd0000000-0000-4000-8000-000000000004',
   '{"endonym": "Rumantschs", "english": "Romansh people", "language": "Romansh", "note": "Defined by language rather than descent -- deliberately typed Linguistic Community, not Ethnic Group."}')
ON CONFLICT (id) DO NOTHING;

INSERT INTO people_places (people_id, place_id, relationship) VALUES
  ('b0000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000003', 'homeland')
ON CONFLICT DO NOTHING;


-- -----------------------------------------------------------------------------
-- 4. Language + idioms
--    UNESCO Atlas classes Romansh as Definitely Endangered.
-- -----------------------------------------------------------------------------
INSERT INTO languages (id, name, iso_code, classification, endangerment_status, people_id, general_info) VALUES
  ('c0000000-0000-4000-8000-000000000001', 'Romansh', 'roh',
   'Indo-European > Italic > Romance > Rhaeto-Romance',
   'definitely_endangered', 'b0000000-0000-4000-8000-000000000001',
   '{"iso_639_1": "rm", "iso_639_3": "roh", "speakers_note": "Commonly cited as roughly 40,000-60,000 users; the 2000 federal census recorded 35,095 people naming Romansh the language of best command, 27,038 of them in Graubünden. Figures vary by whether the question asks best command, main language, or any regular use -- TO BE PINNED to a single cited BFS series.", "status_source": "UNESCO Atlas of the World''s Languages in Danger"}')
ON CONFLICT (id) DO NOTHING;

-- The five written idioms, plus the constructed pan-regional standard.
-- NOTE: Rumantsch Grischun is not a dialect -- it is an engineered written
-- standard. It is stored here because the model has no separate concept for a
-- constructed standard variety; region_note records the distinction.
INSERT INTO dialects (id, language_id, name, region_note) VALUES
  ('c1000000-0000-4000-8000-000000000001', 'c0000000-0000-4000-8000-000000000001', 'Sursilvan',         'Surselva / Anterior Rhine valley. Largest idiom by speakers.'),
  ('c1000000-0000-4000-8000-000000000002', 'c0000000-0000-4000-8000-000000000001', 'Sutsilvan',         'Posterior Rhine valley. Smallest idiom; lexically close to Sursilvan.'),
  ('c1000000-0000-4000-8000-000000000003', 'c0000000-0000-4000-8000-000000000001', 'Surmiran',          'Surmeir / central Graubünden. Transitional between the Rhine-valley and Engadine groups.'),
  ('c1000000-0000-4000-8000-000000000004', 'c0000000-0000-4000-8000-000000000001', 'Puter',             'Upper Engadine (Engiadin''Ota).'),
  ('c1000000-0000-4000-8000-000000000005', 'c0000000-0000-4000-8000-000000000001', 'Vallader',          'Lower Engadine (Engiadina Bassa) and Val Müstair.'),
  ('c1000000-0000-4000-8000-000000000006', 'c0000000-0000-4000-8000-000000000001', 'Rumantsch Grischun', 'NOT a regional idiom: a constructed pan-regional written standard devised by Heinrich Schmid in 1982 on the basis of Sursilvan, Vallader and Surmiran.')
ON CONFLICT (id) DO NOTHING;


-- -----------------------------------------------------------------------------
-- 5. Sources
--    Real, checkable reference works. reliability_tier reflects the work's
--    standing, NOT that a specific claim below has been checked against it.
-- -----------------------------------------------------------------------------
INSERT INTO sources (id, source_type, author_or_informant, title, year, citation_or_url, reliability_tier) VALUES
  ('e0000000-0000-4000-8000-000000000001', 'web', 'Swiss Academy of Humanities and Social Sciences',
   'Historical Dictionary of Switzerland (HLS/DHS/DSS)', NULL, 'https://hls-dhs-dss.ch/', 'high'),
  ('e0000000-0000-4000-8000-000000000002', 'web', 'Lia Rumantscha',
   'Lia Rumantscha -- umbrella organisation for Romansh language and culture', NULL, 'https://www.liarumantscha.ch/', 'high'),
  ('e0000000-0000-4000-8000-000000000003', 'web', 'UNESCO',
   'UNESCO Atlas of the World''s Languages in Danger', NULL, 'https://www.unesco.org/languages-atlas/', 'high'),
  ('e0000000-0000-4000-8000-000000000004', 'web', 'Swiss Federal Statistical Office (BFS/OFS/UST)',
   'Federal population and language statistics', NULL, 'https://www.bfs.admin.ch/', 'high'),
  ('e0000000-0000-4000-8000-000000000005', 'web', 'SIL International',
   'Ethnologue: Romansh (roh)', NULL, 'https://www.ethnologue.com/language/roh/', 'medium'),
  ('e0000000-0000-4000-8000-000000000006', 'web', 'Max Planck Institute',
   'Glottolog: Romansh', NULL, 'https://glottolog.org/', 'medium'),
  ('e0000000-0000-4000-8000-000000000007', 'web', 'SWI swissinfo.ch',
   'Reporting on the Rumantsch Grischun schools controversy', NULL, 'https://www.swissinfo.ch/', 'medium'),
  ('e0000000-0000-4000-8000-000000000008', 'web', 'Wikipedia contributors',
   'Romansh language (English Wikipedia)', NULL, 'https://en.wikipedia.org/wiki/Romansh_language', 'low')
ON CONFLICT (id) DO NOTHING;


-- -----------------------------------------------------------------------------
-- 6. Entries
--    era deliberately NULL -- see model gap #1 in the header.
--    All unverified / in_review.
-- -----------------------------------------------------------------------------
INSERT INTO entries (id, entry_type, title, summary, body, significance,
                     period_start, period_end, date_precision, is_approximate, era,
                     place_id, people_id, is_endangered, is_written,
                     verification_status, workflow_status) VALUES

  ('f0000000-0000-4000-8000-000000000001', 'conflict',
   'Roman conquest of Raetia',
   'Rome subdued the Alpine province of Raetia in 15 BC, beginning the Latinisation of the region.',
   'The campaign of 15 BC brought the Alpine territory of Raetia under Roman control. The Celtic and Raetic languages spoken there were progressively displaced by the Vulgar Latin of soldiers, settlers and administration -- the ancestor of Romansh.',
   'The origin point of the entire Romansh language history: without Latinisation there is no Rhaeto-Romance.',
   -15, -15, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000003', 'b0000000-0000-4000-8000-000000000001',
   false, true, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-000000000002', 'origin_tradition',
   'Emergence of Rhaeto-Romance from Vulgar Latin',
   'Alpine Vulgar Latin diverged into a distinct Rhaeto-Romance speech over the post-Roman centuries.',
   'As central Roman authority receded, the Latin of the Alpine valleys developed in relative isolation, retaining features lost elsewhere in Romance and absorbing a pre-Latin substrate. The result is the speech ancestral to modern Romansh.',
   'Establishes Romansh as a Romance language in its own right rather than a dialect of Italian or a variety of German.',
   400, 700, 'century', true, NULL,
   'a0000000-0000-4000-8000-000000000003', 'b0000000-0000-4000-8000-000000000001',
   false, false, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-000000000003', 'event',
   'Raetia Prima passes to the Frankish Empire',
   'In 537 the Ostrogoths transferred Raetia Prima to Frankish control.',
   'The transfer moved the region out of an Italian orbit and into a northern, Frankish one -- the first structural turn of Raetia away from the Latin south.',
   'Earliest political move in the long reorientation that would expose Romansh to Germanic pressure.',
   537, 537, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000003', 'b0000000-0000-4000-8000-000000000001',
   false, true, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-000000000004', 'institution',
   'The Diocese of Chur is reassigned from Milan to Mainz',
   'In 843 the bishopric of Chur was moved from the ecclesiastical province of Milan to that of Mainz.',
   'Ecclesiastical reassignment redirected the region''s institutional, clerical and educational ties from Latin Italy towards the German-speaking north. Church language and church schooling followed.',
   'Widely treated as the hinge of Germanisation: the mechanism was institutional, not military.',
   843, 843, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000004', 'b0000000-0000-4000-8000-000000000001',
   false, true, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-000000000005', 'event',
   'Germanisation of Lower Raetia',
   'From roughly the 12th century onward German displaced Romansh across the lower valleys.',
   'Lower Raetia became German-speaking during the 12th century, and by the 15th century the Rhine valley of St. Gallen and the Walensee area had shifted entirely. The Romansh area contracted from its edges inward -- a retreat that has never reversed.',
   'The umbrella process under which most later language-loss entries sit.',
   1100, 1500, 'century', true, NULL,
   'a0000000-0000-4000-8000-000000000003', 'b0000000-0000-4000-8000-000000000001',
   true, false, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-000000000006', 'migration',
   'Walser settlement in Graubünden',
   'German-speaking Walser migrants settled high valleys across Graubünden from the 13th century.',
   'Walser communities from the Valais were settled on high, previously marginal land, often under charters granting them autonomy. Their arrival inserted German-speaking settlements into and between Romansh-speaking valleys.',
   'Fragmented a once-contiguous Romansh territory into separated pockets -- a structural cause of the divergence between the idioms.',
   1200, 1400, 'century', true, NULL,
   'a0000000-0000-4000-8000-000000000003', 'b0000000-0000-4000-8000-000000000001',
   false, false, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-000000000007', 'event',
   'Fire destroys Chur and Germanises the capital',
   'The 1465 fire at Chur was followed by German-speaking resettlement that made German the city''s majority language.',
   'After the fire destroyed the city, German-speaking artisans and builders settled to rebuild it. Chur -- the cantonal capital and seat of the diocese -- shifted from Romansh to German majority use and never shifted back.',
   'A single contingent event with permanent linguistic consequence; the Romansh heartland lost its central city.',
   1465, 1465, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000004', 'b0000000-0000-4000-8000-000000000001',
   true, true, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-000000000008', 'event',
   'Gian Travers writes the first known Romansh literary work',
   'In 1527 Gian Travers composed the verse chronicle Chianzun dalla guerra dagl Chiaste da Müs in the Putèr idiom.',
   'The Chianzun dalla guerra dagl Chiaste da Müs -- a verse account of the Musso war -- is the earliest known literary composition in Romansh. It was written in Putèr, the idiom of the Upper Engadine.',
   'Marks the beginning of Romansh as a written language and sets the pattern of idiom-based, not unified, literacy.',
   1527, 1527, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000006', 'b0000000-0000-4000-8000-000000000001',
   false, true, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-000000000009', 'event',
   'Bifrun prints the first Romansh book',
   'Giachem (Jachiam) Bifrun published a Romansh catechism in 1552, the first printed book in the language.',
   'Bifrun, a notary of the Engadine, produced a printed catechism in 1552 -- the first book printed in Romansh, and a direct product of Reformation demand for scripture in the vernacular.',
   'Print, driven by the Reformation, is what turned Romansh from a spoken language into a documented one.',
   1552, 1552, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000006', 'b0000000-0000-4000-8000-000000000001',
   false, true, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-00000000000a', 'event',
   'Bifrun''s New Testament translation',
   'Bifrun published a Romansh translation of the New Testament in 1560.',
   'Following his catechism, Bifrun translated the New Testament into Putèr. The work substantially extended the written vocabulary and fixed orthographic habits for the Engadine idiom.',
   'Established a durable written register; later orthographies build directly on this line of work.',
   1560, 1560, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000006', 'b0000000-0000-4000-8000-000000000001',
   false, true, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-00000000000b', 'event',
   'Chiampel''s Cudesch da Psalms',
   'Durich Chiampel published a psalter in the Vallader idiom in 1562.',
   'Chiampel''s Cudesch da Psalms established a written tradition for Vallader, the Lower Engadine idiom, in parallel with Bifrun''s Putèr line.',
   'Shows written Romansh emerging as several parallel idiom traditions rather than one standard -- the root of the standardisation problem that recurs in 1982 and 2001.',
   1562, 1562, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000006', 'b0000000-0000-4000-8000-000000000001',
   false, true, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-00000000000c', 'event',
   'Bibla da Cuera, the first complete Romansh Bible',
   'The first complete Bible in Romansh was published at Chur between 1717 and 1719.',
   'The Bibla da Cuera completed the scriptural corpus in Romansh, consolidating two centuries of translation work begun in the Reformation.',
   'Completes the written foundation of the language before the modern standardisation era.',
   1717, 1719, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000004', 'b0000000-0000-4000-8000-000000000001',
   false, true, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-00000000000d', 'event',
   'First systematic Romansh orthographies',
   'Zaccaria Pallioppi (1857) and Baseli Carigiet (1858) published the first systematic orthographic treatments.',
   'Pallioppi''s Ortografia et ortoëpia del idiom romauntsch d''Engiadin''ota (1857) and Carigiet''s Ortografia gienerala, speculativa ramontscha (1858) were the first deliberate attempts to codify Romansh spelling and pronunciation.',
   'The shift from writing Romansh to regulating it -- the opening move of the standardisation question.',
   1857, 1858, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000003', 'b0000000-0000-4000-8000-000000000001',
   false, true, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-00000000000e', 'institution',
   'Cantonal recognition of Romansh',
   'Graubünden recognised Romansh as an official cantonal language in 1880.',
   'Cantonal recognition gave Romansh a formal standing in Graubünden decades before any federal status, alongside German and Italian.',
   'First legal protection; the precedent the 1938 federal campaign would build on.',
   1880, 1880, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000003', 'b0000000-0000-4000-8000-000000000001',
   false, true, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-00000000000f', 'institution',
   'Società Retorumantscha founded',
   'A learned society for Romansh language and literature was founded in 1885.',
   'The Società Retorumantscha organised scholarly documentation of the language -- dictionaries, text editions and systematic study of the idioms.',
   'Moves Romansh from a written vernacular to an object of organised scholarship.',
   1885, 1885, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000003', 'b0000000-0000-4000-8000-000000000001',
   false, true, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-000000000010', 'institution',
   'Lia Rumantscha founded',
   'Lia Rumantscha, the umbrella organisation for Romansh, was founded in 1919.',
   'Lia Rumantscha brought the regional Romansh cultural associations under a single umbrella based in Chur, coordinating language promotion, publishing, schooling and political advocacy.',
   'The institutional actor behind nearly every subsequent milestone: 1938 recognition, Rumantsch Grischun, and present-day revitalisation.',
   1919, 1919, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000004', 'b0000000-0000-4000-8000-000000000001',
   false, true, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-000000000011', 'event',
   'Romansh becomes a national language of Switzerland',
   'A federal referendum in 1938 made Romansh the fourth national language, approved by about 91.6% of voters.',
   'The 1938 amendment recognised Romansh as a national language of the Confederation. The vote is generally read as a defensive assertion of Swiss multilingualism against Italian irredentist claims that Romansh was a dialect of Italian.',
   'The single most cited event in Romansh history; converts a declining minority speech into a constitutionally named national language.',
   1938, 1938, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000002', 'b0000000-0000-4000-8000-000000000001',
   false, true, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-000000000012', 'institution',
   'Rumantsch Grischun devised',
   'Heinrich Schmid presented the rules for a constructed pan-regional written standard in 1982.',
   'At the request of Lia Rumantscha, the Zurich linguist Heinrich Schmid built Rumantsch Grischun as a compromise written standard, drawing on Sursilvan, Vallader and Surmiran. It was intended to give a fragmented language one administrative and publishing register.',
   'An attempt to solve by engineering the fragmentation that the Walser settlements and idiom-based literacy had produced centuries earlier.',
   1982, 1982, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000003', 'b0000000-0000-4000-8000-000000000001',
   false, true, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-000000000013', 'event',
   'Romansh becomes a partial official language of the Confederation',
   'A 1996 referendum made Romansh an official language for federal correspondence with Romansh speakers.',
   'The 1996 change went beyond the symbolic national-language status of 1938: it gave Romansh speakers a right to deal with federal authorities in their own language, while stopping short of full official status equal to German, French and Italian.',
   'Turns recognition into an enforceable individual entitlement -- the practical ceiling of Romansh''s legal position to date.',
   1996, 1996, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000002', 'b0000000-0000-4000-8000-000000000001',
   false, true, 'unverified', 'in_review'),

  ('f0000000-0000-4000-8000-000000000014', 'modern_identity',
   'The Rumantsch Grischun schools controversy',
   'Whether the constructed standard or the regional idioms should be taught in schools remains contested.',
   'A 2001 cantonal referendum made Rumantsch Grischun the canton''s sole official Romansh variety, and from the mid-2000s it was introduced into schools. Opposition held that teaching a constructed standard displaced the living idioms children actually speak and accelerated rather than slowed language loss. Several municipalities subsequently reverted to idiom-based teaching. Both positions claim to be defending Romansh.',
   'The clearest live example in this sample of a dispute that must be presented as contested rather than resolved -- there is no neutral position, and the model should not manufacture one.',
   2001, NULL, 'year', false, NULL,
   'a0000000-0000-4000-8000-000000000003', 'b0000000-0000-4000-8000-000000000001',
   true, true, 'disputed', 'in_review'),

  ('f0000000-0000-4000-8000-000000000015', 'modern_identity',
   'Language shift and endangerment today',
   'Romansh is classed Definitely Endangered by UNESCO amid continuing decline in everyday use.',
   'Speaker numbers have fallen over the twentieth century, and Romansh speakers are effectively all bilingual in German. Federal and cantonal support, immersive schooling and Lia Rumantscha''s programmes work against a shift driven by mobility, media and intermarriage. Reported totals vary by survey question -- see the note on the language record.',
   'The present state of the process that began with the 843 reorientation: institutional protection is strong, but everyday transmission is the open question.',
   2000, NULL, 'decade', true, NULL,
   'a0000000-0000-4000-8000-000000000003', 'b0000000-0000-4000-8000-000000000001',
   true, true, 'unverified', 'in_review')
ON CONFLICT (id) DO NOTHING;


-- -----------------------------------------------------------------------------
-- 7. Entry relationships -- the graph Timeline renders
-- -----------------------------------------------------------------------------
INSERT INTO entry_relationships (id, from_entry_id, to_entry_id, relation_type, note) VALUES
  ('aa000000-0000-4000-8000-000000000001', 'f0000000-0000-4000-8000-000000000001', 'f0000000-0000-4000-8000-000000000002', 'caused',       'Latinisation of Raetia is the precondition for a Romance language there.'),
  ('aa000000-0000-4000-8000-000000000002', 'f0000000-0000-4000-8000-000000000003', 'f0000000-0000-4000-8000-000000000004', 'followed_by',  'Political reorientation north precedes the ecclesiastical one.'),
  ('aa000000-0000-4000-8000-000000000003', 'f0000000-0000-4000-8000-000000000004', 'f0000000-0000-4000-8000-000000000005', 'caused',       'Reassignment to Mainz redirected clerical and educational language northward.'),
  ('aa000000-0000-4000-8000-000000000004', 'f0000000-0000-4000-8000-000000000006', 'f0000000-0000-4000-8000-000000000005', 'part_of',      'Walser settlement is one mechanism of the wider Germanisation.'),
  ('aa000000-0000-4000-8000-000000000005', 'f0000000-0000-4000-8000-000000000007', 'f0000000-0000-4000-8000-000000000005', 'part_of',      'Loss of Chur is the most consequential single episode of that process.'),
  ('aa000000-0000-4000-8000-000000000006', 'f0000000-0000-4000-8000-000000000006', 'f0000000-0000-4000-8000-00000000000b', 'caused',       'Territorial fragmentation underlies the divergence of separate written idioms.'),
  ('aa000000-0000-4000-8000-000000000007', 'f0000000-0000-4000-8000-000000000008', 'f0000000-0000-4000-8000-000000000009', 'followed_by',  'Manuscript composition precedes print.'),
  ('aa000000-0000-4000-8000-000000000008', 'f0000000-0000-4000-8000-000000000009', 'f0000000-0000-4000-8000-00000000000a', 'followed_by',  'Catechism precedes the New Testament translation.'),
  ('aa000000-0000-4000-8000-000000000009', 'f0000000-0000-4000-8000-00000000000b', 'f0000000-0000-4000-8000-00000000000a', 'related_to',   'Parallel Vallader and Putèr written traditions develop alongside each other.'),
  ('aa000000-0000-4000-8000-00000000000a', 'f0000000-0000-4000-8000-00000000000c', 'f0000000-0000-4000-8000-00000000000a', 'derived_from', 'The complete Bible builds on the Reformation translation line.'),
  ('aa000000-0000-4000-8000-00000000000b', 'f0000000-0000-4000-8000-00000000000d', 'f0000000-0000-4000-8000-00000000000c', 'derived_from', 'Orthographies codify the corpus the translators produced.'),
  ('aa000000-0000-4000-8000-00000000000c', 'f0000000-0000-4000-8000-00000000000e', 'f0000000-0000-4000-8000-00000000000f', 'followed_by',  'Legal recognition precedes organised scholarship.'),
  ('aa000000-0000-4000-8000-00000000000d', 'f0000000-0000-4000-8000-00000000000f', 'f0000000-0000-4000-8000-000000000010', 'followed_by',  'The learned society precedes the umbrella organisation.'),
  ('aa000000-0000-4000-8000-00000000000e', 'f0000000-0000-4000-8000-000000000010', 'f0000000-0000-4000-8000-000000000011', 'related_to',   'Lia Rumantscha campaigned for national-language status; the strength of the causal claim is TO BE SOURCED.'),
  ('aa000000-0000-4000-8000-00000000000f', 'f0000000-0000-4000-8000-000000000011', 'f0000000-0000-4000-8000-000000000013', 'followed_by',  'National language (1938) precedes partial official status (1996).'),
  ('aa000000-0000-4000-8000-000000000010', 'f0000000-0000-4000-8000-000000000010', 'f0000000-0000-4000-8000-000000000012', 'caused',       'Lia Rumantscha commissioned the constructed standard.'),
  ('aa000000-0000-4000-8000-000000000011', 'f0000000-0000-4000-8000-000000000012', 'f0000000-0000-4000-8000-000000000014', 'caused',       'The standard is what the schools dispute is about.'),
  ('aa000000-0000-4000-8000-000000000012', 'f0000000-0000-4000-8000-000000000014', 'f0000000-0000-4000-8000-000000000012', 'contradicts',  'Opponents hold that the standard harms the language it was built to save.'),
  ('aa000000-0000-4000-8000-000000000013', 'f0000000-0000-4000-8000-000000000015', 'f0000000-0000-4000-8000-000000000005', 'derived_from', 'Present-day shift is the continuation of the long Germanisation.'),
  ('aa000000-0000-4000-8000-000000000014', 'f0000000-0000-4000-8000-000000000013', 'f0000000-0000-4000-8000-000000000015', 'related_to',   'Legal protection runs against continuing everyday decline.')
ON CONFLICT (id) DO NOTHING;


-- -----------------------------------------------------------------------------
-- 8. Entry -> source links
--    stance/confidence describe the link, not a completed verification.
-- -----------------------------------------------------------------------------
INSERT INTO entry_sources (entry_id, source_id, stance, confidence, note) VALUES
  ('f0000000-0000-4000-8000-000000000001', 'e0000000-0000-4000-8000-000000000001', 'supports', 'medium', 'Verify the 15 BC campaign date and provincial extent in HLS.'),
  ('f0000000-0000-4000-8000-000000000002', 'e0000000-0000-4000-8000-000000000006', 'supports', 'medium', 'Glottolog for the Rhaeto-Romance classification.'),
  ('f0000000-0000-4000-8000-000000000002', 'e0000000-0000-4000-8000-000000000005', 'supports', 'medium', 'Ethnologue entry roh.'),
  ('f0000000-0000-4000-8000-000000000003', 'e0000000-0000-4000-8000-000000000001', 'supports', 'low',    'Confirm the 537 transfer of Raetia Prima in HLS.'),
  ('f0000000-0000-4000-8000-000000000004', 'e0000000-0000-4000-8000-000000000001', 'supports', 'medium', 'HLS on the Diocese of Chur; check the 843 date and the Milan->Mainz reassignment.'),
  ('f0000000-0000-4000-8000-000000000005', 'e0000000-0000-4000-8000-000000000001', 'supports', 'medium', 'HLS for the chronology of German expansion in Raetia.'),
  ('f0000000-0000-4000-8000-000000000006', 'e0000000-0000-4000-8000-000000000001', 'supports', 'medium', 'HLS on Walser settlement and its charters.'),
  ('f0000000-0000-4000-8000-000000000007', 'e0000000-0000-4000-8000-000000000001', 'supports', 'medium', 'Confirm the fire year (1465) and the resettlement account in HLS.'),
  ('f0000000-0000-4000-8000-000000000007', 'e0000000-0000-4000-8000-000000000008', 'supports', 'low',    'Wikipedia gives 1465; some popular sources give 1464. Discrepancy TO BE RESOLVED against HLS.'),
  ('f0000000-0000-4000-8000-000000000008', 'e0000000-0000-4000-8000-000000000002', 'supports', 'medium', 'Lia Rumantscha on the beginnings of Romansh literature.'),
  ('f0000000-0000-4000-8000-000000000009', 'e0000000-0000-4000-8000-000000000002', 'supports', 'medium', 'Confirm 1552 catechism as the first printed Romansh book.'),
  ('f0000000-0000-4000-8000-00000000000a', 'e0000000-0000-4000-8000-000000000002', 'supports', 'medium', 'Bifrun New Testament, 1560.'),
  ('f0000000-0000-4000-8000-00000000000b', 'e0000000-0000-4000-8000-000000000002', 'supports', 'medium', 'Chiampel, Cudesch da Psalms, 1562.'),
  ('f0000000-0000-4000-8000-00000000000c', 'e0000000-0000-4000-8000-000000000001', 'supports', 'low',    'Bibla da Cuera 1717-1719 -- confirm imprint dates.'),
  ('f0000000-0000-4000-8000-00000000000d', 'e0000000-0000-4000-8000-000000000008', 'supports', 'low',    'Pallioppi 1857 / Carigiet 1858 -- titles taken from Wikipedia, TO BE VERIFIED in a bibliographic source.'),
  ('f0000000-0000-4000-8000-00000000000e', 'e0000000-0000-4000-8000-000000000001', 'supports', 'low',    'Confirm the 1880 cantonal recognition in HLS.'),
  ('f0000000-0000-4000-8000-00000000000f', 'e0000000-0000-4000-8000-000000000001', 'supports', 'low',    'Società Retorumantscha, founded 1885.'),
  ('f0000000-0000-4000-8000-000000000010', 'e0000000-0000-4000-8000-000000000002', 'supports', 'high',   'Lia Rumantscha''s own account of its 1919 founding.'),
  ('f0000000-0000-4000-8000-000000000011', 'e0000000-0000-4000-8000-000000000001', 'supports', 'medium', 'HLS on the 1938 referendum; confirm the 91.6% figure.'),
  ('f0000000-0000-4000-8000-000000000011', 'e0000000-0000-4000-8000-000000000004', 'supports', 'medium', 'Federal records of the 1938 vote.'),
  ('f0000000-0000-4000-8000-000000000012', 'e0000000-0000-4000-8000-000000000002', 'supports', 'high',   'Lia Rumantscha on Rumantsch Grischun and Heinrich Schmid, 1982.'),
  ('f0000000-0000-4000-8000-000000000013', 'e0000000-0000-4000-8000-000000000004', 'supports', 'medium', 'Federal language legislation, 1996.'),
  ('f0000000-0000-4000-8000-000000000014', 'e0000000-0000-4000-8000-000000000007', 'mentions',  'medium', 'swissinfo reporting on the schools dispute and municipal reversions.'),
  ('f0000000-0000-4000-8000-000000000014', 'e0000000-0000-4000-8000-000000000002', 'mentions',  'medium', 'Lia Rumantscha is a party to this dispute, not a neutral observer -- read accordingly.'),
  ('f0000000-0000-4000-8000-000000000015', 'e0000000-0000-4000-8000-000000000003', 'supports', 'high',   'UNESCO Atlas: Definitely Endangered.'),
  ('f0000000-0000-4000-8000-000000000015', 'e0000000-0000-4000-8000-000000000004', 'supports', 'medium', 'BFS language statistics; pin a single series before quoting a speaker count.')
ON CONFLICT DO NOTHING;
