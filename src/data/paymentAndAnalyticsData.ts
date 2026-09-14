import { 
  StudentPaymentPlan, StudentActivityMetric, 
  TeacherActivityMetric, PlatformAuditAction, PaymentReceipt, PaymentStatus, PaymentMethod 
} from '../types';
import { getStorageItem, setStorageItem } from '../lib/storage';
import { PREMIER_OFFICIAL_STUDENTS } from './premierStudentsData';

// Dynamically generate payment plans for all 36 real Premier students
export const SEED_STUDENT_PAYMENTS: StudentPaymentPlan[] = PREMIER_OFFICIAL_STUDENTS.map((st) => {
  const isFree = st.payment_type === 'free';
  const isCustom = st.payment_type === 'custom';
  const monthlyFee = isFree ? 0 : (st.custom_fee || (isCustom ? 400000 : 500000));
  const totalFee = monthlyFee * 3;
  const isPaid = isFree;
  const discountPercent = isFree ? 100 : (st.custom_fee && st.custom_fee < 500000 ? Math.round((1 - st.custom_fee / 500000) * 100) : 0);
  const discountReason = isFree 
    ? "100% Grant / Bepul ta'lim" 
    : (discountPercent > 0 ? "Maxsus kelishilgan to'lov stavkasi" : undefined);

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
    paid_amount: isPaid ? totalFee : 0,
    remaining_amount: isPaid ? 0 : totalFee,
    overall_status: isPaid ? 'paid' : 'pending',
    next_due_date: '2026-09-25',
    created_at: st.created_at || '2026-02-01',
    schedules: [
      {
        id: `sch-${st.id}-1`,
        installment_number: 1,
        title: "1-oy: Sentyabr to'lovi",
        amount: monthlyFee,
        due_date: '2026-09-25',
        paid_date: isPaid ? '2026-09-01' : undefined,
        status: isPaid ? 'paid' : 'pending',
        notes: isFree ? "Grant asosida ta'lim" : "Kassaga naqd yoki Click/Payme orqali"
      },
      {
        id: `sch-${st.id}-2`,
        installment_number: 2,
        title: "2-oy: Oktyabr to'lovi",
        amount: monthlyFee,
        due_date: '2026-10-25',
        paid_date: isPaid ? '2026-10-01' : undefined,
        status: isPaid ? 'paid' : 'pending',
        notes: isFree ? "Grant asosida ta'lim" : "Navbatdagi to'lov"
      },
      {
        id: `sch-${st.id}-3`,
        installment_number: 3,
        title: "3-oy: Noyabr to'lovi",
        amount: monthlyFee,
        due_date: '2026-11-25',
        paid_date: isPaid ? '2026-11-01' : undefined,
        status: isPaid ? 'paid' : 'pending',
        notes: isFree ? "Grant asosida ta'lim" : "3-oy to'lovi"
      }
    ]
  };
});


