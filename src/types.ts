export type UserRole = 'admin' | 'teacher' | 'student';
export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type AttendanceStatus = 'present' | 'absent' | 'late' | 'excused';
export type HomeworkType = 'multiple_choice' | 'fill_in_gap' | 'matching' | 'writing';
export type SubmissionStatus = 'draft' | 'submitted' | 'graded' | 'returned';
export type AIContentType = 'reading_passage' | 'quiz' | 'lesson_plan' | 'reading';
export type ContentStatus = 'draft' | 'published' | 'archived';

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  phone?: string;
  age?: number;
  goal?: string;
  level_estimate?: string;
  level: CEFRLevel;
  schedule_preference?: string;
  onboarding_completed: boolean;
  xp: number;
  streak: number;
  last_active_date?: string;
  avatar_url?: string;
  created_at: string;
  updated_at?: string;
}

export interface Group {
  id: string;
  name: string;
  level: CEFRLevel;
  teacher_id?: string;
  teacher_name?: string;
  schedule: string;
  room?: string;
  created_at: string;
  students_count?: number;
  capacity?: number;
}

export interface GroupMember {
  id: string;
  group_id: string;
  student_id: string;
  joined_at: string;
  student?: Profile;
}

export interface Lesson {
  id: string;
  group_id: string;
  title: string;
  topic: string;
  lesson_date: string;
  date?: string;
  materials_url?: string;
  materials_name?: string;
  notes?: string;
  created_at: string;
  group_name?: string;
}

export interface Attendance {
  id: string;
  lesson_id: string;
  student_id: string;
  status: AttendanceStatus;
  note?: string;
  recorded_by?: string;
  created_at: string;
  student_name?: string;
}

export interface HomeworkQuestion {
  id: string;
  question: string;
  options?: string[]; // for multiple_choice
  correct_answer?: string; // for auto-grading
  pairs?: { left: string; right: string }[]; // for matching
  sentence_with_blank?: string; // for fill_in_gap
  points: number;
}

export interface Homework {
  id: string;
  group_id: string;
  teacher_id: string;
  title: string;
  description?: string;
  due_date: string;
  type: HomeworkType;
  content: {
    prompt?: string;
    questions?: HomeworkQuestion[];
    instructions?: string;
    rubric?: string;
  };
  max_score: number;
  created_at: string;
  group_name?: string;
  teacher_name?: string;
}

export interface HomeworkSubmission {
  id: string;
  homework_id: string;
  student_id: string;
  submission_data: {
    answers?: Record<string, any>;
    written_text?: string;
    submitted_at?: string;
  };
  score?: number;
  auto_graded: boolean;
  status: SubmissionStatus;
  is_late: boolean;
  feedback?: string;
  graded_at?: string;
  graded_by?: string;
  submitted_at: string;
  homework_title?: string;
  student_name?: string;
  max_score?: number;
}

export interface GrammarExercise {
  id: string;
  topic: string;
  cefr_level: CEFRLevel;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  created_by?: string;
  created_at: string;
}

export interface ExerciseResult {
  id: string;
  exercise_id: string;
  student_id: string;
  selected_option: string;
  is_correct: boolean;
  xp_earned: number;
  created_at: string;
}

export interface DailyWord {
  id: string;
  word: string;
  translation_uz: string;
  definition: string;
  example: string;
  example_sentence?: string;
  cefr_level: CEFRLevel;
  audio_url?: string;
  part_of_speech?: string;
  phonetic?: string;
  day_index?: number;
  created_at: string;
}

export interface WordProgress {
  id: string;
  student_id: string;
  word_id: string;
  box: number; // 1 to 5 spaced repetition
  next_review_date: string;
  reviews_count: number;
  mastered: boolean;
  last_reviewed_at?: string;
  word?: DailyWord;
}

export interface ChampionshipScore {
  id: string;
  student_id: string;
  student_name?: string;
  month: string;
  xp: number;
  score?: number;
  total_score?: number;
  rank: number;
  lessons_attended: number;
  homeworks_completed: number;
  student?: Profile;
  group_name?: string;
  badges?: Badge[] | string[];
}

