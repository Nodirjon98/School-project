import { supabase, isSupabaseConfigured } from './supabase';

/** Every student starts the term with this many hearts. */
export const HEARTS_START = 10;
/** Upper bound shown in the UI so a full row of hearts stays readable. */
export const HEARTS_MAX = 15;

export interface ConductEvent {
  id: string;
  student_id: string;
  delta: number;
  reason: string;
  created_by_name: string | null;
  created_at: string;
}

export const CONDUCT_PRESETS: { delta: number; reason: string }[] = [
  { delta: 1, reason: 'Darsda faol qatnashdi' },
  { delta: 1, reason: "Uy vazifasini a'lo bajardi" },
  { delta: 1, reason: "Boshqalarga yordam berdi" },
  { delta: 2, reason: "Namunali xulq-atvor" },
  { delta: -1, reason: 'Darsga kech qoldi' },
  { delta: -1, reason: 'Uy vazifasini bajarmadi' },
  { delta: -1, reason: 'Darsda tartibni buzdi' },
  { delta: -2, reason: 'Hurmatsizlik qildi' },
];

/** Current hearts for a student given their events (never below 0). */
export const heartsFor = (events: ConductEvent[], studentId: string): number =>
  events
    .filter(e => e.student_id === studentId)
    .sort((a, b) => a.created_at.localeCompare(b.created_at))
    // Clamp as we go, so a reward after hitting 0 always shows up.
    .reduce((hearts, e) => Math.max(0, hearts + e.delta), HEARTS_START);

/** Staff get every event, students only their own (RLS). */
export async function loadConductEvents(): Promise<ConductEvent[]> {
  if (!isSupabaseConfigured || !supabase) return [];
  // Page through everything; balances need the full history.
  const all: ConductEvent[] = [];
  const PAGE = 1000;
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await supabase
      .from('conduct_events')
      .select('id, student_id, delta, reason, created_by_name, created_at')
      .order('created_at', { ascending: false })
      .order('id', { ascending: true })
      .range(from, from + PAGE - 1);
    if (error) {
      console.warn('conduct_events load:', error.message);
      break;
    }
    all.push(...(data as ConductEvent[]));
    if (!data || data.length < PAGE) break;
  }
  return all;
}

/** Admin only (RLS). Returns the saved event or an Uzbek error message. */
export async function addConductEvent(
  studentId: string,
  delta: number,
  reason: string,
  byName: string
): Promise<{ event?: ConductEvent; error?: string }> {
  if (!supabase) return { error: "Bazaga ulanib bo'lmadi" };
  const { data, error } = await supabase
    .from('conduct_events')
    .insert({ student_id: studentId, delta, reason: reason.trim(), created_by_name: byName })
    .select('id, student_id, delta, reason, created_by_name, created_at')
    .single();
  if (error) return { error: /row-level security/i.test(error.message) ? "Faqat admin yurakcha o'zgartira oladi" : error.message };
  return { event: data as ConductEvent };
}

export async function deleteConductEvent(id: string): Promise<string | null> {
  if (!supabase) return "Bazaga ulanib bo'lmadi";
  const { error } = await supabase.from('conduct_events').delete().eq('id', id);
  return error ? error.message : null;
}
