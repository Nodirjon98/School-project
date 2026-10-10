import { describe, expect, it } from 'vitest';
import { buildTodaysActions, isPlanOverdue, riskSignalsFor, studentRisk } from '../riskScore';
import type { Attendance, Homework, HomeworkSubmission, Lesson, Profile, StudentPaymentPlan } from '../../types';

const NOW = new Date('2026-10-10T12:00:00').getTime();
const student = { id: 's1', group_id: 'g1', full_name: 'Ali', email: 'a@x.uz' } as Profile;

describe('studentRisk', () => {
  it('is green for a healthy student', () => {
    expect(studentRisk({ attendance30: 95, homeworkRate: 0.9, hasDebt: false, daysSinceActive: 1, hearts: 10 }))
      .toEqual({ level: 'green', score: 0, reasons: [] });
  });

  it('is green when there is no data at all', () => {
    expect(studentRisk({ attendance30: null, homeworkRate: null, hasDebt: false, daysSinceActive: null, hearts: null }).level).toBe('green');
  });

  it('adds up signals and caps at 100', () => {
    const r = studentRisk({ attendance30: 30, homeworkRate: 0.1, hasDebt: true, daysSinceActive: 10, hearts: 2 });
    expect(r.score).toBe(100);
    expect(r.level).toBe('red');
    expect(r.reasons).toEqual([
      'Davomat juda past', 'Uy vazifa bajarilmayapti', "To'lov muddati o'tgan", '10 kundan beri kirmagan', 'Yurakchalar kam (2)',
    ]);
  });

  it('marks moderate problems yellow', () => {
    expect(studentRisk({ attendance30: 65, homeworkRate: null, hasDebt: false, daysSinceActive: 2, hearts: 10 }).level).toBe('yellow');
  });
});

describe('riskSignalsFor', () => {
  const lessons = [
    { id: 'l1', lesson_date: '2026-10-01' },
    { id: 'l2', lesson_date: '2026-10-05' },
    { id: 'l3', lesson_date: '2026-10-08' },
    { id: 'old', lesson_date: '2026-08-01' },
  ] as Lesson[];
  const attendance = [
    { lesson_id: 'l1', student_id: 's1', status: 'present' },
    { lesson_id: 'l2', student_id: 's1', status: 'absent' },
    { lesson_id: 'l3', student_id: 's1', status: 'excused' },
    { lesson_id: 'old', student_id: 's1', status: 'absent' },
    { lesson_id: 'l2', student_id: 'other', status: 'absent' },
  ] as Attendance[];
  const homeworks = [
    { id: 'h1', group_id: 'g1', due_date: '2026-10-02' },
    { id: 'h2', group_id: 'g1', due_date: '2026-10-06' },
    { id: 'future', group_id: 'g1', due_date: '2026-10-20' },
    { id: 'otherGroup', group_id: 'g2', due_date: '2026-10-03' },
  ] as Homework[];
  const submissions = [
    { homework_id: 'h1', student_id: 's1', status: 'graded' },
    { homework_id: 'h2', student_id: 's1', status: 'draft' },
  ] as HomeworkSubmission[];

  it('uses only the last 30 days and ignores excused lessons and drafts', () => {
    const sig = riskSignalsFor(student, {
      lessons, attendance, homeworks, submissions, plans: [], lastActive: { s1: '2026-10-02T12:00:00' }, hearts: { s1: 7 }, now: NOW,
    });
    expect(sig).toEqual({ attendance30: 50, homeworkRate: 0.5, hasDebt: false, daysSinceActive: 8, hearts: 7 });
  });

  it('returns nulls when nothing is known', () => {
    const sig = riskSignalsFor({ ...student, group_id: undefined }, { lessons: [], attendance: [], homeworks, submissions: [], plans: [], lastActive: {}, now: NOW });
    expect(sig).toEqual({ attendance30: null, homeworkRate: null, hasDebt: false, daysSinceActive: null, hearts: null });
  });
});

describe('isPlanOverdue', () => {
  const plan = (schedules: Partial<StudentPaymentPlan['schedules'][number]>[], overall_status = 'pending') =>
    ({ overall_status, schedules } as unknown as StudentPaymentPlan);

  it('detects an unpaid installment past its due date', () => {
    expect(isPlanOverdue(plan([{ status: 'pending', due_date: '2026-10-09' }]), NOW)).toBe(true);
  });
  it('ignores paid and future installments', () => {
    expect(isPlanOverdue(plan([{ status: 'paid', due_date: '2026-09-01' }, { status: 'pending', due_date: '2026-10-10' }]), NOW)).toBe(false);
  });
  it('respects an explicit overdue status', () => {
    expect(isPlanOverdue(plan([], 'overdue'), NOW)).toBe(true);
  });
});

describe('buildTodaysActions', () => {
  it('returns nothing when all is well', () => {
    expect(buildTodaysActions({})).toEqual([]);
  });
  it('orders leads first and previews names', () => {
    const actions = buildTodaysActions({ newLeads: 2, debtors: ['A', 'B', 'C', 'D'], ungradedHw: 1 });
    expect(actions.map(a => a.key)).toEqual(['leads', 'debt', 'hw']);
    expect(actions[1].sub).toBe('A, B, C…');
  });
});
