-- =============================================================================
-- history_model_romansh_verify_and_publish.sql
-- -----------------------------------------------------------------------------
-- Verification pass on the Romansh sample, run against the Historical Dictionary
-- of Switzerland (HLS/DHS), Lia Rumantscha, and the City of Chur.
--
-- Applied to Supabase as migration `history_model_romansh_verify_and_publish`.
-- Depends on: history_model_seed_romansh.sql
--
-- WHAT THIS CHANGES AND WHY
--
-- 1. HLS reclassified 'web' -> 'book'. It is a 13-volume peer-reviewed print
--    encyclopedia (completed 2014) that is also published online. Typing it as
--    'web' made the >=2-independent-source-types rule structurally impossible to
--    satisfy for this sample, since every other source was also 'web'.
--
-- 2. CORRECTION -- the Chur city fire was 27 April 1464, NOT 1465.
--    HLS and the City of Chur both give 1464. 17 January 1465 is the date the
--    guild constitution was adopted; English Wikipedia appears to conflate the
--    two. The seed originally carried 1465. Wikipedia is now recorded against
--    that entry with stance='contradicts' rather than being silently dropped --
--    the disagreement is part of the record.
--
-- 3. Ten entries promoted to verification_status='verified': those confirmed by
--    HLS *and* at least one independent source. The rest stay 'unverified'.
--
-- 4. ALL 21 entries -> workflow_status='published'.
--    workflow_status and verification_status are deliberately separate:
--      workflow_status='published'    = editorially ready to display
--      verification_status='verified' = the claim has been checked
--    Publishing an unverified entry is legitimate; the UI carries a provenance
--    badge. Marking an unchecked entry 'verified' would not be.
--
-- STILL UNVERIFIED (all published, all badged)
--   15 BC Roman conquest; post-Roman emergence of Rhaeto-Romance; 537 Raetia
--   Prima; Bibla da Cuera 1717-19; Pallioppi/Carigiet orthographies 1857-58;
--   cantonal recognition 1880; Societad Retorumantscha 1885; Rumantsch Grischun
--   1982; official-language status 1996; present-day endangerment.
--
--   Note on 1982 and the endangerment entry: both are supported by strong
--   sources (Lia Rumantscha; UNESCO) but every one of those sources is type
--   'web', so the >=2-source-type rule cannot be met. This is a case where the
--   rule -- designed for triangulating oral history -- produces an odd result
--   for well-documented history. Worth revisiting in the method doc.
--
--   1996 specifically: HLS confirms Romansh is an official language only to a
--   limited extent, but does NOT confirm the year. The date rests on web
--   sources alone.
-- =============================================================================

UPDATE sources SET
  source_type = 'book',
  year = 2014,
  citation_or_url = 'Historisches Lexikon der Schweiz / Dictionnaire historique de la Suisse, 13 vols., 2014; online at https://hls-dhs-dss.ch/'
WHERE id = 'e0000000-0000-4000-8000-000000000001';

INSERT INTO sources (id, source_type, author_or_informant, title, year, citation_or_url, reliability_tier) VALUES
  ('e0000000-0000-4000-8000-000000000009', 'web', 'Stadt Chur',
   'Stadtbrand 1464 -- Chur wird zur Zunftstadt', NULL, 'https://www.chur.ch/geschichte/7075', 'medium')
ON CONFLICT (id) DO NOTHING;

UPDATE entries SET
  title       = 'Fire destroys Chur and Germanises the capital',
  summary     = 'The city fire of 27 April 1464 was followed by German-speaking resettlement that made German the language of the cantonal capital.',
  body        = 'Chur burned on 27 April 1464, destroying the town hall and the archive of imperial privileges. German-speaking artisans settled to rebuild, and the guild constitution was adopted on 17 January 1465. HLS records that Romansh was the general spoken language of Chur until the fire, and that the bishop''s seat was occupied almost exclusively by German speakers thereafter. The capital never shifted back.',
  period_start = 1464,
  period_end   = 1464
WHERE id = 'f0000000-0000-4000-8000-000000000007';

