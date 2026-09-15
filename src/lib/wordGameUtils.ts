import { CURRICULUM_BOOKS } from '../data/essentialWordsData';
import { TargetWord } from '../types';
import { speakTargetWord } from './pronunciationEngine';

// ============================================================================
// 1. CURRICULUM WORDS RETRIEVAL & FILTERING
// ============================================================================

export interface GameWordFilter {
  bookId?: string; // 'book-1' to 'book-6' or 'all'
  unitId?: string; // e.g. 'book-1-unit-1' or 'all'
  level?: string;  // 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'all'
  minLength?: number;
  maxLength?: number;
}

export function getAllCurriculumWords(): TargetWord[] {
  const words: TargetWord[] = [];
  for (const book of CURRICULUM_BOOKS) {
    for (const unit of book.units) {
      if (unit.targetWords && Array.isArray(unit.targetWords)) {
        words.push(...unit.targetWords);
      }
    }
  }
  return words;
}

export function getRandomCurriculumWords(filter: GameWordFilter = {}, count: number = 20): TargetWord[] {
  let pool: TargetWord[] = [];

  const { bookId, unitId, minLength = 3, maxLength = 12 } = filter;

  for (const book of CURRICULUM_BOOKS) {
    if (bookId && bookId !== 'all' && book.id !== bookId) continue;

    for (const unit of book.units) {
      if (unitId && unitId !== 'all' && unit.id !== unitId) continue;

      if (unit.targetWords && Array.isArray(unit.targetWords)) {
        pool.push(...unit.targetWords);
      }
    }
  }

  // Filter clean single words of acceptable length
  const cleanPool = pool.filter(w => {
    const clean = w.word.trim().replace(/[^a-zA-Z]/g, '');
    return (
      clean.length >= minLength &&
      clean.length <= maxLength &&
      !w.word.includes(' ') &&
      Boolean(w.definition) &&
      Boolean(w.translationUz)
    );
  });

  if (cleanPool.length === 0) {
    return getAllCurriculumWords().slice(0, count);
  }

  // Fisher-Yates shuffle
  const shuffled = [...cleanPool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}

// ============================================================================
// 2. SYNTHESIZED WEB AUDIO SOUND EFFECTS (Zero external network dependencies)
// ============================================================================

class SoundManager {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = true;

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('premier_games_sound');
      if (saved !== null) {
        this.soundEnabled = saved === 'true';
      }
    }
  }

  public isEnabled(): boolean {
    return this.soundEnabled;
  }

  public setEnabled(val: boolean) {
    this.soundEnabled = val;
    if (typeof window !== 'undefined') {
      localStorage.setItem('premier_games_sound', String(val));
    }
  }

  private getContext(): AudioContext | null {
    if (!this.soundEnabled) return null;
    if (typeof window === 'undefined') return null;

    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public playTone(freq: number, type: OscillatorType, duration: number, startTimeOffset = 0, gainLevel = 0.15) {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime + startTimeOffset);

      gain.gain.setValueAtTime(gainLevel, ctx.currentTime + startTimeOffset);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTimeOffset + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + startTimeOffset);
      osc.stop(ctx.currentTime + startTimeOffset + duration);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  public playSuccess() {
    // Happy ascending triad C5 -> E5 -> G5
    this.playTone(523.25, 'sine', 0.12, 0, 0.2);
    this.playTone(659.25, 'sine', 0.12, 0.08, 0.2);
    this.playTone(783.99, 'triangle', 0.25, 0.16, 0.25);
  }

  public playError() {
    // Low double blip
    this.playTone(220, 'sawtooth', 0.15, 0, 0.12);
    this.playTone(180, 'sawtooth', 0.2, 0.12, 0.12);
  }

  public playCardFlip() {
    // Soft card flip click
    this.playTone(800, 'sine', 0.04, 0, 0.1);
  }

  public playKeyClick() {
    // Mechanical key tap
    this.playTone(600, 'triangle', 0.03, 0, 0.08);
  }

  public playVictory() {
    // Victory fanfare C5 -> E5 -> G5 -> C6
    this.playTone(523.25, 'sine', 0.15, 0, 0.2);
    this.playTone(659.25, 'sine', 0.15, 0.12, 0.2);
    this.playTone(783.99, 'sine', 0.18, 0.24, 0.25);
    this.playTone(1046.50, 'triangle', 0.45, 0.38, 0.3);
  }
}

export const gameSounds = new SoundManager();

export function speakGameWord(word: string) {
  speakTargetWord(word, { rate: 0.95 });
}

// ============================================================================
// 3. DYNAMIC CROSSWORD PUZZLE ENGINE
// ============================================================================

export interface CrosswordPlacedWord {
  id: string;
  number: number;
  word: string;
  clue: string;
  clueUz: string;
  direction: 'across' | 'down';
  startRow: number;
  startCol: number;
  length: number;
  definition: string;
  example: string;
}

