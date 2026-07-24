-- Collaborate: manuscripts an author chooses to share, plus the community
-- signals the page ranks them by (upvotes, forks, views).
--
-- Writes that touch a row the caller does not own — the upvote count, the view
-- count, and the source's fork count — go through SECURITY DEFINER functions,
-- because owner-only RLS on `manuscripts` is what keeps everything else safe.

alter table public.manuscripts
  add column if not exists is_public     boolean not null default false,
  add column if not exists fork_count    integer not null default 0,
  add column if not exists upvote_count  integer not null default 0,
  add column if not exists view_count    integer not null default 0,
  add column if not exists forked_from   bigint references public.manuscripts(id) on delete set null;

-- Partial: the browse query only ever asks for is_public = true.
create index if not exists manuscripts_is_public_idx on public.manuscripts (is_public) where is_public;
create index if not exists manuscripts_forked_from_idx on public.manuscripts (forked_from);

-- Permissive, so it ORs with select_own_manuscripts: authors keep seeing their
-- private work, everyone additionally sees what has been shared.
drop policy if exists select_public_manuscripts on public.manuscripts;
create policy select_public_manuscripts on public.manuscripts
  for select to authenticated
  using (is_public);

-- One upvote per user per manuscript, enforced by the primary key rather than
-- by the UI.
create table if not exists public.manuscript_upvotes (
  manuscript_id bigint not null references public.manuscripts(id) on delete cascade,
  user_id       bigint not null references public.user(id) on delete cascade,
  created_at    timestamptz not null default now(),
  primary key (manuscript_id, user_id)
);

create index if not exists manuscript_upvotes_user_idx on public.manuscript_upvotes (user_id);

alter table public.manuscript_upvotes enable row level security;

drop policy if exists select_upvotes on public.manuscript_upvotes;
create policy select_upvotes on public.manuscript_upvotes
  for select to authenticated
  using (
    user_id = (select id from public.user where auth_id = auth.uid())
    or exists (select 1 from public.manuscripts m where m.id = manuscript_id and m.is_public)
  );

drop policy if exists insert_own_upvotes on public.manuscript_upvotes;
create policy insert_own_upvotes on public.manuscript_upvotes
  for insert to authenticated
  with check (
    user_id = (select id from public.user where auth_id = auth.uid())
    and exists (select 1 from public.manuscripts m where m.id = manuscript_id and m.is_public)
  );

drop policy if exists delete_own_upvotes on public.manuscript_upvotes;
create policy delete_own_upvotes on public.manuscript_upvotes
  for delete to authenticated
  using (user_id = (select id from public.user where auth_id = auth.uid()));

-- manuscripts.upvote_count is denormalized because Collaborate sorts and ranks
-- on it for every card on the page; this trigger is what keeps that honest.
create or replace function public.sync_manuscript_upvote_count()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if tg_op = 'INSERT' then
    update public.manuscripts
       set upvote_count = upvote_count + 1
     where id = new.manuscript_id;
    return new;
  else
    update public.manuscripts
       set upvote_count = greatest(upvote_count - 1, 0)
     where id = old.manuscript_id;
    return old;
  end if;
end;
$$;

drop trigger if exists manuscript_upvotes_sync on public.manuscript_upvotes;
create trigger manuscript_upvotes_sync
  after insert or delete on public.manuscript_upvotes
  for each row execute function public.sync_manuscript_upvote_count();

-- Total opens, not unique readers.
create or replace function public.increment_manuscript_view(p_manuscript_id bigint)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.manuscripts
     set view_count = view_count + 1
   where id = p_manuscript_id
     and is_public;
end;
$$;

-- A fork is a private copy the forker owns; the original is never mutated
-- except for its fork_count. Attached files are deliberately not copied.
create or replace function public.fork_manuscript(p_manuscript_id bigint)
returns public.manuscripts
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id bigint;
  v_source  public.manuscripts;
  v_fork    public.manuscripts;
begin
  select id into v_user_id from public.user where auth_id = auth.uid();
  if v_user_id is null then
    raise exception 'not authenticated';
  end if;

  select * into v_source from public.manuscripts where id = p_manuscript_id and is_public;
  if v_source.id is null then
    raise exception 'manuscript not found or not public';
  end if;

  insert into public.manuscripts
    (user_id, title, manuscript_description, summary, contexts, education_level,
     cultural_history_id, is_public, forked_from)
  values
    (v_user_id, v_source.title, v_source.manuscript_description, v_source.summary,
     v_source.contexts, v_source.education_level, v_source.cultural_history_id,
     false, v_source.id)
  returning * into v_fork;

  update public.manuscripts
     set fork_count = fork_count + 1
   where id = v_source.id;

  return v_fork;
end;
$$;

-- The trigger function is trigger-only; nothing should reach it over the API.
revoke all on function public.sync_manuscript_upvote_count() from public, anon, authenticated;

revoke all on function public.increment_manuscript_view(bigint) from public, anon;
revoke all on function public.fork_manuscript(bigint) from public, anon;
grant execute on function public.increment_manuscript_view(bigint) to authenticated;
grant execute on function public.fork_manuscript(bigint) to authenticated;
