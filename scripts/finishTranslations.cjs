const fs = require('fs');
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const CACHE_FILE = 'scripts/translation_cache.json';

let cache = {};
if (fs.existsSync(CACHE_FILE)) {
  cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
}

function isPlaceholder(tr, word) {
  if (!tr) return true;
  const t = tr.trim();
  if (/^\[.+\]\s+\S+$/i.test(t)) return true;
  if (t.toLowerCase() === word.toLowerCase()) return true;
  if (t.startsWith('[') && t.endsWith(']')) return true;
  return false;
}

// 1. Gather remaining words from books
const remainingWords = new Set();
for (let b = 1; b <= 6; b++) {
  const d = JSON.parse(fs.readFileSync(`src/data/books/data/book${b}.json`, 'utf8'));
  d.units.forEach(u => {
    u.targetWords.forEach(w => {
      const lower = w.word.toLowerCase().trim();
      const tr = cache[lower] || w.translationUz;
      if (isPlaceholder(tr, lower)) {
        remainingWords.add(lower);
      }
    });
  });
}

// 2. Gather key words from TOEFL essays (including sedentary, antidote, etc.)
const toeflFiles = [
  'src/data/toefl/topics_1_to_5.ts',
  'src/data/toefl/topics_6_to_10.ts',
  'src/data/toefl/topics_11_to_15.ts',
  'src/data/toefl/topics_16_to_31.ts',
  'src/data/toefl/topics_32_to_45.ts'
];

toeflFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const words = content.match(/\b[a-zA-Z]{4,}\b/g) || [];
  words.forEach(w => {
    const l = w.toLowerCase();
    if (!cache[l]) {
      remainingWords.add(l);
    }
  });
});

// Explicit must-have words from user feedback and TOEFL essays
const mustHaves = [
  'sedentary', 'elevate', 'antidote', 'catharsis', 'inertly', 'windfall', 'discretionary',
  'rejuvenates', 'monotonous', 'euphoria', 'ephemeral', 'commodity', 'exquisite',
  'resonance', 'indelible', 'adaptation', 'latent', 'susceptible', 'vigilance',
  'transcendence', 'adornment', 'democratized', 'curtailing', 'ubiquity', 'emancipation',
  'invaluable', 'contemporary', 'transformative', 'orchestral', 'therapeutic',
  'kindred', 'visceral', 'communion', 'adornment', 'reclaimed', 'diminished'
];
mustHaves.forEach(w => {
  if (!cache[w]) remainingWords.add(w);
});

console.log('Total unique words to translate:', remainingWords.size);

async function translateBatch(batch) {
  const prompt = `You are a professional English-to-Uzbek translator.
Translate each of these English words into natural, standard Uzbek Latin script (1-3 words in Uzbek).
The output MUST be a JSON object where the KEY is the exact English word and the VALUE is the Uzbek translation.

Example:
{"sedentary": "kamharakat, o'troq", "elevate": "ko'tarmoq, yuksaltirmoq", "antidote": "zaharqaytaruvchi, davo"}

Words:
${batch.join(', ')}
`;

  try {
    const callPromise = ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: { responseMimeType: 'application/json' }
    });
    const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 25000));
    const res = await Promise.race([callPromise, timeoutPromise]);
    const parsed = JSON.parse(res.text || '{}');
    return parsed;
  } catch (e) {
    console.error('Batch error:', e.message);
    return {};
  }
}

async function start() {
  const wordsArray = Array.from(remainingWords);
  const BATCH_SIZE = 40;
  const batches = [];
  for (let i = 0; i < wordsArray.length; i += BATCH_SIZE) {
    batches.push(wordsArray.slice(i, i + BATCH_SIZE));
  }

  console.log(`Processing ${batches.length} batches...`);
  const CONCURRENCY = 3;
  for (let i = 0; i < batches.length; i += CONCURRENCY) {
    const chunk = batches.slice(i, i + CONCURRENCY);
    console.log(`Processing batch ${i + 1}-${i + chunk.length} of ${batches.length}...`);
    const results = await Promise.all(chunk.map(b => translateBatch(b)));
    results.forEach(obj => {
      for (const [k, v] of Object.entries(obj)) {
        if (v && typeof v === 'string') {
          cache[k.toLowerCase().trim()] = v.trim();
        }
      }
    });
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
    await new Promise(r => setTimeout(r, 200));
  }

  console.log('Finished translation! Total in cache:', Object.keys(cache).length);

  // Apply to all 6 books
  for (let b = 1; b <= 6; b++) {
    const bPath = `src/data/books/data/book${b}.json`;
    const d = JSON.parse(fs.readFileSync(bPath, 'utf8'));
    let fixed = 0;
    d.units.forEach(u => {
      u.targetWords.forEach(w => {
        const lower = w.word.toLowerCase().trim();
        if (cache[lower] && !isPlaceholder(cache[lower], lower)) {
          w.translationUz = cache[lower];
          fixed++;
        }
      });
    });
    fs.writeFileSync(bPath, JSON.stringify(d, null, 2), 'utf8');
    console.log(`Book ${b}: updated ${fixed} words.`);
  }

  // Generate src/data/masterDictionaryData.ts
  const tsContent = `// Comprehensive Master English-Uzbek Lexicon for 4000 Essential English Words & TOEFL
export const MASTER_UZBEK_DICTIONARY: Record<string, string> = ${JSON.stringify(cache, null, 2)};
`;
  fs.writeFileSync('src/data/masterDictionaryData.ts', tsContent, 'utf8');
  console.log('Written src/data/masterDictionaryData.ts successfully!');
}

start();
