-- Per-student data that used to live only in the browser or in an ephemeral
-- serverless file: word progress, badges, placement history, study-time
-- telemetry and activity events. Plus a read-only leaderboard.

-- Per-student documents (one JSON row per object), owner-writable.
create table if not exists public.student_documents (
  collection text not null,
  id text not null,
  student_id text not null,
  data jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (collection, id),
  constraint student_documents_collection_check
    check (collection in ('word_progress', 'badges', 'placement_results'))
);
create index if not exists student_documents_owner_idx on public.student_documents (student_id, collection);
alter table public.student_documents enable row level security;

create policy student_documents_select on public.student_documents for select to authenticated
  using (public.is_staff() or student_id = any (public.my_student_ids()));
create policy student_documents_insert on public.student_documents for insert to authenticated
  with check (public.is_staff() or student_id = any (public.my_student_ids()));
create policy student_documents_update on public.student_documents for update to authenticated
  using (public.is_staff() or student_id = any (public.my_student_ids()))
  with check (public.is_staff() or student_id = any (public.my_student_ids()));
create policy student_documents_delete on public.student_documents for delete to authenticated
  using (public.is_staff());

-- Study-time telemetry: one row per student, written by that student.
create table if not exists public.student_telemetry (
  student_id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.student_telemetry enable row level security;

create policy student_telemetry_select on public.student_telemetry for select to authenticated
  using (public.is_staff() or student_id = any (public.my_student_ids()));
create policy student_telemetry_insert on public.student_telemetry for insert to authenticated
  with check (student_id = any (public.my_student_ids()));
create policy student_telemetry_update on public.student_telemetry for update to authenticated
  using (student_id = any (public.my_student_ids()))
  with check (student_id = any (public.my_student_ids()));

-- Activity events (login, page view, idle pause …); append-only for students.
create table if not exists public.student_events (
  id text primary key,
  student_id text not null,
  data jsonb not null,
  created_at timestamptz not null default now()
);
create index if not exists student_events_created_idx on public.student_events (created_at desc);
alter table public.student_events enable row level security;

create policy student_events_select on public.student_events for select to authenticated
  using (public.is_staff() or student_id = any (public.my_student_ids()));
create policy student_events_insert on public.student_events for insert to authenticated
  with check (public.is_staff() or student_id = any (public.my_student_ids()));

-- Leaderboard: students can't read other profiles, so expose only the
-- fields a ranking needs through a security-definer function.
create or replace function public.leaderboard(p_limit integer default 50)
returns table (student_id text, full_name text, xp integer, group_name text, avatar_url text, rank bigint)
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(p.legacy_id, p.id), p.full_name, coalesce(p.xp, 0), p.group_name, p.avatar_url,
         rank() over (order by coalesce(p.xp, 0) desc)
  from public.profiles p
  where p.role = 'student' and coalesce(p.status, 'active') <> 'left'
  order by coalesce(p.xp, 0) desc
  limit least(greatest(p_limit, 1), 200)
$$;
revoke all on function public.leaderboard(integer) from public;
grant execute on function public.leaderboard(integer) to authenticated;