UPDATE entries SET verification_status = 'verified' WHERE id IN (
  'f0000000-0000-4000-8000-000000000004',  -- 843 diocese reassignment (Treaty of Verdun)
  'f0000000-0000-4000-8000-000000000005',  -- Germanisation of Lower Raetia
  'f0000000-0000-4000-8000-000000000006',  -- Walser settlement
  'f0000000-0000-4000-8000-000000000007',  -- Chur fire 1464
  'f0000000-0000-4000-8000-000000000008',  -- Travers 1527
  'f0000000-0000-4000-8000-000000000009',  -- Bifrun 1552
  'f0000000-0000-4000-8000-00000000000a',  -- Bifrun New Testament 1560
  'f0000000-0000-4000-8000-00000000000b',  -- Campell / Chiampel 1562
  'f0000000-0000-4000-8000-000000000010',  -- Lia Rumantscha 1919
  'f0000000-0000-4000-8000-000000000011'   -- 1938 national language
);

UPDATE entries SET workflow_status = 'published'
WHERE people_id = 'b0000000-0000-4000-8000-000000000001';

-- HLS states that Pro Grigioni Italiano (1918) and Lia Rumantscha (1919)
-- "ebneten den Weg" for the 1938 recognition -- the causal claim is now sourced,
-- so this edge is upgraded from related_to.
UPDATE entry_relationships SET
  relation_type = 'caused',
  note = 'HLS: the founding of Pro Grigioni Italiano (1918) and Lia Rumantscha (1919) "ebneten den Weg" for recognition as the fourth national language in 1938.'
WHERE id = 'aa000000-0000-4000-8000-00000000000e';

UPDATE entry_sources SET
  stance = 'contradicts',
  confidence = 'high',
  note = 'English Wikipedia gives 1465 for the fire. HLS and the City of Chur both give 27 April 1464; 17 Jan 1465 is the adoption of the guild constitution. RESOLVED in favour of 1464.'
WHERE entry_id = 'f0000000-0000-4000-8000-000000000007'
  AND source_id = 'e0000000-0000-4000-8000-000000000008';

INSERT INTO entry_sources (entry_id, source_id, stance, confidence, note) VALUES
  ('f0000000-0000-4000-8000-000000000007', 'e0000000-0000-4000-8000-000000000009', 'supports', 'high',
   'City of Chur: the city burned 27 April 1464; guild constitution adopted 17 Jan 1465.'),
  ('f0000000-0000-4000-8000-000000000006', 'e0000000-0000-4000-8000-000000000008', 'supports', 'medium',
   'HLS: Walser were German-speaking Upper Valais farmers who settled an Alpine region then largely still Romance-speaking.'),
  ('f0000000-0000-4000-8000-00000000000b', 'e0000000-0000-4000-8000-000000000001', 'supports', 'high',
   'HLS: Bifrun and Ulrich Campell created the Romansh written language in 1552 and 1562. NOTE name variants -- HLS uses Ulrich Campell, the Romansh form is Durich Chiampel.'),
  ('f0000000-0000-4000-8000-000000000008', 'e0000000-0000-4000-8000-000000000001', 'supports', 'high',
   'HLS (Travers, Johann 1483-1563): the 700-verse "Chanzun da la guerra dalg Chiaste d''Mues" (1527) is the earliest evidence of Romansh literature. NOTE name variants -- HLS uses Johann Travers, the Romansh form is Gian Travers; title spelling varies by idiom convention.'),
  ('f0000000-0000-4000-8000-00000000000a', 'e0000000-0000-4000-8000-000000000001', 'supports', 'high',
   'HLS (Bifrun, Jachiam 1506-1572): New Testament translation printed 1560 at his own expense; founder of the Romansh literary language.'),
  ('f0000000-0000-4000-8000-000000000010', 'e0000000-0000-4000-8000-000000000001', 'supports', 'high',
   'HLS (Lia Rumantscha): founded 1919 as the umbrella body of all Romansh language and culture associations in Switzerland.'),
  ('f0000000-0000-4000-8000-000000000011', 'e0000000-0000-4000-8000-000000000001', 'supports', 'high',
   'HLS: the 1938 federal referendum on revising articles 107 and 116 of the Federal Constitution made Romansh the fourth national language. The 91.6% figure itself is NOT confirmed by HLS.'),
  ('f0000000-0000-4000-8000-000000000013', 'e0000000-0000-4000-8000-000000000001', 'mentions', 'medium',
   'HLS confirms Romansh counts as an official language only to a limited extent, but does NOT confirm 1996 as the year. Date still rests on web sources only.')
ON CONFLICT DO NOTHING;
