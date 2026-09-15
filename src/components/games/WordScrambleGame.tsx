import React, { useState, useEffect, useCallback } from 'react';
import { 
  Sparkles, RotateCcw, Volume2, ArrowRight, 
  Lightbulb, CheckCircle2, HelpCircle, Flame, Shuffle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TargetWord } from '../../types';
import { 
  gameSounds, speakGameWord, recordGameVictory, recordGameLoss, GameWordFilter, getRandomCurriculumWords 
} from '../../lib/wordGameUtils';
import { useAuth } from '../../contexts/AuthContext';

interface WordScrambleGameProps {
  filter: GameWordFilter;
  onXpEarned?: (xp: number) => void;
}

interface LetterTile {
  id: string;
  char: string;
}

export const WordScrambleGame: React.FC<WordScrambleGameProps> = ({ filter, onXpEarned }) => {
  const { profile, updateProfile } = useAuth();

  const [wordList, setWordList] = useState<TargetWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [availableTiles, setAvailableTiles] = useState<LetterTile[]>([]);
  const [placedTiles, setPlacedTiles] = useState<LetterTile[]>([]);
  const [isSolved, setIsSolved] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);
  const [showUzbekHint, setShowUzbekHint] = useState<boolean>(false);
  const [earnedXpTotal, setEarnedXpTotal] = useState<number>(0);

  // Load words
  const loadWords = useCallback(() => {
    const list = getRandomCurriculumWords(filter, 30);
    setWordList(list);
    setCurrentIndex(0);
    setIsSolved(false);
    setShowUzbekHint(false);
  }, [filter]);

  useEffect(() => {
    loadWords();
  }, [loadWords]);

  const currentTarget = wordList[currentIndex] || null;
  const targetClean = currentTarget ? currentTarget.word.toUpperCase().replace(/[^A-Z]/g, '') : '';

  // Setup current word letters
  const setupWord = useCallback((word: TargetWord) => {
    const clean = word.word.toUpperCase().replace(/[^A-Z]/g, '');
    const tiles: LetterTile[] = clean.split('').map((char, idx) => ({
      id: `tile-${idx}-${char}`,
      char
    }));

    // Shuffle tiles until not equal to original
    let shuffled = [...tiles];
    let attempts = 0;
    do {
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      attempts++;
    } while (shuffled.map(t => t.char).join('') === clean && attempts < 10);

    setAvailableTiles(shuffled);
    setPlacedTiles([]);
    setIsSolved(false);
    setShowUzbekHint(false);
  }, []);

  useEffect(() => {
    if (currentTarget) {
      setupWord(currentTarget);
    }
  }, [currentTarget, setupWord]);

  // Handle tile placement
  const handlePlaceTile = (tile: LetterTile) => {
    if (isSolved) return;
    gameSounds.playKeyClick();
    setAvailableTiles(prev => prev.filter(t => t.id !== tile.id));
    const nextPlaced = [...placedTiles, tile];
    setPlacedTiles(nextPlaced);

    // Check if full word formed
    if (nextPlaced.length === targetClean.length) {
      const spelled = nextPlaced.map(t => t.char).join('');
      if (spelled === targetClean) {
        // SOLVED!
        setIsSolved(true);
        gameSounds.playSuccess();
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
        const xp = 20;
        setEarnedXpTotal(prev => prev + xp);
        setStreak(s => s + 1);
        recordGameVictory('scramble', xp);

        if (profile && updateProfile) {
          updateProfile({ xp: (profile.xp || 0) + xp });
        }
        if (onXpEarned) onXpEarned(xp);

        speakGameWord(currentTarget?.word || '');
      } else {
        gameSounds.playError();
      }
    }
  };

  // Handle removing placed tile back to bank
  const handleRemoveTile = (tile: LetterTile) => {
    if (isSolved) return;
    gameSounds.playKeyClick();
    setPlacedTiles(prev => prev.filter(t => t.id !== tile.id));
    setAvailableTiles(prev => [...prev, tile]);
  };

  // Keyboard typing support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSolved) return;
      const key = e.key.toUpperCase();

      if (/^[A-Z]$/.test(key)) {
        const matchTile = availableTiles.find(t => t.char === key);
        if (matchTile) {
          handlePlaceTile(matchTile);
        }
      } else if (e.key === 'Backspace' && placedTiles.length > 0) {
        const lastTile = placedTiles[placedTiles.length - 1];
        handleRemoveTile(lastTile);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [availableTiles, placedTiles, isSolved]);

  // Shuffle remaining tiles in bank
  const handleShuffleBank = () => {
    gameSounds.playKeyClick();
    setAvailableTiles(prev => {
      const copy = [...prev];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    });
  };

  // Reset answer
  const handleClear = () => {
    gameSounds.playKeyClick();
    setAvailableTiles(prev => [...prev, ...placedTiles]);
    setPlacedTiles([]);
  };

  // Reveal next letter hint
  const handleHint = () => {
    if (isSolved || !targetClean) return;
    const nextIdx = placedTiles.length;
    if (nextIdx < targetClean.length) {
      const expectedChar = targetClean[nextIdx];
      const matchTile = availableTiles.find(t => t.char === expectedChar);
      if (matchTile) {
        handlePlaceTile(matchTile);
      } else {
        // Tile was misplaced in earlier slot, reset all and place correctly up to next
        handleClear();
      }
    }
  };

  // Next word
  const handleNextWord = () => {
    if (currentIndex + 1 < wordList.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      loadWords();
    }
  };

  if (!currentTarget) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-slate-200">
        <p className="text-slate-500 font-bold">So'zlar topilmadi.</p>
        <button onClick={loadWords} className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs">
          Qayta yuklash
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 font-black">
            ⚡
          </div>
          <div>
            <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
              <span>Harflar Qorishmasi (Word Scramble)</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-black">
                {currentIndex + 1} / {wordList.length}
              </span>
            </h2>
            <p className="text-xs text-slate-500 font-semibold mt-0.5">
              Qorishiq harflarni to'g'ri tartibda terib so'zni tiklang
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            <span>Streak: <strong className="font-black">{streak}</strong></span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-900">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>+{earnedXpTotal} XP</span>
          </div>
        </div>
      </div>

      {/* Clue Card */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[11px] font-black uppercase">
            {currentTarget.partOfSpeech || 'Target Word'} ({targetClean.length} harf)
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => speakGameWord(currentTarget.word)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
            >
              <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>Eshitish</span>
            </button>
          </div>
        </div>

        <p className="text-sm font-semibold text-slate-800 leading-relaxed">
          📖 <strong>Ta'rif:</strong> {currentTarget.definition}
        </p>

        {showUzbekHint && (
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-900 animate-in fade-in">
            🇺🇿 O'zbekcha tarjima: <strong>{currentTarget.translationUz}</strong>
          </div>
        )}

        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
          <button
            onClick={() => setShowUzbekHint(!showUzbekHint)}
            className="text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-1 cursor-pointer"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            <span>{showUzbekHint ? "Tarjimani yashirish" : "Tarjima yordami (Hint)"}</span>
          </button>

          <button
            onClick={handleHint}
            disabled={isSolved}
            className="text-slate-600 hover:text-slate-900 font-bold flex items-center gap-1 cursor-pointer disabled:opacity-40"
          >
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>Keyingi harfni qo'yish</span>
          </button>
        </div>
      </div>

      {/* Answer Slots Area */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-2xs space-y-6">
        <div>
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            <span>Sizning javobingiz:</span>
            {placedTiles.length > 0 && !isSolved && (
              <button
                onClick={handleClear}
                className="text-rose-600 hover:text-rose-800 text-xs font-bold cursor-pointer"
              >
                Tozalash
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 min-h-[64px]">
            {Array.from({ length: targetClean.length }).map((_, idx) => {
              const placed = placedTiles[idx];

              return (
                <button
                  key={idx}
                  onClick={() => placed && handleRemoveTile(placed)}
                  className={`w-12 h-14 sm:w-14 sm:h-16 rounded-2xl border-2 font-black text-xl sm:text-2xl flex items-center justify-center transition-all ${
                    placed
                      ? isSolved
                        ? 'bg-emerald-500 text-white border-emerald-600 shadow-md scale-105'
                        : 'bg-indigo-600 text-white border-indigo-700 shadow-xs cursor-pointer hover:bg-rose-500 hover:border-rose-600 active:scale-95'
                      : 'bg-slate-50 border-dashed border-slate-300 text-slate-300'
                  }`}
                  title={placed ? "O'chirish uchun bosing" : ""}
                >
                  {placed ? placed.char : ''}
                </button>
              );
            })}
          </div>
        </div>

        {/* Available Scrambled Letter Tiles Bank */}
        {!isSolved && (
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              <span>Mavjud harflar:</span>
              <button
                onClick={handleShuffleBank}
                className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-xs font-bold cursor-pointer"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Aralashtirish</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {availableTiles.map(tile => (
                <button
                  key={tile.id}
                  onClick={() => handlePlaceTile(tile)}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border-2 border-slate-200 text-slate-900 font-black text-lg sm:text-xl shadow-2xs hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 transition flex items-center justify-center cursor-pointer active:scale-90"
                >
                  {tile.char}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Victory Celebration */}
        {isSolved && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-4 animate-in fade-in">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <h4 className="text-sm font-black text-emerald-950">To'g'ri topdingiz! (+20 XP)</h4>
                <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                  "{currentTarget.word}" — {currentTarget.translationUz}
                </p>
              </div>
            </div>
            <button
              onClick={handleNextWord}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <span>Keyingi so'z</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
