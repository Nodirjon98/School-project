import { MASTER_UZBEK_DICTIONARY } from '../data/masterDictionaryData';
import { COMMON_DICTIONARY, IRREGULAR_VERB_MAP, DictionaryEntry } from '../data/commonDictionary';
import { REAL_WORLD_BOOKS } from '../data/readingRealWorldData';
import { RealWorldVocab } from '../types';

export interface PrebuiltLookupResult {
  rawWord: string;
  matchedWord: string;
  translationUz: string;
  pos?: string;
  phonetic?: string;
  definitionEn?: string;
  sampleSentence?: string;
  synonym?: string;
  isPassageTarget: boolean;
  targetVocabRef?: RealWorldVocab;
}

// Build an indexed lookup map of ALL RealWorld target vocabulary from all books
const ALL_REALWORLD_VOCAB_MAP = new Map<string, RealWorldVocab>();

// Initialize RealWorld vocabulary map
try {
  REAL_WORLD_BOOKS.forEach(book => {
    book.units.forEach(unit => {
      unit.passages.forEach(passage => {
        (passage.targetVocab || []).forEach(vocab => {
          if (vocab.word) {
            const key = vocab.word.toLowerCase().trim();
            if (!ALL_REALWORLD_VOCAB_MAP.has(key)) {
              ALL_REALWORLD_VOCAB_MAP.set(key, vocab);
            }
          }
        });
      });
    });
  });
} catch (e) {
  console.warn('Could not index all realworld vocab:', e);
}

