const fs = require('fs');

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
    .trim();
}

function parseBookQuestions(html, bookNum, unitNum) {
  const questions = [];
  if (!html) return questions;
  const sections = html.split(/<li\b[^>]*\banswer-index=['"]/i).slice(1);
  for (let idx = 0; idx < sections.length; idx++) {
    const sec = sections[idx];
    const quoteIdx = sec.indexOf("'");
    const dquoteIdx = sec.indexOf('"');
    let endQuote = -1;
    if (quoteIdx !== -1 && dquoteIdx !== -1) {
      endQuote = Math.min(quoteIdx, dquoteIdx);
    } else if (quoteIdx !== -1) {
      endQuote = quoteIdx;
    } else {
      endQuote = dquoteIdx;
    }
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

for (let b = 1; b <= 4; b++) {
  const bookPath = `src/data/books/data/book${b}.json`;
  const rawPath = `data-raw/book${b}.json`;

  const bookData = JSON.parse(fs.readFileSync(bookPath, 'utf8'));
  let rawStr = fs.readFileSync(rawPath, 'utf8');
  if (rawStr.charCodeAt(0) === 0xFEFF) rawStr = rawStr.slice(1);
  const rawData = JSON.parse(rawStr);
  const flashcards = rawData.flashcard.filter(u => u.wordlist && u.wordlist.length > 0);

  let updatedCount = 0;
  bookData.units.forEach((unit, idx) => {
    const rawUnit = flashcards[idx];
    if (rawUnit && rawUnit.reading && rawUnit.reading[1] && rawUnit.reading[1].story) {
      const qs = parseBookQuestions(rawUnit.reading[1].story, b, unit.unitNumber);
      if (qs.length >= 4) {
        unit.comprehensionQuestions = qs;
        updatedCount++;
      }
    }
  });

  fs.writeFileSync(bookPath, JSON.stringify(bookData, null, 2), 'utf8');
  console.log(`Book ${b}: successfully updated ${updatedCount}/30 units with authentic 4 questions.`);
}
