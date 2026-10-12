import { supabase, isSupabaseConfigured } from './supabase';
import type { CreateResult } from '../components/admin/AddStudentsDialog';

export interface StudentImport {
  id: string;
  source: string;
  full_name: string;
  email: string;
  phone: string | null;
  level: string | null;
  group_id: string | null;
  group_name: string | null;
  birth_date: string | null;
  payment_type: 'full' | 'custom' | 'free' | null;
  custom_fee: number | null;
  status: 'pending' | 'created' | 'skipped';
  error: string | null;
}

export interface NewStudentRow {
  full_name: string;
  email: string;
  phone?: string;
  password?: string;
  level?: string;
  group_id?: string;
  group_name?: string;
  birth_date?: string;
  payment_type?: string;
  custom_fee?: number | null;
  import_id?: string;
}

/** Admin only (RLS): students staged for import that have no account yet. */
export async function loadPendingImports(): Promise<StudentImport[]> {
  if (!isSupabaseConfigured || !supabase) return [];
  const { data, error } = await supabase
    .from('student_imports')
    .select('id, source, full_name, email, phone, level, group_id, group_name, birth_date, payment_type, custom_fee, status, error')
    .eq('status', 'pending')
    .order('group_name', { ascending: true, nullsFirst: false })
    .order('full_name');
  if (error) return [];
  return data as StudentImport[];
}

export async function skipImport(id: string): Promise<string | null> {
  if (!supabase) return "Bazaga ulanib bo'lmadi";
  const { error } = await supabase.from('student_imports').update({ status: 'skipped' }).eq('id', id);
  return error ? error.message : null;
}

export const importToRow = (i: StudentImport): NewStudentRow => ({
  full_name: i.full_name,
  email: i.email,
  phone: i.phone || undefined,
  level: i.level || undefined,
  group_id: i.group_id || undefined,
  group_name: i.group_name || undefined,
  birth_date: i.birth_date || undefined,
  payment_type: i.payment_type || undefined,
  custom_fee: i.custom_fee,
  import_id: i.id,
});

/** Opens confirmed accounts via the admin-create-students edge function (max 100 per call). */
export async function createStudentAccounts(rows: NewStudentRow[]): Promise<{ results?: CreateResult[]; error?: string }> {
  if (!supabase) return { error: "Bazaga ulanib bo'lmadi" };
  const { data, error } = await supabase.functions.invoke('admin-create-students', { body: { students: rows } });
  if (error) {
    let msg = error.message;
    try { msg = (await (error as { context?: Response }).context?.json())?.error || msg; } catch { /* keep default */ }
    return { error: msg };
  }
  return { results: (data as { results: CreateResult[] }).results };
}
