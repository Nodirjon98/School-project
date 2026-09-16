import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Gamepad2, Volume2, VolumeX, Sparkles, Trophy, 
  Flame, BookOpen, Layers, CheckCircle2
} from 'lucide-react';
import { HangmanGame } from '../../components/games/HangmanGame';
import { CrosswordGame } from '../../components/games/CrosswordGame';
import { MemoryMatchGame } from '../../components/games/MemoryMatchGame';
import { WordScrambleGame } from '../../components/games/WordScrambleGame';
import { 
  gameSounds, getPlayerGameStats, PlayerGameStats, GameWordFilter 
} from '../../lib/wordGameUtils';
import { CURRICULUM_BOOKS } from '../../data/essentialWordsData';
import { useAuth } from '../../contexts/AuthContext';

export type WordGameType = 'hangman' | 'crossword' | 'memory' | 'scramble';

export const WordGamesHubPage: React.FC = () => {
  const { profile } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  // Active game from URL query param
  const activeGame = useMemo((): WordGameType => {
    const q = searchParams.get('game') as WordGameType | null;
    if (q && ['hangman', 'crossword', 'memory', 'scramble'].includes(q)) {
      return q;
    }
    return 'hangman';
  }, [searchParams]);

  const setGame = (g: WordGameType) => {
    setSearchParams({ game: g });
  };

  // Sound state
  const [isSoundOn, setIsSoundOn] = useState<boolean>(() => gameSounds.isEnabled());

  // Player stats
  const [stats, setStats] = useState<PlayerGameStats>(() => getPlayerGameStats());

  // Filters
  const [selectedBook, setSelectedBook] = useState<string>('all');
  const [selectedUnit, setSelectedUnit] = useState<string>('all');

  // Toast
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handleToggleSound = () => {
    const next = !isSoundOn;
    gameSounds.setEnabled(next);
    setIsSoundOn(next);
    showToast(next ? "O'yin tovushlari yoqildi 🔊" : "O'yin tovushlari o'chirildi 🔇");
  };

  const handleXpEarned = (amount: number) => {
    setStats(getPlayerGameStats());
    showToast(`Tabriklaymiz! +${amount} XP yutib oldingiz! 🎉`);
  };

  // Available units for chosen book
  const availableUnits = useMemo(() => {
    if (selectedBook === 'all') return [];
    const foundBook = CURRICULUM_BOOKS.find(b => b.id === selectedBook);
    return foundBook?.units || [];
  }, [selectedBook]);

  // Game filter object
  const gameFilter: GameWordFilter = useMemo(() => ({
    bookId: selectedBook,
    unitId: selectedUnit
  }), [selectedBook, selectedUnit]);

  return (
    <div className="space-y-6 pb-20">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-slate-900 text-white text-xs font-bold shadow-2xl border border-slate-700 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Top Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-indigo-500/20 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                <Gamepad2 className="w-3.5 h-3.5" />
                Gamified Vocabulary Arena
              </span>
              <span className="text-slate-400 text-xs">•</span>
              <span className="text-xs text-indigo-300 font-semibold">4000 Essential Words</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              So'z O'yinlari Arenasi (Word Games Hub)
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              O'quv markazimizning rasmiy 6 ta kitobi asosida tayyorlangan qiziqarli so'z o'yinlari. Harflarni tering, krossvord yeching, xotirangizni charxlang va XP ballar to'plang!
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={handleToggleSound}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border shadow-2xs cursor-pointer ${
                isSoundOn
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30'
                  : 'bg-white/10 text-slate-300 border-white/10 hover:bg-white/15'
              }`}
            >
              {isSoundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span>{isSoundOn ? "Ovoz: Yoqiq" : "Ovoz: O'chiq"}</span>
            </button>
          </div>
        </div>

        {/* Global Player Stats HUD */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-white/10 text-xs">
          <div className="bg-black/30 p-3 rounded-2xl border border-white/5">
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Jami Yutilgan XP</span>
            <span className="text-base font-black text-amber-400 mt-0.5 flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              +{stats.totalXpEarned} XP
            </span>
          </div>

          <div className="bg-black/30 p-3 rounded-2xl border border-white/5">
            <span className="text-slate-400 block text-[10px] uppercase font-bold">G'alaba Ketma-ketligi</span>
            <span className="text-base font-black text-orange-400 mt-0.5 flex items-center gap-1">
              <Flame className="w-4 h-4" />
              {stats.currentStreak} ta (Rekord: {stats.bestStreak})
            </span>
          </div>

          <div className="bg-black/30 p-3 rounded-2xl border border-white/5">
            <span className="text-slate-400 block text-[10px] uppercase font-bold">O'ynalgan O'yinlar</span>
            <span className="text-base font-black text-sky-400 mt-0.5 flex items-center gap-1">
              <Gamepad2 className="w-4 h-4" />
              {stats.gamesPlayed} ta partiya
            </span>
          </div>

          <div className="bg-black/30 p-3 rounded-2xl border border-white/5">
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Profil Darajasi (XP)</span>
            <span className="text-base font-black text-emerald-400 mt-0.5 flex items-center gap-1">
              <Trophy className="w-4 h-4" />
              {profile?.xp || 0} umumiy XP
            </span>
          </div>
        </div>
      </div>

      {/* Filter & Game Selection Bar */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Game Mode Tabs */}
        <div className="flex items-center gap-1 p-1 rounded-2xl bg-slate-100 border border-slate-200 overflow-x-auto max-w-full">
          <button
            onClick={() => setGame('hangman')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shrink-0 ${
              activeGame === 'hangman'
                ? 'bg-white text-indigo-700 shadow-2xs font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🪓</span>
            <span>Dor O'yini (Hangman)</span>
          </button>

          <button
            onClick={() => setGame('crossword')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shrink-0 ${
              activeGame === 'crossword'
                ? 'bg-white text-indigo-700 shadow-2xs font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🧩</span>
            <span>Krossvord Jumboq</span>
          </button>

          <button
            onClick={() => setGame('memory')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shrink-0 ${
              activeGame === 'memory'
                ? 'bg-white text-indigo-700 shadow-2xs font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🃏</span>
            <span>Xotira Juftligi</span>
          </button>

          <button
            onClick={() => setGame('scramble')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shrink-0 ${
              activeGame === 'scramble'
                ? 'bg-white text-indigo-700 shadow-2xs font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>⚡</span>
            <span>Harflar Qorishmasi</span>
          </button>
        </div>

        {/* Curriculum Book & Unit Selectors */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Book Selector */}
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
            <BookOpen className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <select
              value={selectedBook}
              onChange={(e) => {
                setSelectedBook(e.target.value);
                setSelectedUnit('all');
              }}
              className="bg-transparent text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="all">Barcha 6 ta Kitob (A1-C2)</option>
              {CURRICULUM_BOOKS.map(b => (
                <option key={b.id} value={b.id}>
                  {b.title} ({b.cefrLevel || b.levelName})
                </option>
              ))}
            </select>
          </div>

          {/* Unit Selector (if book selected) */}
          {selectedBook !== 'all' && availableUnits.length > 0 && (
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
              <Layers className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <select
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
                className="bg-transparent text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="all">Barcha Unitlar (1-30)</option>
                {availableUnits.map(u => (
                  <option key={u.id} value={u.id}>
                    Unit {u.unitNumber}: {u.title}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Render Active Game Mode */}
      <div>
        {activeGame === 'hangman' && (
          <HangmanGame filter={gameFilter} onXpEarned={handleXpEarned} />
        )}

        {activeGame === 'crossword' && (
          <CrosswordGame filter={gameFilter} onXpEarned={handleXpEarned} />
        )}

        {activeGame === 'memory' && (
          <MemoryMatchGame filter={gameFilter} onXpEarned={handleXpEarned} />
        )}

        {activeGame === 'scramble' && (
          <WordScrambleGame filter={gameFilter} onXpEarned={handleXpEarned} />
        )}
      </div>
    </div>
  );
};
