-- Floating, AI-assisted user notes scoped to a surface (timeline group or
-- learning module). One note type only; AI is in-note assist, not a second row.
-- The per-context cap is enforced client-side (config constant), NOT here, so
-- it can grow later without a migration.
create table public.notes (
  id           bigint generated always as identity primary key,
  user_id      bigint not null references public.user(id) on delete cascade,
  -- Where the note was taken. context_id is text because a timeline context is a
  -- peoples.id (uuid) while learning modules don't exist yet and may key differently.
  context_type text not null check (context_type in ('timeline', 'learning_module')),
  context_id   text not null,
  body         text,
  -- Screen-anchored position of the floating card, saved so it stays put.
  pos_x        double precision not null default 24,
  pos_y        double precision not null default 24,
  z_index      integer not null default 1,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index notes_user_context_idx on public.notes (user_id, context_type, context_id);

alter table public.notes enable row level security;

-- Owner-only, mirroring how the app ties auth.uid() to a public.user row.
create policy notes_owner_all on public.notes
  for all
  using (user_id in (select id from public.user where auth_id = auth.uid()))
  with check (user_id in (select id from public.user where auth_id = auth.uid()));
