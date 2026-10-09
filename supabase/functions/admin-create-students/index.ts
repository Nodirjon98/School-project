// Creates real, confirmed student accounts on behalf of an admin.
// POST { students: [{ full_name, email, phone?, password?, level?, group_id?, group_name? }] }
// Only callers whose profile has role 'admin' may use it.
import { createClient } from 'npm:@supabase/supabase-js@2';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LEVELS = new Set(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);

/** 8 characters without look-alikes (0/O, 1/l/I), easy to read out to a student. */
const tempPassword = () => {
  const alphabet = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789';
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  return Array.from(bytes, b => alphabet[b % alphabet.length]).join('');
};

interface Input {
  full_name?: string;
  email?: string;
  phone?: string;
  password?: string;
  level?: string;
  group_id?: string;
  group_name?: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const url = Deno.env.get('SUPABASE_URL')!;
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const admin = createClient(url, serviceKey, { auth: { persistSession: false } });

  // Who is calling? The gateway already verified the JWT; we check the role.
  const token = (req.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
  const { data: caller, error: callerErr } = await admin.auth.getUser(token);
  if (callerErr || !caller?.user) return json({ error: 'Unauthorized' }, 401);
  const { data: callerProfile } = await admin.from('profiles').select('role').eq('id', caller.user.id).maybeSingle();
  if (callerProfile?.role !== 'admin') return json({ error: "Faqat admin o'quvchi qo'sha oladi" }, 403);

  let body: { students?: Input[] };
  try {
    body = await req.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }
  const rows = Array.isArray(body.students) ? body.students.slice(0, 100) : [];
  if (rows.length === 0) return json({ error: "O'quvchilar ro'yxati bo'sh" }, 400);

  const results = [];
  for (const row of rows) {
    const full_name = (row.full_name || '').trim();
    const email = (row.email || '').trim().toLowerCase();
    const phone = (row.phone || '').trim();
    const level = (row.level || '').trim().toUpperCase();
    if (!full_name || !EMAIL_RE.test(email)) {
      results.push({ email, full_name, ok: false, error: "Ism yoki email noto'g'ri" });
      continue;
    }
    const given = (row.password || '').trim();
    if (given && given.length < 6) {
      results.push({ email, full_name, ok: false, error: 'Parol kamida 6 belgi' });
      continue;
    }
    const password = given || tempPassword();

    const { data: created, error } = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name, phone },
    });
    if (error || !created?.user) {
      const exists = /already|registered|exists/i.test(error?.message || '');
      results.push({ email, full_name, ok: false, error: exists ? 'Bu email bilan akkount allaqachon bor' : (error?.message || 'Xatolik') });
      continue;
    }

    // The on_auth_user_created trigger made the profile; fill in what the admin gave us.
    const updates: Record<string, unknown> = { full_name, phone: phone || null, onboarding_completed: true, status: 'active' };
    if (LEVELS.has(level)) updates.level = level;
    if (row.group_id) {
      updates.group_id = row.group_id;
      updates.group_name = row.group_name || null;
    }
    const { error: profErr } = await admin.from('profiles').update(updates).eq('id', created.user.id);

    results.push({
      email,
      full_name,
      ok: true,
      // Only echo generated passwords; an admin-chosen one is already known to them.
      temp_password: given ? undefined : password,
      warning: profErr ? `Profil to'liq saqlanmadi: ${profErr.message}` : undefined,
    });
  }

  return json({ results });
});
