import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { generateGrammarExercise } from '../../lib/ai';
import { playSound } from '../../lib/sound';
import { GrammarExercise, CEFRLevel } from '../../types';
import { 
  Sparkles, CheckCircle2, XCircle, ArrowRight, 
  HelpCircle, RefreshCw, Zap, BookOpen 
} from 'lucide-react';
import confetti from 'canvas-confetti';

const GRAMMAR_TOPICS = [
  'Present Perfect vs Past Simple',
  'Conditionals (Third & Mixed)',
  'Inversion & Emphasis (Rarely, Seldom)',
  'Passive Voice & Reporting Verbs',
  'Relative Clauses (Defining & Non-defining)',
  'Modals of Deduction (must have, can\'t have)',
  'Subjunctive & Wish Structures'
];

export const GrammarPractice: React.FC = () => {
  const { profile } = useAuth();
  const { t } = useLanguage();
  const { addXP } = useLMSData();

  const [topic, setTopic] = useState(GRAMMAR_TOPICS[0]);
  const [level, setLevel] = useState<CEFRLevel>(profile?.level || 'B2');
  const [exercises, setExercises] = useState<GrammarExercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionScore, setSessionScore] = useState(0);

  const handleGenerate = async () => {
    setIsLoading(true);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setCurrentIndex(0);
    setSessionScore(0);

    const generated = await generateGrammarExercise(topic, level, 3);
    setExercises(generated);
    setIsLoading(false);
  };

  const currentExercise = exercises[currentIndex];

  const handleCheckAnswer = () => {
    if (!selectedOption || !currentExercise) return;
    setIsAnswerChecked(true);

    const isCorrect = selectedOption.trim().toLowerCase() === currentExercise.answer.trim().toLowerCase();
    if (isCorrect) {
      addXP(15, 'Grammar correct answer');
      setSessionScore(prev => prev + 1);
      playSound('correct');
      try {
        confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
      } catch {}
    } else {
      playSound('wrong');
    }
  };

  const handleNextExercise = () => {
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setCurrentIndex(prev => prev + 1);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Google Gemini 3.8 Flash AI Engine</span>
        </div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          {t('grammarTitle')}
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          {t('grammarSubtitle')}
        </p>
      </div>

      {/* Generator Configuration Bar */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {t('selectTopic')}
            </label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-hidden focus:border-blue-500 transition"
            >
              {GRAMMAR_TOPICS.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {t('selectLevel')}
            </label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as CEFRLevel)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-hidden focus:border-blue-500 transition"
            >
              <option value="A1">A1 - Beginner</option>
              <option value="A2">A2 - Elementary</option>
              <option value="B1">B1 - Intermediate</option>
              <option value="B2">B2 - Upper-Intermediate</option>
              <option value="C1">C1 - Advanced (IELTS 7.5+)</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          disabled={isLoading}
          onClick={handleGenerate}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition shadow-sm disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4" />
          <span>{isLoading ? 'Gemini 3.8 Flash savollarni tuzmoqda...' : t('generateNewExercise')}</span>
        </button>
      </div>

      {/* Exercise Practice Area */}
      {currentExercise ? (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">
                {t('questionNum')} {currentIndex + 1} / {exercises.length}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                CEFR {level}
              </span>
            </div>

            <div className="flex items-center gap-1 text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
              <Zap className="w-3.5 h-3.5" />
              <span>Ball: {sessionScore} / {exercises.length}</span>
            </div>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              {currentExercise.question}
            </h2>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentExercise.options.map((opt, idx) => {
              const isSelected = selectedOption === opt;
              const isCorrectAnswer = opt.trim().toLowerCase() === currentExercise.answer.trim().toLowerCase();

              let btnStyle = 'bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50';

              if (isAnswerChecked) {
                if (isCorrectAnswer) {
                  btnStyle = 'bg-emerald-50 text-emerald-900 border-emerald-500 ring-2 ring-emerald-500/20';
                } else if (isSelected && !isCorrectAnswer) {
                  btnStyle = 'bg-rose-50 text-rose-900 border-rose-500 ring-2 ring-rose-500/20';
                } else {
                  btnStyle = 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
                }
              } else if (isSelected) {
                btnStyle = 'bg-blue-50 text-blue-900 border-blue-600 ring-2 ring-blue-500/20';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isAnswerChecked}
                  onClick={() => setSelectedOption(opt)}
                  className={`p-4 rounded-xl border text-left font-medium text-xs sm:text-sm transition flex items-center justify-between ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {isAnswerChecked && isCorrectAnswer && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                  )}
                  {isAnswerChecked && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box when Answer Checked */}
          {isAnswerChecked && (
            <div className={`p-4 rounded-xl border text-xs leading-relaxed space-y-1 ${
              selectedOption?.trim().toLowerCase() === currentExercise.answer.trim().toLowerCase()
                ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                : 'bg-amber-50/70 border-amber-200 text-amber-900'
            }`}>
              <div className="font-bold flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                <span>{t('explanation')}</span>
              </div>
              <p>{currentExercise.explanation}</p>
            </div>
          )}

          {/* Footer Decision Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            {!isAnswerChecked ? (
              <button
                type="button"
                disabled={!selectedOption}
                onClick={handleCheckAnswer}
                className="px-6 py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl hover:bg-blue-700 transition disabled:opacity-40"
              >
                {t('checkAnswer')}
              </button>
            ) : currentIndex < exercises.length - 1 ? (
              <button
                type="button"
                onClick={handleNextExercise}
                className="flex items-center gap-1.5 px-6 py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl hover:bg-blue-700 transition"
              >
                <span>{t('tryAnother')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleGenerate}
                className="flex items-center gap-1.5 px-6 py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl hover:bg-emerald-700 transition"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Yangi mashqlar to'plami</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl p-10 text-center border border-slate-200/80 shadow-2xs">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">Grammatika mashqini boshlang</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 mb-6">
            Mavzuni va darajani tanlab "Yangi savollar tuzish" tugmasini bosing. Gemini AI darhol interaktiv savollar generatsiya qiladi.
          </p>
          <button
            type="button"
            onClick={handleGenerate}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isLoading ? 'Yuklanmoqda...' : t('generateNewExercise')}</span>
          </button>
        </div>
      )}
    </div>
  );
};
