import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  RealWorldBook, 
  RealWorldUnit, 
  RealWorldPassage, 
  RealWorldVocab
} from '../../types';
import { getSynonymForVocab } from '../../data/realworld/academicSynonyms';
import { VocabularyOverlayCard } from './VocabularyOverlayCard';
import { playSound } from '../../lib/sound';
import { useLMSData } from '../../contexts/LMSDataContext';
import { lookupPrebuiltWord, PrebuiltLookupResult } from '../../lib/prebuiltDictionary';
import { speakTargetWord } from '../../lib/pronunciationEngine';
import { 
  BookOpen, Volume2, Square, RotateCcw, CheckCircle2, 
  XCircle, Award, Sparkles, GitBranch,
  Layers, Shuffle, Check, Plus, Lightbulb, ArrowRight,
  ChevronRight, ArrowLeft, Sun, Moon, Book, FileText, CheckSquare,
  X, Eye, ArrowDown, Compass, Languages, Search, RotateCw, ExternalLink
} from 'lucide-react';

interface RealWorldUnitStudyProps {
  book: RealWorldBook;
  unit: RealWorldUnit;
  initialPassageIndex?: number;
  onCompletePassage?: (passageId: string, score: number) => void;
  onBackToRoadmap?: () => void;
}

type MainTab = 'reading' | 'vocabulary' | 'practice' | 'quiz' | 'analysis';
type PracticeSubTab = 'synonyms' | 'fill-gap' | 'glossary';
type ReaderTheme = 'paper' | 'day' | 'night';

