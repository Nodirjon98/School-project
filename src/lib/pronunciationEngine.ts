/**
 * Pronunciation Evaluation & Speech Engine
 * Provides audio synthesis, Web Speech recognition scoring, and phonetic accuracy analysis.
 */

export interface PronunciationEvaluationResult {
  score: number; // 0 - 100
  isMatch: boolean;
  status: 'excellent' | 'good' | 'needs_practice';
  transcript: string;
  matchedPhonemes: Array<{ char: string; matched: boolean }>;
  feedbackEn: string;
  feedbackUz: string;
  tipUz: string;
}

// Levenshtein distance calculation
function levenshteinDistance(s1: string, s2: string): number {
  const m = s1.length;
  const n = s2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

// Clean string for phonetic evaluation
function cleanText(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
}

/**
 * Converts audio Blob to Base64 data URL
 */
export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to convert blob to base64'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * Evaluates spoken text against the target word or phrase using strict local heuristics
 */
export function evaluatePronunciation(
  targetWordOrPhrase: string,
  spokenTranscript: string
): PronunciationEvaluationResult {
  const target = cleanText(targetWordOrPhrase);
  const spoken = cleanText(spokenTranscript);

  if (!spoken) {
    return {
      score: 0,
      isMatch: false,
      status: 'needs_practice',
      transcript: '',
      matchedPhonemes: target.split('').map(c => ({ char: c, matched: false })),
      feedbackEn: 'No audio detected. Please click the microphone and speak clearly.',
      feedbackUz: 'Ovoz aniqlanmadi. Iltimos mikrofonga bosib, so\'zni aniq ayting.',
      tipUz: 'Mikrofon ruxsati berilganiga va shovqinsiz xonada ekanligingizga ishonch hosil qiling.'
    };
  }

  // Calculate Levenshtein distance
  const distance = levenshteinDistance(target, spoken);
  const maxLen = Math.max(target.length, spoken.length);
  const similarityRatio = Math.max(0, 1 - distance / maxLen);

  // Character-by-character alignment
  const matchedPhonemes: Array<{ char: string; matched: boolean }> = [];
  for (let i = 0; i < target.length; i++) {
    const char = target[i];
    const isPresent = spoken.includes(char) && (spoken[i] === char || spoken[i - 1] === char || spoken[i + 1] === char);
    matchedPhonemes.push({ char, matched: isPresent });
  }

  // Strict scoring (NEVER false 100%)
  let finalScore = Math.round(similarityRatio * 100);

  if (target === spoken) {
    finalScore = 95; // High, but grounded
  } else if (distance > 0) {
    // Penalty for missing sounds or wrong words
    finalScore = Math.min(80, Math.round(similarityRatio * 90));
  }

  // If spoken is completely different (e.g. said "cat" for "phenomenon")
  if (distance >= target.length * 0.6) {
    finalScore = Math.max(10, Math.min(35, finalScore));
  }

  let status: 'excellent' | 'good' | 'needs_practice' = 'needs_practice';
  let feedbackEn = '';
  let feedbackUz = '';
  let tipUz = '';

  if (finalScore >= 88) {
    status = 'excellent';
    feedbackEn = 'Superb pronunciation! Clear vowels and natural cadence.';
    feedbackUz = 'Juda yaxshi! Tovushlar va urg\'u deyarli mukammal talaffuz qilindi.';
    tipUz = 'Kichik noaniqliklar bor, lekin har qanday suhbatdosh sizni bir martada tushunadi.';
  } else if (finalScore >= 70) {
    status = 'good';
    feedbackEn = 'Noticeable accent or minor sound deviations. Focus closely on consonants and syllables.';
    feedbackUz = 'Yaxshi urinish, lekin noaniqliklar bor. Oxirgi undoshlar va bo\'g\'in urg\'usiga e\'tibor bering.';
    tipUz = 'So\'zning urg\'uli bo\'g\'inini aniqroq va to\'g\'ri talaffuz qilishga harakat qiling.';
  } else {
    status = 'needs_practice';
    feedbackEn = `Incorrect pronunciation (detected: "${spoken}"). Mispronounced sounds or wrong word.`;
    feedbackUz = `Talaffuz xato ("${spoken}" deb eshitildi). Bo'g'inlar tushib qolgan yoki noto'g'ri aytildi.`;
    tipUz = 'Namuna audioni diqqat bilan eshiting va har bir bo\'g\'inni alohida takrorlang.';
  }

  return {
    score: finalScore,
    isMatch: finalScore >= 75,
    status,
    transcript: spokenTranscript,
    matchedPhonemes,
    feedbackEn,
    feedbackUz,
    tipUz
  };
}

/**
 * Multimodal AI Pronunciation Evaluation (Gemini 3.8 Flash)
 * Sends raw microphone audio directly to the server AI engine to catch deliberate mispronunciations,
 * phonetic deviations, dropped endings, and stress errors with 100% precision.
 */
export async function evaluatePronunciationWithAI(
  targetWord: string,
  audioBlob?: Blob | null,
  clientTranscript?: string
): Promise<PronunciationEvaluationResult> {
  if (audioBlob && audioBlob.size > 200) {
    try {
      const audioBase64 = await blobToBase64(audioBlob);
      const res = await fetch('/api/evaluate-pronunciation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetWord,
          audioBase64,
          audioMimeType: audioBlob.type || 'audio/webm',
          clientTranscript: clientTranscript || ''
        })
      });

      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data && typeof json.data.score === 'number') {
          return json.data;
        }
      }
    } catch (err) {
      console.warn('AI pronunciation API unavailable, using strict heuristic fallback:', err);
    }
  }

  // Fallback to strict phonetic evaluation
  return evaluatePronunciation(targetWord, clientTranscript || '');
}

