import { CEFRLevel, VocabContestQuestion, VocabLeaderboardEntry } from '../types';

export interface ContestOpponent {
  id: string;
  name: string;
  avatarUrl?: string;
  role: 'student' | 'bot';
  groupId: string;
  groupName: string;
  level: CEFRLevel;
  rating: number;
  accuracy: number;
  unitsCompleted: number;
  wordsMastered: number;
  phrasesMastered: number;
  streak: number;
  bio: string;
}

export const CONTEST_OPPONENTS: ContestOpponent[] = [
  // Group 1: IELTS Intensive Target 7.5+ (B2)
  {
    id: 'user-student-2',
    name: 'Nodira Karimova',
    role: 'student',
    groupId: 'group-1',
    groupName: 'IELTS Intensive Target 7.5+',
    level: 'B2',
    rating: 1540,
    accuracy: 88,
    unitsCompleted: 8,
    wordsMastered: 160,
    phrasesMastered: 38,
    streak: 16,
    bio: 'Aiming for 8.0 in Reading and Speaking. Daily flashcard champion!'
  },
  {
    id: 'user-student-1',
    name: 'Jasur Rustamov',
    role: 'student',
    groupId: 'group-1',
    groupName: 'IELTS Intensive Target 7.5+',
    level: 'B2',
    rating: 1420,
    accuracy: 82,
    unitsCompleted: 5,
    wordsMastered: 100,
    phrasesMastered: 24,
    streak: 12,
    bio: 'Preparing for Westminster University admission. Loves phrasal verbs.'
  },
  {
    id: 'user-student-3',
    name: 'Bekzod Toshmatov',
    role: 'student',
    groupId: 'group-1',
    groupName: 'IELTS Intensive Target 7.5+',
    level: 'B1',
    rating: 1380,
    accuracy: 78,
    unitsCompleted: 4,
    wordsMastered: 80,
    phrasesMastered: 18,
    streak: 8,
    bio: 'Mastering academic writing collocations and daily vocabulary.'
  },
  {
    id: 'bot-ielts-coach',
    name: 'CELTA Challenger AI',
    role: 'bot',
    groupId: 'group-1',
    groupName: 'IELTS Intensive Target 7.5+',
    level: 'B2',
    rating: 1480,
    accuracy: 86,
    unitsCompleted: 12,
    wordsMastered: 240,
    phrasesMastered: 54,
    streak: 30,
    bio: 'Academic IELTS test sparring bot. High speed and precision.'
  },

  // Group 2: General English Intermediate B1
  {
    id: 'user-other-4',
    name: 'Dilnoza Murodova',
    role: 'student',
    groupId: 'group-2',
    groupName: 'General English Intermediate B1',
    level: 'B1',
    rating: 1290,
    accuracy: 76,
    unitsCompleted: 4,
    wordsMastered: 80,
    phrasesMastered: 16,
    streak: 5,
    bio: 'Consistent reader of Book 2 and Book 3 stories.'
  },
  {
    id: 'user-other-5',
    name: 'Shoxrux Sobirov',
    role: 'student',
    groupId: 'group-2',
    groupName: 'General English Intermediate B1',
    level: 'A2',
    rating: 1180,
    accuracy: 72,
    unitsCompleted: 3,
    wordsMastered: 60,
    phrasesMastered: 12,
    streak: 4,
    bio: 'Focused on idioms and reading speed.'
  },
  {
    id: 'bot-inter-tutor',
    name: 'Grammar & Lexis Bot',
    role: 'bot',
    groupId: 'group-2',
    groupName: 'General English Intermediate B1',
    level: 'B1',
    rating: 1260,
    accuracy: 80,
    unitsCompleted: 6,
    wordsMastered: 120,
    phrasesMastered: 28,
    streak: 20,
    bio: 'Intermediate automated sparring partner.'
  },

  // Group 3: Elementary English Starters A2
  {
    id: 'user-other-6',
    name: 'Madina Yusupova',
    role: 'student',
    groupId: 'group-3',
    groupName: 'Elementary English Starters A2',
    level: 'A2',
    rating: 1140,
    accuracy: 74,
    unitsCompleted: 3,
    wordsMastered: 60,
    phrasesMastered: 14,
    streak: 7,
    bio: 'Book 1 explorer. Practice makes perfect!'
  },
  {
    id: 'user-other-7',
    name: 'Farrux Alimov',
    role: 'student',
    groupId: 'group-3',
    groupName: 'Elementary English Starters A2',
    level: 'A2',
    rating: 1060,
    accuracy: 68,
    unitsCompleted: 2,
    wordsMastered: 40,
    phrasesMastered: 8,
    streak: 3,
    bio: 'Learning 20 new essential words every week.'
  },
  {
    id: 'bot-starter-buddy',
    name: 'Starter Friendly AI',
    role: 'bot',
    groupId: 'group-3',
    groupName: 'Elementary English Starters A2',
    level: 'A1',
    rating: 1020,
    accuracy: 70,
    unitsCompleted: 4,
    wordsMastered: 80,
    phrasesMastered: 16,
    streak: 10,
    bio: 'Gentle, friendly practice bot for Elementary levels.'
  }
];

