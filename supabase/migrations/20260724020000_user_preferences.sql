-- Onboarding preferences (saved regions + intent) move from browser-only
-- storage onto the account, so they survive a device change and a shared
-- machine can be logged out without leaking the last person's interests into
-- the next person's session.
--
-- Their own table, not a column on public.user: that table is world-readable
-- (policy `public_read_user` is `using (true)` for anon and authenticated), and
-- a person's regions of interest are nobody else's business. Nothing ever needs
-- to read another user's preferences — Collaborate ranks against the reader's
-- own regions — so owner-only RLS costs nothing.
--
-- One jsonb blob rather than a user_regions join table: preferences are always
-- read whole, and this matches manuscripts.contexts, which already stores id
-- arrays the same way. Normalize if we ever query across users by region.

create table if not exists public.user_preferences (
  user_id     bigint primary key references public.user(id) on delete cascade,
  preferences jsonb not null,
  updated_at  timestamptz not null default now()
);

alter table public.user_preferences enable row level security;

drop policy if exists own_preferences on public.user_preferences;
create policy own_preferences on public.user_preferences
  for all to authenticated
  using (user_id = (select id from public.user where auth_id = auth.uid()))
  with check (user_id = (select id from public.user where auth_id = auth.uid()));
