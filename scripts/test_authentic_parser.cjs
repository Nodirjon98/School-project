const fs = require('fs');
const path = require('path');

const raw = JSON.parse(fs.readFileSync('data-raw/tactics_source_data.json', 'utf8').replace(/^\uFEFF/, ''));

function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/<[^>]+>/g, '')
    .trim();
}

function parseUnit(item, unitNumber) {
  const title = item.en.replace(/^Unit \d+:\s*/, '').trim();
  const r0 = item.reading[0] ? item.reading[0].story : '';
  const r1 = item.reading[1] ? item.reading[1].story : '';
  
  // Parse Getting Ready
  // Section before the first <div class="section-rotate">Listening 1</div>
  const parts = r0.split(/<div class=[\"']section-rotate[\"']>/);
  const gettingReadyHtml = parts[0] || '';
  
  // Find images in getting ready
  const grImages = [...gettingReadyHtml.matchAll(/src=[\"']([^\"']+)[\"']/g)].map(m => m[1]);
  const grInstructionMatch = gettingReadyHtml.match(/<div class=[\"']sample-cover[\"']><div>(.*?)<\/div>/s) ||
                            gettingReadyHtml.match(/<p>(.*?)<\/p>/s);
  const grInstruction = grInstructionMatch ? cleanText(grInstructionMatch[1]) : 'Match each item with the correct answer.';

  // Getting ready matching items
  const grItems = [];
  const grMatches = [...gettingReadyHtml.matchAll(/<li[^>]*text=[\"']([^\"']*)[\"'][^>]*>(.*?)<\/li>/gs)];
  grMatches.forEach((m, idx) => {
    const ans = m[1].trim();
    const label = cleanText(m[2].split(/<input/)[0].replace(/_{2,}/g, '').trim());
    if (label) {
      grItems.push({ id: `gr-${unitNumber}-${idx + 1}`, label, correctAnswer: ans });
    }
  });

  // Getting ready options
  const grOptions = [];
  const grOptMatches = [...gettingReadyHtml.matchAll(/<ol class=[\"'][^\"']*ul-free-option[^\"']*[\"']>(.*?)<\/ol>/gs)];
  if (grOptMatches.length > 0) {
    const optLis = [...grOptMatches[0][1].matchAll(/<li>(.*?)<\/li>/gs)];
    optLis.forEach(o => {
      const txt = cleanText(o[1]);
      if (txt) grOptions.push(txt);
    });
  }

  // Helper to parse a Listening section
  function parseListeningSection(secHtml) {
    if (!secHtml) return null;
    const audioMatch = secHtml.match(/source=[\"']([^\"']+)[\"']/);
    const audioFile = audioMatch ? audioMatch[1].replace(/^data\//, '') : '';
    const audioUrl = audioFile ? `/api/tactics-audio/${audioFile}` : '';
    const originalAudioUrl = audioFile ? `https://www.essentialenglish.review/apps-data/basic-tactics-for-listening-3rd-edition/data/${audioFile}` : '';

    // Check if there are tasks (Task 1, Task 2) or single task
    const taskSplits = secHtml.split(/<h4>/);
    
    if (taskSplits.length <= 1) {
      // Single task
      const instrMatch = secHtml.match(/‣\s*<strong>(.*?)<\/strong>(.*?)(?:<\/p>|<div)/s) ||
                         secHtml.match(/<p>(?:<img[^>]+>\s*)?(.*?)<\/p>/s);
      const instruction = instrMatch ? cleanText(instrMatch[0]) : 'Listen. Circle the correct answer.';
      
      const questions = [];
      const qMatches = [...secHtml.matchAll(/<li[^>]*answer-index=[\"']?([0-9]+)[\"']?[^>]*>(.*?)<\/li>/gs)];
      qMatches.forEach((qm, qIdx) => {
        const ansIdx = parseInt(qm[1], 10);
        const inner = qm[2];
        const qText = cleanText(inner.split(/<ul/)[0].replace(/_{2,}/g, '______').trim());
        const opts = [];
        const optMatches = [...inner.matchAll(/<li>(.*?)<\/li>/gs)];
        optMatches.forEach(om => {
          opts.push(cleanText(om[1]).replace(/^[a-d]\.\s*/i, '').trim());
        });
        questions.push({
          id: `q-${unitNumber}-l1-${qIdx+1}`,
          question: qText || `Question ${qIdx + 1}`,
          options: opts.length > 0 ? opts : ['True', 'False'],
          answerIndex: ansIdx
        });
      });

      return {
        audioFile,
        audioUrl,
        originalAudioUrl,
        instruction,
        questions
      };
    }

    // Has Task 1 and/or Task 2
    const tasks = [];
    for (let t = 1; t < taskSplits.length; t++) {
      const tHtml = taskSplits[t];
      const tAudioMatch = tHtml.match(/source=[\"']([^\"']+)[\"']/);
      const tAudio = tAudioMatch ? tAudioMatch[1].replace(/^data\//, '') : audioFile;
      const tTitleMatch = tHtml.match(/^([^<]+)/);
      const tTitle = tTitleMatch ? cleanText(tTitleMatch[1]) : `Task ${t}`;

      const tInstrMatch = tHtml.match(/<p>(.*?)<\/p>/s);
      const tInstruction = tInstrMatch ? cleanText(tInstrMatch[1]) : '';

      // Check for MC questions (answer-index)
      const tQuestions = [];
      const qMatches = [...tHtml.matchAll(/<li[^>]*answer-index=[\"']?([0-9]+)[\"']?[^>]*>(.*?)<\/li>/gs)];
      qMatches.forEach((qm, qIdx) => {
        const ansIdx = parseInt(qm[1], 10);
        const inner = qm[2];
        const qText = cleanText(inner.split(/<ul/)[0].replace(/_{2,}/g, '______').trim());
        const opts = [];
        const optMatches = [...inner.matchAll(/<li>(.*?)<\/li>/gs)];
        optMatches.forEach(om => {
          opts.push(cleanText(om[1]).replace(/^[a-d]\.\s*/i, '').trim());
        });
        tQuestions.push({
          id: `q-${unitNumber}-t${t}-${qIdx+1}`,
          question: qText || `Item ${qIdx + 1}`,
          options: opts.length > 0 ? opts : ['Yes', 'No'],
          answerIndex: ansIdx
        });
      });

      // Check for picture numbering or free-answer items (text="...")
      const freeMatches = [...tHtml.matchAll(/<li[^>]*text=[\"']([^\"']+)[\"'][^>]*>(.*?)<\/li>/gs)];
      const freeItems = [];
      freeMatches.forEach((fm, fIdx) => {
        const expected = fm[1].trim();
        const inner = fm[2];
        const imgMatch = inner.match(/src=[\"']([^\"']+)[\"']/);
        const imgSrc = imgMatch ? `/api/tactics-image/${imgMatch[1].replace(/^data\//, '')}` : undefined;
        const rawImgSrc = imgMatch ? `https://www.essentialenglish.review/apps-data/basic-tactics-for-listening-3rd-edition/${imgMatch[1]}` : undefined;
        const itemLabel = cleanText(inner.replace(/<img[^>]+>/g, '').replace(/<input[^>]+>/g, '').trim());
        freeItems.push({
          id: `fi-${unitNumber}-t${t}-${fIdx+1}`,
          expected,
          label: itemLabel,
          image: imgSrc,
          rawImage: rawImgSrc
        });
      });

      tasks.push({
        taskNumber: t,
        title: tTitle,
        instruction: tInstruction,
        audioFile: tAudio,
        audioUrl: tAudio ? `/api/tactics-audio/${tAudio}` : '',
        originalAudioUrl: tAudio ? `https://www.essentialenglish.review/apps-data/basic-tactics-for-listening-3rd-edition/data/${tAudio}` : '',
        questions: tQuestions,
        freeItems
      });
    }

    return {
      audioFile,
      audioUrl,
      originalAudioUrl,
      tasks
    };
  }

  // Listening 1 is parts[1]
  const l1 = parseListeningSection(parts[1]);
  // Listening 2 is parts[2]
  const l2 = parseListeningSection(parts[2]);
  // Listening 3 is parts[3]
  const l3 = parseListeningSection(parts[3]);

  // Parse Reading 1 (Pronunciation & Dictation & Conversation)
  let pronunciation = null;
  let dictation = null;
  let conversation = null;

  if (r1) {
    const r1Parts = r1.split(/<div class=[\"']section-rotate[\"']>/);
    for (let p of r1Parts) {
      if (p.includes('Pronunciation')) {
        const audioMatch = p.match(/source=[\"']([^\"']+)[\"']/);
        const audioFile = audioMatch ? audioMatch[1].replace(/^data\//, '') : '';
        const titleMatch = p.match(/<strong>(.*?)<\/strong>/);
        const pronTitle = titleMatch ? cleanText(titleMatch[1]) : 'Pronunciation Practice';
        
        // Extract pronunciation table
        const tableRows = [];
        const trMatches = [...p.matchAll(/<tr>(.*?)<\/tr>/gs)];
        trMatches.forEach(tr => {
          const tds = [...tr[1].matchAll(/<td>(.*?)<\/td>/gs)].map(td => cleanText(td[1]));
          if (tds.length >= 2 && tds[0] !== 'How we spell it') {
            tableRows.push({ spell: tds[0], say: tds[1] });
          }
        });

        // Sentences
        const sentences = [];
        const liMatches = [...p.matchAll(/<li>(.*?)<\/li>/gs)];
        liMatches.forEach(li => {
          const txt = cleanText(li[1]);
          if (txt) sentences.push(txt);
        });

        pronunciation = {
          title: pronTitle,
          audioFile,
          audioUrl: audioFile ? `/api/tactics-audio/${audioFile}` : '',
          originalAudioUrl: audioFile ? `https://www.essentialenglish.review/apps-data/basic-tactics-for-listening-3rd-edition/data/${audioFile}` : '',
          table: tableRows,
          sentences
        };
      } else if (p.includes('Dictation')) {
        const audioMatch = p.match(/source=[\"']([^\"']+)[\"']/);
        const audioFile = audioMatch ? audioMatch[1].replace(/^data\//, '') : '';
        const instrMatch = p.match(/<p><strong>(.*?)<\/strong><\/p>/) || p.match(/<p>(.*?)<\/p>/);
        const instr = instrMatch ? cleanText(instrMatch[1]) : 'Listen to the conversation. Write the missing words.';

        // Extract dialogue text and missing words
        const dialogueCover = p.match(/<div class=[\"']word-free-cover[\"'][^>]*>(.*?)<\/div>/s);
        const dialogueHtml = dialogueCover ? dialogueCover[1] : p;
        
        const blanks = [];
        const blankMatches = [...dialogueHtml.matchAll(/text=[\"']([^\"']+)[\"']/g)];
        blankMatches.forEach(bm => blanks.push(bm[1]));

        // Clean dialogue with [___] markers
        const formattedScript = dialogueHtml
          .replace(/<sup[^>]*>\((.*?)\)<\/sup>\s*<span[^>]*text=[\"']([^\"']+)[\"'][^>]*>_{2,}<\/span>/g, '[$1: $2]')
          .replace(/<br\s*\/?>/gi, '\n')
          .replace(/<[^>]+>/g, '')
          .trim();

        dictation = {
          instruction: instr,
          audioFile,
          audioUrl: audioFile ? `/api/tactics-audio/${audioFile}` : '',
          originalAudioUrl: audioFile ? `https://www.essentialenglish.review/apps-data/basic-tactics-for-listening-3rd-edition/data/${audioFile}` : '',
          dialogueText: formattedScript,
          blanks
        };
      } else if (p.includes('Conversation')) {
        const promptMatch = p.match(/<p>(.*?)<\/p>/s);
        conversation = {
          prompt: promptMatch ? cleanText(promptMatch[1]) : 'Practice conversation with your partner.'
        };
      }
    }
  }

  return {
    unitNumber,
    title,
    level: `Basic A${Math.min(2, Math.floor((unitNumber - 1) / 8) + 1)}`,
    gettingReady: {
      instruction: grInstruction,
      images: grImages.map(img => `/api/tactics-image/${img.replace(/^data\//, '')}`),
      rawImages: grImages.map(img => `https://www.essentialenglish.review/apps-data/basic-tactics-for-listening-3rd-edition/${img}`),
      items: grItems,
      options: grOptions
    },
    listening1: l1,
    listening2: l2,
    listening3: l3,
    pronunciation,
    dictation,
    conversation
  };
}

const u1Parsed = parseUnit(raw.flashcard[0], 1);
console.log('Unit 1 parsed successfully:');
console.log('Title:', u1Parsed.title);
console.log('Getting ready items:', u1Parsed.gettingReady.items.length, 'options:', u1Parsed.gettingReady.options.length);
console.log('Listening 1 audio:', u1Parsed.listening1.audioUrl, 'questions:', u1Parsed.listening1.questions ? u1Parsed.listening1.questions.length : 0);
console.log('Listening 2 audio:', u1Parsed.listening2.audioUrl, 'tasks:', u1Parsed.listening2.tasks ? u1Parsed.listening2.tasks.length : 0);
console.log('Listening 3 audio:', u1Parsed.listening3.audioUrl, 'tasks:', u1Parsed.listening3.tasks ? u1Parsed.listening3.tasks.length : 0);
console.log('Pronunciation audio:', u1Parsed.pronunciation ? u1Parsed.pronunciation.audioUrl : 'none', 'table rows:', u1Parsed.pronunciation ? u1Parsed.pronunciation.table.length : 0);
console.log('Dictation audio:', u1Parsed.dictation ? u1Parsed.dictation.audioUrl : 'none', 'blanks:', u1Parsed.dictation ? u1Parsed.dictation.blanks : 0);
