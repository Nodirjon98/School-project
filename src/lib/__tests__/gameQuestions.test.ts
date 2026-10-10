import { describe, expect, it } from 'vitest';
import {
  GameItem, battlePoints, battleXp, blankExample, buildDeck, itemsFromBooks, itemsFromDailyWords, makeQuestion, modesFor,
} from '../gameQuestions';
import { CURRICULUM_BOOKS } from '../../data/essentialWordsData';
import { DAILY_WORDS_BANK } from '../../data/dailyWordsBank';

// Deterministic RNG so failures are reproducible.
const seeded = (seed = 42) => () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

const item = (id: string, term: string, uz: string, extra: Partial<GameItem> = {}): GameItem =>
  ({ id, term, uz, definition: `def of ${term}`, example: `I ${term} every day.`, kind: 'word', level: 'A1', source: 'test', ...extra });

describe('blankExample', () => {
  it('blanks the word and simple inflections', () => {
    expect(blankExample('They agreed to help.', 'agree')).toBe('They _____ to help.');
    expect(blankExample('She carried the bag.', 'carry')).toBe('She _____ the bag.');
    expect(blankExample('We made a deal yesterday.', 'deal')).toBe('We made a _____ yesterday.');
  });
  it("doesn't match short words inside other words", () => {
    expect(blankExample('This is a big bag.', 'be')).toBeNull();
  });
  it('returns null when the word is missing', () => {
    expect(blankExample('Nothing here.', 'apple')).toBeNull();
    expect(blankExample('', 'apple')).toBeNull();
  });
});

describe('makeQuestion', () => {
  const pool = [item('1', 'go', 'bormoq'), item('2', 'eat', 'yemoq'), item('3', 'run', 'yugurmoq'), item('4', 'read', "o'qimoq"), item('5', 'walk', 'yurmoq')];

  it('makes 4 unique options including the answer', () => {
    const q = makeQuestion(pool[0], pool, 'en_uz', seeded())!;
    expect(q.prompt).toBe('go');
    expect(q.correct).toBe('bormoq');
    expect(q.options).toHaveLength(4);
    expect(new Set(q.options).size).toBe(4);
    expect(q.options).toContain('bormoq');
  });

  it('asks the other way round for uz_en', () => {
    const q = makeQuestion(pool[1], pool, 'uz_en', seeded())!;
    expect(q.prompt).toBe('yemoq');
    expect(q.correct).toBe('eat');
  });

  it('never uses a distractor with the same answer text', () => {
    const dupes = [...pool, item('6', 'went', 'bormoq')];
    for (let s = 1; s < 30; s++) {
      const q = makeQuestion(dupes[0], dupes, 'en_uz', seeded(s))!;
      expect(q.options.filter(o => o === 'bormoq')).toHaveLength(1);
    }
  });

  it('falls back to en_uz when the item cannot be asked in the chosen mode', () => {
    const noExample = item('9', 'zebra', 'zebra', { example: '' });
    expect(makeQuestion(noExample, [...pool, noExample], 'gap', seeded())!.mode).toBe('en_uz');
  });

  it('returns null when the pool is too small', () => {
    expect(makeQuestion(pool[0], pool.slice(0, 3), 'en_uz')).toBeNull();
  });
});

describe('real content', () => {
  it('every book has a usable pool of words and phrases', () => {
    for (const book of CURRICULUM_BOOKS) {
      const words = itemsFromBooks(CURRICULUM_BOOKS, { book: book.bookNumber, kinds: ['word'] });
      const phrases = itemsFromBooks(CURRICULUM_BOOKS, { book: book.bookNumber, kinds: ['phrase'] });
      expect(words.length).toBeGreaterThanOrEqual(500);
      expect(phrases.length).toBeGreaterThan(0);
    }
  });

  it('builds a valid deck from one unit in every mode', () => {
    const pool = itemsFromBooks(CURRICULUM_BOOKS, { book: 3, unitFrom: 7, unitTo: 7, kinds: ['word', 'phrase'] });
    expect(pool.every(i => i.source === 'Book 3 · Unit 7')).toBe(true);
    for (const mode of ['en_uz', 'uz_en', 'definition', 'gap', 'mixed'] as const) {
      const deck = buildDeck(pool, 20, mode, seeded());
      expect(deck).toHaveLength(20);
      deck.forEach(q => {
        expect(new Set(q.options).size).toBe(4);
        expect(q.options).toContain(q.correct);
        expect(q.prompt.length).toBeGreaterThan(0);
      });
    }
  });

  it('skips machine-generated placeholder phrases', () => {
    const phrases = CURRICULUM_BOOKS.flatMap(b => itemsFromBooks(CURRICULUM_BOOKS, { book: b.bookNumber, kinds: ['phrase'] }));
    expect(phrases.length).toBeGreaterThan(300);
    expect(phrases.some(p => /so'zining|barqaror iboraviy birikma/.test(p.uz))).toBe(false);
  });

  it('a good share of words can be asked as gap-fills', () => {
    const pool = itemsFromBooks(CURRICULUM_BOOKS, { book: 1, kinds: ['word'] });
    const gapable = pool.filter(i => modesFor(i).includes('gap')).length;
    expect(gapable / pool.length).toBeGreaterThan(0.6);
  });

  it('daily words de-duplicate by spelling', () => {
    const items = itemsFromDailyWords([...DAILY_WORDS_BANK, ...DAILY_WORDS_BANK]);
    expect(items).toHaveLength(DAILY_WORDS_BANK.length);
  });
});

describe('scoring', () => {
  it('gives 100 + speed bonus for correct answers only', () => {
    expect(battlePoints(true, 0, 12)).toBe(150);
    expect(battlePoints(true, 12, 12)).toBe(100);
    expect(battlePoints(true, 6, 12)).toBe(125);
    expect(battlePoints(false, 1, 12)).toBe(0);
  });
  it('caps battle XP at 100', () => {
    expect(battleXp({ correct: 3 }, false)).toBe(15);
    expect(battleXp({ correct: 3 }, true)).toBe(35);
    expect(battleXp({ correct: 50 }, true)).toBe(100);
  });
});
