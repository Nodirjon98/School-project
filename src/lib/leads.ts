import { supabase, isSupabaseConfigured } from './supabase';

export type LeadStatus = 'new' | 'contacted' | 'enrolled' | 'dropped';

export interface Lead {
  id: string;
  name: string;
  phone: string;
  level_interest: string | null;
  message: string | null;
  status: LeadStatus;
  note: string | null;
  created_at: string;
  updated_at: string;
}

export const LEAD_FLOW: LeadStatus[] = ['new', 'contacted', 'enrolled', 'dropped'];

export const LEAD_STATUS: Record<LeadStatus, { label: string; tone: string }> = {
  new: { label: 'Yangi', tone: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  contacted: { label: "Bog'lanildi", tone: 'bg-amber-50 text-amber-800 border-amber-200' },
  enrolled: { label: 'Yozildi', tone: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  dropped: { label: 'Rad etildi', tone: 'bg-slate-100 text-slate-600 border-slate-200' },
};

/** Normalises and validates a phone number; returns null when it can't be one. */
export function normalizePhone(raw: string): string | null {
  const trimmed = raw.trim().replace(/\s+/g, ' ');
  const digits = trimmed.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) return null;
  if (!/^[0-9+()\s-]+$/.test(trimmed)) return null;
  return trimmed;
}

/** Public: submit a trial-lesson application from the landing page. */
export async function submitLead(input: { name: string; phone: string; level_interest?: string; message?: string }): Promise<string | null> {
  if (!isSupabaseConfigured || !supabase) return "Hozir ariza yuborib bo'lmadi. Iltimos, qo'ng'iroq qiling.";
  const name = input.name.trim();
  if (name.length < 2) return 'Ismingizni yozing';
  const phone = normalizePhone(input.phone);
  if (!phone) return "Telefon raqamini to'g'ri yozing";
  const { error } = await supabase.from('leads').insert({
    name: name.slice(0, 100),
    phone,
    level_interest: input.level_interest?.trim().slice(0, 40) || null,
    message: input.message?.trim().slice(0, 500) || null,
  });
  if (!error) return null;
  if (/too many/i.test(error.message)) return "Bu raqamdan ariza allaqachon yuborilgan. Tez orada bog'lanamiz.";
  return "Ariza yuborilmadi. Iltimos, qayta urinib ko'ring yoki qo'ng'iroq qiling.";
}

export async function loadLeads(): Promise<Lead[]> {
  if (!isSupabaseConfigured || !supabase) return [];
  const { data, error } = await supabase.from('leads').select('*').order('created_at', { ascending: false }).limit(1000);
  if (error) {
    console.warn('leads load:', error.message);
    return [];
  }
  return data as Lead[];
}

export async function countNewLeads(): Promise<number> {
  if (!isSupabaseConfigured || !supabase) return 0;
  const { count } = await supabase.from('leads').select('id', { count: 'exact', head: true }).eq('status', 'new');
  return count ?? 0;
}

export async function updateLead(id: string, updates: Partial<Pick<Lead, 'status' | 'note'>>): Promise<string | null> {
  if (!supabase) return "Bazaga ulanib bo'lmadi";
  const { error } = await supabase.from('leads').update(updates).eq('id', id);
  return error ? error.message : null;
}