export interface Badge {
  id: string;
  student_id: string;
  badge_key: string;
  title: string;
  description: string;
  icon: string;
  awarded_at: string;
}

export interface AIContent {
  id: string;
  title: string;
  type: AIContentType;
  cefr_level: CEFRLevel;
  topic: string;
  content: any;
  status: ContentStatus;
  created_by?: string;
  created_at: string;
  updated_at?: string;
}

export type RealtimeEventType = 
  | 'LESSON_COMPLETED' 
  | 'ATTENDANCE_MARKED' 
  | 'HOMEWORK_SUBMITTED' 
  | 'HOMEWORK_GRADED' 
  | 'NEW_HOMEWORK' 
  | 'DEADLINE_ALERT'
  | 'XP_AWARDED';

export interface RealtimeEventPayload {
  id: string;
  type: RealtimeEventType;
  title: string;
  message: string;
  timestamp: string;
  actor?: {
    id: string;
    name: string;
    role: UserRole;
  };
  targetUserId?: string;
  targetGroupId?: string;
  data?: Record<string, any>;
  read?: boolean;
}

export interface AIChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  sources?: string[];
  suggestedQuestions?: string[];
}

export interface IELTSEvaluation {
  overallBand: number;
  taskType: 'task1' | 'task2';
  topic?: string;
  essay: string;
  taskAchievement: { 
    band: number; 
    feedback: string; 
    strengths: string[]; 
    weaknesses: string[]; 
  };
  coherenceCohesion: { 
    band: number; 
    feedback: string; 
    strengths: string[]; 
    weaknesses: string[]; 
  };
  lexicalResource: { 
    band: number; 
    feedback: string; 
    suggestions: Array<{ original: string; better: string; reason: string }>; 
  };
  grammaticalAccuracy: { 
    band: number; 
    feedback: string; 
    errors: Array<{ quote: string; correction: string; explanationUz: string }>; 
  };
  modelParagraph: string;
  generalFeedback: string;
  uzbekSummary: string;
  estimatedCefr: string;
  evaluated_at: string;
}

export interface SpeakingEvaluation {
  overallBand: number;
  part: number;
  topic: string;
  userResponse: string;
  fluency: { band: number; feedback: string };
  vocabulary: { band: number; feedback: string; recommendedPhrases: string[] };
  grammar: { band: number; feedback: string };
  pronunciation: { tips: string[] };
  modelAnswer: string;
  uzbekFeedback: string;
  evaluated_at: string;
}

export interface TargetWord {
  id: string;
  word: string;
  partOfSpeech: string;
  phonetic: string;
  definition: string;
  translationUz: string;
  example: string;
  exampleUz?: string;
}

export interface ComprehensionQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  explanationUz: string;
}

export interface VocabularyExercise {
  id: string;
  type: 'definition_match' | 'fill_gap';
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanationUz: string;
}

export type PhraseType = 'idiom' | 'collocation' | 'phrasal_verb' | 'phrase';

export interface ReadingPhrase {
  id: string;
  phrase: string;
  type: PhraseType;
  meaning: string;
  translationUz: string;
  example: string;
  contextNote?: string;
}

export interface CurriculumUnit {
  id: string;
  bookNumber: number;
  unitNumber: number;
  title: string;
  summaryUz: string;
  readingPassage: string;
  wordCount: number;
  targetWords: TargetWord[];
  phrases?: ReadingPhrase[];
  comprehensionQuestions: ComprehensionQuestion[];
  vocabularyExercises?: VocabularyExercise[];
}

export interface VocabContestQuestion {
  id: string;
  type: 'word_meaning' | 'idiom_meaning' | 'collocation_complete' | 'context_blank';
  prompt: string;
  promptUz?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  explanationUz: string;
  phraseType?: PhraseType | 'word';
  level: CEFRLevel;
  sourceBook?: number;
  sourceUnit?: number;
}

