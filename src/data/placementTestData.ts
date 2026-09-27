import { CEFRLevel } from '../types';

export type PlacementLevel = Extract<CEFRLevel, 'A1' | 'A2' | 'B1' | 'B2' | 'C1'>;

export interface PlacementQuestion {
  id: number;
  level: PlacementLevel;
  domain: 'Grammar' | 'Vocabulary' | 'Discourse';
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  explanationUz: string;
}

export const PLACEMENT_LEVELS: PlacementLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

// A level counts as passed when at least this many of its questions are correct.
export const PASS_MARK = 4;

export const LEVEL_LABELS: Record<PlacementLevel, string> = {
  A1: 'BEGINNER',
  A2: 'ELEMENTARY',
  B1: 'INTERMEDIATE',
  B2: 'UPPER INTERMEDIATE',
  C1: 'ADVANCED',
};

export const LEVEL_SUMMARY: Record<PlacementLevel, string> = {
  A1: 'Beginner foundation — start with the General English A1 course.',
  A2: 'Elementary competence suitable for General English Booster courses.',
  B1: 'Solid intermediate foundation ready for IELTS foundation training.',
  B2: 'Strong upper-intermediate control matching IELTS 5.5 - 6.5 targets.',
  C1: 'Advanced academic proficiency matching IELTS 7.0+ standards.',
};

