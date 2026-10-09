import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, UserPlus, Users, CalendarDays, AlertCircle, RefreshCw, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { useLMSData } from '../../contexts/LMSDataContext';
import { Profile } from '../../types';
import { useAuth } from '../../contexts/AuthContext';
import { AddStudentsDialog } from '../../components/admin/AddStudentsDialog';

const UZ_MONTHS = ['yan', 'fev', 'mar', 'apr', 'may', 'iyn', 'iyl', 'avg', 'sen', 'okt', 'noy', 'dek'];
const DAY_MS = 24 * 60 * 60 * 1000;

const formatDate = (iso?: string) => {
  if (!iso) return '—';
  const d = new Date(iso);
  return `${d.getDate()}-${UZ_MONTHS[d.getMonth()]}, ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
};

const timeAgo = (iso?: string) => {
  if (!iso) return '';
  const diff = Date.now() - new Date(iso).getTime();
  const min = Math.round(diff / 60000);
  if (min < 1) return 'hozirgina';
  if (min < 60) return `${min} daqiqa oldin`;
  const h = Math.round(min / 60);
  if (h < 24) return `${h} soat oldin`;
  return `${Math.round(h / 24)} kun oldin`;
};

type Filter = 'all' | 'new' | 'unassigned';

/** Sign-ups per day for the last `days` days, oldest first. */
const dailySignups = (students: Profile[], days: number) => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const buckets = Array.from({ length: days }, (_, i) => {
    const day = new Date(start.getTime() - (days - 1 - i) * DAY_MS);
    return { day, count: 0 };
  });
  students.forEach(st => {
    if (!st.created_at) return;
    const t = new Date(st.created_at);
    t.setHours(0, 0, 0, 0);
    const idx = Math.round((t.getTime() - buckets[0].day.getTime()) / DAY_MS);
    if (idx >= 0 && idx < days) buckets[idx].count += 1;
  });
  return buckets;
};

const SignupChart: React.FC<{ data: { day: Date; count: number }[] }> = ({ data }) => {
  const [hover, setHover] = useState<number | null>(null);
  const max = Math.max(1, ...data.map(d => d.count));
  const total = data.reduce((a, d) => a + d.count, 0);
  return (
    <div>
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-[15px] font-bold text-slate-900">So'nggi 14 kun</h2>
        <span className="text-xs text-slate-500">{total} ta ro'yxatdan o'tish</span>
      </div>
      <div className="relative h-36 flex items-end gap-[2px]" role="img" aria-label={`So'nggi 14 kunda ${total} ta o'quvchi ro'yxatdan o'tdi`}>
        {/* recessive gridline at the max value */}
        <div className="pointer-events-none absolute inset-x-0 top-0 border-t border-dashed border-slate-200" />
        <span className="pointer-events-none absolute -top-2 right-0 bg-white pl-1 text-[10px] text-slate-400">{max}</span>
        {data.map((d, i) => (
          <div
            key={i}
            className="relative flex-1 h-full flex items-end cursor-default"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          >
            <div
              className={`w-full rounded-t-[4px] transition-colors ${d.count === 0 ? 'bg-slate-100' : hover === i ? 'bg-indigo-700' : 'bg-indigo-500'}`}
              style={{ height: d.count === 0 ? 2 : `${(d.count / max) * 100}%` }}
            />
            {hover === i && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-lg bg-slate-900 px-2.5 py-1.5 text-[11px] text-white shadow-lg z-10">
                <div className="font-semibold">{d.day.getDate()}-{UZ_MONTHS[d.day.getMonth()]}</div>
                <div className="text-slate-300">{d.count} ta o'quvchi</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-slate-400">
        <span>{data[0].day.getDate()}-{UZ_MONTHS[data[0].day.getMonth()]}</span>
        <span>Bugun</span>
      </div>
    </div>
  );
};

export const RegistrationsPage: React.FC = () => {
  const { students, groups, newStudentIds, markStudentsSeen, refreshStudentsFromDb, assignStudentToGroup } = useLMSData();
  const [filter, setFilter] = useState<Filter>('all');
  const [query, setQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [adding, setAdding] = useState(false);
  const { role } = useAuth();
  // Snapshot of what was new when the page opened, so badges stay visible while reviewing.
  const [newOnOpen] = useState(() => new Set(newStudentIds));

  useEffect(() => {
    // Opening this page counts as reviewing the new sign-ups (once the list has loaded).
    markStudentsSeen();
  }, [markStudentsSeen]);

  const registered = useMemo(
    () => students.filter(st => st.auth_id).sort((a, b) => (b.created_at || '').localeCompare(a.created_at || '')),
    [students]
  );

  const weekAgo = Date.now() - 7 * DAY_MS;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const stats = [
    { label: "Jami o'quvchilar", value: registered.length, icon: Users },
    { label: 'Bugun', value: registered.filter(s => new Date(s.created_at).getTime() >= today.getTime()).length, icon: UserPlus },
    { label: 'Shu hafta', value: registered.filter(s => new Date(s.created_at).getTime() >= weekAgo).length, icon: CalendarDays },
    { label: 'Guruhsiz', value: registered.filter(s => !s.group_id && s.status !== 'left').length, icon: AlertCircle },
  ];

  const isNew = (st: Profile) => newOnOpen.has(st.id) || newStudentIds.includes(st.id);
  const q = query.trim().toLowerCase();
  const visible = registered.filter(st => {
    if (filter === 'new' && !isNew(st)) return false;
    if (filter === 'unassigned' && (st.group_id || st.status === 'left')) return false;
    if (!q) return true;
    return [st.full_name, st.email, st.phone].some(v => v?.toLowerCase().includes(q));
  });

  const refresh = async () => {
    setRefreshing(true);
    await refreshStudentsFromDb();
    setRefreshing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">Ro'yxatdan o'tganlar</h1>
          <p className="text-sm text-slate-500 mt-1">Saytda ro'yxatdan o'tgan barcha o'quvchilar. Ro'yxat har 30 soniyada yangilanadi.</p>
        </div>
        <div className="flex gap-2 self-start">
          {role === 'admin' && (
            <button
              type="button"
              onClick={() => setAdding(true)}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-700 transition cursor-pointer"
            >
              <UserPlus className="w-4 h-4" /> O'quvchi qo'shish
            </button>
          )}
          <button
            type="button"
            onClick={refresh}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} /> Yangilash
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 grid grid-cols-2 gap-3">
          {stats.map(s => (
            <div key={s.label} className="rounded-3xl border border-slate-200/70 bg-white p-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500"><s.icon className="w-3.5 h-3.5" /> {s.label}</div>
              <div className="mt-1 text-2xl font-extrabold text-slate-900">{s.value}</div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-2 rounded-3xl border border-slate-200/70 bg-white p-5">
          <SignupChart data={dailySignups(registered, 14)} />
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200/70 bg-white overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 p-4">
          <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1 text-xs self-start">
            {([
              ['all', 'Hammasi', registered.length],
              ['new', 'Yangi', registered.filter(isNew).length],
              ['unassigned', 'Guruhsiz', registered.filter(s => !s.group_id && s.status !== 'left').length],
            ] as [Filter, string, number][]).map(([key, label, count]) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={`rounded-full px-3.5 py-1.5 font-semibold transition cursor-pointer ${filter === key ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                {label} <span className="ml-1 text-slate-400">{count}</span>
              </button>
            ))}
          </div>
          <label className="relative block md:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Ism, email yoki telefon"
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </label>
        </div>

        {visible.length === 0 ? (
          <div className="p-12 text-center text-sm text-slate-500">
            {registered.length === 0 ? "Hali hech kim ro'yxatdan o'tmagan." : "Bu filtr bo'yicha o'quvchi topilmadi."}
          </div>
        ) : (
          <ul className="divide-y divide-slate-100">
            {visible.map(st => (
              <li key={st.id} className={`flex flex-col lg:flex-row lg:items-center gap-3 px-4 sm:px-5 py-4 ${isNew(st) ? 'bg-indigo-50/40' : ''}`}>
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 shrink-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white flex items-center justify-center text-sm font-bold">
                    {(st.full_name || st.email || '?').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-sm font-bold text-slate-900">{st.full_name || '—'}</p>
                      {isNew(st) && <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-bold text-white">Yangi</span>}
                      {st.status === 'left' && <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-600">Ketgan</span>}
                    </div>
                    <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1"><Mail className="w-3 h-3" /> {st.email}</span>
                      {st.phone && <a href={`tel:${st.phone}`} className="inline-flex items-center gap-1 hover:text-indigo-600"><Phone className="w-3 h-3" /> {st.phone}</a>}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs lg:justify-end">
                  <div className="min-w-[110px]">
                    <div className="text-slate-400">Daraja</div>
                    <div className="font-semibold text-slate-800">{st.level_estimate || st.level || '—'}{st.onboarding_completed ? '' : ' · test topshirmagan'}</div>
                  </div>
                  <div className="min-w-[120px]">
                    <div className="text-slate-400">Ro'yxatdan o'tgan</div>
                    <div className="font-semibold text-slate-800" title={formatDate(st.created_at)}>{timeAgo(st.created_at)}</div>
                  </div>
                  <div className="min-w-[180px]">
                    {st.group_id ? (
                      <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                        <CheckCircle2 className="w-4 h-4" /> {st.group_name || groups.find(g => g.id === st.group_id)?.name}
                      </span>
                    ) : st.status === 'left' ? (
                      <span className="text-slate-400">—</span>
                    ) : groups.length > 0 ? (
                      <select
                        defaultValue=""
                        onChange={e => e.target.value && assignStudentToGroup(st.id, e.target.value)}
                        className="w-full rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800 focus:outline-none cursor-pointer"
                        aria-label={`${st.full_name} uchun guruh tanlash`}
                      >
                        <option value="" disabled>Guruhga biriktirish…</option>
                        {groups.map(g => <option key={g.id} value={g.id}>{g.name} ({g.level})</option>)}
                      </select>
                    ) : (
                      <Link to="/admin/groups" className="font-semibold text-indigo-600 hover:underline">Avval guruh oching</Link>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {adding && <AddStudentsDialog groups={groups} onClose={() => setAdding(false)} onDone={() => { refreshStudentsFromDb(); }} />}
    </div>
  );
};