export const CONTEST_QUESTION_BANK: VocabContestQuestion[] = [
  // ==========================================
  // LEVEL A1 - A2 (Book 1)
  // ==========================================
  {
    id: 'cq-1',
    type: 'collocation_complete',
    prompt: 'Complete the collocation from Unit 1: "The animals decided to _____ a deal with the lion."',
    promptUz: 'Unit 1 dagi birikmani to\'ldiring: "The animals decided to _____ a deal with the lion."',
    options: ['make', 'do', 'take', 'play'],
    correctAnswer: 'make',
    explanation: 'The natural collocation is "make a deal" (to enter into an agreement or bargain).',
    explanationUz: '"Make a deal" kelishuv tuzmoq ma\'nosidagi turg\'un iboradir.',
    phraseType: 'idiom',
    level: 'A1',
    sourceBook: 1,
    sourceUnit: 1
  },
  {
    id: 'cq-2',
    type: 'idiom_meaning',
    prompt: 'What does the idiom "had no idea" mean in Unit 2 ("The Laboratory")?',
    promptUz: 'Unit 2 dagi "had no idea" iborasi qanday ma\'noni anglatadi?',
    options: [
      'Had completely no knowledge or clue about something',
      'Was very angry with someone',
      'Forgot to do homework',
      'Had lost money at the store'
    ],
    correctAnswer: 'Had completely no knowledge or clue about something',
    explanation: '"Had no idea" means having zero knowledge or awareness about something.',
    explanationUz: '"Had no idea" — biror narsa haqida umuman bilmaslik, bexabar bo\'lish.',
    phraseType: 'idiom',
    level: 'A1',
    sourceBook: 1,
    sourceUnit: 2
  },
  {
    id: 'cq-3',
    type: 'word_meaning',
    prompt: 'What is the correct Uzbek translation of the target word "clever"?',
    promptUz: '"Clever" so\'zining o\'zbekcha to\'g\'ri tarjimasi qaysi?',
    options: ['aqlli, zehnli', 'qo\'rqqan', 'dahshatli', 'yomon'],
    correctAnswer: 'aqlli, zehnli',
    explanation: '"Clever" means quick at learning and understanding things (aqlli, zukko).',
    explanationUz: '"Clever" — tez anglaydigan, aqlli, zukko.',
    phraseType: 'word',
    level: 'A1',
    sourceBook: 1,
    sourceUnit: 1
  },
  {
    id: 'cq-4',
    type: 'context_blank',
    prompt: 'Fill in the blank: "Without waiting another _____, the lion jumped into the well."',
    promptUz: 'Bo\'shliqni to\'ldiring: "Without waiting another _____, the lion jumped into the well."',
    options: ['moment', 'day', 'hour', 'friend'],
    correctAnswer: 'moment',
    explanation: 'The phrase is "without waiting another moment", meaning immediately without delay.',
    explanationUz: '"Without waiting another moment" — bir lahza ham kutmasdan, darhol.',
    phraseType: 'phrase',
    level: 'A1',
    sourceBook: 1,
    sourceUnit: 1
  },
  {
    id: 'cq-5',
    type: 'collocation_complete',
    prompt: 'Which preposition completes the collocation: "All the animals were pleased _____ the clever trick"?',
    promptUz: 'Qaysi predlog to\'g\'ri keladi: "pleased _____ the clever trick"?',
    options: ['with', 'at', 'of', 'for'],
    correctAnswer: 'with',
    explanation: 'The adjective "pleased" naturally pairs with the preposition "with".',
    explanationUz: '"Pleased with" birikmasi biror narsadan mamnun bo\'lmoqni bildiradi.',
    phraseType: 'collocation',
    level: 'A1',
    sourceBook: 1,
    sourceUnit: 1
  },
  {
    id: 'cq-6',
    type: 'idiom_meaning',
    prompt: 'In Unit 2, Mia\'s "eyes grew wide". What does this physiological idiom express?',
    promptUz: 'Unit 2 da "eyes grew wide" iborasi qanday holatni ifodalaydi?',
    options: [
      'Great surprise, wonder, or astonishment',
      'Severe pain in the eyes',
      'Sleepiness and exhaustion',
      'Extreme anger and hatred'
    ],
    correctAnswer: 'Great surprise, wonder, or astonishment',
    explanation: '"Eyes grew wide" describes opening eyes widely in shock or delightful surprise.',
    explanationUz: '"Eyes grew wide" — ko\'zlari katta ochilib, lol qolish, hayratga tushish.',
    phraseType: 'idiom',
    level: 'A1',
    sourceBook: 1,
    sourceUnit: 2
  },
  {
    id: 'cq-7',
    type: 'collocation_complete',
    prompt: 'Complete the collocation from Unit 3: "Do you need help with your view of the _____ system?"',
    promptUz: 'Unit 3 dagi birikmani to\'ldiring: "Do you need help with your view of the _____ system?"',
    options: ['solar', 'stellar', 'cosmic', 'sky'],
    correctAnswer: 'solar',
    explanation: '"Solar system" refers to our sun and the planetary bodies orbiting it.',
    explanationUz: '"Solar system" — quyosh tizimi.',
    phraseType: 'collocation',
    level: 'A2',
    sourceBook: 1,
    sourceUnit: 3
  },
  {
    id: 'cq-8',
    type: 'collocation_complete',
    prompt: 'Unit 4: "John was very concerned _____ his dog\'s aggressive habit."',
    promptUz: 'Unit 4: "John was very concerned _____ his dog\'s aggressive habit."',
    options: ['about', 'on', 'with', 'from'],
    correctAnswer: 'about',
    explanation: '"Concerned about" means anxious or worried regarding an issue.',
    explanationUz: '"Concerned about" — haqida tashvishlanmoq.',
    phraseType: 'collocation',
    level: 'A2',
    sourceBook: 1,
    sourceUnit: 4
  },
  {
    id: 'cq-9',
    type: 'idiom_meaning',
    prompt: 'What does the older dog mean by saying: "Do not fool yourself"?',
    promptUz: '"Do not fool yourself" iborasining ma\'nosi nima?',
    options: [
      'Do not deceive yourself into believing a falsehood',
      'Do not play games with your food',
      'Do not wake up late in the morning',
      'Do not run too fast on the road'
    ],
    correctAnswer: 'Do not deceive yourself into believing a falsehood',
    explanation: '"Fool yourself" means to deceive oneself or live in false illusions.',
    explanationUz: '"Fool yourself" — o\'zini-o\'zi aldash, xomxayollarga ishonish.',
    phraseType: 'idiom',
    level: 'A2',
    sourceBook: 1,
    sourceUnit: 4
  },
  {
    id: 'cq-10',
    type: 'word_meaning',
    prompt: 'What is the English definition of "appropriate"?',
    promptUz: '"Appropriate" so\'zining ma\'nosi qaysi?',
    options: [
      'Right or suitable for a situation',
      'Dangerous and scary',
      'Extremely expensive',
      'Far away in distance'
    ],
    correctAnswer: 'Right or suitable for a situation',
    explanation: '"Appropriate" means suitable or fitting (munosib, muvofiq).',
    explanationUz: '"Appropriate" — mos, munosib, o\'rinli.',
    phraseType: 'word',
    level: 'A2',
    sourceBook: 1,
    sourceUnit: 4
  },
  {
    id: 'cq-11',
    type: 'collocation_complete',
    prompt: 'Unit 5: "Joanne used her best _____ before entering the dark cave."',
    promptUz: 'Unit 5: "Joanne used her best _____ before entering the dark cave."',
    options: ['judgment', 'torch', 'mind', 'luck'],
    correctAnswer: 'judgment',
    explanation: '"Best judgment" is a high-frequency collocation meaning wise, prudent decision-making.',
    explanationUz: '"Best judgment" — aql-idrok, to\'g\'ri fikrlash qobiliyati.',
    phraseType: 'collocation',
    level: 'A2',
    sourceBook: 1,
    sourceUnit: 5
  },
  {
    id: 'cq-12',
    type: 'idiom_meaning',
    prompt: 'Unit 5: "Leo lost his balance on a wet rock." What happened to Leo?',
    promptUz: '"Lost his balance" ifodasi nimani anglatadi?',
    options: [
      'He became physically unsteady and slipped or fell',
      'He lost his wallet and keys',
      'He forgot the way back to the camp',
      'He broke his glasses'
    ],
    correctAnswer: 'He became physically unsteady and slipped or fell',
    explanation: '"Lost his balance" means becoming unsteady and falling.',
    explanationUz: '"Lost his balance" — muvozanatni yo\'qotib yiqilmoq.',
    phraseType: 'idiom',
    level: 'A2',
    sourceBook: 1,
    sourceUnit: 5
  },
  {
    id: 'cq-13',
    type: 'idiom_meaning',
    prompt: 'Unit 6: "Heavy rain caused Leo to lose his way in the woods." What does "lose his way" mean?',
    promptUz: '"Lose his way" iborasining ma\'nosi nima?',
    options: [
      'Get lost and be unable to find the correct path',
      'Lose his bicycle on the road',
      'Give up on school exams',
      'Change his personal opinion'
    ],
    correctAnswer: 'Get lost and be unable to find the correct path',
    explanation: '"Lose one\'s way" means to get lost geographically or directionally.',
    explanationUz: '"Lose his way" — yo\'ldan adashmoq, sarson bo\'lmoq.',
    phraseType: 'idiom',
    level: 'A2',
    sourceBook: 1,
    sourceUnit: 6
  },
  {
    id: 'cq-14',
    type: 'collocation_complete',
    prompt: 'Unit 6: "The gentle ghost smiled and vanished into the _____."',
    promptUz: 'Unit 6 dagi iborani to\'ldiring: "vanished into the _____."',
    options: ['mist', 'sky', 'well', 'ground'],
    correctAnswer: 'mist',
    explanation: '"Vanished into the mist" is a poetic collocation meaning disappeared into fog.',
    explanationUz: '"Vanished into the mist" — tuman orasida g\'oyib bo\'lmoq.',
    phraseType: 'collocation',
    level: 'A2',
    sourceBook: 1,
    sourceUnit: 6
  },

  // ==========================================
  // LEVEL B1 - B2 (Books 2, 3, 4)
  // ==========================================
  {
    id: 'cq-15',
    type: 'collocation_complete',
    prompt: 'Book 3: "Thomas _____ his composure despite harsh mockery from his neighbors."',
    promptUz: 'Book 3: "Thomas _____ his composure despite harsh mockery."',
    options: ['maintained', 'created', 'borrowed', 'wore'],
    correctAnswer: 'maintained',
    explanation: '"Maintain one\'s composure" means keeping calm and dignified under pressure.',
    explanationUz: '"Maintain composure" — o\'zini bosiq tutmoq, xotirjamlikni saqlamoq.',
    phraseType: 'collocation',
    level: 'B1',
    sourceBook: 3,
    sourceUnit: 1
  },
  {
    id: 'cq-16',
    type: 'idiom_meaning',
    prompt: 'What does the idiom "stood the test of time" signify in Book 3?',
    promptUz: '"Stood the test of time" iborasining ma\'nosi qaysi?',
    options: [
      'Proved its enduring excellence and integrity over many years',
      'Stopped functioning after a long time',
      'Was repaired by a watchmaker',
      'Was written in a history book'
    ],
    correctAnswer: 'Proved its enduring excellence and integrity over many years',
    explanation: '"Stand the test of time" means maintaining value and relevance across time.',
    explanationUz: '"Stand the test of time" — vaqt sinovidan muvaffaqiyatli o\'tmoq.',
    phraseType: 'idiom',
    level: 'B1',
    sourceBook: 3,
    sourceUnit: 1
  },
  {
    id: 'cq-17',
    type: 'collocation_complete',
    prompt: 'Book 4: "Nicholas of Myra committed his wealth to _____ poverty."',
    promptUz: 'Book 4 dagi akademik birikmani to\'ldiring: "committed his wealth to _____ poverty."',
    options: ['alleviating', 'enlarging', 'painting', 'ordering'],
    correctAnswer: 'alleviating',
    explanation: '"Alleviating poverty" is a high-level academic collocation meaning reducing economic hardship.',
    explanationUz: '"Alleviating poverty" — qashshoqlikni kamaytirmoq, nochorlikni yumshatmoq.',
    phraseType: 'collocation',
    level: 'B2',
    sourceBook: 4,
    sourceUnit: 1
  },
  {
    id: 'cq-18',
    type: 'idiom_meaning',
    prompt: 'In Book 4, Nicholas acted "under the cloak of darkness". What does this idiom mean?',
    promptUz: '"Under the cloak of darkness" iborasi nimani anglatadi?',
    options: [
      'In secrecy during the night to conceal one\'s identity',
      'Wearing a black coat during winter',
      'Suffering from blindness',
      'Hiding inside a chimney'
    ],
    correctAnswer: 'In secrecy during the night to conceal one\'s identity',
    explanation: '"Under the cloak of darkness" means operating covertly under nighttime cover.',
    explanationUz: '"Under the cloak of darkness" — tun qorong\'uligi pardasi ostida, yashirincha.',
    phraseType: 'idiom',
    level: 'B2',
    sourceBook: 4,
    sourceUnit: 1
  },
  {
    id: 'cq-19',
    type: 'word_meaning',
    prompt: 'What does the C1/B2 academic word "altruistic" mean?',
    promptUz: '"Altruistic" so\'zining ma\'nosi nima?',
    options: [
      'Showing selfless concern for the well-being of others',
      'Selfish and greedy for gold',
      'Extremely tall and muscular',
      'Fluent in ancient languages'
    ],
    correctAnswer: 'Showing selfless concern for the well-being of others',
    explanation: '"Altruistic" means selfless and devoted to helping others (beg\'araz, xolis).',
    explanationUz: '"Altruistic" — boshqalar manfaati uchun o\'zini fido qiluvchi, beg\'araz.',
    phraseType: 'word',
    level: 'B2',
    sourceBook: 4,
    sourceUnit: 1
  },

  // ==========================================
  // LEVEL C1 - C2 (Books 5 and 6)
  // ==========================================
  {
    id: 'cq-20',
    type: 'collocation_complete',
    prompt: 'Book 5: "Viewing microbes as biological partners represents a profound _____ shift."',
    promptUz: 'Book 5 dagi ilmiy iborani to\'ldiring: "a profound _____ shift."',
    options: ['paradigm', 'moment', 'clock', 'season'],
    correctAnswer: 'paradigm',
    explanation: '"Paradigm shift" means a fundamental transformation in fundamental concepts.',
    explanationUz: '"Paradigm shift" — ilmiy qarashlar tizimining tubdan o\'zgarishi.',
    phraseType: 'collocation',
    level: 'C1',
    sourceBook: 5,
    sourceUnit: 1
  },
  {
    id: 'cq-21',
    type: 'idiom_meaning',
    prompt: 'Book 6: In theoretical physics, what is meant by the "arrow of time"?',
    promptUz: 'Fizika va Book 6 dagi "arrow of time" iborasi nimani ifodalaydi?',
    options: [
      'The irreversible thermodynamic one-way direction of time from past to future',
      'A weapon used in medieval warfare',
      'The hand of a grandfather clock',
      'A light beam traveling through space'
    ],
    correctAnswer: 'The irreversible thermodynamic one-way direction of time from past to future',
    explanation: '"Arrow of time" describes the thermodynamic one-way trajectory of time.',
    explanationUz: '"Arrow of time" — vaqtning faqat oldinga qaytmas yo\'nalishi (entropiya).',
    phraseType: 'idiom',
    level: 'C1',
    sourceBook: 6,
    sourceUnit: 1
  },
  {
    id: 'cq-22',
    type: 'idiom_meaning',
    prompt: 'Book 6: "Newtonian mechanics held sway over physics for centuries." What does "held sway over" mean?',
    promptUz: '"Held sway over" iborasining ma\'nosi qaysi?',
    options: [
      'Exercised dominant power, authority, or ideological control over',
      'Was completely rejected and ridiculed',
      'Moved gently in the ocean waves',
      'Was taught only in secret societies'
    ],
    correctAnswer: 'Exercised dominant power, authority, or ideological control over',
    explanation: '"Hold sway over" means having dominant influence or authority over something.',
    explanationUz: '"Held sway over" — ustidan hukmronlik qilmoq, o\'z ta\'sirida tutmoq.',
    phraseType: 'idiom',
    level: 'C2',
    sourceBook: 6,
    sourceUnit: 1
  }
];

