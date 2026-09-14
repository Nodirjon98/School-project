// Safe storage wrapper for Safari Private Browsing and restricted iFrames.
// Never assumes localStorage or sessionStorage exist or have quota.

class MemoryStorage implements Storage {
  private store: Map<string, string> = new Map();

  get length(): number {
    return this.store.size;
  }

  clear(): void {
    this.store.clear();
  }

  getItem(key: string): string | null {
    return this.store.has(key) ? this.store.get(key)! : null;
  }

  key(index: number): string | null {
    const keys = Array.from(this.store.keys());
    return keys[index] || null;
  }

  removeItem(key: string): void {
    this.store.delete(key);
  }

  setItem(key: string, value: string): void {
    this.store.set(key, String(value));
  }
}

const memoryStore = new MemoryStorage();

function getSafeStorage(type: 'local' | 'session'): Storage {
  try {
    const storage = type === 'local' ? window.localStorage : window.sessionStorage;
    const testKey = '__storage_test__';
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return storage;
  } catch {
    // Safari Private mode or cookies disabled fallback
    return memoryStore;
  }
}

export const safeLocalStorage = getSafeStorage('local');
export const safeSessionStorage = getSafeStorage('session');

export function getStorageItem<T>(key: string, defaultValue: T): T {
  try {
    const item = safeLocalStorage.getItem(key);
    if (!item) return defaultValue;
    return JSON.parse(item) as T;
  } catch {
    return defaultValue;
  }
}

export function setStorageItem<T>(key: string, value: T): void {
  try {
    safeLocalStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(`[SafeStorage] Could not write ${key}:`, e);
  }
}

export function removeStorageItem(key: string): void {
  try {
    safeLocalStorage.removeItem(key);
  } catch (e) {
    console.warn(`[SafeStorage] Could not remove ${key}:`, e);
  }
}
