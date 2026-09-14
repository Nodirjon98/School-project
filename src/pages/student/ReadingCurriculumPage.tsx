import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import { 
  CURRICULUM_BOOKS, getBookById, getUnitById, searchCurriculumWords, CurriculumSearchResult,
  findTargetWordInCurriculum, isPlaceholderTranslation
} from '../../data/essentialWordsData';
import { getCachedWord, saveCachedWord } from '../../lib/clientWordCache';
import { CurriculumBook, CurriculumUnit, TargetWord, ReadingPhrase } from '../../types';
import { useAuth } from '../../contexts/AuthContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { playSound } from '../../lib/sound';
import { askStoryTutorAI, quickDefineWord } from '../../lib/ai';
import { 
  BookOpen, CheckCircle2, Lock, Unlock, Sparkles, Volume2, Play, Pause, 
  RotateCcw, Award, ChevronRight, ChevronLeft, ArrowLeft, BrainCircuit, 
  Send, HelpCircle, Eye, Share2, Compass, Layers, Check, ExternalLink,
  Clock, Gauge, BookmarkCheck, ThumbsUp, Swords, Quote, Filter, Search, X,
  FileText, GraduationCap, Copy, Lightbulb, Loader2, Mic
} from 'lucide-react';
import { WordPronunciationPractice } from '../../components/pronunciation/WordPronunciationPractice';

interface UnitProgressRecord {
  completed: boolean;
  scorePercent: number;
  readingTimeSeconds: number;
  wpm: number;
  lastStudied: string;
}