export interface VocabContestResult {
  matchId: string;
  studentId: string;
  opponentId: string;
  opponentName: string;
  score: number;
  opponentScore: number;
  isWinner: boolean;
  xpEarned: number;
  accuracy: number;
  level: string;
  groupName: string;
  date: string;
}

export interface VocabLeaderboardEntry {
  studentId: string;
  studentName: string;
  groupId: string;
  groupName: string;
  level: CEFRLevel;
  rating: number;
  wins: number;
  losses: number;
  winRate: number;
  currentStreak: number;
  unitsCompleted: number;
  wordsMastered: number;
  phrasesMastered: number;
  badge?: string;
}

export interface CurriculumBook {
  id: string;
  bookNumber: number;
  title: string;
  cefrLevel: CEFRLevel;
  levelName: string;
  description: string;
  color: string;
  unitsCount: number;
  targetWordsCount: number;
  units: CurriculumUnit[];
}

export interface StudentUnitProgress {
  unitId: string;
  bookNumber: number;
  unitNumber: number;
  completed: boolean;
  scorePercent: number;
  readingTimeSeconds: number;
  wpm: number;
  completedAt: string;
  xpEarned: number;
}

export type WritingChunkCategory = 
  | 'intro_thesis' 
  | 'body_argument' 
  | 'exemplification' 
  | 'contrast_concession' 
  | 'cause_effect'
  | 'conclusion';

export interface WritingChunk {
  id: string;
  phrase: string;
  category: WritingChunkCategory;
  categoryLabel: string;
  function: string;
  translationUz: string;
  example: string;
  exampleUz?: string;
  usageNote?: string;
  beginnerTipUz?: string;
}

export type IdeaType = 
  | 'thesis' 
  | 'main_argument' 
  | 'evidence' 
  | 'counter_argument' 
  | 'conclusion';

export interface EssayIdea {
  id: string;
  type: IdeaType;
  title: string;
  anchorText: string;
  explanation: string;
  explanationUz: string;
  scoreInsight: string;
  promptApplication: string;
}

export interface ToeflEssayModel {
  id: string;
  essayNumber: number;
  title: string;
  score: number; // 6.0
  stance: 'agree' | 'disagree' | 'balanced' | 'preference';
  essayText: string;
  wordCount: number;
  targetWords: TargetWord[];
  topicWordList?: TargetWord[];
  phrases: ReadingPhrase[];
  writingChunks: WritingChunk[];
  ideas: EssayIdea[];
  outline: {
    introduction: string;
    bodyPoints: string[];
    conclusion: string;
  };
  brainstormingPros: string[];
  brainstormingCons: string[];
}

export interface ToeflTopic {
  id: string;
  topicNumber: number;
  category: 'education' | 'society' | 'technology' | 'work' | 'environment' | 'personal' | 'culture';
  categoryName: string;
  prompt: string;
  shortTitle: string;
  questionType: 'agree_disagree' | 'preference' | 'hypothetical' | 'explanation';
  topicWordList?: TargetWord[];
  essays: ToeflEssayModel[];
}

// Word Pronunciation Practice Record
export interface PronunciationPracticeRecord {
  id: string;
  userId: string;
  userName?: string;
  word: string;
  ipa?: string;
  sourceType: 'reading_curriculum' | 'toefl_essay' | 'general';
  sourceUnitId?: string;
  sourceTitle?: string;
  scorePercent: number; // 0-100
  spokenText: string;
  feedbackText: string;
  recordingUrl?: string;
  created_at: string;
}

// Tactics for Listening (3rd Edition) Types
export interface TacticsDialogueLine {
  speaker: string;
  text: string;
  translationUz?: string;
}

export interface TacticsQuestion {
  id: string;
  question: string;
  questionUz?: string;
  image?: string;
  options: string[];
  optionImages?: string[];
  answerIndex: number;
  explanationUz?: string;
  dialogueNumber?: number;
  startTime?: number;
  endTime?: number;
  isExample?: boolean;
  exampleValue?: string;
}

