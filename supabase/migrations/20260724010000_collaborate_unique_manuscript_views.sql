-- Views become "how many educators read this" rather than "how many times it
-- was opened". Two rules, both enforced server-side because view_count is not
-- writable by the reader:
--   1. One view per reader, however often they re-open it.
--   2. An author reading their own manuscript is not a reader — otherwise
--      anyone could inflate their own standing just by opening their work.

create table if not exists public.manuscript_views (
  manuscript_id bigint not null references public.manuscripts(id) on delete cascade,
  user_id       bigint not null references public.user(id) on delete cascade,
  created_at    timestamptz not null default now(),
  primary key (manuscript_id, user_id)
);

create index if not exists manuscript_views_user_idx on public.manuscript_views (user_id);

alter table public.manuscript_views enable row level security;

-- Readers may see that they have viewed something. There is deliberately no
-- insert/update/delete policy: the only way in is the definer function below.
drop policy if exists select_own_views on public.manuscript_views;
create policy select_own_views on public.manuscript_views
  for select to authenticated
  using (user_id = (select id from public.user where auth_id = auth.uid()));

create or replace function public.increment_manuscript_view(p_manuscript_id bigint)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id bigint;
begin
  select id into v_user_id from public.user where auth_id = auth.uid();
  if v_user_id is null then
    return;
  end if;

  insert into public.manuscript_views (manuscript_id, user_id)
  select p_manuscript_id, v_user_id
   where exists (
     select 1
       from public.manuscripts m
      where m.id = p_manuscript_id
        and m.is_public
        and m.user_id is distinct from v_user_id
   )
  on conflict do nothing;

  -- FOUND is false when the reader is the author, or when ON CONFLICT swallowed
  -- the row because they have read it before.
  if found then
    update public.manuscripts
       set view_count = view_count + 1
     where id = p_manuscript_id;
  end if;
end;
$$;

revoke all on function public.increment_manuscript_view(bigint) from public, anon;
grant execute on function public.increment_manuscript_view(bigint) to authenticated;

-- Counts recorded under the old "total opens" rule have no record of who did
-- the opening, so distinct readers cannot be derived from them. Drop any
-- self-view and re-derive every counter from the table, rather than leave a
-- number that means neither thing.
delete from public.manuscript_views v
 using public.manuscripts m
 where m.id = v.manuscript_id
   and m.user_id = v.user_id;

update public.manuscripts m
   set view_count = coalesce((
     select count(*) from public.manuscript_views v where v.manuscript_id = m.id
   ), 0);
