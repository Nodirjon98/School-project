// Student risk score and "today's actions" (ported from premier-school's riskScore.js).
// Pure functions: callers pass already-loaded data.
import type { Attendance, Homework, HomeworkSubmission, Lesson, Profile, StudentPaymentPlan } from '../types';

export type RiskLevel = 'green' | 'yellow' | 'red';

export interface RiskSignals {
  /** % of marked lessons attended in the last 30 days (null = no lessons marked). */
  attendance30: number | null;
  /** Share (0..1) of due homework submitted in the last 30 days (null = none due). */
  homeworkRate: number | null;
  hasDebt: boolean;
  daysSinceActive: number | null;
  /** Conduct hearts balance (null = not loaded). */
  hearts: number | null;
}

export interface RiskResult {
  level: RiskLevel;
  score: number;
  reasons: string[];
}

/** Higher score = higher risk of dropping out. */
export function studentRisk({ attendance30, homeworkRate, hasDebt, daysSinceActive, hearts }: RiskSignals): RiskResult {
  let score = 0;
  const reasons: string[] = [];

  if (attendance30 != null) {
    if (attendance30 < 50) { score += 35; reasons.push('Davomat juda past'); }
    else if (attendance30 < 70) { score += 22; reasons.push('Davomat pasaygan'); }
    else if (attendance30 < 85) score += 10;
  }

  if (homeworkRate != null) {
    if (homeworkRate < 0.4) { score += 25; reasons.push('Uy vazifa bajarilmayapti'); }
    else if (homeworkRate < 0.7) { score += 12; reasons.push('Uy vazifa kam'); }
  }

  if (hasDebt) { score += 20; reasons.push("To'lov muddati o'tgan"); }

  if (daysSinceActive != null) {
    if (daysSinceActive >= 7) { score += 15; reasons.push(`${daysSinceActive} kundan beri kirmagan`); }
    else if (daysSinceActive >= 4) score += 8;
  }

  if (hearts != null && hearts <= 3) { score += 12; reasons.push(`Yurakchalar kam (${hearts})`); }

  score = Math.min(100, score);
  const level: RiskLevel = score >= 45 ? 'red' : score >= 22 ? 'yellow' : 'green';
  return { level, score, reasons };
}

const DAY_MS = 24 * 60 * 60 * 1000;
const dateOnly = (iso: string) => iso.slice(0, 10);
/** Local calendar day (YYYY-MM-DD) — the school runs on Tashkent time, not UTC. */
const localDay = (ms: number) => {
  const d = new Date(ms);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

/** A plan is overdue when it is marked so or any unpaid installment is past due. */
export function isPlanOverdue(plan: StudentPaymentPlan, now = Date.now()): boolean {
  const today = localDay(now);
  return plan.overall_status === 'overdue'
    || (plan.schedules || []).some(s => s.status !== 'paid' && !!s.due_date && dateOnly(s.due_date) < today);
}

export interface RiskData {
  lessons: Lesson[];
  attendance: Attendance[];
  homeworks: Homework[];
  submissions: HomeworkSubmission[];
  plans: StudentPaymentPlan[];
  /** Last activity timestamps by student id. */
  lastActive: Record<string, string | undefined>;
  hearts?: Record<string, number>;
  now?: number;
}

/** Derives risk signals for one student from the LMS data. */
export function riskSignalsFor(student: Profile, data: RiskData): RiskSignals {
  const now = data.now ?? Date.now();
  const since = localDay(now - 30 * DAY_MS);
  const today = localDay(now);

  const lessonDate = new Map(data.lessons.map(l => [l.id, l.lesson_date || l.date || l.created_at]));
  const marked = data.attendance.filter(a => {
    if (a.student_id !== student.id || a.status === 'excused') return false;
    const d = lessonDate.get(a.lesson_id) || a.created_at;
    return !!d && dateOnly(d) >= since && dateOnly(d) <= today;
  });
  const attendance30 = marked.length
    ? Math.round((marked.filter(a => a.status === 'present' || a.status === 'late').length / marked.length) * 100)
    : null;

  const due = student.group_id
    ? data.homeworks.filter(h => h.group_id === student.group_id && h.due_date && dateOnly(h.due_date) >= since && dateOnly(h.due_date) < today)
    : [];
  const submitted = new Set(data.submissions.filter(s => s.student_id === student.id && s.status !== 'draft').map(s => s.homework_id));
  const homeworkRate = due.length ? due.filter(h => submitted.has(h.id)).length / due.length : null;

  const hasDebt = data.plans.filter(p => p.student_id === student.id).some(p => isPlanOverdue(p, now));

  const last = data.lastActive[student.id] || student.last_active_date;
  const daysSinceActive = last ? Math.max(0, Math.floor((now - new Date(last).getTime()) / DAY_MS)) : null;

  return { attendance30, homeworkRate, hasDebt, daysSinceActive, hearts: data.hearts?.[student.id] ?? null };
}

export interface TodayAction {
  key: string;
  tone: 'indigo' | 'rose' | 'amber';
  title: string;
  sub: string;
  to: string;
  cta: string;
}

const preview = (names: string[]) => names.slice(0, 3).join(', ') + (names.length > 3 ? '…' : '');

export function buildTodaysActions({
  newLeads = 0,
  debtors = [],
  ungradedHw = 0,
  riskStudents = [],
  unassigned = 0,
  unreadMessages = 0,
}: {
  newLeads?: number;
  debtors?: string[];
  ungradedHw?: number;
  riskStudents?: string[];
  unassigned?: number;
  unreadMessages?: number;
}): TodayAction[] {
  const actions: TodayAction[] = [];
  if (newLeads > 0) actions.push({ key: 'leads', tone: 'indigo', title: `${newLeads} ta yangi ariza`, sub: "Sinov darsiga yozilganlarga qo'ng'iroq qiling", to: '/admin/leads', cta: "Ko'rish" });
  if (riskStudents.length) actions.push({ key: 'risk', tone: 'rose', title: `${riskStudents.length} ta o'quvchi xavf zonasida`, sub: preview(riskStudents), to: '#xavf', cta: "Ko'rish" });
  if (debtors.length) actions.push({ key: 'debt', tone: 'rose', title: `${debtors.length} ta o'quvchining to'lovi kechikkan`, sub: preview(debtors), to: '/admin/payments', cta: "To'lovlar" });
  if (ungradedHw > 0) actions.push({ key: 'hw', tone: 'amber', title: `${ungradedHw} ta vazifa tekshirilmagan`, sub: 'Baholanmagan topshiriqlar bor', to: '/teacher/homework', cta: 'Tekshirish' });
  if (unassigned > 0) actions.push({ key: 'unassigned', tone: 'amber', title: `${unassigned} ta o'quvchi guruhsiz`, sub: 'Guruhga joylashtiring', to: '/admin/registrations', cta: 'Joylash' });
  if (unreadMessages > 0) actions.push({ key: 'msg', tone: 'indigo', title: `${unreadMessages} ta o'qilmagan xabar`, sub: "O'quvchilar javob kutmoqda", to: '/messages', cta: 'Ochish' });
  return actions;
}
