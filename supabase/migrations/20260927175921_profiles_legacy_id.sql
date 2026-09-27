-- Pre-Auth student IDs (e.g. student-official-1); the app's local data is still keyed by them
alter table public.profiles add column if not exists legacy_id text;
create unique index if not exists profiles_legacy_id_key on public.profiles (legacy_id) where legacy_id is not null;

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
     or new.legacy_id is distinct from old.legacy_id
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
