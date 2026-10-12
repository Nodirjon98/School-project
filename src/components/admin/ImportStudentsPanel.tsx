import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowRightLeft, Loader2, X } from 'lucide-react';
import { CreateResult, CreatedAccountsList } from './AddStudentsDialog';
import { StudentImport, createStudentAccounts, importToRow, loadPendingImports, skipImport } from '../../lib/studentImports';

const SOURCE_LABEL: Record<string, string> = { 'premier-school': 'Premier School (eski tizim)' };

/**
 * Banner + dialog for students staged in `student_imports` (e.g. moved over
 * from premier-school). The admin reviews the list and opens all accounts in
 * one go; the edge function generates the passwords and shows them once.
 */
export const ImportStudentsPanel: React.FC<{ onImported: () => void }> = ({ onImported }) => {
  const [pending, setPending] = useState<StudentImport[]>([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<CreateResult[] | null>(null);

  const reload = useCallback(async () => {
    const rows = await loadPendingImports();
    setPending(rows);
    setSelected(new Set(rows.map(r => r.id)));
  }, []);

  useEffect(() => { reload(); }, [reload]);

  const byGroup = useMemo(() => {
    const map = new Map<string, StudentImport[]>();
    pending.forEach(p => {
      const key = p.group_name || 'Guruhsiz';
      map.set(key, [...(map.get(key) || []), p]);
    });
    return Array.from(map.entries());
  }, [pending]);

  if (pending.length === 0 && !results) return null;

  const source = SOURCE_LABEL[pending[0]?.source] || pending[0]?.source || '';

  const toggle = (id: string) => setSelected(s => {
    const n = new Set(s);
    if (n.has(id)) n.delete(id); else n.add(id);
    return n;
  });

  const run = async () => {
    const rows = pending.filter(p => selected.has(p.id)).map(importToRow);
    if (!rows.length) return;
    setSaving(true);
    setError(null);
    const all: CreateResult[] = [];
    for (let i = 0; i < rows.length; i += 100) {
      const { results: res, error: err } = await createStudentAccounts(rows.slice(i, i + 100));
      if (err) { setError(err); break; }
      all.push(...(res || []));
    }
    setSaving(false);
    if (all.length) {
      setResults(all);
      onImported();
      reload();
    }
  };

  const skip = async (id: string) => {
    const err = await skipImport(id);
    if (err) setError(err);
    else reload();
  };

  return (
    <>
      {pending.length > 0 && (
        <div className="flex flex-col gap-3 rounded-3xl border border-indigo-200 bg-indigo-50/70 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white"><ArrowRightLeft className="h-5 w-5" /></div>
            <div>
              <p className="text-sm font-bold text-slate-900">{pending.length} ta o'quvchi ko'chirishga tayyor</p>
              <p className="text-xs text-slate-600">{source} — ism, telefon, guruh va to'lov turi bilan. Hisob ochilgach har biriga parol beriladi.</p>
            </div>
          </div>
          <button type="button" onClick={() => { setOpen(true); setResults(null); }}
            className="rounded-full bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-700 cursor-pointer whitespace-nowrap">
            Ko'rib chiqish
          </button>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/50 p-4 sm:items-center" onClick={() => !saving && setOpen(false)}>
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-xl" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">O'quvchilarni ko'chirish</h3>
                <p className="text-sm text-slate-500">{source}. Login sifatida eski tizimdagi loginlar ishlatiladi.</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} disabled={saving} className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100" aria-label="Yopish"><X className="h-4 w-4" /></button>
            </div>

            {results ? (
              <div className="mt-5">
                <CreatedAccountsList results={results} />
                <button type="button" onClick={() => setOpen(false)} className="mt-5 w-full rounded-full border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer">Yopish</button>
              </div>
            ) : (
              <>
                <div className="mt-4 space-y-4">
                  {byGroup.map(([group, rows]) => (
                    <div key={group}>
                      <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">{group} · {rows.length}</p>
                      <ul className="divide-y divide-slate-100 rounded-2xl border border-slate-200">
                        {rows.map(r => (
                          <li key={r.id} className="flex items-center gap-3 px-3 py-2 text-sm">
                            <input type="checkbox" checked={selected.has(r.id)} onChange={() => toggle(r.id)} className="h-4 w-4 accent-indigo-600" aria-label={r.full_name} />
                            <span className="min-w-0 flex-1">
                              <span className="block truncate font-semibold text-slate-900">{r.full_name}</span>
                              <span className="block truncate text-xs text-slate-500">
                                {r.email}{r.phone ? ` · ${r.phone}` : ''}{r.payment_type === 'free' ? ' · bepul' : r.payment_type === 'custom' ? ` · kelishilgan${r.custom_fee ? ` ${Number(r.custom_fee).toLocaleString('ru-RU')} so'm` : ''}` : ''}
                              </span>
                              {r.error && <span className="block text-xs text-rose-600">{r.error}</span>}
                            </span>
                            <button type="button" onClick={() => skip(r.id)} className="text-xs font-semibold text-slate-400 hover:text-slate-700 cursor-pointer">O'tkazib yuborish</button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {error && <p className="mt-3 text-sm font-medium text-rose-600">{error}</p>}
                <button type="button" disabled={saving || selected.size === 0} onClick={run}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 py-2.5 text-sm font-bold text-white hover:bg-indigo-700 disabled:opacity-60 cursor-pointer">
                  {saving && <Loader2 className="h-4 w-4 animate-spin" />}
                  {saving ? 'Hisoblar ochilmoqda…' : `${selected.size} ta o'quvchiga hisob ochish`}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
