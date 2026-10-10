import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ClipboardList, Loader2, MessageCircle, Phone, RefreshCw, Search, StickyNote } from 'lucide-react';
import { LEAD_FLOW, LEAD_STATUS, Lead, LeadStatus, loadLeads, updateLead } from '../../lib/leads';
import { formatUzDateTime, timeAgoUz } from '../../lib/uzDate';
import { supabase } from '../../lib/supabase';

const telegramLink = (phone: string) => `https://t.me/+${phone.replace(/\D/g, '')}`;

/** Trial-lesson applications from the landing page (ported from premier-school). */
export const LeadsPage: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<LeadStatus | 'all'>('all');
  const [query, setQuery] = useState('');
  const [noteFor, setNoteFor] = useState<string | null>(null);
  const [noteText, setNoteText] = useState('');
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLeads(await loadLeads());
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
    if (!supabase) return;
    const client = supabase;
    const channel = client
      .channel('leads-page')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'leads' }, () => load())
      .subscribe();
    return () => { client.removeChannel(channel); };
  }, [load]);

  const patch = async (id: string, updates: Partial<Pick<Lead, 'status' | 'note'>>) => {
    const before = leads;
    setLeads(ls => ls.map(l => (l.id === id ? { ...l, ...updates } : l)));
    const err = await updateLead(id, updates);
    if (err) {
      setLeads(before);
      setError(err);
    } else setError(null);
    return err;
  };

  const counts = useMemo(
    () => LEAD_FLOW.reduce((acc, s) => ({ ...acc, [s]: leads.filter(l => l.status === s).length }), {} as Record<LeadStatus, number>),
    [leads]
  );

  const filtered = leads
    .filter(l => filter === 'all' || l.status === filter)
    .filter(l => {
      const q = query.trim().toLowerCase();
      const digits = q.replace(/\D/g, '');
      return !q || l.name.toLowerCase().includes(q) || (!!digits && l.phone.replace(/\D/g, '').includes(digits));
    });

  const conversion = leads.length ? Math.round((counts.enrolled / leads.length) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-slate-900">
            <ClipboardList className="h-6 w-6 text-indigo-600" /> Arizalar
          </h1>
          <p className="mt-1 text-sm text-slate-500">Landing sahifadan sinov darsiga yozilganlar. Holatini o'zgartirib, kim bilan gaplashilganini kuzating.</p>
        </div>
        <button type="button" onClick={() => { setLoading(true); load(); }} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer">
          <RefreshCw className="h-4 w-4" /> Yangilash
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {LEAD_FLOW.map(s => (
          <button
            key={s}
            type="button"
            onClick={() => setFilter(filter === s ? 'all' : s)}
            className={`rounded-3xl border bg-white p-4 text-left transition cursor-pointer ${filter === s ? 'border-indigo-400 ring-2 ring-indigo-100' : 'border-slate-200/70 hover:border-slate-300'}`}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{LEAD_STATUS[s].label}</p>
            <p className="mt-1 text-2xl font-black text-slate-900">{counts[s] || 0}</p>
          </button>
        ))}
        <div className="col-span-2 rounded-3xl border border-slate-200/70 bg-white p-4 sm:col-span-1">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Konversiya</p>
          <p className="mt-1 text-2xl font-black text-slate-900">{conversion}%</p>
        </div>
      </div>

      <label className="relative block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Ism yoki telefon bo'yicha qidirish"
          className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
      </label>

      {error && <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-700">{error}</p>}

      {loading ? (
        <p className="flex items-center justify-center gap-2 p-10 text-sm text-slate-500"><Loader2 className="h-4 w-4 animate-spin" /> Yuklanmoqda…</p>
      ) : filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
          {leads.length === 0 ? "Hozircha ariza yo'q. Landing sahifadagi forma orqali kelgan arizalar shu yerda ko'rinadi." : "Bu filtrga mos ariza yo'q."}
        </div>
      ) : (
        <ul className="space-y-3">
          {filtered.map(l => (
            <li key={l.id} className="rounded-3xl border border-slate-200/70 bg-white p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-base font-bold text-slate-900">{l.name}</span>
                    <span className={`rounded-full border px-2 py-0.5 text-[11px] font-bold ${LEAD_STATUS[l.status].tone}`}>{LEAD_STATUS[l.status].label}</span>
                    {l.level_interest && <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">{l.level_interest}</span>}
                  </div>
                  <p className="mt-1 text-sm text-slate-700">{l.phone}</p>
                  {l.message && <p className="mt-1 text-sm text-slate-500">{l.message}</p>}
                  <p className="mt-1 text-xs text-slate-400" title={formatUzDateTime(l.created_at)}>{timeAgoUz(l.created_at)}</p>
                </div>
                <div className="flex gap-2">
                  <a href={`tel:${l.phone.replace(/[^\d+]/g, '')}`} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">
                    <Phone className="h-3.5 w-3.5" /> Qo'ng'iroq
                  </a>
                  <a href={telegramLink(l.phone)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">
                    <MessageCircle className="h-3.5 w-3.5" /> Telegram
                  </a>
                </div>
              </div>

              {l.note && noteFor !== l.id && (
                <p className="mt-3 rounded-2xl bg-amber-50 px-3 py-2 text-xs text-amber-900"><StickyNote className="mr-1 inline h-3.5 w-3.5" />{l.note}</p>
              )}
              {noteFor === l.id && (
                <div className="mt-3 flex gap-2">
                  <input value={noteText} onChange={e => setNoteText(e.target.value)} maxLength={1000} placeholder="Izoh: nima kelishildi?"
                    className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" autoFocus />
                  <button type="button" className="rounded-xl bg-slate-900 px-4 text-xs font-bold text-white cursor-pointer"
                    onClick={async () => { if (!(await patch(l.id, { note: noteText.trim() || null }))) setNoteFor(null); }}>
                    Saqlash
                  </button>
                </div>
              )}

              <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-slate-100 pt-3">
                {LEAD_FLOW.map(s => (
                  <button key={s} type="button" disabled={l.status === s} onClick={() => patch(l.id, { status: s })}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition cursor-pointer disabled:cursor-default ${l.status === s ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                    {LEAD_STATUS[s].label}
                  </button>
                ))}
                <button type="button" onClick={() => { setNoteFor(noteFor === l.id ? null : l.id); setNoteText(l.note || ''); }}
                  className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer">
                  <StickyNote className="h-3.5 w-3.5" /> Izoh
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
