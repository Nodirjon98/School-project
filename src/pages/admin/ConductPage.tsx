import React, { useEffect, useMemo, useState } from 'react';
import { Heart, Search, Minus, Plus, X, Undo2, ChevronDown, Loader2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { Profile } from '../../types';
import {
  CONDUCT_PRESETS, ConductEvent, HEARTS_START, addConductEvent, deleteConductEvent, heartsFor, loadConductEvents,
} from '../../lib/conduct';
import { Hearts } from '../../components/conduct/Hearts';

const UZ_MONTHS = ['yan', 'fev', 'mar', 'apr', 'may', 'iyn', 'iyl', 'avg', 'sen', 'okt', 'noy', 'dek'];
const fmt = (iso: string) => {
  const d = new Date(iso);
  return `${d.getDate()}-${UZ_MONTHS[d.getMonth()]}, ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
};

/** Dialog to add or remove hearts with a reason. */
const AdjustDialog: React.FC<{
  student: Profile;
  sign: 1 | -1;
  onClose: () => void;
  onSave: (delta: number, reason: string) => Promise<string | null>;
}> = ({ student, sign, onClose, onSave }) => {
  const presets = CONDUCT_PRESETS.filter(p => Math.sign(p.delta) === sign);
  const [amount, setAmount] = useState(1);
  const [reason, setReason] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (delta: number, why: string) => {
    if (why.trim().length < 2) return setError('Sababini yozing');
    setSaving(true);
    const err = await onSave(delta, why);
    setSaving(false);
    if (err) setError(err);
    else onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/50 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{sign > 0 ? "Yurakcha qo'shish" : 'Yurakcha ayirish'}</h3>
            <p className="text-sm text-slate-500">{student.full_name}</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100" aria-label="Yopish"><X className="w-4 h-4" /></button>
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-400">Tez tanlash</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {presets.map(p => (
            <button
              key={p.reason}
              type="button"
              disabled={saving}
              onClick={() => submit(p.delta, p.reason)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition cursor-pointer disabled:opacity-50 ${sign > 0 ? 'border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100' : 'border-rose-200 bg-rose-50 text-rose-800 hover:bg-rose-100'}`}
            >
              {p.delta > 0 ? '+' : ''}{p.delta} · {p.reason}
            </button>
          ))}
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-400">Yoki o'zingiz yozing</p>
        <div className="mt-2 flex gap-2">
          <select
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            className="rounded-xl border border-slate-200 bg-slate-50 px-2 text-sm"
            aria-label='Nechta yurakcha'
          >
            {[1, 2, 3].map(n => <option key={n} value={n}>{sign > 0 ? '+' : '−'}{n}</option>)}
          </select>
          <input
            value={reason}
            onChange={e => setReason(e.target.value)}
            maxLength={200}
            placeholder="Sabab"
            className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        {error && <p className="mt-2 text-xs font-medium text-rose-600">{error}</p>}
        <button
          type="button"
          disabled={saving}
          onClick={() => submit(sign * amount, reason)}
          className={`mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-bold text-white transition disabled:opacity-60 cursor-pointer ${sign > 0 ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-rose-600 hover:bg-rose-700'}`}
        >
          {saving && <Loader2 className="w-4 h-4 animate-spin" />}
          Saqlash
        </button>
      </div>
    </div>
  );
};