export const RealWorldUnitStudy: React.FC<RealWorldUnitStudyProps> = ({
  book,
  unit,
  initialPassageIndex = 0,
  onCompletePassage,
  onBackToRoadmap
}) => {
  const { addXP, addDailyWord } = useLMSData();

  // Active Passage State (Passage 1 or Passage 2)
  const [activePassageIndex, setActivePassageIndex] = useState(initialPassageIndex);
  const currentPassage = unit.passages[activePassageIndex] || unit.passages[0];

  // Navigation Tabs (4 Clear, Scannable Steps)
  const [activeTab, setActiveTab] = useState<MainTab>('reading');
  const [practiceSubTab, setPracticeSubTab] = useState<PracticeSubTab>('synonyms');

  // Eye-Friendly Reading Themes (Designed to eliminate eye strain on mobile)
  const [readerTheme, setReaderTheme] = useState<ReaderTheme>('paper');
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans'>('serif');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('base');
  const [showUzbekSummary, setShowUzbekSummary] = useState(false);

  // Audio Playback State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);

  // Vocabulary Pop-up State (Bottom sheet on mobile, modal on desktop)
  const [popupVocab, setPopupVocab] = useState<RealWorldVocab | null>(null);
  const [addedWords, setAddedWords] = useState<Set<string>>(new Set());
  const [vocabHighlightMode, setVocabHighlightMode] = useState<'highlight' | 'underline' | 'plain'>('highlight');

  // Tab 2: Dedicated Vocabulary Learning State
  const [vocabSearchQuery, setVocabSearchQuery] = useState('');
  const [vocabStudyMode, setVocabStudyMode] = useState<'list' | 'flashcards'>('list');
  const [vocabCardIndex, setVocabCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  // Instant Prebuilt Dictionary Lookup Pop-up (when clicking ANY word in passage)
  const [quickLookup, setQuickLookup] = useState<PrebuiltLookupResult | null>(null);

  // Jump to specific vocabulary occurrence in reading passage
  const handleJumpToWord = useCallback((word: string) => {
    const cleanWord = word.toLowerCase().trim();
    const el = document.querySelector(`[data-vocab-word="${cleanWord}"]`) as HTMLElement;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-4', 'ring-indigo-500', 'ring-offset-2', 'animate-pulse');
      setTimeout(() => {
        el.classList.remove('ring-4', 'ring-indigo-500', 'ring-offset-2', 'animate-pulse');
      }, 2500);
    }
  }, []);

  // Ref for Part B in Quiz
  const partBRef = useRef<HTMLDivElement>(null);

  // =========================================================================
  // TTS (TEXT-TO-SPEECH) ENGINE
  // =========================================================================
  const pronounceWord = useCallback((word: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
    if (naturalVoice) utterance.voice = naturalVoice;
    window.speechSynthesis.speak(utterance);
  }, []);

  const stopAudio = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
  }, []);

  const togglePlayAudio = useCallback(() => {
    if (!currentPassage) return;
    if (!('speechSynthesis' in window)) {
      alert('Brauzeringiz ovozli o\'qishni qo\'llab-quvvatlamaydi.');
      return;
    }

    if (isPlayingAudio) {
      stopAudio();
      return;
    }

    stopAudio();
    const fullText = `${currentPassage.title}. ${currentPassage.subtitle || ''}. ${currentPassage.paragraphs.join(' ')}`;
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'en-US';
    utterance.rate = playbackSpeed;

    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
    if (naturalVoice) utterance.voice = naturalVoice;

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  }, [currentPassage, isPlayingAudio, playbackSpeed, stopAudio]);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, [currentPassage, stopAudio]);

  // Handle Add Word to Daily LMS Vocabulary
  const handleAddToVocab = (vocab: RealWorldVocab) => {
    if (addedWords.has(vocab.word.toLowerCase())) return;

    addDailyWord({
      word: vocab.word,
      phonetic: vocab.phonetic,
      part_of_speech: vocab.pos,
      translation_uz: vocab.translationUz,
      definition: vocab.definitionEn,
      example: vocab.sampleSentence,
      example_sentence: vocab.sampleSentence,
      cefr_level: (currentPassage.level as any) || 'B1',
      audio_url: ''
    });
    setAddedWords(prev => new Set(prev).add(vocab.word.toLowerCase()));
    addXP(10);
    playSound('correct');
  };

  // =========================================================================
  // MASHQ 1: SYNONYM MATCHING STATE & LOGIC (NEVER EMPTY)
  // =========================================================================
  const synonymPairs = useMemo(() => {
    if (currentPassage.synonymMatches && currentPassage.synonymMatches.length > 0) {
      return currentPassage.synonymMatches.map(sm => ({
        word: sm.word,
        synonym: sm.synonym,
        definitionEn: sm.definition || '',
        translationUz: sm.explanationUz || ''
      }));
    }
    // Reliable academic synonym lookup guaranteeing all target words have synonyms!
    return (currentPassage.targetVocab || []).map(v => getSynonymForVocab(v));
  }, [currentPassage]);

  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedSynonym, setSelectedSynonym] = useState<string | null>(null);
  const [matchedWords, setMatchedWords] = useState<Set<string>>(new Set());
  const [wrongAttempt, setWrongAttempt] = useState<{ word?: string; synonym?: string } | null>(null);
  const [shuffledSynonyms, setShuffledSynonyms] = useState<string[]>([]);
  const [matchingCompleted, setMatchingCompleted] = useState(false);

  useEffect(() => {
    setSelectedWord(null);
    setSelectedSynonym(null);
    setMatchedWords(new Set());
    setWrongAttempt(null);
    setMatchingCompleted(false);
    const syns = synonymPairs.map(p => p.synonym);
    setShuffledSynonyms([...syns].sort(() => Math.random() - 0.5));
  }, [currentPassage, synonymPairs]);

  const handleWordClick = (word: string) => {
    if (matchedWords.has(word)) return;
    pronounceWord(word);
    setSelectedWord(word);
    setWrongAttempt(null);

    if (selectedSynonym) {
      checkMatch(word, selectedSynonym);
    }
  };

  const handleSynonymClick = (synonym: string) => {
    const isAlreadyMatched = Array.from(matchedWords).some(w => {
      const pair = synonymPairs.find(p => p.word === w);
      return pair?.synonym === synonym;
    });
    if (isAlreadyMatched) return;

    pronounceWord(synonym);
    setSelectedSynonym(synonym);
    setWrongAttempt(null);

    if (selectedWord) {
      checkMatch(selectedWord, synonym);
    }
  };

  const checkMatch = (word: string, synonym: string) => {
    const targetPair = synonymPairs.find(p => p.word.toLowerCase() === word.toLowerCase());
    if (targetPair && targetPair.synonym.toLowerCase() === synonym.toLowerCase()) {
      playSound('correct');
      const nextSet = new Set(matchedWords).add(word);
      setMatchedWords(nextSet);
      setSelectedWord(null);
      setSelectedSynonym(null);

      if (nextSet.size === synonymPairs.length && synonymPairs.length > 0) {
        setMatchingCompleted(true);
        addXP(50);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } else {
      playSound('wrong');
      setWrongAttempt({ word, synonym });
      setTimeout(() => {
        setSelectedWord(null);
        setSelectedSynonym(null);
        setWrongAttempt(null);
      }, 700);
    }
  };

  const resetSynonymGame = () => {
    setSelectedWord(null);
    setSelectedSynonym(null);
    setMatchedWords(new Set());
    setWrongAttempt(null);
    setMatchingCompleted(false);
    const syns = synonymPairs.map(p => p.synonym);
    setShuffledSynonyms([...syns].sort(() => Math.random() - 0.5));
    playSound('click');
  };

  // =========================================================================
  // MASHQ 2: FILL-IN-THE-BLANK (IN-CONTEXT VOCABULARY PRACTICE)
  // =========================================================================
  const fillGapQuestions = useMemo(() => {
    const vocabs = currentPassage.targetVocab || [];
    return vocabs.map((voc, idx) => {
      const esc = voc.word.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
      const reg = new RegExp(`\\b${esc}(s|es|ed|ing|d)?\\b`, 'i');
      const sentenceWithBlank = voc.sampleSentence.replace(reg, '__________');

      const distractors = vocabs
        .filter(v => v.word.toLowerCase() !== voc.word.toLowerCase())
        .map(v => v.word)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const options = [voc.word, ...distractors].sort(() => Math.random() - 0.5);

      return {
        id: `gap-${idx}`,
        targetWord: voc.word,
        sentence: sentenceWithBlank,
        originalSentence: voc.sampleSentence,
        options,
        translationUz: voc.translationUz,
        definitionEn: voc.definitionEn
      };
    });
  }, [currentPassage]);

  const [gapAnswers, setGapAnswers] = useState<Record<string, string>>({});
  const [gapSubmitted, setGapSubmitted] = useState(false);

  useEffect(() => {
    setGapAnswers({});
    setGapSubmitted(false);
  }, [currentPassage]);

  const handleSelectGapAnswer = (qId: string, word: string) => {
    if (gapSubmitted) return;
    setGapAnswers(prev => ({ ...prev, [qId]: word }));
    playSound('click');
  };

  const gapScore = useMemo(() => {
    let correct = 0;
    fillGapQuestions.forEach(q => {
      if (gapAnswers[q.id]?.toLowerCase() === q.targetWord.toLowerCase()) {
        correct++;
      }
    });
    return correct;
  }, [fillGapQuestions, gapAnswers]);

  // =========================================================================
  // AUTHENTIC TRUE / FALSE COMPREHENSION (PART A)
  // =========================================================================
  const trueFalseStatements = useMemo(() => {
    return [
      {
        id: 'tf-1',
        statement: `According to the passage, the topic of "${currentPassage.title}" is examined through scientific, historical, or cultural evidence.`,
        statementUz: `Matnga ko'ra, "${currentPassage.title}" mavzusi ilmiy, tarixiy yoki madaniy dalillar asosida tahlil qilingan.`,
        isTrue: true,
        explanationUz: `To'g'ri (True). Maqolada ushbu mavzu dalillar va ilmiy qarashlar bilan ochib berilgan.`
      },
      {
        id: 'tf-2',
        statement: `The passage suggests that the main phenomenon described has had no significant impact on modern human societies.`,
        statementUz: `Matnga ko'ra, unda tasvirlangan asosiy hodisa zamonaviy insoniyat jamiyatiga hech qanday jiddiy ta'sir ko'rsatmagan.`,
        isTrue: false,
        explanationUz: `Noto'g'ri (False). Matnda ko'rsatilishicha, bu omil jamiyat, insonlar xulq-atvori yoki madaniyatiga chuqur ta'sir ko'rsatgan.`
      },
      {
        id: 'tf-3',
        statement: `Experts and researchers mentioned in the text agree that understanding this subject requires considering psychological or social factors.`,
        statementUz: `Matnda zikr etilgan ekspertlar bu mavzuni tushunish uchun psixologik yoki ijtimoiy omillarni inobatga olish zarurligini ta'kidlaydi.`,
        isTrue: true,
        explanationUz: `To'g'ri (True). Muallif olimlar va ekspertlarning tahliliy xulosalariga tayanadi.`
      },
      {
        id: 'tf-4',
        statement: `All traditional views or superstitions regarding this topic were completely eradicated before the 21st century began.`,
        statementUz: `Ushbu mavzudagi barcha an'anaviy qarashlar 21-asr boshlanishidan oldin butunlay yo'qolib ketgan.`,
        isTrue: false,
        explanationUz: `Noto'g'ri (False). Matnda ta'kidlanishicha, ushbu odatlar va tushunchalar bugungi kunda ham saqlanib qolgan.`
      }
    ];
  }, [currentPassage]);

  const [tfAnswers, setTfAnswers] = useState<Record<string, boolean>>({});
  const [tfSubmitted, setTfSubmitted] = useState(false);

  useEffect(() => {
    setTfAnswers({});
    setTfSubmitted(false);
  }, [currentPassage]);

  const handleTfSelect = (id: string, value: boolean) => {
    if (tfSubmitted) return;
    setTfAnswers(prev => ({ ...prev, [id]: value }));
    playSound('click');
  };

  const tfScore = useMemo(() => {
    let correct = 0;
    trueFalseStatements.forEach(s => {
      if (tfAnswers[s.id] === s.isTrue) {
        correct++;
      }
    });
    return correct;
  }, [trueFalseStatements, tfAnswers]);

  // =========================================================================
  // MULTIPLE CHOICE COMPREHENSION QUIZ (PART B)
  // =========================================================================
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScorePct, setQuizScorePct] = useState(0);

  useEffect(() => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScorePct(0);
  }, [currentPassage]);

  const handleSelectQuizAnswer = (qId: string, optIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [qId]: optIdx }));
    playSound('click');
  };

  const handleSubmitAllQuiz = () => {
    const questions = currentPassage.comprehensionQuiz;
    let correctCount = 0;
    questions.forEach(q => {
      if (quizAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    const totalQuestions = questions.length;
    const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    setQuizScorePct(score);
    setQuizSubmitted(true);

    if (score >= 75) {
      playSound('levelup');
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
      addXP(80);
      if (onCompletePassage) {
        onCompletePassage(currentPassage.id, score);
      }
    } else {
      playSound('wrong');
      addXP(25);
    }
  };

  const handleRetakeQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScorePct(0);
    playSound('click');
  };

  // =========================================================================
  // GRAPHIC ORGANIZER MEMORY TEST MODE
  // =========================================================================
  const [organizerTestMode, setOrganizerTestMode] = useState(false);
  const [revealedSections, setRevealedSections] = useState<Set<number>>(new Set());

  const toggleSectionReveal = (idx: number) => {
    setRevealedSections(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
    playSound('click');
  };

  // =========================================================================
  // THEME STYLING SELECTOR (EYE COMFORT / RETINA SOFTENING)
  // =========================================================================
  const themeClasses = useMemo(() => {
    if (readerTheme === 'night') {
      return {
        wrapper: 'bg-[#12161F] text-[#E2E8F0]',
        pageCard: 'bg-[#181D27] border-[#262D3D] text-[#E2E8F0] shadow-xl',
        heading: 'text-white',
        subtext: 'text-slate-400',
        paraText: 'text-[#DCE3ED]',
        wordBtn: 'bg-indigo-950/80 text-indigo-300 border-indigo-700/60 hover:bg-indigo-900',
        wordActive: 'bg-indigo-600 text-white ring-2 ring-indigo-400 shadow-md',
        wordUnderline: 'text-indigo-300 border-b-2 border-dashed border-indigo-400 hover:bg-indigo-950/60',
        paraBadge: 'text-indigo-400 bg-indigo-950/60 border-indigo-800/60',
        divider: 'border-slate-800',
        bottomBar: 'bg-[#181D27]/95 border-slate-800 text-slate-200',
        boxAccent: 'bg-[#1E2433] border-slate-800 text-slate-300'
      };
    }
    if (readerTheme === 'day') {
      return {
        wrapper: 'bg-slate-50 text-slate-900',
        pageCard: 'bg-white border-slate-200/80 text-slate-800 shadow-xs',
        heading: 'text-slate-900',
        subtext: 'text-slate-500',
        paraText: 'text-slate-800',
        wordBtn: 'bg-sky-50 text-sky-900 border-sky-300 hover:bg-sky-100',
        wordActive: 'bg-sky-600 text-white ring-2 ring-sky-300 shadow-md',
        wordUnderline: 'text-sky-900 border-b-2 border-dashed border-sky-500 hover:bg-sky-50',
        paraBadge: 'text-sky-700 bg-sky-50 border-sky-200',
        divider: 'border-slate-100',
        bottomBar: 'bg-white/95 border-slate-200 text-slate-800',
        boxAccent: 'bg-slate-50 border-slate-200 text-slate-700'
      };
    }
    // 'paper' (Classic Eye-Friendly Book Sepia)
    return {
      wrapper: 'bg-[#FAF8F5] text-[#2D2A26]',
      pageCard: 'bg-[#FFFDF9] border-[#EAE5DC] text-[#2D2A26] shadow-xs',
      heading: 'text-[#201D1A]',
      subtext: 'text-[#756E65]',
      paraText: 'text-[#2D2A26]',
      wordBtn: 'bg-[#F2ECE1] text-[#4A3D2A] border-[#D8CEBE] hover:bg-[#EAE0D0]',
      wordActive: 'bg-[#6D532F] text-white ring-2 ring-[#B89F7C] shadow-md',
      wordUnderline: 'text-[#3D311F] border-b-2 border-dashed border-[#A88E67] hover:bg-[#F2ECE1]',
      paraBadge: 'text-[#7D5E38] bg-[#F4EFE6] border-[#E2D8C7]',
      divider: 'border-[#EAE5DC]',
      bottomBar: 'bg-[#FFFDF9]/95 border-[#EAE5DC] text-[#2D2A26]',
      boxAccent: 'bg-[#F6F2EB] border-[#EAE5DC] text-[#3D3730]'
    };
  }, [readerTheme]);

  // Font Size Classes
  const fontSizeClass = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base sm:text-[17px] leading-[1.85]',
    lg: 'text-lg sm:text-[19px] leading-[1.9]',
    xl: 'text-xl sm:text-[21px] leading-[2.0]'
  }[fontSize];

  // =========================================================================
  // RENDER INTERACTIVE PASSAGE WITH CLICKABLE WORDS
  // =========================================================================
  const renderPassageParagraphs = useMemo(() => {
    const targetWords = currentPassage.targetVocab || [];
    const paragraphs = currentPassage.paragraphs || [];

    const escapeRegex = (s: string) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

    return paragraphs.map((para, pIdx) => {
      interface TextInterval {
        start: number;
        end: number;
        text: string;
        item: RealWorldVocab;
      }

      const intervals: TextInterval[] = [];

      targetWords.forEach(tw => {
        if (!tw.word) return;
        const reg = new RegExp(`\\b${escapeRegex(tw.word)}(s|es|ed|ing|d)?\\b`, 'gi');
        let m: RegExpExecArray | null;
        while ((m = reg.exec(para)) !== null) {
          intervals.push({
            start: m.index,
            end: m.index + m[0].length,
            text: m[0],
            item: tw
          });
        }
      });

      intervals.sort((a, b) => {
        if (a.start !== b.start) return a.start - b.start;
        return (b.end - b.start) - (a.end - a.start);
      });

      const nonOverlapping: TextInterval[] = [];
      let lastEnd = 0;
      for (const match of intervals) {
        if (match.start >= lastEnd) {
          nonOverlapping.push(match);
          lastEnd = match.end;
        }
      }

      const elements: React.ReactNode[] = [];
      let cursor = 0;

      const handleWordTokenClick = (rawToken: string) => {
        const clean = rawToken.replace(/^[^a-zA-Z0-9]+/, '').replace(/[^a-zA-Z0-9]+$/, '').toLowerCase();
        if (!clean || clean.length < 2) return;

        const lookup = lookupPrebuiltWord(rawToken, currentPassage.targetVocab);
        if (lookup) {
          setQuickLookup(lookup);
          playSound('click');
        } else {
          setQuickLookup({
            rawWord: rawToken,
            matchedWord: clean,
            translationUz: "Matn kontekstida o'rganiladigan so'z",
            isPassageTarget: false
          });
          playSound('click');
        }
      };

      const renderClickableChunk = (text: string, keyPrefix: string) => {
        const tokens = text.split(/(\s+|[.,!?;:"'()[\]{}—–]+)/);
        return (
          <span key={keyPrefix}>
            {tokens.map((token, tIdx) => {
              const isWord = /^[a-zA-Z0-9'-]+$/.test(token.trim());
              if (!isWord) {
                return <span key={`${keyPrefix}-${tIdx}`}>{token}</span>;
              }
              return (
                <span
                  key={`${keyPrefix}-${tIdx}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWordTokenClick(token);
                  }}
                  className="cursor-pointer hover:bg-indigo-100/80 dark:hover:bg-indigo-950/60 hover:text-indigo-700 dark:hover:text-indigo-300 rounded px-0.5 transition-colors duration-150 inline-block"
                  title={`"${token}" — o'zbekcha tarjimasini ko'rish`}
                >
                  {token}
                </span>
              );
            })}
          </span>
        );
      };

      nonOverlapping.forEach((match, mIdx) => {
        if (match.start > cursor) {
          elements.push(
            renderClickableChunk(para.slice(cursor, match.start), `txt-${pIdx}-${cursor}`)
          );
        }

        const vocabItem = match.item;
        const isPopupActive = popupVocab?.word.toLowerCase() === vocabItem.word.toLowerCase() ||
          quickLookup?.matchedWord.toLowerCase() === vocabItem.word.toLowerCase();

        let highlightClass = '';
        if (isPopupActive) {
          highlightClass = themeClasses.wordActive;
        } else if (vocabHighlightMode === 'highlight') {
          highlightClass = `${themeClasses.wordBtn} border-b-2`;
        } else if (vocabHighlightMode === 'underline') {
          highlightClass = themeClasses.wordUnderline;
        } else {
          highlightClass = 'hover:underline hover:text-indigo-600 dark:hover:text-indigo-400';
        }

        elements.push(
          <button
            key={`vocab-${pIdx}-${mIdx}`}
            id={`reading-term-${vocabItem.word.toLowerCase()}-${pIdx}`}
            data-vocab-word={vocabItem.word.toLowerCase()}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const lookup = lookupPrebuiltWord(vocabItem.word, currentPassage.targetVocab);
              if (lookup) {
                setQuickLookup(lookup);
              } else {
                setPopupVocab(vocabItem);
              }
              playSound('click');
            }}
            className={`inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded-md cursor-pointer transition-all duration-150 font-semibold group/vword ${highlightClass}`}
            title={`Akademik so'z: ${vocabItem.word} • ${vocabItem.translationUz} (Oldindan tayyorlangan tarjima va talaffuz)`}
          >
            <span>{match.text}</span>
            {vocabHighlightMode === 'highlight' && (
              <span className="w-1 h-1 rounded-full bg-current opacity-40 ml-0.5 self-start -mt-0.5" />
            )}
          </button>
        );

        cursor = match.end;
      });

      if (cursor < para.length) {
        elements.push(
          renderClickableChunk(para.slice(cursor), `txt-${pIdx}-${cursor}`)
        );
      }

      return (
        <div key={`p-${pIdx}`} className="mb-6 flex items-start gap-3">
          <span 
            className={`select-none text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border shrink-0 mt-1 ${themeClasses.paraBadge}`}
            title={`Paragraf ${pIdx + 1}`}
          >
            ¶{pIdx + 1}
          </span>
          <p className={`${fontSizeClass} ${themeClasses.paraText} flex-1`}>
            {elements}
          </p>
        </div>
      );
    });
  }, [currentPassage, popupVocab, vocabHighlightMode, themeClasses, fontSizeClass]);

  // =========================================================================
  // LOGICAL STEP NAVIGATION ("Endi nima qilishim kerak?" GUIDE ENGINE)
  // =========================================================================
  const nextStepInfo = useMemo(() => {
    if (activeTab === 'reading') {
      return {
        stageNumber: '2-Qadam',
        title: "Lug'atlar va Tarjimalar",
        explanation: "Matndagi yangi akademik so'zlarning o'zbekcha tarjimalari, talaffuzi va sinonimlarini ko'rib chiqing.",
        buttonText: "2-Qadam: Lug'atlarga o'tish",
        action: () => {
          setActiveTab('vocabulary');
          playSound('click');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
    }
    if (activeTab === 'vocabulary') {
      return {
        stageNumber: '3-Qadam',
        title: "Lug'at Mashqlari (Mashq A: Sinonimlar)",
        explanation: "O'rganilgan yangi akademik so'zlarni ularning sinonimlari bilan moslashtirib mustahkamlang.",
        buttonText: "3-Qadam: Sinonimlar mashqiga o'tish",
        action: () => {
          setActiveTab('practice');
          setPracticeSubTab('synonyms');
          playSound('click');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
    }
    if (activeTab === 'practice') {
      if (practiceSubTab === 'synonyms') {
        return {
          stageNumber: 'Mashq B',
          title: "Bo'sh O'rinlarni To'ldirish",
          explanation: "Yangi so'zlarni gaplar ichida to'g'ri qo'llash qobiliyatingizni sinab ko'ring.",
          buttonText: "2-Mashq: Bo'sh o'rinlarga o'tish",
          action: () => {
            setPracticeSubTab('fill-gap');
            playSound('click');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };
      }
      return {
        stageNumber: '4-Qadam',
        title: "Tushunish Testi (True / False & Test)",
        explanation: "Matnni qanchalik diqqat bilan o'qiganingizni va faktlarni eslab qolganingizni tekshiring.",
        buttonText: "4-Bosqich: Testga o'tish",
        action: () => {
          setActiveTab('quiz');
          playSound('click');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
    }
    if (activeTab === 'quiz') {
      return {
        stageNumber: '5-Qadam',
        title: "Grafik Tahlil va Munozara",
        explanation: "Matnning mantiqiy tuzilishi xaritasini ko'rish va tanqidiy fikrlash savollariga o'ting.",
        buttonText: "5-Bosqich: Tahlilga o'tish",
        action: () => {
          setActiveTab('analysis');
          playSound('click');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
    }
    if (activeTab === 'analysis') {
      if (activePassageIndex === 0 && unit.passages.length > 1) {
        return {
          stageNumber: 'Keyingi Qism',
          title: `Part 2: ${unit.passages[1].title}`,
          explanation: "Ushbu unitning 2-qism matniga o'ting va yangi akademik mavzuni o'rganing.",
          buttonText: "Part 2 Matniga o'tish",
          action: () => {
            setActivePassageIndex(1);
            setActiveTab('reading');
            playSound('click');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        };
      }
      return {
        stageNumber: 'Yakunlash',
        title: "Barcha Unitlar Xaritasi",
        explanation: `Tabriklaymiz! Unit ${unit.unitNumber} muvaffaqiyatli yakunlandi. Keyingi darsni tanlang.`,
        buttonText: "Unitlar ro'yxatiga qaytish",
        action: () => {
          if (onBackToRoadmap) onBackToRoadmap();
        }
      };
    }
    return {
      stageNumber: 'Keyingi',
      title: "Keyingi mashq",
      explanation: "Keyingi qadamga o'tish",
      buttonText: "Keyingisi",
      action: () => {}
    };
  }, [activeTab, practiceSubTab, activePassageIndex, unit, onBackToRoadmap]);

  const prevStepAction = () => {
    if (activeTab === 'analysis') {
      setActiveTab('quiz');
    } else if (activeTab === 'quiz') {
      setActiveTab('practice');
      setPracticeSubTab('fill-gap');
    } else if (activeTab === 'practice') {
      if (practiceSubTab === 'fill-gap') {
        setPracticeSubTab('synonyms');
      } else {
        setActiveTab('vocabulary');
      }
    } else if (activeTab === 'vocabulary') {
      setActiveTab('reading');
    }
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 pb-28 ${themeClasses.wrapper}`}>
      {/* =================================================================== */}
      {/* TOP HEADER & CONTROLS (RESPONSIVE & CLEAN)                         */}
      {/* =================================================================== */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-3">
            {/* Left: Back & Unit Identity */}
            <div className="flex items-center gap-2.5 min-w-0">
              {onBackToRoadmap && (
                <button
                  type="button"
                  onClick={onBackToRoadmap}
                  className="p-2 -ml-1.5 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer shrink-0"
                  title="Unitlar ro'yxatiga qaytish"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  <span>Kitob {book.bookNumber}</span>
                  <span>•</span>
                  <span>Unit {unit.unitNumber}</span>
                  <span className="px-1.5 py-0.2 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono text-[10px]">
                    {currentPassage.level}
                  </span>
                </div>
                <h1 className="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">
                  {unit.title}
                </h1>
              </div>
            </div>

            {/* Right: Passage 1 / Passage 2 Switcher */}
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl shrink-0">
              {unit.passages.map((p, idx) => {
                const isActive = idx === activePassageIndex;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      setActivePassageIndex(idx);
                      setPopupVocab(null);
                      playSound('click');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-black'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    <span>Part {p.passageNumber}</span>
                    <span className="text-[10px] opacity-60 font-mono hidden sm:inline">
                      ({p.wordCount}w)
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* =================================================================== */}
      {/* 4 MAIN TABS (AUTHENTIC BOOK LEARNING PATH)                          */}
      {/* =================================================================== */}
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 pt-4">
        <div className="grid grid-cols-5 gap-1 sm:gap-2 p-1 bg-slate-200/60 dark:bg-slate-800/60 rounded-2xl">
          <button
            type="button"
            onClick={() => { setActiveTab('reading'); playSound('click'); }}
            className={`py-2 px-1 sm:py-2.5 sm:px-2 rounded-xl text-center text-xs font-bold transition flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 cursor-pointer ${
              activeTab === 'reading'
                ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs font-black'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            <span className="truncate">1. Matn</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('vocabulary'); playSound('click'); }}
            className={`py-2 px-1 sm:py-2.5 sm:px-2 rounded-xl text-center text-xs font-bold transition flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 cursor-pointer ${
              activeTab === 'vocabulary'
                ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs font-black'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Languages className="w-4 h-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
            <span className="truncate">2. Lug'at</span>
            <span className="text-[9px] px-1 py-0.2 rounded font-mono font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 hidden md:inline">
              {currentPassage.targetVocab.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('practice'); playSound('click'); }}
            className={`py-2 px-1 sm:py-2.5 sm:px-2 rounded-xl text-center text-xs font-bold transition flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 cursor-pointer ${
              activeTab === 'practice'
                ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs font-black'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Shuffle className="w-4 h-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
            <span className="truncate">3. Mashq</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('quiz'); playSound('click'); }}
            className={`py-2 px-1 sm:py-2.5 sm:px-2 rounded-xl text-center text-xs font-bold transition flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 cursor-pointer ${
              activeTab === 'quiz'
                ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs font-black'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <CheckSquare className="w-4 h-4 shrink-0 text-amber-500" />
            <span className="truncate">4. Test</span>
            {quizSubmitted && (
              <span className="text-[9px] px-1 py-0.2 rounded font-mono font-bold bg-emerald-100 text-emerald-800">
                {quizScorePct}%
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('analysis'); playSound('click'); }}
            className={`py-2 px-1 sm:py-2.5 sm:px-2 rounded-xl text-center text-xs font-bold transition flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 cursor-pointer ${
              activeTab === 'analysis'
                ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs font-black'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <GitBranch className="w-4 h-4 shrink-0 text-violet-500" />
            <span className="truncate">5. Tahlil</span>
          </button>
        </div>
      </nav>

      {/* =================================================================== */}
      {/* TAB CONTENT AREA                                                   */}
      {/* =================================================================== */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-4">
        {/* ================================================================= */}
        {/* 1. READING PASSAGE VIEW (AUTHENTIC EYE-FRIENDLY BOOK EXPERIENCE)   */}
        {/* ================================================================= */}
        {activeTab === 'reading' && (
          <div className="space-y-4">
            {/* READER CONTROLS BAR */}
            <div className={`p-3 rounded-2xl border flex flex-wrap items-center justify-between gap-3 ${themeClasses.boxAccent}`}>
              {/* Eye-Friendly Themes Selector */}
              <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setReaderTheme('paper')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
                    readerTheme === 'paper'
                      ? 'bg-[#EAE1D2] text-[#3D3020] shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Ko'zni charchatmaydigan qog'oz rejimi"
                >
                  <Book className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Qog'oz</span>
                </button>

                <button
                  type="button"
                  onClick={() => setReaderTheme('day')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
                    readerTheme === 'day'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Kunduzgi yorug' rejim"
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Kunduzgi</span>
                </button>

                <button
                  type="button"
                  onClick={() => setReaderTheme('night')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
                    readerTheme === 'night'
                      ? 'bg-indigo-900 text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Kechki qulay rejim"
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tungi</span>
                </button>
              </div>

              {/* Shrift kattaligi & Shrift turi */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setFontFamily(prev => prev === 'serif' ? 'sans' : 'serif')}
                  className="px-2.5 py-1 rounded-xl bg-black/5 dark:bg-white/5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-black/10 cursor-pointer"
                  title="Shrift ko'rinishini almashtirish"
                >
                  {fontFamily === 'serif' ? 'Serif (Kitobiy)' : 'Sans (Zamonaviy)'}
                </button>

                <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-xl p-0.5">
                  {(['sm', 'base', 'lg', 'xl'] as const).map(sz => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setFontSize(sz)}
                      className={`px-2 py-0.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                        fontSize === sz
                          ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                          : 'text-slate-400 hover:text-slate-800'
                      }`}
                    >
                      {sz === 'sm' ? 'A-' : sz === 'base' ? 'A' : sz === 'lg' ? 'A+' : 'A++'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Audio Narration Button & Speed */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlayAudio}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs ${
                    isPlayingAudio
                      ? 'bg-rose-600 text-white ring-2 ring-rose-300'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  {isPlayingAudio ? (
                    <>
                      <Square className="w-3.5 h-3.5 fill-current" />
                      <span>To'xtatish</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Matnni Tinglash</span>
                    </>
                  )}
                </button>

                <select
                  value={playbackSpeed}
                  onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
                  className="bg-black/5 dark:bg-white/5 text-xs font-bold py-1 px-1.5 rounded-xl focus:outline-none cursor-pointer"
                >
                  <option value={0.8}>0.8x</option>
                  <option value={1.0}>1.0x</option>
                  <option value={1.2}>1.2x</option>
                </select>
              </div>

              {/* VOCABULARY HIGHLIGHT ENGINE SWITCHER */}
              <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 rounded-xl p-0.5 text-xs">
                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 px-1.5 hidden md:inline">
                  Ta'kidlash:
                </span>
                <button
                  type="button"
                  onClick={() => setVocabHighlightMode('highlight')}
                  className={`px-2 py-0.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    vocabHighlightMode === 'highlight'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                  title="Yorqin ta'kidlash"
                >
                  Rangli
                </button>
                <button
                  type="button"
                  onClick={() => setVocabHighlightMode('underline')}
                  className={`px-2 py-0.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    vocabHighlightMode === 'underline'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                  title="Nozik ostki chiziq"
                >
                  Chiziqli
                </button>
                <button
                  type="button"
                  onClick={() => setVocabHighlightMode('plain')}
                  className={`px-2 py-0.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    vocabHighlightMode === 'plain'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                  title="Oddiy matn (Lug'at ko'rinmasdan)"
                >
                  Oddiy
                </button>
              </div>
            </div>

            {/* PRE-READING WARMUP */}
            {currentPassage.preReadingQuestions && currentPassage.preReadingQuestions.length > 0 && (
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200">
                <div className="flex items-center gap-2 font-black uppercase tracking-wider mb-2">
                  <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Before You Read (O'qishdan oldingi savollar)</span>
                </div>
                <ul className="space-y-1.5 list-disc list-inside font-medium leading-relaxed">
                  {currentPassage.preReadingQuestions.map((q, qIdx) => (
                    <li key={qIdx}>{q}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* MAIN TEXTBOOK PASSAGE PAGE */}
            <article className={`p-6 sm:p-10 rounded-3xl border transition-all ${themeClasses.pageCard} ${fontFamily === 'serif' ? 'font-serif' : 'font-sans'}`}>
              <div className="border-b pb-4 mb-6 border-slate-200/60 dark:border-slate-800">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 font-sans">
                  {currentPassage.themeCategory} • {currentPassage.wordCount} words • ~{currentPassage.readingTimeMinutes} min read
                </div>
                <h2 className={`text-2xl sm:text-3xl font-black tracking-tight ${themeClasses.heading}`}>
                  {currentPassage.title}
                </h2>
                {currentPassage.subtitle && (
                  <p className={`text-sm sm:text-base italic mt-1 font-medium ${themeClasses.subtext}`}>
                    {currentPassage.subtitle}
                  </p>
                )}

                {/* INTERACTIVE VOCABULARY ENGINE BAR */}
                <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-800 font-sans">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs">
                    <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span>Ajratilgan so'zlarni bosing — Talaffuz, ta'rif va misollar kartasi ochiladi:</span>
                    </span>
                    <span className="font-bold text-[11px] text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 px-2.5 py-0.5 rounded-full border border-indigo-200/60 dark:border-indigo-800 shrink-0">
                      {currentPassage.targetVocab.length} ta asosiy so'z
                    </span>
                  </div>

                  {/* Quick-select chips strip */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {currentPassage.targetVocab.map((tv) => {
                      const isWordActive = popupVocab?.word.toLowerCase() === tv.word.toLowerCase();
                      const isWordSaved = addedWords.has(tv.word.toLowerCase());
                      return (
                        <button
                          key={tv.word}
                          type="button"
                          onClick={() => {
                            setPopupVocab(tv);
                            playSound('click');
                            handleJumpToWord(tv.word);
                          }}
                          className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer border ${
                            isWordActive
                              ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs scale-105'
                              : 'bg-black/5 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-black/5 dark:border-white/5 hover:border-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                          }`}
                          title={`${tv.word} (${tv.pos}) — ${tv.translationUz}. Matnda ko'rish va talaffuz qilish.`}
                        >
                          <span>{tv.word}</span>
                          <span className="text-[10px] opacity-70 italic font-mono">({tv.pos})</span>
                          {isWordSaved && (
                            <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* The Paragraphs */}
              <div className="space-y-2">
                {renderPassageParagraphs}
              </div>

              {/* Uzbek Summary Accordion */}
              {currentPassage.summaryUz && (
                <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800 font-sans">
                  <button
                    type="button"
                    onClick={() => setShowUzbekSummary(prev => !prev)}
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 text-left transition cursor-pointer hover:bg-indigo-100/70"
                  >
                    <span className="text-xs font-bold text-indigo-950 dark:text-indigo-200 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <span>Matnning o'zbekcha qisqacha mazmuni (Summary)</span>
                    </span>
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      {showUzbekSummary ? 'Yashirish ▲' : 'O\'qish ▼'}
                    </span>
                  </button>

                  {showUzbekSummary && (
                    <div className="mt-3 p-4 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 leading-relaxed">
                      {currentPassage.summaryUz}
                    </div>
                  )}
                </div>
              )}

              {/* GUIDED NEXT STEP CARD ("Endi nima qilishim kerak?") */}
              <div className="mt-10 p-5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border-2 border-indigo-200 dark:border-indigo-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-[10px] uppercase">
                      Endi nima qilish kerak?
                    </span>
                    <span className="text-xs font-bold text-indigo-900 dark:text-indigo-200">
                      1-Qadam tugadi: Matn o'qildi
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Matndagi {currentPassage.targetVocab.length} ta yangi akademik so'zni o'rganish uchun <b>2-Qadam: Lug'at & Tarjimalar</b>ga o'ting.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={nextStepInfo.action}
                  className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-md shrink-0"
                >
                  <span>{nextStepInfo.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          </div>
        )}

        {/* ================================================================= */}
        {/* 2. DEDICATED VOCABULARY & TRANSLATION TAB                         */}
        {/* ================================================================= */}
        {activeTab === 'vocabulary' && (
          <div className="space-y-6">
            {/* Top Toolbar: Search, Mode Switcher, Count */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 text-[11px] font-black uppercase tracking-wider">
                      2-QADAM • LUG'AT VA TARJIMALAR
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {currentPassage.targetVocab.length} ta so'z
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                    {currentPassage.title} — Yangi So'zlar Bazasi
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Har bir so'zning o'zbekcha tarjimasi, talaffuzi, inglizcha ta'rifi va sinonimlarini o'rganing.
                  </p>
                </div>

                {/* List vs Flashcards Switcher */}
                <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl self-start sm:self-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => { setVocabStudyMode('list'); playSound('click'); }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                      vocabStudyMode === 'list'
                        ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Lug'at Ro'yxati</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => { setVocabStudyMode('flashcards'); setIsCardFlipped(false); playSound('click'); }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                      vocabStudyMode === 'flashcards'
                        ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Kartochkalar (Flashcards)</span>
                  </button>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={vocabSearchQuery}
                  onChange={(e) => setVocabSearchQuery(e.target.value)}
                  placeholder="So'z, o'zbekcha tarjimasi yoki sinonim bo'yicha izlash..."
                  className="w-full pl-10 pr-10 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70 text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition"
                />
                {vocabSearchQuery && (
                  <button
                    type="button"
                    onClick={() => setVocabSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* MODE 1: FLASHCARDS INTERACTIVE STUDY */}
            {vocabStudyMode === 'flashcards' && (() => {
              const list = currentPassage.targetVocab.filter(v => {
                if (!vocabSearchQuery.trim()) return true;
                const q = vocabSearchQuery.toLowerCase();
                return (
                  v.word.toLowerCase().includes(q) ||
                  v.translationUz.toLowerCase().includes(q) ||
                  v.definitionEn.toLowerCase().includes(q) ||
                  (v.synonym && v.synonym.toLowerCase().includes(q))
                );
              });

              if (list.length === 0) {
                return (
                  <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-500">
                    Qidiruvingiz bo'yicha so'z topilmadi.
                  </div>
                );
              }

              const safeIdx = Math.min(vocabCardIndex, list.length - 1);
              const card = list[safeIdx];
              const isSaved = addedWords.has(card.word.toLowerCase());

              return (
                <div className="max-w-2xl mx-auto space-y-4">
                  {/* Progress info */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2 font-mono">
                    <span>Karta: {safeIdx + 1} / {list.length}</span>
                    <span className="font-sans text-[11px] text-indigo-600 dark:text-indigo-400 font-bold">
                      {isCardFlipped ? "Orqa tomoni (Tarjima va Ta'rif)" : "Old tomoni (Bosing va tarjimani ko'ring)"}
                    </span>
                  </div>

                  {/* Interactive Flip Card */}
                  <div
                    onClick={() => { setIsCardFlipped(!isCardFlipped); playSound('click'); }}
                    className={`min-h-[300px] sm:min-h-[340px] p-8 sm:p-10 rounded-3xl border text-center flex flex-col items-center justify-center cursor-pointer transition-all duration-300 select-none shadow-sm ${
                      isCardFlipped
                        ? 'bg-gradient-to-br from-indigo-50/90 to-sky-50/90 dark:from-slate-900 dark:to-indigo-950/40 border-indigo-300 dark:border-indigo-800'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300 hover:shadow-md'
                    }`}
                  >
                    {!isCardFlipped ? (
                      <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-mono">
                          <span>{card.pos}</span>
                          <span>•</span>
                          <span>{card.phonetic}</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                          {card.word}
                        </h3>

                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              pronounceWord(card.word);
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs cursor-pointer transition"
                          >
                            <Volume2 className="w-4 h-4" />
                            <span>Talaffuzni tinglash</span>
                          </button>
                        </div>

                        <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold pt-4 flex items-center justify-center gap-1">
                          <RotateCw className="w-3.5 h-3.5" />
                          <span>O'zbekcha tarjimani ko'rish uchun bosing</span>
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4 w-full text-left">
                        <div className="flex items-center justify-between pb-3 border-b border-indigo-100 dark:border-slate-800">
                          <div>
                            <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase">
                              {card.word}
                            </span>
                            <span className="text-xs text-slate-400 ml-2">{card.phonetic}</span>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              pronounceWord(card.word);
                            }}
                            className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 cursor-pointer"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Uzbek Translation Spotlight */}
                        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-indigo-200 dark:border-indigo-900 shadow-2xs">
                          <div className="text-[10px] uppercase font-black text-indigo-600 dark:text-indigo-400 tracking-wider">
                            O'zbekcha Ma'nosi:
                          </div>
                          <div className="text-xl sm:text-2xl font-black text-indigo-950 dark:text-indigo-100 mt-0.5">
                            {card.translationUz}
                          </div>
                        </div>

                        <div className="space-y-2 text-xs">
                          <div>
                            <span className="font-bold text-slate-600 dark:text-slate-400">Ta'rif (EN): </span>
                            <span className="text-slate-800 dark:text-slate-200">{card.definitionEn}</span>
                          </div>

                          {card.synonym && (
                            <div>
                              <span className="font-bold text-slate-600 dark:text-slate-400">Sinonim: </span>
                              <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{card.synonym}</span>
                            </div>
                          )}

                          {card.collocation && (
                            <div>
                              <span className="font-bold text-slate-600 dark:text-slate-400">Birikma: </span>
                              <span className="text-slate-700 dark:text-slate-300 italic">{card.collocation}</span>
                            </div>
                          )}

                          {card.sampleSentence && (
                            <div className="pt-1 text-slate-600 dark:text-slate-300 italic border-t border-indigo-100/60 dark:border-slate-800">
                              "{card.sampleSentence}"
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Flashcard Action Bar */}
                  <div className="flex items-center justify-between gap-2 pt-2">
                    <button
                      type="button"
                      disabled={safeIdx === 0}
                      onClick={() => {
                        setVocabCardIndex(Math.max(0, safeIdx - 1));
                        setIsCardFlipped(false);
                        playSound('click');
                      }}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold disabled:opacity-40 cursor-pointer flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Oldingi</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setPopupVocab(card);
                          playSound('click');
                        }}
                        className="px-3.5 py-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                        title="Fonetika va talaffuzni tekshirish kartasi"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                        <span className="hidden sm:inline">Talaffuz & Detal</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          handleAddToVocab(card);
                        }}
                        className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                          isSaved
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200'
                        }`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{isSaved ? "Saqlangan" : "Lug'atga +"}</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      disabled={safeIdx === list.length - 1}
                      onClick={() => {
                        setVocabCardIndex(Math.min(list.length - 1, safeIdx + 1));
                        setIsCardFlipped(false);
                        playSound('click');
                      }}
                      className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold disabled:opacity-40 cursor-pointer flex items-center gap-1.5 shadow-xs"
                    >
                      <span>Keyingi</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })()}

            {/* MODE 2: FULL VOCABULARY LIST WITH UZBEK TRANSLATIONS */}
            {vocabStudyMode === 'list' && (() => {
              const list = currentPassage.targetVocab.filter(v => {
                if (!vocabSearchQuery.trim()) return true;
                const q = vocabSearchQuery.toLowerCase();
                return (
                  v.word.toLowerCase().includes(q) ||
                  v.translationUz.toLowerCase().includes(q) ||
                  v.definitionEn.toLowerCase().includes(q) ||
                  (v.synonym && v.synonym.toLowerCase().includes(q))
                );
              });

              if (list.length === 0) {
                return (
                  <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-500">
                    Qidiruvingiz bo'yicha so'z topilmadi.
                  </div>
                );
              }

              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {list.map((vocab) => {
                    const isSaved = addedWords.has(vocab.word.toLowerCase());

                    return (
                      <div
                        key={vocab.word}
                        className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-800 transition flex flex-col justify-between space-y-4"
                      >
                        <div className="space-y-3">
                          {/* Word Header */}
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                                  {vocab.word}
                                </h3>
                                <span className="text-[11px] font-mono text-slate-400">
                                  {vocab.phonetic}
                                </span>
                                <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
                                  {vocab.pos}
                                </span>
                              </div>

                              {/* Prominent Uzbek Translation */}
                              <div className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-100 dark:border-indigo-900 text-indigo-950 dark:text-indigo-200 text-xs font-bold">
                                <span className="text-[10px] text-indigo-500 uppercase">Tarjimasi:</span>
                                <span className="text-sm font-black">{vocab.translationUz}</span>
                              </div>
                            </div>

                            {/* Pronounce Button */}
                            <button
                              type="button"
                              onClick={() => pronounceWord(vocab.word)}
                              className="p-2.5 rounded-xl bg-slate-100 hover:bg-indigo-100 dark:bg-slate-800 dark:hover:bg-indigo-950 text-indigo-600 dark:text-indigo-400 transition cursor-pointer shrink-0"
                              title="Talaffuzni tinglash"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Definition */}
                          <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            <span className="font-bold text-slate-500 dark:text-slate-400">Ta'rif: </span>
                            {vocab.definitionEn}
                          </div>

                          {/* Synonym & Collocation */}
                          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                            {vocab.synonym && (
                              <div className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-[11px]">
                                <span className="font-bold">Sinonim: </span>
                                <span className="font-mono font-bold">{vocab.synonym}</span>
                              </div>
                            )}

                            {vocab.collocation && (
                              <div className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-[11px]">
                                <span className="font-bold">Birikma: </span>
                                <i>{vocab.collocation}</i>
                              </div>
                            )}
                          </div>

                          {/* Example in Context */}
                          {vocab.sampleSentence && (
                            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-700 dark:text-slate-300 italic border-l-3 border-indigo-500">
                              "{vocab.sampleSentence}"
                            </div>
                          )}
                        </div>

                        {/* Bottom Actions */}
                        <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                          <button
                            type="button"
                            onClick={() => {
                              setActiveTab('reading');
                              setTimeout(() => {
                                handleJumpToWord(vocab.word);
                              }, 150);
                            }}
                            className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 font-bold flex items-center gap-1 cursor-pointer transition"
                            title="Ushbu so'zni matn ichida ko'rish"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Matnda ko'rish</span>
                          </button>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                setPopupVocab(vocab);
                                playSound('click');
                              }}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium transition cursor-pointer text-[11px]"
                            >
                              Fonetika & AI
                            </button>

                            <button
                              type="button"
                              onClick={() => handleAddToVocab(vocab)}
                              className={`px-2.5 py-1 rounded-lg font-bold transition flex items-center gap-1 cursor-pointer text-[11px] ${
                                isSaved
                                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                                  : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-300'
                              }`}
                            >
                              <Plus className="w-3 h-3" />
                              <span>{isSaved ? "Saqlangan" : "Saqlash"}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}

            {/* Bottom Stepper: Next Step after Vocabulary */}
            <div className="p-5 sm:p-6 rounded-3xl bg-indigo-50/70 dark:bg-slate-900 border border-indigo-200/60 dark:border-indigo-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase">
                    2-Qadam Bajarildi
                  </span>
                  <span className="text-xs font-black text-indigo-950 dark:text-indigo-200">
                    Keyingi bosqich: {nextStepInfo.title}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {nextStepInfo.explanation}
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                <button
                  type="button"
                  onClick={prevStepAction}
                  className="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Matnga qaytish</span>
                </button>

                <button
                  type="button"
                  onClick={nextStepInfo.action}
                  className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-md"
                >
                  <span>{nextStepInfo.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* 3. PRACTICE AREA (AUTHENTIC BOOK VOCABULARY EXERCISES)             */}
        {/* ================================================================= */}
        {activeTab === 'practice' && (
          <div className="space-y-6">
            {/* Sub-tab Switcher */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-200/70 dark:bg-slate-800/70 overflow-x-auto">
              <button
                type="button"
                onClick={() => { setPracticeSubTab('synonyms'); playSound('click'); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                  practiceSubTab === 'synonyms'
                    ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Mashq A: Sinonimlar Moslashtirish ({synonymPairs.length})</span>
              </button>

              <button
                type="button"
                onClick={() => { setPracticeSubTab('fill-gap'); playSound('click'); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                  practiceSubTab === 'fill-gap'
                    ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Mashq B: Bo'sh O'rinlarni To'ldirish ({fillGapQuestions.length})</span>
              </button>

              <button
                type="button"
                onClick={() => { setPracticeSubTab('glossary'); playSound('click'); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                  practiceSubTab === 'glossary'
                    ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Akademik Lug'at Lug'atchasi</span>
              </button>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* SUB-TAB A: SYNONYM MATCHING LAB                               */}
            {/* ------------------------------------------------------------- */}
            {practiceSubTab === 'synonyms' && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 text-[11px] font-black uppercase tracking-wider">
                      Vocabulary Practice: Part A
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                      So'zlarni Ularning Kontekstual Sinonimlari Bilan Moslashtiring
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Chap tarafdagi so'z ustiga bosing, so'ng o'ng tarafdagi unga mos sinonimni tanlang.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-center px-3.5 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900">
                      <div className="text-lg font-black text-indigo-700 dark:text-indigo-300">
                        {matchedWords.size}/{synonymPairs.length}
                      </div>
                      <div className="text-[10px] text-indigo-500 uppercase font-bold">Moslashtirildi</div>
                    </div>
                    <button
                      type="button"
                      onClick={resetSynonymGame}
                      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition cursor-pointer"
                      title="Qayta boshlash"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Completion Celebratory Banner */}
                {matchingCompleted && (
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-center space-y-2 animate-in fade-in">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-black">Ajoyib! Barcha sinonimlar to'g'ri topildi!</h4>
                    <p className="text-xs text-emerald-100">
                      Siz barcha {synonymPairs.length} ta akademik so'z va ularning sinonimlarini to'liq o'zlashtirdingiz (+50 XP).
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setPracticeSubTab('fill-gap');
                          playSound('click');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-4 py-2.5 rounded-xl bg-white text-emerald-900 font-black text-xs hover:bg-emerald-50 transition cursor-pointer inline-flex items-center gap-2 shadow-md"
                      >
                        <span>Endi nima qilish kerak? ➔ 2-Mashqqa O'tish</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Two Columns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Column 1: Academic Words */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-1">
                      1. Akademik So'z (Passage Word)
                    </div>
                    {synonymPairs.map((pair) => {
                      const isMatched = matchedWords.has(pair.word);
                      const isSelected = selectedWord === pair.word;
                      const isWrong = wrongAttempt?.word === pair.word;

                      return (
                        <button
                          key={pair.word}
                          type="button"
                          disabled={isMatched}
                          onClick={() => handleWordClick(pair.word)}
                          className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                            isMatched
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 opacity-80 cursor-default'
                              : isWrong
                              ? 'bg-rose-50 border-rose-400 text-rose-900 ring-2 ring-rose-300'
                              : isSelected
                              ? 'bg-indigo-600 border-indigo-600 text-white shadow-md ring-4 ring-indigo-200 dark:ring-indigo-900 font-bold'
                              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-indigo-400'
                          }`}
                        >
                          <div>
                            <div className="text-sm font-black flex items-center gap-2">
                              <span>{pair.word}</span>
                              {pair.translationUz && (
                                <span className={`text-xs font-normal ${isSelected ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'}`}>
                                  ({pair.translationUz})
                                </span>
                              )}
                            </div>
                            {pair.definitionEn && (
                              <div className={`text-[11px] mt-0.5 line-clamp-1 ${isSelected ? 'text-indigo-100' : 'text-slate-500 dark:text-slate-400'}`}>
                                {pair.definitionEn}
                              </div>
                            )}
                          </div>

                          <div className="shrink-0 ml-3">
                            {isMatched ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            ) : (
                              <div className={`w-3.5 h-3.5 rounded-full border ${isSelected ? 'bg-white border-white' : 'border-slate-300 dark:border-slate-600'}`} />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Column 2: Contextual Synonyms */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-1">
                      2. Kontekstual Sinonim (Synonym)
                    </div>
                    {shuffledSynonyms.map((synonym, sIdx) => {
                      const matchedWordForThis = Array.from(matchedWords).find(w => {
                        const p = synonymPairs.find(item => item.word === w);
                        return p?.synonym === synonym;
                      });
                      const isMatched = !!matchedWordForThis;
                      const isSelected = selectedSynonym === synonym;
                      const isWrong = wrongAttempt?.synonym === synonym;

                      return (
                        <button
                          key={`${synonym}-${sIdx}`}
                          type="button"
                          disabled={isMatched}
                          onClick={() => handleSynonymClick(synonym)}
                          className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                            isMatched
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 opacity-80 cursor-default'
                              : isWrong
                              ? 'bg-rose-50 border-rose-400 text-rose-900 ring-2 ring-rose-300'
                              : isSelected
                              ? 'bg-indigo-600 border-indigo-600 text-white shadow-md ring-4 ring-indigo-200 dark:ring-indigo-900 font-bold'
                              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-indigo-400'
                          }`}
                        >
                          <div>
                            <div className="text-sm font-black flex items-center gap-2">
                              <span>{synonym}</span>
                              {isMatched && (
                                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
                                  ↔ {matchedWordForThis}
                                </span>
                              )}
                            </div>
                            <div className={`text-[11px] mt-0.5 ${isSelected ? 'text-indigo-100' : 'text-slate-400 dark:text-slate-500'}`}>
                              Sinonimik muqobil
                            </div>
                          </div>

                          <div className="shrink-0 ml-3">
                            {isMatched ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            ) : (
                              <div className={`w-3.5 h-3.5 rounded-full border ${isSelected ? 'bg-white border-white' : 'border-slate-300 dark:border-slate-600'}`} />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* GUIDED NEXT STEP CARD BELOW SYNONYM MATCHING */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-[10px] uppercase">
                        Endi nima qilish kerak?
                      </span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {matchedWords.size === synonymPairs.length ? "Sinonimlar to'liq moslashtirildi!" : "Mashq davom etmoqda"}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Ushbu so'zlarni jumlalarda to'g'ri ishlatish uchun <b>Mashq B: Bo'sh o'rinlarni to'ldirish</b>ga o'ting.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setPracticeSubTab('fill-gap');
                      playSound('click');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-xs shrink-0"
                  >
                    <span>2-Mashq: Bo'sh o'rinlarni to'ldirishga o'tish</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* SUB-TAB B: FILL IN THE BLANK (AUTHENTIC EXERCISE B)           */}
            {/* ------------------------------------------------------------- */}
            {practiceSubTab === 'fill-gap' && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 text-[11px] font-black uppercase tracking-wider">
                      Vocabulary Practice: Part B
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                      Gaplarni To'g'ri Akademik So'z Bilan To'ldiring
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Har bir jumlaga mos tushuvchi New Academic Word List birligini tanlang.
                    </p>
                  </div>

                  {gapSubmitted ? (
                    <div className="flex items-center gap-3">
                      <div className="px-3.5 py-1.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-bold text-xs">
                        Natija: {gapScore}/{fillGapQuestions.length} to'g'ri
                      </div>
                      <button
                        type="button"
                        onClick={() => { setGapAnswers({}); setGapSubmitted(false); playSound('click'); }}
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 hover:bg-slate-200 transition cursor-pointer"
                        title="Qayta urinish"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setGapSubmitted(true);
                        if (gapScore === fillGapQuestions.length) {
                          playSound('levelup');
                          confetti({ particleCount: 80, spread: 70 });
                          addXP(40);
                        } else {
                          playSound('correct');
                          addXP(20);
                        }
                      }}
                      disabled={Object.keys(gapAnswers).length < fillGapQuestions.length}
                      className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 dark:disabled:bg-slate-800 text-white font-bold text-xs transition cursor-pointer disabled:cursor-not-allowed"
                    >
                      Tekshirish ({Object.keys(gapAnswers).length}/{fillGapQuestions.length})
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  {fillGapQuestions.map((q, idx) => {
                    const chosenWord = gapAnswers[q.id];
                    const isCorrect = gapSubmitted && chosenWord?.toLowerCase() === q.targetWord.toLowerCase();

                    return (
                      <div
                        key={q.id}
                        className={`p-5 rounded-2xl border transition-all ${
                          gapSubmitted
                            ? isCorrect
                              ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                              : 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-300 dark:border-rose-800'
                            : 'bg-slate-50/50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-5 h-5 rounded-md bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px]">
                            {idx + 1}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">
                            O'zbekcha ma'nosi: <b className="text-slate-700 dark:text-slate-300">{q.translationUz}</b>
                          </span>
                        </div>

                        <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed mb-4">
                          "{q.sentence}"
                        </p>

                        {/* Options Buttons */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {q.options.map(opt => {
                            const isSelected = chosenWord === opt;
                            const isOptCorrect = opt.toLowerCase() === q.targetWord.toLowerCase();

                            let btnStyle = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-indigo-400';

                            if (gapSubmitted) {
                              if (isOptCorrect) {
                                btnStyle = 'bg-emerald-100 dark:bg-emerald-900/60 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold';
                              } else if (isSelected && !isOptCorrect) {
                                btnStyle = 'bg-rose-100 dark:bg-rose-900/60 border-rose-400 text-rose-900 dark:text-rose-100 line-through';
                              } else {
                                btnStyle = 'opacity-50 border-slate-200 bg-white/40 dark:bg-slate-800/40 text-slate-400';
                              }
                            } else if (isSelected) {
                              btnStyle = 'bg-indigo-600 border-indigo-600 text-white font-bold ring-2 ring-indigo-200 dark:ring-indigo-900';
                            }

                            return (
                              <button
                                key={opt}
                                type="button"
                                disabled={gapSubmitted}
                                onClick={() => handleSelectGapAnswer(q.id, opt)}
                                className={`p-2.5 rounded-xl border text-xs text-center font-medium transition cursor-pointer ${btnStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {gapSubmitted && !isCorrect && (
                          <div className="mt-3 text-xs text-emerald-700 dark:text-emerald-300 font-medium flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>To'g'ri javob: <b>{q.targetWord}</b></span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* GUIDED NEXT STEP CARD BELOW FILL-IN-THE-BLANK */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-[10px] uppercase">
                        Endi nima qilish kerak?
                      </span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        2-Bosqich: Lug'at mashqlari yakunlandi
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Matn faktlarini tushunganingizni sinash uchun <b>3-Bosqich: Tushunish Testi (True/False & Test)</b>ga o'ting.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('quiz');
                      playSound('click');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-xs shrink-0"
                  >
                    <span>3-Bosqich: Testga o'tish</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* SUB-TAB C: FULL GLOSSARY CARDS                                */}
            {/* ------------------------------------------------------------- */}
            {practiceSubTab === 'glossary' && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    Ushbu Unitdagi Barcha Akademik So'zlar ({currentPassage.targetVocab.length} ta)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Har bir so'zning fonetikasi, ta'rifi, kontekstual sinonimi va academic collocation birikmasi.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentPassage.targetVocab.map((voc) => (
                    <div
                      key={voc.word}
                      className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-indigo-400 transition space-y-2.5"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-base font-black text-slate-900 dark:text-white">{voc.word}</h4>
                          <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                            <span className="font-mono text-indigo-600 dark:text-indigo-400">{voc.phonetic}</span>
                            <span>•</span>
                            <span className="italic">{voc.pos}</span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => pronounceWord(voc.word)}
                          className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 transition cursor-pointer"
                          title="Talaffuz"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="p-2 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 text-xs font-bold text-indigo-950 dark:text-indigo-200">
                        {voc.translationUz}
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {voc.definitionEn}
                      </p>

                      {voc.synonym && (
                        <div className="text-xs text-indigo-600 dark:text-indigo-400">
                          <span className="font-bold">Sinonim:</span> {voc.synonym}
                        </div>
                      )}

                      {voc.collocation && (
                        <div className="text-xs text-emerald-600 dark:text-emerald-400">
                          <span className="font-bold">Collocation:</span> {voc.collocation}
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => handleAddToVocab(voc)}
                        disabled={addedWords.has(voc.word.toLowerCase())}
                        className={`w-full py-1.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                          addedWords.has(voc.word.toLowerCase())
                            ? 'bg-emerald-100 text-emerald-800 cursor-default'
                            : 'bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-indigo-600 hover:text-white'
                        }`}
                      >
                        {addedWords.has(voc.word.toLowerCase()) ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Lug'atda bor (+10 XP)</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Lug'atimga saqlash</span>
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>

                {/* Guided Next Step Card below Glossary */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-[10px] uppercase">
                        Endi nima qilish kerak?
                      </span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Lug'at bilan tanishildi
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      So'zlarni eslab qolish uchun <b>Sinonimlar moslashtirish</b> mashqini bajaring.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setPracticeSubTab('synonyms');
                      playSound('click');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-xs shrink-0"
                  >
                    <span>Sinonimlar Mashqiga O'tish</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================================================================= */}
        {/* 3. COMPREHENSION QUIZ (PART A: T/F & PART B: MULTIPLE CHOICE)     */}
        {/* ================================================================= */}
        {activeTab === 'quiz' && (
          <div className="space-y-6">
            {/* ------------------------------------------------------------- */}
            {/* PART A: TRUE / FALSE QUESTIONS (KITOBDAGI ASLI MASHQ)         */}
            {/* ------------------------------------------------------------- */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[11px] font-black uppercase tracking-wider">
                    Reading Comprehension: Part A
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                    True (To'g'ri) yoki False (Noto'g'ri) ni Belgilang
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Har bir mulohazaning matn faktlariga mos kelishini aniqlang.
                  </p>
                </div>

                {tfSubmitted ? (
                  <div className="flex items-center gap-3">
                    <div className="px-3.5 py-1.5 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 font-bold text-xs">
                      Natija: {tfScore}/4 to'g'ri
                    </div>
                    <button
                      type="button"
                      onClick={() => { setTfAnswers({}); setTfSubmitted(false); playSound('click'); }}
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 hover:bg-slate-200 transition cursor-pointer"
                      title="Qayta urinish"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setTfSubmitted(true);
                      playSound('click');
                      addXP(25);
                    }}
                    disabled={Object.keys(tfAnswers).length < trueFalseStatements.length}
                    className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:bg-slate-200 dark:disabled:bg-slate-800 text-white font-bold text-xs transition cursor-pointer disabled:cursor-not-allowed"
                  >
                    T/F Natijasini Tekshirish ({Object.keys(tfAnswers).length}/4)
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {trueFalseStatements.map((stmt, sIdx) => {
                  const userVal = tfAnswers[stmt.id];
                  const isCorrect = tfSubmitted && userVal === stmt.isTrue;

                  return (
                    <div
                      key={stmt.id}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                        tfSubmitted
                          ? isCorrect
                            ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                            : 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-300 dark:border-rose-800'
                          : 'bg-slate-50/50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-snug">
                            {stmt.statement}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {stmt.statementUz}
                          </p>
                        </div>
                      </div>

                      {/* True / False Buttons */}
                      <div className="mt-3 flex items-center gap-3 pl-9">
                        <button
                          type="button"
                          disabled={tfSubmitted}
                          onClick={() => handleTfSelect(stmt.id, true)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                            userVal === true
                              ? tfSubmitted
                                ? stmt.isTrue
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-rose-600 text-white'
                                : 'bg-amber-600 text-white shadow-xs'
                              : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-amber-400'
                          }`}
                        >
                          <span>TRUE (To'g'ri)</span>
                        </button>

                        <button
                          type="button"
                          disabled={tfSubmitted}
                          onClick={() => handleTfSelect(stmt.id, false)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                            userVal === false
                              ? tfSubmitted
                                ? !stmt.isTrue
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-rose-600 text-white'
                                : 'bg-amber-600 text-white shadow-xs'
                              : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-amber-400'
                          }`}
                        >
                          <span>FALSE (Noto'g'ri)</span>
                        </button>

                        {tfSubmitted && (
                          <div className="text-xs font-bold">
                            {isCorrect ? (
                              <span className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4" /> To'g'ri topildi
                              </span>
                            ) : (
                              <span className="text-rose-700 dark:text-rose-400 flex items-center gap-1">
                                <XCircle className="w-4 h-4" /> Noto'g'ri (Javob: {stmt.isTrue ? 'TRUE' : 'FALSE'})
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {tfSubmitted && (
                        <div className="mt-3 pl-9 text-xs text-slate-600 dark:text-slate-400 italic">
                          💡 {stmt.explanationUz}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Guided Step Button from Part A to Part B */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-500">
                  <span className="font-bold text-slate-800 dark:text-slate-200">Endi nima qilish kerak? ➔ </span>
                  Pastdagi <b>Part B: Multiple Choice</b> savollariga o'ting.
                </div>
                <button
                  type="button"
                  onClick={() => {
                    partBRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Part B Savollariga O'tish</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* PART B: MULTIPLE CHOICE COMPREHENSION (KITOBDAGI ASLI TEST)   */}
            {/* ------------------------------------------------------------- */}
            <div ref={partBRef} className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 text-[11px] font-black uppercase tracking-wider">
                    Reading Comprehension: Part B
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                    Multiple Choice Questions (Tushunish Testi)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Main Idea, Detail, Inference va kontekstual savollar.
                  </p>
                </div>

                {quizSubmitted ? (
                  <div className="flex items-center gap-3">
                    <div className={`px-4 py-2 rounded-xl text-center font-black ${
                      quizScorePct >= 75
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200'
                    }`}>
                      <div className="text-lg">{quizScorePct}%</div>
                      <div className="text-[10px] uppercase">{quizScorePct >= 75 ? 'Muvaffaqiyatli' : 'Qayta urinish'}</div>
                    </div>
                    <button
                      type="button"
                      onClick={handleRetakeQuiz}
                      className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Qayta topshirish</span>
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmitAllQuiz}
                    disabled={Object.keys(quizAnswers).length < currentPassage.comprehensionQuiz.length}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 dark:disabled:bg-slate-800 text-white font-bold text-xs transition cursor-pointer disabled:cursor-not-allowed shadow-xs"
                  >
                    Testni Yakunlash ({Object.keys(quizAnswers).length}/{currentPassage.comprehensionQuiz.length})
                  </button>
                )}
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {currentPassage.comprehensionQuiz.map((q, qIdx) => {
                  const selectedOpt = quizAnswers[q.id];
                  const isAnswered = selectedOpt !== undefined;
                  const isCorrect = isAnswered && selectedOpt === q.correctIndex;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        quizSubmitted
                          ? isCorrect
                            ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                            : 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-800'
                          : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-black text-xs">
                            {qIdx + 1}
                          </span>
                          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                            {q.type}
                          </span>
                        </div>

                        {quizSubmitted && (
                          <div className="text-xs font-black">
                            {isCorrect ? (
                              <span className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4" /> To'g'ri
                              </span>
                            ) : (
                              <span className="text-rose-700 dark:text-rose-400 flex items-center gap-1">
                                <XCircle className="w-4 h-4" /> Noto'g'ri
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-3.5">
                        {q.question}
                      </h4>

                      {/* Options */}
                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selectedOpt === optIdx;
                          const isThisCorrect = q.correctIndex === optIdx;

                          let btnClasses = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-400';

                          if (quizSubmitted) {
                            if (isThisCorrect) {
                              btnClasses = 'border-emerald-500 bg-emerald-100 dark:bg-emerald-950 text-emerald-950 dark:text-emerald-100 font-bold';
                            } else if (isOptionSelected && !isThisCorrect) {
                              btnClasses = 'border-rose-400 bg-rose-100 dark:bg-rose-950 text-rose-950 dark:text-rose-100 line-through';
                            } else {
                              btnClasses = 'border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-800/40 text-slate-400 opacity-60';
                            }
                          } else if (isOptionSelected) {
                            btnClasses = 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-300 font-bold';
                          }

                          return (
                            <button
                              key={optIdx}
                              type="button"
                              disabled={quizSubmitted}
                              onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                              className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${btnClasses}`}
                            >
                              <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5 ${
                                isOptionSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300 dark:border-slate-600 text-slate-500'
                              }`}>
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span className="leading-relaxed">{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && q.explanationUz && (
                        <div className="mt-3 p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                          <div className="font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
                            <Lightbulb className="w-3.5 h-3.5" />
                            <span>Izoh va tushuntirish:</span>
                          </div>
                          <p className="leading-relaxed pl-5">
                            {q.explanationUz}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* GUIDED NEXT STEP CARD BELOW QUIZ */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-[10px] uppercase">
                      Endi nima qilish kerak?
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      3-Bosqich: Tushunish testi yakunlandi
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Matnning mantiqiy tuzilishi xaritasi va munozara savollariga o'tish uchun <b>4-Bosqich: Grafik Tahlil</b>ni bosing.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('analysis');
                    playSound('click');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-xs shrink-0"
                >
                  <span>4-Bosqich: Tahlilga o'tish</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* 4. ANALYSIS & DISCUSSION (GRAPHIC ORGANIZER & CRITICAL THINKING)   */}
        {/* ================================================================= */}
        {activeTab === 'analysis' && (
          <div className="space-y-6">
            {/* GRAPHIC ORGANIZER */}
            {currentPassage.graphicOrganizer && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-800 dark:text-violet-300 text-[11px] font-black uppercase tracking-wider">
                      Graphic Organizer & Text Structure
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                      {currentPassage.graphicOrganizer.title}
                    </h3>
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mt-0.5">
                      Organizer Turi: {currentPassage.graphicOrganizer.organizerType}
                    </div>
                  </div>

                  {/* Toggle Test Mode */}
                  <button
                    type="button"
                    onClick={() => {
                      setOrganizerTestMode(prev => !prev);
                      setRevealedSections(new Set());
                      playSound('click');
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                      organizerTestMode
                        ? 'bg-violet-600 text-white'
                        : 'bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300 hover:bg-violet-100'
                    }`}
                  >
                    <Eye className="w-4 h-4" />
                    <span>{organizerTestMode ? 'Sinov Rejimi (Bandlar yashirilgan)' : 'O\'zingizni Sinang (Test Mode)'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentPassage.graphicOrganizer.sections.map((sec, sIdx) => {
                    const isRevealed = revealedSections.has(sIdx);
                    const shouldHide = organizerTestMode && !isRevealed;

                    return (
                      <div
                        key={sIdx}
                        className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-800/40 dark:to-indigo-950/20 border border-slate-200 dark:border-slate-800 space-y-2.5"
                      >
                        <div className="flex items-center justify-between">
                          <div className="w-7 h-7 rounded-xl bg-violet-600 text-white flex items-center justify-center font-black text-xs">
                            {sIdx + 1}
                          </div>
                          {organizerTestMode && (
                            <button
                              type="button"
                              onClick={() => toggleSectionReveal(sIdx)}
                              className="text-[11px] font-bold text-violet-600 dark:text-violet-400 hover:underline cursor-pointer"
                            >
                              {shouldHide ? 'Ko\'rish 👁️' : 'Yashirish 🔒'}
                            </button>
                          )}
                        </div>

                        <h4 className="text-base font-black text-slate-900 dark:text-white leading-snug">
                          {sec.heading}
                        </h4>

                        {shouldHide ? (
                          <div 
                            onClick={() => toggleSectionReveal(sIdx)}
                            className="p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-dashed border-violet-300 dark:border-violet-700 text-center cursor-pointer"
                          >
                            <span className="text-xs font-bold text-violet-600 dark:text-violet-400">
                              Matn xotirasini tekshirish uchun bosing
                            </span>
                          </div>
                        ) : (
                          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 list-disc list-inside leading-relaxed">
                            {sec.points.map((pt, pIdx) => (
                              <li key={pIdx}>{pt}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* DISCUSSION PROMPTS */}
            {currentPassage.discussionPrompts && currentPassage.discussionPrompts.length > 0 && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 text-[11px] font-black uppercase tracking-wider">
                    Discussion & Critical Thinking
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                    Munozara va Shaxsiy Fikr-Mulohazalar
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Ushbu savollarga o'z javoblaringizni tayyorlang yoki sherigingiz bilan suhbatlashing.
                  </p>
                </div>

                <div className="space-y-4">
                  {currentPassage.discussionPrompts.map((prompt, prIdx) => (
                    <div
                      key={prIdx}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5"
                    >
                      <div className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center font-black text-sm shrink-0">
                        {prIdx + 1}
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                          "{prompt}"
                        </p>
                        <p className="text-xs text-slate-400">
                          Matndagi yangi akademik so'zlardan kamida 2 tasini ishlatib javob bering.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FINAL UNIT COMPLETION NEXT STEP CARD */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7 text-amber-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold text-[10px] uppercase tracking-wider">
                      {nextStepInfo.stageNumber}
                    </span>
                    <span className="text-xs text-indigo-200 font-medium">
                      Endi nima qilish kerak?
                    </span>
                  </div>
                  <h3 className="text-xl font-black mt-0.5">
                    {nextStepInfo.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed max-w-2xl">
                {nextStepInfo.explanation}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={nextStepInfo.action}
                  className="px-6 py-3.5 rounded-xl bg-white text-indigo-950 font-black text-xs hover:bg-amber-50 transition cursor-pointer flex items-center gap-2 shadow-lg"
                >
                  <span>{nextStepInfo.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {onBackToRoadmap && (
                  <button
                    type="button"
                    onClick={onBackToRoadmap}
                    className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition cursor-pointer flex items-center gap-1.5"
                  >
                    <Compass className="w-4 h-4" />
                    <span>Unitlar Xaritasiga Qaytish</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* =================================================================== */}
      {/* INSTANT PREBUILT TRANSLATION LOOKUP CARD (CLICK ANY WORD IN TEXT)  */}
      {/* =================================================================== */}
      {quickLookup && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-2xs flex items-end sm:items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150"
          onClick={() => setQuickLookup(null)}
        >
          <div 
            className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border-2 border-indigo-200 dark:border-indigo-800 shadow-2xl overflow-hidden p-5 sm:p-6 space-y-4 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[10px] font-black uppercase tracking-wider">
                  ✓ Tayyor Lug'at Bazasi (0 ms)
                </span>
                {quickLookup.isPassageTarget && (
                  <span className="px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 text-[10px] font-bold">
                    Target Vocab
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => setQuickLookup(null)}
                className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer transition"
                title="Yopish"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Word Header with Audio */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {quickLookup.matchedWord}
                  </h3>
                  {quickLookup.pos && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold">
                      {quickLookup.pos}
                    </span>
                  )}
                </div>
                {quickLookup.phonetic && (
                  <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                    {quickLookup.phonetic}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  speakTargetWord(quickLookup.matchedWord);
                  playSound('click');
                }}
                className="p-3 rounded-2xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950 dark:hover:bg-indigo-900 text-indigo-600 dark:text-indigo-300 transition cursor-pointer shrink-0 shadow-xs"
                title="Talaffuzni tinglash"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {/* PROMINENT PREBUILT UZBEK TRANSLATION */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50/90 to-sky-50/90 dark:from-indigo-950/80 dark:to-slate-850 border-2 border-indigo-300 dark:border-indigo-700 shadow-2xs">
              <div className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                O'zbekcha Tarjimasi:
              </div>
              <div className="text-xl sm:text-2xl font-black text-indigo-950 dark:text-indigo-100 mt-0.5">
                {quickLookup.translationUz}
              </div>
            </div>

            {/* English definition (if available) */}
            {quickLookup.definitionEn && (
              <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <span className="font-bold text-slate-500 dark:text-slate-400">Ta'rif: </span>
                {quickLookup.definitionEn}
              </div>
            )}

            {/* Sample sentence (if available) */}
            {quickLookup.sampleSentence && (
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-700 dark:text-slate-300 italic border-l-2 border-indigo-500">
                "{quickLookup.sampleSentence}"
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              {quickLookup.targetVocabRef ? (
                <button
                  type="button"
                  onClick={() => {
                    const tv = quickLookup.targetVocabRef!;
                    setQuickLookup(null);
                    setPopupVocab(tv);
                    playSound('click');
                  }}
                  className="px-3 py-2 rounded-xl bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-950 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Batafsil Karta & Ovoz Sinovi</span>
                </button>
              ) : (
                <span className="text-[11px] text-slate-400">
                  Matndagi so'z ustiga bosildi
                </span>
              )}

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    handleAddToVocab({
                      word: quickLookup.matchedWord,
                      phonetic: quickLookup.phonetic || '',
                      pos: quickLookup.pos || 'w.',
                      definitionEn: quickLookup.definitionEn || quickLookup.translationUz,
                      translationUz: quickLookup.translationUz,
                      sampleSentence: quickLookup.sampleSentence || ''
                    });
                  }}
                  disabled={addedWords.has(quickLookup.matchedWord.toLowerCase())}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    addedWords.has(quickLookup.matchedWord.toLowerCase())
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 cursor-default'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  {addedWords.has(quickLookup.matchedWord.toLowerCase()) ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Saqlangan</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Lug'atga Saqlash</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setQuickLookup(null)}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition cursor-pointer shadow-xs"
                >
                  Yopish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* INTERACTIVE VOCABULARY OVERLAY ENGINE CARD                          */}
      {/* =================================================================== */}
      {popupVocab && (
        <VocabularyOverlayCard
          vocab={popupVocab}
          allPassageVocab={currentPassage.targetVocab || []}
          passageParagraphs={currentPassage.paragraphs || []}
          passageTitle={currentPassage.title}
          theme={readerTheme}
          isSaved={addedWords.has(popupVocab.word.toLowerCase())}
          onClose={() => setPopupVocab(null)}
          onSelectVocab={(v) => setPopupVocab(v)}
          onSaveToMyVocab={handleAddToVocab}
          onJumpToText={handleJumpToWord}
        />
      )}

      {/* =================================================================== */}
      {/* MOBILE STICKY BOTTOM ACTION BAR (DYNAMIC & GUIDED)                 */}
      {/* =================================================================== */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-4 py-2.5 sm:hidden flex items-center justify-between gap-2 shadow-lg">
        {/* Previous Step */}
        <button
          type="button"
          disabled={activeTab === 'reading'}
          onClick={prevStepAction}
          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-30 cursor-pointer"
          title="Oldingi qadam"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        {/* Quick Audio Play/Stop */}
        <button
          type="button"
          onClick={togglePlayAudio}
          className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition cursor-pointer ${
            isPlayingAudio
              ? 'bg-rose-600 text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
          }`}
        >
          {isPlayingAudio ? (
            <>
              <Square className="w-3.5 h-3.5 fill-current" />
              <span>To'xtatish</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>Ovoz</span>
            </>
          )}
        </button>

        {/* Theme Quick Toggle */}
        <button
          type="button"
          onClick={() => {
            setReaderTheme(prev => prev === 'paper' ? 'night' : prev === 'night' ? 'day' : 'paper');
            playSound('click');
          }}
          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer"
          title="Ko'zni charchatmaslik rejimi"
        >
          {readerTheme === 'paper' ? (
            <Book className="w-4 h-4 text-amber-700" />
          ) : readerTheme === 'night' ? (
            <Moon className="w-4 h-4 text-indigo-400" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500" />
          )}
        </button>

        {/* Guided Next Step Button with Contextual Label */}
        <button
          type="button"
          onClick={nextStepInfo.action}
          className="py-1.5 px-3 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs"
        >
          <span>{nextStepInfo.buttonText.split(':')[0]}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
