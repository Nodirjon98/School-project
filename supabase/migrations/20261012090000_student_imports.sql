-- Staging area for students moved in from another system (premier-school).
-- Rows are created by a one-off import; an admin then opens real accounts
-- for them from the Sign-ups page (admin-create-students edge function),
-- which generates the passwords. No credentials are stored here.
create table if not exists public.student_imports (
  id text primary key,
  source text not null default 'premier-school',
  full_name text not null,
  email text not null unique,
  phone text,
  level text,
  group_id text,
  group_name text,
  birth_date date,
  payment_type text check (payment_type is null or payment_type in ('full', 'custom', 'free')),
  custom_fee numeric,
  status text not null default 'pending' check (status in ('pending', 'created', 'skipped')),
  profile_id text,
  error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.student_imports enable row level security;

create policy student_imports_admin_select on public.student_imports for select to authenticated
  using (public.is_admin());
create policy student_imports_admin_update on public.student_imports for update to authenticated
  using (public.is_admin()) with check (public.is_admin());

create trigger student_imports_touch before update on public.student_imports
  for each row execute function public.touch_updated_at();
