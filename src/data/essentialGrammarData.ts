export interface EssentialGrammarExercise {
  id: string;
  type: 'short_form' | 'fill_in_gap' | 'sentence_transform' | 'multiple_choice';
  instruction: string;
  prompt: string;
  options?: string[];
  correctAnswer: string;
  explanationUz: string;
  points: number;
}

export interface EssentialGrammarUnit {
  unitNumber: number;
  title: string;
  category: 'Present' | 'Past' | 'Present Perfect' | 'Passive' | 'Future' | 'Modals' | 'Questions' | 'Pronouns' | 'Articles & Nouns' | 'Adjectives & Adverbs' | 'Prepositions' | 'Clauses';
  cefrLevel: 'A1' | 'A2';
  summaryUz: string;
  grammarRules: {
    title: string;
    formula?: string;
    positive: string[];
    negative: string[];
    question?: string[];
    explanationUz: string;
  }[];
  examples: {
    en: string;
    uz: string;
  }[];
  exercises: EssentialGrammarExercise[];
}

export const ESSENTIAL_GRAMMAR_UNITS: EssentialGrammarUnit[] = [
  {
    unitNumber: 1,
    title: 'am / is / are',
    category: 'Present',
    cefrLevel: 'A1',
    summaryUz: 'Ingliz tilida bo\'lish, holat va shaxsni ifodalovchi asosiy Present Simple "To Be" fe\'li.',
    grammarRules: [
      {
        title: 'Positive Forms (Tasdiq shakli)',
        formula: 'Subject + am / is / are + Complement',
        positive: [
          'I am (I\'m)',
          'He / She / It is (he\'s / she\'s / it\'s)',
          'We / You / They are (we\'re / you\'re / they\'re)'
        ],
        negative: [
          'I am not (I\'m not)',
          'He / She / It is not (isn\'t / he\'s not)',
          'We / You / They are not (aren\'t / we\'re not)'
        ],
        explanationUz: '"Am" faqat I bilan, "Is" birlikdagi otlar (he, she, it) bilan, "Are" esa ko\'plikdagi otlar (we, you, they) bilan ishlatiladi.'
      }
    ],
    examples: [
      { en: "My name is Lisa. I'm 22 years old.", uz: "Mening ismim Liza. Men 22 yoshdaman." },
      { en: "I'm cold. Can you close the window, please?", uz: "Menga sovuq bo'lyapti. Derazani yopib yubora olasizmi?" },
      { en: "My brother is very tall. He's a policeman.", uz: "Mening akam juda baland bo'yli. U militsioner." },
      { en: "John is afraid of dogs.", uz: "Jon itlardan qo'rqadi." },
      { en: "It's ten o'clock. You're late again.", uz: "Soat o'n bo'ldi. Siz yana kechikdingiz." },
      { en: "Ann and I are good friends.", uz: "Enn va men yaxshi do'stlarmiz." },
      { en: "Your keys are on the table.", uz: "Kalitlaringiz stol ustida." }
    ],
    exercises: [
      {
        id: 'u1-ex1',
        type: 'short_form',
        instruction: 'Qisqa shaklini yozing (Short Form: she\'s / we aren\'t / it\'s)',
        prompt: 'she is = ...',
        correctAnswer: "she's",
        explanationUz: "She + is qisqartmasi -> she's",
        points: 10
      },
      {
        id: 'u1-ex2',
        type: 'short_form',
        instruction: 'Qisqa shaklini yozing',
        prompt: 'they are = ...',
        correctAnswer: "they're",
        explanationUz: "They + are qisqartmasi -> they're",
        points: 10
      },
      {
        id: 'u1-ex3',
        type: 'fill_in_gap',
        instruction: 'am, is yoki are ni to\'g\'ri joylashtiring',
        prompt: 'The weather ______ nice today.',
        correctAnswer: 'is',
        explanationUz: 'The weather (ob-havo) birlikda bo\'lgani uchun "is" ishlatiladi.',
        points: 10
      },
      {
        id: 'u1-ex4',
        type: 'fill_in_gap',
        instruction: 'am, is yoki are ni to\'g\'ri joylashtiring',
        prompt: 'I ______ not tired.',
        correctAnswer: 'am',
        explanationUz: 'I olmoshi har doim "am" fe\'li bilan keladi.',
        points: 10
      },
      {
        id: 'u1-ex5',
        type: 'fill_in_gap',
        instruction: 'am, is yoki are ni to\'g\'ri joylashtiring',
        prompt: 'These bags ______ heavy.',
        correctAnswer: 'are',
        explanationUz: 'These bags (bu sumkalar) ko\'plikda bo\'lgani uchun "are" ishlatiladi.',
        points: 10
      },
      {
        id: 'u1-ex6',
        type: 'multiple_choice',
        instruction: 'To\'g\'ri javobni tanlang',
        prompt: 'Ann and I ______ good friends.',
        options: ['am', 'is', 'are', 'be'],
        correctAnswer: 'are',
        explanationUz: 'Ann and I (ikki kishi = we) ko\'plik bo\'lgani uchun "are" ishlatiladi.',
        points: 15
      }
    ]
  },
  {
    unitNumber: 2,
    title: 'am / is / are (questions)',
    category: 'Present',
    cefrLevel: 'A1',
    summaryUz: '"To Be" (am/is/are) fe\'lida so\'roq gaplar yasash va qisqa javoblar berish.',
    grammarRules: [
      {
        title: 'Question Structure (So\'roq shakli)',
        formula: 'Am / Is / Are + Subject + Complement ?',
        positive: [
          'Am I late?',
          'Is he / she / it at home?',
          'Are we / you / they ready?'
        ],
        negative: [
          'Yes, I am. / No, I\'m not.',
          'Yes, he is. / No, he isn\'t.',
          'Yes, we are. / No, we aren\'t.'
        ],
        explanationUz: 'So\'roq gap hosil qilish uchun Am, Is, Are fe\'llari egadan oldinga o\'tkaziladi.'
      }
    ],
    examples: [
      { en: "Is your mother at home? — No, she's out.", uz: "Onangiz uyda mi? — Yo'q, u ko'chada." },
      { en: "Are your parents at home? — No, they're out.", uz: "Ota-onangiz uydami? — Yo'q, ular ko'chada." },
      { en: "Is it cold in your room? — Yes, a little.", uz: "Xonangiz sovuqmi? — Ha, ozgina." },
      { en: "Your shoes are nice. Are they new?", uz: "Poyabzalingiz chiroyli ekan. Ular yangimi?" },
      { en: "Where is your mother? Is she at work?", uz: "Onangiz qayerda? U ishdamikan?" }
    ],
    exercises: [
      {
        id: 'u2-ex1',
        type: 'fill_in_gap',
        instruction: 'So\'roq gap yasang (Am / Is / Are ni oldinga qo\'ying)',
        prompt: '(your mother at home?) -> ______ your mother at home?',
        correctAnswer: 'Is',
        explanationUz: 'Your mother birlikda bo\'lgani uchun gap "Is" bilan boshlanadi.',
        points: 10
      },
      {
        id: 'u2-ex2',
        type: 'multiple_choice',
        instruction: 'To\'g\'ri javobni tanlang',
        prompt: '______ your parents at home right now?',
        options: ['Is', 'Are', 'Am', 'Do'],
        correctAnswer: 'Are',
        explanationUz: 'Parents ko\'plikda bo\'lgani uchun "Are" ishlatiladi.',
        points: 15
      }
    ]
  },
  {
    unitNumber: 3,
    title: 'I am doing (present continuous)',
    category: 'Present',
    cefrLevel: 'A1',
    summaryUz: 'Hozirgi ayni paytda sodir bo\'layotgan harakatlar (Present Continuous).',
    grammarRules: [
      {
        title: 'Present Continuous Structure',
        formula: 'Subject + am / is / are + Verb-ing',
        positive: ['I am working.', 'She is reading a book.', 'They are playing football.'],
        negative: ['I am not working.', 'She isn\'t reading.', 'They aren\'t playing.'],
        explanationUz: 'Hozir, ayni daqiqada bajarilayotgan dars yoki harakat uchun "am/is/are + fe\'l+ing" ishlatiladi.'
      }
    ],
    examples: [
      { en: "Please be quiet. I'm working.", uz: "Iltimos, tinchlik saqlang. Men ishlayapman." },
      { en: "Look! There's Sarah. She's wearing a brown coat.", uz: "Qarang! Anavi Sara. U jigarrang palto kiyib olgan." },
      { en: "The weather is nice. It isn't raining.", uz: "Ob-havo yaxshi. Yo'g'ir yog'mayapti." },
      { en: "Where are the children? — They're playing in the park.", uz: "Bolalar qayerda? — Ular parkda o'ynashyapti." }
    ],
    exercises: [
      {
        id: 'u3-ex1',
        type: 'fill_in_gap',
        instruction: 'Present Continuous shaklini yozing (am/is/are + verb-ing)',
        prompt: 'Please be quiet. I ______ (work).',
        correctAnswer: "am working",
        explanationUz: 'I bilan "am working" shakli ishlatiladi.',
        points: 15
      }
    ]
  },
  {
    unitNumber: 5,
    title: 'I do / work / like etc. (present simple)',
    category: 'Present',
    cefrLevel: 'A1',
    summaryUz: 'Doimiy odatlar, haqiqatlar va kundalik tartiblar (Present Simple).',
    grammarRules: [
      {
        title: 'Present Simple Rules',
        formula: 'I / You / We / They + V1 | He / She / It + V-s/es',
        positive: ['They read a lot.', 'He likes ice cream.', 'My brother lives in London.'],
        negative: ['I don\'t work on Sundays.', 'She doesn\'t like coffee.'],
        explanationUz: 'Uchinchi shaxs birlikda (he, she, it) fe\'lga -s yoki -es qo\'shimchasi qo\'shiladi.'
      }
    ],
    examples: [
      { en: "I work in an office. My brother works in a bank.", uz: "Men idorada ishlayman. Akam bankda ishlaydi." },
      { en: "Lucy lives in London. Her parents live in Scotland.", uz: "Lusi Londonda yashaydi. Uning ota-onasi Shotlandiyada yashaydi." },
      { en: "It rains a lot in winter.", uz: "Qishda ko'p yomg'ir yog'adi." }
    ],
    exercises: [
      {
        id: 'u5-ex1',
        type: 'fill_in_gap',
        instruction: 'Fe\'lni to\'g\'ri Present Simple shaklida qo\'ying',
        prompt: 'My brother ______ (work) in a bank in Tashkent.',
        correctAnswer: 'works',
        explanationUz: 'My brother (he) bo\'lgani uchun work -> works shakliga o\'tadi.',
        points: 15
      }
    ]
  },
  {
    unitNumber: 11,
    title: 'worked / got / went etc. (past simple)',
    category: 'Past',
    cefrLevel: 'A2',
    summaryUz: 'O\'tmishda tugallangan harakatlar va hodisalar (Past Simple).',
    grammarRules: [
      {
        title: 'Past Simple Rules',
        formula: 'Subject + V2 / -ed',
        positive: ['I worked yesterday.', 'We went to the cinema last night.'],
        negative: ['I didn\'t work yesterday.', 'They didn\'t go to school.'],
        explanationUz: 'To\'g\'ri fe\'llarga -ed qo\'shiladi (work -> worked), noto\'g\'ri fe\'llar esa 2-shaklga o\'tadi (go -> went).'
      }
    ],
    examples: [
      { en: "I brushed my teeth three times yesterday.", uz: "Kechasi tishlarimni uch marta yuvdim." },
      { en: "Terry worked in a bank from 2015 to 2020.", uz: "Terri 2015 yildan 2020 yilgacha bankda ishladi." },
      { en: "Yesterday it rained all morning.", uz: "Kechasi ertalab bo'yi yomg'ir yog'di." },
      { en: "We went to Tashkent last weekend.", uz: "O'tgan dam olish kunlari Toshkentga bordik." }
    ],
    exercises: [
      {
        id: 'u11-ex1',
        type: 'fill_in_gap',
        instruction: 'Fe\'lni to\'g\'ri Past Simple shaklida yozing',
        prompt: 'Last Sunday we ______ (go) to the mountains near Chimgan.',
        correctAnswer: 'went',
        explanationUz: 'Go fe\'lining o\'tgan zamon 2-shakli "went".',
        points: 15
      }
    ]
  }
];
