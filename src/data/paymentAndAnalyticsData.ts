import { 
  StudentPaymentPlan, PaymentScheduleItem, StudentActivityMetric, 
  TeacherActivityMetric, PlatformAuditAction, PaymentReceipt, PaymentStatus, PaymentMethod 
} from '../types';
import { getStorageItem, setStorageItem } from '../lib/storage';
import { syncCollection } from '../lib/lmsStore';
import { PREMIER_OFFICIAL_STUDENTS } from './premierStudentsData';

// Dynamically generate payment plans for all 36 real Premier students with realistic cashier history
export const SEED_STUDENT_PAYMENTS: StudentPaymentPlan[] = PREMIER_OFFICIAL_STUDENTS.map((st, idx) => {
  const isFree = st.payment_type === 'free';
  const isCustom = st.payment_type === 'custom';
  const monthlyFee = isFree ? 0 : (st.custom_fee || (isCustom ? 400000 : 500000));
  const totalFee = monthlyFee * 3;
  const discountPercent = isFree ? 100 : (st.custom_fee && st.custom_fee < 500000 ? Math.round((1 - st.custom_fee / 500000) * 100) : 0);
  const discountReason = isFree 
    ? "100% Grant / Bepul ta'lim" 
    : (discountPercent > 0 ? "Maxsus kelishilgan to'lov stavkasi" : undefined);

  // Realistic distribution for first installment:
  // idx 1 and idx 7 are overdue (due 2026-09-10)
  // idx % 3 === 0: paid via cash
  // idx % 4 === 1: paid via card
  // idx % 5 === 2: paid via click
  // idx % 6 === 3: paid via payme
  // free students: 100% paid
  const isOverdue = !isFree && (idx === 1 || idx === 7 || idx === 15);
  const isSch1Paid = isFree || (!isOverdue && (idx % 2 === 0 || idx % 3 === 1));

  const method: PaymentMethod = isFree ? 'cash' :
    idx % 4 === 0 ? 'cash' :
    idx % 4 === 1 ? 'card' :
    idx % 4 === 2 ? 'click' : 'payme';

  const sch1PaidDate = isSch1Paid ? (isFree ? '2026-09-01' : `2026-09-0${(idx % 9) + 1}`) : undefined;
  const sch1DueDate = isOverdue ? '2026-09-10' : '2026-09-25';
  const sch1ReceiptNo = isSch1Paid ? `RCP-2026-0${100 + idx}` : undefined;
  const sch1TxnId = isSch1Paid ? `${method.toUpperCase().slice(0, 3)}-${492000 + idx}` : undefined;

  const schedules: PaymentScheduleItem[] = [
    {
      id: `sch-${st.id}-1`,
      installment_number: 1,
      title: "1-oy: Sentyabr to'lovi",
      amount: monthlyFee,
      due_date: sch1DueDate,
      paid_date: sch1PaidDate,
      status: isSch1Paid ? 'paid' : (isOverdue ? 'overdue' : 'pending'),
      payment_method: isSch1Paid ? method : undefined,
      receipt_no: sch1ReceiptNo,
      transaction_id: sch1TxnId,
      notes: isFree ? "Grant asosida ta'lim" : (isSch1Paid ? "1-oy to'lovi to'liq qabul qilindi" : undefined)
    },
    {
      id: `sch-${st.id}-2`,
      installment_number: 2,
      title: "2-oy: Oktyabr to'lovi",
      amount: monthlyFee,
      due_date: '2026-10-25',
      paid_date: isFree ? '2026-10-01' : undefined,
      status: isFree ? 'paid' : 'pending',
      payment_method: isFree ? 'cash' : undefined,
      notes: isFree ? "Grant asosida ta'lim" : "Navbatdagi to'lov"
    },
    {
      id: `sch-${st.id}-3`,
      installment_number: 3,
      title: "3-oy: Noyabr to'lovi",
      amount: monthlyFee,
      due_date: '2026-11-25',
      paid_date: isFree ? '2026-11-01' : undefined,
      status: isFree ? 'paid' : 'pending',
      payment_method: isFree ? 'cash' : undefined,
      notes: isFree ? "Grant asosida ta'lim" : "3-oy to'lovi"
    }
  ];

  const paidAmount = schedules.filter(s => s.status === 'paid').reduce((a, b) => a + b.amount, 0);
  const remainingAmount = Math.max(0, totalFee - paidAmount);
  const overallStatus: PaymentStatus = isFree ? 'paid' : (remainingAmount === 0 ? 'paid' : isOverdue ? 'overdue' : paidAmount > 0 ? 'partial' : 'pending');

  return {
    id: `pay-plan-${st.id}`,
    student_id: st.id,
    student_name: st.full_name,
    student_phone: st.phone || '',
    student_email: st.email,
    group_id: st.group_id || 'unassigned',
    group_name: st.group_name || "Guruhga biriktirilmagan",
    course_title: "General English & IELTS Accelerator",
    plan_type: isFree ? 'custom' : (isCustom ? 'custom' : 'monthly'),
    base_monthly_fee: monthlyFee,
    total_course_fee: totalFee,
    discount_percent: discountPercent,
    discount_reason: discountReason,
    final_total_fee: totalFee,
    paid_amount: paidAmount,
    remaining_amount: remainingAmount,
    overall_status: overallStatus,
    next_due_date: isOverdue ? sch1DueDate : (isSch1Paid ? '2026-10-25' : '2026-09-25'),
    created_at: st.created_at || '2026-02-01',
    schedules
  };
});