export interface TacticsGettingStartedItem {
  id: string;
  label: string;
  category?: string;
  match?: string;
  options?: string[];
  correctAnswer?: string;
}

export interface TacticsListeningSection {
  title?: string;
  instruction: string;
  audioFile?: string;
  audioUrl?: string;
  originalAudioUrl?: string;
  dialogues?: Array<{
    number: number;
    lines: TacticsDialogueLine[];
  }>;
  task1: {
    instruction: string;
    audioUrl?: string;
    questions: TacticsQuestion[];
  };
  task2?: {
    instruction: string;
    audioUrl?: string;
    questions: TacticsQuestion[];
  };
}

export interface TacticsPronunciationRule {
  title: string;
  audioFile?: string;
  audioUrl?: string;
  originalAudioUrl?: string;
  explanation: string;
  explanationUz: string;
  table?: Array<{ spell: string; say: string }>;
  examples: Array<{
    phrase: string;
    ruleFocus: string;
    ipa?: string;
  }>;
  dictationSentences: string[];
}

export interface TacticsDictationSection {
  instruction: string;
  instructionUz?: string;
  audioFile?: string;
  audioUrl?: string;
  originalAudioUrl?: string;
  dialogueText: string;
  blanks: string[];
}

export interface TacticsGettingStarted {
  instruction: string;
  instructionUz: string;
  images?: string[];
  rawImages?: string[];
  items: TacticsGettingStartedItem[];
  options?: string[];
}

export interface TacticsUnit {
  id?: string;
  unitNumber: number;
  title: string;
  topic: string;
  level: string;
  targetSkills: string[];
  overviewUz: string;
  gettingStartedItems?: TacticsGettingStartedItem[];
  gettingStarted?: TacticsGettingStarted;
  listening1: TacticsListeningSection;
  listening2: TacticsListeningSection;
  listening3: TacticsListeningSection;
  pronunciation: TacticsPronunciationRule;
  dictation?: TacticsDictationSection;
  conversationPractice: {
    title: string;
    script: TacticsDialogueLine[];
  };
}

export interface TacticsStudentProgress {
  unitId: string;
  unitNumber: number;
  scorePercent: number;
  completedTasks: string[];
  answers: Record<string, number>;
  completedAt: string;
}

// Live Speaking with Mr. Safoyev & Voice Clone Profile
export interface SafoyevVoiceProfile {
  teacherName: string;
  email: string;
  title: string;
  bio: string;
  bioUz: string;
  pitch: number; // 0.8 - 1.3 default 1.02
  rate: number; // 0.85 - 1.15 default 0.98
  timbre: 'warm_mentor' | 'crisp_examiner' | 'friendly_conversational';
  toneWarmth: number; // 1 - 100
  sampleAudioUrl?: string;
  sampleAudioBase64?: string;
  recordedClips?: Record<string, string>;
  vocalAnalysis?: {
    pitchHz: number;
    pitchConfidence?: number;
    fundamentalFrequency: string;
    formantF1: number;
    formantF2: number;
    formantF3?: number;
    formantF4?: number;
    spectralCentroidHz?: number;
    jitterPercent?: number;
    resonanceScore: number;
    acousticSimilarityScore?: number;
    bark16Spectrum?: number[];
  };
  dspMorphing?: {
    enabled: boolean;
    preset?: 'master_examiner' | 'warm_mentor' | 'radio_broadcast' | 'custom' | 'exact_safoyev_clone';
    bassBoostDb: number; // 0 - 10 dB chest resonance at F0 (~118Hz)
    warmthWarmthDb: number; // 0 - 5 dB low-mid body (~260Hz)
    formantShift: number; // 0.85 - 1.15 vocal tract scale
    boxinessCutDb?: number; // -4 to 0 dB notch at 650Hz
    presenceDb: number; // 0 - 6 dB clarity at ~3.2kHz
    airSheenDb?: number; // 0 - 5 dB silk air at 10.5kHz
    tubeSaturation?: number; // 0 - 1.0 analog tube harmonic drive
    deEsserDb?: number; // -6 to 0 dB sibilance smoother at 7kHz
    compressionRatio: number; // 2 - 6 broadcast fullness
    boothReverb?: number; // 0 - 0.4 studio room acoustics
    stereoWidth?: number; // 0 - 0.5 headphone spatial presence
    glottalWarmth?: number; // 0 - 1.0 vocal cord physical pulse excitation
    microProsody?: number; // 0 - 1.0 IELTS examiner intonation inflection
    bandGains16?: number[]; // 16-band critical Bark scale spectral delta corrections
    spectralProfile?: number[]; // Calibrated acoustic fingerprint
  };
  isCloned: boolean;
  cloneDate?: string;
  neuralVoiceModel?: string; // 'Fenrir' | 'Charon' | 'Zephyr' | 'Puck'
  customGreeting: string;
  customGreetingUz: string;
}