// Additional common reading passage terms with curated Uzbek translations
const SUPPLEMENTAL_PREBUILT_UZ: Record<string, { uz: string; pos?: string; def?: string; ex?: string }> = {
  // Common passage connectors & descriptive words
  "superstition": { uz: "irim-sirim, asossiz ishonch", pos: "n.", def: "A belief not based on human reason or scientific knowledge", ex: "Many cultures have superstitions about black cats." },
  "superstitious": { uz: "irimchi, irimlarga ishonuvchi", pos: "adj.", def: "Trusting in magic or chance", ex: "He is very superstitious about the number 13." },
  "origin": { uz: "kelib chiqish, manba", pos: "n.", def: "The point or place where something begins", ex: "The origin of this custom dates back centuries." },
  "originate": { uz: "kelib chiqmoq, paydo bo'lmoq", pos: "v.", def: "To have a specified beginning", ex: "The tradition originated in ancient Rome." },
  "ladder": { uz: "narvon, shoti", pos: "n.", def: "A structure for climbing up and down", ex: "Walking under a ladder is considered bad luck." },
  "mirror": { uz: "oyna, ko'zgu", pos: "n.", def: "A reflective surface", ex: "Breaking a mirror is said to bring seven years of bad luck." },
  "luck": { uz: "omad, baxt", pos: "n.", def: "Success or failure apparently brought by chance", ex: "Good luck with your exam!" },
  "unlucky": { uz: "baxtsiz, omadsiz", pos: "adj.", def: "Having or bringing bad luck", ex: "Friday the 13th is considered an unlucky day." },
  "lucky": { uz: "omadli, baxtli", pos: "adj.", def: "Having good luck", ex: "You are lucky to have such good friends." },
  "ancient": { uz: "qadimgi, qadimiy", pos: "adj.", def: "Belonging to the distant past", ex: "Ancient civilizations developed unique writing systems." },
  "historian": { uz: "tarixchi", pos: "n.", def: "An expert in or student of history", ex: "Historians study ancient artifacts." },
  "century": { uz: "asr, yuz yillik", pos: "n.", def: "A period of 100 years", ex: "The building was erected in the 19th century." },
  "centuries": { uz: "asrlar, yuz yilliklar", pos: "n.", def: "Multiple periods of 100 years", ex: "It has evolved over many centuries." },
  "culture": { uz: "madaniyat", pos: "n.", def: "The customs, arts, and social institutions of a nation", ex: "Uzbek culture is rich in hospitality." },
  "cultural": { uz: "madaniy", pos: "adj.", def: "Relating to the ideas, customs, and social behaviour of a society", ex: "We attended a cultural festival." },
  "tradition": { uz: "an'ana, udum", pos: "n.", def: "A long-established custom or belief", ex: "It is an ancient tradition." },
  "traditional": { uz: "an'anaviy, odatiy", pos: "adj.", def: "Existing in or as part of a tradition", ex: "Traditional dances were performed." },
  "symbol": { uz: "ramz, belgi", pos: "n.", def: "A thing that represents or stands for something else", ex: "The dove is a symbol of peace." },
  "symbolize": { uz: "ramziy ma'noni anglatmoq", pos: "v.", def: "To be a symbol of", ex: "The flag symbolizes unity." },
  "evil": { uz: "yovuzlik, yomonlik; yovuz", pos: "n./adj.", def: "Profoundly immoral and wicked", ex: "Superstitions often ward off evil spirits." },
  "spirit": { uz: "ruh, arvoh; shijoat", pos: "n.", def: "The non-physical part of a person; supernatural being", ex: "Ancient people believed spirits inhabited trees." },
  "prevent": { uz: "oldini olmoq, to'sqinlik qilmoq", pos: "v.", def: "To keep from happening", ex: "The salt was thrown to prevent misfortune." },
  "protect": { uz: "himoya qilmoq, asramoq", pos: "v.", def: "To keep safe from harm or injury", ex: "Amulets were worn to protect children." },
  "protection": { uz: "himoya, mudofaa", pos: "n.", def: "The act of protecting", ex: "Sunscreen provides skin protection." },
  "believe": { uz: "ishonmoq", pos: "v.", def: "To accept that something is true", ex: "Many people still believe in omens." },
  "belief": { uz: "e'tiqod, ishonch", pos: "n.", def: "An acceptance that something exists or is true", ex: "It is a widely held belief." },
  "custom": { uz: "urf-odat, odat", pos: "n.", def: "A widely accepted way of behaving", ex: "It is an old wedding custom." },
  "practice": { uz: "amaliyot, udum; mashq qilmoq", pos: "n./v.", def: "The actual application of an idea or method", ex: "The practice dates back to medieval times." },
  "behavior": { uz: "xulq-atvor, o'zini tutish", pos: "n.", def: "The way in which one acts or conducts oneself", ex: "Animal behavior changes before an earthquake." },
  "curiosity": { uz: "qiziquvchanlik, qiziqish", pos: "n.", def: "A strong desire to know or learn something", ex: "Curiosity drove the scientists to explore." },
  "curious": { uz: "qiziquvchan, g'alati", pos: "adj.", def: "Eager to know or learn", ex: "She gave him a curious look." },
  "discover": { uz: "kashf qilmoq, topmoq", pos: "v.", def: "To find unexpectedly or during a search", ex: "They discovered an ancient tomb." },
  "discovery": { uz: "kashfiyot, yangilik", pos: "n.", def: "The act of finding something new", ex: "It was a major scientific discovery." },
  "explain": { uz: "tushuntirmoq, izohlamoq", pos: "v.", def: "To make an idea or situation clear", ex: "Can you explain why people knock on wood?" },
  "explanation": { uz: "tushuntirish, izoh", pos: "n.", def: "A statement that makes something clear", ex: "There is a rational explanation for this." },
  "evidence": { uz: "dalil, isbot", pos: "n.", def: "Facts or information indicating whether a belief is true", ex: "There is no evidence to support this claim." },
  "research": { uz: "tadqiqot, izlanish; o'rganmoq", pos: "n./v.", def: "The systematic investigation into materials and sources", ex: "Recent research shows surprising results." },
  "researcher": { uz: "tadqiqotchi, izlanuvchi", pos: "n.", def: "A person who carries out academic research", ex: "Researchers surveyed thousands of respondents." },
  "scientist": { uz: "olim, tadqiqotchi", pos: "n.", def: "A person studying or having expert knowledge of natural sciences", ex: "Scientists tested the hypothesis." },
  "society": { uz: "jamiyat", pos: "n.", def: "The aggregate of people living together in an ordered community", ex: "Modern society relies heavily on technology." },
  "social": { uz: "ijtimoiy", pos: "adj.", def: "Relating to society or its organization", ex: "Social norms dictate acceptable behavior." },
  "psychology": { uz: "psixologiya, ruhiyatshunoslik", pos: "n.", def: "The scientific study of the human mind and behavior", ex: "He majored in developmental psychology." },
  "psychologist": { uz: "psixolog, ruhiyatshunos", pos: "n.", def: "An expert in psychology", ex: "Psychologists explain the root of fear." },
  "reason": { uz: "sabab, asos; aql-idrok", pos: "n.", def: "A cause, explanation, or justification", ex: "There is good reason to be cautious." },
  "influence": { uz: "ta'sir qilmoq; ta'sir", pos: "v./n.", def: "The capacity to have an effect on character or behavior", ex: "Family values influence decision making." },
  "impact": { uz: "ta'sir, zarba", pos: "n.", def: "A marked effect or influence", ex: "The superstition has a psychological impact." },
  "fear": { uz: "qo'rquv, xavf; qo'rqmoq", pos: "n./v.", def: "An unpleasant emotion caused by threat of danger", ex: "Fear of the unknown is natural." },
  "anxiety": { uz: "tashvish, xavotir", pos: "n.", def: "A feeling of worry or nervousness", ex: "Performing ritual acts reduces anxiety." },
  "control": { uz: "nazorat qilmoq; boshqaruv", pos: "v./n.", def: "The power to influence or direct people or course of events", ex: "People crave a sense of control over fate." },
  "fate": { uz: "taqdir, qismat", pos: "n.", def: "The development of events outside a person's control", ex: "Do you believe in fate?" },
  "destiny": { uz: "qismat, kelajak", pos: "n.", def: "Events that will necessarily happen to a particular person", ex: "She felt it was her destiny to teach." },
  "coincidence": { uz: "tasodif, to'g'ri kelib qolish", pos: "n.", def: "A remarkable concurrence of events without apparent causal connection", ex: "It was pure coincidence that we met." },
  "rational": { uz: "oqilona, mantiqiy", pos: "adj.", def: "Based on or in accordance with reason or logic", ex: "Try to make a rational choice." },
  "irrational": { uz: "mantiqsiz, asossiz", pos: "adj.", def: "Not logical or reasonable", ex: "Phobias involve irrational fears." },
  "comfort": { uz: "tasalli, qulaylik; yupatmoq", pos: "n./v.", def: "A state of ease or freedom from pain and constraint", ex: "Rituals bring comfort in stressful times." },
  "ritual": { uz: "marosim, rasm-rusum", pos: "n.", def: "A religious or solemn ceremony consisting of a series of actions", ex: "Athletes often have pre-game rituals." }
};

