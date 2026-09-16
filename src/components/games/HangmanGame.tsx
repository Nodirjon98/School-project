import React, { useState, useEffect, useCallback } from 'react';
import { 
  Volume2, HelpCircle, RotateCcw, Award, Heart, 
  Sparkles, CheckCircle2, XCircle, ArrowRight, BookOpen, Lightbulb
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TargetWord } from '../../types';
import { 
  gameSounds, speakGameWord, recordGameVictory, recordGameLoss, GameWordFilter, getRandomCurriculumWords, maskWordInClue 
} from '../../lib/wordGameUtils';
import { useAuth } from '../../contexts/AuthContext';

interface HangmanGameProps {
  filter: GameWordFilter;
  onXpEarned?: (xp: number) => void;
}

const MAX_MISTAKES = 6;
const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

export const HangmanGame: React.FC<HangmanGameProps> = ({ filter, onXpEarned }) => {
  const { profile, updateProfile } = useAuth();

  const [wordList, setWordList] = useState<TargetWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [mistakes, setMistakes] = useState<number>(0);
  const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [showUzbekHint, setShowUzbekHint] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);
  const [earnedXpTotal, setEarnedXpTotal] = useState<number>(0);

  // Load word pool
  const loadWords = useCallback(() => {
    const list = getRandomCurriculumWords(filter, 30);
    setWordList(list);
    setCurrentIndex(0);
    setGuessedLetters(new Set());
    setMistakes(0);
    setStatus('playing');
    setShowUzbekHint(false);
  }, [filter]);

  useEffect(() => {
    loadWords();
  }, [loadWords]);

  const currentTarget = wordList[currentIndex] || null;
  const targetClean = currentTarget ? currentTarget.word.toUpperCase().replace(/[^A-Z]/g, '') : '';

  // Setup next word in queue
  const nextWord = useCallback(() => {
    if (currentIndex + 1 < wordList.length) {
      setCurrentIndex(prev => prev + 1);
      setGuessedLetters(new Set());
      setMistakes(0);
      setStatus('playing');
      setShowUzbekHint(false);
    } else {
      loadWords();
    }
  }, [currentIndex, wordList.length, loadWords]);

  // Handle guessing a letter
  const guessLetter = useCallback((letter: string) => {
    if (status !== 'playing' || !targetClean) return;
    const l = letter.toUpperCase();
    if (guessedLetters.has(l)) return;

    gameSounds.playKeyClick();
    const newGuessed = new Set(guessedLetters);
    newGuessed.add(l);
    setGuessedLetters(newGuessed);

    if (targetClean.includes(l)) {
      // Check win condition
      const isWon = targetClean.split('').every(char => newGuessed.has(char));
      if (isWon) {
        setStatus('won');
        const xp = 25 + (mistakes === 0 ? 10 : 0);
        setEarnedXpTotal(prev => prev + xp);
        setStreak(prev => prev + 1);
        recordGameVictory('hangman', xp);

        if (profile && updateProfile) {
          updateProfile({ xp: (profile.xp || 0) + xp });
        }
        if (onXpEarned) onXpEarned(xp);

        gameSounds.playVictory();
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
        speakGameWord(currentTarget?.word || '');
      }
    } else {
      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      gameSounds.playError();

      if (newMistakes >= MAX_MISTAKES) {
        setStatus('lost');
        setStreak(0);
        recordGameLoss();
        speakGameWord(currentTarget?.word || '');
      }
    }
  }, [status, targetClean, guessedLetters, mistakes, profile, updateProfile, onXpEarned, currentTarget]);

  // Physical keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const key = e.key.toUpperCase();
      if (/^[A-Z]$/.test(key)) {
        guessLetter(key);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [guessLetter]);

  // Hint: reveal 1 random unrevealed letter
  const handleRevealLetter = () => {
    if (status !== 'playing' || !targetClean) return;
    const unrevealed = targetClean.split('').filter(char => !guessedLetters.has(char));
    if (unrevealed.length > 0) {
      const randomChar = unrevealed[Math.floor(Math.random() * unrevealed.length)];
      guessLetter(randomChar);
    }
  };

  if (!currentTarget) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-slate-200">
        <p className="text-slate-500 font-bold">Tanlangan bo'lim bo'yicha so'zlar topilmadi.</p>
        <button
          onClick={loadWords}
          className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs"
        >
          Qayta yuklash
        </button>
      </div>
    );
  }

  const livesRemaining = MAX_MISTAKES - mistakes;

  return (
    <div className="space-y-6">
      {/* Top Game Bar */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-black">
            🪓
          </div>
          <div>
            <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
              <span>Dor O'yini (Hangman Challenge)</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-black">
                {currentIndex + 1} / {wordList.length}
              </span>
            </h2>
            <p className="text-xs text-slate-500 font-semibold mt-0.5">
              4000 Essential English Words o'quv dasturi asosida
            </p>
          </div>
        </div>

        {/* Stats Pills */}
        <div className="flex items-center gap-2.5">
          {/* Streak */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
            <span>🔥</span>
            <span>Streak: <strong className="font-black">{streak}</strong></span>
          </div>

          {/* XP */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-900">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>+{earnedXpTotal} XP</span>
          </div>

          {/* Lives (Hearts) */}
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-rose-50 border border-rose-200">
            {Array.from({ length: MAX_MISTAKES }).map((_, idx) => (
              <Heart
                key={idx}
                className={`w-3.5 h-3.5 transition-all ${
                  idx < livesRemaining
                    ? 'text-rose-500 fill-rose-500'
                    : 'text-slate-300 fill-slate-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Play Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: SVG Hangman Canvas */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 p-6 rounded-3xl border border-slate-800 flex flex-col items-center justify-between text-white relative overflow-hidden shadow-xl">
          <div className="w-full flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold uppercase tracking-wider">Imkoniyatlar: {livesRemaining} ta qoldi</span>
            <span className={`font-black ${mistakes > 4 ? 'text-rose-400 animate-pulse' : 'text-emerald-400'}`}>
              {mistakes === 0 ? "Mukammal!" : `${mistakes} ta xato`}
            </span>
          </div>

          {/* SVG Hangman Scaffold */}
          <div className="my-6 w-56 h-64 relative flex items-center justify-center">
            <svg viewBox="0 0 200 240" className="w-full h-full stroke-indigo-200" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Base ground platform */}
              <line x1="20" y1="220" x2="180" y2="220" stroke="#64748b" strokeWidth="6" />

              {/* Upright pole */}
              <line x1="60" y1="220" x2="60" y2="30" stroke="#cbd5e1" strokeWidth="5" />

              {/* Top beam */}
              <line x1="58" y1="30" x2="140" y2="30" stroke="#cbd5e1" strokeWidth="5" />

              {/* Diagonal brace */}
              <line x1="60" y1="65" x2="95" y2="30" stroke="#94a3b8" strokeWidth="4" />

              {/* Rope */}
              <line x1="140" y1="30" x2="140" y2="60" stroke="#f59e0b" strokeWidth="3" strokeDasharray="2,2" />

              {/* 1. Head */}
              {mistakes >= 1 && (
                <circle cx="140" cy="78" r="18" stroke="#38bdf8" strokeWidth="3.5" fill="#0f172a" />
              )}

              {/* Face Expression */}
              {mistakes >= 1 && (
                <>
                  {status === 'lost' ? (
                    // Dead eyes X X
                    <>
                      <line x1="133" y1="73" x2="137" y2="77" stroke="#f43f5e" strokeWidth="2" />
                      <line x1="137" y1="73" x2="133" y2="77" stroke="#f43f5e" strokeWidth="2" />
                      <line x1="143" y1="73" x2="147" y2="77" stroke="#f43f5e" strokeWidth="2" />
                      <line x1="147" y1="73" x2="143" y2="77" stroke="#f43f5e" strokeWidth="2" />
                      <path d="M 134 86 Q 140 82 146 86" stroke="#f43f5e" strokeWidth="2" />
                    </>
                  ) : mistakes >= 4 ? (
                    // Worried face
                    <>
                      <circle cx="135" cy="75" r="2" fill="#38bdf8" />
                      <circle cx="145" cy="75" r="2" fill="#38bdf8" />
                      <line x1="134" y1="85" x2="146" y2="85" stroke="#f59e0b" strokeWidth="2" />
                    </>
                  ) : (
                    // Confident / smiling face
                    <>
                      <circle cx="135" cy="75" r="2" fill="#34d399" />
                      <circle cx="145" cy="75" r="2" fill="#34d399" />
                      <path d="M 134 83 Q 140 89 146 83" stroke="#34d399" strokeWidth="2" />
                    </>
                  )}
                </>
              )}

              {/* 2. Torso */}
              {mistakes >= 2 && (
                <line x1="140" y1="96" x2="140" y2="155" stroke="#38bdf8" strokeWidth="3.5" />
              )}

              {/* 3. Left Arm */}
              {mistakes >= 3 && (
                <line x1="140" y1="110" x2="115" y2="135" stroke="#38bdf8" strokeWidth="3.5" />
              )}

              {/* 4. Right Arm */}
              {mistakes >= 4 && (
                <line x1="140" y1="110" x2="165" y2="135" stroke="#38bdf8" strokeWidth="3.5" />
              )}

              {/* 5. Left Leg */}
              {mistakes >= 5 && (
                <line x1="140" y1="155" x2="118" y2="195" stroke="#38bdf8" strokeWidth="3.5" />
              )}

              {/* 6. Right Leg */}
              {mistakes >= 6 && (
                <line x1="140" y1="155" x2="162" y2="195" stroke="#38bdf8" strokeWidth="3.5" />
              )}
            </svg>
          </div>

          <div className="w-full flex items-center justify-between pt-4 border-t border-slate-800 text-xs">
            <span className="text-slate-400">Harflar: {targetClean.length} ta</span>
            <button
              onClick={() => status !== 'playing' && speakGameWord(currentTarget.word)}
              disabled={status === 'playing'}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition ${
                status === 'playing'
                  ? 'bg-white/5 text-slate-500 cursor-not-allowed border border-white/5'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer shadow-xs'
              }`}
              title={status === 'playing' ? "So'z topilgach talaffuz faollashadi" : "Talaffuzni eshitish"}
            >
              <Volume2 className={`w-3.5 h-3.5 ${status === 'playing' ? 'text-slate-500' : 'text-indigo-200'}`} />
              <span>{status === 'playing' ? "Talaffuz 🔒" : "Talaffuz"}</span>
            </button>
          </div>
        </div>

        {/* Right: Word Blanks, Clues and Keyboard */}
        <div className="lg:col-span-7 space-y-6">
          {/* Clue Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[11px] font-black uppercase">
                {currentTarget.partOfSpeech || 'Target Word'}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {status === 'playing' ? '••••••' : currentTarget.phonetic}
              </span>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                📖 <strong>Ta'rif:</strong> {status === 'playing' ? maskWordInClue(currentTarget.definition, currentTarget.word) : currentTarget.definition}
              </p>
            </div>

            {/* Uzbek Hint Toggle */}
            <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
              <button
                onClick={() => setShowUzbekHint(!showUzbekHint)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition cursor-pointer"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                <span>{showUzbekHint ? "O'zbekcha ma'noni yashirish" : "O'zbekcha tarjima yordami (Hint)"}</span>
              </button>

              <button
                onClick={handleRevealLetter}
                disabled={status !== 'playing'}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 disabled:opacity-40 transition cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                <span>Bitta harfni ochish</span>
              </button>
            </div>

            {showUzbekHint && (
              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 animate-in fade-in">
                🇺🇿 Tarjima: <strong>{currentTarget.translationUz}</strong>
              </div>
            )}
          </div>

          {/* Letter Slots (Word Blanks) */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-3">
              {targetClean.split('').map((char, idx) => {
                const isRevealed = guessedLetters.has(char) || status !== 'playing';
                const isMistakeReveal = status === 'lost' && !guessedLetters.has(char);

                return (
                  <div
                    key={idx}
                    className={`w-11 h-13 sm:w-13 sm:h-16 rounded-2xl border-2 flex items-center justify-center text-xl sm:text-2xl font-black transition-all ${
                      isMistakeReveal
                        ? 'border-rose-400 bg-rose-50 text-rose-600'
                        : isRevealed
                        ? 'border-emerald-400 bg-emerald-50 text-emerald-800 shadow-2xs scale-100'
                        : 'border-slate-300 bg-slate-50 text-transparent'
                    }`}
                  >
                    {isRevealed ? char : ''}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Status Alert & Next Action */}
          {status === 'won' && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-4 animate-in fade-in">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="text-sm font-black text-emerald-950">Ajoyib g'alaba! (+25 XP)</h4>
                  <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                    "{currentTarget.word}" so'zini to'g'ri topdingiz.
                  </p>
                </div>
              </div>
              <button
                onClick={nextWord}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition flex items-center gap-1.5 shadow-xs cursor-pointer shrink-0"
              >
                <span>Keyingi so'z</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {status === 'lost' && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-between gap-4 animate-in fade-in">
              <div className="flex items-center gap-3">
                <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
                <div>
                  <h4 className="text-sm font-black text-rose-950">Ushbu safar topilmadi!</h4>
                  <p className="text-xs text-rose-800 font-semibold mt-0.5">
                    To'g'ri so'z: <strong className="font-mono underline">{currentTarget.word}</strong> ({currentTarget.translationUz})
                  </p>
                </div>
              </div>
              <button
                onClick={nextWord}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black transition flex items-center gap-1.5 shadow-xs cursor-pointer shrink-0"
              >
                <span>Keyingisi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Virtual On-Screen Keyboard */}
          <div className="bg-slate-100 p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-2xs space-y-2">
            {KEYBOARD_ROWS.map((row, rIdx) => (
              <div key={rIdx} className="flex justify-center gap-1 sm:gap-1.5">
                {row.map(letter => {
                  const isGuessed = guessedLetters.has(letter);
                  const isCorrect = isGuessed && targetClean.includes(letter);
                  const isWrong = isGuessed && !targetClean.includes(letter);

                  return (
                    <button
                      key={letter}
                      onClick={() => guessLetter(letter)}
                      disabled={isGuessed || status !== 'playing'}
                      className={`min-w-7 h-10 sm:min-w-10 sm:h-12 px-1 sm:px-2 rounded-xl font-black text-xs sm:text-sm transition flex items-center justify-center cursor-pointer select-none ${
                        isCorrect
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : isWrong
                          ? 'bg-slate-300/80 text-slate-400 line-through'
                          : 'bg-white text-slate-800 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200/80 shadow-2xs active:scale-95'
                      }`}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
