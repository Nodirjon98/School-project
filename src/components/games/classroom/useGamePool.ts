import { useEffect, useMemo, useState } from 'react';
import type { CurriculumBook } from '../../../types';
import { useLMSData } from '../../../contexts/LMSDataContext';
import { DAILY_WORDS_BANK } from '../../../data/dailyWordsBank';
import { ContentSource, GameItem, itemsFromBooks, itemsFromDailyWords } from '../../../lib/gameQuestions';

let booksPromise: Promise<CurriculumBook[]> | null = null;
/** The six books are ~2.5 MB of JSON, so they load on demand once. */
const loadBooks = () => {
  booksPromise ??= import('../../../data/essentialWordsData').then(m => m.CURRICULUM_BOOKS);
  return booksPromise;
};

export function useGamePool(source: ContentSource) {
  const { dailyWords } = useLMSData();
  const [books, setBooks] = useState<CurriculumBook[] | null>(null);

  useEffect(() => {
    let alive = true;
    loadBooks().then(b => { if (alive) setBooks(b); });
    return () => { alive = false; };
  }, []);

  const pool: GameItem[] = useMemo(() => {
    if (source.book === 'daily') return itemsFromDailyWords([...dailyWords, ...DAILY_WORDS_BANK]);
    return books ? itemsFromBooks(books, source) : [];
  }, [books, dailyWords, source]);

  return { books, pool, loading: source.book !== 'daily' && !books };
}
