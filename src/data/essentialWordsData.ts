import { CurriculumBook, CurriculumUnit, TargetWord } from '../types';
import { UNIT_PHRASES } from './curriculumPhrasesData';
import { COMMON_DICTIONARY, IRREGULAR_VERB_MAP } from './commonDictionary';
import { MASTER_UZBEK_DICTIONARY } from './masterDictionaryData';

// Import all 6 complete curriculum books (30 units each = 180 total units)
import book1Json from './books/data/book1.json';
import book2Json from './books/data/book2.json';
import book3Json from './books/data/book3.json';
import book4Json from './books/data/book4.json';
import book5Json from './books/data/book5.json';
import book6Json from './books/data/book6.json';

export const CURRICULUM_BOOKS: CurriculumBook[] = [
  book1Json as CurriculumBook,
  book2Json as CurriculumBook,
  book3Json as CurriculumBook,
  book4Json as CurriculumBook,
  book5Json as CurriculumBook,
  book6Json as CurriculumBook
];

// Attach curated idioms, collocations, and phrases to all curriculum units
CURRICULUM_BOOKS.forEach(book => {
  book.units.forEach(unit => {
    unit.phrases = UNIT_PHRASES[unit.id] || [];
  });
});

export function getBookById(bookId: string): CurriculumBook | undefined {
  return CURRICULUM_BOOKS.find(b => b.id === bookId);
}

export function getUnitById(unitId: string): { book: CurriculumBook; unit: CurriculumUnit } | undefined {
  for (const book of CURRICULUM_BOOKS) {
    const unit = book.units.find(u => u.id === unitId);
    if (unit) return { book, unit };
  }
  return undefined;
}

export interface CurriculumSearchResult {
  book: CurriculumBook;
  unit: CurriculumUnit;
  word: TargetWord;
  matchType: 'word' | 'definition' | 'translation';
}

export function searchCurriculumWords(query: string): CurriculumSearchResult[] {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  const results: CurriculumSearchResult[] = [];

  for (const book of CURRICULUM_BOOKS) {
    for (const unit of book.units) {
      for (const word of unit.targetWords) {
        if (word.word.toLowerCase() === q) {
          results.unshift({ book, unit, word, matchType: 'word' });
        } else if (word.word.toLowerCase().startsWith(q) || word.word.toLowerCase().includes(q)) {
          results.push({ book, unit, word, matchType: 'word' });
        } else if (word.translationUz && word.translationUz.toLowerCase().includes(q)) {
          results.push({ book, unit, word, matchType: 'translation' });
        } else if (word.definition.toLowerCase().includes(q)) {
          results.push({ book, unit, word, matchType: 'definition' });
        }
        if (results.length >= 60) break;
      }
      if (results.length >= 60) break;
    }
    if (results.length >= 60) break;
  }
  return results;
}

export function getAllCurriculumUnits(): { book: CurriculumBook; unit: CurriculumUnit }[] {
  const all: { book: CurriculumBook; unit: CurriculumUnit }[] = [];
  for (const book of CURRICULUM_BOOKS) {
    for (const unit of book.units) {
      all.push({ book, unit });
    }
  }
  return all;
}

export function isPlaceholderTranslation(tr?: string, word?: string): boolean {
  if (!tr) return true;
  const t = tr.trim();
  if (/^\[.+\]\s+\S+$/i.test(t)) return true;
  if (t.startsWith('[') && t.endsWith(']')) return true;
  if (word && t.toLowerCase() === word.toLowerCase()) return true;
  return false;
}

function guessPartOfSpeech(word: string): string {
  if (word.endsWith('ly')) return 'adverb';
  if (word.endsWith('tion') || word.endsWith('ment') || word.endsWith('ness') || word.endsWith('ity')) return 'noun';
  if (word.endsWith('able') || word.endsWith('ible') || word.endsWith('ive') || word.endsWith('ous') || word.endsWith('ful')) return 'adjective';
  if (word.endsWith('ate') || word.endsWith('ize') || word.endsWith('ify')) return 'verb';
  return 'academic vocabulary';
}

// Fast In-Memory Map for 4,000 Target Words + Common High-Frequency Words + Master Lexicon Lookup
let wordLookupMap: Map<string, TargetWord> | null = null;

function getWordLookupMap(): Map<string, TargetWord> {
  if (!wordLookupMap) {
    wordLookupMap = new Map();

    // 1. Populate all 3,600+ target words from curriculum books (Books 1-6)
    for (const book of CURRICULUM_BOOKS) {
      for (const unit of book.units) {
        for (const w of unit.targetWords) {
          const key = w.word.toLowerCase().trim();
          if (MASTER_UZBEK_DICTIONARY[key] && isPlaceholderTranslation(w.translationUz, w.word)) {
            w.translationUz = MASTER_UZBEK_DICTIONARY[key];
          }
          if (!wordLookupMap.has(key)) {
            wordLookupMap.set(key, w);
          }
        }
      }
    }

    // 2. Populate common words dictionary for instant synchronous lookup
    for (const [key, entry] of Object.entries(COMMON_DICTIONARY)) {
      if (!wordLookupMap.has(key)) {
        wordLookupMap.set(key, {
          id: `common-${key}`,
          word: entry.word,
          partOfSpeech: entry.partOfSpeech,
          phonetic: entry.phonetic || `/${key}/`,
          definition: entry.definition,
          translationUz: MASTER_UZBEK_DICTIONARY[key] || entry.translationUz,
          example: entry.example || `Found in authentic contextual usage.`
        });
      }
    }

    // 3. Populate all 4,140+ words from MASTER_UZBEK_DICTIONARY (covers TOEFL essays & academic terms)
    for (const [key, uzTranslation] of Object.entries(MASTER_UZBEK_DICTIONARY)) {
      if (!wordLookupMap.has(key)) {
        wordLookupMap.set(key, {
          id: `lex-${key}`,
          word: key,
          partOfSpeech: guessPartOfSpeech(key),
          phonetic: `/${key}/`,
          definition: `Akademik va kontekstual inglizcha so'z: "${key}"`,
          translationUz: uzTranslation,
          example: `Used in authentic academic writing and reading contexts.`
        });
      } else {
        const existing = wordLookupMap.get(key);
        if (existing && isPlaceholderTranslation(existing.translationUz, existing.word)) {
          existing.translationUz = uzTranslation;
        }
      }
    }
  }
  return wordLookupMap;
}