export const ReadingCurriculumPage: React.FC = () => {
  const { profile } = useAuth();
  const { addDailyWord, addXP, groups, createHomework } = useLMSData();
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Progress state stored in localStorage
  const [progressMap, setProgressMap] = useState<Record<string, UnitProgressRecord>>(() => {
    try {
      const saved = localStorage.getItem('premier_curriculum_progress');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse curriculum progress:', e);
    }
    // Default unlocked for first unit
    return {
      'b1-u1': { completed: false, scorePercent: 0, readingTimeSeconds: 0, wpm: 0, lastStudied: new Date().toISOString() }
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem('premier_curriculum_progress', JSON.stringify(progressMap));
    } catch (e) {
      console.warn('Failed to persist progress:', e);
    }
  }, [progressMap]);

  // Selected Book & Unit
  const [selectedBookId, setSelectedBookId] = useState<string>('book-1');
  const [activeUnitId, setActiveUnitId] = useState<string | null>(null);
  const [teacherBypassLock, setTeacherBypassLock] = useState<boolean>(profile?.role !== 'student');

  // Free Exploration Mode: lets students practice any unit in any book freely
  const [freeExplorationMode, setFreeExplorationMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('premier_curriculum_free_mode');
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  const handleToggleFreeMode = () => {
    const next = !freeExplorationMode;
    setFreeExplorationMode(next);
    try {
      localStorage.setItem('premier_curriculum_free_mode', JSON.stringify(next));
    } catch {}
  };

  // Search across all 6 books (3,600 target words and 180 stories)
  const [searchQuery, setSearchQuery] = useState('');
  const searchResults = useMemo(() => {
    return searchCurriculumWords(searchQuery);
  }, [searchQuery]);

  // Reader Tabs: 'story' | 'words' | 'phrases' | 'pronunciation' | 'quiz' | 'ai-tutor'
  const [readerTab, setReaderTab] = useState<'story' | 'words' | 'phrases' | 'pronunciation' | 'quiz' | 'ai-tutor'>('story');

  // Reader Settings & Interactive Inspectors
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('base');
  const [selectedWord, setSelectedWord] = useState<TargetWord | null>(null);
  const [selectedPhrase, setSelectedPhrase] = useState<ReadingPhrase | null>(null);
  const [isMobilePopupOpen, setIsMobilePopupOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [aiTranslatingWord, setAiTranslatingWord] = useState<string | null>(null);
  const [aiWordTranslation, setAiWordTranslation] = useState<{ word: string; uz: string; def: string } | null>(null);
  const [isDefiningWord, setIsDefiningWord] = useState(false);
  const [highlightFilter, setHighlightFilter] = useState<'all' | 'words' | 'phrases' | 'none'>('all');
  const [addedWordIds, setAddedWordIds] = useState<Set<string>>(new Set());
  const [addedPhraseIds, setAddedPhraseIds] = useState<Set<string>>(new Set());
  const [phraseTypeFilter, setPhraseTypeFilter] = useState<string>('all');

  // Audio / Speech State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Reading Timer & WPM
  const [readingTimer, setReadingTimer] = useState<number>(0);
  const [isReadingActive, setIsReadingActive] = useState<boolean>(false);
  const timerIntervalRef = useRef<any>(null);

  // Quiz State
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // AI Tutor State
  const [aiQuery, setAiQuery] = useState('');
  const [aiMessages, setAiMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string; textUz?: string }>>([
    {
      role: 'assistant',
      text: "Hello! I am your 4000 Essential English Words Reading Tutor. Ask me any questions about the characters, vocabulary in context, grammar structures, or the moral of this unit's story!",
      textUz: "Salom! Ushbu hikoyadagi qahramonlar, notanish so'zlar yoki matnning asosiy ibratli g'oyasi haqida istalgan savolingizni bering."
    }
  ]);
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Teacher Assign Modal State
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [assignGroupId, setAssignGroupId] = useState(groups[0]?.id || '');
  const [assignDueDate, setAssignDueDate] = useState('');
  const [assignSuccess, setAssignSuccess] = useState(false);

  const currentBook = useMemo(() => {
    return getBookById(selectedBookId) || CURRICULUM_BOOKS[0];
  }, [selectedBookId]);

  const activeUnit = useMemo(() => {
    if (!activeUnitId) return null;
    const lookup = getUnitById(activeUnitId);
    return lookup?.unit || null;
  }, [activeUnitId]);

  // Handle Reading Timer
  useEffect(() => {
    if (activeUnit && isReadingActive) {
      timerIntervalRef.current = setInterval(() => {
        setReadingTimer(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerIntervalRef.current);
    }
    return () => clearInterval(timerIntervalRef.current);
  }, [activeUnit, isReadingActive]);

  // When opening a unit, reset timers and state
  const handleOpenUnit = (unit: CurriculumUnit) => {
    // Stop audio
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
    setActiveUnitId(unit.id);
    setReaderTab('story');
    setReadingTimer(0);
    setIsReadingActive(true);
    setUserAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
    setSelectedWord(unit.targetWords[0] || null);

    setAiMessages([
      {
        role: 'assistant',
        text: `Welcome to Unit ${unit.unitNumber}: "${unit.title}"! We will explore ${unit.targetWords.length} essential English words in this reading passage. Tap on any highlighted word to see its translation and hear pronunciation.`,
        textUz: `"${unit.title}" hikoyasiga xush kelibsiz! Matndagi istalgan ajratilgan so'z ustiga bosib, uning talaffuzini va o'zbekcha ma'nosini ko'rishingiz mumkin.`
      }
    ]);
  };

  const handleBackToRoadmap = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
    setIsReadingActive(false);
    setActiveUnitId(null);
  };

  // Check if unit is unlocked
  const isUnitUnlocked = (unit: CurriculumUnit, index: number) => {
    if (freeExplorationMode || teacherBypassLock) return true;
    if (index === 0) return true;
    // Check if previous unit is completed
    const currentBookUnits = currentBook.units;
    if (index > 0) {
      const prevUnit = currentBookUnits[index - 1];
      return Boolean(progressMap[prevUnit.id]?.completed);
    }
    return true;
  };

  // Text to Speech Controls
  const handleToggleSpeech = () => {
    if (!activeUnit || !window.speechSynthesis) return;

    if (isPlayingAudio) {
      window.speechSynthesis.pause();
      setIsPlayingAudio(false);
      return;
    }

    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsPlayingAudio(true);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(activeUnit.readingPassage);
    utterance.rate = playbackSpeed;
    utterance.lang = 'en-US';

    // Pick natural English voice if available
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha')));
    if (enVoice) utterance.voice = enVoice;

    utterance.onend = () => {
      setIsPlayingAudio(false);
    };
    utterance.onerror = () => {
      setIsPlayingAudio(false);
    };

    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  const handleStopSpeech = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
  };

  const handleChangeSpeed = (speed: number) => {
    setPlaybackSpeed(speed);
    if (isPlayingAudio && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      setTimeout(() => {
        handleToggleSpeech();
      }, 100);
    }
  };

  // Pronounce a single target word
  const handlePronounceWord = (wordText: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(wordText);
    u.lang = 'en-US';
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  };

  const handleSelectWord = (word: TargetWord) => {
    setSelectedWord(word);
    setSelectedPhrase(null);
    handlePronounceWord(word.word);
    setIsMobilePopupOpen(true);
    setAiWordTranslation(null);
  };

  const handleSelectPhrase = (phrase: ReadingPhrase) => {
    setSelectedPhrase(phrase);
    setSelectedWord(null);
    handlePronounceWord(phrase.phrase);
    setIsMobilePopupOpen(true);
    setAiWordTranslation(null);
  };

  const handleCopyText = (text: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedText(text);
      playSound('correct');
      setTimeout(() => setCopiedText(null), 2000);
    }
  };

  const handleAnyWordClick = async (rawToken: string, sentenceContext?: string) => {
    if (!rawToken) return;
    const clean = rawToken.toLowerCase().replace(/^[^a-z]+|[^a-z]+$/g, '');
    if (!clean || clean.length < 2) return;

    // 1. Check if in activeUnit targetWords
    const unitWordMatch = activeUnit?.targetWords?.find(
      w => w.word.toLowerCase() === clean
    );
    if (unitWordMatch) {
      if (isPlaceholderTranslation(unitWordMatch.translationUz, unitWordMatch.word)) {
        const enriched = findTargetWordInCurriculum(clean);
        if (enriched) unitWordMatch.translationUz = enriched.translationUz;
      }
      handleSelectWord(unitWordMatch);
      return;
    }

    // 2. Check if in activeUnit phrases
    const unitPhraseMatch = activeUnit?.phrases?.find(
      p => p.phrase.toLowerCase().split(' ').includes(clean)
    );
    if (unitPhraseMatch) {
      handleSelectPhrase(unitPhraseMatch);
      return;
    }

    // 3. Search in 4,000 Essential English Words dictionary + Master Lexicon (4,140+ words)
    const curriculumWord = findTargetWordInCurriculum(clean);
    if (curriculumWord) {
      handleSelectWord({
        ...curriculumWord,
        example: sentenceContext ? `"${sentenceContext.trim()}"` : curriculumWord.example
      });
      return;
    }

    // 4. Check client-side cached dynamic words
    const cachedWord = getCachedWord(clean);
    if (cachedWord) {
      handleSelectWord(cachedWord);
      return;
    }

    // 5. Instant dynamic lookup with AI quick-define
    const initialWord: TargetWord = {
      id: `dyn-${clean}`,
      word: rawToken.trim(),
      phonetic: `/${clean}/`,
      partOfSpeech: 'vocabulary word',
      definition: 'Matn kontekstidagi so‘z ma’nosi yuklanmoqda...',
      translationUz: 'Matn kontekstida tahlil qilinmoqda...',
      example: sentenceContext ? `"${sentenceContext.trim()}"` : `Found in story context`
    };
    handleSelectWord(initialWord);
    setIsDefiningWord(true);

    try {
      const def = await quickDefineWord(rawToken.trim(), sentenceContext);
      if (def) {
        const enrichedWord: TargetWord = {
          id: `dyn-${clean}`,
          word: def.word || rawToken.trim(),
          phonetic: def.phonetic || `/${clean}/`,
          partOfSpeech: def.partOfSpeech || 'academic vocabulary',
          definition: def.definition || 'Contextual vocabulary item.',
          translationUz: def.translationUz || `${rawToken.trim()} so'zi`,
          example: def.example || (sentenceContext ? `"${sentenceContext.trim()}"` : `Found in story context`)
        };
        saveCachedWord(clean, enrichedWord);
        setSelectedWord(enrichedWord);
        setAiWordTranslation({
          word: enrichedWord.word,
          uz: enrichedWord.translationUz,
          def: enrichedWord.definition
        });
      }
    } catch (err) {
      console.warn('Quick define error:', err);
    } finally {
      setIsDefiningWord(false);
    }
  };

  const handleTranslateWordWithAI = async (wordToTranslate: string, contextSentence?: string) => {
    if (!wordToTranslate || aiTranslatingWord || !activeUnit) return;
    setAiTranslatingWord(wordToTranslate);
    try {
      const res = await askStoryTutorAI(
        activeUnit.title,
        activeUnit.readingPassage,
        [wordToTranslate],
        `Translate the word "${wordToTranslate}" as used in this sentence: "${contextSentence || ''}" into Uzbek. Give:
UZBEK: [Uzbek translation]
DEFINITION: [Simple English definition]`,
        currentBook.cefrLevel
      );

      const combined = `${res.answer} ${res.answerUz || ''}`;
      const uzMatch = combined.match(/UZBEK:\s*([^\n\r.]+)/i);
      const defMatch = combined.match(/DEFINITION:\s*([^\n\r]+)/i);

      setAiWordTranslation({
        word: wordToTranslate,
        uz: uzMatch ? uzMatch[1].trim() : (res.answerUz || res.answer.slice(0, 70)),
        def: defMatch ? defMatch[1].trim() : res.answer
      });
      playSound('correct');
    } catch (e) {
      console.warn('AI word translate error:', e);
    } finally {
      setAiTranslatingWord(null);
    }
  };

  // Add word to DailyWords / SRS Leitner Box
  const handleAddWordToFlashcards = async (word: TargetWord) => {
    await addDailyWord({
      word: word.word,
      translation_uz: word.translationUz,
      definition: word.definition,
      example: word.example,
      cefr_level: currentBook.cefrLevel,
      part_of_speech: word.partOfSpeech,
      phonetic: word.phonetic
    });
    setAddedWordIds(prev => new Set(prev).add(word.id));
    playSound('correct');
  };

  // Add all 20 target words to DailyWords
  const handleAddAllWordsToFlashcards = async () => {
    if (!activeUnit) return;
    for (const word of activeUnit.targetWords) {
      await addDailyWord({
        word: word.word,
        translation_uz: word.translationUz,
        definition: word.definition,
        example: word.example,
        cefr_level: currentBook.cefrLevel,
        part_of_speech: word.partOfSpeech,
        phonetic: word.phonetic
      });
      setAddedWordIds(prev => new Set(prev).add(word.id));
    }
    playSound('levelup');
    addXP(15, 'Curriculum Vocabulary Synchronized');
  };

  // Handle Quiz Submission
  const handleQuizSubmit = () => {
    if (!activeUnit) return;
    let correct = 0;
    const questions = activeUnit.comprehensionQuestions;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswerIndex) {
        correct++;
      }
    });

    const percent = Math.round((correct / questions.length) * 100);
    setQuizScore(percent);
    setQuizSubmitted(true);

    // Calculate WPM if readingTimer > 10s
    const words = activeUnit.wordCount || 250;
    const minutes = Math.max(0.2, readingTimer / 60);
    const calculatedWpm = Math.round(words / minutes);

    const isPassed = percent >= 50;

    // Update Progress
    setProgressMap(prev => ({
      ...prev,
      [activeUnit.id]: {
        completed: isPassed ? true : Boolean(prev[activeUnit.id]?.completed),
        scorePercent: Math.max(percent, prev[activeUnit.id]?.scorePercent || 0),
        readingTimeSeconds: Math.max(readingTimer, prev[activeUnit.id]?.readingTimeSeconds || 0),
        wpm: calculatedWpm > 0 ? calculatedWpm : (prev[activeUnit.id]?.wpm || 140),
        lastStudied: new Date().toISOString()
      }
    }));

    if (isPassed) {
      playSound('levelup');
      addXP(50, `Completed Unit ${activeUnit.unitNumber}: ${activeUnit.title}`);
      if (percent === 100) {
        addXP(30, 'Perfect 100% Comprehension Score');
      }
    } else {
      playSound('wrong');
    }
  };

  // AI Tutor Ask
  const handleSendAiQuestion = async (queryText?: string) => {
    const textToSend = queryText || aiQuery;
    if (!textToSend.trim() || !activeUnit) return;

    setAiMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setAiQuery('');
    setIsAiLoading(true);

    try {
      const res = await askStoryTutorAI(
        activeUnit.title,
        activeUnit.readingPassage,
        activeUnit.targetWords.map(w => w.word),
        textToSend,
        currentBook.cefrLevel
      );

      setAiMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          text: res.answer,
          textUz: res.answerUz
        }
      ]);
    } catch (e) {
      console.error('AI error:', e);
      setAiMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          text: 'I could not connect right now, but please review the target words and test your comprehension questions!',
          textUz: 'Hozirda javob berishda xatolik yuz berdi. Iltimos, lug\'at ro\'yxati va testlarni bajaring.'
        }
      ]);
    } finally {
      setIsAiLoading(false);
    }
  };

  // Teacher: Assign to Classroom Group
  const handleAssignToGroup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeUnit || !assignGroupId) return;

    await createHomework({
      group_id: assignGroupId,
      teacher_id: profile?.id || 'user-teacher-1',
      title: `4000 Essential Words Reading: Unit ${activeUnit.unitNumber} - ${activeUnit.title}`,
      description: `Read the story "${activeUnit.title}", learn the 20 target vocabulary words, and answer the comprehension questions.`,
      due_date: assignDueDate || new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      type: 'multiple_choice',
      max_score: 100,
      content: {
        instructions: `Read the text carefully and master the 20 essential words. Answer all questions.`,
        rubric: `Accuracy in reading comprehension and vocabulary retention.`,
        prompt: activeUnit.readingPassage,
        questions: activeUnit.comprehensionQuestions.map((q, idx) => ({
          id: `hw-q-${idx}`,
          question: q.question,
          options: q.options,
          correct_answer: q.options[q.correctAnswerIndex],
          points: Math.round(100 / activeUnit.comprehensionQuestions.length)
        }))
      }
    });

    setAssignSuccess(true);
    playSound('correct');
    setTimeout(() => {
      setShowAssignModal(false);
      setAssignSuccess(false);
    }, 1500);
  };

  // Render passage with interactive clickable target words and idioms/phrases
  const renderedPassage = useMemo(() => {
    if (!activeUnit) return null;

    const phrases = activeUnit.phrases || [];
    const targetWords = activeUnit.targetWords || [];
    const paragraphs = activeUnit.readingPassage.split('\n\n');

    const escapeRegex = (s: string) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

    return paragraphs.map((para, pIdx) => {
      interface TextInterval {
        start: number;
        end: number;
        text: string;
        type: 'phrase' | 'word';
        item: ReadingPhrase | TargetWord;
      }

      const intervals: TextInterval[] = [];

      // 1. Find Phrase / Idiom / Collocation matches
      if (highlightFilter === 'all' || highlightFilter === 'phrases') {
        phrases.forEach(p => {
          if (!p.phrase) return;
          const reg = new RegExp(`\\b${escapeRegex(p.phrase)}\\b`, 'gi');
          let m: RegExpExecArray | null;
          while ((m = reg.exec(para)) !== null) {
            intervals.push({
              start: m.index,
              end: m.index + m[0].length,
              text: m[0],
              type: 'phrase',
              item: p
            });
          }
        });
      }

      // 2. Find Target Word matches
      if (highlightFilter === 'all' || highlightFilter === 'words') {
        targetWords.forEach(tw => {
          if (!tw.word) return;
          const reg = new RegExp(`\\b${escapeRegex(tw.word)}\\b`, 'gi');
          let m: RegExpExecArray | null;
          while ((m = reg.exec(para)) !== null) {
            intervals.push({
              start: m.index,
              end: m.index + m[0].length,
              text: m[0],
              type: 'word',
              item: tw
            });
          }
        });
      }

      // 3. Sort intervals: start asc, then longer length desc
      intervals.sort((a, b) => {
        if (a.start !== b.start) return a.start - b.start;
        return (b.end - b.start) - (a.end - a.start);
      });

      // 4. Eliminate overlaps (favoring longer phrases over single sub-words)
      const nonOverlapping: TextInterval[] = [];
      let lastEnd = 0;
      for (const match of intervals) {
        if (match.start >= lastEnd) {
          nonOverlapping.push(match);
          lastEnd = match.end;
        }
      }

      // 5. Build paragraph elements
      const elements: React.ReactNode[] = [];
      let cursor = 0;

      const renderClickableSlice = (sliceText: string, keyPrefix: string) => {
        const tokens = sliceText.split(/([a-zA-Z'-]+)/);
        return (
          <span key={keyPrefix}>
            {tokens.map((token, tIdx) => {
              if (/^[a-zA-Z'-]+$/.test(token)) {
                return (
                  <span
                    key={`${keyPrefix}-t-${tIdx}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAnyWordClick(token, para);
                    }}
                    className="cursor-pointer hover:text-indigo-600 hover:bg-indigo-50/90 rounded px-0.5 transition-colors"
                    title={`Click "${token}" to see meaning & translation`}
                  >
                    {token}
                  </span>
                );
              }
              return <span key={`${keyPrefix}-t-${tIdx}`}>{token}</span>;
            })}
          </span>
        );
      };

      nonOverlapping.forEach((match, mIdx) => {
        if (match.start > cursor) {
          elements.push(
            renderClickableSlice(para.slice(cursor, match.start), `txt-${pIdx}-${cursor}`)
          );
        }

        if (match.type === 'phrase') {
          const phraseItem = match.item as ReadingPhrase;
          const isSelected = selectedPhrase?.id === phraseItem.id;
          elements.push(
            <button
              key={`phr-${pIdx}-${mIdx}`}
              type="button"
              onClick={() => handleSelectPhrase(phraseItem)}
              className={`inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded cursor-pointer transition-all duration-150 ${
                isSelected
                  ? 'bg-amber-400 text-slate-950 shadow-xs ring-2 ring-amber-300 font-black'
                  : 'bg-amber-100/90 text-amber-950 hover:bg-amber-200 border-b-2 border-amber-500 font-semibold'
              }`}
              title={`[${phraseItem.type.toUpperCase()}]: ${phraseItem.translationUz} • Click for meaning & pronunciation`}
            >
              <span className="text-[10px] mr-1 text-amber-600 font-black">✦</span>
              <span>{match.text}</span>
            </button>
          );
        } else {
          const wordItem = match.item as TargetWord;
          const isSelected = selectedWord?.id === wordItem.id;
          elements.push(
            <button
              key={`wrd-${pIdx}-${mIdx}`}
              type="button"
              onClick={() => handleSelectWord(wordItem)}
              className={`inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded font-bold cursor-pointer transition-all duration-150 ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-xs ring-2 ring-indigo-300'
                  : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-200 border-b-2 border-indigo-400'
              }`}
              title={`${wordItem.word} [${wordItem.partOfSpeech}]: ${wordItem.translationUz} • Click for definition`}
            >
              {match.text}
            </button>
          );
        }

        cursor = match.end;
      });

      if (cursor < para.length) {
        elements.push(
          renderClickableSlice(para.slice(cursor), `tail-${pIdx}-${cursor}`)
        );
      }

      return (
        <p key={pIdx} className="mb-4 leading-relaxed tracking-normal">
          {elements}
        </p>
      );
    });
  }, [activeUnit, selectedWord, selectedPhrase, highlightFilter]);

  return (
    <div className="space-y-6 pb-12">
      {/* HEADER BAR */}
      {!activeUnit ? (
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30 mb-3">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Paul Nation's 4000 Essential English Words & Reading Curriculum</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Level-Based Reading & Vocabulary Roadmap
            </h1>
            <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
              Step through 6 graded CEFR levels (A1 to C2). Each unit combines 20 high-frequency target vocabulary words with an engaging story, interactive audio read-along, and comprehension diagnostics.
            </p>

            {/* Quick Stats Grid */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <div className="text-xs text-slate-400 font-medium">Curriculum Words</div>
                <div className="text-xl font-black text-white mt-0.5">4,000</div>
                <div className="text-[11px] text-indigo-300">6 Books • 180 Units</div>
              </div>
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <div className="text-xs text-slate-400 font-medium">Your Progress</div>
                <div className="text-xl font-black text-emerald-400 mt-0.5">
                  {Object.values(progressMap).filter(p => p.completed).length} Units
                </div>
                <div className="text-[11px] text-slate-400">Mastered & Certified</div>
              </div>
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <div className="text-xs text-slate-400 font-medium">Average WPM</div>
                <div className="text-xl font-black text-amber-300 mt-0.5">
                  {Math.round(
                    Object.values(progressMap).reduce((acc, p) => acc + (p.wpm || 140), 0) /
                      Math.max(1, Object.values(progressMap).length)
                  )}
                </div>
                <div className="text-[11px] text-slate-400">Words per minute</div>
              </div>
              <div className="bg-white/5 rounded-xl p-3 border border-white/10 flex flex-col justify-center">
                <div className="text-xs text-slate-400 font-medium">Curriculum Mode</div>
                <button
                  type="button"
                  onClick={handleToggleFreeMode}
                  className={`mt-1 text-xs font-bold px-2.5 py-1 rounded-lg transition text-left flex items-center justify-between ${
                    freeExplorationMode
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-indigo-600 text-white'
                  }`}
                >
                  <span>{freeExplorationMode ? 'All 180 Units Open' : 'Step-by-Step'}</span>
                  {freeExplorationMode ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                </button>
              </div>
            </div>

            {/* Switch to Reading for the Real World Banner */}
            <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-indigo-900/90 to-purple-900/90 border border-indigo-400/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/30 flex items-center justify-center shrink-0 text-indigo-300">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    Reading for the Real World (Books 1 - 3)
                    <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono font-semibold">
                      Compass Publishing
                    </span>
                  </h4>
                  <p className="text-xs text-indigo-200 mt-0.5">
                    Academic reading, graphic organizers, and critical comprehension quizzes for Intermediate to Advanced learners.
                  </p>
                </div>
              </div>
              <Link
                to="/real-world-reading"
                className="px-4 py-2 rounded-xl bg-white text-indigo-950 font-bold text-xs shadow-md hover:bg-indigo-50 transition shrink-0 inline-flex items-center gap-2 justify-center"
              >
                <span>Open Real World Library</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      {/* GLOBAL SEARCH & VOCABULARY EXPLORER */}
      {!activeUnit && (
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search all 4,000 words & 180 stories (e.g. 'adventure', 'kimyoviy', 'challenge', 'hero')..."
              className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Instant Search Results Dropdown/Grid */}
          {searchQuery.trim().length >= 2 && (
            <div className="pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
                <span>Found {searchResults.length} matching result{searchResults.length === 1 ? '' : 's'}:</span>
                <span className="text-[11px] text-indigo-600">Click any card to launch that unit & story</span>
              </div>
              {searchResults.length === 0 ? (
                <div className="text-center py-6 text-sm text-slate-400">
                  No curriculum words or definitions found matching "{searchQuery}"
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-80 overflow-y-auto pr-1">
                  {searchResults.map((res, sIdx) => (
                    <button
                      key={`${res.word.id}-${sIdx}`}
                      type="button"
                      onClick={() => {
                        setSelectedBookId(res.book.id);
                        handleOpenUnit(res.unit);
                        setSelectedWord(res.word);
                        setSearchQuery('');
                      }}
                      className="p-3 text-left rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-indigo-50/50 hover:border-indigo-300 transition group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="font-black text-sm text-slate-900 group-hover:text-indigo-600">
                            {res.word.word}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 italic">
                            ({res.word.partOfSpeech})
                          </span>
                        </div>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800">
                          Book {res.book.bookNumber} • Unit {res.unit.unitNumber}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-emerald-700 mt-0.5 truncate">
                        {res.word.translationUz}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-1">
                        {res.word.definition}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* BOOK TABS (LEVELS A1 -> C2) */}
      {!activeUnit && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              Select Book & Level (CEFR A1 – C2)
            </h2>
            <span className="text-xs text-slate-500">
              Active: <strong className="text-indigo-600">{currentBook.title}</strong> ({currentBook.cefrLevel})
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {CURRICULUM_BOOKS.map(b => {
              const isSelected = b.id === selectedBookId;
              const completedCount = b.units.filter(u => progressMap[u.id]?.completed).length;

              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setSelectedBookId(b.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm scale-[1.02]'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-indigo-50 text-indigo-700'
                    }`}>
                      Book {b.bookNumber}
                    </span>
                    <span className={`text-xs font-bold ${isSelected ? 'text-indigo-200' : 'text-slate-500'}`}>
                      {b.cefrLevel}
                    </span>
                  </div>
                  <div className="font-bold text-xs truncate mt-1">{b.levelName.split('(')[0]}</div>
                  <div className={`text-[11px] mt-1.5 flex items-center justify-between ${
                    isSelected ? 'text-indigo-100' : 'text-slate-400'
                  }`}>
                    <span>{b.units.length} Units</span>
                    <span>{completedCount}/{b.units.length} done</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* TOEFL 6.0 Model Essay Book Banner */}
          <div className="mt-3 p-3.5 rounded-xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-white">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-amber-400 flex items-center justify-center border border-indigo-500/30">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black tracking-tight text-white">Answers to All TOEFL Essay Questions</span>
                  <span className="text-[10px] font-black uppercase px-2 py-0.2 rounded-full bg-amber-400 text-slate-950">Score 6.0 Bank</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Follows identical vocabulary logic + formulaic writing chunks + highlighted argumentative ideas.
                </p>
              </div>
            </div>
            <Link
              to="/toefl-essays"
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Explore TOEFL Essays & Chunks</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

      {/* UNIT ROADMAP LIST */}
      {!activeUnit && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black text-slate-900 tracking-tight">
                {currentBook.title} — Reading Units
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {currentBook.description}
              </p>
            </div>
            {profile?.role !== 'student' && (
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                Teacher Access: All units unlocked
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentBook.units.map((unit, idx) => {
              const progress = progressMap[unit.id];
              const isCompleted = Boolean(progress?.completed);
              const unlocked = isUnitUnlocked(unit, idx);

              return (
                <div
                  key={unit.id}
                  className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between p-5 ${
                    isCompleted
                      ? 'bg-emerald-50/40 border-emerald-200 shadow-2xs hover:shadow-xs'
                      : unlocked
                      ? 'bg-white border-slate-200 hover:border-indigo-400 shadow-2xs hover:shadow-xs'
                      : 'bg-slate-50/80 border-slate-200/60 opacity-75'
                  }`}
                >
                  <div>
                    {/* Top Row: Unit # and Status */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                        Unit {unit.unitNumber}
                      </span>
                      {isCompleted ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{progress.scorePercent}% Score</span>
                        </span>
                      ) : unlocked ? (
                        <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                          Ready to Read
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                          <Lock className="w-3 h-3" />
                          <span>Complete Unit {unit.unitNumber - 1}</span>
                        </span>
                      )}
                    </div>

                    {/* Title & Summary */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition">
                      {unit.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {unit.summaryUz}
                    </p>

                    {/* Word Tags Preview */}
                    <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {unit.targetWords.slice(0, 4).map(w => (
                        <span
                          key={w.id}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                        >
                          {w.word}
                        </span>
                      ))}
                      {unit.targetWords.length > 4 && (
                        <span className="text-[11px] text-slate-400 self-center">
                          +{unit.targetWords.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-4 pt-3 flex items-center justify-between">
                    <div className="text-[11px] text-slate-400 flex items-center gap-2">
                      <span>{unit.wordCount} words</span>
                      <span>•</span>
                      <span>~2 min read</span>
                    </div>

                    {unlocked ? (
                      <button
                        type="button"
                        onClick={() => handleOpenUnit(unit)}
                        className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition inline-flex items-center gap-1.5 ${
                          isCompleted
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                            : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xs'
                        }`}
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{isCompleted ? 'Review Story' : 'Start Reading'}</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg cursor-not-allowed inline-flex items-center gap-1"
                      >
                        <Lock className="w-3 h-3" />
                        <span>Locked</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACTIVE UNIT READER VIEW                                                   */}
      {/* ========================================================================= */}
      {activeUnit && (
        <div className="space-y-6">
          {/* Top Bar with Return & Action Controls */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleBackToRoadmap}
                className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition border border-slate-200"
                title="Back to Roadmap"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                    Book {activeUnit.bookNumber} • Unit {activeUnit.unitNumber} of {currentBook.units.length}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {currentBook.cefrLevel} Level
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-0.5">
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {activeUnit.title}
                  </h1>

                  {/* Quick Unit Jump Controls */}
                  <div className="inline-flex items-center gap-1 bg-slate-100 border border-slate-200 rounded-lg p-0.5 ml-2">
                    {activeUnit.unitNumber > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const prev = currentBook.units[activeUnit.unitNumber - 2];
                          if (prev) handleOpenUnit(prev);
                        }}
                        className="p-1 rounded-md text-slate-600 hover:text-indigo-600 hover:bg-white transition cursor-pointer"
                        title="Previous Unit"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <select
                      aria-label="Jump to Unit"
                      value={activeUnit.id}
                      onChange={(e) => {
                        const u = currentBook.units.find(item => item.id === e.target.value);
                        if (u) handleOpenUnit(u);
                      }}
                      className="text-[11px] font-bold text-slate-700 bg-transparent border-none focus:ring-0 cursor-pointer pr-1"
                    >
                      {currentBook.units.map(u => (
                        <option key={u.id} value={u.id}>
                          Unit {u.unitNumber}: {u.title}
                        </option>
                      ))}
                    </select>

                    {activeUnit.unitNumber < currentBook.units.length && (
                      <button
                        type="button"
                        onClick={() => {
                          const next = currentBook.units[activeUnit.unitNumber];
                          if (next) handleOpenUnit(next);
                        }}
                        className="p-1 rounded-md text-slate-600 hover:text-indigo-600 hover:bg-white transition cursor-pointer"
                        title="Next Unit"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Controls Right */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Reading Timer */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-indigo-600" />
                <span>
                  {Math.floor(readingTimer / 60)}:{(readingTimer % 60).toString().padStart(2, '0')}
                </span>
                {readingTimer > 10 && (
                  <span className="text-[10px] text-slate-500 ml-1">
                    ({Math.round((activeUnit.wordCount || 250) / Math.max(0.2, readingTimer / 60))} WPM)
                  </span>
                )}
              </div>

              {/* Audio Read-Along Controls */}
              <div className="flex items-center gap-1 bg-indigo-50 border border-indigo-200 rounded-xl p-1">
                <button
                  type="button"
                  onClick={handleToggleSpeech}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                    isPlayingAudio
                      ? 'bg-amber-500 text-white'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                  title={isPlayingAudio ? 'Pause Narration' : 'Play Narration'}
                >
                  {isPlayingAudio ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Read Along</span>
                    </>
                  )}
                </button>

                {isPlayingAudio && (
                  <button
                    type="button"
                    onClick={handleStopSpeech}
                    className="p-1 rounded-md text-slate-600 hover:bg-indigo-100"
                    title="Stop Audio"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Speed Toggle */}
                <select
                  aria-label="Playback Speed"
                  value={playbackSpeed}
                  onChange={(e) => handleChangeSpeed(parseFloat(e.target.value))}
                  className="bg-transparent text-[11px] font-bold text-indigo-900 border-none focus:ring-0 cursor-pointer pr-1"
                >
                  <option value="0.75">0.75x</option>
                  <option value="1.0">1.0x</option>
                  <option value="1.25">1.25x</option>
                </select>
              </div>

              {/* Teacher Assign Button */}
              {profile?.role !== 'student' && (
                <button
                  type="button"
                  onClick={() => setShowAssignModal(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold transition inline-flex items-center gap-1 shadow-2xs"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Assign to Class</span>
                </button>
              )}
            </div>
          </div>

          {/* READER NAVIGATION TABS */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-white rounded-xl px-2 pt-2 shadow-2xs overflow-x-auto gap-2">
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setReaderTab('story')}
                className={`px-4 py-2.5 text-xs font-bold border-b-2 transition whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  readerTab === 'story'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>1. Story Passage ({activeUnit.wordCount} words)</span>
              </button>
              <button
                type="button"
                onClick={() => setReaderTab('words')}
                className={`px-4 py-2.5 text-xs font-bold border-b-2 transition whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  readerTab === 'words'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>2. Target Words (20 Words)</span>
              </button>
              <button
                type="button"
                onClick={() => setReaderTab('phrases')}
                className={`px-4 py-2.5 text-xs font-bold border-b-2 transition whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  readerTab === 'phrases'
                    ? 'border-amber-500 text-amber-700 bg-amber-50/50'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Quote className="w-4 h-4 text-amber-600" />
                <span>3. Idioms & Collocations ({activeUnit.phrases?.length || 0})</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-200/80 text-amber-900 font-black">
                  New
                </span>
              </button>
              <button
                type="button"
                onClick={() => setReaderTab('pronunciation')}
                className={`px-4 py-2.5 text-xs font-bold border-b-2 transition whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  readerTab === 'pronunciation'
                    ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Mic className="w-4 h-4 text-emerald-600" />
                <span>4. Pronunciation Lab ({activeUnit.targetWords?.length || 20} Words)</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 font-black">
                  AI Voice
                </span>
              </button>
              <button
                type="button"
                onClick={() => setReaderTab('quiz')}
                className={`px-4 py-2.5 text-xs font-bold border-b-2 transition whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  readerTab === 'quiz'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>5. Comprehension Quiz ({activeUnit.comprehensionQuestions.length} Questions)</span>
                {quizSubmitted && (
                  <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-800 font-bold">
                    {quizScore}%
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={() => setReaderTab('ai-tutor')}
                className={`px-4 py-2.5 text-xs font-bold border-b-2 transition whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  readerTab === 'ai-tutor'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>5. AI Reading Tutor (Gemini)</span>
              </button>
            </div>

            {/* Vocab Contest Trigger Button */}
            <Link
              to={`/vocab-contest?level=${currentBook.cefrLevel}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 text-white font-black text-xs uppercase tracking-wider hover:opacity-95 transition shadow-2xs shrink-0"
            >
              <Swords className="w-3.5 h-3.5" />
              <span>Contest Arena ({currentBook.cefrLevel})</span>
            </Link>
          </div>

          {/* ===================================================================== */}
          {/* TAB 1: STORY PASSAGE & INTERACTIVE WORD/PHRASE INSPECTOR              */}
          {/* ===================================================================== */}
          {readerTab === 'story' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Main Passage */}
              <div className="lg:col-span-8 space-y-4">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs relative">
                  {/* Font Controls & Highlight Filter */}
                  <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-3">
                    {/* Font size */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400 font-medium">Text Size:</span>
                      {(['sm', 'base', 'lg', 'xl'] as const).map(size => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setFontSize(size)}
                          className={`px-2 py-0.5 rounded text-xs font-bold transition cursor-pointer ${
                            fontSize === size
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {size.toUpperCase()}
                        </button>
                      ))}
                    </div>

                    {/* Highlighting Mode Switcher */}
                    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                      <span className="text-[10px] text-slate-400 font-bold px-1 uppercase">
                        Highlight:
                      </span>
                      <button
                        type="button"
                        onClick={() => setHighlightFilter('all')}
                        className={`px-2 py-0.5 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                          highlightFilter === 'all'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        All
                      </button>
                      <button
                        type="button"
                        onClick={() => setHighlightFilter('words')}
                        className={`px-2 py-0.5 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                          highlightFilter === 'words'
                            ? 'bg-indigo-600 text-white shadow-xs'
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        20 Words
                      </button>
                      <button
                        type="button"
                        onClick={() => setHighlightFilter('phrases')}
                        className={`px-2 py-0.5 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                          highlightFilter === 'phrases'
                            ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        Idioms ({activeUnit.phrases?.length || 0})
                      </button>
                      <button
                        type="button"
                        onClick={() => setHighlightFilter('none')}
                        className={`px-2 py-0.5 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                          highlightFilter === 'none'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        Plain
                      </button>
                    </div>
                  </div>

                  {/* Highlights Legend Guide */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-[11px] bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 font-semibold text-amber-900">
                        <span className="w-2.5 h-2.5 rounded-sm bg-amber-400 inline-block" />
                        <span>✦ Amber: Idioms & Collocations</span>
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-indigo-900">
                        <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500 inline-block" />
                        <span>Indigo: 4000 Essential Target Words</span>
                      </span>
                    </div>
                    <span className="text-slate-400 italic">
                      Click any highlighted text to open definition & Uzbek translation
                    </span>
                  </div>

                  {/* Formatted Passage */}
                  <div
                    className={`font-serif text-slate-800 transition-all ${
                      fontSize === 'sm'
                        ? 'text-sm'
                        : fontSize === 'base'
                        ? 'text-base'
                        : fontSize === 'lg'
                        ? 'text-lg'
                        : 'text-xl'
                    }`}
                  >
                    {renderedPassage}
                  </div>

                  {/* Completion Action */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-slate-500">
                      Finished reading? Check your understanding with the comprehension quiz or compete in the Vocab Contest.
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/vocab-contest?level=${currentBook.cefrLevel}`}
                        className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition inline-flex items-center gap-2 shadow-xs"
                      >
                        <Swords className="w-4 h-4" />
                        <span>Vocab Contest Arena</span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => setReaderTab('quiz')}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition inline-flex items-center gap-2 shadow-sm cursor-pointer"
                      >
                        <span>Take Comprehension Quiz</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Dual Inspector (Phrase OR Word) */}
              <div className="lg:col-span-4 space-y-4">
                {/* 1. If a PHRASE / IDIOM is selected */}
                {selectedPhrase ? (
                  <div className="bg-white rounded-2xl p-5 border-2 border-amber-400 shadow-sm space-y-4 sticky top-6">
                    <div className="flex items-center justify-between pb-3 border-b border-amber-100">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                            selectedPhrase.type === 'idiom'
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : selectedPhrase.type === 'collocation'
                              ? 'bg-blue-100 text-blue-900 border border-blue-300'
                              : selectedPhrase.type === 'phrasal_verb'
                              ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                              : 'bg-purple-100 text-purple-900 border border-purple-300'
                          }`}
                        >
                          {selectedPhrase.type.replace('_', ' ')}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          In-Story Expression
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handlePronounceWord(selectedPhrase.phrase)}
                        className="p-1.5 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 transition cursor-pointer"
                        title="Listen to Phrase"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-slate-900 tracking-tight">
                        "{selectedPhrase.phrase}"
                      </h3>
                      <div className="mt-1 text-sm font-bold text-amber-800">
                        {selectedPhrase.translationUz}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
                      <div className="font-bold text-slate-900 mb-1">Meaning & Explanation:</div>
                      {selectedPhrase.meaning}
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-slate-800 leading-relaxed">
                      <div className="font-bold text-amber-900 mb-1">In Story Context:</div>
                      "{selectedPhrase.example}"
                    </div>

                    {selectedPhrase.contextNote && (
                      <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-[11px] text-indigo-900 leading-relaxed">
                        <span className="font-bold">Usage Note: </span>
                        {selectedPhrase.contextNote}
                      </div>
                    )}

                    <div className="space-y-2 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setAddedPhraseIds(prev => new Set(prev).add(selectedPhrase.id));
                          playSound('correct');
                        }}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                          addedPhraseIds.has(selectedPhrase.id)
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-black shadow-2xs'
                        }`}
                      >
                        {addedPhraseIds.has(selectedPhrase.id) ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Saved to My Idioms List</span>
                          </>
                        ) : (
                          <>
                            <BookmarkCheck className="w-4 h-4" />
                            <span>Save Phrase to SRS Flashcards (+5 XP)</span>
                          </>
                        )}
                      </button>

                      <Link
                        to={`/vocab-contest?level=${currentBook.cefrLevel}`}
                        className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 text-xs font-bold transition flex items-center justify-center gap-2"
                      >
                        <Swords className="w-3.5 h-3.5" />
                        <span>Challenge Classmates on this Phrase</span>
                      </Link>
                    </div>
                  </div>
                ) : selectedWord ? (
                  /* 2. If a TARGET WORD is selected */
                  <div className="bg-white rounded-2xl p-5 border border-indigo-200 shadow-2xs space-y-4 sticky top-6">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-indigo-600 uppercase bg-indigo-50 px-2 py-0.5 rounded">
                          Word Inspector
                        </span>
                        <span className="text-xs font-serif text-slate-400">
                          {selectedWord.partOfSpeech}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handlePronounceWord(selectedWord.word)}
                        className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition cursor-pointer"
                        title="Pronounce Word"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div>
                      <div className="flex items-baseline gap-2">
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                          {selectedWord.word}
                        </h3>
                        <span className="text-xs text-slate-400 font-mono">
                          {selectedWord.phonetic}
                        </span>
                      </div>
                      <div className="mt-1 text-sm font-bold text-indigo-700">
                        {selectedWord.translationUz}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
                      <div className="font-bold text-slate-900 mb-1">Definition:</div>
                      {selectedWord.definition}
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/60 text-xs text-slate-800 leading-relaxed">
                      <div className="font-bold text-amber-900 mb-1">Example in context:</div>
                      "{selectedWord.example}"
                    </div>

                    <button
                      type="button"
                      disabled={addedWordIds.has(selectedWord.id)}
                      onClick={() => handleAddWordToFlashcards(selectedWord)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                        addedWordIds.has(selectedWord.id)
                          ? 'bg-emerald-100 text-emerald-800 cursor-default'
                          : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xs'
                      }`}
                    >
                      {addedWordIds.has(selectedWord.id) ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Added to My Daily Words Box</span>
                        </>
                      ) : (
                        <>
                          <BookmarkCheck className="w-4 h-4" />
                          <span>Add to My SRS Flashcards (+5 XP)</span>
                        </>
                      )}
                    </button>
                  </div>
                ) : (
                  /* 3. Default Overview: Guide & Unit Quick-List */
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-center text-slate-600 text-xs space-y-2">
                    <p className="font-medium">
                      Tap any highlighted expression in the story to view definitions, audio pronunciation, and Uzbek translation.
                    </p>
                    <div className="pt-1 flex justify-center gap-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
                        ✦ {activeUnit.phrases?.length || 0} Idioms & Phrases
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-800 bg-indigo-100/70 px-2 py-0.5 rounded">
                        20 Target Words
                      </span>
                    </div>
                  </div>
                )}

                {/* Quick Phrases in Unit */}
                {activeUnit.phrases && activeUnit.phrases.length > 0 && (
                  <div className="bg-white rounded-2xl p-4 border border-amber-200 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Quote className="w-3.5 h-3.5 text-amber-600" />
                        <span>Unit Idioms & Phrases ({activeUnit.phrases.length})</span>
                      </h4>
                      <button
                        type="button"
                        onClick={() => setReaderTab('phrases')}
                        className="text-[11px] text-amber-700 hover:underline font-bold cursor-pointer"
                      >
                        Explore All
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto">
                      {activeUnit.phrases.map(p => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => {
                            setSelectedPhrase(p);
                            setSelectedWord(null);
                            handlePronounceWord(p.phrase);
                          }}
                          className={`text-xs px-2.5 py-1 rounded-lg border transition text-left cursor-pointer ${
                            selectedPhrase?.id === p.id
                              ? 'bg-amber-500 text-slate-950 border-amber-600 font-black shadow-xs'
                              : 'bg-amber-50/70 text-amber-950 border-amber-200 hover:bg-amber-100'
                          }`}
                        >
                          ✦ {p.phrase}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Word List in Unit */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Target Words ({activeUnit.targetWords.length})
                    </h4>
                    <button
                      type="button"
                      onClick={() => setReaderTab('words')}
                      className="text-xs text-indigo-600 hover:underline font-medium cursor-pointer"
                    >
                      View All
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto">
                    {activeUnit.targetWords.map(w => (
                      <button
                        key={w.id}
                        type="button"
                        onClick={() => {
                          setSelectedWord(w);
                          setSelectedPhrase(null);
                          handlePronounceWord(w.word);
                        }}
                        className={`text-xs px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                          selectedWord?.id === w.id
                            ? 'bg-indigo-600 text-white border-indigo-700 font-bold'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-indigo-50'
                        }`}
                      >
                        {w.word}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===================================================================== */}
          {/* TAB 2: TARGET 20 WORDS LIST & FLASHCARD IMPORTER                      */}
          {/* ===================================================================== */}
          {readerTab === 'words' && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    Unit {activeUnit.unitNumber} Vocabulary — 20 Essential Words
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    High-frequency vocabulary selected by Paul Nation, complete with IPA phonetic, Uzbek translations, and contextual examples.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddAllWordsToFlashcards}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition inline-flex items-center gap-2 shadow-2xs"
                >
                  <Layers className="w-4 h-4" />
                  <span>Add All 20 to My Daily Words SRS (+15 XP)</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeUnit.targetWords.map((word, idx) => (
                  <div
                    key={word.id}
                    className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-indigo-300 transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black text-slate-400">#{idx + 1}</span>
                          <h4 className="text-lg font-black text-slate-900">{word.word}</h4>
                          <span className="text-xs font-mono text-slate-400">{word.phonetic}</span>
                          <span className="text-[11px] font-serif text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                            {word.partOfSpeech}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handlePronounceWord(word.word)}
                          className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition"
                          title="Pronounce"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-2 text-sm font-bold text-indigo-700">
                        {word.translationUz}
                      </div>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                        {word.definition}
                      </p>

                      <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 italic">
                        "{word.example}"
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end">
                      <button
                        type="button"
                        disabled={addedWordIds.has(word.id)}
                        onClick={() => handleAddWordToFlashcards(word)}
                        className={`text-xs font-medium px-3 py-1 rounded-lg transition inline-flex items-center gap-1 ${
                          addedWordIds.has(word.id)
                            ? 'text-emerald-700 bg-emerald-50 cursor-default'
                            : 'text-indigo-600 hover:bg-indigo-50'
                        }`}
                      >
                        {addedWordIds.has(word.id) ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>In Daily Words</span>
                          </>
                        ) : (
                          <>
                            <BookmarkCheck className="w-3.5 h-3.5" />
                            <span>Save to Flashcards</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===================================================================== */}
          {/* TAB 3: IDIOMS, COLLOCATIONS & PHRASAL VERBS                           */}
          {/* ===================================================================== */}
          {readerTab === 'phrases' && (
            <div className="space-y-6">
              {/* Header Banner */}
              <div className="bg-gradient-to-br from-amber-500/10 via-amber-100/50 to-orange-50 rounded-2xl p-6 border border-amber-200 shadow-2xs flex flex-wrap items-center justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-200 text-amber-900">
                      Curriculum Feature
                    </span>
                    <span className="text-xs font-semibold text-amber-800">
                      {activeUnit.phrases?.length || 0} Natural Language Expressions
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    Unit {activeUnit.unitNumber} Idioms, Collocations & Phrases
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Mastering multi-word expressions bridges the gap between intermediate English and native fluency. These phrases are lifted directly from "{activeUnit.title}".
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <Link
                    to={`/vocab-contest?level=${currentBook.cefrLevel}`}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider transition inline-flex items-center gap-2 shadow-2xs"
                  >
                    <Swords className="w-4 h-4" />
                    <span>Contest on this Level</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      if (activeUnit.phrases) {
                        const newSet = new Set(addedPhraseIds);
                        activeUnit.phrases.forEach(p => newSet.add(p.id));
                        setAddedPhraseIds(newSet);
                        playSound('levelup');
                      }
                    }}
                    className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold px-4 py-2.5 rounded-xl text-xs transition inline-flex items-center gap-2 shadow-2xs cursor-pointer"
                  >
                    <BookmarkCheck className="w-4 h-4 text-indigo-600" />
                    <span>Save All Phrases (+15 XP)</span>
                  </button>
                </div>
              </div>

              {/* Phrases Grid */}
              {activeUnit.phrases && activeUnit.phrases.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeUnit.phrases.map((phrase, idx) => {
                    const isAdded = addedPhraseIds.has(phrase.id);

                    return (
                      <div
                        key={phrase.id}
                        className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-amber-400 hover:shadow-xs transition flex flex-col justify-between space-y-4"
                      >
                        <div className="space-y-3">
                          {/* Top row: Type badge & Audio */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-black text-slate-400">#{idx + 1}</span>
                              <span
                                className={`text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wider ${
                                  phrase.type === 'idiom'
                                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                    : phrase.type === 'collocation'
                                    ? 'bg-blue-100 text-blue-900 border border-blue-300'
                                    : phrase.type === 'phrasal_verb'
                                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                                    : 'bg-purple-100 text-purple-900 border border-purple-300'
                                }`}
                              >
                                {phrase.type.replace('_', ' ')}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => handlePronounceWord(phrase.phrase)}
                              className="p-1.5 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 transition cursor-pointer"
                              title="Pronounce Expression"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Phrase & Uzbek translation */}
                          <div>
                            <h4 className="text-lg font-black text-slate-900 tracking-tight">
                              "{phrase.phrase}"
                            </h4>
                            <div className="mt-1 text-sm font-bold text-amber-800">
                              {phrase.translationUz}
                            </div>
                          </div>

                          {/* Meaning */}
                          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
                            <span className="font-bold text-slate-900">Meaning: </span>
                            {phrase.meaning}
                          </div>

                          {/* Example */}
                          <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/60 text-xs text-slate-800 leading-relaxed">
                            <span className="font-bold text-amber-900">In-Story Context: </span>
                            "{phrase.example}"
                          </div>

                          {/* Context Note */}
                          {phrase.contextNote && (
                            <div className="text-[11px] text-slate-500 italic px-1">
                              💡 <span className="font-medium">Nuance: </span>{phrase.contextNote}
                            </div>
                          )}
                        </div>

                        {/* Bottom action row */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedPhrase(phrase);
                              setSelectedWord(null);
                              setReaderTab('story');
                            }}
                            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1 cursor-pointer"
                          >
                            <span>Find in Story Passage</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setAddedPhraseIds(prev => new Set(prev).add(phrase.id));
                              playSound('correct');
                            }}
                            className={`text-xs font-bold px-3 py-1.5 rounded-xl transition inline-flex items-center gap-1.5 cursor-pointer ${
                              isAdded
                                ? 'text-emerald-800 bg-emerald-100'
                                : 'text-amber-950 bg-amber-400 hover:bg-amber-500 shadow-2xs'
                            }`}
                          >
                            {isAdded ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-700" />
                                <span>Saved</span>
                              </>
                            ) : (
                              <>
                                <BookmarkCheck className="w-3.5 h-3.5" />
                                <span>Save (+5 XP)</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-slate-50 rounded-2xl p-12 text-center border border-slate-200 space-y-3">
                  <Quote className="w-8 h-8 text-slate-400 mx-auto" />
                  <h4 className="text-base font-bold text-slate-800">
                    Idioms & Collocations for this unit are being prepared!
                  </h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Check out Unit 1 and Unit 2 in Book 1 for rich annotated idioms and expressions like "look after", "take off", and "catch up with".
                  </p>
                </div>
              )}

              {/* Bottom Gamified CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-wrap items-center justify-between gap-4 shadow-sm">
                <div>
                  <div className="text-amber-400 text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                    <Swords className="w-4 h-4" />
                    <span>Vocabulary & Idiom Contest</span>
                  </div>
                  <h4 className="text-lg font-black text-white mt-1">
                    Ready to put these words and phrases to the test?
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Challenge your classmates, climb your group's leaderboard, and earn XP with live speed rounds!
                  </p>
                </div>
                <Link
                  to={`/vocab-contest?level=${currentBook.cefrLevel}`}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition shadow-sm inline-flex items-center gap-2"
                >
                  <Swords className="w-4 h-4" />
                  <span>Enter Contest Arena</span>
                </Link>
              </div>
            </div>
          )}

          {/* ===================================================================== */}
          {/* TAB: PRONUNCIATION LAB                                                */}
          {/* ===================================================================== */}
          {readerTab === 'pronunciation' && (
            <WordPronunciationPractice
              words={activeUnit.targetWords}
              title={`Book ${currentBook.bookNumber} • Unit ${activeUnit.unitNumber} Pronunciation Lab`}
              subtitle={`Story: "${activeUnit.title}" • Practice speaking and master American phonetics for all 20 target words`}
              sourceType="reading_curriculum"
              sourceId={activeUnit.id}
            />
          )}

          {/* ===================================================================== */}
          {/* TAB 3: COMPREHENSION QUIZ                                             */}
          {/* ===================================================================== */}
          {readerTab === 'quiz' && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    Reading Comprehension Check
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Answer all questions based on "{activeUnit.title}". Score 70% or higher to unlock the next unit and earn XP!
                  </p>
                </div>
                {quizSubmitted && (
                  <div className={`px-4 py-2 rounded-xl text-center font-bold text-sm ${
                    quizScore >= 70 ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}>
                    {quizScore}% Score {quizScore >= 70 ? '• Passed' : '• Try Again'}
                  </div>
                )}
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {activeUnit.comprehensionQuestions.map((q, qIdx) => {
                  const selectedOpt = userAnswers[q.id];
                  const isCorrect = selectedOpt === q.correctAnswerIndex;

                  return (
                    <div key={q.id} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                          {qIdx + 1}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug pt-0.5">
                          {q.question}
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 gap-2 pl-9">
                        {q.options.map((opt, optIdx) => {
                          const isPicked = selectedOpt === optIdx;
                          let optStyle = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';

                          if (quizSubmitted) {
                            if (optIdx === q.correctAnswerIndex) {
                              optStyle = 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold';
                            } else if (isPicked) {
                              optStyle = 'bg-rose-100 border-rose-400 text-rose-900 line-through';
                            }
                          } else if (isPicked) {
                            optStyle = 'bg-indigo-50 border-indigo-500 text-indigo-900 font-bold';
                          }

                          return (
                            <button
                              key={optIdx}
                              type="button"
                              disabled={quizSubmitted}
                              onClick={() => setUserAnswers(prev => ({ ...prev, [q.id]: optIdx }))}
                              className={`p-3 rounded-xl border text-left text-xs transition flex items-center justify-between ${optStyle}`}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && optIdx === q.correctAnswerIndex && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation Box upon submit */}
                      {quizSubmitted && (
                        <div className="mt-3 pl-9 text-xs space-y-1">
                          <div className="font-semibold text-slate-800">
                            {q.explanation}
                          </div>
                          <div className="text-indigo-700 italic">
                            O'zbekcha: {q.explanationUz}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Quiz Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setReaderTab('story')}
                  className="text-xs font-bold text-slate-600 hover:text-indigo-600 transition"
                >
                  ← Review Story Text
                </button>

                {!quizSubmitted ? (
                  <button
                    type="button"
                    disabled={Object.keys(userAnswers).length < activeUnit.comprehensionQuestions.length}
                    onClick={handleQuizSubmit}
                    className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-6 py-2.5 rounded-xl text-xs font-bold transition shadow-sm"
                  >
                    Submit Answers & Complete Unit
                  </button>
                ) : (
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setQuizSubmitted(false);
                        setUserAnswers({});
                      }}
                      className="text-xs font-bold px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                    >
                      Retake Quiz
                    </button>
                    {quizScore >= 70 && (
                      <button
                        type="button"
                        onClick={handleBackToRoadmap}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl text-xs font-bold transition inline-flex items-center gap-1.5 shadow-sm"
                      >
                        <Award className="w-4 h-4 text-amber-300" />
                        <span>Continue Roadmap (+50 XP Awarded)</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ===================================================================== */}
          {/* TAB 4: AI READING TUTOR (GEMINI)                                      */}
          {/* ===================================================================== */}
          {readerTab === 'ai-tutor' && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight">
                      AI Reading Tutor (Gemini 3.8)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Deep comprehension assistance, grammar analysis, and bilingual explanations for "{activeUnit.title}".
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Prompts */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Suggested Questions:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "What is the moral of this story?",
                    "Summarize the key events in 3 short sentences",
                    "Explain difficult vocabulary in Uzbek",
                    "What makes the rabbit clever?",
                    "How are the target words used to show cause and effect?"
                  ].map((promptText, pIdx) => (
                    <button
                      key={pIdx}
                      type="button"
                      disabled={isAiLoading}
                      onClick={() => handleSendAiQuestion(promptText)}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 border border-slate-200 transition"
                    >
                      {promptText}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {aiMessages.map((msg, mIdx) => (
                  <div
                    key={mIdx}
                    className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-indigo-600 text-white ml-8 sm:ml-16 shadow-2xs'
                        : 'bg-slate-50 text-slate-800 mr-8 sm:mr-16 border border-slate-200 shadow-2xs space-y-2'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                    {msg.textUz && (
                      <div className="mt-2 pt-2 border-t border-slate-200/80 text-indigo-900 font-medium bg-indigo-50/60 p-2.5 rounded-xl">
                        {msg.textUz}
                      </div>
                    )}
                  </div>
                ))}
                {isAiLoading && (
                  <div className="p-4 rounded-2xl bg-slate-50 text-slate-500 text-xs inline-flex items-center gap-2 border border-slate-200">
                    <RotateCcw className="w-3.5 h-3.5 animate-spin text-indigo-600" />
                    <span>Gemini AI is analyzing the story text...</span>
                  </div>
                )}
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendAiQuestion();
                }}
                className="flex items-center gap-2 pt-2 border-t border-slate-100"
              >
                <input
                  type="text"
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  placeholder="Ask a question about this story or its vocabulary..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  disabled={!aiQuery.trim() || isAiLoading}
                  className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Ask AI</span>
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TEACHER ASSIGN HOMEWORK MODAL                                             */}
      {/* ========================================================================= */}
      {showAssignModal && activeUnit && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Assign Reading to Group
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAssignModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600">
              This will automatically create a homework assignment for the selected class containing the reading passage for <strong>"{activeUnit.title}"</strong> and all {activeUnit.comprehensionQuestions.length} auto-graded comprehension questions.
            </p>

            <form onSubmit={handleAssignToGroup} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Target Group</label>
                <select
                  value={assignGroupId}
                  onChange={(e) => setAssignGroupId(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-500"
                >
                  {groups.map(g => (
                    <option key={g.id} value={g.id}>
                      {g.name} ({g.level}) • {g.schedule}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Due Date</label>
                <input
                  type="date"
                  value={assignDueDate}
                  onChange={(e) => setAssignDueDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              {assignSuccess && (
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Homework assignment created and published to students!</span>
                </div>
              )}

              <div className="pt-3 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAssignModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl text-xs font-bold shadow-2xs"
                >
                  Confirm & Assign
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* UNIVERSAL CLICK-TO-INSPECT MODAL (MOBILE BOTTOM SHEET & DESKTOP DIALOG)  */}
      {/* Shown whenever a word or phrase is clicked on any device                 */}
      {/* ========================================================================= */}
      {isMobilePopupOpen && (selectedWord || selectedPhrase) && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={() => setIsMobilePopupOpen(false)}
        >
          <div 
            className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-lg max-h-[88vh] overflow-y-auto border-t sm:border border-slate-200 shadow-2xl p-5 sm:p-6 space-y-4 animate-in slide-in-from-bottom sm:zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grab Handle */}
            <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-2 sm:hidden" />

            {/* If a PHRASE / IDIOM is selected */}
            {selectedPhrase && (
              <>
                <div className="flex items-center justify-between pb-3 border-b border-amber-100">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                        selectedPhrase.type === 'idiom'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : selectedPhrase.type === 'collocation'
                          ? 'bg-blue-100 text-blue-900 border border-blue-300'
                          : selectedPhrase.type === 'phrasal_verb'
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : 'bg-purple-100 text-purple-900 border border-purple-300'
                      }`}
                    >
                      {selectedPhrase.type.replace('_', ' ')}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Story Expression</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleCopyText(selectedPhrase.phrase)}
                      className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition cursor-pointer"
                      title="Copy Expression"
                    >
                      {copiedText === selectedPhrase.phrase ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePronounceWord(selectedPhrase.phrase)}
                      className="p-2 rounded-xl bg-amber-100 text-amber-900 hover:bg-amber-200 transition cursor-pointer"
                      title="Listen to Phrase"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsMobilePopupOpen(false)}
                      className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    "{selectedPhrase.phrase}"
                  </h3>
                  <div className="mt-2 text-base font-black text-amber-950 bg-amber-50/90 p-3 rounded-2xl border border-amber-200">
                    <span className="text-[11px] font-black uppercase text-amber-800 block mb-0.5">O'zbekcha ma'nosi:</span>
                    {selectedPhrase.translationUz}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <div className="font-bold text-slate-900 mb-1">Meaning & Explanation:</div>
                  {selectedPhrase.meaning}
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-xs text-slate-800 leading-relaxed">
                  <div className="font-bold text-amber-900 mb-1">In Story Context:</div>
                  "{selectedPhrase.example}"
                </div>

                {selectedPhrase.contextNote && (
                  <div className="p-3 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-900 leading-relaxed">
                    <span className="font-bold">Usage Note: </span>
                    {selectedPhrase.contextNote}
                  </div>
                )}
              </>
            )}

            {/* If a WORD is selected */}
            {selectedWord && (
              <>
                <div className="flex items-center justify-between pb-3 border-b border-indigo-100">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-900 border border-indigo-200">
                      {selectedWord.partOfSpeech}
                    </span>
                    <span className="text-xs text-slate-500 font-mono font-bold">
                      {selectedWord.phonetic}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleCopyText(selectedWord.word)}
                      className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition cursor-pointer"
                      title="Copy Word"
                    >
                      {copiedText === selectedWord.word ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePronounceWord(selectedWord.word)}
                      className="p-2 rounded-xl bg-indigo-100 text-indigo-900 hover:bg-indigo-200 transition cursor-pointer"
                      title="Listen"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsMobilePopupOpen(false)}
                      className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {selectedWord.word}
                  </h3>
                  
                  {/* Uzbek Translation Card */}
                  <div className="mt-2 p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 border border-indigo-200 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase text-indigo-900 tracking-wider">
                        O'zbekcha tarjimasi / ma'nosi:
                      </span>
                      {isDefiningWord && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-indigo-600 font-bold animate-pulse">
                          <Loader2 className="w-3 h-3 animate-spin" /> Izlanmoqda...
                        </span>
                      )}
                    </div>
                    <div className="text-base font-extrabold text-indigo-950">
                      {aiWordTranslation?.word.toLowerCase() === selectedWord.word.toLowerCase()
                        ? aiWordTranslation.uz
                        : selectedWord.translationUz}
                    </div>
                  </div>
                </div>

                {/* English Definition */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed space-y-1">
                  <div className="font-bold text-slate-900">Definition:</div>
                  <p className="text-sm font-medium text-slate-700">
                    {aiWordTranslation?.word.toLowerCase() === selectedWord.word.toLowerCase()
                      ? aiWordTranslation.def
                      : selectedWord.definition}
                  </p>
                </div>

                {selectedWord.example && (
                  <div className="p-3.5 rounded-2xl bg-indigo-50/50 border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-1">
                    <div className="font-bold text-indigo-900">In Story Context:</div>
                    <p className="italic font-medium">"{selectedWord.example}"</p>
                  </div>
                )}

                {/* AI Deep Translation & Explanation Action */}
                {!aiWordTranslation && selectedWord.id.startsWith('dyn-') && !isDefiningWord && (
                  <button
                    type="button"
                    onClick={() => handleTranslateWordWithAI(selectedWord.word, selectedWord.example)}
                    disabled={Boolean(aiTranslatingWord)}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{aiTranslatingWord ? 'Tarjima qilinmoqda...' : 'Translate & Explain with Gemini AI'}</span>
                  </button>
                )}

                {/* Add to Daily Words Button */}
                <button
                  type="button"
                  onClick={() => handleAddWordToFlashcards(selectedWord)}
                  disabled={addedWordIds.has(selectedWord.id)}
                  className={`w-full py-3 rounded-2xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                    addedWordIds.has(selectedWord.id)
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
                  }`}
                >
                  {addedWordIds.has(selectedWord.id) ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Saved to Daily Words</span>
                    </>
                  ) : (
                    <>
                      <BookmarkCheck className="w-4 h-4" />
                      <span>Save to Daily Words (+5 XP)</span>
                    </>
                  )}
                </button>
              </>
            )}

            <button
              type="button"
              onClick={() => setIsMobilePopupOpen(false)}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100 transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
