import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { speakWord } from '../../lib/sound';
import { 
  Volume2, Check, RefreshCw, Layers, Award, 
  Sparkles, CheckCircle2, ChevronRight, Eye 
} from 'lucide-react';

export const DailyWordsPage: React.FC = () => {
  const { profile } = useAuth();
  const { t } = useLanguage();
  const { dailyWords, wordProgress, updateWordReview, awardXp } = useLMSData();

  const [activeTab, setActiveTab] = useState<'flashcards' | 'quiz' | 'list'>('flashcards');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCefr, setSelectedCefr] = useState<string>('ALL');

  // Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Target words for review
  const targetWords = dailyWords;
  const currentWord = targetWords[currentIndex] || targetWords[0];

  // Get current word's box level
  const currentProgress = wordProgress.find(wp => wp.word_id === currentWord?.id && wp.student_id === profile?.id);
  const currentBox = currentProgress?.box || 1;

  const handleReview = async (remembered: boolean) => {
    if (!currentWord) return;
    await updateWordReview(currentWord.id, remembered);
    setShowAnswer(false);
    if (currentIndex < targetWords.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePlayAudio = (e: React.MouseEvent, word: string) => {
    e.stopPropagation();
    speakWord(word);
  };

  // Count box distribution
  const boxCounts = [1, 2, 3, 4, 5].map(boxNum => {
    return wordProgress.filter(wp => wp.student_id === profile?.id && wp.box === boxNum).length;
  });

  // Filtered words for list view
  const filteredWords = dailyWords.filter(w => {
    const matchesSearch = w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          w.translation_uz.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedCefr === 'ALL' || w.cefr_level === selectedCefr;
    return matchesSearch && matchesLevel;
  });

  // Quiz questions generation
  const quizQuestions = targetWords.slice(0, 5).map((w, idx) => {
    const distractors = targetWords.filter(tw => tw.id !== w.id).slice(0, 3).map(tw => tw.translation_uz);
    const options = [w.translation_uz, ...distractors].sort(() => 0.5 - Math.random());
    return {
      word: w.word,
      correct: w.translation_uz,
      definition: w.definition,
      options
    };
  });

  const handleSelectQuizOption = (opt: string) => {
    if (selectedQuizOption !== null) return;
    setSelectedQuizOption(opt);
    const q = quizQuestions[quizIndex];
    if (opt === q.correct) {
      setQuizScore(prev => prev + 1);
      awardXp(15);
    }
  };

  const handleNextQuiz = () => {
    setSelectedQuizOption(null);
    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setSelectedQuizOption(null);
    setQuizCompleted(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            {t('dailyWordsTitle')}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            {t('dailyWordsSubtitle')} • 20+ Academic IELTS & CEFR vocabulary items with Leitner SRS intervals.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 self-start">
          <button
            type="button"
            onClick={() => setActiveTab('flashcards')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'flashcards'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Flashcard ({targetWords.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('quiz')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'quiz'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Vocab Quiz (+XP)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('list')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'list'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Word Bank
          </button>
        </div>
      </div>

      {/* Leitner 5-Box SRS Visualizer */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
          Leitner 5-Qutili Xotira Tizimi (Spaced Repetition Intervals)
        </span>
        <div className="grid grid-cols-5 gap-2 sm:gap-4 text-center">
          {[1, 2, 3, 4, 5].map(b => (
            <div 
              key={b} 
              className={`p-3 rounded-xl border ${
                b === 5 
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900' 
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <div className="text-[10px] font-bold uppercase text-slate-400">Quti {b}</div>
              <div className="text-lg font-black mt-0.5">{boxCounts[b - 1] || 0}</div>
              <div className="text-[10px] text-slate-500 truncate">
                {b === 1 ? '1 kun' : b === 2 ? '3 kun' : b === 3 ? '5 kun' : b === 4 ? '10 kun' : 'Yodlangan!'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mode 1: Interactive Flashcards */}
      {activeTab === 'flashcards' && currentWord && (
        <div className="max-w-xl mx-auto space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={currentIndex === 0}
                onClick={() => {
                  setCurrentIndex(prev => Math.max(0, prev - 1));
                  setShowAnswer(false);
                }}
                className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40"
              >
                ← Oldingi
              </button>
              <span>{currentIndex + 1} / {targetWords.length}</span>
              <button
                type="button"
                disabled={currentIndex === targetWords.length - 1}
                onClick={() => {
                  setCurrentIndex(prev => Math.min(targetWords.length - 1, prev + 1));
                  setShowAnswer(false);
                }}
                className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40"
              >
                Keyingi →
              </button>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">
              Quti {currentBox} • {currentWord.cefr_level}
            </span>
          </div>

          {/* Flashcard Box */}
          <div 
            onClick={() => setShowAnswer(!showAnswer)}
            className="cursor-pointer bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-indigo-400 transition-all shadow-md min-h-[320px] flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 uppercase tracking-wider">
                    {currentWord.part_of_speech || 'Vocabulary'}
                  </span>
                  {currentWord.phonetic && (
                    <span className="text-xs font-mono text-slate-400">
                      {currentWord.phonetic}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={(e) => handlePlayAudio(e, currentWord.word)}
                  className="p-2.5 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition shadow-2xs"
                  title="Talaffuzni tinglash (Web Speech)"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              <div className="text-center my-6">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {currentWord.word}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  (Kartani bosing — tarjima va namunaviy gapni ko'rish uchun)
                </p>
              </div>
            </div>

            {/* Flipped Content / Translation & Example */}
            {showAnswer ? (
              <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100 space-y-2 text-left animate-in fade-in duration-200">
                <div>
                  <span className="text-[10px] font-bold uppercase text-indigo-700 tracking-wider">O'zbekcha ma'nosi:</span>
                  <div className="text-base font-bold text-slate-900">{currentWord.translation_uz}</div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase text-indigo-700 tracking-wider">Inglizcha ta'rifi:</span>
                  <div className="text-xs text-slate-700">{currentWord.definition}</div>
                </div>

                <div className="pt-1 border-t border-indigo-200/50">
                  <span className="text-[10px] font-bold uppercase text-indigo-700 tracking-wider">Namunaviy gap:</span>
                  <div className="text-xs italic text-slate-800">"{currentWord.example}"</div>
                </div>
              </div>
            ) : (
              <div className="text-center py-4 text-xs font-semibold text-indigo-600 flex items-center justify-center gap-1.5">
                <Eye className="w-4 h-4" />
                <span>{t('showTranslation')}</span>
              </div>
            )}
          </div>

          {/* Action Decision Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={() => handleReview(false)}
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-bold text-xs transition shadow-2xs"
            >
              <RefreshCw className="w-4 h-4 text-amber-500" />
              <span>{t('dontKnowWord')}</span>
            </button>

            <button
              type="button"
              onClick={() => handleReview(true)}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 font-bold text-xs transition shadow-sm"
            >
              <Check className="w-4 h-4" />
              <span>{t('knowWord')}</span>
            </button>
          </div>
        </div>
      )}

      {/* Mode 2: Vocabulary Quiz Challenge */}
      {activeTab === 'quiz' && (
        <div className="max-w-xl mx-auto space-y-4">
          {!quizCompleted ? (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Savol {quizIndex + 1} / {quizQuestions.length}</span>
                <span className="text-indigo-600 font-bold">To'plangan: {quizScore * 15} XP</span>
              </div>

              <div className="space-y-2 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Ushbu so'zning to'g'ri o'zbekcha tarjimasini tanlang:
                </span>
                <h3 className="text-3xl font-black text-slate-900">
                  {quizQuestions[quizIndex]?.word}
                </h3>
                <p className="text-xs text-slate-500 italic">
                  "{quizQuestions[quizIndex]?.definition}"
                </p>
              </div>

              {/* Quiz Options */}
              <div className="space-y-2.5">
                {quizQuestions[quizIndex]?.options.map((opt, i) => {
                  const isSelected = selectedQuizOption === opt;
                  const isCorrect = opt === quizQuestions[quizIndex]?.correct;
                  let btnStyle = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';

                  if (selectedQuizOption !== null) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold';
                    } else if (isSelected && !isCorrect) {
                      btnStyle = 'bg-rose-100 border-rose-400 text-rose-900 font-bold';
                    }
                  }

                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleSelectQuizOption(opt)}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {selectedQuizOption !== null && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedQuizOption !== null && (
                <button
                  type="button"
                  onClick={handleNextQuiz}
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition"
                >
                  {quizIndex < quizQuestions.length - 1 ? 'Keyingi so\'roq →' : 'Natijani ko\'rish'}
                </button>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-amber-600">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Viktorina Yakunlandi!</h2>
              <p className="text-xs text-slate-600">
                Siz <strong>{quizScore} / {quizQuestions.length}</strong> ta to'g'ri javob berdingiz va <strong>+{quizScore * 15} XP</strong> jamg'ardingiz.
              </p>
              <button
                type="button"
                onClick={handleRestartQuiz}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition"
              >
                Qayta Boshlash
              </button>
            </div>
          )}
        </div>
      )}

      {/* Mode 3: Word List View & Search */}
      {activeTab === 'list' && (
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search word in English or Uzbek..."
              className="w-full sm:flex-1 text-xs px-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-indigo-500"
            />
            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              {['ALL', 'B1', 'B2', 'C1'].map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSelectedCefr(lvl)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    selectedCefr === lvl
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="divide-y divide-slate-100">
              {filteredWords.map((word) => {
                const prog = wordProgress.find(wp => wp.word_id === word.id && wp.student_id === profile?.id);
                const box = prog?.box || 1;

                return (
                  <div key={word.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/70 transition">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base font-bold text-slate-900">{word.word}</span>
                        {word.phonetic && <span className="text-xs font-mono text-slate-400">{word.phonetic}</span>}
                        <span className="text-xs text-slate-400 italic">({word.part_of_speech})</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          {word.cefr_level}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-indigo-700">{word.translation_uz}</div>
                      <p className="text-xs text-slate-600 mt-0.5">{word.definition}</p>
                      <p className="text-xs text-slate-400 italic mt-0.5">"{word.example}"</p>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <button
                        type="button"
                        onClick={(e) => handlePlayAudio(e, word.word)}
                        className="p-2 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition"
                        title="Audio talaffuz"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
                        Quti {box}
                      </span>
                    </div>
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
