export interface DailyLearningTimeDataPoint {
  date: string;
  dayLabel: string;
  totalMinutes: number;
  avgMinutesPerStudent: number;
  speakingMinutes: number;
  listeningMinutes: number;
  vocabMinutes: number;
  readingMinutes: number;
  grammarQuizMinutes: number;
  targetMinutes: number;
  activeLearners: number;
}

export interface DayOfWeekEngagement {
  day: string;
  avgMinutes: number;
  peakHour: string;
  sessionsCount: number;
}

export interface ModuleCompletionDataPoint {
  id: string;
  name: string;
  shortName: string;
  category: string;
  completionRate: number; // 0 - 100
  targetBenchmark: number; // e.g. 75%
  totalUnitsOrItems: number;
  completedUnitsAvg: number;
  activeStudents: number;
  color: string;
  statusBreakdown: {
    completed: number; // %
    inProgress: number; // %
    notStarted: number; // %
  };
}

export interface GroupModuleCompletion {
  groupName: string;
  listening: number;
  speaking: number;
  vocab: number;
  reading: number;
  grammar: number;
  overallAvg: number;
}

export interface QuizScoreCategory {
  id: string;
  name: string;
  shortName: string;
  avgScore: number;
  passingRate: number; // % scoring >= 70
  totalAttempts: number;
  highestScore: number;
  lowestScore: number;
  scoreRangeDistribution: {
    range: string;
    count: number;
    percentage: number;
    fill: string;
  }[];
}

export interface WeeklyQuizTrendPoint {
  week: string;
  avgScore: number;
  topScore: number;
  targetBenchmark: number;
  passingRate: number;
}

export interface StudentPerformanceRecord {
  id: string;
  name: string;
  avatar: string;
  email: string;
  groupName: string;
  level: string;
  avgDailyMinutes: number;
  totalTimeHours: number;
  moduleCompletionRate: number; // %
  avgQuizScore: number; // %
  quizzesCompleted: number;
  streakDays: number;
  status: 'mastery' | 'on_track' | 'needs_support';
  attendanceRate: number;
  moduleProgress: {
    listeningTactics: number;
    speakingSafoyev: number;
    vocab4000: number;
    readingCurriculum: number;
    grammarMastery: number;
  };
  recentQuizzes: {
    id: string;
    name: string;
    module: string;
    score: number;
    date: string;
    passed: boolean;
  }[];
  last7DaysMinutes: number[];
}