export interface CrosswordCell {
  row: number;
  col: number;
  char: string;
  number?: number;
  acrossWordId?: string;
  downWordId?: string;
}

export interface CrosswordPuzzle {
  size: number;
  grid: (CrosswordCell | null)[][];
  placedWords: CrosswordPlacedWord[];
  acrossWords: CrosswordPlacedWord[];
  downWords: CrosswordPlacedWord[];
}

export function generateCrosswordPuzzle(words: TargetWord[], size = 11): CrosswordPuzzle {
  // Normalize candidate words
  const candidates = words
    .map(w => ({
      raw: w,
      word: w.word.toUpperCase().replace(/[^A-Z]/g, ''),
      clue: w.definition,
      clueUz: w.translationUz,
      example: w.example
    }))
    .filter(c => c.word.length >= 3 && c.word.length <= Math.min(size - 1, 9));

  // Sort descending by length
  candidates.sort((a, b) => b.word.length - a.word.length);

  const gridChars: (string | null)[][] = Array.from({ length: size }, () => Array(size).fill(null));
  const placedWords: CrosswordPlacedWord[] = [];

  if (candidates.length === 0) {
    return { size, grid: Array.from({ length: size }, () => Array(size).fill(null)), placedWords: [], acrossWords: [], downWords: [] };
  }

  // Place first word horizontally near center
  const first = candidates[0];
  const firstRow = Math.floor(size / 2);
  const firstCol = Math.max(1, Math.floor((size - first.word.length) / 2));

  for (let i = 0; i < first.word.length; i++) {
    gridChars[firstRow][firstCol + i] = first.word[i];
  }

  placedWords.push({
    id: `pw-1`,
    number: 1,
    word: first.word,
    clue: first.clue,
    clueUz: first.clueUz,
    direction: 'across',
    startRow: firstRow,
    startCol: firstCol,
    length: first.word.length,
    definition: first.clue,
    example: first.example
  });

  // Try placing subsequent words
  const maxWords = 7;
  for (let w = 1; w < candidates.length && placedWords.length < maxWords; w++) {
    const cand = candidates[w];
    if (placedWords.some(p => p.word === cand.word)) continue;

    let bestPlacement: { row: number; col: number; dir: 'across' | 'down' } | null = null;

    // Search intersections with existing placed words
    for (const p of placedWords) {
      const oppDir: 'across' | 'down' = p.direction === 'across' ? 'down' : 'across';

      for (let ci = 0; ci < cand.word.length; ci++) {
        const char = cand.word[ci];

        for (let pi = 0; pi < p.word.length; pi++) {
          if (p.word[pi] === char) {
            const r = oppDir === 'down' ? p.startRow - ci : p.startRow + pi;
            const c = oppDir === 'down' ? p.startCol + pi : p.startCol - ci;

            if (canPlaceWord(cand.word, r, c, oppDir, gridChars, size)) {
              bestPlacement = { row: r, col: c, dir: oppDir };
              break;
            }
          }
        }
        if (bestPlacement) break;
      }
      if (bestPlacement) break;
    }

    if (bestPlacement) {
      for (let i = 0; i < cand.word.length; i++) {
        const curR = bestPlacement.dir === 'down' ? bestPlacement.row + i : bestPlacement.row;
        const curC = bestPlacement.dir === 'across' ? bestPlacement.col + i : bestPlacement.col;
        gridChars[curR][curC] = cand.word[i];
      }

      placedWords.push({
        id: `pw-${placedWords.length + 1}`,
        number: placedWords.length + 1,
        word: cand.word,
        clue: cand.clue,
        clueUz: cand.clueUz,
        direction: bestPlacement.dir,
        startRow: bestPlacement.row,
        startCol: bestPlacement.col,
        length: cand.word.length,
        definition: cand.clue,
        example: cand.example
      });
    }
  }

  // Renumber placed words in standard crossword reading order (top-to-bottom, left-to-right)
  const orderedWords = [...placedWords].sort((a, b) => {
    if (a.startRow !== b.startRow) return a.startRow - b.startRow;
    return a.startCol - b.startCol;
  });

  const cellNumbers = new Map<string, number>();
  let nextNumber = 1;

  orderedWords.forEach(w => {
    const key = `${w.startRow}-${w.startCol}`;
    if (!cellNumbers.has(key)) {
      cellNumbers.set(key, nextNumber++);
    }
    w.number = cellNumbers.get(key)!;
  });

  // Construct full crossword grid with metadata
  const grid: (CrosswordCell | null)[][] = Array.from({ length: size }, () => Array(size).fill(null));

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (gridChars[r][c] !== null) {
        const acrossWord = placedWords.find(w => w.direction === 'across' && w.startRow === r && c >= w.startCol && c < w.startCol + w.length);
        const downWord = placedWords.find(w => w.direction === 'down' && w.startCol === c && r >= w.startRow && r < w.startRow + w.length);
        const cellNum = cellNumbers.get(`${r}-${c}`);

        grid[r][c] = {
          row: r,
          col: c,
          char: gridChars[r][c]!,
          number: cellNum,
          acrossWordId: acrossWord?.id,
          downWordId: downWord?.id
        };
      }
    }
  }

  const acrossWords = placedWords.filter(w => w.direction === 'across').sort((a, b) => a.number - b.number);
  const downWords = placedWords.filter(w => w.direction === 'down').sort((a, b) => a.number - b.number);

  return {
    size,
    grid,
    placedWords,
    acrossWords,
    downWords
  };
}

