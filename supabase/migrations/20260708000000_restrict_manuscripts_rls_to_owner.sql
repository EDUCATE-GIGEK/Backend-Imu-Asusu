-- Replace the current manuscripts policies (which allow any anon/authenticated
-- caller to read every row, and any authenticated caller to update/delete every
-- row) with policies scoped to the manuscript's owner.

drop policy if exists "public_read_manuscripts" on public.manuscripts;
drop policy if exists "auth_insert_manuscripts" on public.manuscripts;
drop policy if exists "auth_update_manuscripts" on public.manuscripts;
drop policy if exists "auth_delete_manuscripts" on public.manuscripts;

create policy "select_own_manuscripts"
on public.manuscripts
for select
to authenticated
using (
  user_id = (select id from public."user" where auth_id = auth.uid())
);

create policy "insert_own_manuscripts"
on public.manuscripts
for insert
to authenticated
with check (
  user_id = (select id from public."user" where auth_id = auth.uid())
);

create policy "update_own_manuscripts"
on public.manuscripts
for update
to authenticated
using (
  user_id = (select id from public."user" where auth_id = auth.uid())
)
with check (
  user_id = (select id from public."user" where auth_id = auth.uid())
);

create policy "delete_own_manuscripts"
on public.manuscripts
for delete
to authenticated
using (
  user_id = (select id from public."user" where auth_id = auth.uid())
);