export interface LiveSpeakingMessage {
  id: string;
  sender: 'teacher' | 'student';
  text: string;
  uzbekTranslation?: string;
  audioUrl?: string;
  corrections?: {
    original: string;
    improved: string;
    explanationUz: string;
  }[];
  timestamp: string;
}

export interface LiveSpeakingSession {
  id: string;
  studentId: string;
  studentName: string;
  topicId: string;
  topicTitle: string;
  mode: 'ielts_interview' | 'daily_chat' | 'reading_discussion' | 'toefl_debate';
  messages: LiveSpeakingMessage[];
  overallBand: number; // e.g. 7.5
  fluencyScore: number;
  pronunciationScore: number;
  lexicalScore: number;
  grammarScore: number;
  teacherSummary: string;
  teacherSummaryUz: string;
  recommendations: string[];
  durationSeconds: number;
  created_at: string;
}

// ============================================================================
// STUDENT PAYMENT SCHEDULE & INVOICE TYPES
// ============================================================================
export type PaymentStatus = 'paid' | 'pending' | 'overdue' | 'partial';
export type PaymentMethod = 'cash' | 'payme' | 'click' | 'uzum' | 'bank_transfer';
export type PaymentPlanType = 'monthly' | 'quarterly' | 'full_course' | 'custom';

export interface PaymentScheduleItem {
  id: string;
  installment_number: number;
  title: string;
  amount: number;
  due_date: string;
  paid_date?: string;
  status: PaymentStatus;
  payment_method?: PaymentMethod;
  transaction_id?: string;
  receipt_no?: string;
  notes?: string;
}

export interface StudentPaymentPlan {
  id: string;
  student_id: string;
  student_name: string;
  student_phone?: string;
  student_email: string;
  group_id: string;
  group_name: string;
  course_title: string;
  plan_type: PaymentPlanType;
  base_monthly_fee: number; // e.g. 1,200,000 UZS
  total_course_fee: number;
  discount_percent: number; // 0 - 100%
  discount_reason?: string;
  final_total_fee: number;
  paid_amount: number;
  remaining_amount: number;
  overall_status: PaymentStatus;
  next_due_date: string;
  created_at: string;
  schedules: PaymentScheduleItem[];
}

export interface PaymentReceipt {
  receipt_no: string;
  student_id: string;
  student_name: string;
  group_name: string;
  amount: number;
  method: PaymentMethod;
  payer_name?: string;
  transaction_id: string;
  date: string;
  cashier_name: string;
  notes?: string;
  verified: boolean;
}

