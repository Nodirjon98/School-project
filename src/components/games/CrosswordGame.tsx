import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Sparkles, CheckCircle2, RotateCcw, HelpCircle, 
  Eye, Volume2, Lightbulb, Trophy, ArrowRight, BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  generateCrosswordPuzzle, CrosswordPuzzle, CrosswordPlacedWord, 
  CrosswordCell, gameSounds, speakGameWord, recordGameVictory, GameWordFilter, getRandomCurriculumWords 
} from '../../lib/wordGameUtils';
import { useAuth } from '../../contexts/AuthContext';

interface CrosswordGameProps {
  filter: GameWordFilter;
  onXpEarned?: (xp: number) => void;
}

export const CrosswordGame: React.FC<CrosswordGameProps> = ({ filter, onXpEarned }) => {
  const { profile, updateProfile } = useAuth();

  const [puzzle, setPuzzle] = useState<CrosswordPuzzle | null>(null);
  const [userGrid, setUserGrid] = useState<Record<string, string>>({}); // key: 'r-c' => char
  const [activeCell, setActiveCell] = useState<{ row: number; col: number } | null>(null);
  const [activeDirection, setActiveDirection] = useState<'across' | 'down'>('across');
  const [checkedResults, setCheckedResults] = useState<{ isChecked: boolean; allCorrect: boolean }>({
    isChecked: false,
    allCorrect: false
  });
  const [showUzbekHints, setShowUzbekHints] = useState<boolean>(false);
  const [solvedWordIds, setSolvedWordIds] = useState<Set<string>>(new Set());
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Generate puzzle from curriculum
  const initPuzzle = useCallback(() => {
    const rawWords = getRandomCurriculumWords(filter, 35);
    const newPuzzle = generateCrosswordPuzzle(rawWords, 11);

    setPuzzle(newPuzzle);
    setUserGrid({});
    setCheckedResults({ isChecked: false, allCorrect: false });
    setSolvedWordIds(new Set());
    setIsCompleted(false);

    // Set first placed word active
    if (newPuzzle.placedWords.length > 0) {
      const first = newPuzzle.placedWords[0];
      setActiveCell({ row: first.startRow, col: first.startCol });
      setActiveDirection(first.direction);
    } else {
      setActiveCell(null);
    }
  }, [filter]);

  useEffect(() => {
    initPuzzle();
  }, [initPuzzle]);

  // Find word currently active
  const currentActiveWord: CrosswordPlacedWord | undefined = puzzle?.placedWords.find(w => {
    if (!activeCell) return false;
    if (w.direction !== activeDirection) return false;
    if (activeDirection === 'across') {
      return w.startRow === activeCell.row && activeCell.col >= w.startCol && activeCell.col < w.startCol + w.length;
    } else {
      return w.startCol === activeCell.col && activeCell.row >= w.startRow && activeCell.row < w.startRow + w.length;
    }
  });

  // Handle cell click
  const handleCellClick = (row: number, col: number) => {
    const cell = puzzle?.grid[row][col];
    if (!cell) return;

    gameSounds.playKeyClick();

    if (activeCell && activeCell.row === row && activeCell.col === col) {
      // Toggle direction if both exist
      if (cell.acrossWordId && cell.downWordId) {
        setActiveDirection(prev => (prev === 'across' ? 'down' : 'across'));
      }
    } else {
      setActiveCell({ row, col });
      // If cell only belongs to one direction, snap to it
      if (cell.acrossWordId && !cell.downWordId) {
        setActiveDirection('across');
      } else if (cell.downWordId && !cell.acrossWordId) {
        setActiveDirection('down');
      }
    }
  };

  // Move in current direction
  const moveNext = useCallback((row: number, col: number) => {
    if (!puzzle) return;
    const nextRow = activeDirection === 'down' ? row + 1 : row;
    const nextCol = activeDirection === 'across' ? col + 1 : col;

    if (nextRow < puzzle.size && nextCol < puzzle.size && puzzle.grid[nextRow][nextCol] !== null) {
      setActiveCell({ row: nextRow, col: nextCol });
    }
  }, [puzzle, activeDirection]);

  // Move back in current direction
  const movePrev = useCallback((row: number, col: number) => {
    if (!puzzle) return;
    const prevRow = activeDirection === 'down' ? row - 1 : row;
    const prevCol = activeDirection === 'across' ? col - 1 : col;

    if (prevRow >= 0 && prevCol >= 0 && puzzle.grid[prevRow][prevCol] !== null) {
      setActiveCell({ row: prevRow, col: prevCol });
    }
  }, [puzzle, activeDirection]);

  // Check answers
  const handleCheck = useCallback(() => {
    if (!puzzle) return;
    let allCorrect = true;
    let totalFilled = 0;
    let totalCells = 0;
    const newSolved = new Set<string>();

    for (let r = 0; r < puzzle.size; r++) {
      for (let c = 0; c < puzzle.size; c++) {
        const cell = puzzle.grid[r][c];
        if (cell) {
          totalCells++;
          const userVal = userGrid[`${r}-${c}`] || '';
          if (userVal) totalFilled++;
          if (userVal.toUpperCase() !== cell.char.toUpperCase()) {
            allCorrect = false;
          }
        }
      }
    }

    // Check which words are fully solved
    puzzle.placedWords.forEach(w => {
      let wordDone = true;
      for (let i = 0; i < w.length; i++) {
        const r = w.direction === 'down' ? w.startRow + i : w.startRow;
        const c = w.direction === 'across' ? w.startCol + i : w.startCol;
        if ((userGrid[`${r}-${c}`] || '').toUpperCase() !== w.word[i]) {
          wordDone = false;
        }
      }
      if (wordDone) newSolved.add(w.id);
    });

    setSolvedWordIds(newSolved);

    if (allCorrect && totalFilled === totalCells) {
      setCheckedResults({ isChecked: true, allCorrect: true });
      setIsCompleted(true);
      gameSounds.playVictory();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      const xp = 50;
      recordGameVictory('crossword', xp);
      if (profile && updateProfile) {
        updateProfile({ xp: (profile.xp || 0) + xp });
      }
      if (onXpEarned) onXpEarned(xp);
    } else {
      setCheckedResults({ isChecked: true, allCorrect: false });
      gameSounds.playError();
    }
  }, [puzzle, userGrid, profile, updateProfile, onXpEarned]);

  // Keyboard navigation & typing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeCell || !puzzle) return;
      const { row, col } = activeCell;
      const cellKey = `${row}-${col}`;

      if (/^[a-zA-Z]$/.test(e.key)) {
        e.preventDefault();
        gameSounds.playKeyClick();
        const char = e.key.toUpperCase();
        setUserGrid(prev => ({ ...prev, [cellKey]: char }));
        setCheckedResults({ isChecked: false, allCorrect: false });
        moveNext(row, col);
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        gameSounds.playKeyClick();
        if (userGrid[cellKey]) {
          setUserGrid(prev => {
            const copy = { ...prev };
            delete copy[cellKey];
            return copy;
          });
        } else {
          movePrev(row, col);
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setActiveDirection('across');
        if (col + 1 < puzzle.size && puzzle.grid[row][col + 1]) {
          setActiveCell({ row, col: col + 1 });
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setActiveDirection('across');
        if (col - 1 >= 0 && puzzle.grid[row][col - 1]) {
          setActiveCell({ row, col: col - 1 });
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveDirection('down');
        if (row + 1 < puzzle.size && puzzle.grid[row + 1][col]) {
          setActiveCell({ row: row + 1, col });
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveDirection('down');
        if (row - 1 >= 0 && puzzle.grid[row - 1][col]) {
          setActiveCell({ row: row - 1, col });
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleCheck();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCell, puzzle, userGrid, moveNext, movePrev, handleCheck]);

  // Reveal current active cell
  const handleRevealCurrentCell = () => {
    if (!activeCell || !puzzle) return;
    const cell = puzzle.grid[activeCell.row][activeCell.col];
    if (cell) {
      gameSounds.playKeyClick();
      setUserGrid(prev => ({ ...prev, [`${cell.row}-${cell.col}`]: cell.char }));
      moveNext(cell.row, cell.col);
    }
  };

  // Select a clue from list
  const handleSelectClue = (w: CrosswordPlacedWord) => {
    setActiveCell({ row: w.startRow, col: w.startCol });
    setActiveDirection(w.direction);
    gameSounds.playKeyClick();
  };

  if (!puzzle || puzzle.placedWords.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-slate-200">
        <p className="text-slate-500 font-bold">Krossvord tuzish uchun yetarli so'zlar topilmadi.</p>
        <button
          onClick={initPuzzle}
          className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs"
        >
          Qayta urinish
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6" ref={containerRef}>
      {/* Top Bar */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 font-black">
            🧩
          </div>
          <div>
            <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
              <span>Krossvord Jumboq (Curriculum Crossword)</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 font-black">
                {puzzle.placedWords.length} ta so'z
              </span>
            </h2>
            <p className="text-xs text-slate-500 font-semibold mt-0.5">
              Gorizontal va vertikal bog'langan ingliz tili so'zlarini to'ldiring
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowUzbekHints(!showUzbekHints)}
            className="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            <span>{showUzbekHints ? "Yordamni yopish" : "Tarjima yordami"}</span>
          </button>

          <button
            onClick={handleRevealCurrentCell}
            className="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
            title="Katakdagi harfni ochish"
          >
            <HelpCircle className="w-3.5 h-3.5 text-indigo-500" />
            <span>Harfni ochish</span>
          </button>

          <button
            onClick={handleCheck}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black transition flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
            <span>Tekshirish</span>
          </button>

          <button
            onClick={initPuzzle}
            className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition cursor-pointer"
            title="Yangi krossvord yaratish"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Completion Banner */}
      {isCompleted && (
        <div className="p-5 rounded-3xl bg-emerald-50 border-2 border-emerald-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm animate-in fade-in">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl shadow-md">
              🏆
            </div>
            <div>
              <h3 className="text-base font-black text-emerald-950">Tabriklaymiz! Krossvord to'liq yechildi!</h3>
              <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                Barcha {puzzle.placedWords.length} ta so'zni aniq topdingiz. Hisobingizga <strong>+50 XP</strong> qo'shildi!
              </p>
            </div>
          </div>
          <button
            onClick={initPuzzle}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <span>Yangi krossvord</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Crossword Grid & Clues Split */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left: Interactive Crossword Grid */}
        <div className="xl:col-span-7 bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-2xs flex flex-col items-center justify-center overflow-x-auto">
          <div 
            className="grid gap-1 p-2 bg-slate-900 rounded-2xl border-4 border-slate-800 shadow-inner"
            style={{
              gridTemplateColumns: `repeat(${puzzle.size}, minmax(0, 1fr))`
            }}
          >
            {puzzle.grid.map((row, rIdx) =>
              row.map((cell, cIdx) => {
                if (!cell) {
                  return (
                    <div
                      key={`${rIdx}-${cIdx}`}
                      className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-slate-950/80 rounded-sm"
                    />
                  );
                }

                const cellKey = `${rIdx}-${cIdx}`;
                const userVal = userGrid[cellKey] || '';
                const isSelected = activeCell?.row === rIdx && activeCell?.col === cIdx;
                const isInActiveWord = currentActiveWord && (
                  currentActiveWord.direction === 'across'
                    ? currentActiveWord.startRow === rIdx && cIdx >= currentActiveWord.startCol && cIdx < currentActiveWord.startCol + currentActiveWord.length
                    : currentActiveWord.startCol === cIdx && rIdx >= currentActiveWord.startRow && rIdx < currentActiveWord.startRow + currentActiveWord.length
                );

                const isCheckIncorrect = checkedResults.isChecked && userVal && userVal.toUpperCase() !== cell.char.toUpperCase();
                const isCheckCorrect = checkedResults.isChecked && userVal && userVal.toUpperCase() === cell.char.toUpperCase();

                return (
                  <div
                    key={cellKey}
                    onClick={() => handleCellClick(rIdx, cIdx)}
                    className={`w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-sm relative flex items-center justify-center font-black text-xs sm:text-sm cursor-pointer select-none transition-all ${
                      isSelected
                        ? 'bg-amber-300 text-slate-950 ring-3 ring-amber-400 z-20 scale-105 shadow-md'
                        : isCheckIncorrect
                        ? 'bg-rose-200 text-rose-900 border border-rose-400'
                        : isCheckCorrect
                        ? 'bg-emerald-200 text-emerald-900 border border-emerald-400'
                        : isInActiveWord
                        ? 'bg-indigo-100 text-indigo-950 border border-indigo-300'
                        : 'bg-white text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {/* Cell Number (if first letter of word) */}
                    {cell.number && (
                      <span className="absolute top-0.5 left-0.5 text-[8px] sm:text-[9px] font-bold text-slate-400 leading-none">
                        {cell.number}
                      </span>
                    )}
                    <span>{userVal}</span>
                  </div>
                );
              })
            )}
          </div>

          <div className="mt-4 flex items-center justify-between w-full text-xs text-slate-500 px-2">
            <span className="flex items-center gap-1">
              <span>🎯 Yo'nalish:</span>
              <strong className="font-black text-indigo-700 uppercase">
                {activeDirection === 'across' ? '➡️ Gorizontal (Across)' : '⬇️ Vertikal (Down)'}
              </strong>
            </span>
            <span>Katakni bosib yo'nalishni almashtiring yoki harf yozing</span>
          </div>
        </div>

        {/* Right: Clues (Across & Down) */}
        <div className="xl:col-span-5 space-y-4">
          {/* Current Word Focus Banner */}
          {currentActiveWord && (
            <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-indigo-900">
                  {currentActiveWord.number}. {currentActiveWord.direction === 'across' ? 'Gorizontal' : 'Vertikal'} ({currentActiveWord.length} harf)
                </span>
                <button
                  onClick={() => speakGameWord(currentActiveWord.word)}
                  className="p-1 rounded-lg hover:bg-indigo-100 text-indigo-700 transition"
                  title="Talaffuz"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-xs font-semibold text-slate-800 mt-1 leading-relaxed">
                {currentActiveWord.clue}
              </p>
              {showUzbekHints && (
                <p className="text-[11px] font-bold text-emerald-700 mt-1">
                  🇺🇿 {currentActiveWord.clueUz}
                </p>
              )}
            </div>
          )}

          {/* Across Clues */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>➡️ Gorizontal (Across)</span>
              <span className="text-[10px] text-slate-400">({puzzle.acrossWords.length})</span>
            </h3>
            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
              {puzzle.acrossWords.map(w => {
                const isCurrent = currentActiveWord?.id === w.id;
                const isSolved = solvedWordIds.has(w.id);

                return (
                  <div
                    key={w.id}
                    onClick={() => handleSelectClue(w)}
                    className={`p-2 rounded-xl text-xs transition cursor-pointer flex items-start justify-between gap-2 ${
                      isCurrent
                        ? 'bg-indigo-600 text-white font-bold shadow-xs'
                        : isSolved
                        ? 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100/80'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="min-w-0">
                      <span className="font-black mr-1">{w.number}.</span>
                      <span>{w.clue}</span>
                      {showUzbekHints && (
                        <span className={`block text-[10px] font-semibold mt-0.5 ${isCurrent ? 'text-indigo-200' : 'text-emerald-600'}`}>
                          {w.clueUz}
                        </span>
                      )}
                    </div>
                    {isSolved && (
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-white' : 'text-emerald-600'}`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Down Clues */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>⬇️ Vertikal (Down)</span>
              <span className="text-[10px] text-slate-400">({puzzle.downWords.length})</span>
            </h3>
            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
              {puzzle.downWords.map(w => {
                const isCurrent = currentActiveWord?.id === w.id;
                const isSolved = solvedWordIds.has(w.id);

                return (
                  <div
                    key={w.id}
                    onClick={() => handleSelectClue(w)}
                    className={`p-2 rounded-xl text-xs transition cursor-pointer flex items-start justify-between gap-2 ${
                      isCurrent
                        ? 'bg-indigo-600 text-white font-bold shadow-xs'
                        : isSolved
                        ? 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100/80'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="min-w-0">
                      <span className="font-black mr-1">{w.number}.</span>
                      <span>{w.clue}</span>
                      {showUzbekHints && (
                        <span className={`block text-[10px] font-semibold mt-0.5 ${isCurrent ? 'text-indigo-200' : 'text-emerald-600'}`}>
                          {w.clueUz}
                        </span>
                      )}
                    </div>
                    {isSolved && (
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-white' : 'text-emerald-600'}`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
