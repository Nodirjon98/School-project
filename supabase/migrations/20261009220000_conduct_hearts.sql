-- Conduct "hearts": admins add or remove hearts with a reason; students see
-- their own balance and history. Balance = starting hearts + sum(delta).

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.profiles where id = auth.uid()::text and role = 'admin')
$$;
revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

create table if not exists public.conduct_events (
  id uuid primary key default gen_random_uuid(),
  student_id text not null,
  delta integer not null check (delta between -5 and 5 and delta <> 0),
  reason text not null check (char_length(reason) between 2 and 200),
  created_by uuid not null default auth.uid(),
  created_by_name text,
  created_at timestamptz not null default now()
);
create index if not exists conduct_events_student_idx on public.conduct_events (student_id, created_at desc);
alter table public.conduct_events enable row level security;

create policy conduct_events_select on public.conduct_events for select to authenticated
  using (public.is_staff() or student_id = any (public.my_student_ids()));
create policy conduct_events_insert on public.conduct_events for insert to authenticated
  with check (public.is_admin() and created_by = auth.uid());
create policy conduct_events_delete on public.conduct_events for delete to authenticated
  using (public.is_admin());
