import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Sparkles, RotateCcw, Clock, Trophy, Star, 
  Volume2, ArrowRight, Layers, Flame, CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TargetWord } from '../../types';
import { 
  gameSounds, speakGameWord, recordGameVictory, GameWordFilter, getRandomCurriculumWords 
} from '../../lib/wordGameUtils';
import { useAuth } from '../../contexts/AuthContext';

interface MemoryMatchGameProps {
  filter: GameWordFilter;
  onXpEarned?: (xp: number) => void;
}

interface MemoryCardItem {
  id: string;
  pairId: string;
  type: 'word' | 'match';
  text: string;
  wordRaw: string;
  phonetic?: string;
  partOfSpeech?: string;
}

export const MemoryMatchGame: React.FC<MemoryMatchGameProps> = ({ filter, onXpEarned }) => {
  const { profile, updateProfile } = useAuth();

  const [mode, setMode] = useState<'word_uzbek' | 'word_def'>('word_uzbek');
  const [cards, setCards] = useState<MemoryCardItem[]>([]);
  const [flippedIds, setFlippedIds] = useState<string[]>([]);
  const [matchedPairIds, setMatchedPairIds] = useState<Set<string>>(new Set());
  const [moves, setMoves] = useState<number>(0);
  const [combo, setCombo] = useState<number>(1);
  const [seconds, setSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [pairCount, setPairCount] = useState<number>(6); // 6 pairs = 12 cards

  // Initialize new memory game board
  const initGame = useCallback(() => {
    const rawWords = getRandomCurriculumWords(filter, pairCount);
    const generatedCards: MemoryCardItem[] = [];

    rawWords.forEach((w, idx) => {
      const pairId = `pair-${idx}`;
      // Card 1: English word
      generatedCards.push({
        id: `c-${pairId}-word`,
        pairId,
        type: 'word',
        text: w.word,
        wordRaw: w.word,
        phonetic: w.phonetic,
        partOfSpeech: w.partOfSpeech
      });

      // Card 2: Uzbek translation or English definition
      generatedCards.push({
        id: `c-${pairId}-match`,
        pairId,
        type: 'match',
        text: mode === 'word_uzbek' ? w.translationUz : w.definition,
        wordRaw: w.word
      });
    });

    // Shuffle cards
    for (let i = generatedCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [generatedCards[i], generatedCards[j]] = [generatedCards[j], generatedCards[i]];
    }

    setCards(generatedCards);
    setFlippedIds([]);
    setMatchedPairIds(new Set());
    setMoves(0);
    setCombo(1);
    setSeconds(0);
    setIsTimerRunning(false);
    setIsCompleted(false);
  }, [filter, pairCount, mode]);

  useEffect(() => {
    initGame();
  }, [initGame]);

  // Timer interval
  useEffect(() => {
    let timer: any = null;
    if (isTimerRunning && !isCompleted) {
      timer = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, isCompleted]);

  // Card click handler
  const handleCardClick = (card: MemoryCardItem) => {
    // Prevent clicking already flipped or matched cards
    if (
      flippedIds.includes(card.id) ||
      matchedPairIds.has(card.pairId) ||
      flippedIds.length >= 2 ||
      isCompleted
    ) {
      return;
    }

    if (!isTimerRunning) {
      setIsTimerRunning(true);
    }

    gameSounds.playCardFlip();
    const newFlipped = [...flippedIds, card.id];
    setFlippedIds(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const firstCard = cards.find(c => c.id === newFlipped[0])!;
      const secondCard = card;

      if (firstCard.pairId === secondCard.pairId) {
        // MATCH!
        gameSounds.playSuccess();
        speakGameWord(firstCard.wordRaw);

        const newMatched = new Set(matchedPairIds);
        newMatched.add(firstCard.pairId);
        setMatchedPairIds(newMatched);
        setFlippedIds([]);
        setCombo(c => c + 1);

        // Check if all pairs matched
        if (newMatched.size === pairCount) {
          setIsCompleted(true);
          setIsTimerRunning(false);
          gameSounds.playVictory();
          confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.6 }
          });

          const baseXP = 30;
          const comboBonus = combo * 2;
          const totalXp = baseXP + comboBonus;

          recordGameVictory('memory', totalXp);

          if (profile && updateProfile) {
            updateProfile({ xp: (profile.xp || 0) + totalXp });
          }
          if (onXpEarned) onXpEarned(totalXp);
        }
      } else {
        // MISMATCH
        gameSounds.playError();
        setCombo(1);
        setTimeout(() => {
          setFlippedIds([]);
        }, 900);
      }
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`;
  };

  // Calculate star rating
  const stars = useMemo(() => {
    if (moves <= pairCount + 3 && seconds <= 40) return 3;
    if (moves <= pairCount + 7 && seconds <= 80) return 2;
    return 1;
  }, [moves, seconds, pairCount]);

  return (
    <div className="space-y-6">
      {/* Top Controls Bar */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-black">
            🃏
          </div>
          <div>
            <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
              <span>Xotira O'yini (Memory Match Challenge)</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-black">
                {matchedPairIds.size} / {pairCount} Juftlik
              </span>
            </h2>
            <p className="text-xs text-slate-500 font-semibold mt-0.5">
              So'z va uning tarjimasi / ta'rifini xotirada saqlab juftlang
            </p>
          </div>
        </div>

        {/* Game Mode Toggle */}
        <div className="flex items-center gap-2">
          <div className="flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => {
                setMode('word_uzbek');
                initGame();
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                mode === 'word_uzbek'
                  ? 'bg-white text-indigo-700 shadow-2xs font-black'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              So'z ↔ O'zbekcha
            </button>
            <button
              onClick={() => {
                setMode('word_def');
                initGame();
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                mode === 'word_def'
                  ? 'bg-white text-indigo-700 shadow-2xs font-black'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              So'z ↔ Ta'rif (EN)
            </button>
          </div>

          <button
            onClick={initGame}
            className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition cursor-pointer"
            title="Qayta boshlash"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Game Stats HUD */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {/* Time */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase text-slate-400">Vaqt</span>
            <p className="text-base sm:text-lg font-black text-slate-900">{formatTime(seconds)}</p>
          </div>
        </div>

        {/* Moves */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase text-slate-400">Urinishlar</span>
            <p className="text-base sm:text-lg font-black text-slate-900">{moves} marta</p>
          </div>
        </div>

        {/* Matched Pairs */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase text-slate-400">Topildi</span>
            <p className="text-base sm:text-lg font-black text-emerald-700">
              {matchedPairIds.size} / {pairCount}
            </p>
          </div>
        </div>

        {/* Combo */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase text-slate-400">Combo Multiplier</span>
            <p className="text-base sm:text-lg font-black text-amber-600">{combo}x Bonus</p>
          </div>
        </div>
      </div>

      {/* Completion Banner */}
      {isCompleted && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-indigo-500/15 border-2 border-emerald-300 shadow-sm animate-in fade-in flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl shadow-lg">
              🎉
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < stars ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
                    }`}
                  />
                ))}
                <span className="text-xs font-black text-emerald-900 ml-2">
                  {stars === 3 ? "A'lo natija!" : stars === 2 ? "Yaxshi!" : "Muvaffaqiyatli!"}
                </span>
              </div>
              <h3 className="text-base font-black text-slate-900">
                Barcha {pairCount} ta so'z juftligi topildi! (+35 XP)
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Vaqt: {formatTime(seconds)} • Urinishlar soni: {moves} ta
              </p>
            </div>
          </div>

          <button
            onClick={initGame}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <span>Keyingi to'plam</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 3D Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {cards.map(card => {
          const isFlipped = flippedIds.includes(card.id) || matchedPairIds.has(card.pairId);
          const isMatched = matchedPairIds.has(card.pairId);

          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className="h-28 sm:h-36 perspective cursor-pointer select-none"
            >
              <div
                className={`relative w-full h-full duration-500 preserve-3d rounded-2xl transition-transform ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Card Back (Hidden face down) */}
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 rounded-2xl border-2 border-indigo-500/30 flex flex-col items-center justify-center text-white shadow-sm hover:border-indigo-400 transition"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-black text-indigo-300 text-lg border border-white/10">
                    P
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 mt-2 tracking-widest uppercase">
                    Premier
                  </span>
                </div>

                {/* Card Front (Revealed face up) */}
                <div
                  className={`absolute inset-0 w-full h-full rounded-2xl border-2 p-3 sm:p-4 flex flex-col justify-between shadow-md ${
                    isMatched
                      ? 'bg-emerald-50/90 border-emerald-400 text-emerald-950 shadow-emerald-500/10'
                      : 'bg-white border-indigo-300 text-slate-900 shadow-indigo-500/10'
                  }`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md ${
                        card.type === 'word'
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {card.type === 'word' ? (card.partOfSpeech || 'EN Word') : 'Tarjima/Ta\'rif'}
                    </span>
                    {card.type === 'word' && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakGameWord(card.wordRaw);
                        }}
                        className="p-1 rounded hover:bg-slate-100 text-slate-500 transition"
                        title="Talaffuz"
                      >
                        <Volume2 className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  <div className="text-center my-auto">
                    <h4
                      className={`font-black tracking-tight ${
                        card.type === 'word'
                          ? 'text-sm sm:text-base text-slate-900'
                          : 'text-xs sm:text-sm text-slate-800 leading-snug line-clamp-3'
                      }`}
                    >
                      {card.text}
                    </h4>
                    {card.phonetic && (
                      <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                        {card.phonetic}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-end">
                    {isMatched && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 animate-in zoom-in" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