// 30-Day Daily Learning Time Seed Data
export const SEED_DAILY_LEARNING_TIME: DailyLearningTimeDataPoint[] = [
  { date: '2026-08-08', dayLabel: '08-Avg', totalMinutes: 1820, avgMinutesPerStudent: 38, speakingMinutes: 520, listeningMinutes: 540, vocabMinutes: 380, readingMinutes: 240, grammarQuizMinutes: 140, targetMinutes: 45, activeLearners: 42 },
  { date: '2026-08-09', dayLabel: '09-Avg', totalMinutes: 1950, avgMinutesPerStudent: 41, speakingMinutes: 580, listeningMinutes: 560, vocabMinutes: 410, readingMinutes: 250, grammarQuizMinutes: 150, targetMinutes: 45, activeLearners: 43 },
  { date: '2026-08-10', dayLabel: '10-Avg', totalMinutes: 2140, avgMinutesPerStudent: 45, speakingMinutes: 680, listeningMinutes: 610, vocabMinutes: 440, readingMinutes: 260, grammarQuizMinutes: 150, targetMinutes: 45, activeLearners: 45 },
  { date: '2026-08-11', dayLabel: '11-Avg', totalMinutes: 2310, avgMinutesPerStudent: 48, speakingMinutes: 720, listeningMinutes: 670, vocabMinutes: 470, readingMinutes: 280, grammarQuizMinutes: 170, targetMinutes: 45, activeLearners: 46 },
  { date: '2026-08-12', dayLabel: '12-Avg', totalMinutes: 2280, avgMinutesPerStudent: 47, speakingMinutes: 710, listeningMinutes: 660, vocabMinutes: 460, readingMinutes: 270, grammarQuizMinutes: 180, targetMinutes: 45, activeLearners: 46 },
  { date: '2026-08-13', dayLabel: '13-Avg', totalMinutes: 2450, avgMinutesPerStudent: 51, speakingMinutes: 790, listeningMinutes: 690, vocabMinutes: 490, readingMinutes: 290, grammarQuizMinutes: 190, targetMinutes: 45, activeLearners: 47 },
  { date: '2026-08-14', dayLabel: '14-Avg', totalMinutes: 2100, avgMinutesPerStudent: 44, speakingMinutes: 640, listeningMinutes: 620, vocabMinutes: 430, readingMinutes: 260, grammarQuizMinutes: 150, targetMinutes: 45, activeLearners: 44 },
  { date: '2026-08-15', dayLabel: '15-Avg', totalMinutes: 1740, avgMinutesPerStudent: 36, speakingMinutes: 490, listeningMinutes: 520, vocabMinutes: 370, readingMinutes: 220, grammarQuizMinutes: 140, targetMinutes: 45, activeLearners: 41 },
  { date: '2026-08-16', dayLabel: '16-Avg', totalMinutes: 1890, avgMinutesPerStudent: 39, speakingMinutes: 550, listeningMinutes: 560, vocabMinutes: 400, readingMinutes: 240, grammarQuizMinutes: 140, targetMinutes: 45, activeLearners: 42 },
  { date: '2026-08-17', dayLabel: '17-Avg', totalMinutes: 2380, avgMinutesPerStudent: 50, speakingMinutes: 760, listeningMinutes: 680, vocabMinutes: 480, readingMinutes: 280, grammarQuizMinutes: 180, targetMinutes: 45, activeLearners: 46 },
  { date: '2026-08-18', dayLabel: '18-Avg', totalMinutes: 2420, avgMinutesPerStudent: 51, speakingMinutes: 780, listeningMinutes: 690, vocabMinutes: 490, readingMinutes: 280, grammarQuizMinutes: 180, targetMinutes: 45, activeLearners: 46 },
  { date: '2026-08-19', dayLabel: '19-Avg', totalMinutes: 2510, avgMinutesPerStudent: 52, speakingMinutes: 810, listeningMinutes: 720, vocabMinutes: 510, readingMinutes: 290, grammarQuizMinutes: 180, targetMinutes: 45, activeLearners: 47 },
  { date: '2026-08-20', dayLabel: '20-Avg', totalMinutes: 2390, avgMinutesPerStudent: 50, speakingMinutes: 770, listeningMinutes: 690, vocabMinutes: 480, readingMinutes: 270, grammarQuizMinutes: 180, targetMinutes: 45, activeLearners: 46 },
  { date: '2026-08-21', dayLabel: '21-Avg', totalMinutes: 2150, avgMinutesPerStudent: 45, speakingMinutes: 660, listeningMinutes: 630, vocabMinutes: 440, readingMinutes: 260, grammarQuizMinutes: 160, targetMinutes: 45, activeLearners: 45 },
  { date: '2026-08-22', dayLabel: '22-Avg', totalMinutes: 1810, avgMinutesPerStudent: 38, speakingMinutes: 510, listeningMinutes: 530, vocabMinutes: 380, readingMinutes: 240, grammarQuizMinutes: 150, targetMinutes: 45, activeLearners: 42 },
  { date: '2026-08-23', dayLabel: '23-Avg', totalMinutes: 1960, avgMinutesPerStudent: 41, speakingMinutes: 570, listeningMinutes: 580, vocabMinutes: 410, readingMinutes: 240, grammarQuizMinutes: 160, targetMinutes: 45, activeLearners: 43 },
  { date: '2026-08-24', dayLabel: '24-Avg', totalMinutes: 2550, avgMinutesPerStudent: 53, speakingMinutes: 830, listeningMinutes: 730, vocabMinutes: 520, readingMinutes: 290, grammarQuizMinutes: 180, targetMinutes: 45, activeLearners: 47 },
  { date: '2026-08-25', dayLabel: '25-Avg', totalMinutes: 2600, avgMinutesPerStudent: 54, speakingMinutes: 850, listeningMinutes: 740, vocabMinutes: 530, readingMinutes: 300, grammarQuizMinutes: 180, targetMinutes: 45, activeLearners: 48 },
  { date: '2026-08-26', dayLabel: '26-Avg', totalMinutes: 2680, avgMinutesPerStudent: 56, speakingMinutes: 890, listeningMinutes: 760, vocabMinutes: 540, readingMinutes: 310, grammarQuizMinutes: 180, targetMinutes: 45, activeLearners: 48 },
  { date: '2026-08-27', dayLabel: '27-Avg', totalMinutes: 2590, avgMinutesPerStudent: 54, speakingMinutes: 840, listeningMinutes: 740, vocabMinutes: 520, readingMinutes: 300, grammarQuizMinutes: 190, targetMinutes: 45, activeLearners: 47 },
  { date: '2026-08-28', dayLabel: '28-Avg', totalMinutes: 2290, avgMinutesPerStudent: 48, speakingMinutes: 720, listeningMinutes: 670, vocabMinutes: 470, readingMinutes: 260, grammarQuizMinutes: 170, targetMinutes: 45, activeLearners: 46 },
  { date: '2026-08-29', dayLabel: '29-Avg', totalMinutes: 1920, avgMinutesPerStudent: 40, speakingMinutes: 560, listeningMinutes: 570, vocabMinutes: 400, readingMinutes: 230, grammarQuizMinutes: 160, targetMinutes: 45, activeLearners: 43 },
  { date: '2026-08-30', dayLabel: '30-Avg', totalMinutes: 2050, avgMinutesPerStudent: 43, speakingMinutes: 610, listeningMinutes: 610, vocabMinutes: 420, readingMinutes: 240, grammarQuizMinutes: 170, targetMinutes: 45, activeLearners: 44 },
  { date: '2026-08-31', dayLabel: '31-Avg', totalMinutes: 2640, avgMinutesPerStudent: 55, speakingMinutes: 870, listeningMinutes: 750, vocabMinutes: 530, readingMinutes: 300, grammarQuizMinutes: 190, targetMinutes: 45, activeLearners: 48 },
  { date: '2026-09-01', dayLabel: '01-Sen', totalMinutes: 2710, avgMinutesPerStudent: 56, speakingMinutes: 900, listeningMinutes: 770, vocabMinutes: 550, readingMinutes: 310, grammarQuizMinutes: 180, targetMinutes: 45, activeLearners: 48 },
  { date: '2026-09-02', dayLabel: '02-Sen', totalMinutes: 2750, avgMinutesPerStudent: 57, speakingMinutes: 920, listeningMinutes: 780, vocabMinutes: 560, readingMinutes: 310, grammarQuizMinutes: 180, targetMinutes: 45, activeLearners: 48 },
  { date: '2026-09-03', dayLabel: '03-Sen', totalMinutes: 2690, avgMinutesPerStudent: 56, speakingMinutes: 890, listeningMinutes: 760, vocabMinutes: 540, readingMinutes: 310, grammarQuizMinutes: 190, targetMinutes: 45, activeLearners: 48 },
  { date: '2026-09-04', dayLabel: '04-Sen', totalMinutes: 2410, avgMinutesPerStudent: 50, speakingMinutes: 770, listeningMinutes: 700, vocabMinutes: 490, readingMinutes: 280, grammarQuizMinutes: 170, targetMinutes: 45, activeLearners: 47 },
  { date: '2026-09-05', dayLabel: '05-Sen', totalMinutes: 2040, avgMinutesPerStudent: 43, speakingMinutes: 620, listeningMinutes: 600, vocabMinutes: 420, readingMinutes: 230, grammarQuizMinutes: 170, targetMinutes: 45, activeLearners: 44 },
  { date: '2026-09-06', dayLabel: '06-Sen (Bugun)', totalMinutes: 2830, avgMinutesPerStudent: 59, speakingMinutes: 960, listeningMinutes: 810, vocabMinutes: 570, readingMinutes: 310, grammarQuizMinutes: 180, targetMinutes: 45, activeLearners: 48 }
];

