import { ReadingPhrase } from '../types';
import phrasesJson from './curriculumPhrases.json';

/**
 * Paul Nation's 4000 Essential English Words - Complete Idioms & Collocations Dataset
 * Covers all 6 Books and all 180 Units with verified expressions, Uzbek translations, and in-story examples.
 */
export const UNIT_PHRASES: Record<string, ReadingPhrase[]> = phrasesJson as Record<string, ReadingPhrase[]>;

/**
 * Helper to fetch phrases for any unit across Books 1 through 6
 */
export function getUnitPhrases(unitId: string): ReadingPhrase[] {
  return UNIT_PHRASES[unitId] || [];
}