/**
 * Searches the 4000 Essential English Words dictionary by exact match or lemmatized form
 * Handles irregular verbs (went -> go, saw -> see), plurals, past tense (-ed), gerunds (-ing), adverbs (-ly), etc.
 */
export function findTargetWordInCurriculum(rawWord: string): TargetWord | undefined {
  if (!rawWord) return undefined;
  const clean = rawWord.toLowerCase().replace(/^[^a-z]+|[^a-z]+$/g, '');
  if (!clean || clean.length < 2) return undefined;

  const map = getWordLookupMap();

  // 1. Direct match
  if (map.has(clean)) return map.get(clean);

  // 2. Irregular verb / noun / form map (e.g. went -> go, ate -> eat, children -> child)
  if (IRREGULAR_VERB_MAP[clean]) {
    const base = IRREGULAR_VERB_MAP[clean];
    if (map.has(base)) return map.get(base);
  }

  // 3. Plural / 3rd person singular -es, -s
  if (clean.endsWith('ies') && clean.length > 4) {
    const candidate = clean.slice(0, -3) + 'y';
    if (map.has(candidate)) return map.get(candidate);
  }
  if (clean.endsWith('es') && clean.length > 3) {
    const candidate = clean.slice(0, -2);
    if (map.has(candidate)) return map.get(candidate);
  }
  if (clean.endsWith('s') && clean.length > 3) {
    const candidate = clean.slice(0, -1);
    if (map.has(candidate)) return map.get(candidate);
  }

  // 4. Past tense / participle -ed
  if (clean.endsWith('ied') && clean.length > 4) {
    const candidate = clean.slice(0, -3) + 'y';
    if (map.has(candidate)) return map.get(candidate);
  }
  if (clean.endsWith('ed') && clean.length > 3) {
    // try removing 'd' (e.g. create -> created)
    const cand1 = clean.slice(0, -1);
    if (map.has(cand1)) return map.get(cand1);
    // try removing 'ed' (e.g. walk -> walked)
    const cand2 = clean.slice(0, -2);
    if (map.has(cand2)) return map.get(cand2);
    // try double consonant (e.g. stopped -> stop)
    if (cand2.length > 2 && cand2[cand2.length - 1] === cand2[cand2.length - 2]) {
      const cand3 = cand2.slice(0, -1);
      if (map.has(cand3)) return map.get(cand3);
    }
  }

  // 5. Gerund / continuous -ing
  if (clean.endsWith('ing') && clean.length > 4) {
    // try removing 'ing'
    const cand1 = clean.slice(0, -3);
    if (map.has(cand1)) return map.get(cand1);
    // try adding 'e' (e.g. write -> writing)
    const cand2 = cand1 + 'e';
    if (map.has(cand2)) return map.get(cand2);
    // try double consonant (e.g. running -> run)
    if (cand1.length > 2 && cand1[cand1.length - 1] === cand1[cand1.length - 2]) {
      const cand3 = cand1.slice(0, -1);
      if (map.has(cand3)) return map.get(cand3);
    }
  }

  // 6. Adverb -ly
  if (clean.endsWith('ly') && clean.length > 4) {
    const cand1 = clean.slice(0, -2);
    if (map.has(cand1)) return map.get(cand1);
    if (clean.endsWith('ily')) {
      const cand2 = clean.slice(0, -3) + 'y';
      if (map.has(cand2)) return map.get(cand2);
    }
  }

  // 7. Comparative / Superlative -er, -est
  if (clean.endsWith('est') && clean.length > 4) {
    const cand1 = clean.slice(0, -3);
    if (map.has(cand1)) return map.get(cand1);
    const cand2 = clean.slice(0, -2);
    if (map.has(cand2)) return map.get(cand2);
  }
  if (clean.endsWith('er') && clean.length > 3) {
    const cand1 = clean.slice(0, -2);
    if (map.has(cand1)) return map.get(cand1);
    const cand2 = clean.slice(0, -1);
    if (map.has(cand2)) return map.get(cand2);
  }

  // 8. Common prefixes (un-, re-, dis-, in-, im-)
  if (clean.length > 5) {
    if (clean.startsWith('un') && map.has(clean.slice(2))) {
      const base = map.get(clean.slice(2))!;
      return {
        ...base,
        id: `pref-${clean}`,
        word: clean,
        translationUz: `no-${base.translationUz || base.word}`
      };
    }
    if (clean.startsWith('re') && map.has(clean.slice(2))) {
      const base = map.get(clean.slice(2))!;
      return {
        ...base,
        id: `pref-${clean}`,
        word: clean,
        translationUz: `qayta ${base.translationUz || base.word}`
      };
    }
    if (clean.startsWith('dis') && map.has(clean.slice(3))) {
      return map.get(clean.slice(3));
    }
  }

  return undefined;
}
