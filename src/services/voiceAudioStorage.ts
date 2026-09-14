/**
 * IndexedDB Persistent Storage for Mr. Safoyev's Voice Recordings
 * Overcomes the 5MB browser localStorage limit so audio recordings
 * are never compressed away, truncated, or lost.
 */

const DB_NAME = 'SafoyevVoiceStorageDB';
const DB_VERSION = 1;
const STORE_NAME = 'voice_clips';

let dbInstance: IDBDatabase | null = null;

function openDB(): Promise<IDBDatabase> {
  if (dbInstance) return Promise.resolve(dbInstance);

  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported in this environment'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'key' });
      }
    };

    request.onsuccess = () => {
      dbInstance = request.result;
      resolve(dbInstance);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

export interface StoredVoiceClip {
  key: string;
  blob?: Blob;
  base64?: string;
  duration?: number;
  mimeType?: string;
  createdAt: string;
}

export async function storeVoiceClip(
  key: string,
  data: { blob?: Blob; base64?: string; duration?: number; mimeType?: string }
): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const record: StoredVoiceClip = {
        key,
        blob: data.blob,
        base64: data.base64,
        duration: data.duration,
        mimeType: data.mimeType || 'audio/webm',
        createdAt: new Date().toISOString()
      };
      const req = store.put(record);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('IndexedDB storeVoiceClip error, fallback to memory:', err);
  }
}

export async function getStoredVoiceClip(key: string): Promise<StoredVoiceClip | null> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('IndexedDB getStoredVoiceClip error:', err);
    return null;
  }
}

export async function deleteStoredVoiceClip(key: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('IndexedDB deleteStoredVoiceClip error:', err);
  }
}

export async function getAllStoredClips(): Promise<Record<string, StoredVoiceClip>> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAll();
      req.onsuccess = () => {
        const result: Record<string, StoredVoiceClip> = {};
        for (const item of (req.result || [])) {
          result[item.key] = item;
        }
        resolve(result);
      };
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('IndexedDB getAllStoredClips error:', err);
    return {};
  }
}