/**
 * Filter questions based on Level, Group, or Unit progress
 */
export function getContestQuestions(
  level: CEFRLevel | 'ALL' = 'ALL',
  limit: number = 5
): VocabContestQuestion[] {
  let pool = [...CONTEST_QUESTION_BANK];

  if (level !== 'ALL') {
    // Map levels: A1-A2, B1-B2, C1-C2
    if (level === 'A1' || level === 'A2') {
      pool = pool.filter(q => q.level === 'A1' || q.level === 'A2');
    } else if (level === 'B1' || level === 'B2') {
      pool = pool.filter(q => q.level === 'B1' || q.level === 'B2');
    } else if (level === 'C1' || level === 'C2') {
      pool = pool.filter(q => q.level === 'C1' || q.level === 'C2');
    }
  }

  // Shuffle pool
  const shuffled = pool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(limit, shuffled.length));
}

/**
 * Generate Leaderboard entries combining student progress and contest stats
 */
export function getContestLeaderboard(): VocabLeaderboardEntry[] {
  return [
    {
      studentId: 'user-student-2',
      studentName: 'Nodira Karimova',
      groupId: 'group-1',
      groupName: 'IELTS Intensive Target 7.5+',
      level: 'B2',
      rating: 1540,
      wins: 28,
      losses: 4,
      winRate: 88,
      currentStreak: 6,
      unitsCompleted: 8,
      wordsMastered: 160,
      phrasesMastered: 38,
      badge: 'Vocab Grandmaster'
    },
    {
      studentId: 'bot-ielts-coach',
      studentName: 'CELTA Challenger AI',
      groupId: 'group-1',
      groupName: 'IELTS Intensive Target 7.5+',
      level: 'B2',
      rating: 1480,
      wins: 45,
      losses: 7,
      winRate: 86,
      currentStreak: 12,
      unitsCompleted: 12,
      wordsMastered: 240,
      phrasesMastered: 54,
      badge: 'CELTA Spartan'
    },
    {
      studentId: 'user-student-1',
      studentName: 'Jasur Rustamov',
      groupId: 'group-1',
      groupName: 'IELTS Intensive Target 7.5+',
      level: 'B2',
      rating: 1420,
      wins: 19,
      losses: 5,
      winRate: 79,
      currentStreak: 4,
      unitsCompleted: 5,
      wordsMastered: 100,
      phrasesMastered: 24,
      badge: 'Collocation Master'
    },
    {
      studentId: 'user-student-3',
      studentName: 'Bekzod Toshmatov',
      groupId: 'group-1',
      groupName: 'IELTS Intensive Target 7.5+',
      level: 'B1',
      rating: 1380,
      wins: 16,
      losses: 6,
      winRate: 73,
      currentStreak: 3,
      unitsCompleted: 4,
      wordsMastered: 80,
      phrasesMastered: 18,
      badge: 'Idiom Hunter'
    },
    {
      studentId: 'user-other-4',
      studentName: 'Dilnoza Murodova',
      groupId: 'group-2',
      groupName: 'General English Intermediate B1',
      level: 'B1',
      rating: 1290,
      wins: 14,
      losses: 6,
      winRate: 70,
      currentStreak: 2,
      unitsCompleted: 4,
      wordsMastered: 80,
      phrasesMastered: 16,
      badge: 'Rising Gladiator'
    },
    {
      studentId: 'bot-inter-tutor',
      studentName: 'Grammar & Lexis Bot',
      groupId: 'group-2',
      groupName: 'General English Intermediate B1',
      level: 'B1',
      rating: 1260,
      wins: 32,
      losses: 8,
      winRate: 80,
      currentStreak: 8,
      unitsCompleted: 6,
      wordsMastered: 120,
      phrasesMastered: 28,
      badge: 'Lexis Guardian'
    },
    {
      studentId: 'user-other-5',
      studentName: 'Shoxrux Sobirov',
      groupId: 'group-2',
      groupName: 'General English Intermediate B1',
      level: 'A2',
      rating: 1180,
      wins: 11,
      losses: 7,
      winRate: 61,
      currentStreak: 1,
      unitsCompleted: 3,
      wordsMastered: 60,
      phrasesMastered: 12,
      badge: 'Story Explorer'
    },
    {
      studentId: 'user-other-6',
      studentName: 'Madina Yusupova',
      groupId: 'group-3',
      groupName: 'Elementary English Starters A2',
      level: 'A2',
      rating: 1140,
      wins: 10,
      losses: 4,
      winRate: 71,
      currentStreak: 3,
      unitsCompleted: 3,
      wordsMastered: 60,
      phrasesMastered: 14,
      badge: 'Speed Novice'
    },
    {
      studentId: 'user-other-7',
      studentName: 'Farrux Alimov',
      groupId: 'group-3',
      groupName: 'Elementary English Starters A2',
      level: 'A2',
      rating: 1060,
      wins: 8,
      losses: 5,
      winRate: 61,
      currentStreak: 2,
      unitsCompleted: 2,
      wordsMastered: 40,
      phrasesMastered: 8,
      badge: 'Word Cadet'
    }
  ];
}
