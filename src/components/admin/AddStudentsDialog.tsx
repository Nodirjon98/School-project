import React, { useState } from 'react';
import { X, Loader2, Copy, CheckCircle2, AlertTriangle, UserPlus, Users } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { Group } from '../../types';

interface Result {
  email: string;
  full_name: string;
  ok: boolean;
  temp_password?: string;
  error?: string;
  warning?: string;
}

interface Row {
  full_name: string;
  email: string;
  phone?: string;
  password?: string;
}

/** One student per line: "Ism Familiya, email, telefon, parol" (comma, semicolon or tab). */
export const parseStudentLines = (text: string): { rows: Row[]; bad: string[] } => {
  const rows: Row[] = [];
  const bad: string[] = [];
  text.split(/\r?\n/).map(l => l.trim()).filter(Boolean).forEach(line => {
    const parts = line.split(/\t|;|,/).map(p => p.trim()).filter(Boolean);
    const emailIdx = parts.findIndex(p => /@/.test(p));
    if (emailIdx < 0) { bad.push(line); return; }
    const email = parts[emailIdx];
    const rest = parts.filter((_, i) => i !== emailIdx);
    const full_name = rest.find(p => /[A-Za-zА-Яа-яЎўҚқҒғҲҳ']/.test(p) && !/^\+?\d[\d\s-]{6,}$/.test(p)) || '';
    const phone = rest.find(p => /^\+?\d[\d\s()-]{6,}$/.test(p));
    const password = rest.filter(p => p !== full_name && p !== phone)[0];
    if (!full_name) { bad.push(line); return; }
    rows.push({ full_name, email, phone, password });
  });
  return { rows, bad };
};

export const AddStudentsDialog: React.FC<{ groups: Group[]; onClose: () => void; onDone: () => void }> = ({ groups, onClose, onDone }) => {
  const [mode, setMode] = useState<'one' | 'many'>('one');
  const [one, setOne] = useState<Row>({ full_name: '', email: '', phone: '', password: '' });
  const [bulk, setBulk] = useState('');
  const [groupId, setGroupId] = useState('');
  const [level, setLevel] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<Result[] | null>(null);
  const [copied, setCopied] = useState(false);

  const parsed = mode === 'many' ? parseStudentLines(bulk) : null;

  const submit = async () => {
    setError(null);
    const rows = mode === 'one' ? [one] : parsed!.rows;
    if (rows.length === 0 || rows.some(r => !r.full_name.trim() || !r.email.trim())) {
      return setError("Ism va email majburiy");
    }
    if (rows.length > 100) return setError("Bir martada ko'pi bilan 100 ta o'quvchi");
    if (!supabase) return setError("Bazaga ulanib bo'lmadi");
    const group = groups.find(g => g.id === groupId);
    setSaving(true);
    const { data, error: err } = await supabase.functions.invoke('admin-create-students', {
      body: {
        students: rows.map(r => ({
          ...r,
          level: level || undefined,
          group_id: group?.id,
          group_name: group?.name,
        })),
      },
    });
    setSaving(false);
    if (err) {
      let msg = err.message;
      try { msg = (await (err as { context?: Response }).context?.json())?.error || msg; } catch { /* keep default */ }
      return setError(msg);
    }
    setResults((data as { results: Result[] }).results);
    onDone();
  };

  const copyAll = async () => {
    const text = (results || [])
      .filter(r => r.ok)
      .map(r => `${r.full_name} — login: ${r.email}${r.temp_password ? `, parol: ${r.temp_password}` : ''}`)
      .join('\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard blocked */ }
  };

  const input = 'w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200';

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/50 p-4" onClick={onClose}>
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-xl" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">O'quvchi qo'shish</h3>
            <p className="text-sm text-slate-500">Har biriga tasdiqlangan login ochiladi va u darhol kira oladi.</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100" aria-label="Yopish"><X className="w-4 h-4" /></button>
        </div>

        {results ? (
          <div className="mt-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-800">
                {results.filter(r => r.ok).length} ta qo'shildi{results.some(r => !r.ok) ? `, ${results.filter(r => !r.ok).length} ta xato` : ''}
              </p>
              <button type="button" onClick={copyAll} className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-slate-700 cursor-pointer">
                {copied ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />} {copied ? 'Nusxalandi' : 'Loginlarni nusxalash'}
              </button>
            </div>
            <p className="mt-1 text-xs text-amber-700">Vaqtinchalik parollar faqat hozir ko'rsatiladi — nusxalab o'quvchilarga yuboring.</p>
            <ul className="mt-3 divide-y divide-slate-100 rounded-2xl border border-slate-200">
              {results.map((r, i) => (
                <li key={i} className="flex items-start justify-between gap-3 px-4 py-2.5 text-sm">
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-slate-900">{r.full_name || '—'}</p>
                    <p className="truncate text-xs text-slate-500">{r.email}</p>
                    {r.warning && <p className="text-xs text-amber-700">{r.warning}</p>}
                  </div>
                  {r.ok ? (
                    <span className="shrink-0 text-right text-xs">
                      <span className="inline-flex items-center gap-1 font-semibold text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> Qo'shildi</span>
                      {r.temp_password && <span className="block font-mono text-slate-800">{r.temp_password}</span>}
                    </span>
                  ) : (
                    <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-rose-700"><AlertTriangle className="w-3.5 h-3.5" /> {r.error}</span>
                  )}
                </li>
              ))}
            </ul>
            <button type="button" onClick={onClose} className="mt-5 w-full rounded-full border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer">Yopish</button>
          </div>
        ) : (
          <>
            <div className="mt-5 inline-flex rounded-full bg-slate-100 p-1 text-xs">
              {([['one', 'Bitta', UserPlus], ['many', "Ro'yxat bilan", Users]] as const).map(([key, label, Icon]) => (
                <button key={key} type="button" onClick={() => setMode(key)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-semibold transition cursor-pointer ${mode === key ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>
                  <Icon className="w-3.5 h-3.5" /> {label}
                </button>
              ))}
            </div>

            {mode === 'one' ? (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input className={input} placeholder="Ism Familiya *" value={one.full_name} onChange={e => setOne({ ...one, full_name: e.target.value })} />
                <input className={input} placeholder="Email *" type="email" value={one.email} onChange={e => setOne({ ...one, email: e.target.value })} />
                <input className={input} placeholder="Telefon" value={one.phone} onChange={e => setOne({ ...one, phone: e.target.value })} />
                <input className={input} placeholder="Parol (bo'sh qolsa avtomatik)" value={one.password} onChange={e => setOne({ ...one, password: e.target.value })} />
              </div>
            ) : (
              <div className="mt-4">
                <textarea
                  className={`${input} h-40 font-mono text-xs`}
                  placeholder={"Har qatorda bitta o'quvchi (Excel'dan nusxalash mumkin):\nShahzoda Ilhomova, shahzoda@mail.uz, +998 90 123 45 67\nAli Valiyev; ali@mail.uz; ; MaxfiyParol1"}
                  value={bulk}
                  onChange={e => setBulk(e.target.value)}
                />
                {parsed && (
                  <p className="mt-1 text-xs text-slate-500">
                    {parsed.rows.length} ta o'quvchi tanildi
                    {parsed.bad.length > 0 && <span className="text-rose-600"> · {parsed.bad.length} ta qatorda ism yoki email topilmadi</span>}
                  </p>
                )}
              </div>
            )}

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <select className={input} value={groupId} onChange={e => setGroupId(e.target.value)} aria-label="Guruh">
                <option value="">Guruhsiz</option>
                {groups.map(g => <option key={g.id} value={g.id}>{g.name} ({g.level})</option>)}
              </select>
              <select className={input} value={level} onChange={e => setLevel(e.target.value)} aria-label="Daraja">
                <option value="">Daraja (ixtiyoriy)</option>
                {['A1', 'A2', 'B1', 'B2', 'C1'].map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>

            {error && <p className="mt-3 text-sm font-medium text-rose-600">{error}</p>}
            <button
              type="button"
              disabled={saving}
              onClick={submit}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 py-2.5 text-sm font-bold text-white hover:bg-indigo-700 disabled:opacity-60 cursor-pointer"
            >
              {saving && <Loader2 className="w-4 h-4 animate-spin" />}
              {mode === 'one' ? "Qo'shish" : `${parsed?.rows.length || 0} ta o'quvchini qo'shish`}
            </button>
          </>
        )}
      </div>
    </div>
  );
};