// Day of week distribution
export const SEED_DAY_OF_WEEK_ENGAGEMENT: DayOfWeekEngagement[] = [
  { day: 'Dushanba', avgMinutes: 54, peakHour: '19:00 - 21:00', sessionsCount: 142 },
  { day: 'Seshanba', avgMinutes: 56, peakHour: '18:30 - 20:30', sessionsCount: 156 },
  { day: 'Chorshanba', avgMinutes: 58, peakHour: '19:30 - 21:30', sessionsCount: 164 },
  { day: 'Payshanba', avgMinutes: 55, peakHour: '18:00 - 20:00', sessionsCount: 148 },
  { day: 'Juma', avgMinutes: 49, peakHour: '17:00 - 19:00', sessionsCount: 128 },
  { day: 'Shanba', avgMinutes: 39, peakHour: '14:00 - 17:00', sessionsCount: 96 },
  { day: 'Yakshanba', avgMinutes: 42, peakHour: '15:00 - 18:00', sessionsCount: 104 }
];

// Module Completion Rates Data
export const SEED_MODULE_COMPLETION: ModuleCompletionDataPoint[] = [
  {
    id: 'mod-listening',
    name: 'Tactics for Listening (Oxford 3rd Edition)',
    shortName: 'Tactics Listening',
    category: 'Listening',
    completionRate: 84.5,
    targetBenchmark: 75.0,
    totalUnitsOrItems: 24,
    completedUnitsAvg: 20.3,
    activeStudents: 48,
    color: '#0284c7', // sky-600
    statusBreakdown: { completed: 68, inProgress: 24, notStarted: 8 }
  },
  {
    id: 'mod-speaking',
    name: 'Mr. Safoyev Live Speaking & Voice Hub',
    shortName: 'IELTS Speaking AI',
    category: 'Speaking',
    completionRate: 88.2,
    targetBenchmark: 70.0,
    totalUnitsOrItems: 30,
    completedUnitsAvg: 26.5,
    activeStudents: 47,
    color: '#059669', // emerald-600
    statusBreakdown: { completed: 72, inProgress: 21, notStarted: 7 }
  },
  {
    id: 'mod-vocab',
    name: '4000 Essential English Words & SRS Lab',
    shortName: '4000 Words & SRS',
    category: 'Vocabulary',
    completionRate: 79.1,
    targetBenchmark: 75.0,
    totalUnitsOrItems: 60,
    completedUnitsAvg: 47.4,
    activeStudents: 46,
    color: '#d97706', // amber-600
    statusBreakdown: { completed: 62, inProgress: 27, notStarted: 11 }
  },
  {
    id: 'mod-toefl',
    name: 'TOEFL 6.0 Essay Models & Writing Chunks',
    shortName: 'TOEFL 6.0 Essays',
    category: 'Writing',
    completionRate: 72.8,
    targetBenchmark: 65.0,
    totalUnitsOrItems: 20,
    completedUnitsAvg: 14.6,
    activeStudents: 44,
    color: '#4f46e5', // indigo-600
    statusBreakdown: { completed: 54, inProgress: 32, notStarted: 14 }
  },
  {
    id: 'mod-reading',
    name: 'CEFR Reading Curriculum & Pronunciation',
    shortName: 'Reading Curriculum',
    category: 'Reading',
    completionRate: 81.3,
    targetBenchmark: 75.0,
    totalUnitsOrItems: 36,
    completedUnitsAvg: 29.2,
    activeStudents: 45,
    color: '#7c3aed', // violet-600
    statusBreakdown: { completed: 65, inProgress: 26, notStarted: 9 }
  },
  {
    id: 'mod-grammar',
    name: 'Oxford Diagnostic Grammar Mastery & Quizzes',
    shortName: 'Grammar Quizzes',
    category: 'Grammar',
    completionRate: 86.4,
    targetBenchmark: 80.0,
    totalUnitsOrItems: 40,
    completedUnitsAvg: 34.5,
    activeStudents: 48,
    color: '#db2777', // pink-600
    statusBreakdown: { completed: 74, inProgress: 18, notStarted: 8 }
  }
];

