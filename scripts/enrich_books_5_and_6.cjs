const fs = require('fs');
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function processBook(bookNum) {
  console.log(`\n=== Processing Book ${bookNum} ===`);
  const bookPath = `src/data/books/data/book${bookNum}.json`;
  const rawPath = `data-raw/book${bookNum}.json`;

  const bookData = JSON.parse(fs.readFileSync(bookPath, 'utf8'));
  let rawStr = fs.readFileSync(rawPath, 'utf8');
  if (rawStr.charCodeAt(0) === 0xFEFF) rawStr = rawStr.slice(1);
  const rawData = JSON.parse(rawStr);
  const flashcards = rawData.flashcard.filter(u => u.wordlist && u.wordlist.length > 0);

  // Group into batches of 5 units
  const batchSize = 5;
  for (let i = 0; i < 30; i += batchSize) {
    const slice = bookData.units.slice(i, i + batchSize);
    console.log(`Processing Book ${bookNum} Units ${i + 1} to ${i + slice.length}...`);

    const unitsPayload = slice.map((u, idx) => {
      const rawU = flashcards[i + idx];
      return {
        id: u.id,
        unitNumber: u.unitNumber,
        title: u.title,
        passage: u.readingPassage,
        rawComprehension: rawU?.reading?.[1]?.story || ""
      };
    });

    const prompt = `You are an expert reading curriculum editor for Paul Nation's "4000 Essential English Words Book ${bookNum}".
For each of the ${unitsPayload.length} units below, generate EXACTLY 4 authentic reading comprehension questions based directly on the unit's passage and its original Part A (True/False) and Part B (Comprehension Questions) data:
- Question 1: True/False question based on Part A (options: ["True", "False"])
- Question 2: Another True/False question based on Part A (options: ["True", "False"])
- Question 3: 4-option Multiple Choice question based on Part B (with the exact book answer as one option, plus 3 plausible distractors)
- Question 4: Another 4-option Multiple Choice question based on Part B (with the exact book answer as one option, plus 3 plausible distractors)

Return a JSON object where each key is the unit id (e.g. "${unitsPayload[0].id}"), and the value is an array of 4 question objects:
{
  "${unitsPayload[0].id}": [
    {
      "id": "q-b${bookNum}-uX-1",
      "question": "string",
      "options": ["string", "string", ...],
      "correctAnswerIndex": number (0 to length-1),
      "explanation": "Clear explanation in English referencing passage evidence",
      "explanationUz": "O'zbek tilida aniq va tushunarli izoh"
    },
    ...
  ]
}

Units:
${JSON.stringify(unitsPayload)}`;

    let retries = 3;
    let success = false;
    while (retries > 0 && !success) {
      try {
        const res = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config: { responseMimeType: 'application/json' }
        });
        const parsed = JSON.parse(res.text);

        slice.forEach(u => {
          if (parsed[u.id] && Array.isArray(parsed[u.id]) && parsed[u.id].length >= 3) {
            u.comprehensionQuestions = parsed[u.id];
          } else {
            console.warn(`Unit ${u.id} missing in parsed keys, checking numeric or fallback`);
          }
        });
        success = true;
      } catch (err) {
        retries--;
        console.error(`Error in batch ${i+1}-${i+slice.length}, retrying (${retries} left):`, err.message);
        await new Promise(r => setTimeout(r, 2000));
      }
    }

    // Save intermediate progress
    fs.writeFileSync(bookPath, JSON.stringify(bookData, null, 2), 'utf8');
    // Delay slightly to stay smooth
    await new Promise(r => setTimeout(r, 800));
  }

  console.log(`Finished Book ${bookNum}!`);
}

async function main() {
  await processBook(5);
  await processBook(6);
}

main().catch(console.error);