export const SEED_STUDENT_ACTIVITIES: StudentActivityMetric[] = [
  {
    id: 'act-1',
    student_id: 'student-official-1',
    student_name: 'Shahzoda Ilhomova',
    student_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop',
    group_name: "Premier O'quvchisi",
    level: 'Intermediate B1',
    status: 'online',
    device: 'desktop',
    last_active: 'Ayni paytda faol',
    total_time_minutes: 2480,
    today_time_minutes: 145,
    weekly_time_minutes: 680,
    module_breakdown: {
      speaking_minutes: 740,
      listening_tactics_minutes: 680,
      vocabulary_4000_minutes: 420,
      reading_minutes: 290,
      writing_toefl_minutes: 210,
      grammar_minutes: 80,
      homework_minutes: 60
    },
    parameter_mastery: {
      fluency: 7.5,
      lexical_resource: 8.0,
      pronunciation: 7.5,
      grammar_accuracy: 7.0,
      listening_accuracy_percent: 94
    },
    tactics_units_done: 16,
    words_mastered: 680,
    speaking_sessions_count: 28,
    homework_completion_rate: 96
  },
  {
    id: 'act-2',
    student_id: 'student-official-2',
    student_name: 'Shahnoza Kodirova',
    student_avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop',
    group_name: "Premier O'quvchisi",
    level: 'Intermediate B1',
    status: 'online',
    device: 'mobile',
    last_active: '5 daqiqa oldin',
    total_time_minutes: 2120,
    today_time_minutes: 110,
    weekly_time_minutes: 540,
    module_breakdown: {
      speaking_minutes: 810,
      listening_tactics_minutes: 520,
      vocabulary_4000_minutes: 360,
      reading_minutes: 210,
      writing_toefl_minutes: 130,
      grammar_minutes: 50,
      homework_minutes: 40
    },
    parameter_mastery: {
      fluency: 8.0,
      lexical_resource: 7.5,
      pronunciation: 8.0,
      grammar_accuracy: 7.5,
      listening_accuracy_percent: 90
    },
    tactics_units_done: 14,
    words_mastered: 590,
    speaking_sessions_count: 34,
    homework_completion_rate: 100
  },
  {
    id: 'act-3',
    student_id: 'student-official-3',
    student_name: "O'lmas Rasulov",
    student_avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop',
    group_name: "Premier O'quvchisi",
    level: 'Intermediate B1',
    status: 'idle',
    device: 'desktop',
    last_active: '42 daqiqa oldin',
    total_time_minutes: 1340,
    today_time_minutes: 45,
    weekly_time_minutes: 320,
    module_breakdown: {
      speaking_minutes: 280,
      listening_tactics_minutes: 410,
      vocabulary_4000_minutes: 310,
      reading_minutes: 160,
      writing_toefl_minutes: 90,
      grammar_minutes: 60,
      homework_minutes: 30
    },
    parameter_mastery: {
      fluency: 6.0,
      lexical_resource: 6.5,
      pronunciation: 6.0,
      grammar_accuracy: 6.5,
      listening_accuracy_percent: 78
    },
    tactics_units_done: 8,
    words_mastered: 340,
    speaking_sessions_count: 12,
    homework_completion_rate: 80
  },
  {
    id: 'act-4',
    student_id: 'student-official-6',
    student_name: 'Dilnoza Rajabova',
    student_avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop',
    group_name: "Premier O'quvchisi",
    level: 'Intermediate B1',
    status: 'offline',
    device: 'tablet',
    last_active: 'Bugun, 11:20 da',
    total_time_minutes: 1680,
    today_time_minutes: 75,
    weekly_time_minutes: 410,
    module_breakdown: {
      speaking_minutes: 450,
      listening_tactics_minutes: 480,
      vocabulary_4000_minutes: 390,
      reading_minutes: 180,
      writing_toefl_minutes: 100,
      grammar_minutes: 50,
      homework_minutes: 30
    },
    parameter_mastery: {
      fluency: 6.5,
      lexical_resource: 7.0,
      pronunciation: 6.5,
      grammar_accuracy: 7.0,
      listening_accuracy_percent: 85
    },
    tactics_units_done: 11,
    words_mastered: 420,
    speaking_sessions_count: 19,
    homework_completion_rate: 92
  },
  {
    id: 'act-5',
    student_id: 'student-official-8',
    student_name: 'Manzura Sayfullayeva',
    student_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop',
    group_name: "Premier O'quvchisi",
    level: 'Intermediate B1',
    status: 'offline',
    device: 'desktop',
    last_active: 'Kecha, 21:40 da',
    total_time_minutes: 1890,
    today_time_minutes: 0,
    weekly_time_minutes: 390,
    module_breakdown: {
      speaking_minutes: 560,
      listening_tactics_minutes: 490,
      vocabulary_4000_minutes: 310,
      reading_minutes: 270,
      writing_toefl_minutes: 180,
      grammar_minutes: 45,
      homework_minutes: 35
    },
    parameter_mastery: {
      fluency: 7.0,
      lexical_resource: 7.5,
      pronunciation: 7.0,
      grammar_accuracy: 7.5,
      listening_accuracy_percent: 88
    },
    tactics_units_done: 12,
    words_mastered: 510,
    speaking_sessions_count: 22,
    homework_completion_rate: 89
  }
];

export const SEED_TEACHER_ACTIVITIES: TeacherActivityMetric[] = [
  {
    id: 'teach-1',
    teacher_id: 'user-admin-1',
    teacher_name: 'Nodirjon Safoyev',
    teacher_title: 'Premier School Asoschisi & Bosh Mentor',
    avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop',
    active_groups_count: 3,
    total_students_count: 36,
    total_teaching_hours: 312,
    today_hours: 6.5,
    homeworks_assigned: 42,
    homeworks_graded: 188,
    avg_grading_turnaround_hours: 1.8,
    feedback_quality_score: 4.96,
    attendance_logging_rate: 99.2,
    last_active: 'Ayni paytda darsda / platformada',
    status: 'online'
  },
  {
    id: 'teach-2',
    teacher_id: 'user-teacher-1',
    teacher_name: 'Malika Karimova',
    teacher_title: 'Senior English Teacher (CELTA)',
    avatar_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop',
    active_groups_count: 3,
    total_students_count: 36,
    total_teaching_hours: 240,
    today_hours: 5.0,
    homeworks_assigned: 31,
    homeworks_graded: 142,
    avg_grading_turnaround_hours: 2.4,
    feedback_quality_score: 4.88,
    attendance_logging_rate: 96.5,
    last_active: '15 daqiqa oldin',
    status: 'online'
  }
];