// Group-wise Module Completion Comparison
export const SEED_GROUP_COMPLETIONS: GroupModuleCompletion[] = [
  { groupName: 'IELTS Intensive 7.5+ (Oybek)', listening: 92, speaking: 94, vocab: 86, reading: 88, grammar: 91, overallAvg: 90.2 },
  { groupName: 'General English B2 (Chorsu)', listening: 85, speaking: 86, vocab: 79, reading: 80, grammar: 87, overallAvg: 83.4 },
  { groupName: 'TOEFL iBT Mastery (Online)', listening: 88, speaking: 89, vocab: 82, reading: 86, grammar: 89, overallAvg: 86.8 },
  { groupName: 'Kids English Champions', listening: 74, speaking: 81, vocab: 70, reading: 69, grammar: 78, overallAvg: 74.4 }
];

// Average Quiz Scores by Category
export const SEED_QUIZ_CATEGORIES: QuizScoreCategory[] = [
  {
    id: 'qc-listening',
    name: 'Tactics for Listening: Unit Comprehension Tests',
    shortName: 'Listening Comprehension',
    avgScore: 86.4,
    passingRate: 95.8,
    totalAttempts: 348,
    highestScore: 100,
    lowestScore: 62,
    scoreRangeDistribution: [
      { range: '<60%', count: 8, percentage: 2.3, fill: '#ef4444' },
      { range: '60-74%', count: 32, percentage: 9.2, fill: '#f59e0b' },
      { range: '75-89%', count: 182, percentage: 52.3, fill: '#3b82f6' },
      { range: '90-100%', count: 126, percentage: 36.2, fill: '#10b981' }
    ]
  },
  {
    id: 'qc-vocab',
    name: '4000 Words: Spaced Repetition & Spelling Quizzes',
    shortName: 'Vocabulary & Spelling',
    avgScore: 83.8,
    passingRate: 92.4,
    totalAttempts: 512,
    highestScore: 100,
    lowestScore: 58,
    scoreRangeDistribution: [
      { range: '<60%', count: 16, percentage: 3.1, fill: '#ef4444' },
      { range: '60-74%', count: 54, percentage: 10.5, fill: '#f59e0b' },
      { range: '75-89%', count: 268, percentage: 52.4, fill: '#3b82f6' },
      { range: '90-100%', count: 174, percentage: 34.0, fill: '#10b981' }
    ]
  },
  {
    id: 'qc-grammar',
    name: 'Oxford English Grammar & Syntax Checks',
    shortName: 'Grammar Mastery',
    avgScore: 87.2,
    passingRate: 96.1,
    totalAttempts: 290,
    highestScore: 100,
    lowestScore: 65,
    scoreRangeDistribution: [
      { range: '<60%', count: 6, percentage: 2.1, fill: '#ef4444' },
      { range: '60-74%', count: 24, percentage: 8.3, fill: '#f59e0b' },
      { range: '75-89%', count: 145, percentage: 50.0, fill: '#3b82f6' },
      { range: '90-100%', count: 115, percentage: 39.6, fill: '#10b981' }
    ]
  },
  {
    id: 'qc-speaking',
    name: 'IELTS Speaking Evaluation (Fluency & Lexis)',
    shortName: 'Speaking IELTS Mock',
    avgScore: 82.5,
    passingRate: 91.0,
    totalAttempts: 215,
    highestScore: 98,
    lowestScore: 60,
    scoreRangeDistribution: [
      { range: '<60%', count: 10, percentage: 4.6, fill: '#ef4444' },
      { range: '60-74%', count: 28, percentage: 13.0, fill: '#f59e0b' },
      { range: '75-89%', count: 112, percentage: 52.1, fill: '#3b82f6' },
      { range: '90-100%', count: 65, percentage: 30.3, fill: '#10b981' }
    ]
  },
  {
    id: 'qc-writing',
    name: 'TOEFL 6.0 Chunk Dictation & Structure Tests',
    shortName: 'TOEFL Writing & Dictation',
    avgScore: 81.1,
    passingRate: 88.5,
    totalAttempts: 184,
    highestScore: 96,
    lowestScore: 55,
    scoreRangeDistribution: [
      { range: '<60%', count: 12, percentage: 6.5, fill: '#ef4444' },
      { range: '60-74%', count: 34, percentage: 18.5, fill: '#f59e0b' },
      { range: '75-89%', count: 92, percentage: 50.0, fill: '#3b82f6' },
      { range: '90-100%', count: 46, percentage: 25.0, fill: '#10b981' }
    ]
  }
];