/**
 * Clean a raw word by stripping punctuation and leading/trailing whitespace
 */
export function sanitizeWordToken(raw: string): string {
  return raw
    .replace(/^[^a-zA-Z0-9]+/, '')
    .replace(/[^a-zA-Z0-9]+$/, '')
    .toLowerCase()
    .trim();
}

/**
 * Perform morphological variations to find base lemma
 */
function getLemmaCandidates(word: string): string[] {
  const candidates: string[] = [word];

  // Irregular verbs mapping check
  if (IRREGULAR_VERB_MAP[word]) {
    candidates.push(IRREGULAR_VERB_MAP[word]);
  }

  // -ies -> -y (e.g. centuries -> century, stories -> story)
  if (word.endsWith('ies') && word.length > 4) {
    candidates.push(word.slice(0, -3) + 'y');
  }

  // -es -> base (e.g. watches -> watch, boxes -> box)
  if (word.endsWith('es') && word.length > 3) {
    candidates.push(word.slice(0, -2));
    candidates.push(word.slice(0, -1)); // e.g. tastes -> taste
  }

  // -s -> base (e.g. ladders -> ladder, mirrors -> mirror)
  if (word.endsWith('s') && !word.endsWith('ss') && word.length > 2) {
    candidates.push(word.slice(0, -1));
  }

  // -ing -> base (e.g. breaking -> break, believing -> believe)
  if (word.endsWith('ing') && word.length > 4) {
    const stem = word.slice(0, -3);
    candidates.push(stem);
    candidates.push(stem + 'e'); // e.g. caring -> care
    // Double consonant: running -> run
    if (stem.length > 2 && stem[stem.length - 1] === stem[stem.length - 2]) {
      candidates.push(stem.slice(0, -1));
    }
  }

  // -ed -> base (e.g. believed -> believe, looked -> look)
  if (word.endsWith('ed') && word.length > 3) {
    const stem = word.slice(0, -2);
    candidates.push(stem);
    candidates.push(stem + 'e'); // e.g. smiled -> smile
    candidates.push(word.slice(0, -1)); // e.g. created -> create
    if (stem.length > 2 && stem[stem.length - 1] === stem[stem.length - 2]) {
      candidates.push(stem.slice(0, -1)); // stopped -> stop
    }
    if (stem.endsWith('i')) {
      candidates.push(stem.slice(0, -1) + 'y'); // worried -> worry
    }
  }

  // -ly -> base (e.g. quickly -> quick, safely -> safe)
  if (word.endsWith('ly') && word.length > 3) {
    candidates.push(word.slice(0, -2));
    if (word.slice(0, -2).endsWith('i')) {
      candidates.push(word.slice(0, -3) + 'y'); // easily -> easy
    }
  }

  return Array.from(new Set(candidates));
}

