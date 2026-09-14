const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Existing high-quality dictionary entries from enrichTranslations.cjs
let existingDict = {};
try {
  const oldContent = fs.readFileSync('scripts/enrichTranslations.cjs', 'utf8');
  const match = oldContent.match(/const UZBEK_DICTIONARY = (\{[\s\S]*?\});/);
  if (match) {
    existingDict = eval('(' + match[1] + ')');
    console.log('Loaded existing curated translations:', Object.keys(existingDict).length);
  }
} catch (e) {
  console.warn('Could not read old dictionary:', e);
}

// Check for cached translations to avoid redundant calls
const CACHE_FILE = 'scripts/translation_cache.json';
let cache = { ...existingDict };
if (fs.existsSync(CACHE_FILE)) {
  try {
    const cachedData = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    cache = { ...cache, ...cachedData };
    console.log('Loaded cached translations, total:', Object.keys(cache).length);
  } catch (e) {}
}

function isPlaceholder(tr, word) {
  if (!tr) return true;
  const t = tr.trim();
  if (/^\[.+\]\s+\S+$/i.test(t)) return true;
  if (t.toLowerCase() === word.toLowerCase()) return true;
  if (t.startsWith('[') && t.endsWith(']')) return true;
  return false;
}

// Gather all words needing translation across all 6 books
const wordsNeedingTranslation = new Map();
for (let b = 1; b <= 6; b++) {
  const bPath = `src/data/books/data/book${b}.json`;
  const data = JSON.parse(fs.readFileSync(bPath, 'utf8'));
  data.units.forEach(u => {
    u.targetWords.forEach(w => {
      const lower = w.word.toLowerCase().trim();
      if (cache[lower] && !isPlaceholder(cache[lower], lower)) {
        // already cached with real translation
      } else if (isPlaceholder(w.translationUz, lower)) {
        wordsNeedingTranslation.set(lower, {
          word: w.word,
          pos: w.partOfSpeech,
          def: w.definition,
          example: w.example
        });
      }
    });
  });
}

console.log('Target words in books needing translation:', wordsNeedingTranslation.size);

// Also gather academic essay words from TOEFL essays
const toeflFiles = [
  'src/data/toefl/topics_1_to_5.ts',
  'src/data/toefl/topics_6_to_10.ts',
  'src/data/toefl/topics_11_to_15.ts',
  'src/data/toefl/topics_16_to_31.ts',
  'src/data/toefl/topics_32_to_45.ts'
];

const essayWords = new Map();
toeflFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/\b[a-zA-Z]{4,}\b/g) || [];
  matches.forEach(m => {
    const l = m.toLowerCase();
    if (!cache[l] && !wordsNeedingTranslation.has(l)) {
      essayWords.set(l, (essayWords.get(l) || 0) + 1);
    }
  });
});

// Pick the top 1200 frequent essay words
const frequentEssayWords = Array.from(essayWords.entries())
  .filter(([w, count]) => count >= 2 && !cache[w])
  .sort((a, b) => b[1] - a[1])
  .slice(0, 1200)
  .map(([w]) => w);

console.log('Frequent essay words to translate:', frequentEssayWords.length);

async function translateBatch(wordsBatch) {
  const prompt = `You are a certified English-to-Uzbek master lexicographer.
Translate the following English words into accurate, natural, concise Uzbek translations (1-3 words in Uzbek, using standard Latin script, e.g. "o'rganmoq", "xotirjam", "yuksaltirmoq, ko'tarmoq", "kamharakat, o'troq").
Pay special attention to academic registers (e.g. elevate -> ko'tarmoq, yuksaltirmoq; sedentary -> o'troq, kamharakat; antidote -> zaharqaytaruvchi, davo; catharsis -> poklanish, ruhiy yengillik).

Words to translate:
${wordsBatch.map(w => typeof w === 'string' ? w : `${w.word} (${w.pos || ''}: ${w.def || ''})`).join('\n')}

Return ONLY a JSON object mapping each exact lowercase word to its Uzbek translation:
{
  "word": "uzbek translation"
}`;

  try {
    const callPromise = ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: { responseMimeType: 'application/json' }
    });
    
    // 12 second timeout
    const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 12000));
    const res = await Promise.race([callPromise, timeoutPromise]);
    const parsed = JSON.parse(res.text || '{}');
    return parsed;
  } catch (err) {
    console.error('Batch translation error:', err.message);
    return {};
  }
}

async function run() {
  // Only process words NOT yet in cache!
  const allWords = [
    ...Array.from(wordsNeedingTranslation.values()).filter(w => !cache[w.word.toLowerCase()]),
    ...frequentEssayWords.filter(w => !cache[w])
  ];

  console.log(`Uncached words left to process: ${allWords.length}`);
  const BATCH_SIZE = 50;
  const batches = [];
  for (let i = 0; i < allWords.length; i += BATCH_SIZE) {
    batches.push(allWords.slice(i, i + BATCH_SIZE));
  }

  console.log(`Processing in ${batches.length} batches...`);

  // Run in chunks with concurrency 3
  const CONCURRENCY = 3;
  for (let i = 0; i < batches.length; i += CONCURRENCY) {
    const currentBatches = batches.slice(i, i + CONCURRENCY);
    console.log(`Processing batches ${i + 1} to ${i + currentBatches.length} of ${batches.length}...`);
    
    const results = await Promise.all(currentBatches.map(b => translateBatch(b)));
    results.forEach(res => {
      for (const [k, v] of Object.entries(res)) {
        if (v && typeof v === 'string' && !isPlaceholder(v, k)) {
          cache[k.toLowerCase().trim()] = v.trim();
        }
      }
    });

    // Save cache after each chunk
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
    await new Promise(r => setTimeout(r, 250));
  }

  console.log(`\nTranslation complete! Total cached translations: ${Object.keys(cache).length}`);

  // Now update Books 1-6
  let updatedBookWords = 0;
  for (let b = 1; b <= 6; b++) {
    const bPath = `src/data/books/data/book${b}.json`;
    const data = JSON.parse(fs.readFileSync(bPath, 'utf8'));
    let bookUpdated = 0;
    data.units.forEach(u => {
      u.targetWords.forEach(w => {
        const lower = w.word.toLowerCase().trim();
        if (cache[lower] && !isPlaceholder(cache[lower], lower)) {
          w.translationUz = cache[lower];
          bookUpdated++;
          updatedBookWords++;
        }
      });
    });
    fs.writeFileSync(bPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated Book ${b}: ${bookUpdated} / ${data.unitsCount * 20} words now have genuine Uzbek translations.`);
  }

  // Write master dictionary TypeScript file
  const dictOutput = `// Comprehensive Master English-Uzbek Lexicon for 4000 Essential English Words & TOEFL
export const MASTER_UZBEK_DICTIONARY: Record<string, string> = ${JSON.stringify(cache, null, 2)};
`;
  fs.writeFileSync('src/data/masterDictionaryData.ts', dictOutput, 'utf8');
  console.log('Successfully written src/data/masterDictionaryData.ts');
}

run();