// Weekly Quiz Score Progression Trend (8 Weeks)
export const SEED_WEEKLY_QUIZ_TREND: WeeklyQuizTrendPoint[] = [
  { week: '1-Hafta', avgScore: 76.2, topScore: 92.0, targetBenchmark: 75.0, passingRate: 84.2 },
  { week: '2-Hafta', avgScore: 77.8, topScore: 93.5, targetBenchmark: 75.0, passingRate: 86.0 },
  { week: '3-Hafta', avgScore: 79.5, topScore: 95.0, targetBenchmark: 75.0, passingRate: 88.5 },
  { week: '4-Hafta', avgScore: 81.4, topScore: 96.0, targetBenchmark: 75.0, passingRate: 90.2 },
  { week: '5-Hafta', avgScore: 82.9, topScore: 97.0, targetBenchmark: 75.0, passingRate: 92.4 },
  { week: '6-Hafta', avgScore: 84.1, topScore: 98.0, targetBenchmark: 75.0, passingRate: 94.0 },
  { week: '7-Hafta', avgScore: 85.5, topScore: 99.0, targetBenchmark: 75.0, passingRate: 95.5 },
  { week: '8-Hafta', avgScore: 86.8, topScore: 100.0, targetBenchmark: 75.0, passingRate: 96.8 }
];

