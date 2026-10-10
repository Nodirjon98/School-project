import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, CheckCircle2, ListChecks } from 'lucide-react';
import { useLMSData } from '../../contexts/LMSDataContext';
import { useInbox } from '../../contexts/InboxContext';
import { getStoredStudentPayments } from '../../data/paymentAndAnalyticsData';
import { HEARTS_START, heartsFor, loadConductEvents, ConductEvent } from '../../lib/conduct';
import { buildTodaysActions, isPlanOverdue, riskSignalsFor, studentRisk } from '../../lib/riskScore';
import type { StudentPaymentPlan } from '../../types';

const TONE = {
  indigo: 'border-indigo-200 bg-indigo-50/60 text-indigo-900',
  rose: 'border-rose-200 bg-rose-50/70 text-rose-900',
  amber: 'border-amber-200 bg-amber-50/70 text-amber-900',
};
const LEVEL_DOT = { red: 'bg-rose-500', yellow: 'bg-amber-400', green: 'bg-emerald-500' };

/** "What needs attention today" + at-risk students (ported from premier-school). */
export const TodayPanel: React.FC = () => {
  const { students, lessons, attendance, homeworks, submissions, telemetryLogs } = useLMSData();
  const { newLeads, unreadTotal } = useInbox();
  const [events, setEvents] = useState<ConductEvent[] | null>(null);
  const [plans, setPlans] = useState<StudentPaymentPlan[]>(() => getStoredStudentPayments());

  useEffect(() => {
    loadConductEvents().then(setEvents);
    const refresh = () => setPlans(getStoredStudentPayments());
    window.addEventListener('premier:payments_synced', refresh);
    return () => window.removeEventListener('premier:payments_synced', refresh);
  }, []);

  const risks = useMemo(() => {
    const roster = students.filter(s => s.auth_id && s.status !== 'left');
    const hearts = events ? Object.fromEntries(roster.map(s => [s.id, heartsFor(events, s.id)])) : undefined;
    const lastActive = Object.fromEntries(Object.values(telemetryLogs || {}).map(t => [t.student_id, t.last_active_at]));
    return roster
      .map(s => ({ s, ...studentRisk(riskSignalsFor(s, { lessons, attendance, homeworks, submissions, plans, lastActive, hearts })) }))
      .filter(r => r.level !== 'green')
      .sort((a, b) => b.score - a.score);
  }, [students, lessons, attendance, homeworks, submissions, plans, telemetryLogs, events]);

  const debtors = useMemo(() => plans.filter(p => isPlanOverdue(p)).map(p => p.student_name), [plans]);

  const actions = buildTodaysActions({
    newLeads,
    debtors,
    ungradedHw: submissions.filter(s => s.status === 'submitted').length,
    riskStudents: risks.filter(r => r.level === 'red').map(r => r.s.full_name || r.s.email),
    unreadMessages: unreadTotal,
  });

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <section className="rounded-3xl border border-slate-200/70 bg-white p-5 sm:p-6">
        <h3 className="mb-4 flex items-center gap-2 text-[15px] font-bold text-slate-900">
          <ListChecks className="h-4 w-4 text-indigo-600" /> Bugungi ishlar
        </h3>
        {actions.length === 0 ? (
          <p className="flex items-center gap-2 py-6 text-sm text-emerald-700"><CheckCircle2 className="h-4 w-4" /> Hamma ish joyida — shoshilinch vazifa yo'q.</p>
        ) : (
          <ul className="space-y-2">
            {actions.map(a => (
              <li key={a.key}>
                <Link to={a.to} className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 transition hover:shadow-sm ${TONE[a.tone]}`}>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold">{a.title}</span>
                    <span className="block truncate text-xs opacity-75">{a.sub}</span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 text-xs font-bold">{a.cta} <ArrowRight className="h-3 w-3" /></span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section id="xavf" className="scroll-mt-24 rounded-3xl border border-slate-200/70 bg-white p-5 sm:p-6">
        <h3 className="mb-1 flex items-center gap-2 text-[15px] font-bold text-slate-900">
          <AlertTriangle className="h-4 w-4 text-rose-600" /> Xavf zonasidagi o'quvchilar
        </h3>
        <p className="mb-4 text-xs text-slate-500">Davomat, uy vazifa, to'lov, faollik va odob (boshlang'ich {HEARTS_START} yurakcha) asosida, so'nggi 30 kun.</p>
        {risks.length === 0 ? (
          <p className="flex items-center gap-2 py-6 text-sm text-emerald-700"><CheckCircle2 className="h-4 w-4" /> Xavf ostida o'quvchi yo'q.</p>
        ) : (
          <ul className="divide-y divide-slate-100">
            {risks.slice(0, 8).map(({ s, level, score, reasons }) => (
              <li key={s.id} className="flex items-start justify-between gap-3 py-2.5">
                <span className="flex min-w-0 items-start gap-2.5">
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${LEVEL_DOT[level]}`} aria-label={level === 'red' ? 'Yuqori xavf' : "O'rtacha xavf"} />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-slate-900">{s.full_name || s.email}</span>
                    <span className="block text-xs text-slate-500">{reasons.join(' · ') || 'Bir nechta kichik belgilar'}</span>
                  </span>
                </span>
                <span className="shrink-0 text-xs font-bold tabular-nums text-slate-500">{score}</span>
              </li>
            ))}
          </ul>
        )}
        {risks.length > 8 && <p className="mt-2 text-xs text-slate-400">Yana {risks.length - 8} ta o'quvchi…</p>}
      </section>
    </div>
  );
};