// Six questions per level, ordered from A1 to C1.
export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  // ── A1 ──
  {
    id: 1, level: 'A1', domain: 'Grammar',
    question: 'My sister ______ a teacher at a school in Chilonzor.',
    options: ['is', 'are', 'am', 'be'],
    correct: 'is',
    explanation: 'Third person singular (she / my sister) takes "is".',
    explanationUz: "Uchinchi shaxs birlik (she / my sister) bilan 'is' ishlatiladi.",
  },
  {
    id: 2, level: 'A1', domain: 'Grammar',
    question: '______ you like green tea?',
    options: ['Do', 'Does', 'Are', 'Is'],
    correct: 'Do',
    explanation: 'Present simple questions with "you" use the auxiliary "do".',
    explanationUz: "'You' bilan hozirgi oddiy zamon so'roq gapida 'do' yordamchi fe'li ishlatiladi.",
  },
  {
    id: 3, level: 'A1', domain: 'Vocabulary',
    question: 'It is very cold in the room. Please close the ______.',
    options: ['window', 'kitchen', 'breakfast', 'pencil'],
    correct: 'window',
    explanation: 'You close a window to keep the cold air out.',
    explanationUz: "Sovuq kirmasligi uchun deraza (window) yopiladi.",
  },
  {
    id: 4, level: 'A1', domain: 'Grammar',
    question: 'There ______ two books on the table.',
    options: ['are', 'is', 'am', 'be'],
    correct: 'are',
    explanation: 'Plural nouns (two books) take "there are".',
    explanationUz: "Ko'plikdagi otlar (two books) bilan 'there are' ishlatiladi.",
  },
  {
    id: 5, level: 'A1', domain: 'Vocabulary',
    question: 'I get up at seven o\'clock in the ______ and have breakfast.',
    options: ['morning', 'night', 'week', 'year'],
    correct: 'morning',
    explanation: 'Getting up and having breakfast happen "in the morning".',
    explanationUz: "Uyg'onish va nonushta ertalab (in the morning) bo'ladi.",
  },
  {
    id: 6, level: 'A1', domain: 'Grammar',
    question: 'Aziz ______ football every Sunday.',
    options: ['plays', 'play', 'playing', 'is play'],
    correct: 'plays',
    explanation: 'Present simple with he / she / it adds -s: "plays".',
    explanationUz: "Hozirgi oddiy zamonda he/she/it bilan fe'lga -s qo'shiladi: 'plays'.",
  },

  // ── A2 ──
  {
    id: 7, level: 'A2', domain: 'Grammar',
    question: 'Where ______ you yesterday evening when our study group met at the library?',
    options: ['was', 'were', 'did', 'are'],
    correct: 'were',
    explanation: 'The pronoun "you" in past simple takes "were".',
    explanationUz: "'You' olmoshi o'tgan zamonda 'were' yordamchi fe'lini oladi.",
  },
  {
    id: 8, level: 'A2', domain: 'Grammar',
    question: 'I ______ my keys, so I can\'t open the door now.',
    options: ['have lost', 'lose', 'am losing', 'was lose'],
    correct: 'have lost',
    explanation: 'Present perfect shows a past action with a result now.',
    explanationUz: "Present perfect o'tmishdagi harakatning hozirgi natijasini bildiradi.",
  },
  {
    id: 9, level: 'A2', domain: 'Vocabulary',
    question: 'Registan is very ______; thousands of tourists visit it every year.',
    options: ['popular', 'empty', 'quiet', 'cheap'],
    correct: 'popular',
    explanation: '"Popular" means liked or visited by many people.',
    explanationUz: "'Popular' — ko'pchilik yoqtiradigan, mashhur degani.",
  },
  {
    id: 10, level: 'A2', domain: 'Grammar',
    question: 'This bag is ______ than that one.',
    options: ['heavier', 'more heavy', 'heaviest', 'heavy'],
    correct: 'heavier',
    explanation: 'Short adjectives form the comparative with -er: "heavier".',
    explanationUz: "Qisqa sifatlar qiyosiy darajada -er oladi: 'heavier'.",
  },
  {
    id: 11, level: 'A2', domain: 'Discourse',
    question: 'I wanted to go for a walk, ______ it was raining all day.',
    options: ['but', 'so', 'because', 'and'],
    correct: 'but',
    explanation: '"But" joins two contrasting ideas.',
    explanationUz: "'But' (lekin) bir-biriga zid fikrlarni bog'laydi.",
  },
  {
    id: 12, level: 'A2', domain: 'Grammar',
    question: 'We ______ to Samarkand next weekend — we have already bought the train tickets.',
    options: ['are going', 'go', 'went', 'have gone'],
    correct: 'are going',
    explanation: 'Present continuous describes fixed future arrangements.',
    explanationUz: "Oldindan kelishilgan kelajak rejalari uchun present continuous ishlatiladi.",
  },

  // ── B1 ──
  {
    id: 13, level: 'B1', domain: 'Grammar',
    question: 'I have lived in this district of Tashkent ______ I started attending Premier School.',
    options: ['for', 'since', 'during', 'from'],
    correct: 'since',
    explanation: '"Since" marks the specific starting point in time of an action continuing to the present.',
    explanationUz: "'Since' o'tmishdagi aniq boshlanish vaqtini bildirish uchun ishlatiladi.",
  },
  {
    id: 14, level: 'B1', domain: 'Vocabulary',
    question: 'Jasur is very ______; he plans his week carefully and always finishes his homework on time.',
    options: ['organised', 'crowded', 'bitter', 'shallow'],
    correct: 'organised',
    explanation: '"Organised" describes someone who plans and manages their time well.',
    explanationUz: "'Organised' — vaqtini yaxshi rejalashtiradigan, tartibli odam.",
  },
  {
    id: 15, level: 'B1', domain: 'Grammar',
    question: 'If it rains tomorrow, we ______ the picnic.',
    options: ['will cancel', 'would cancel', 'cancelled', 'had cancelled'],
    correct: 'will cancel',
    explanation: 'First conditional (real future possibility): if + present, will + verb.',
    explanationUz: "Birinchi shart gap (real kelajak ehtimoli): if + present, will + fe'l.",
  },
  {
    id: 16, level: 'B1', domain: 'Grammar',
    question: 'The new library in our district ______ last year.',
    options: ['was built', 'built', 'has built', 'is building'],
    correct: 'was built',
    explanation: 'Passive voice in past simple: was/were + past participle.',
    explanationUz: "O'tgan zamon majhul nisbati: was/were + V3.",
  },
  {
    id: 17, level: 'B1', domain: 'Discourse',
    question: 'The course was quite difficult. ______, most students passed the final exam.',
    options: ['However', 'Therefore', 'Because', 'Unless'],
    correct: 'However',
    explanation: '"However" introduces a contrast with the previous sentence.',
    explanationUz: "'However' (biroq) oldingi gapga qarama-qarshi fikrni kiritadi.",
  },
  {
    id: 18, level: 'B1', domain: 'Vocabulary',
    question: 'Could you ______ me a favour and carry this box upstairs?',
    options: ['do', 'make', 'give', 'take'],
    correct: 'do',
    explanation: 'The fixed collocation is "do someone a favour".',
    explanationUz: "Barqaror birikma: 'do someone a favour' (yaxshilik qilmoq).",
  },

  // ── B2 ──
  {
    id: 19, level: 'B2', domain: 'Grammar',
    question: 'If Aziz ______ the express train from Samarkand earlier, he would have arrived on time.',
    options: ['caught', 'had caught', 'catches', 'would catch'],
    correct: 'had caught',
    explanation: 'Third conditional for hypothetical past events requires "had + past participle".',
    explanationUz: "O'tmishdagi afsus yoki ehtimollik (Third Conditional) uchun 'had + V3' qo'llaniladi.",
  },
  {
    id: 20, level: 'B2', domain: 'Discourse',
    question: 'The initiative was costly; ______, the long-term educational benefits far outweighed the expense.',
    options: ['nonetheless', 'furthermore', 'namely', 'likewise'],
    correct: 'nonetheless',
    explanation: '"Nonetheless" introduces a contrasting, conceding result.',
    explanationUz: "'Nonetheless' (shunga qaramay) qarama-qarshi fikrni bog'laydi.",
  },
  {
    id: 21, level: 'B2', domain: 'Vocabulary',
    question: 'Regular vocabulary reviews help students ______ new words in their long-term memory.',
    options: ['consolidate', 'scatter', 'diminish', 'collapse'],
    correct: 'consolidate',
    explanation: '"Consolidate" means to make knowledge stronger and more secure.',
    explanationUz: "'Consolidate' — bilimni mustahkamlamoq, xotirada o'rnashtirmoq degani.",
  },
  {
    id: 22, level: 'B2', domain: 'Grammar',
    question: 'Our teacher suggested ______ the speaking practice until Monday.',
    options: ['postponing', 'to postpone', 'postpone', 'postponed'],
    correct: 'postponing',
    explanation: '"Suggest" is followed by a gerund (-ing form).',
    explanationUz: "'Suggest' fe'lidan keyin gerund (-ing shakli) keladi.",
  },
  {
    id: 23, level: 'B2', domain: 'Grammar',
    question: 'By the time we reached the station, the train ______.',
    options: ['had already left', 'has already left', 'already leaves', 'will already leave'],
    correct: 'had already left',
    explanation: 'Past perfect shows an action completed before another past action.',
    explanationUz: "Past perfect boshqa o'tmish harakatidan oldin tugagan harakatni bildiradi.",
  },
  {
    id: 24, level: 'B2', domain: 'Vocabulary',
    question: 'Because of the sudden rise in costs, the company had to ______ its expansion plans.',
    options: ['abandon', 'absorb', 'admire', 'attend'],
    correct: 'abandon',
    explanation: '"Abandon" means to give up a plan completely.',
    explanationUz: "'Abandon' — rejadan butunlay voz kechmoq degani.",
  },

  // ── C1 ──
  {
    id: 25, level: 'C1', domain: 'Grammar',
    question: 'Not until the official Cambridge results were published ______ his band score.',
    options: ['he discovered', 'did he discover', 'he had discovered', 'was he discovered'],
    correct: 'did he discover',
    explanation: 'Negative fronting with "Not until" requires subject-auxiliary inversion.',
    explanationUz: "'Not until' gap boshida kelganda inversiya (yordamchi fe'l egadan oldinga o'tadi) bo'ladi.",
  },
  {
    id: 26, level: 'C1', domain: 'Grammar',
    question: 'The Academic Director insisted that all mock exam scripts ______ by Friday afternoon.',
    options: ['be evaluated', 'are evaluated', 'were evaluated', 'will be evaluated'],
    correct: 'be evaluated',
    explanation: 'The present subjunctive with verbs of urging/insistence uses the base form "be".',
    explanationUz: "Talab, iltimos fe'llaridan keyin (subjunctive) fe'lning asil shakli 'be evaluated' ishlatiladi.",
  },
  {
    id: 27, level: 'C1', domain: 'Discourse',
    question: 'Seldom ______ such linguistic fluency and analytical depth from high school candidates.',
    options: ['we encounter', 'have we encountered', 'did we encountered', 'we have encountered'],
    correct: 'have we encountered',
    explanation: 'Negative adverb "Seldom" triggers inversion: "have we encountered".',
    explanationUz: "'Seldom' inkor ma'noli ravish gap boshida kelganda inversiya hosil qiladi.",
  },
  {
    id: 28, level: 'C1', domain: 'Vocabulary',
    question: 'The research aims to ______ the complex correlation between bilingualism and cognitive agility.',
    options: ['elucidate', 'fabricate', 'obfuscate', 'stagnate'],
    correct: 'elucidate',
    explanation: '"Elucidate" means to make something clear; explain.',
    explanationUz: "'Elucidate' oydinlik kiritmoq, batafsil ilmiy tushuntirib bermoq ma'nosida keladi.",
  },
  {
    id: 29, level: 'C1', domain: 'Grammar',
    question: '______ the heavy traffic, we would have arrived before the ceremony started.',
    options: ['Had it not been for', 'If it was not', 'Unless there was', 'Without it had been'],
    correct: 'Had it not been for',
    explanation: 'Inverted third conditional: "Had it not been for + noun" = "If it hadn\'t been for".',
    explanationUz: "Inversiyali uchinchi shart gap: 'Had it not been for + ot' = 'If it hadn't been for'.",
  },
  {
    id: 30, level: 'C1', domain: 'Vocabulary',
    question: 'Her argument was so ______ that nobody on the panel could find a flaw in it.',
    options: ['compelling', 'tentative', 'redundant', 'negligible'],
    correct: 'compelling',
    explanation: '"Compelling" means convincing and persuasive.',
    explanationUz: "'Compelling' — ishonarli, rad etib bo'lmaydigan degani.",
  },
];

export interface PlacementResult {
  total: number;
  outOf: number;
  perLevel: Record<PlacementLevel, { correct: number; total: number }>;
  level: PlacementLevel;
}

// Placement is the highest level reached without a gap: every level up to it
// must reach PASS_MARK, so lucky guesses on hard items cannot skip levels.
export function scorePlacement(
  answers: Record<number, string>,
  questions: PlacementQuestion[] = PLACEMENT_QUESTIONS,
): PlacementResult {
  const perLevel = Object.fromEntries(
    PLACEMENT_LEVELS.map(l => [l, { correct: 0, total: 0 }]),
  ) as Record<PlacementLevel, { correct: number; total: number }>;

  let total = 0;
  for (const q of questions) {
    perLevel[q.level].total += 1;
    if (answers[q.id] === q.correct) {
      perLevel[q.level].correct += 1;
      total += 1;
    }
  }

  let level: PlacementLevel = 'A1';
  for (const l of PLACEMENT_LEVELS) {
    if (perLevel[l].correct >= PASS_MARK) level = l;
    else break;
  }

  return { total, outOf: questions.length, perLevel, level };
}