// Detailed Student Performance Records
export const SEED_STUDENT_PERFORMANCE_RECORDS: StudentPerformanceRecord[] = [
  {
    id: 'sp-1',
    name: 'Alisher Usmonov',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop',
    email: 'alisher@premier.uz',
    groupName: 'IELTS Intensive 7.5+ (Oybek)',
    level: 'Advanced C1',
    avgDailyMinutes: 58,
    totalTimeHours: 41.3,
    moduleCompletionRate: 94.5,
    avgQuizScore: 92.4,
    quizzesCompleted: 34,
    streakDays: 24,
    status: 'mastery',
    attendanceRate: 98,
    moduleProgress: {
      listeningTactics: 95,
      speakingSafoyev: 96,
      vocab4000: 92,
      readingCurriculum: 94,
      grammarMastery: 96
    },
    recentQuizzes: [
      { id: 'q-1', name: 'Tactics Unit 16 Comprehension', module: 'Listening', score: 95, date: '2026-09-05', passed: true },
      { id: 'q-2', name: '4000 Words Book 3 Review', module: 'Vocabulary', score: 92, date: '2026-09-04', passed: true },
      { id: 'q-3', name: 'IELTS Speaking Part 2 Timing', module: 'Speaking', score: 90, date: '2026-09-03', passed: true },
      { id: 'q-4', name: 'Conditionals Inversion Test', module: 'Grammar', score: 98, date: '2026-09-01', passed: true }
    ],
    last7DaysMinutes: [52, 58, 64, 55, 60, 48, 62]
  },
  {
    id: 'sp-2',
    name: 'Malika Toirova',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop',
    email: 'malika@premier.uz',
    groupName: 'IELTS Intensive 7.5+ (Oybek)',
    level: 'Advanced C1',
    avgDailyMinutes: 52,
    totalTimeHours: 35.3,
    moduleCompletionRate: 91.0,
    avgQuizScore: 89.8,
    quizzesCompleted: 31,
    streakDays: 18,
    status: 'mastery',
    attendanceRate: 96,
    moduleProgress: {
      listeningTactics: 92,
      speakingSafoyev: 95,
      vocab4000: 88,
      readingCurriculum: 89,
      grammarMastery: 91
    },
    recentQuizzes: [
      { id: 'q-5', name: 'Tactics Unit 15 Restaurant Orders', module: 'Listening', score: 90, date: '2026-09-05', passed: true },
      { id: 'q-6', name: 'TOEFL Chunk Essay #4 Dictation', module: 'Writing', score: 88, date: '2026-09-04', passed: true },
      { id: 'q-7', name: 'Speaking Pronunciation Check', module: 'Speaking', score: 92, date: '2026-09-02', passed: true }
    ],
    last7DaysMinutes: [48, 52, 55, 50, 56, 44, 54]
  },
  {
    id: 'sp-3',
    name: 'Jasur Bekmurodov',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop',
    email: 'jasur@premier.uz',
    groupName: 'General English B2 (Chorsu)',
    level: 'Upper-Intermediate B2',
    avgDailyMinutes: 46,
    totalTimeHours: 29.8,
    moduleCompletionRate: 82.5,
    avgQuizScore: 84.6,
    quizzesCompleted: 26,
    streakDays: 12,
    status: 'on_track',
    attendanceRate: 92,
    moduleProgress: {
      listeningTactics: 84,
      speakingSafoyev: 82,
      vocab4000: 80,
      readingCurriculum: 81,
      grammarMastery: 85
    },
    recentQuizzes: [
      { id: 'q-8', name: 'Tactics Unit 12 Airport Announcements', module: 'Listening', score: 85, date: '2026-09-04', passed: true },
      { id: 'q-9', name: 'Vocabulary SRS 50 Words', module: 'Vocabulary', score: 82, date: '2026-09-03', passed: true },
      { id: 'q-10', name: 'Relative Clauses Grammar Quiz', module: 'Grammar', score: 87, date: '2026-09-01', passed: true }
    ],
    last7DaysMinutes: [42, 45, 48, 44, 49, 38, 46]
  },
  {
    id: 'sp-4',
    name: 'Ziyoda Karimova',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop',
    email: 'ziyoda@premier.uz',
    groupName: 'General English B2 (Chorsu)',
    level: 'Upper-Intermediate B2',
    avgDailyMinutes: 42,
    totalTimeHours: 24.5,
    moduleCompletionRate: 78.4,
    avgQuizScore: 81.2,
    quizzesCompleted: 23,
    streakDays: 8,
    status: 'on_track',
    attendanceRate: 88,
    moduleProgress: {
      listeningTactics: 80,
      speakingSafoyev: 78,
      vocab4000: 76,
      readingCurriculum: 77,
      grammarMastery: 81
    },
    recentQuizzes: [
      { id: 'q-11', name: 'Tactics Unit 10 Hotel Bookings', module: 'Listening', score: 82, date: '2026-09-05', passed: true },
      { id: 'q-12', name: 'Reading Unit 8 Vocabulary Test', module: 'Reading', score: 78, date: '2026-09-02', passed: true }
    ],
    last7DaysMinutes: [38, 42, 44, 40, 43, 35, 42]
  },
  {
    id: 'sp-5',
    name: 'Shaxzod Rahimov',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop',
    email: 'shaxzod@premier.uz',
    groupName: 'TOEFL iBT Mastery (Online)',
    level: 'Advanced C1',
    avgDailyMinutes: 54,
    totalTimeHours: 37.0,
    moduleCompletionRate: 88.0,
    avgQuizScore: 87.5,
    quizzesCompleted: 29,
    streakDays: 19,
    status: 'mastery',
    attendanceRate: 94,
    moduleProgress: {
      listeningTactics: 90,
      speakingSafoyev: 91,
      vocab4000: 85,
      readingCurriculum: 86,
      grammarMastery: 88
    },
    recentQuizzes: [
      { id: 'q-13', name: 'TOEFL Integrated Speaking Mock', module: 'Speaking', score: 88, date: '2026-09-05', passed: true },
      { id: 'q-14', name: 'Academic Reading Passage 4', module: 'Reading', score: 86, date: '2026-09-03', passed: true }
    ],
    last7DaysMinutes: [50, 54, 58, 52, 56, 45, 55]
  },
  {
    id: 'sp-6',
    name: 'Gulnoza Saidova',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop',
    email: 'gulnoza@premier.uz',
    groupName: 'Kids English Champions',
    level: 'Elementary A2',
    avgDailyMinutes: 34,
    totalTimeHours: 18.2,
    moduleCompletionRate: 69.5,
    avgQuizScore: 73.8,
    quizzesCompleted: 18,
    streakDays: 4,
    status: 'needs_support',
    attendanceRate: 82,
    moduleProgress: {
      listeningTactics: 70,
      speakingSafoyev: 72,
      vocab4000: 66,
      readingCurriculum: 68,
      grammarMastery: 71
    },
    recentQuizzes: [
      { id: 'q-15', name: 'Tactics Unit 6 Sports & Hobbies', module: 'Listening', score: 72, date: '2026-09-04', passed: true },
      { id: 'q-16', name: 'A2 Basic Irregular Verbs', module: 'Grammar', score: 68, date: '2026-09-02', passed: false }
    ],
    last7DaysMinutes: [28, 32, 36, 30, 35, 25, 34]
  },
  {
    id: 'sp-7',
    name: 'Bekzod Olimov',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop',
    email: 'bekzod@premier.uz',
    groupName: 'Kids English Champions',
    level: 'Elementary A2',
    avgDailyMinutes: 38,
    totalTimeHours: 21.0,
    moduleCompletionRate: 75.0,
    avgQuizScore: 78.4,
    quizzesCompleted: 20,
    streakDays: 7,
    status: 'on_track',
    attendanceRate: 86,
    moduleProgress: {
      listeningTactics: 76,
      speakingSafoyev: 78,
      vocab4000: 72,
      readingCurriculum: 74,
      grammarMastery: 75
    },
    recentQuizzes: [
      { id: 'q-17', name: 'Tactics Unit 7 Daily Schedules', module: 'Listening', score: 78, date: '2026-09-05', passed: true }
    ],
    last7DaysMinutes: [32, 36, 40, 35, 39, 30, 38]
  },
  {
    id: 'sp-8',
    name: 'Dildora Ahmedova',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop',
    email: 'dildora@premier.uz',
    groupName: 'IELTS Intensive 7.5+ (Oybek)',
    level: 'Advanced C1',
    avgDailyMinutes: 56,
    totalTimeHours: 39.4,
    moduleCompletionRate: 93.0,
    avgQuizScore: 91.5,
    quizzesCompleted: 33,
    streakDays: 21,
    status: 'mastery',
    attendanceRate: 98,
    moduleProgress: {
      listeningTactics: 94,
      speakingSafoyev: 95,
      vocab4000: 91,
      readingCurriculum: 92,
      grammarMastery: 94
    },
    recentQuizzes: [
      { id: 'q-18', name: 'Tactics Unit 16 Complex Lectures', module: 'Listening', score: 94, date: '2026-09-05', passed: true },
      { id: 'q-19', name: 'IELTS Academic Writing Task 1', module: 'Writing', score: 90, date: '2026-09-03', passed: true }
    ],
    last7DaysMinutes: [52, 56, 60, 54, 58, 46, 56]
  }
];

// Calculation helper functions
export function calculateAnalyticsMetrics(
  records: StudentPerformanceRecord[],
  dailyData: DailyLearningTimeDataPoint[]
) {
  const totalStudents = records.length;
  const avgDailyMinutes = Math.round(
    records.reduce((acc, r) => acc + r.avgDailyMinutes, 0) / (totalStudents || 1)
  );
  const avgCompletionRate = Number(
    (records.reduce((acc, r) => acc + r.moduleCompletionRate, 0) / (totalStudents || 1)).toFixed(1)
  );
  const avgQuizScore = Number(
    (records.reduce((acc, r) => acc + r.avgQuizScore, 0) / (totalStudents || 1)).toFixed(1)
  );
  const totalQuizzesTaken = records.reduce((acc, r) => acc + r.quizzesCompleted, 0);
  const masteryCount = records.filter(r => r.status === 'mastery').length;
  const onTrackCount = records.filter(r => r.status === 'on_track').length;
  const needsSupportCount = records.filter(r => r.status === 'needs_support').length;

  return {
    totalStudents,
    avgDailyMinutes,
    avgCompletionRate,
    avgQuizScore,
    totalQuizzesTaken,
    masteryCount,
    onTrackCount,
    needsSupportCount
  };
}
