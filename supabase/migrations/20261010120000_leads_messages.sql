-- Ported from premier-school: trial-lesson applications (leads CRM) and
-- direct messages between students and staff.

-- ── Leads ────────────────────────────────────────────────────────────────
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 2 and 100),
  phone text not null check (phone ~ '^[0-9+()\s-]{7,20}$'),
  level_interest text check (level_interest is null or char_length(level_interest) <= 40),
  message text check (message is null or char_length(message) <= 500),
  status text not null default 'new' check (status in ('new', 'contacted', 'enrolled', 'dropped')),
  note text check (note is null or char_length(note) <= 1000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists leads_created_idx on public.leads (created_at desc);
alter table public.leads enable row level security;

-- Anyone (the public landing page) may submit a new application; only staff read and work them.
create policy leads_insert_public on public.leads for insert to anon, authenticated
  with check (status = 'new' and note is null);
create policy leads_select_staff on public.leads for select to authenticated
  using (public.is_staff());
create policy leads_update_staff on public.leads for update to authenticated
  using (public.is_staff()) with check (public.is_staff());
create policy leads_remove_admin on public.leads for delete to authenticated
  using (public.is_admin());

-- Basic spam guard: at most 3 applications per phone number per hour.
create or replace function public.leads_rate_limit()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if (select count(*) from public.leads
      where regexp_replace(phone, '\D', '', 'g') = regexp_replace(new.phone, '\D', '', 'g')
        and created_at > now() - interval '1 hour') >= 3 then
    raise exception 'Too many applications from this number, try again later';
  end if;
  new.name := btrim(new.name);
  return new;
end;
$$;
create trigger leads_rate_limit before insert on public.leads
  for each row execute function public.leads_rate_limit();

create or replace function public.touch_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin new.updated_at := now(); return new; end;
$$;
create trigger leads_touch before update on public.leads
  for each row execute function public.touch_updated_at();

-- ── Messages ─────────────────────────────────────────────────────────────
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  from_id text not null default (auth.uid())::text,
  to_id text not null,
  body text not null check (char_length(btrim(body)) between 1 and 2000),
  read_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists messages_to_idx on public.messages (to_id, created_at desc);
create index if not exists messages_from_idx on public.messages (from_id, created_at desc);
alter table public.messages enable row level security;

-- Security definer so students (who can't read other profiles) can check a recipient.
create or replace function public.is_staff_id(p_id text)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (select 1 from public.profiles where id = p_id and role in ('admin', 'teacher'))
$$;
revoke all on function public.is_staff_id(text) from public, anon;
grant execute on function public.is_staff_id(text) to authenticated;

create policy messages_select_own on public.messages for select to authenticated
  using (from_id = (select auth.uid())::text or to_id = (select auth.uid())::text);
-- Staff can message anyone; students can message staff only.
create policy messages_insert_own on public.messages for insert to authenticated
  with check (
    from_id = (select auth.uid())::text
    and to_id <> from_id
    and read_at is null
    and (
      public.is_staff()
      or public.is_staff_id(to_id)
    )
  );
-- Recipients may only mark messages as read.
create policy messages_update_recipient on public.messages for update to authenticated
  using (to_id = (select auth.uid())::text) with check (to_id = (select auth.uid())::text);
revoke update on public.messages from anon, authenticated;
grant update (read_at) on public.messages to authenticated;

-- People the caller may talk to: staff see everyone, students see staff.
create or replace function public.message_contacts()
returns table (id text, full_name text, role text, group_name text)
language sql
stable
security definer
set search_path = ''
as $$
  select p.id, coalesce(nullif(p.full_name, ''), p.email), p.role, p.group_name
  from public.profiles p
  where p.id <> (select auth.uid())::text
    and coalesce(p.status, 'active') <> 'left'
    and (public.is_staff() or p.role in ('admin', 'teacher'))
  order by p.role, p.full_name
$$;
revoke all on function public.message_contacts() from public, anon;
grant execute on function public.message_contacts() to authenticated;

-- Live updates for the inbox and the admin leads badge (RLS still applies).
alter publication supabase_realtime add table public.messages, public.leads;
