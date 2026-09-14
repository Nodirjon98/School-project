const fs = require('fs');

const CACHE_FILE = 'scripts/translation_cache.json';
let cache = {};
if (fs.existsSync(CACHE_FILE)) {
  cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
}

const manualHighYield = {
  "ideal": "mukammal, ideal",
  "formula": "formula, qoida",
  "senator": "senator",
  "lava": "lava, vulqon kuli",
  "admiral": "admiral, dengiz qo'mondoni",
  "global": "global, umumjahon",
  "asteroid": "asteroid, kichik sayyora",
  "vegetarian": "vegetarian, faqat o'simlikxo'r",
  "federal": "federal, davlat miqyosidagi",
  "interval": "oraliq, tanaffus",
  "parallel": "parallel, yonma-yon",
  "tornado": "tornado, kuchli uyurma",
  "respirator": "respirator, nafas olish niqobi",
  "donor": "donor, bag'ishlovchi",
  "graffiti": "grafiti, devoriy surat",
  "atom": "atom, eng kichik zarra",
  "minimal": "minimal, eng oz",
  "orangutan": "orangutan",
  "diplomat": "diplomat, elchi",
  "restate": "qaytadan ifodalamoq",
  "patent": "patent, ixtiro guvohnomasi",
  "veteran": "faxriy, tajribali kishi",
  "delta": "delta, daryo etagi",
  "sedentary": "kamharakat, o'troq",
  "antidote": "zaharqaytaruvchi, davo",
  "catharsis": "poklanish, ruhiy yengillik",
  "inertly": "harakatsiz, sustlik bilan",
  "windfall": "kutilmagan boylik, omadli foyda",
  "discretionary": "ixtiyoriy, erkin tasarrufdagi",
  "rejuvenates": "yoshartiradi, yangilaydi",
  "rejuvenate": "yoshartirmoq, kuch-quvvat bermoq",
  "monotonous": "bir xil, zerikarli",
  "euphoria": "ko'tarinki ruh, eyforiya",
  "ephemeral": "o'tkinchi, qisqa muddatli",
  "commodity": "tovar, mahsulot",
  "exquisite": "nafis, bejirim",
  "resonance": "aks-sado, jaranglash, chuqur ta'sir",
  "indelible": "o'chmas, unutilmas",
  "adaptation": "moslashish, ko'nikish",
  "latent": "yashirin, ko'rinmas",
  "susceptible": "moyil, ta'sirchan",
  "vigilance": "hushyorlik, sergaklik",
  "transcendence": "chegaradan oshish, yuksaklik",
  "adornment": "ziynat, bezak",
  "democratized": "ommabop qilingan, barchaga ochiq",
  "curtailing": "cheklash, qisqartirish",
  "ubiquity": "hamma yerda mavjudlik",
  "emancipation": "ozod bo'lish, mustaqillik",
  "invaluable": "bebaho, qimmatbaho",
  "contemporary": "zamonaviy, tengdosh",
  "transformative": "o'zgartiruvchi, tub burilish yasovchi",
  "orchestral": "orkestrga oid",
  "therapeutic": "shifobaxsh, davolovchi",
  "kindred": "hamfikr, qarindosh",
  "visceral": "ichki, chuqur his qilinadigan",
  "communion": "muloqot, ma'naviy birlik",
  "reclaimed": "qaytarib olingan, tiklangan",
  "diminished": "kamaygan, zaiflashgan",
  "elevate": "ko'tarmoq, yuksaltirmoq",
  "elevating": "ko'taruvchi, yuksaltiruvchi"
};

for (const [k, v] of Object.entries(manualHighYield)) {
  cache[k.toLowerCase().trim()] = v;
}

// Check placeholders
function isPlaceholder(tr) {
  if (!tr) return true;
  const t = tr.trim();
  if (/^\[.+\]\s+\S+$/i.test(t)) return true;
  if (t.startsWith('[') && t.endsWith(']')) return true;
  return false;
}

// Update all 6 books
let totalUpdated = 0;
let totalWords = 0;
for (let b = 1; b <= 6; b++) {
  const bPath = `src/data/books/data/book${b}.json`;
  const d = JSON.parse(fs.readFileSync(bPath, 'utf8'));
  let bUpdated = 0;
  d.units.forEach(u => {
    u.targetWords.forEach(w => {
      totalWords++;
      const lower = w.word.toLowerCase().trim();
      if (cache[lower] && !isPlaceholder(cache[lower])) {
        w.translationUz = cache[lower];
        bUpdated++;
      } else if (isPlaceholder(w.translationUz)) {
        console.warn(`Book ${b} STILL PLACEHOLDER:`, w.word);
      }
    });
  });
  fs.writeFileSync(bPath, JSON.stringify(d, null, 2), 'utf8');
  console.log(`Book ${b}: verified ${bUpdated} / ${d.units.reduce((acc, u) => acc + u.targetWords.length, 0)} words.`);
  totalUpdated += bUpdated;
}

// Also save updated cache
fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');

// Write src/data/masterDictionaryData.ts
const tsContent = `// Comprehensive Master English-Uzbek Lexicon for 4000 Essential English Words & TOEFL
export const MASTER_UZBEK_DICTIONARY: Record<string, string> = ${JSON.stringify(cache, null, 2)};
`;
fs.writeFileSync('src/data/masterDictionaryData.ts', tsContent, 'utf8');
console.log(`Generated masterDictionaryData.ts with ${Object.keys(cache).length} entries!`);
