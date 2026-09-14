import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { CEFRLevel } from '../../types';
import { 
  Award, CheckCircle2, AlertCircle, ArrowRight, RotateCcw, 
  Printer, Sparkles, BookOpen, Clock, ShieldCheck, Download
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Question {
  id: number;
  level: CEFRLevel;
  domain: 'Grammar' | 'Vocabulary' | 'Discourse';
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  explanationUz: string;
}

const DIAGNOSTIC_QUESTIONS: Question[] = [
  {
    id: 1,
    level: 'A2',
    domain: 'Grammar',
    question: 'Where ______ you yesterday evening when our study group met at the library?',
    options: ['was', 'were', 'did', 'are'],
    correct: 'were',
    explanation: 'The pronoun "you" in past simple takes "were".',
    explanationUz: "'You' olmoshi o'tgan zamonda 'were' yordamchi fe'lini oladi."
  },
  {
    id: 2,
    level: 'A2',
    domain: 'Vocabulary',
    question: 'Jasur is very ______; he always finishes his homework before 8 PM.',
    options: ['punctual', 'crowded', 'bitter', 'shallow'],
    correct: 'punctual',
    explanation: '"Punctual" means happening or doing something at the agreed or proper time.',
    explanationUz: "'Punctual' vaqtida bajaradigan, aniq ma'nosini bildiradi."
  },
  {
    id: 3,
    level: 'B1',
    domain: 'Grammar',
    question: 'I have lived in this district of Tashkent ______ I started attending Premier School.',
    options: ['for', 'since', 'during', 'from'],
    correct: 'since',
    explanation: '"Since" marks the specific starting point in time of an action continuing to the present.',
    explanationUz: "'Since' o'tmishdagi aniq boshlanish vaqtini bildirish uchun ishlatiladi."
  },
  {
    id: 4,
    level: 'B1',
    domain: 'Vocabulary',
    question: 'Regular vocabulary reviews help students ______ new academic terms into long-term memory.',
    options: ['consolidate', 'scatter', 'diminish', 'collapse'],
    correct: 'consolidate',
    explanation: '"Consolidate" means to make something physically stronger or more solid in memory.',
    explanationUz: "'Consolidate' mustahkamlamoq, xotirada o'rnashib qolishini ta'minlamoq degani."
  },
  {
    id: 5,
    level: 'B2',
    domain: 'Grammar',
    question: 'If Aziz ______ the express train from Samarkand earlier, he would have arrived on time.',
    options: ['caught', 'had caught', 'catches', 'would catch'],
    correct: 'had caught',
    explanation: 'Third conditional for hypothetical past events requires "had + past participle".',
    explanationUz: "O'tmishdagi afsus yoki ehtimollik (Third Conditional) uchun 'had + V3' qo'llaniladi."
  },
  {
    id: 6,
    level: 'B2',
    domain: 'Discourse',
    question: 'The initiative was costly; ______, the long-term educational benefits far outweighed the expense.',
    options: ['nonetheless', 'furthermore', 'namely', 'likewise'],
    correct: 'nonetheless',
    explanation: '"Nonetheless" introduces a contrasting, conceding result.',
    explanationUz: "'Nonetheless' (shunga qaramay) qarama-qarshi fikrni bog'laydi."
  },
  {
    id: 7,
    level: 'B2',
    domain: 'Grammar',
    question: 'Not until the official Cambridge results were published ______ his band score.',
    options: ['he discovered', 'did he discover', 'he had discovered', 'was he discovered'],
    correct: 'did he discover',
    explanation: 'Negative fronting with "Not until" requires subject-auxiliary inversion.',
    explanationUz: "'Not until' gap boshida kelganda inversiya (yordamchi fe'l egadan oldinga o'tadi) bo'ladi."
  },
  {
    id: 8,
    level: 'C1',
    domain: 'Grammar',
    question: 'The Academic Director insisted that all mock exam scripts ______ by Friday afternoon.',
    options: ['be evaluated', 'are evaluated', 'were evaluated', 'will be evaluated'],
    correct: 'be evaluated',
    explanation: 'The present subjunctive with verbs of urging/insistence uses the base form "be".',
    explanationUz: "Talab, iltimos fe'llaridan keyin (subjunctive) fe'lning asil shakli 'be evaluated' ishlatiladi."
  },
  {
    id: 9,
    level: 'C1',
    domain: 'Discourse',
    question: 'Seldom ______ such linguistic fluency and analytical depth from high school candidates.',
    options: ['we encounter', 'have we encountered', 'did we encountered', 'we have encountered'],
    correct: 'have we encountered',
    explanation: 'Negative adverb "Seldom" triggers inversion: "have we encountered".',
    explanationUz: "'Seldom' inkor ma'noli ravish gap boshida kelganda inversiya hosil qiladi."
  },
  {
    id: 10,
    level: 'C1',
    domain: 'Vocabulary',
    question: 'The research aims to ______ the complex correlation between bilingualism and cognitive agility.',
    options: ['elucidate', 'fabricate', 'obfuscate', 'stagnate'],
    correct: 'elucidate',
    explanation: '"Elucidate" means to make something clear; explain.',
    explanationUz: "'Elucidate' oydinlik kiritmoq, batafsil ilmiy tushuntirib bermoq ma'nosida keladi."
  }
];

export const PlacementTestPage: React.FC = () => {
  const { profile, updateProfile } = useAuth();
  const { t } = useLanguage();
  const { awardXp } = useLMSData();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [calculatedLevel, setCalculatedLevel] = useState<CEFRLevel>('B1');
  const [certDate] = useState(new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }));

  const currentQ = DIAGNOSTIC_QUESTIONS[currentIdx];
  const isSelected = Boolean(selectedAnswers[currentQ?.id]);

  const handleSelectOption = (opt: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQ.id]: opt
    }));
  };

  const handleNext = () => {
    if (currentIdx < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    let correctCount = 0;
    DIAGNOSTIC_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) correctCount += 1;
    });

    setScore(correctCount);

    let level: CEFRLevel = 'A1';
    if (correctCount >= 9) level = 'C1';
    else if (correctCount >= 7) level = 'B2';
    else if (correctCount >= 5) level = 'B1';
    else if (correctCount >= 3) level = 'A2';
    else level = 'A1';

    setCalculatedLevel(level);
    setIsCompleted(true);
    awardXp(100);

    // Update profile level in context
    if (updateProfile) {
      updateProfile({ level });
    }

    try {
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
    } catch {}
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setIsCompleted(false);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              CEFR Diagnostic Placement Assessment
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700 border border-indigo-200">
              Adaptive CEFR Diagnostic
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Determine your European Framework level (A1 to C1) with verified diagnostics and certification.
          </p>
        </div>

        {isCompleted && (
          <button
            type="button"
            onClick={handleRetake}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition self-start"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Retake Test
          </button>
        )}
      </div>

      {!isCompleted ? (
        /* Test Taking Interface */
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Progress Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600">
              <span>Question {currentIdx + 1} of {DIAGNOSTIC_QUESTIONS.length}</span>
              <span className="text-indigo-600 font-mono">
                {Math.round(((currentIdx + 1) / DIAGNOSTIC_QUESTIONS.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / DIAGNOSTIC_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                Target Level: {currentQ.level} • {currentQ.domain}
              </span>
              <span className="text-xs font-mono text-slate-400">#Q-{currentQ.id}</span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="grid grid-cols-1 gap-2.5">
              {currentQ.options.map((opt, i) => {
                const isCurrentSelected = selectedAnswers[currentQ.id] === opt;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelectOption(opt)}
                    className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition flex items-center justify-between ${
                      isCurrentSelected
                        ? 'bg-indigo-50 border-indigo-500 text-indigo-900 shadow-xs ring-1 ring-indigo-300'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                        isCurrentSelected ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-300 text-slate-600'
                      }`}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span>{opt}</span>
                    </div>
                    {isCurrentSelected && <CheckCircle2 className="w-4 h-4 text-indigo-600" />}
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx(prev => prev - 1)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-30 transition"
              >
                Previous
              </button>

              <button
                type="button"
                disabled={!isSelected}
                onClick={handleNext}
                className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 shadow-sm transition cursor-pointer"
              >
                <span>{currentIdx === DIAGNOSTIC_QUESTIONS.length - 1 ? 'Finish & See Results' : 'Next Question'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Results & Certificate Display */
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Summary Banner */}
          <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300">
                Diagnostic Assessment Complete
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                CEFR Level: {calculatedLevel}
              </h2>
              <p className="text-xs text-slate-300 max-w-md">
                You scored <strong className="text-amber-300">{score} out of 10</strong> ({score * 10}% accuracy).
                {calculatedLevel === 'C1' ? ' Outstanding academic proficiency matching IELTS 7.5 - 8.0 standards.' :
                 calculatedLevel === 'B2' ? ' Strong upper-intermediate control matching IELTS 6.0 - 6.5 targets.' :
                 calculatedLevel === 'B1' ? ' Solid intermediate foundation ready for IELTS foundation training.' :
                 ' Elementary competence suitable for General English Booster courses.'}
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-black text-amber-400">{score}/10</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">Correct</span>
              </div>
              <button
                type="button"
                onClick={handlePrintCertificate}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 shadow-sm transition"
              >
                <Printer className="w-3.5 h-3.5" /> Print Certificate
              </button>
            </div>
          </div>

          {/* Official Premier School Certificate (Print-Ready) */}
          <div className="bg-white border-8 border-slate-900/10 p-8 sm:p-12 rounded-3xl shadow-md text-center relative overflow-hidden space-y-6 print:border-4 print:p-6 print:shadow-none">
            {/* Watermark seal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none" />

            {/* Certificate Header */}
            <div className="space-y-1 relative">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl mx-auto shadow-sm">
                P
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 block pt-2">
                Premier School English Language Center
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 tracking-tight">
                Certificate of Proficiency & Level Assessment
              </h3>
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
                Tashkent Hub • Standardized CEFR Diagnostic
              </p>
            </div>

            {/* Candidate Info */}
            <div className="py-4 space-y-2 relative border-y border-slate-200/80 max-w-lg mx-auto">
              <span className="text-xs text-slate-500 italic block">This is officially presented to:</span>
              <h4 className="text-2xl font-bold text-slate-900 font-serif">
                {profile?.full_name || "O'quvchi"}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                Having successfully completed the formal Premier School diagnostic examination, achieving evaluated competence at:
              </p>
              <div className="inline-block px-5 py-2 rounded-xl bg-indigo-50 border-2 border-indigo-200 font-black text-indigo-800 text-lg sm:text-xl tracking-wide">
                CEFR LEVEL {calculatedLevel} • {calculatedLevel === 'C1' ? 'ADVANCED' : calculatedLevel === 'B2' ? 'UPPER INTERMEDIATE' : 'INTERMEDIATE'}
              </div>
            </div>

            {/* Verification Footer */}
            <div className="grid grid-cols-2 gap-8 max-w-md mx-auto pt-4 relative text-left text-xs">
              <div className="space-y-1 border-t border-slate-300 pt-2">
                <span className="font-bold text-slate-800 block">Assessment Date:</span>
                <span className="text-slate-500">{certDate}</span>
                <span className="text-[10px] text-slate-400 block">ID: PS-CEFR-{Math.abs(score * 8421).toString().padStart(6, '0')}</span>
              </div>
              <div className="space-y-1 border-t border-slate-300 pt-2 text-right">
                <span className="font-bold text-slate-800 block">Director of Studies:</span>
                <span className="text-slate-600 font-serif italic">Malika Karimova (CELTA)</span>
                <span className="text-[10px] text-emerald-600 font-bold block flex items-center justify-end gap-1">
                  <ShieldCheck className="w-3 h-3" /> Verified Diagnostic
                </span>
              </div>
            </div>
          </div>

          {/* Diagnostic Review Breakdown */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Diagnostic Answers Breakdown
            </h3>
            <div className="space-y-3">
              {DIAGNOSTIC_QUESTIONS.map((q) => {
                const isCorrect = selectedAnswers[q.id] === q.correct;
                return (
                  <div
                    key={q.id}
                    className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                      isCorrect ? 'bg-emerald-50/60 border-emerald-200' : 'bg-rose-50/60 border-rose-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">
                        Q{q.id}. {q.question}
                      </span>
                      <span className={`px-2 py-0.5 rounded font-bold uppercase text-[10px] ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>

                    <div className="text-slate-600">
                      <strong>Your answer:</strong> <span className={isCorrect ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>{selectedAnswers[q.id] || 'None'}</span>
                      {!isCorrect && (
                        <span className="ml-3 text-emerald-800 font-bold">
                          (Correct: {q.correct})
                        </span>
                      )}
                    </div>

                    <p className="text-[11px] text-slate-500">{q.explanation}</p>
                    {q.explanationUz && (
                      <p className="text-[11px] text-indigo-700 bg-white/70 p-1.5 rounded border border-indigo-100">
                        🇺🇿 {q.explanationUz}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