function canPlaceWord(word: string, r: number, c: number, dir: 'across' | 'down', grid: (string | null)[][], size: number): boolean {
  if (r < 0 || c < 0) return false;
  if (dir === 'across' && c + word.length > size) return false;
  if (dir === 'down' && r + word.length > size) return false;

  // Check boundary cell before word
  if (dir === 'across' && c > 0 && grid[r][c - 1] !== null) return false;
  if (dir === 'down' && r > 0 && grid[r - 1][c] !== null) return false;

  // Check boundary cell after word
  if (dir === 'across' && c + word.length < size && grid[r][c + word.length] !== null) return false;
  if (dir === 'down' && r + word.length < size && grid[r + word.length][c] !== null) return false;

  let intersections = 0;

  for (let i = 0; i < word.length; i++) {
    const curR = dir === 'down' ? r + i : r;
    const curC = dir === 'across' ? c + i : c;
    const current = grid[curR][curC];

    if (current !== null) {
      if (current !== word[i]) return false;
      intersections++;
    } else {
      // Check perpendicular neighbor cells do not collide into parallel words
      if (dir === 'across') {
        if (curR > 0 && grid[curR - 1][curC] !== null) return false;
        if (curR < size - 1 && grid[curR + 1][curC] !== null) return false;
      } else {
        if (curC > 0 && grid[curR][curC - 1] !== null) return false;
        if (curC < size - 1 && grid[curR][curC + 1] !== null) return false;
      }
    }
  }

  return intersections > 0;
}

// ============================================================================
// 4. PLAYER LOCAL STORAGE STATS
// ============================================================================

export interface PlayerGameStats {
  totalXpEarned: number;
  gamesPlayed: number;
  hangmanWins: number;
  crosswordsSolved: number;
  memoryMatchesCompleted: number;
  scramblesSolved: number;
  currentStreak: number;
  bestStreak: number;
}

const STATS_KEY = 'premier_word_games_stats';

export function getPlayerGameStats(): PlayerGameStats {
  if (typeof window === 'undefined') {
    return {
      totalXpEarned: 0,
      gamesPlayed: 0,
      hangmanWins: 0,
      crosswordsSolved: 0,
      memoryMatchesCompleted: 0,
      scramblesSolved: 0,
      currentStreak: 0,
      bestStreak: 0
    };
  }

  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) {
      return {
        totalXpEarned: 0,
        gamesPlayed: 0,
        hangmanWins: 0,
        crosswordsSolved: 0,
        memoryMatchesCompleted: 0,
        scramblesSolved: 0,
        currentStreak: 0,
        bestStreak: 0
      };
    }
    return JSON.parse(raw);
  } catch {
    return {
      totalXpEarned: 0,
      gamesPlayed: 0,
      hangmanWins: 0,
      crosswordsSolved: 0,
      memoryMatchesCompleted: 0,
      scramblesSolved: 0,
      currentStreak: 0,
      bestStreak: 0
    };
  }
}

export function recordGameVictory(gameType: 'hangman' | 'crossword' | 'memory' | 'scramble', xpEarned: number): PlayerGameStats {
  const stats = getPlayerGameStats();
  stats.totalXpEarned += xpEarned;
  stats.gamesPlayed += 1;
  stats.currentStreak += 1;
  if (stats.currentStreak > stats.bestStreak) {
    stats.bestStreak = stats.currentStreak;
  }

  if (gameType === 'hangman') stats.hangmanWins += 1;
  else if (gameType === 'crossword') stats.crosswordsSolved += 1;
  else if (gameType === 'memory') stats.memoryMatchesCompleted += 1;
  else if (gameType === 'scramble') stats.scramblesSolved += 1;

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    } catch {}
  }

  return stats;
}

export function recordGameLoss(): PlayerGameStats {
  const stats = getPlayerGameStats();
  stats.gamesPlayed += 1;
  stats.currentStreak = 0;

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    } catch {}
  }

  return stats;
}
