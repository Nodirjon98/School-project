const fs = require('fs');
const path = require('path');

// Extract existing translations from essentialWordsData.ts
const existingData = fs.readFileSync('src/data/essentialWordsData.ts', 'utf8');
const wordTranslationMap = {};
const matchRegex = /word:\s*['"]([^'"]+)['"][\s\S]*?translationUz:\s*['"]([^'"]+)['"]/g;
let m;
while ((m = matchRegex.exec(existingData)) !== null) {
  wordTranslationMap[m[1].toLowerCase().trim()] = m[2].trim();
}

console.log(`Loaded ${Object.keys(wordTranslationMap).length} existing translations from essentialWordsData.ts`);

function cleanHtml(html) {
  if (!html) return "";
  return html
    .replace(/<p[^>]*>/gi, "")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<br\s*[\/]?>/gi, "\n")
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, "$1")
    .replace(/<em[^>]*>(.*?)<\/em>/gi, "$1")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&lsquo;|&rsquo;/g, "'")
    .replace(/&ndash;|&mdash;/g, "—")
    .replace(/&hellip;/g, "...")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function parseQuestions(html, bookNum, unitNum) {
  const questions = [];
  if (!html) return questions;
  const sections = html.split(/<li\s+answer-index=['"]/i).slice(1);
  for (let idx = 0; idx < sections.length; idx++) {
    const sec = sections[idx];
    const quoteIdx = sec.indexOf("'");
    const dquoteIdx = sec.indexOf('"');
    const endQuote = (quoteIdx !== -1 && (dquoteIdx === -1 || quoteIdx < dquoteIdx)) ? quoteIdx : dquoteIdx;
    const ansIdx = parseInt(sec.slice(0, endQuote), 10);
    const afterTag = sec.slice(sec.indexOf(">") + 1);
    const parts = afterTag.split(/<ul[^>]*>/i);
    const qText = cleanHtml(parts[0]);
    const options = [];
    if (parts[1]) {
      const optSection = parts[1].split(/<\/ul>/i)[0];
      const optMatches = optSection.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi);
      for (const om of optMatches) {
        options.push(cleanHtml(om[1].replace(/^[a-d]\.\s*/i, "")));
      }
    }
    if (qText && options.length > 0) {
      const correctIdx = (!isNaN(ansIdx) && ansIdx >= 0 && ansIdx < options.length) ? ansIdx : 0;
      const correctOption = options[correctIdx] || options[0];
      questions.push({
        id: `q-b${bookNum}-u${unitNum}-${idx + 1}`,
        question: qText,
        options,
        correctAnswerIndex: correctIdx,
        explanation: `According to the passage, the correct answer is "${correctOption}".`,
        explanationUz: `Matnga ko'ra to'g'ri javob: "${correctOption}".`
      });
    }
  }
  return questions;
}

const bookMeta = [
  {
    bookNumber: 1,
    title: '4000 Essential English Words 1',
    cefrLevel: 'A1',
    levelName: 'Elementary / Beginner',
    description: 'Fundamental high-frequency English vocabulary, everyday scenarios, and classic Aesop and folk fables for beginners.',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    bookNumber: 2,
    title: '4000 Essential English Words 2',
    cefrLevel: 'A2',
    levelName: 'Pre-Intermediate',
    description: 'Core vocabulary expanding everyday conversation, world adventures, historical fables, and practical concepts.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    bookNumber: 3,
    title: '4000 Essential English Words 3',
    cefrLevel: 'B1',
    levelName: 'Intermediate',
    description: 'Intermediate vocabulary for expressive narratives, cultural legends, biographies, and descriptive stories.',
    color: 'from-amber-500 to-orange-600'
  },
  {
    bookNumber: 4,
    title: '4000 Essential English Words 4',
    cefrLevel: 'B2',
    levelName: 'Upper-Intermediate',
    description: 'Challenging vocabulary for science, society, historical transformations, and academic critical thinking.',
    color: 'from-rose-500 to-red-600'
  },
  {
    bookNumber: 5,
    title: '4000 Essential English Words 5',
    cefrLevel: 'B2',
    levelName: 'Advanced Foundation',
    description: 'Sophisticated language for philosophical dialogues, scientific breakthroughs, biology, and historical analysis.',
    color: 'from-purple-500 to-violet-600'
  },
  {
    bookNumber: 6,
    title: '4000 Essential English Words 6',
    cefrLevel: 'C1',
    levelName: 'Advanced Mastery',
    description: 'Mastery-level academic and literary vocabulary for CEFR C1, IELTS 7.5+, and professional-grade fluency.',
    color: 'from-fuchsia-600 to-pink-600'
  }
];

for (let b = 1; b <= 6; b++) {
  const meta = bookMeta[b - 1];
  let raw = fs.readFileSync(`data-raw/book${b}.json`, "utf8");
  if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
  const data = JSON.parse(raw);
  const flashcards = data.flashcard.filter(u => u.wordlist && u.wordlist.length > 0);

  const units = flashcards.slice(0, 30).map((u, uIdx) => {
    const unitNum = uIdx + 1;
    const storyObj = (u.reading && u.reading[0]) ? u.reading[0] : {};
    const faqObj = (u.reading && u.reading[1]) ? u.reading[1] : {};
    const title = storyObj.en || `Unit ${unitNum}`;
    const passage = cleanHtml(storyObj.story);

    const words = (u.wordlist || []).map((w, wIdx) => {
      let pron = w.pron || "";
      let pos = "";
      const m = pron.match(/(adj\.|v\.|n\.|adv\.|prep\.|conj\.|pron\.)/i);
      if (m) {
        pos = m[0];
        pron = pron.replace(m[0], "").trim();
      }
      const lower = (w.en || "").toLowerCase().trim();
      const uz = wordTranslationMap[lower] || "";

      return {
        id: `w-b${b}-u${unitNum}-${wIdx + 1}`,
        word: w.en || "",
        partOfSpeech: pos || "n.",
        phonetic: pron || "",
        definition: w.desc || "",
        translationUz: uz,
        example: cleanHtml(w.exam || "")
      };
    });

    let questions = parseQuestions(faqObj.story, b, unitNum);
    if (questions.length === 0) {
      // Fallback question if none parsed
      questions = [
        {
          id: `q-b${b}-u${unitNum}-1`,
          question: `What is the central theme of "${title}"?`,
          options: [
            `Overcoming a challenge through critical thinking and action`,
            `The dangers of ignoring good advice`,
            `An unexpected journey to a distant land`,
            `How friends work together to achieve a goal`
          ],
          correctAnswerIndex: 0,
          explanation: `The passage primarily highlights the actions and decisions of the main characters.`,
          explanationUz: `Matn asosan bosh qahramonlarning harakatlari va qarorlarini yoritadi.`
        }
      ];
    }

    const wordCount = passage ? passage.split(/\s+/).filter(Boolean).length : 250;

    return {
      id: `b${b}-u${unitNum}`,
      bookNumber: b,
      unitNumber: unitNum,
      title,
      summaryUz: `Book ${b}, Unit ${unitNum}: ${title}. 20 ta yangi akademik va kundalik leksik birlik hamda matn.`,
      wordCount,
      readingPassage: passage,
      targetWords: words,
      comprehensionQuestions: questions
    };
  });

  const bookObj = {
    id: `book-${b}`,
    bookNumber: b,
    title: meta.title,
    cefrLevel: meta.cefrLevel,
    levelName: meta.levelName,
    description: meta.description,
    color: meta.color,
    unitsCount: units.length,
    targetWordsCount: units.reduce((acc, u) => acc + u.targetWords.length, 0),
    units
  };

  const outFile = path.join('src/data/books/data', `book${b}.json`);
  fs.writeFileSync(outFile, JSON.stringify(bookObj, null, 2), 'utf8');
  console.log(`Saved Book ${b} -> ${outFile} (${units.length} units, ${bookObj.targetWordsCount} words)`);
}

console.log('All 6 books compiled successfully!');
