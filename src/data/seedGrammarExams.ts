import { GrammarExam } from '../types';

export const SEED_GRAMMAR_EXAMS: GrammarExam[] = [
  {
    id: 'g-exam-1',
    title: 'Beginner Grammar Midterm Exam (Units 1–5)',
    description: 'am/is/are, Present Continuous, and Present Simple topic mastery test.',
    targetLevel: 'A1 Beginner',
    durationMinutes: 20,
    passPercentage: 70,
    maxScore: 100,
    questions: [
      {
        id: 'q-m1',
        question: 'Where ______ your brother living nowadays?',
        options: ['is', 'are', 'am', 'do'],
        correctAnswer: 'is',
        explanationUz: 'Your brother (he) bo\'lgani uchun "is" ishlatiladi.',
        points: 20
      },
      {
        id: 'q-m2',
        question: 'Listen! Somebody ______ the piano in the music room.',
        options: ['plays', 'is playing', 'play', 'are playing'],
        correctAnswer: 'is playing',
        explanationUz: 'Hozir ayni paytda sodir bo\'layotgani (Listen!) uchun Present Continuous.',
        points: 20
      },
      {
        id: 'q-m3',
        question: 'Terry ______ in a bank in downtown Tashkent.',
        options: ['works', 'work', 'is work', 'working'],
        correctAnswer: 'works',
        explanationUz: 'Terry (he) uchinchi shaxs birlikda Present Simple -s qo\'shimchasini oladi.',
        points: 20
      },
      {
        id: 'q-m4',
        question: '______ your parents at home right now?',
        options: ['Are', 'Is', 'Do', 'Have'],
        correctAnswer: 'Are',
        explanationUz: 'Parents ko\'plikda bo\'lgani uchun "Are" ishlatiladi.',
        points: 20
      },
      {
        id: 'q-m5',
        question: 'It\'s 10:00 PM. I ______ hungry, but I\'m very tired.',
        options: ['am not', 'isn\'t', 'aren\'t', 'don\'t'],
        correctAnswer: 'am not',
        explanationUz: 'I olmoshi bilan inkor shakli "am not" bo\'ladi.',
        points: 20
      }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    createdBy: 'Academic Director'
  },
  {
    id: 'g-exam-2',
    title: 'Past Tenses & Narrative Progress Test (Units 10–14)',
    description: 'was/were, Past Simple, and Past Continuous comparative test.',
    targetLevel: 'A2 Elementary',
    durationMinutes: 25,
    passPercentage: 75,
    maxScore: 100,
    questions: [
      {
        id: 'q-p1',
        question: 'Where ______ you yesterday evening when I called?',
        options: ['were', 'was', 'did', 'are'],
        correctAnswer: 'were',
        explanationUz: 'You olmoshi uchun o\'tgan zamonda "were" ishlatiladi.',
        points: 25
      },
      {
        id: 'q-p2',
        question: 'Mozart ______ more than 600 pieces of music during his lifetime.',
        options: ['wrote', 'writes', 'was writing', 'has written'],
        correctAnswer: 'wrote',
        explanationUz: 'O\'tmishda tugallangan tarixiy fakt uchun Past Simple (wrote) qo\'llaniladi.',
        points: 25
      },
      {
        id: 'q-p3',
        question: 'I ______ television when the telephone rang.',
        options: ['was watching', 'watched', 'am watching', 'watch'],
        correctAnswer: 'was watching',
        explanationUz: 'Boshqa qisqa harakat sodir bo\'lganda davom etayotgan o\'tgan zamon harakati (Past Continuous).',
        points: 25
      },
      {
        id: 'q-p4',
        question: 'Did you ______ out with friends last night?',
        options: ['go', 'went', 'going', 'gone'],
        correctAnswer: 'go',
        explanationUz: 'Did so\'roq yordamchisidan keyin asosiy fe\'lning asil infinitiv shakli (go) keladi.',
        points: 25
      }
    ],
    createdAt: '2026-02-01T10:00:00Z',
    createdBy: 'Academic Director'
  },
  {
    id: 'g-exam-3',
    title: 'Present Perfect & Experience Assessment (Units 15–18)',
    description: 'have done, ever/never, and since/for grammar test.',
    targetLevel: 'A2-B1 Intermediate',
    durationMinutes: 20,
    passPercentage: 70,
    maxScore: 100,
    questions: [
      {
        id: 'q-pp1',
        question: '______ you ever been to London or New York?',
        options: ['Have', 'Has', 'Did', 'Were'],
        correctAnswer: 'Have',
        explanationUz: 'Hayotiy tajriba haqida so\'rash uchun "Have you ever + V3" ishlatiladi.',
        points: 25
      },
      {
        id: 'q-pp2',
        question: 'She has lived in Tashkent ______ 2020.',
        options: ['since', 'for', 'from', 'in'],
        correctAnswer: 'since',
        explanationUz: 'Boshlanish nuqtasi berilganda (2020) "since" ishlatiladi.',
        points: 25
      },
      {
        id: 'q-pp3',
        question: 'I haven\'t seen Aziz ______ a long time.',
        options: ['for', 'since', 'during', 'from'],
        correctAnswer: 'for',
        explanationUz: 'Davomiylik (a long time) uchun "for" qo\'llaniladi.',
        points: 25
      },
      {
        id: 'q-pp4',
        question: 'Look! Somebody ______ the classroom window.',
        options: ['has broken', 'broke', 'is breaking', 'breaks'],
        correctAnswer: 'has broken',
        explanationUz: 'Natijasi hozir ko\'rinib turgan yangi hodisa uchun Present Perfect ishlatiladi.',
        points: 25
      }
    ],
    createdAt: '2026-02-15T10:00:00Z',
    createdBy: 'Academic Director'
  },
  {
    id: 'g-exam-4',
    title: 'Modal Verbs & Conditionals Mastery (Units 30–34, 111–112)',
    description: 'can/could, must/should, and If conditional sentences evaluation.',
    targetLevel: 'B1 Intermediate',
    durationMinutes: 20,
    passPercentage: 75,
    maxScore: 100,
    questions: [
      {
        id: 'q-mod1',
        question: 'You look very exhausted. You ______ take a break and rest.',
        options: ['should', 'must to', 'ought', 'can to'],
        correctAnswer: 'should',
        explanationUz: 'Maslahat va tavsiya berish uchun "should + verb" ishlatiladi.',
        points: 25
      },
      {
        id: 'q-mod2',
        question: 'If it rains tomorrow, we ______ at home.',
        options: ['will stay', 'stayed', 'would stay', 'staying'],
        correctAnswer: 'will stay',
        explanationUz: 'First conditional asosiy qismida "will + verb" bo\'ladi.',
        points: 25
      },
      {
        id: 'q-mod3',
        question: 'If I ______ a million dollars, I would travel around the world.',
        options: ['had', 'have', 'would have', 'will have'],
        correctAnswer: 'had',
        explanationUz: 'Second conditional if-qismida o\'tgan zamon (had) ishlatiladi.',
        points: 25
      },
      {
        id: 'q-mod4',
        question: 'You ______ smoke inside the school building. It is strictly forbidden.',
        options: ['mustn\'t', 'don\'t have to', 'might not', 'needn\'t'],
        correctAnswer: 'mustn\'t',
        explanationUz: 'Qat\'iy taqiq uchun "mustn\'t" qo\'llaniladi.',
        points: 25
      }
    ],
    createdAt: '2026-03-01T10:00:00Z',
    createdBy: 'Academic Director'
  }
];