export const SEED_STUDENT_ACTIVITIES: StudentActivityMetric[] = PREMIER_OFFICIAL_STUDENTS.map((st) => ({
  id: `act-${st.id}`,
  student_id: st.id,
  student_name: st.full_name,
  student_avatar: st.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(st.full_name)}&background=4f46e5&color=fff`,
  group_name: st.group_name || "Premier O'quvchisi",
  level: st.level || 'B1',
  status: 'offline',
  device: 'desktop',
  last_active: 'Hali kirmagan',
  total_time_minutes: 0,
  today_time_minutes: 0,
  weekly_time_minutes: 0,
  module_breakdown: {
    speaking_minutes: 0,
    listening_tactics_minutes: 0,
    vocabulary_4000_minutes: 0,
    reading_minutes: 0,
    writing_toefl_minutes: 0,
    grammar_minutes: 0,
    homework_minutes: 0
  },
  parameter_mastery: {
    fluency: 0,
    lexical_resource: 0,
    pronunciation: 0,
    grammar_accuracy: 0,
    listening_accuracy_percent: 0
  },
  tactics_units_done: 0,
  words_mastered: 0,
  speaking_sessions_count: 0,
  homework_completion_rate: 0
}));

export const SEED_TEACHER_ACTIVITIES: TeacherActivityMetric[] = [
  {
    id: 'teach-1',
    teacher_id: 'user-admin-1',
    teacher_name: 'Nodirjon Safoyev',
    teacher_title: 'Premier School Asoschisi & Bosh Mentor',
    avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop',
    active_groups_count: 3,
    total_students_count: 36,
    total_teaching_hours: 0,
    today_hours: 0,
    homeworks_assigned: 0,
    homeworks_graded: 0,
    avg_grading_turnaround_hours: 0,
    feedback_quality_score: 5.0,
    attendance_logging_rate: 100,
    last_active: 'Darslar kutilmoqda',
    status: 'offline'
  },
  {
    id: 'teach-2',
    teacher_id: 'user-teacher-1',
    teacher_name: 'Malika Karimova',
    teacher_title: 'Senior English Teacher (CELTA)',
    avatar_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop',
    active_groups_count: 3,
    total_students_count: 36,
    total_teaching_hours: 0,
    today_hours: 0,
    homeworks_assigned: 0,
    homeworks_graded: 0,
    avg_grading_turnaround_hours: 0,
    feedback_quality_score: 5.0,
    attendance_logging_rate: 100,
    last_active: 'Darslar kutilmoqda',
    status: 'offline'
  }
];

export const SEED_PLATFORM_AUDIT: PlatformAuditAction[] = [];

// LocalStorage helpers for persistence
export function getStoredStudentPayments(): StudentPaymentPlan[] {
  // Plans are created by the admin and loaded from Supabase; no demo seeding.
  return getStorageItem<StudentPaymentPlan[]>('premier_student_payments', []);
}

export function saveStoredStudentPayments(plans: StudentPaymentPlan[]) {
  setStorageItem('premier_student_payments', plans);
  // Only staff can write plans; for anyone else RLS rejects the upsert.
  void syncCollection('payment_plans', plans, { studentIdOf: p => p.student_id });
}

export interface PaymentTransactionItem {
  id: string;
  receipt_no: string;
  student_id: string;
  student_name: string;
  student_phone?: string;
  student_email?: string;
  group_name: string;
  course_title: string;
  amount: number;
  payment_method: PaymentMethod;
  transaction_id: string;
  paid_date: string;
  installment_title: string;
  notes?: string;
  plan_id: string;
  schedule_id: string;
}

/**
 * Flattens all paid installment items across all plans into a sorted chronological transaction ledger
 */
export function getAllPaymentTransactions(plans: StudentPaymentPlan[]): PaymentTransactionItem[] {
  const list: PaymentTransactionItem[] = [];

  plans.forEach(plan => {
    plan.schedules.forEach(item => {
      if (item.status === 'paid' && item.paid_date && item.amount > 0) {
        list.push({
          id: `${plan.id}-${item.id}`,
          receipt_no: item.receipt_no || `RCP-${item.id.replace(/[^0-9]/g, '').slice(-6)}`,
          student_id: plan.student_id,
          student_name: plan.student_name,
          student_phone: plan.student_phone,
          student_email: plan.student_email,
          group_name: plan.group_name,
          course_title: plan.course_title,
          amount: item.amount,
          payment_method: item.payment_method || 'cash',
          transaction_id: item.transaction_id || `TXN-${Math.floor(100000 + Math.random() * 900000)}`,
          paid_date: item.paid_date,
          installment_title: item.title,
          notes: item.notes,
          plan_id: plan.id,
          schedule_id: item.id
        });
      }
    });
  });

  // Sort descending: newest payments first
  return list.sort((a, b) => b.paid_date.localeCompare(a.paid_date));
}

/**
 * Synchronizes plans with an arbitrary list of profiles (e.g. from LMSDataContext or premier_all_students)
 */
export function syncPaymentsWithAllStudents(_allStudents: unknown[]): StudentPaymentPlan[] {
  // Plans are no longer generated automatically with made-up fees and dates;
  // the admin creates each student's plan from the payments page.
  return getStoredStudentPayments();
}

export function getStoredStudentActivities(): StudentActivityMetric[] {
  const stored = getStorageItem<StudentActivityMetric[]>('premier_student_activities', []);
  const hasFakeMinutes = stored.some(a => a.total_time_minutes > 500);
  const valid = stored.filter(a => 
    a.student_name !== 'Alisher Usmonov' && 
    a.student_name !== 'Malika Toirova' &&
    a.student_name !== 'Jasur Bekmurodov'
  );
  return hasFakeMinutes ? [] : valid;
}

export function saveStoredStudentActivities(acts: StudentActivityMetric[]) {
  setStorageItem('premier_student_activities', acts);
}

export function getStoredTeacherActivities(): TeacherActivityMetric[] {
  const stored = getStorageItem<TeacherActivityMetric[]>('premier_teacher_activities', []);
  const hasFakeHours = stored.some(t => t.total_teaching_hours > 50);
  return hasFakeHours ? [] : stored;
}

export function getStoredPlatformAudit(): PlatformAuditAction[] {
  const stored = getStorageItem<PlatformAuditAction[]>('premier_platform_audit', []);
  const hasFakeLogs = stored.some(a => a.id === 'aud-1' || a.action_description.includes("Unit 1 bo'yicha"));
  return hasFakeLogs ? [] : stored;
}
