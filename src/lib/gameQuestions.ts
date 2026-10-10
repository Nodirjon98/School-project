// Question engine for the classroom games (Duel, So'z jangi). Built on the
// platform's own content: 4000 Essential Words books 1–6 (words + unit
// phrases) and the daily-word bank. Pure functions so they are easy to test.
import type { CurriculumBook, DailyWord } from '../types';

export type ItemKind = 'word' | 'phrase';

export interface GameItem {
  id: string;
  term: string;
  /** Uzbek translation. */
  uz: string;
  definition: string;
  example: string;
  kind: ItemKind;
  level: string;
  /** e.g. "Book 2 · Unit 14" or "Kunlik so'zlar". */
  source: string;
}

export type QuestionMode = 'en_uz' | 'uz_en' | 'definition' | 'gap';
export type ModeChoice = QuestionMode | 'mixed';

export const MODE_LABEL: Record<ModeChoice, string> = {
  en_uz: "Inglizcha → o'zbekcha",
  uz_en: "O'zbekcha → inglizcha",
  definition: "Ta'rif → so'z",
  gap: "Gapni to'ldirish",
  mixed: 'Aralash',
};

export interface GameQuestion {
  item: GameItem;
  mode: QuestionMode;
  prompt: string;
  /** Small hint line under the prompt (e.g. task wording). */
  hint: string;
  options: string[];
  correct: string;
}

/** Where the words come from: a book (optionally a unit range) or the daily-word bank. */
export interface ContentSource {
  book: number | 'daily';
  unitFrom?: number;
  unitTo?: number;
  kinds: ItemKind[];
}

/**
 * About half of the unit phrases are machine-generated placeholders
 * ("'expert' so'zining 'with' predlogi bilan birikishi") with no real
 * translation — useless as quiz answers, so they are skipped.
 */
export function isTemplatePhrase(p: { translationUz: string; meaning: string }): boolean {
  return /so'zining .* bilan birikishi|bilan bog'liq barqaror iboraviy birikma/i.test(p.translationUz)
    || /^(Prepositional collocation:|A natural verb-noun collocation)/i.test(p.meaning);
}

export function itemsFromBooks(books: CurriculumBook[], src: ContentSource): GameItem[] {
  if (src.book === 'daily') return [];
  const book = books.find(b => b.bookNumber === src.book);
  if (!book) return [];
  const from = src.unitFrom ?? 1;
  const to = src.unitTo ?? book.units.length;
  const items: GameItem[] = [];
  for (const unit of book.units) {
    if (unit.unitNumber < from || unit.unitNumber > to) continue;
    const source = `Book ${book.bookNumber} · Unit ${unit.unitNumber}`;
    if (src.kinds.includes('word')) {
      for (const w of unit.targetWords) {
        if (!w.word || !w.translationUz) continue;
        items.push({ id: w.id || `${unit.id}-${w.word}`, term: w.word, uz: w.translationUz, definition: w.definition || '', example: w.example || '', kind: 'word', level: book.cefrLevel, source });
      }
    }
    if (src.kinds.includes('phrase')) {
      for (const p of unit.phrases || []) {
        if (!p.phrase || !p.translationUz || isTemplatePhrase(p)) continue;
        items.push({ id: p.id, term: p.phrase, uz: p.translationUz, definition: p.meaning || '', example: p.example || '', kind: 'phrase', level: book.cefrLevel, source });
      }
    }
  }
  return items;
}