/**
 * Text-to-speech with natural pronunciation
 */
export function speakTargetWord(
  text: string,
  options?: {
    rate?: number;
    pitch?: number;
    voiceName?: string;
    lang?: string;
    onEnd?: () => void;
  }
): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = options?.lang || 'en-US';
  utterance.rate = options?.rate ?? 1.0;
  utterance.pitch = options?.pitch ?? 1.0;

  const voices = window.speechSynthesis.getVoices();
  if (options?.voiceName) {
    const selectedVoice = voices.find(v => v.name.toLowerCase().includes(options.voiceName!.toLowerCase()));
    if (selectedVoice) utterance.voice = selectedVoice;
  } else {
    // Prefer natural US English voices
    const naturalVoice = voices.find(v => 
      (v.lang === 'en-US' || v.lang === 'en_US') && 
      (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Alex'))
    ) || voices.find(v => v.lang.startsWith('en'));
    if (naturalVoice) utterance.voice = naturalVoice;
  }

  if (options?.onEnd) {
    utterance.onend = options.onEnd;
    utterance.onerror = options.onEnd;
  }

  window.speechSynthesis.speak(utterance);
}

/**
 * Helper to generate syllable breakdowns with stress indication
 */
export function getSyllableBreakdown(word: string): string {
  const lower = word.toLowerCase();
  // Known common word patterns
  if (lower === 'experiment') return 'ex • PER • i • ment';
  if (lower === 'arrive') return 'ar • RIVE';
  if (lower === 'frequently') return 'FRE • quent • ly';
  if (lower === 'comprehend') return 'com • pre • HEND';
  if (lower === 'describe') return 'de • SCRIBE';
  if (lower === 'essential') return 'es • SEN • tial';
  if (lower === 'appropriate') return 'ap • PRO • pri • ate';
  if (lower === 'concern') return 'con • CERN';
  if (lower === 'content') return 'CON • tent';
  if (lower === 'expect') return 'ex • PECT';
  if (lower === 'frequently') return 'FRE • quent • ly';
  if (lower === 'habit') return 'HAB • it';
  if (lower === 'instruct') return 'in • STRUCT';
  if (lower === 'issue') return 'IS • sue';
  if (lower === 'none') return 'NONE';
  if (lower === 'patient') return 'PA • tient';
  if (lower === 'positive') return 'POS • i • tive';
  if (lower === 'punish') return 'PUN • ish';
  if (lower === 'represent') return 'rep • re • SENT';
  if (lower === 'shake') return 'SHAKE';
  if (lower === 'spread') return 'SPREAD';
  if (lower === 'stroll') return 'STROLL';
  if (lower === 'village') return 'VIL • lage';
  if (lower === 'aware') return 'a • WARE';
  if (lower === 'badly') return 'BAD • ly';
  if (lower === 'belong') return 'be • LONG';
  if (lower === 'continue') return 'con • TIN • ue';
  if (lower === 'error') return 'ER • ror';
  if (lower === 'experience') return 'ex • PE • ri • ence';
  if (lower === 'field') return 'FIELD';
  if (lower === 'hurt') return 'HURT';
  if (lower === 'judgment') return 'JUDG • ment';
  if (lower === 'likely') return 'LIKE • ly';
  if (lower === 'normal') return 'NOR • mal';
  if (lower === 'rare') return 'RARE';
  if (lower === 'relax') return 're • LAX';
  if (lower === 'request') return 're • QUEST';
  if (lower === 'reside') return 're • SIDE';
  if (lower === 'result') return 're • SULT';
  if (lower === 'roll') return 'ROLL';
  if (lower === 'since') return 'SINCE';
  if (lower === 'visible') return 'VIS • i • ble';
  if (lower === 'wild') return 'WILD';

  // Fallback heuristic: split every 2-3 characters at vowels
  if (word.length <= 4) return word.toUpperCase();
  const chunks = word.match(/[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi);
  if (chunks && chunks.length > 1) {
    return chunks.map((c, i) => i === 0 ? c.toUpperCase() : c.toLowerCase()).join(' • ');
  }
  return word.toUpperCase();
}
