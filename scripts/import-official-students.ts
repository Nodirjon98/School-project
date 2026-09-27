/**
 * One-off import of the official students into Supabase Auth, keeping their
 * existing emails and passwords. Uses the Admin API, so it needs the
 * service_role key — run it locally, never in the browser or in CI.
 *
 *   git show 97f567a:src/data/premierStudentsData.ts > old-students.ts
 *   SUPABASE_URL=https://bgoycufchiblviolockk.supabase.co \
 *   SUPABASE_SERVICE_ROLE_KEY=... \
 *   npx tsx scripts/import-official-students.ts ./old-students.ts
 *   rm old-students.ts
 *
 * Safe to re-run: existing accounts get their password and profile refreshed.
 */
import { createClient } from '@supabase/supabase-js';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

interface OldStudent {
  id: string;
  email: string;
  password?: string;
  full_name: string;
  phone?: string;
  birth_date?: string | null;
  level?: string;
  status?: string;
  payment_type?: string;
  custom_fee?: number | null;
  payment_status?: string;
  xp?: number;
  streak?: number;
}

const url = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const file = process.argv[2];

if (!url || !serviceKey || !file) {
  console.error('Usage: SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npx tsx scripts/import-official-students.ts <old-students.ts>');
  process.exit(1);
}

const admin = createClient(url, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } });

async function existingUsersByEmail(): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  for (let page = 1; ; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw error;
    for (const u of data.users) if (u.email) map.set(u.email.toLowerCase(), u.id);
    if (data.users.length < 1000) return map;
  }
}

async function main() {
  const mod = await import(pathToFileURL(resolve(file)).href);
  const students: OldStudent[] = mod.PREMIER_OFFICIAL_STUDENTS;
  if (!Array.isArray(students)) throw new Error('File does not export PREMIER_OFFICIAL_STUDENTS');

  const existing = await existingUsersByEmail();
  let created = 0, updated = 0, failed = 0;

  for (const s of students) {
    const email = s.email.trim().toLowerCase();
    if (!s.password || s.password.length < 6) {
      console.warn(`skip ${email}: missing or short password`);
      failed++;
      continue;
    }

    let userId = existing.get(email);
    if (userId) {
      const { error } = await admin.auth.admin.updateUserById(userId, { password: s.password, email_confirm: true });
      if (error) { console.error(`update ${email}: ${error.message}`); failed++; continue; }
      updated++;
    } else {
      const { data, error } = await admin.auth.admin.createUser({
        email,
        password: s.password,
        email_confirm: true,
        user_metadata: { full_name: s.full_name, phone: s.phone || null },
      });
      if (error || !data.user) { console.error(`create ${email}: ${error?.message}`); failed++; continue; }
      userId = data.user.id;
      created++;
    }

    // The auth trigger created a bare student profile; fill in the school data.
    const { error: profileError } = await admin.from('profiles').update({
      legacy_id: s.id,
      full_name: s.full_name,
      phone: s.phone || null,
      birth_date: s.birth_date || null,
      level: s.level || 'B1',
      status: s.status || 'active',
      payment_type: s.payment_type || 'full',
      custom_fee: s.custom_fee ?? null,
      payment_status: s.payment_status || 'pending',
      xp: s.xp ?? 100,
      streak: s.streak ?? 1,
      onboarding_completed: true,
    }).eq('id', userId);
    if (profileError) { console.error(`profile ${email}: ${profileError.message}`); failed++; }
  }

  console.log(`Done: ${created} created, ${updated} updated, ${failed} failed (of ${students.length}).`);
  if (failed) process.exitCode = 1;
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
