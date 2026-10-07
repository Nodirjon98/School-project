-- Shared store for LMS records (groups, lessons, homework, submissions,
-- attendance, daily words, payment plans). Each row is one app object kept
-- as JSON, so the client types can evolve without schema churn.

create table if not exists public.lms_documents (
  collection text not null,
  id text not null,
  student_id text,
  data jsonb not null,
  updated_at timestamptz not null default now(),
  updated_by uuid default auth.uid(),
  primary key (collection, id),
  constraint lms_documents_collection_check check (collection in (
    'groups', 'lessons', 'homeworks', 'homework_submissions',
    'attendance', 'daily_words', 'payment_plans'
  ))
);

create index if not exists lms_documents_student_idx
  on public.lms_documents (collection, student_id);

alter table public.lms_documents enable row level security;

-- Every app id a signed-in user may act as: their profile id and, for
-- imported students, the legacy id the local data was keyed by.
create or replace function public.my_student_ids()
returns text[]
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(array_remove(array[p.id, p.legacy_id], null), array[]::text[])
  from public.profiles p
  where p.id = auth.uid()::text
$$;

revoke all on function public.my_student_ids() from public;
grant execute on function public.my_student_ids() to authenticated;

drop policy if exists lms_documents_select on public.lms_documents;
create policy lms_documents_select on public.lms_documents
  for select to authenticated
  using (
    public.is_staff()
    or collection in ('groups', 'lessons', 'homeworks', 'daily_words')
    or student_id = any (public.my_student_ids())
  );

drop policy if exists lms_documents_staff_write on public.lms_documents;
create policy lms_documents_staff_write on public.lms_documents
  for all to authenticated
  using (public.is_staff())
  with check (public.is_staff());

-- Students may hand in (and re-submit) their own homework, but not grade it.
drop policy if exists lms_documents_student_submit on public.lms_documents;
create policy lms_documents_student_submit on public.lms_documents
  for insert to authenticated
  with check (
    collection = 'homework_submissions'
    and student_id = any (public.my_student_ids())
    and coalesce(data->>'status', 'submitted') in ('draft', 'submitted')
  );

drop policy if exists lms_documents_student_resubmit on public.lms_documents;
create policy lms_documents_student_resubmit on public.lms_documents
  for update to authenticated
  using (
    collection = 'homework_submissions'
    and student_id = any (public.my_student_ids())
    and coalesce(data->>'status', 'submitted') in ('draft', 'submitted')
  )
  with check (
    collection = 'homework_submissions'
    and student_id = any (public.my_student_ids())
    and coalesce(data->>'status', 'submitted') in ('draft', 'submitted')
  );
