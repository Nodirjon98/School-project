-- Columns the app's Profile type writes but the table lacked
alter table public.profiles
  add column if not exists age integer,
  add column if not exists goal text,
  add column if not exists level_estimate text,
  add column if not exists schedule_preference text,
  add column if not exists last_active_date text,
  add column if not exists avatar_url text,
  add column if not exists birth_date date,
  add column if not exists status text default 'active',
  add column if not exists payment_type text default 'full',
  add column if not exists custom_fee numeric,
  add column if not exists group_name text,
  add column if not exists payment_status text default 'pending';

create unique index if not exists profiles_email_key on public.profiles (lower(email));

-- Staff check used by policies; security definer avoids RLS recursion on profiles
create or replace function public.is_staff()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.profiles
    where id = (select auth.uid())::text and role in ('admin', 'teacher')
  );
$$;
revoke execute on function public.is_staff() from public, anon;
grant execute on function public.is_staff() to authenticated;

-- Every new auth user gets a student profile. Role is never taken from client metadata.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, email, full_name, phone, role, onboarding_completed)
  values (
    new.id::text,
    lower(new.email),
    coalesce(nullif(trim(new.raw_user_meta_data->>'full_name'), ''), split_part(new.email, '@', 1)),
    nullif(trim(new.raw_user_meta_data->>'phone'), ''),
    'student',
    false
  )
  on conflict (id) do nothing;
  return new;
end;
$$;
revoke execute on function public.handle_new_user() from public, anon, authenticated;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Students may edit their own profile but not account/billing fields
create or replace function public.guard_profile_update()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if (select auth.role()) = 'service_role' or public.is_staff() then
    new.updated_at := now();
    return new;
  end if;
  if new.id is distinct from old.id
     or new.email is distinct from old.email
     or new.role is distinct from old.role
     or new.group_id is distinct from old.group_id
     or new.status is distinct from old.status
     or new.payment_type is distinct from old.payment_type
     or new.custom_fee is distinct from old.custom_fee
     or new.payment_status is distinct from old.payment_status then
    raise exception 'PROFILE_FIELD_LOCKED' using errcode = '42501';
  end if;
  new.updated_at := now();
  return new;
end;
$$;
revoke execute on function public.guard_profile_update() from public, anon, authenticated;

drop trigger if exists guard_profile_update on public.profiles;
create trigger guard_profile_update
  before update on public.profiles
  for each row execute function public.guard_profile_update();

-- RLS: own row, or everything for staff. Inserts only via the auth trigger.
alter table public.profiles enable row level security;

drop policy if exists profiles_select_own_or_staff on public.profiles;
create policy profiles_select_own_or_staff on public.profiles
  for select to authenticated
  using (id = (select auth.uid())::text or (select public.is_staff()));

drop policy if exists profiles_update_own_or_staff on public.profiles;
create policy profiles_update_own_or_staff on public.profiles
  for update to authenticated
  using (id = (select auth.uid())::text or (select public.is_staff()))
  with check (id = (select auth.uid())::text or (select public.is_staff()));

-- Backfill profiles for auth users created before this trigger existed
insert into public.profiles (id, email, full_name, role, onboarding_completed)
select u.id::text, lower(u.email), split_part(u.email, '@', 1), 'student', false
from auth.users u
where u.email is not null
on conflict (id) do nothing;
