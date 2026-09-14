import { TargetWord } from '../types';

const CACHE_PREFIX = 'premier_word_cache_';
const memoryCache = new Map<string, TargetWord>();

export function getCachedWord(word: string): TargetWord | null {
  const clean = word.toLowerCase().trim();
  if (memoryCache.has(clean)) {
    return memoryCache.get(clean)!;
  }
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + clean);
    if (raw) {
      const parsed = JSON.parse(raw) as TargetWord;
      memoryCache.set(clean, parsed);
      return parsed;
    }
  } catch (e) {
    // localStorage might be unavailable in sandboxed environments
  }
  return null;
}

export function saveCachedWord(word: string, targetWord: TargetWord): void {
  const clean = word.toLowerCase().trim();
  memoryCache.set(clean, targetWord);
  try {
    localStorage.setItem(CACHE_PREFIX + clean, JSON.stringify(targetWord));
  } catch (e) {
    // ignore
  }
}