/**
 * Fast, 0-millisecond offline lookup using pre-built lexicon databases
 */
export function lookupPrebuiltWord(
  rawWord: string,
  currentPassageVocab?: RealWorldVocab[]
): PrebuiltLookupResult | null {
  const clean = sanitizeWordToken(rawWord);
  if (!clean || clean.length < 2) return null;

  // 1. Check current passage's target vocabulary FIRST (exact match)
  if (currentPassageVocab && currentPassageVocab.length > 0) {
    const targetMatch = currentPassageVocab.find(
      v => v.word.toLowerCase() === clean
    );
    if (targetMatch) {
      return {
        rawWord,
        matchedWord: targetMatch.word,
        translationUz: targetMatch.translationUz,
        pos: targetMatch.pos,
        phonetic: targetMatch.phonetic,
        definitionEn: targetMatch.definitionEn,
        sampleSentence: targetMatch.sampleSentence,
        synonym: targetMatch.synonym,
        isPassageTarget: true,
        targetVocabRef: targetMatch
      };
    }
  }

  const lemmas = getLemmaCandidates(clean);

  // 2. Check current passage's target vocabulary with lemma candidates
  if (currentPassageVocab && currentPassageVocab.length > 0) {
    for (const lemma of lemmas) {
      const targetMatch = currentPassageVocab.find(
        v => v.word.toLowerCase() === lemma
      );
      if (targetMatch) {
        return {
          rawWord,
          matchedWord: targetMatch.word,
          translationUz: targetMatch.translationUz,
          pos: targetMatch.pos,
          phonetic: targetMatch.phonetic,
          definitionEn: targetMatch.definitionEn,
          sampleSentence: targetMatch.sampleSentence,
          synonym: targetMatch.synonym,
          isPassageTarget: true,
          targetVocabRef: targetMatch
        };
      }
    }
  }

  // 3. Check Supplemental Prebuilt Curated Translations
  for (const lemma of lemmas) {
    if (SUPPLEMENTAL_PREBUILT_UZ[lemma]) {
      const item = SUPPLEMENTAL_PREBUILT_UZ[lemma];
      return {
        rawWord,
        matchedWord: lemma,
        translationUz: item.uz,
        pos: item.pos,
        definitionEn: item.def,
        sampleSentence: item.ex,
        isPassageTarget: false
      };
    }
  }

  // 4. Check All RealWorld Books target vocabulary repository
  for (const lemma of lemmas) {
    if (ALL_REALWORLD_VOCAB_MAP.has(lemma)) {
      const v = ALL_REALWORLD_VOCAB_MAP.get(lemma)!;
      return {
        rawWord,
        matchedWord: v.word,
        translationUz: v.translationUz,
        pos: v.pos,
        phonetic: v.phonetic,
        definitionEn: v.definitionEn,
        sampleSentence: v.sampleSentence,
        synonym: v.synonym,
        isPassageTarget: false,
        targetVocabRef: v
      };
    }
  }

  // 5. Check Master Uzbek Dictionary (4000 Essential words + TOEFL database)
  for (const lemma of lemmas) {
    if (MASTER_UZBEK_DICTIONARY[lemma]) {
      const translation = MASTER_UZBEK_DICTIONARY[lemma];
      return {
        rawWord,
        matchedWord: lemma,
        translationUz: translation,
        isPassageTarget: false
      };
    }
  }

  // 6. Check Common Dictionary database
  for (const lemma of lemmas) {
    const commonEntry = COMMON_DICTIONARY[lemma];
    if (commonEntry) {
      return {
        rawWord,
        matchedWord: commonEntry.word,
        translationUz: commonEntry.translationUz,
        pos: commonEntry.partOfSpeech,
        phonetic: commonEntry.phonetic,
        definitionEn: commonEntry.definition,
        sampleSentence: commonEntry.example,
        isPassageTarget: false
      };
    }
  }

  return null;
}
