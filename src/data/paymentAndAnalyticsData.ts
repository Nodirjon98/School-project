import { 
  StudentPaymentPlan, StudentActivityMetric, 
  TeacherActivityMetric, PlatformAuditAction, PaymentReceipt, PaymentStatus, PaymentMethod 
} from '../types';
import { getStorageItem, setStorageItem } from '../lib/storage';

export const SEED_STUDENT_PAYMENTS: StudentPaymentPlan[] = [
  {
    id: 'pay-plan-1',
    student_id: 'student-1',
    student_name: 'Alisher Usmonov',
    student_phone: '+998 90 123 45 67',
    student_email: 'alisher@premier.uz',
    group_id: 'group-1',
    group_name: 'IELTS Intensive 7.5+ (Oybek)',
    course_title: 'IELTS Master Course (3 Months)',
    plan_type: 'monthly',
    base_monthly_fee: 1400000,
    total_course_fee: 4200000,
    discount_percent: 15,
    discount_reason: 'IELTS 7.5+ Scholarship Grant',
    final_total_fee: 3570000,
    paid_amount: 2380000,
    remaining_amount: 1190000,
    overall_status: 'partial',
    next_due_date: '2026-09-25',
    created_at: '2026-07-01',
    schedules: [
      {
        id: 'sch-1-1',
        installment_number: 1,
        title: "1-oy: Iyul to'lovi",
        amount: 1190000,
        due_date: '2026-07-05',
        paid_date: '2026-07-04',
        status: 'paid',
        payment_method: 'click',
        transaction_id: 'CLK-98421045',
        receipt_no: 'RCP-2026-0704',
        notes: "O'z vaqtida to'landi"
      },
      {
        id: 'sch-1-2',
        installment_number: 2,
        title: "2-oy: Avgust to'lovi",
        amount: 1190000,
        due_date: '2026-08-05',
        paid_date: '2026-08-05',
        status: 'paid',
        payment_method: 'payme',
        transaction_id: 'PAY-44120934',
        receipt_no: 'RCP-2026-0805',
        notes: "Payme orqali qabul qilindi"
      },
      {
        id: 'sch-1-3',
        installment_number: 3,
        title: "3-oy: Sentyabr to'lovi",
        amount: 1190000,
        due_date: '2026-09-25',
        status: 'pending',
        notes: "Imtihon oldi yakuniy to'lov"
      }
    ]
  },
  {
    id: 'pay-plan-2',
    student_id: 'student-2',
    student_name: 'Malika Toirova',
    student_phone: '+998 93 987 65 43',
    student_email: 'malika@premier.uz',
    group_id: 'group-1',
    group_name: 'IELTS Intensive 7.5+ (Oybek)',
    course_title: 'IELTS Master Course (3 Months)',
    plan_type: 'full_course',
    base_monthly_fee: 1400000,
    total_course_fee: 4200000,
    discount_percent: 20,
    discount_reason: "To'liq oldindan to'lov chegirmasi",
    final_total_fee: 3360000,
    paid_amount: 3360000,
    remaining_amount: 0,
    overall_status: 'paid',
    next_due_date: '2026-10-01',
    created_at: '2026-07-01',
    schedules: [
      {
        id: 'sch-2-1',
        installment_number: 1,
        title: "To'liq kurs (3 oy) to'lovi",
        amount: 3360000,
        due_date: '2026-07-05',
        paid_date: '2026-07-03',
        status: 'paid',
        payment_method: 'bank_transfer',
        transaction_id: 'BNK-7721890',
        receipt_no: 'RCP-2026-0703',
        notes: "Hisob raqamiga to'liq o'tkazilgan"
      }
    ]
  },
  {
    id: 'pay-plan-3',
    student_id: 'student-3',
    student_name: 'Jasur Bekmurodov',
    student_phone: '+998 97 555 11 22',
    student_email: 'jasur@premier.uz',
    group_id: 'group-2',
    group_name: 'General English B2 (Chorsu)',
    course_title: 'General English Upper-Intermediate',
    plan_type: 'monthly',
    base_monthly_fee: 1100000,
    total_course_fee: 3300000,
    discount_percent: 0,
    final_total_fee: 3300000,
    paid_amount: 1100000,
    remaining_amount: 2200000,
    overall_status: 'overdue',
    next_due_date: '2026-09-02',
    created_at: '2026-08-01',
    schedules: [
      {
        id: 'sch-3-1',
        installment_number: 1,
        title: "1-oy: Avgust to'lovi",
        amount: 1100000,
        due_date: '2026-08-05',
        paid_date: '2026-08-05',
        status: 'paid',
        payment_method: 'cash',
        receipt_no: 'RCP-2026-0805B',
        notes: "Kassaga naqd topshirildi"
      },
      {
        id: 'sch-3-2',
        installment_number: 2,
        title: "2-oy: Sentyabr to'lovi",
        amount: 1100000,
        due_date: '2026-09-02',
        status: 'overdue',
        notes: "Muddati 4 kun o'tgan, eslatma yuborildi"
      },
      {
        id: 'sch-3-3',
        installment_number: 3,
        title: "3-oy: Oktyabr to'lovi",
        amount: 1100000,
        due_date: '2026-10-02',
        status: 'pending',
        notes: "Kelasi oy rejasi"
      }
    ]
  },
  {
    id: 'pay-plan-4',
    student_id: 'student-4',
    student_name: 'Dilnoza Karimova',
    student_phone: '+998 94 444 88 99',
    student_email: 'dilnoza@premier.uz',
    group_id: 'group-2',
    group_name: 'General English B2 (Chorsu)',
    course_title: 'General English Upper-Intermediate',
    plan_type: 'monthly',
    base_monthly_fee: 1100000,
    total_course_fee: 3300000,
    discount_percent: 10,
    discount_reason: "Oila a'zosi chegirmasi",
    final_total_fee: 2970000,
    paid_amount: 1980000,
    remaining_amount: 990000,
    overall_status: 'partial',
    next_due_date: '2026-09-20',
    created_at: '2026-07-15',
    schedules: [
      {
        id: 'sch-4-1',
        installment_number: 1,
        title: "1-oy to'lovi",
        amount: 990000,
        due_date: '2026-07-20',
        paid_date: '2026-07-19',
        status: 'paid',
        payment_method: 'uzum',
        transaction_id: 'UZM-332901',
        receipt_no: 'RCP-2026-0719',
        notes: "Uzum Bank orqali to'landi"
      },
      {
        id: 'sch-4-2',
        installment_number: 2,
        title: "2-oy to'lovi",
        amount: 990000,
        due_date: '2026-08-20',
        paid_date: '2026-08-20',
        status: 'paid',
        payment_method: 'click',
        transaction_id: 'CLK-118934',
        receipt_no: 'RCP-2026-0820',
        notes: "Click orqali to'landi"
      },
      {
        id: 'sch-4-3',
        installment_number: 3,
        title: "3-oy to'lovi",
        amount: 990000,
        due_date: '2026-09-20',
        status: 'pending',
        notes: "Navbatdagi to'lov"
      }
    ]
  },
  {
    id: 'pay-plan-5',
    student_id: 'student-5',
    student_name: 'Shaxzod Rahimov',
    student_phone: '+998 91 333 77 11',
    student_email: 'shaxzod@premier.uz',
    group_id: 'group-3',
    group_name: 'TOEFL iBT Mastery (Online)',
    course_title: 'TOEFL iBT 100+ Score Accelerator',
    plan_type: 'monthly',
    base_monthly_fee: 1500000,
    total_course_fee: 4500000,
    discount_percent: 0,
    final_total_fee: 4500000,
    paid_amount: 3000000,
    remaining_amount: 1500000,
    overall_status: 'partial',
    next_due_date: '2026-09-18',
    created_at: '2026-07-10',
    schedules: [
      {
        id: 'sch-5-1',
        installment_number: 1,
        title: "1-oy to'lovi",
        amount: 1500000,
        due_date: '2026-07-18',
        paid_date: '2026-07-17',
        status: 'paid',
        payment_method: 'payme',
        receipt_no: 'RCP-2026-0717',
      },
      {
        id: 'sch-5-2',
        installment_number: 2,
        title: "2-oy to'lovi",
        amount: 1500000,
        due_date: '2026-08-18',
        paid_date: '2026-08-18',
        status: 'paid',
        payment_method: 'payme',
        receipt_no: 'RCP-2026-0818',
      },
      {
        id: 'sch-5-3',
        installment_number: 3,
        title: "3-oy to'lovi",
        amount: 1500000,
        due_date: '2026-09-18',
        status: 'pending',
      }
    ]
  }
];

