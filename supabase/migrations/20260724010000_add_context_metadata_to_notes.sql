-- Context metadata for the notes library page: where a saved note came from, so
-- the page can describe it without extra joins. context_label is the group name;
-- source_entry_* is the entry the note was created from (nullable — a note may be
-- created on the timeline without opening a specific entry).
alter table public.notes
  add column context_label     text,
  add column source_entry_id   text,
  add column source_entry_title text;