export function itemsFromDailyWords(words: DailyWord[]): GameItem[] {
  const seen = new Set<string>();
  return words
    .filter(w => w.word && w.translation_uz)
    .filter(w => {
      const key = w.word.trim().toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map(w => ({
      id: w.id,
      term: w.word,
      uz: w.translation_uz,
      definition: w.definition || '',
      example: w.example || w.example_sentence || '',
      kind: 'word' as const,
      level: w.cefr_level,
      source: "Kunlik so'zlar",
    }));
}

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Blanks the term (or a simple inflection of it) out of its example sentence. */
export function blankExample(example: string, term: string): string | null {
  if (!example || !term) return null;
  const base = term.trim();
  // Match the word plus common endings: agree → agreed/agrees/agreeing, carry → carried.
  let pattern: string;
  if (base.length < 4 || /\s/.test(base)) pattern = `${escapeRe(base)}(?:s|es|d|ed|ing)?`;
  else if (/y$/i.test(base)) pattern = `${escapeRe(base.slice(0, -1))}(?:y|ie|i)[a-z]{0,3}`;
  else pattern = `${escapeRe(base.replace(/e$/i, ''))}[a-z]{0,4}`;
  const re = new RegExp(`\\b${pattern}\\b`, 'i');
  if (!re.test(example)) return null;
  return example.replace(re, '_____');
}

type Rng = () => number;

export function shuffle<T>(arr: T[], rng: Rng = Math.random): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const norm = (s: string) => s.trim().toLowerCase();

/** Which modes this item can be asked in. */
export function modesFor(item: GameItem): QuestionMode[] {
  const modes: QuestionMode[] = ['en_uz', 'uz_en'];
  if (item.definition) modes.push('definition');
  if (blankExample(item.example, item.term)) modes.push('gap');
  return modes;
}

/**
 * Builds one 4-option question. Distractors come from the same kind of item
 * (words with words, phrases with phrases) and never share the right answer.
 * Returns null when the pool is too small.
 */
export function makeQuestion(item: GameItem, pool: GameItem[], choice: ModeChoice, rng: Rng = Math.random): GameQuestion | null {
  const available = modesFor(item);
  const mode: QuestionMode = choice === 'mixed'
    ? available[Math.floor(rng() * available.length)]
    : available.includes(choice) ? choice : 'en_uz';

  const answerOf = (i: GameItem) => (mode === 'en_uz' ? i.uz : i.term);
  const correct = answerOf(item);
  const sameKind = pool.filter(i => i.kind === item.kind);
  const candidates = (sameKind.length >= 4 ? sameKind : pool).filter(i => i.id !== item.id);

  const seen = new Set([norm(correct)]);
  const distractors: string[] = [];
  for (const c of shuffle(candidates, rng)) {
    const a = answerOf(c);
    if (!a || seen.has(norm(a))) continue;
    seen.add(norm(a));
    distractors.push(a);
    if (distractors.length === 3) break;
  }
  if (distractors.length < 3) return null;

  const promptByMode: Record<QuestionMode, [string, string]> = {
    en_uz: [item.term, "Tarjimasini toping"],
    uz_en: [item.uz, 'Inglizchasini toping'],
    definition: [item.definition, "Bu qaysi so'z?"],
    gap: [blankExample(item.example, item.term) || item.term, "Bo'sh joyga mos so'z"],
  };
  const [prompt, hint] = promptByMode[mode];
  return { item, mode, prompt, hint, options: shuffle([correct, ...distractors], rng), correct };
}

/** A deck of questions without repeats (until the pool runs out). */
export function buildDeck(pool: GameItem[], count: number, choice: ModeChoice, rng: Rng = Math.random): GameQuestion[] {
  const deck: GameQuestion[] = [];
  let order = shuffle(pool, rng);
  let i = 0;
  let guard = 0;
  while (deck.length < count && pool.length >= 4 && guard < count * 5) {
    guard += 1;
    if (i >= order.length) { order = shuffle(pool, rng); i = 0; }
    const q = makeQuestion(order[i++], pool, choice, rng);
    if (q) deck.push(q);
  }
  return deck;
}

/** Points for a correct answer: 100 plus up to 50 for speed. */
export function battlePoints(correct: boolean, elapsedSec: number, roundSec: number): number {
  if (!correct) return 0;
  const left = Math.max(0, roundSec - elapsedSec) / roundSec;
  return 100 + Math.round(50 * left);
}

/** XP for a finished battle: 5 per correct answer, +20 for the winner, capped at 100. */
export const battleXp = (p: { correct: number }, isWinner: boolean) => Math.min(100, p.correct * 5 + (isWinner ? 20 : 0));