export const ConductPage: React.FC = () => {
  const { profile, role } = useAuth();
  const { students, groups } = useLMSData();
  const [events, setEvents] = useState<ConductEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [groupFilter, setGroupFilter] = useState('all');
  const [dialog, setDialog] = useState<{ student: Profile; sign: 1 | -1 } | null>(null);
  const [open, setOpen] = useState<string | null>(null);
  const isAdmin = role === 'admin';

  useEffect(() => {
    loadConductEvents().then(e => { setEvents(e); setLoading(false); });
  }, []);

  const roster = useMemo(() => students
    .filter(s => s.auth_id && s.status !== 'left')
    .filter(s => groupFilter === 'all' || (groupFilter === 'none' ? !s.group_id : s.group_id === groupFilter))
    .filter(s => !query.trim() || [s.full_name, s.email].some(v => v?.toLowerCase().includes(query.trim().toLowerCase())))
    .map(s => ({ s, hearts: heartsFor(events, s.id) }))
    .sort((a, b) => a.hearts - b.hearts || (a.s.full_name || '').localeCompare(b.s.full_name || '')),
  [students, events, query, groupFilter]);

  const save = async (student: Profile, delta: number, reason: string) => {
    const { event, error } = await addConductEvent(student.id, delta, reason, profile?.full_name || 'Admin');
    if (event) setEvents(prev => [event, ...prev]);
    return error ?? null;
  };

  const undo = async (id: string) => {
    const err = await deleteConductEvent(id);
    if (err) alert(err);
    else setEvents(prev => prev.filter(e => e.id !== id));
  };

  const atRisk = roster.filter(r => r.hearts <= 3).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-slate-900">
          <Heart className="w-6 h-6 fill-rose-500 text-rose-500" /> Odob va tartib
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Har bir o'quvchi {HEARTS_START} ta yurakcha bilan boshlaydi. Tartibsizlik uchun yurakcha ayiriladi, odob va faollik uchun qo'shiladi. O'quvchi o'z yurakchalari va sabablarini kabinetida ko'radi.
        </p>
      </div>

      {atRisk > 0 && (
        <div className="rounded-3xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm text-rose-800">
          <strong>{atRisk} ta o'quvchida</strong> 3 tadan kam yurakcha qoldi — ota-onasi bilan gaplashish tavsiya etiladi.
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <label className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="O'quvchini qidirish"
            className="w-full rounded-full border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </label>
        <select value={groupFilter} onChange={e => setGroupFilter(e.target.value)}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700" aria-label="Guruh">
          <option value="all">Barcha guruhlar</option>
          {groups.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
          <option value="none">Guruhsiz</option>
        </select>
      </div>

      <div className="rounded-3xl border border-slate-200/70 bg-white overflow-hidden">
        {loading ? (
          <p className="flex items-center justify-center gap-2 p-10 text-sm text-slate-500"><Loader2 className="w-4 h-4 animate-spin" /> Yuklanmoqda…</p>
        ) : roster.length === 0 ? (
          <p className="p-10 text-center text-sm text-slate-500">O'quvchi topilmadi.</p>
        ) : (
          <ul className="divide-y divide-slate-100">
            {roster.map(({ s, hearts }) => {
              const history = events.filter(e => e.student_id === s.id);
              const expanded = open === s.id;
              return (
                <li key={s.id} className="px-4 sm:px-5 py-3.5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <button type="button" onClick={() => setOpen(expanded ? null : s.id)} className="flex flex-1 items-center gap-3 text-left min-w-0 cursor-pointer">
                      <ChevronDown className={`w-4 h-4 shrink-0 text-slate-400 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-slate-900">{s.full_name || s.email}</p>
                        <p className="truncate text-xs text-slate-500">{s.group_name || 'Guruhsiz'} · {history.length} ta yozuv</p>
                      </div>
                    </button>
                    <div className="flex items-center gap-3 pl-7 sm:pl-0">
                      <Hearts count={hearts} />
                      {isAdmin && (
                        <div className="flex gap-1.5">
                          <button type="button" onClick={() => setDialog({ student: s, sign: -1 })} aria-label="Yurakcha ayirish"
                            className="rounded-full border border-rose-200 bg-rose-50 p-1.5 text-rose-700 hover:bg-rose-100 cursor-pointer"><Minus className="w-4 h-4" /></button>
                          <button type="button" onClick={() => setDialog({ student: s, sign: 1 })} aria-label="Yurakcha qo'shish"
                            className="rounded-full border border-emerald-200 bg-emerald-50 p-1.5 text-emerald-700 hover:bg-emerald-100 cursor-pointer"><Plus className="w-4 h-4" /></button>
                        </div>
                      )}
                    </div>
                  </div>
                  {expanded && (
                    <ul className="mt-3 ml-7 space-y-1.5">
                      {history.length === 0 && <li className="text-xs text-slate-400">Hali yozuv yo'q.</li>}
                      {history.map(e => (
                        <li key={e.id} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-3 py-2 text-xs">
                          <span className="min-w-0">
                            <span className={`font-bold ${e.delta > 0 ? 'text-emerald-700' : 'text-rose-700'}`}>{e.delta > 0 ? '+' : ''}{e.delta}</span>
                            <span className="ml-2 text-slate-700">{e.reason}</span>
                            <span className="ml-2 text-slate-400">{fmt(e.created_at)}{e.created_by_name ? ` · ${e.created_by_name}` : ''}</span>
                          </span>
                          {isAdmin && (
                            <button type="button" onClick={() => undo(e.id)} className="inline-flex shrink-0 items-center gap-1 text-slate-400 hover:text-slate-700 cursor-pointer" title="Bekor qilish">
                              <Undo2 className="w-3.5 h-3.5" /> Bekor qilish
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {dialog && (
        <AdjustDialog
          student={dialog.student}
          sign={dialog.sign}
          onClose={() => setDialog(null)}
          onSave={(delta, reason) => save(dialog.student, delta, reason)}
        />
      )}
    </div>
  );
};