export const SEED_STUDENT_ACTIVITIES: StudentActivityMetric[] = [
  {
    id: 'act-1',
    student_id: 'student-1',
    student_name: 'Alisher Usmonov',
    student_avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop',
    group_name: 'IELTS Intensive 7.5+ (Oybek)',
    level: 'Advanced C1',
    status: 'online',
    device: 'desktop',
    last_active: 'Ayni paytda faol',
    total_time_minutes: 2480, // 41h 20m
    today_time_minutes: 145,  // 2h 25m
    weekly_time_minutes: 680, // 11h 20m
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
    student_id: 'student-2',
    student_name: 'Malika Toirova',
    student_avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop',
    group_name: 'IELTS Intensive 7.5+ (Oybek)',
    level: 'Advanced C1',
    status: 'online',
    device: 'mobile',
    last_active: '5 daqiqa oldin',
    total_time_minutes: 2120, // 35h 20m
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
    student_id: 'student-3',
    student_name: 'Jasur Bekmurodov',
    student_avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop',
    group_name: 'General English B2 (Chorsu)',
    level: 'Upper-Intermediate B2',
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
    student_id: 'student-4',
    student_name: 'Dilnoza Karimova',
    student_avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop',
    group_name: 'General English B2 (Chorsu)',
    level: 'Upper-Intermediate B2',
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
    student_id: 'student-5',
    student_name: 'Shaxzod Rahimov',
    student_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop',
    group_name: 'TOEFL iBT Mastery (Online)',
    level: 'Advanced C1',
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
    teacher_id: 'teacher-1',
    teacher_name: 'Nodirjon Safoyev',
    teacher_title: 'Bosh IELTS Mentor & Akustika Eksperti',
    avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop',
    active_groups_count: 4,
    total_students_count: 48,
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
    teacher_id: 'teacher-2',
    teacher_name: 'Aziza Karimova',
    teacher_title: 'Senior General English Teacher',
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
    timestamp: '2026-09-06 21:42:10',
    actor_name: 'Alisher Usmonov',
    actor_role: 'student',
    module: 'listening',
    action_description: 'Tactics for Listening: Unit 1 "Introductions and Names" 2-trekni muvaffaqiyatli tinglab topshirdi (Ball: 95%)',
    duration_minutes: 18,
    device: 'Desktop (Chrome Mac)'
  },
  {
    id: 'aud-2',
    timestamp: '2026-09-06 21:30:05',
    actor_name: 'Malika Toirova',
    actor_role: 'student',
    module: 'speaking',
    action_description: 'Mr. Safoyev AI Voice bilan "Environmental Policy" mavzusida IELTS Part 2 suhbati o\'tkazdi (Fluency: 8.0)',
    duration_minutes: 22,
    device: 'iPhone 15 (Safari Mobile)'
  },
  {
    id: 'aud-3',
    timestamp: '2026-09-06 21:05:40',
    actor_name: 'Nodirjon Safoyev',
    actor_role: 'teacher',
    module: 'homework',
    action_description: 'IELTS Intensive guruhining 6 ta insho topshirig\'ini tahlil qildi va batafsil audio-feedback qoldirdi',
    duration_minutes: 45,
    device: 'MacBook Pro'
  },
  {
    id: 'aud-4',
    timestamp: '2026-09-06 20:45:15',
    actor_name: 'Administrator',
    actor_role: 'admin',
    module: 'payment',
    action_description: "Malika Toirova to'liq kurs to'lovi kvitansiyasini tasdiqladi (3,360,000 UZS)",
    device: 'Admin Portal'
  },
  {
    id: 'aud-5',
    timestamp: '2026-09-06 20:10:00',
    actor_name: 'Jasur Bekmurodov',
    actor_role: 'student',
    module: 'vocabulary',
    action_description: '4000 Essential English Words: Book 2, Unit 4 testida 25 ta yangi so\'zni o\'zlashtirdi',
    duration_minutes: 25,
    device: 'Desktop Windows'
  }
];

// LocalStorage helpers for persistence
export function getStoredStudentPayments(): StudentPaymentPlan[] {
  return getStorageItem('premier_student_payments', SEED_STUDENT_PAYMENTS);
}

export function saveStoredStudentPayments(plans: StudentPaymentPlan[]) {
  setStorageItem('premier_student_payments', plans);
}

export function getStoredStudentActivities(): StudentActivityMetric[] {
  return getStorageItem('premier_student_activities', SEED_STUDENT_ACTIVITIES);
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