// ============================================================================
// ADMIN ACTIVITY, TIME SPENT & PARAMETRIC AUDIT TYPES
// ============================================================================
export interface StudentActivityMetric {
  id: string;
  student_id: string;
  student_name: string;
  student_avatar?: string;
  group_name: string;
  level: string;
  status: 'online' | 'idle' | 'offline';
  device: 'desktop' | 'mobile' | 'tablet';
  last_active: string;
  total_time_minutes: number;
  today_time_minutes: number;
  weekly_time_minutes: number;
  module_breakdown: {
    speaking_minutes: number;
    listening_tactics_minutes: number;
    vocabulary_4000_minutes: number;
    reading_minutes: number;
    writing_toefl_minutes: number;
    grammar_minutes: number;
    homework_minutes: number;
  };
  parameter_mastery: {
    fluency: number; // 1-9
    lexical_resource: number; // 1-9
    pronunciation: number; // 1-9
    grammar_accuracy: number; // 1-9
    listening_accuracy_percent: number; // 0-100%
  };
  tactics_units_done: number; // 0-24
  words_mastered: number;
  speaking_sessions_count: number;
  homework_completion_rate: number; // percent
}

export interface TeacherActivityMetric {
  id: string;
  teacher_id: string;
  teacher_name: string;
  teacher_title: string;
  avatar_url?: string;
  active_groups_count: number;
  total_students_count: number;
  total_teaching_hours: number;
  today_hours: number;
  homeworks_assigned: number;
  homeworks_graded: number;
  avg_grading_turnaround_hours: number;
  feedback_quality_score: number; // e.g. 4.9 out of 5
  attendance_logging_rate: number; // percent
  last_active: string;
  status: 'online' | 'in_session' | 'offline';
}

export interface PlatformAuditAction {
  id: string;
  timestamp: string;
  actor_name: string;
  actor_role: 'admin' | 'teacher' | 'student';
  module: 'speaking' | 'listening' | 'vocabulary' | 'payment' | 'homework' | 'auth';
  action_description: string;
  duration_minutes?: number;
  device?: string;
}

export interface KaraokeLine {
  id: string;
  startTime: number;
  endTime: number;
  lineText: string;
  targetWord: string; // The one word to be filled in (case-insensitive)
  options?: string[]; // 4 options for multiple choice support or quick picking
  translationUz?: string;
}

export interface KaraokeGrammarPoint {
  title: string;
  ruleUz: string;
  exampleFromSong: string;
}

export interface KaraokeQuestion {
  id: string;
  type: 'comprehension' | 'idiom' | 'grammar';
  question: string;
  options: string[];
  answerIndex: number;
  explanationUz: string;
}

export interface KaraokeSong {
  id: string;
  title: string;
  artist: string;
  youtubeId: string;
  level: CEFRLevel;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  coverImage: string;
  genre: string;
  theme: string;
  description: string;
  totalGaps: number;
  lines: KaraokeLine[];
  grammarPoints?: KaraokeGrammarPoint[];
  quizQuestions?: KaraokeQuestion[];
}

export interface PodcastVocabulary {
  word: string;
  partOfSpeech: string;
  meaningUz: string;
  example: string;
}

export interface PodcastTranscriptLine {
  id: string;
  startTime: number;
  endTime: number;
  speaker?: string;
  text: string;
  translationUz?: string;
}

export interface PodcastQuestion {
  id: string;
  type?: 'multiple_choice' | 'true_false' | 'vocabulary';
  question: string;
  options: string[];
  answerIndex: number;
  explanationUz?: string;
}

export interface PodcastShadowingPhrase {
  id: string;
  text: string;
  translationUz: string;
  startTime: number;
  durationSeconds?: number;
  pronunciationTipUz: string;
}

export interface PodcastSummaryExercise {
  title: string;
  instructionUz: string;
  template: string; // text with {{gap_1}}, {{gap_2}}, etc.
  gaps: {
    id: string;
    correctWord: string;
    options: string[];
    hintUz: string;
  }[];
}

export interface PodcastItem {
  id: string;
  title: string;
  channel: string;
  youtubeId: string;
  level: CEFRLevel;
  duration: string;
  topic: string;
  description: string;
  coverImage: string;
  summaryUz: string;
  discussionPromptUz?: string;
  keyVocabulary: PodcastVocabulary[];
  transcript?: PodcastTranscriptLine[];
  questions: PodcastQuestion[];
  shadowingPhrases?: PodcastShadowingPhrase[];
  summaryExercise?: PodcastSummaryExercise;
}

