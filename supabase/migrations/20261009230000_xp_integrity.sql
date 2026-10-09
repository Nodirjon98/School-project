-- Keep security-definer helpers away from anonymous callers, and make XP
-- changes go through one atomic, bounded RPC instead of client-side writes.

revoke execute on function public.leaderboard(integer) from anon;
revoke execute on function public.is_admin() from anon;
revoke execute on function public.my_student_ids() from anon;

-- add_xp: atomic increment. Students may add 1..200 to themselves per call;
-- staff may adjust any student by -1000..1000.
create or replace function public.add_xp(p_student_id text, p_amount integer)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  target_id text;
  new_xp integer;
begin
  select id into target_id from public.profiles
  where id = p_student_id or legacy_id = p_student_id
  limit 1;
  if target_id is null then
    raise exception 'STUDENT_NOT_FOUND' using errcode = 'P0002';
  end if;

  if public.is_staff() then
    if p_amount < -1000 or p_amount > 1000 then
      raise exception 'XP_AMOUNT_OUT_OF_RANGE' using errcode = '22003';
    end if;
  else
    if target_id <> auth.uid()::text then
      raise exception 'XP_NOT_ALLOWED' using errcode = '42501';
    end if;
    if p_amount < 1 or p_amount > 200 then
      raise exception 'XP_AMOUNT_OUT_OF_RANGE' using errcode = '22003';
    end if;
  end if;

  perform set_config('app.xp_via_rpc', 'on', true);
  update public.profiles
     set xp = greatest(0, coalesce(xp, 0) + p_amount)
   where id = target_id
  returning xp into new_xp;
  return new_xp;
end;
$$;
revoke all on function public.add_xp(text, integer) from public, anon;
grant execute on function public.add_xp(text, integer) to authenticated;

-- Students can no longer write xp (or group_name) directly.
create or replace function public.guard_profile_update()
returns trigger
language plpgsql
security definer
set search_path to ''
as $function$
begin
  if (select auth.role()) = 'service_role' or public.is_staff() then
    new.updated_at := now();
    return new;
  end if;
  if new.xp is distinct from old.xp and coalesce(current_setting('app.xp_via_rpc', true), '') <> 'on' then
    raise exception 'PROFILE_FIELD_LOCKED' using errcode = '42501';
  end if;
  if new.id is distinct from old.id
     or new.email is distinct from old.email
     or new.role is distinct from old.role
     or new.legacy_id is distinct from old.legacy_id
     or new.group_id is distinct from old.group_id
     or new.group_name is distinct from old.group_name
     or new.status is distinct from old.status
     or new.payment_type is distinct from old.payment_type
     or new.custom_fee is distinct from old.custom_fee
     or new.payment_status is distinct from old.payment_status then
    raise exception 'PROFILE_FIELD_LOCKED' using errcode = '42501';
  end if;
  new.updated_at := now();
  return new;
end;
$function$;
