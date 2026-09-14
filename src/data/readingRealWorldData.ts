import { RealWorldBook, RealWorldPassage, RealWorldUnit, RealWorldVocab } from '../types';
import { RRW_BOOK_1 } from './realworld/book1Data';
import { RRW_BOOK_2 } from './realworld/book2Data';
import { RRW_BOOK_3 } from './realworld/book3Data';

export const REAL_WORLD_BOOKS: RealWorldBook[] = [
  RRW_BOOK_1,
  RRW_BOOK_2,
  RRW_BOOK_3
];

export function getRealWorldBookById(id: string): RealWorldBook | undefined {
  return REAL_WORLD_BOOKS.find((b) => b.id === id);
}

export function getAllRealWorldPassages(): RealWorldPassage[] {
  const list: RealWorldPassage[] = [];
  REAL_WORLD_BOOKS.forEach((b) => {
    b.units.forEach((u) => {
      u.passages.forEach((p) => {
        list.push(p);
      });
    });
  });
  return list;
}

export function getRealWorldPassageById(id: string): {
  passage: RealWorldPassage;
  unit: RealWorldUnit;
  book: RealWorldBook;
} | undefined {
  for (const book of REAL_WORLD_BOOKS) {
    for (const unit of book.units) {
      for (const passage of unit.passages) {
        if (passage.id === id) {
          return { passage, unit, book };
        }
      }
    }
  }
  return undefined;
}

export interface RealWorldSearchResult {
  type: 'passage' | 'vocab' | 'unit';
  id: string;
  bookId: string;
  bookNumber: number;
  unitId: string;
  unitNumber: number;
  passageId?: string;
  passageNumber?: number;
  title: string;
  matchSnippet: string;
  badge: string;
  level: string;
  targetItem?: RealWorldVocab;
}

export function searchRealWorldContent(query: string): RealWorldSearchResult[] {
  const cleanQ = query.trim().toLowerCase();
  if (!cleanQ) return [];

  const results: RealWorldSearchResult[] = [];

  for (const book of REAL_WORLD_BOOKS) {
    for (const unit of book.units) {
      // Check unit title & subject
      if (
        unit.title.toLowerCase().includes(cleanQ) ||
        unit.subjectArea.toLowerCase().includes(cleanQ) ||
        unit.themeDescriptionUz.toLowerCase().includes(cleanQ)
      ) {
        results.push({
          type: 'unit',
          id: unit.id,
          bookId: book.id,
          bookNumber: book.bookNumber,
          unitId: unit.id,
          unitNumber: unit.unitNumber,
          passageId: unit.passages[0]?.id,
          title: `Unit ${unit.unitNumber}: ${unit.title}`,
          matchSnippet: `${unit.subjectArea} • ${unit.themeDescriptionUz}`,
          badge: 'Unit Topic',
          level: book.cefrLevel
        });
      }

      for (const passage of unit.passages) {
        // Check passage title, subtitle, summary
        if (
          passage.title.toLowerCase().includes(cleanQ) ||
          passage.subtitle.toLowerCase().includes(cleanQ) ||
          passage.summaryUz.toLowerCase().includes(cleanQ)
        ) {
          results.push({
            type: 'passage',
            id: passage.id,
            bookId: book.id,
            bookNumber: book.bookNumber,
            unitId: unit.id,
            unitNumber: unit.unitNumber,
            passageId: passage.id,
            passageNumber: passage.passageNumber,
            title: `Part ${passage.passageNumber}: ${passage.title}`,
            matchSnippet: passage.subtitle || passage.summaryUz.slice(0, 100),
            badge: 'Reading Passage',
            level: passage.level
          });
        }

        // Check target vocabulary
        for (const vocab of passage.targetVocab) {
          if (
            vocab.word.toLowerCase().includes(cleanQ) ||
            vocab.translationUz.toLowerCase().includes(cleanQ) ||
            vocab.definitionEn.toLowerCase().includes(cleanQ) ||
            (vocab.collocation && vocab.collocation.toLowerCase().includes(cleanQ))
          ) {
            results.push({
              type: 'vocab',
              id: `${passage.id}-${vocab.word}`,
              bookId: book.id,
              bookNumber: book.bookNumber,
              unitId: unit.id,
              unitNumber: unit.unitNumber,
              passageId: passage.id,
              passageNumber: passage.passageNumber,
              title: `${vocab.word} (${vocab.pos}) — ${vocab.translationUz}`,
              matchSnippet: `"${vocab.sampleSentence}" [${passage.title}]`,
              badge: 'Academic Word (NAWL)',
              level: passage.level,
              targetItem: vocab
            });
          }
        }
      }
    }
  }

  return results.slice(0, 20);
}