export interface DialogueLine {
  id: string;
  roleId: string;
  speakerName: string;
  text: string;
  translationUz: string;
  audioPrompt?: string;
  phoneticTipUz?: string;
}

export interface DialogueRole {
  id: string;
  name: string;
  descriptionUz: string;
  avatar: string;
  isUserEligible: boolean;
}

export interface DialogueSituation {
  id: string;
  title: string;
  category: 'travel' | 'food' | 'business' | 'medical' | 'shopping' | 'daily';
  level: CEFRLevel;
  iconName: string;
  coverImage: string;
  scenarioUz: string;
  learningGoalsUz: string[];
  roles: DialogueRole[];
  lines: DialogueLine[];
  usefulPhrases: {
    phrase: string;
    meaningUz: string;
    context: string;
  }[];
  comprehensionQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanationUz: string;
  }[];
}

export interface StudentAchievement {
  id: string;
  title: string;
  descriptionUz: string;
  category: 'podcast' | 'karaoke' | 'listening' | 'speaking' | 'streak' | 'vocabulary' | 'writing';
  icon: string;
  xpReward: number;
  unlockedAt?: string;
  progressPercent: number; // 0 to 100
  isUnlocked: boolean;
}

// ==================== READING FOR THE REAL WORLD (BOOKS 1, 2, 3) ====================

export interface RealWorldVocab {
  word: string;
  pos: string; // n., v., adj., adv.
  phonetic: string;
  definitionEn: string;
  translationUz: string;
  sampleSentence: string;
  collocation?: string;
  synonym?: string;
}

export interface RealWorldQuizQuestion {
  id: string;
  type: 'main-idea' | 'detail' | 'inference' | 'vocabulary';
  question: string;
  options: string[];
  correctIndex: number;
  explanationUz: string;
}

export interface RealWorldGraphicOrganizer {
  organizerType: 'cause-effect' | 'compare-contrast' | 'problem-solution' | 'timeline' | 'main-ideas-details';
  title: string;
  sections: {
    heading: string;
    points: string[];
  }[];
}

export interface RealWorldSynonymMatch {
  word: string;
  synonym: string;
  definition?: string;
  explanationUz?: string;
}

export interface RealWorldPassage {
  id: string;
  passageNumber: 1 | 2;
  title: string;
  subtitle?: string;
  themeCategory: string; // e.g., 'Anthropology', 'Computer Science', 'Health', 'Sociology'
  level: 'B1' | 'B2' | 'B2+' | 'C1';
  wordCount: number;
  readingTimeMinutes: number;
  preReadingQuestions: string[];
  paragraphs: string[];
  summaryUz: string;
  targetVocab: RealWorldVocab[];
  synonymMatches?: RealWorldSynonymMatch[];
  comprehensionQuiz: RealWorldQuizQuestion[];
  graphicOrganizer: RealWorldGraphicOrganizer;
  discussionPrompts: string[];
}

export interface RealWorldUnit {
  id: string;
  unitNumber: number;
  title: string;
  subjectArea: string;
  themeDescriptionUz: string;
  passages: RealWorldPassage[];
}

export interface RealWorldBook {
  id: string;
  bookNumber: 1 | 2 | 3;
  title: string;
  edition: string;
  targetLevel: string; // 'Intermediate (B1)', 'Upper-Intermediate (B2)', 'Advanced (B2+/C1)'
  cefrLevel: 'B1' | 'B2' | 'B2+' | 'C1';
  descriptionUz: string;
  coverImage: string;
  totalUnits: number;
  totalPassages: number;
  totalTargetWords: number;
  colorTheme: {
    primary: string;
    badgeBg: string;
    gradient: string;
  };
  units: RealWorldUnit[];
}

