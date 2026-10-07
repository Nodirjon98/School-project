import { supabase, isSupabaseConfigured } from './supabase';

/**
 * Thin client for the `lms_documents` table: each LMS object (group, lesson,
 * homework, submission, attendance record, daily word, payment plan) is stored
 * as one JSON row keyed by (collection, id). Row-level security decides who
 * may read or write which rows.
 */
export type LmsCollection =
  | 'groups'
  | 'lessons'
  | 'homeworks'
  | 'homework_submissions'
  | 'attendance'
  | 'daily_words'
  | 'payment_plans';

type Doc = { id: string };

// Last JSON we know the server holds, per collection and id. Used to send only
// rows that actually changed and to avoid echoing freshly loaded data back.
const snapshots = new Map<LmsCollection, Map<string, string>>();

const snapshotFor = (collection: LmsCollection) => {
  let snap = snapshots.get(collection);
  if (!snap) {
    snap = new Map();
    snapshots.set(collection, snap);
  }
  return snap;
};

/** Loads a collection. Returns null when Supabase is unavailable or the read fails. */
export async function loadCollection<T extends Doc>(collection: LmsCollection): Promise<T[] | null> {
  if (!isSupabaseConfigured || !supabase) return null;
  const { data, error } = await supabase
    .from('lms_documents')
    .select('id, data')
    .eq('collection', collection);
  if (error) {
    console.warn(`lms_documents load ${collection}:`, error.message);
    return null;
  }
  const snap = snapshotFor(collection);
  const docs = (data || []).map(row => ({ ...(row.data as T), id: row.id as string }));
  docs.forEach(d => snap.set(d.id, JSON.stringify(d)));
  return docs;
}

interface SyncOptions<T> {
  /** Owner student id stored alongside the row so RLS can scope reads. */
  studentIdOf?: (doc: T) => string | undefined | null;
  /** Remove server rows whose ids are no longer in `docs`. Staff only. */
  deleteMissing?: boolean;
  /** Only these docs are written (e.g. a student's own submissions). */
  filter?: (doc: T) => boolean;
}

/**
 * Upserts every doc whose JSON differs from the last known server copy and,
 * optionally, deletes rows that disappeared. Safe to call on every state change.
 */
export async function syncCollection<T extends Doc>(
  collection: LmsCollection,
  docs: T[],
  { studentIdOf, deleteMissing = false, filter }: SyncOptions<T> = {}
): Promise<void> {
  if (!isSupabaseConfigured || !supabase) return;
  const snap = snapshotFor(collection);
  const candidates = filter ? docs.filter(filter) : docs;

  const changed = candidates.filter(d => snap.get(d.id) !== JSON.stringify(d));
  if (changed.length > 0) {
    const rows = changed.map(d => ({
      collection,
      id: d.id,
      student_id: studentIdOf?.(d) ?? null,
      data: d,
      updated_at: new Date().toISOString(),
    }));
    const { error } = await supabase.from('lms_documents').upsert(rows, { onConflict: 'collection,id' });
    if (error) {
      console.warn(`lms_documents save ${collection}:`, error.message);
    } else {
      changed.forEach(d => snap.set(d.id, JSON.stringify(d)));
    }
  }

  if (deleteMissing) {
    const present = new Set(docs.map(d => d.id));
    const removed = Array.from(snap.keys()).filter(id => !present.has(id));
    if (removed.length > 0) {
      const { error } = await supabase
        .from('lms_documents')
        .delete()
        .eq('collection', collection)
        .in('id', removed);
      if (error) {
        console.warn(`lms_documents delete ${collection}:`, error.message);
      } else {
        removed.forEach(id => snap.delete(id));
      }
    }
  }
}