export const SEED_PLATFORM_AUDIT: PlatformAuditAction[] = [
  {
    id: 'aud-1',
    timestamp: '2026-09-14 17:30:10',
    actor_name: 'Shahzoda Ilhomova',
    actor_role: 'student',
    module: 'listening',
    action_description: 'Tactics for Listening: Unit 1 bo\'yicha topshiriqni bajardi (Ball: 95%)',
    duration_minutes: 18,
    device: 'Desktop Chrome'
  },
  {
    id: 'aud-2',
    timestamp: '2026-09-14 17:15:05',
    actor_name: 'Manzura Sayfullayeva',
    actor_role: 'student',
    module: 'speaking',
    action_description: 'Mr. Safoyev AI Voice bilan Speaking Part 2 mashqi o\'tkazdi (Fluency: 7.5)',
    duration_minutes: 22,
    device: 'Mobile Safari'
  },
  {
    id: 'aud-3',
    timestamp: '2026-09-14 16:50:40',
    actor_name: 'Nodirjon Safoyev',
    actor_role: 'teacher',
    module: 'homework',
    action_description: "General English guruhining uy vazifalarini ko'rib chiqdi",
    duration_minutes: 35,
    device: 'MacBook Pro'
  },
  {
    id: 'aud-4',
    timestamp: '2026-09-14 16:30:15',
    actor_name: 'Administrator',
    actor_role: 'admin',
    module: 'payment',
    action_description: "Manzura Sayfullayeva maxsus oylik to'lov kvitansiyasini tasdiqladi (400,000 UZS)",
    device: 'Admin Portal'
  },
  {
    id: 'aud-5',
    timestamp: '2026-09-14 16:10:00',
    actor_name: "O'lmas Rasulov",
    actor_role: 'student',
    module: 'vocabulary',
    action_description: '4000 Essential English Words: Book 1, Unit 1 testida 20 ta yangi so\'zni o\'zlashtirdi',
    duration_minutes: 25,
    device: 'Desktop Windows'
  }
];

// LocalStorage helpers for persistence
export function getStoredStudentPayments(): StudentPaymentPlan[] {
  const stored = getStorageItem<StudentPaymentPlan[]>('premier_student_payments', []);
  // Purge any legacy dummy plans referencing old template demo names
  const validStored = stored.filter(p => 
    !p.student_id.startsWith('student-1') && 
    !p.student_id.startsWith('student-2') && 
    !p.student_id.startsWith('student-3') && 
    !p.student_id.startsWith('student-4') && 
    !p.student_id.startsWith('student-5') &&
    p.student_name !== 'Alisher Usmonov' &&
    p.student_name !== 'Malika Toirova' &&
    p.student_name !== 'Jasur Bekmurodov' &&
    p.student_name !== 'Dilnoza Karimova' &&
    p.student_name !== 'Shaxzod Rahimov'
  );

  if (validStored.length === 0) {
    setStorageItem('premier_student_payments', SEED_STUDENT_PAYMENTS);
    return SEED_STUDENT_PAYMENTS;
  }

  // Ensure all 36 real students exist in the stored payments
  const storedMap = new Map(validStored.map(p => [p.student_id, p]));
  let hasNew = false;
  SEED_STUDENT_PAYMENTS.forEach(seedPlan => {
    if (!storedMap.has(seedPlan.student_id)) {
      validStored.push(seedPlan);
      hasNew = true;
    }
  });

  if (hasNew) {
    setStorageItem('premier_student_payments', validStored);
  }

  return validStored;
}

export function saveStoredStudentPayments(plans: StudentPaymentPlan[]) {
  setStorageItem('premier_student_payments', plans);
}

export function getStoredStudentActivities(): StudentActivityMetric[] {
  const stored = getStorageItem<StudentActivityMetric[]>('premier_student_activities', []);
  const valid = stored.filter(a => 
    a.student_name !== 'Alisher Usmonov' && 
    a.student_name !== 'Malika Toirova' &&
    a.student_name !== 'Jasur Bekmurodov'
  );
  if (valid.length === 0) {
    setStorageItem('premier_student_activities', SEED_STUDENT_ACTIVITIES);
    return SEED_STUDENT_ACTIVITIES;
  }
  return valid;
}

export function saveStoredStudentActivities(acts: StudentActivityMetric[]) {
  setStorageItem('premier_student_activities', acts);
}

export function getStoredTeacherActivities(): TeacherActivityMetric[] {
  return getStorageItem('premier_teacher_activities', SEED_TEACHER_ACTIVITIES);
}

export function getStoredPlatformAudit(): PlatformAuditAction[] {
  return getStorageItem('premier_platform_audit', SEED_PLATFORM_AUDIT);
}
