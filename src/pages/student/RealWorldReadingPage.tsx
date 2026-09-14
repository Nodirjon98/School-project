import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  REAL_WORLD_BOOKS, 
  getRealWorldBookById,
  searchRealWorldContent,
  RealWorldSearchResult
} from '../../data/readingRealWorldData';
import { 
  RealWorldBook, 
  RealWorldUnit, 
  RealWorldPassage, 
  RealWorldVocab 
} from '../../types';
import { useAuth } from '../../contexts/AuthContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { playSound } from '../../lib/sound';
import { askStoryTutorAI } from '../../lib/ai';
import { WordPronunciationPractice } from '../../components/pronunciation/WordPronunciationPractice';
import { RealWorldUnitStudy } from '../../components/reading/RealWorldUnitStudy';
import { VocabularyOverlayCard } from '../../components/reading/VocabularyOverlayCard';
import { UnitVocabularyModal } from '../../components/reading/UnitVocabularyModal';
import { lookupPrebuiltWord, PrebuiltLookupResult } from '../../lib/prebuiltDictionary';
import { 
  BookOpen, CheckCircle2, Volume2, Play, Pause, Square, 
  RotateCcw, Award, ChevronRight, ChevronLeft, ArrowLeft, BrainCircuit, 
  Send, HelpCircle, Layers, Check, ExternalLink,
  Clock, Gauge, BookmarkCheck, ThumbsUp, Filter, Search, X,
  GraduationCap, Copy, Lightbulb, Loader2, Mic, Sparkles,
  GitBranch, MessageSquare, BookMarked, BarChart3, Star, Flame,
  Share2, Compass, Shuffle, Languages
} from 'lucide-react';

type ReaderTab = 'story' | 'synonyms' | 'words' | 'pronunciation' | 'organizer' | 'quiz' | 'discussion' | 'ai-tutor';
type FontSize = 'sm' | 'base' | 'lg' | 'xl';
type HighlightFilter = 'all' | 'words' | 'plain';

interface CompletedPassageRecord {
  score: number;
  completedAt: string;
}

const STORAGE_KEY_PROGRESS = 'rrw_reading_progress_v2';

export const RealWorldReadingPage: React.FC = () => {
  const { profile } = useAuth();
  const { addXP, addDailyWord } = useLMSData();
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Navigation View: 'roadmap' (Unit Explorer) vs 'reader' (Active Unit) vs 'structured-unit'
  const [viewMode, setViewMode] = useState<'roadmap' | 'reader' | 'structured-unit'>('roadmap');

  // Book Selection (1, 2, 3)
  const [selectedBookId, setSelectedBookId] = useState<string>('rrw-book-1');
  const currentBook = useMemo(() => {
    return getRealWorldBookById(selectedBookId) || REAL_WORLD_BOOKS[0];
  }, [selectedBookId]);

  // Selected Unit & Passage
  const [selectedUnitId, setSelectedUnitId] = useState<string>('rrw1-u1');
  const currentUnit = useMemo(() => {
    return currentBook.units.find(u => u.id === selectedUnitId) || currentBook.units[0];
  }, [currentBook, selectedUnitId]);

  const [selectedPassageId, setSelectedPassageId] = useState<string>('rrw1-u1-p1');
  const currentPassage = useMemo(() => {
    if (!currentUnit) return currentBook.units[0]?.passages[0];
    return currentUnit.passages.find(p => p.id === selectedPassageId) || currentUnit.passages[0];
  }, [currentUnit, currentBook, selectedPassageId]);

  // Reader Tab
  const [readerTab, setReaderTab] = useState<ReaderTab>('story');

  // Text formatting
  const [fontSize, setFontSize] = useState<FontSize>('base');
  const [highlightFilter, setHighlightFilter] = useState<HighlightFilter>('all');
  const [showUzbekSummary, setShowUzbekSummary] = useState(false);

  // Search state on Roadmap
  const [searchQuery, setSearchQuery] = useState('');
  const searchResults = useMemo(() => {
    return searchRealWorldContent(searchQuery);
  }, [searchQuery]);

  // Selected Word in Story / Word Inspector
  const [selectedVocab, setSelectedVocab] = useState<RealWorldVocab | null>(null);
  const [showVocabOverlay, setShowVocabOverlay] = useState(false);
  const [vocabModalUnit, setVocabModalUnit] = useState<RealWorldUnit | null>(null);
  const [clickedArbitraryWord, setClickedArbitraryWord] = useState<{ word: string; context: string } | null>(null);
  const [addedWordKeys, setAddedWordKeys] = useState<Set<string>>(new Set());

  // Reading Timer & WPM
  const [readingSeconds, setReadingSeconds] = useState(0);
  const [isReadingActive, setIsReadingActive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Audio Playback state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Vocabulary Flashcards state
  const [vocabCardIndex, setVocabCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [vocabViewMode, setVocabViewMode] = useState<'flashcards' | 'grid'>('flashcards');

  // Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Progress Tracking (localStorage)
  const [completedPassages, setCompletedPassages] = useState<Record<string, CompletedPassageRecord>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const saveProgress = useCallback((passageId: string, score: number) => {
    setCompletedPassages(prev => {
      const updated = {
        ...prev,
        [passageId]: { score, completedAt: new Date().toISOString() }
      };
      try {
        localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save progress to localStorage', err);
      }
      return updated;
    });
  }, []);

  // Synonym Matching State & Logic
  const synonymPairs = useMemo(() => {
    if (currentPassage.synonymMatches && currentPassage.synonymMatches.length > 0) {
      return currentPassage.synonymMatches.map(sm => ({
        word: sm.word,
        synonym: sm.synonym,
        definitionEn: sm.definition,
        translationUz: sm.explanationUz
      }));
    }
    return currentPassage.targetVocab
      .filter(v => v.synonym)
      .map(v => ({
        word: v.word,
        synonym: v.synonym || '',
        definitionEn: v.definitionEn,
        translationUz: v.translationUz
      }));
  }, [currentPassage]);

  const [selectedMatchWord, setSelectedMatchWord] = useState<string | null>(null);
  const [selectedMatchSynonym, setSelectedMatchSynonym] = useState<string | null>(null);
  const [matchedWordsSet, setMatchedWordsSet] = useState<Set<string>>(new Set());
  const [wrongMatchAttempt, setWrongMatchAttempt] = useState<{ word?: string; synonym?: string } | null>(null);
  const [shuffledSynonymsList, setShuffledSynonymsList] = useState<string[]>([]);
  const [isMatchingComplete, setIsMatchingComplete] = useState(false);

  useEffect(() => {
    setSelectedMatchWord(null);
    setSelectedMatchSynonym(null);
    setMatchedWordsSet(new Set());
    setWrongMatchAttempt(null);
    setIsMatchingComplete(false);
    const syns = synonymPairs.map(p => p.synonym);
    setShuffledSynonymsList([...syns].sort(() => Math.random() - 0.5));
  }, [currentPassage, synonymPairs]);

  const handleSynonymWordClick = (word: string) => {
    if (matchedWordsSet.has(word)) return;
    handlePronounceWord(word);
    setSelectedMatchWord(word);
    setWrongMatchAttempt(null);

    if (selectedMatchSynonym) {
      checkSynonymMatch(word, selectedMatchSynonym);
    }
  };

  const handleSynonymItemClick = (synonym: string) => {
    const isAlreadyMatched = Array.from(matchedWordsSet).some(w => {
      const pair = synonymPairs.find(p => p.word === w);
      return pair?.synonym === synonym;
    });
    if (isAlreadyMatched) return;

    handlePronounceWord(synonym);
    setSelectedMatchSynonym(synonym);
    setWrongMatchAttempt(null);

    if (selectedMatchWord) {
      checkSynonymMatch(selectedMatchWord, synonym);
    }
  };

  const checkSynonymMatch = (word: string, synonym: string) => {
    const targetPair = synonymPairs.find(p => p.word.toLowerCase() === word.toLowerCase());
    if (targetPair && targetPair.synonym.toLowerCase() === synonym.toLowerCase()) {
      playSound('correct');
      const nextSet = new Set(matchedWordsSet).add(word);
      setMatchedWordsSet(nextSet);
      setSelectedMatchWord(null);
      setSelectedMatchSynonym(null);

      if (nextSet.size === synonymPairs.length && synonymPairs.length > 0) {
        setIsMatchingComplete(true);
        addXP(50);
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } else {
      playSound('wrong');
      setWrongMatchAttempt({ word, synonym });
      setTimeout(() => {
        setSelectedMatchWord(null);
        setSelectedMatchSynonym(null);
        setWrongMatchAttempt(null);
      }, 700);
    }
  };

  // AI Tutor State
  const [aiChatMessages, setAiChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: 'Salom! Men sizning "Reading for the Real World" shaxsiy AI repetitoringizman. Ushbu matn bo\'yicha tushunarsiz so\'zlar, murakkab grammatik jumlalar yoki ilmiy g\'oyalarni ingliz va o\'zbek tillarida so\'rashingiz mumkin!',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [aiInputText, setAiInputText] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement | null>(null);

  // =========================================================================
  // AUDIO CONTROLS
  // =========================================================================
  const stopAudio = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
  }, []);

  const handlePronounceWord = useCallback((word: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
    if (enVoice) utterance.voice = enVoice;
    window.speechSynthesis.speak(utterance);
  }, []);

  const togglePlayAudio = useCallback(() => {
    if (!currentPassage) return;
    if (!('speechSynthesis' in window)) {
      alert('Brauzeringiz matnni ovozga aylantirishni (TTS) qo\'llab-quvvatlamaydi.');
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

    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    playSound('click');
  }, [currentPassage, isPlayingAudio, playbackSpeed, stopAudio]);

  // Clean up audio on unmount or tab switch
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, [selectedPassageId, stopAudio]);

  // =========================================================================
  // READING TIMER & WPM
  // =========================================================================
  useEffect(() => {
    if (viewMode === 'reader' && readerTab === 'story') {
      setIsReadingActive(true);
      timerRef.current = setInterval(() => {
        setReadingSeconds(prev => prev + 1);
      }, 1000);
    } else {
      setIsReadingActive(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [viewMode, readerTab, selectedPassageId]);

  const wordsPerMinute = useMemo(() => {
    if (!currentPassage || readingSeconds < 5) return 0;
    const minutes = readingSeconds / 60;
    return Math.round(currentPassage.wordCount / minutes);
  }, [currentPassage, readingSeconds]);

  // =========================================================================
  // SELECTING BOOKS, UNITS, AND PASSAGES
  // =========================================================================
  const handleSelectBook = (bookId: string) => {
    setSelectedBookId(bookId);
    const targetBook = getRealWorldBookById(bookId);
    if (targetBook && targetBook.units.length > 0) {
      const firstUnit = targetBook.units[0];
      setSelectedUnitId(firstUnit.id);
      if (firstUnit.passages.length > 0) {
        setSelectedPassageId(firstUnit.passages[0].id);
      }
    }
  };

  const handleOpenUnitInReader = (unit: RealWorldUnit, passageIndex = 0) => {
    setSelectedUnitId(unit.id);
    if (unit.passages.length > passageIndex) {
      setSelectedPassageId(unit.passages[passageIndex].id);
    } else if (unit.passages.length > 0) {
      setSelectedPassageId(unit.passages[0].id);
    }
    setViewMode('reader');
    setReaderTab('story');
    setReadingSeconds(0);
    setUserAnswers({});
    setQuizSubmitted(false);
    setSelectedVocab(null);
    setClickedArbitraryWord(null);
    setVocabCardIndex(0);
    setIsFlipped(false);
    stopAudio();
  };

  const handleSelectPassage = (passage: RealWorldPassage) => {
    setSelectedPassageId(passage.id);
    setReaderTab('story');
    setReadingSeconds(0);
    setUserAnswers({});
    setQuizSubmitted(false);
    setSelectedVocab(null);
    setClickedArbitraryWord(null);
    setVocabCardIndex(0);
    setIsFlipped(false);
    stopAudio();
  };

  const handleNextUnit = () => {
    const currentIndex = currentBook.units.findIndex(u => u.id === selectedUnitId);
    if (currentIndex < currentBook.units.length - 1) {
      handleOpenUnitInReader(currentBook.units[currentIndex + 1]);
    }
  };

  const handlePrevUnit = () => {
    const currentIndex = currentBook.units.findIndex(u => u.id === selectedUnitId);
    if (currentIndex > 0) {
      handleOpenUnitInReader(currentBook.units[currentIndex - 1]);
    }
  };

  // =========================================================================
  // ADD WORD TO USER'S DAILY VOCABULARY (SRS)
  // =========================================================================
  const handleAddWordToSRS = async (vocab: RealWorldVocab) => {
    const key = `${currentPassage?.id}-${vocab.word}`;
    if (addedWordKeys.has(key)) return;

    try {
      await addDailyWord({
        word: vocab.word,
        phonetic: vocab.phonetic,
        part_of_speech: vocab.pos,
        definition: vocab.definitionEn,
        translation_uz: vocab.translationUz,
        example: vocab.sampleSentence,
        cefr_level: (currentPassage?.level as any) || 'B1'
      });

      setAddedWordKeys(prev => new Set(prev).add(key));
      playSound('correct');
    } catch (err) {
      console.error('Error adding word to SRS:', err);
    }
  };

  // =========================================================================
  // QUIZ SUBMISSION & SCORING
  // =========================================================================
  const handleAnswerSelect = (questionId: string, optionIndex: number) => {
    if (quizSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
    playSound('click');
  };

  const handleQuizSubmit = () => {
    if (!currentPassage) return;
    const questions = currentPassage.comprehensionQuiz;
    let correctCount = 0;

    questions.forEach(q => {
      if (userAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    const scorePct = Math.round((correctCount / questions.length) * 100);
    setQuizScore(scorePct);
    setQuizSubmitted(true);

    if (scorePct >= 75) {
      saveProgress(currentPassage.id, scorePct);
      addXP(50, `Completed quiz for ${currentPassage.title}`);
      playSound('levelup');
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      playSound('wrong');
    }
  };

  const handleRetakeQuiz = () => {
    setUserAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  // =========================================================================
  // AI CHAT SUBMIT
  // =========================================================================
  const handleSendAiMessage = async () => {
    if (!aiInputText.trim() || !currentPassage || isAiLoading) return;
    const userMsg = aiInputText.trim();
    setAiInputText('');

    const newMsgs = [
      ...aiChatMessages,
      {
        sender: 'user' as const,
        text: userMsg,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
    setAiChatMessages(newMsgs);
    setIsAiLoading(true);

    try {
      const aiReply = await askStoryTutorAI(
        currentPassage.title,
        currentPassage.paragraphs.join('\n\n'),
        currentPassage.targetVocab.map(v => v.word),
        userMsg,
        currentPassage.level
      );
      const combinedText = aiReply.answerUz ? `${aiReply.answer}\n\n🇺🇿 ${aiReply.answerUz}` : aiReply.answer;
      setAiChatMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: combinedText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      playSound('click');
    } catch {
      setAiChatMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: 'Kechirasiz, javob olishda vaqtinchalik xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsAiLoading(false);
      setTimeout(() => {
        chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // =========================================================================
  // RENDER INTERACTIVE PASSAGE WITH CLICKABLE TARGET WORDS
  // =========================================================================
  const renderedPassage = useMemo(() => {
    if (!currentPassage) return null;

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

      if (highlightFilter === 'all' || highlightFilter === 'words') {
        targetWords.forEach(tw => {
          if (!tw.word) return;
          // Match word boundaries or plurals/inflections
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
      }

      // Sort intervals: start asc, then longer length desc
      intervals.sort((a, b) => {
        if (a.start !== b.start) return a.start - b.start;
        return (b.end - b.start) - (a.end - a.start);
      });

      // Filter overlapping intervals
      const nonOverlapping: TextInterval[] = [];
      let lastEnd = 0;
      for (const match of intervals) {
        if (match.start >= lastEnd) {
          nonOverlapping.push(match);
          lastEnd = match.end;
        }
      }

      // Build elements
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
                      handlePronounceWord(token);
                      setClickedArbitraryWord({ word: token, context: para });
                      setSelectedVocab(null);
                    }}
                    className="cursor-pointer hover:text-sky-600 hover:bg-sky-50/90 rounded px-0.5 transition-colors"
                    title={`"${token}" so'zini tinglash va tahlil qilish`}
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

        const vocabItem = match.item;
        const isSelected = selectedVocab?.word.toLowerCase() === vocabItem.word.toLowerCase();

        elements.push(
          <button
            key={`vocab-${pIdx}-${mIdx}`}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedVocab(vocabItem);
              setShowVocabOverlay(true);
              setClickedArbitraryWord(null);
              playSound('click');
            }}
            className={`inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded-lg cursor-pointer transition-all duration-150 font-semibold text-left ${
              isSelected
                ? 'bg-sky-600 text-white shadow-xs ring-2 ring-sky-300 font-bold scale-105'
                : 'bg-sky-100 text-sky-900 hover:bg-sky-200 border-b-2 border-sky-400'
            }`}
            title={`Akademik so'z: ${vocabItem.word} — ${vocabItem.translationUz} (Talaffuz va ta'rifni ko'rish)`}
          >
            <span>{match.text}</span>
          </button>
        );

        cursor = match.end;
      });

      if (cursor < para.length) {
        elements.push(
          renderClickableSlice(para.slice(cursor), `txt-${pIdx}-${cursor}`)
        );
      }

      return (
        <p key={`p-${pIdx}`} className="mb-5 leading-relaxed text-slate-800">
          {elements}
        </p>
      );
    });
  }, [currentPassage, highlightFilter, selectedVocab, handlePronounceWord]);

  // Roadmap Stats
  const roadmapStats = useMemo(() => {
    let totalPassagesCount = 0;
    let completedCount = 0;
    let totalTargetWords = 0;

    REAL_WORLD_BOOKS.forEach(b => {
      b.units.forEach(u => {
        u.passages.forEach(p => {
          totalPassagesCount++;
          totalTargetWords += p.targetVocab.length;
          if (completedPassages[p.id]?.score >= 75) {
            completedCount++;
          }
        });
      });
    });

    return {
      totalPassagesCount,
      completedCount,
      totalTargetWords,
      progressPct: totalPassagesCount > 0 ? Math.round((completedCount / totalPassagesCount) * 100) : 0
    };
  }, [completedPassages]);

  // =========================================================================
  // VIEW 1: ROADMAP (UNIT EXPLORER)
  // =========================================================================
  if (viewMode === 'roadmap') {
    return (
      <div className="min-h-screen bg-slate-50/50 pb-16">
        {/* HERO BANNER */}
        <div className="bg-gradient-to-r from-sky-900 via-indigo-900 to-slate-900 text-white border-b border-sky-800/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs font-bold uppercase tracking-wider mb-3">
                  <Compass className="w-3.5 h-3.5 text-sky-300" />
                  <span>Compass Publishing 4th Edition • Essential English</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  Reading for the Real World
                </h1>
                <p className="mt-2 text-sm sm:text-base text-sky-100/90 max-w-3xl leading-relaxed">
                  Akademik fanlar (antropologiya, biotexnologiya, neyroiqtisodiyot, urbanistika) bo'yicha ilmiy-ommabop maqolalar va xalqaro <b>NAWL (New Academic Word List)</b> lug'atini tizimli o'zlashtiring.
                </p>
              </div>

              {/* Quick Overall Stats */}
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shrink-0">
                <div className="text-center">
                  <div className="text-2xl font-black text-amber-300">{roadmapStats.completedCount}/{roadmapStats.totalPassagesCount}</div>
                  <div className="text-[11px] text-sky-200 uppercase font-semibold">Tugatilgan</div>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-black text-emerald-300">{roadmapStats.progressPct}%</div>
                  <div className="text-[11px] text-sky-200 uppercase font-semibold">Progress</div>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-black text-sky-300">{roadmapStats.totalTargetWords}</div>
                  <div className="text-[11px] text-sky-200 uppercase font-semibold">NAWL Words</div>
                </div>
              </div>
            </div>

            {/* BOOK SELECTION TABS */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {REAL_WORLD_BOOKS.map((book) => {
                const isSelected = book.id === selectedBookId;
                return (
                  <button
                    key={book.id}
                    type="button"
                    onClick={() => handleSelectBook(book.id)}
                    className={`flex items-center gap-3 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-white text-slate-900 shadow-lg scale-102 ring-2 ring-sky-400'
                        : 'bg-white/10 text-sky-100 hover:bg-white/20'
                    }`}
                  >
                    <BookOpen className={`w-4 h-4 ${isSelected ? 'text-sky-600' : 'text-sky-300'}`} />
                    <div className="text-left">
                      <div className="leading-tight">Kitob {book.bookNumber}</div>
                      <div className={`text-[11px] font-semibold ${isSelected ? 'text-sky-700' : 'text-sky-200/80'}`}>
                        {book.targetLevel}
                      </div>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider ${
                      isSelected ? 'bg-sky-100 text-sky-800' : 'bg-white/10 text-white'
                    }`}>
                      {book.cefrLevel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ROADMAP CONTENT AREA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
          {/* SEARCH & FILTER BAR */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Mavzu, akademik so'z yoki o'zbekcha ma'no bo'yicha qidirish (masalan: superstition, urban, xurofot)..."
                className="w-full pl-11 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-sky-500 focus:outline-none text-sm transition"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 shrink-0">
              <span>Hozirgi kitob:</span>
              <span className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 border border-sky-200 font-bold">
                Kitob {currentBook.bookNumber} ({currentBook.units.length} ta Unit)
              </span>
            </div>
          </div>

          {/* SEARCH RESULTS DROPDOWN (IF ACTIVE) */}
          {searchQuery.trim() && (
            <div className="bg-white rounded-2xl p-6 border-2 border-sky-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Search className="w-4 h-4 text-sky-600" />
                  <span>Qidiruv natijalari ({searchResults.length})</span>
                </h3>
                <span className="text-xs text-slate-400 font-mono">"{searchQuery}" so'rovi bo'yicha</span>
              </div>

              {searchResults.length === 0 ? (
                <div className="py-6 text-center text-sm text-slate-500">
                  Hech qanday mos keluvchi akademik unit yoki so'z topilmadi.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {searchResults.map((res) => (
                    <div
                      key={res.id}
                      onClick={() => {
                        const targetBook = getRealWorldBookById(res.bookId);
                        if (targetBook) {
                          setSelectedBookId(targetBook.id);
                          const targetUnit = targetBook.units.find(u => u.id === res.unitId);
                          if (targetUnit) {
                            setSelectedUnitId(targetUnit.id);
                            const pIdx = targetUnit.passages.findIndex(p => p.id === res.passageId);
                            if (pIdx >= 0) {
                              setSelectedPassageId(targetUnit.passages[pIdx].id);
                            } else if (targetUnit.passages.length > 0) {
                              setSelectedPassageId(targetUnit.passages[0].id);
                            }
                            setViewMode('structured-unit');
                            playSound('click');
                          }
                        }
                      }}
                      className="p-3.5 rounded-xl border border-slate-200 hover:border-sky-500 hover:bg-sky-50/50 cursor-pointer transition flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] mb-1">
                          <span className="font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                            Kitob {res.bookNumber} • Unit {res.unitNumber}
                          </span>
                          <span className="text-[10px] font-bold text-slate-500 uppercase">{res.badge}</span>
                        </div>
                        <div className="font-bold text-slate-900 text-sm">{res.title}</div>
                        <div className="text-xs text-slate-600 mt-1 line-clamp-2">{res.matchSnippet}</div>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-xs text-sky-600 font-bold">
                        <span>O'qishni boshlash</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* BOOK HEADER INFO */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                {currentBook.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {currentBook.descriptionUz}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Mavzular to'plami:</span>
              <span className="text-xs font-black text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
                {currentBook.units.length} ta Katta Mavzu
              </span>
            </div>
          </div>

          {/* UNIT CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentBook.units.map((unit) => {
              // Check completion
              const completedCountInUnit = unit.passages.filter(
                p => completedPassages[p.id]?.score >= 75
              ).length;
              const isUnitFullyCompleted = completedCountInUnit === unit.passages.length && unit.passages.length > 0;
              const allTargetWords = unit.passages.flatMap(p => p.targetVocab);

              return (
                <div
                  key={unit.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Unit header badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-sky-100 text-sky-900 border border-sky-200">
                          Unit {unit.unitNumber}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          {unit.subjectArea}
                        </span>
                      </div>

                      {isUnitFullyCompleted ? (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Tugatildi</span>
                        </span>
                      ) : completedCountInUnit > 0 ? (
                        <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                          {completedCountInUnit}/{unit.passages.length} tugatildi
                        </span>
                      ) : null}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-sky-600 transition tracking-tight">
                      {unit.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {unit.themeDescriptionUz}
                    </p>

                    {/* Passages List preview */}
                    <div className="mt-4 space-y-2 pt-3 border-t border-slate-100">
                      {unit.passages.map((p, pIdx) => {
                        const isPassageDone = completedPassages[p.id]?.score >= 75;
                        return (
                          <div
                            key={p.id}
                            onClick={() => {
                              setSelectedUnitId(unit.id);
                              setSelectedPassageId(p.id);
                              setViewMode('structured-unit');
                            }}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-100 hover:border-indigo-200 transition cursor-pointer text-xs group/p"
                          >
                            <div className="flex items-center gap-2 min-w-0 pr-2">
                              <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 group-hover/p:border-indigo-300 flex items-center justify-center font-black text-[11px] text-slate-700 shrink-0">
                                {p.passageNumber}
                              </span>
                              <span className="font-semibold text-slate-800 group-hover/p:text-indigo-950 truncate">
                                {p.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0 text-[11px] text-slate-400">
                              <span>{p.wordCount}w</span>
                              {isPassageDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-slate-400 group-hover/p:text-indigo-600" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Vocab preview pills with Uzbek translations & instant popup */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        <span>Asosiy akademik so'zlar:</span>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedUnitId(unit.id);
                            setVocabModalUnit(unit);
                            playSound('click');
                          }}
                          className="text-indigo-600 hover:text-indigo-800 normal-case font-semibold text-[11px] flex items-center gap-1 cursor-pointer transition"
                        >
                          <Languages className="w-3 h-3" />
                          <span>Tarjimalar ({allTargetWords.length})</span>
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {allTargetWords.slice(0, 5).map(tw => (
                          <button
                            key={tw.word}
                            type="button"
                            onClick={() => {
                              setSelectedUnitId(unit.id);
                              if (unit.passages.length > 0) {
                                setSelectedPassageId(unit.passages[0].id);
                              }
                              setSelectedVocab(tw);
                              setShowVocabOverlay(true);
                              playSound('click');
                            }}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-indigo-50/70 hover:bg-indigo-100 text-indigo-950 hover:text-indigo-900 border border-indigo-200/60 font-medium transition flex items-center gap-1 cursor-pointer group/vb shadow-2xs"
                            title={`${tw.word}: ${tw.translationUz} — Tarjima, talaffuz va ta'rifni ko'rish`}
                          >
                            <span className="font-mono font-semibold">{tw.word}</span>
                            <span className="text-[10px] text-indigo-600 font-normal opacity-80 group-hover/vb:opacity-100">
                              ({tw.translationUz})
                            </span>
                          </button>
                        ))}
                        {allTargetWords.length > 5 && (
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedUnitId(unit.id);
                              setVocabModalUnit(unit);
                              playSound('click');
                            }}
                            className="text-[10px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-700 font-bold self-center cursor-pointer transition"
                            title="Barcha so'zlarning tarjimasini ko'rish"
                          >
                            +{allTargetWords.length - 5} ta
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Only Kitob Darsi & Unit Lug'ati */}
                  <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedUnitId(unit.id);
                        if (unit.passages.length > 0) {
                          setSelectedPassageId(unit.passages[0].id);
                        }
                        setViewMode('structured-unit');
                        playSound('click');
                      }}
                      className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs transition flex items-center justify-center gap-2 shadow-sm cursor-pointer group/btn"
                      title="Kitobdagi asli dars: Matn o'qish, mashqlar va test"
                    >
                      <BookOpen className="w-4 h-4 text-amber-300" />
                      <span>Kitob Darsini Boshlash</span>
                      <ChevronRight className="w-4 h-4 text-indigo-200 group-hover/btn:translate-x-0.5 transition" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedUnitId(unit.id);
                        setVocabModalUnit(unit);
                        playSound('click');
                      }}
                      className="py-3 px-3.5 rounded-xl bg-white hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 border border-slate-200 hover:border-indigo-300 font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0 shadow-2xs"
                      title="Unitdagi barcha so'zlar va tarjimalarni ko'rish"
                    >
                      <Languages className="w-4 h-4 text-indigo-600" />
                      <span className="hidden sm:inline">Lug'atlar</span>
                      <span className="px-1.5 py-0.2 rounded bg-indigo-50 text-indigo-700 font-mono text-[10px]">
                        {allTargetWords.length}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* UNIT VOCABULARY & TRANSLATION MODAL */}
        {vocabModalUnit && (
          <UnitVocabularyModal
            unit={vocabModalUnit}
            isOpen={!!vocabModalUnit}
            onClose={() => setVocabModalUnit(null)}
            onSelectWord={(vocab) => {
              setSelectedVocab(vocab);
              setShowVocabOverlay(true);
            }}
            onOpenKitobDarsi={(passageId) => {
              setSelectedUnitId(vocabModalUnit.id);
              if (passageId) {
                setSelectedPassageId(passageId);
              } else if (vocabModalUnit.passages.length > 0) {
                setSelectedPassageId(vocabModalUnit.passages[0].id);
              }
              setVocabModalUnit(null);
              setViewMode('structured-unit');
            }}
            addedWords={new Set(Array.from(addedWordKeys).map(k => k.split('-')[1]?.toLowerCase() || ''))}
            onSaveWord={(v) => handleAddWordToSRS(v)}
          />
        )}

        {/* VOCABULARY OVERLAY CARD FROM ROADMAP */}
        {showVocabOverlay && selectedVocab && (
          <VocabularyOverlayCard
            vocab={selectedVocab}
            allPassageVocab={currentPassage?.targetVocab || []}
            passageParagraphs={currentPassage?.paragraphs || []}
            passageTitle={currentPassage?.title}
            theme="paper"
            isSaved={currentPassage ? addedWordKeys.has(`${currentPassage.id}-${selectedVocab.word}`) : false}
            onClose={() => setShowVocabOverlay(false)}
            onSelectVocab={(v) => setSelectedVocab(v)}
            onSaveToMyVocab={(v) => handleAddWordToSRS(v)}
          />
        )}
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: STRUCTURED UNIT STUDY (Interactive Pop-ups, Synonyms & Quizzes)
  // =========================================================================
  if (viewMode === 'structured-unit') {
    return (
      <RealWorldUnitStudy
        book={currentBook}
        unit={currentUnit}
        initialPassageIndex={currentPassage.passageNumber === 2 ? 1 : 0}
        onCompletePassage={(pId, score) => {
          saveProgress(pId, score);
        }}
        onBackToRoadmap={() => setViewMode('roadmap')}
      />
    );
  }

  // =========================================================================
  // VIEW 3: ACTIVE READER (Studio Mode)
  // =========================================================================
  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* TOP READER HEADER BAR */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Left: Back & Unit Info */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  stopAudio();
                  setViewMode('roadmap');
                }}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                title="Barcha unitlar xaritasiga qaytish"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Barcha Unitlar</span>
              </button>

              <div className="h-6 w-px bg-slate-200 hidden sm:block" />

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                    Kitob {currentBook.bookNumber} • Unit {currentUnit.unitNumber}
                  </span>
                  <span className="text-[10px] font-black uppercase text-slate-400 hidden sm:inline">
                    {currentUnit.subjectArea}
                  </span>
                </div>
                <h1 className="text-base sm:text-lg font-black text-slate-900 truncate max-w-xs sm:max-w-md">
                  {currentUnit.title}
                </h1>
              </div>
            </div>

            {/* Middle: Unit Jump Controls */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrevUnit}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                title="Oldingi unit"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <select
                value={selectedUnitId}
                onChange={(e) => {
                  const targetUnit = currentBook.units.find(u => u.id === e.target.value);
                  if (targetUnit) handleOpenUnitInReader(targetUnit);
                }}
                className="text-xs font-bold py-1.5 px-3 rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:border-sky-500 cursor-pointer"
              >
                {currentBook.units.map(u => (
                  <option key={u.id} value={u.id}>
                    Unit {u.unitNumber}: {u.title}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={handleNextUnit}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                title="Keyingi unit"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Audio Player & Reading Timer */}
            <div className="flex items-center gap-3">
              {/* Reading Timer & WPM */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-mono font-bold">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>
                  {Math.floor(readingSeconds / 60)}:{String(readingSeconds % 60).padStart(2, '0')}
                </span>
                {wordsPerMinute > 0 && (
                  <span className="text-[11px] text-sky-700 font-sans font-bold bg-sky-100/80 px-1.5 py-0.5 rounded">
                    {wordsPerMinute} WPM
                  </span>
                )}
              </div>

              {/* Audio Listen Button */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={togglePlayAudio}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    isPlayingAudio
                      ? 'bg-rose-600 text-white shadow-xs animate-pulse'
                      : 'bg-sky-600 text-white hover:bg-sky-700 shadow-xs'
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
                  onChange={(e) => {
                    const spd = parseFloat(e.target.value);
                    setPlaybackSpeed(spd);
                    if (isPlayingAudio) {
                      stopAudio();
                    }
                  }}
                  className="text-[11px] font-bold py-1 px-1.5 rounded-lg bg-transparent text-slate-700 focus:outline-none cursor-pointer"
                >
                  <option value={0.8}>0.8x</option>
                  <option value={1.0}>1.0x</option>
                  <option value={1.2}>1.2x</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => {
                  stopAudio();
                  setViewMode('structured-unit');
                }}
                className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                title="Klassik kitob darsi: Asl mashqlar va ko'zni charchatmaslik rejimi"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Kitob Darsi</span>
              </button>
            </div>
          </div>

          {/* PASSAGE 1 / 2 SWITCHER PILLS */}
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-bold uppercase">Maqola tanlash:</span>
              {currentUnit.passages.map((p) => {
                const isSelected = p.id === selectedPassageId;
                const isDone = completedPassages[p.id]?.score >= 75;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleSelectPassage(p)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-sky-600 text-white shadow-xs ring-2 ring-sky-300'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span>Part {p.passageNumber}: {p.title}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white text-slate-500'
                    }`}>
                      {p.wordCount}w
                    </span>
                    {isDone && <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setViewMode('structured-unit')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs transition cursor-pointer border border-indigo-200"
                title="Pop-uplar, Sinonim moslashtirish va Quiz bitta to'liq interfeysda"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>Strukturali Unit Rejimi</span>
              </button>

              {completedPassages[currentPassage.id]?.score !== undefined && (
                <div className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Quiz: {completedPassages[currentPassage.id].score}%</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN READER CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        {/* TABS NAVIGATION */}
        <div className="flex items-center border-b border-slate-200 bg-white rounded-2xl px-3 pt-2 shadow-2xs overflow-x-auto gap-2">
          <button
            type="button"
            onClick={() => setReaderTab('story')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              readerTab === 'story'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Matn Mutolaasi ({currentPassage.wordCount}w)</span>
          </button>

          <button
            type="button"
            onClick={() => setReaderTab('words')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              readerTab === 'words'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>2. NAWL Akademik Lug'at ({currentPassage.targetVocab.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setReaderTab('synonyms')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              readerTab === 'synonyms'
                ? 'border-indigo-600 text-indigo-700 bg-indigo-50/50'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Shuffle className="w-4 h-4 text-indigo-600" />
            <span>3. Sinonim Moslashtirish (Synonym Match)</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-indigo-100 text-indigo-800 font-black">
              {synonymPairs.length} juftlik
            </span>
          </button>

          <button
            type="button"
            onClick={() => setReaderTab('pronunciation')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              readerTab === 'pronunciation'
                ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Mic className="w-4 h-4 text-emerald-600" />
            <span>4. Talaffuz (AI Voice)</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 font-black">
              Phonetics
            </span>
          </button>

          <button
            type="button"
            onClick={() => setReaderTab('organizer')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              readerTab === 'organizer'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <GitBranch className="w-4 h-4 text-indigo-600" />
            <span>5. Grafik Tahlil</span>
          </button>

          <button
            type="button"
            onClick={() => setReaderTab('quiz')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              readerTab === 'quiz'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-amber-500" />
            <span>6. Tushunish Testi (Quiz)</span>
            {quizSubmitted && (
              <span className="text-[10px] px-1.5 py-0.5 rounded font-black bg-emerald-100 text-emerald-800">
                {quizScore}%
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setReaderTab('discussion')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              readerTab === 'discussion'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-purple-600" />
            <span>7. Munozara</span>
          </button>

          <button
            type="button"
            onClick={() => setReaderTab('ai-tutor')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              readerTab === 'ai-tutor'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>8. AI Reading Tutor (Gemini)</span>
          </button>
        </div>

        {/* ================================================================= */}
        {/* TAB 1: PASSAGE READING & WORD INSPECTOR                           */}
        {/* ================================================================= */}
        {readerTab === 'story' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Passage Text */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs relative">
                {/* Text Controls Bar */}
                <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-3">
                  {/* Font Size */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-slate-400 font-semibold">Shrift hajmi:</span>
                    {(['sm', 'base', 'lg', 'xl'] as const).map(size => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFontSize(size)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                          fontSize === size
                            ? 'bg-sky-600 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {size.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  {/* Highlight Filter */}
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                    <span className="text-[10px] text-slate-400 font-bold px-1 uppercase">
                      Ajratib ko'rsatish:
                    </span>
                    <button
                      type="button"
                      onClick={() => setHighlightFilter('all')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                        highlightFilter === 'all'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Barchasi
                    </button>
                    <button
                      type="button"
                      onClick={() => setHighlightFilter('words')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                        highlightFilter === 'words'
                          ? 'bg-sky-600 text-white shadow-xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      NAWL So'zlar
                    </button>
                    <button
                      type="button"
                      onClick={() => setHighlightFilter('plain')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                        highlightFilter === 'plain'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Oddiy
                    </button>
                  </div>
                </div>

                {/* Pre-Reading Warmup Banner */}
                {currentPassage.preReadingQuestions && currentPassage.preReadingQuestions.length > 0 && (
                  <div className="mb-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950">
                    <div className="flex items-center gap-2 font-black text-amber-900 uppercase tracking-wider mb-2">
                      <Lightbulb className="w-4 h-4 text-amber-600" />
                      <span>Pre-Reading Warmup Questions (O'qishdan oldin o'ylab ko'ring)</span>
                    </div>
                    <ul className="space-y-1 list-disc list-inside">
                      {currentPassage.preReadingQuestions.map((q, qIdx) => (
                        <li key={qIdx} className="leading-relaxed font-medium">
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Passage Title */}
                <div className="mb-6">
                  <div className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                    Reading {currentPassage.passageNumber} • {currentPassage.themeCategory}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                    {currentPassage.title}
                  </h2>
                  {currentPassage.subtitle && (
                    <p className="text-sm font-medium text-slate-500 mt-1.5 italic">
                      {currentPassage.subtitle}
                    </p>
                  )}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 bg-slate-50 p-2 rounded-xl mb-4">
                  <span className="flex items-center gap-1.5 font-medium text-sky-900">
                    <span className="w-2.5 h-2.5 rounded bg-sky-500 inline-block" />
                    <span>Moviy belgi: Akademik maqsadli so'zlar (NAWL)</span>
                  </span>
                  <span className="italic">Istalgan so'z ustiga bosing</span>
                </div>

                {/* Formatted Passage Body */}
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

                {/* Uzbek Summary Accordion */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowUzbekSummary(!showUzbekSummary)}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <BookmarkCheck className="w-4 h-4 text-sky-600" />
                      <span className="text-xs font-bold text-slate-800">
                        O'zbekcha qisqacha mazmuni (Summary in Uzbek)
                      </span>
                    </div>
                    <span className="text-xs font-bold text-sky-600">
                      {showUzbekSummary ? 'Yopish ▲' : 'Ko\'rish ▼'}
                    </span>
                  </button>

                  {showUzbekSummary && (
                    <div className="mt-3 p-4 rounded-xl bg-sky-50/70 border border-sky-100 text-xs text-slate-700 leading-relaxed">
                      {currentPassage.summaryUz}
                    </div>
                  )}
                </div>

                {/* Footer Action Button */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                  <div className="text-xs text-slate-400">
                    Matnni o'qib bo'ldingizmi? Tushunish testini topshiring yoki yangi so'zlarni mashq qiling.
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setReaderTab('words')}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition cursor-pointer"
                    >
                      So'zlarni Ko'rish
                    </button>
                    <button
                      type="button"
                      onClick={() => setReaderTab('quiz')}
                      className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <span>Quizni Topshirish</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dual Inspector (Selected Word or Quick Pronounce) */}
            <div className="lg:col-span-4 space-y-4">
              {selectedVocab ? (
                <div className="bg-white rounded-2xl p-6 border-2 border-sky-400 shadow-sm space-y-4 sticky top-24">
                  <div className="flex items-center justify-between pb-3 border-b border-sky-100">
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-300">
                      NAWL Target Word
                    </span>
                    <button
                      type="button"
                      onClick={() => handlePronounceWord(selectedVocab.word)}
                      className="p-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 transition cursor-pointer"
                      title="Talaffuzni tinglash"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                        {selectedVocab.word}
                      </h3>
                      <span className="text-xs font-semibold text-slate-400 italic">
                        {selectedVocab.pos}
                      </span>
                    </div>
                    {selectedVocab.phonetic && (
                      <div className="text-xs font-mono text-sky-700 font-semibold mt-0.5">
                        {selectedVocab.phonetic}
                      </div>
                    )}
                    <div className="mt-2 text-sm font-bold text-sky-900 bg-sky-50/80 p-2.5 rounded-xl border border-sky-100">
                      {selectedVocab.translationUz}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
                    <div className="font-bold text-slate-900 mb-1">English Definition:</div>
                    {selectedVocab.definitionEn}
                  </div>

                  {selectedVocab.synonym && (
                    <div className="p-3 rounded-xl bg-indigo-50/80 border border-indigo-200/80 text-xs text-indigo-950 leading-relaxed">
                      <div className="font-bold text-indigo-900 mb-1 flex items-center justify-between">
                        <span>Kontekstual Sinonimi:</span>
                        <button
                          type="button"
                          onClick={() => handlePronounceWord(selectedVocab.synonym!)}
                          className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
                          title="Sinonim talaffuzi"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-sm font-black text-indigo-950">
                        {selectedVocab.synonym}
                      </div>
                    </div>
                  )}

                  {selectedVocab.collocation && (
                    <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-950 leading-relaxed">
                      <div className="font-bold text-amber-900 mb-1">Academic Collocation:</div>
                      "{selectedVocab.collocation}"
                    </div>
                  )}

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
                    <div className="font-bold text-slate-900 mb-1">In Passage Context:</div>
                    "{selectedVocab.sampleSentence}"
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAddWordToSRS(selectedVocab)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                      addedWordKeys.has(`${currentPassage.id}-${selectedVocab.word}`)
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs'
                    }`}
                  >
                    {addedWordKeys.has(`${currentPassage.id}-${selectedVocab.word}`) ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>SRS Lug'atiga Qo'shildi</span>
                      </>
                    ) : (
                      <>
                        <BookmarkCheck className="w-4 h-4 text-amber-400" />
                        <span>+ Kunlik Lug'atimga Saqlash (SRS)</span>
                      </>
                    )}
                  </button>
                </div>
              ) : clickedArbitraryWord ? (
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4 sticky top-24">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      Word Inspector
                    </span>
                    <button
                      type="button"
                      onClick={() => handlePronounceWord(clickedArbitraryWord.word)}
                      className="p-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 transition cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      "{clickedArbitraryWord.word}"
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Ushbu so'z matndan tanlandi. Siz uni AI repetitoridan so'rashingiz mumkin.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setReaderTab('ai-tutor');
                      setAiInputText(`"${clickedArbitraryWord.word}" so'zining ushbu kontekstdagi aniq ma'nosi, o'zbekcha tarjimasi va qo'llanishiga misollar bering.`);
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>AI dan Ma'nosini So'rash</span>
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs text-center space-y-3 sticky top-24">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm">
                    Interaktiv Lug'at Paneli
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Matndagi har qanday ajratilgan akademik so'z ustiga bosing — bu yerda uning to'liq transkripsiyasi, ma'nosi, kollokatsiyasi va o'zbekcha tarjimasi ko'rinadi.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 2: TARGET VOCABULARY (FLASHCARDS & GRID VIEW)                 */}
        {/* ================================================================= */}
        {readerTab === 'words' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Target Academic Vocabulary (NAWL)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Ushbu darsdagi barcha {currentPassage.targetVocab.length} ta muhim akademik so'zlarni interaktiv kartochkalar orqali yodlang.
                </p>
              </div>

              {/* View Switcher */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setVocabViewMode('flashcards')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    vocabViewMode === 'flashcards'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Flashcard Rejimi
                </button>
                <button
                  type="button"
                  onClick={() => setVocabViewMode('grid')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    vocabViewMode === 'grid'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  To'liq Ro'yxat
                </button>
              </div>
            </div>

            {/* MODE A: FLASHCARDS */}
            {vocabViewMode === 'flashcards' && (
              <div className="max-w-xl mx-auto space-y-4">
                {currentPassage.targetVocab[vocabCardIndex] && (() => {
                  const cardWord = currentPassage.targetVocab[vocabCardIndex];
                  const wordKey = `${currentPassage.id}-${cardWord.word}`;
                  const isSaved = addedWordKeys.has(wordKey);

                  return (
                    <div
                      onClick={() => setIsFlipped(!isFlipped)}
                      className="min-h-[300px] bg-white rounded-3xl p-8 border-2 border-sky-200 shadow-lg cursor-pointer flex flex-col justify-between transition-all hover:border-sky-400 select-none relative"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400">
                          Karta {vocabCardIndex + 1} / {currentPassage.targetVocab.length}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePronounceWord(cardWord.word);
                            }}
                            className="p-2 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-100 transition"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="text-center py-6">
                        {!isFlipped ? (
                          <>
                            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                              {cardWord.word}
                            </h2>
                            <div className="text-sm font-mono text-sky-600 font-bold mt-2">
                              {cardWord.phonetic || ''} • <span className="italic text-slate-400">{cardWord.pos}</span>
                            </div>
                            <div className="text-xs text-slate-400 mt-6 italic">
                              Tarjimasini ko'rish uchun kartani bosing ↺
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-2xl font-black text-sky-900">
                              {cardWord.translationUz}
                            </div>
                            <div className="text-xs text-slate-600 mt-3 max-w-md mx-auto leading-relaxed">
                              {cardWord.definitionEn}
                            </div>
                            {cardWord.collocation && (
                              <div className="mt-3 text-xs font-bold text-amber-800 bg-amber-50 py-1.5 px-3 rounded-xl inline-block">
                                Collocation: "{cardWord.collocation}"
                              </div>
                            )}
                          </>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddWordToSRS(cardWord);
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                            isSaved ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          {isSaved ? <Check className="w-3.5 h-3.5" /> : <BookmarkCheck className="w-3.5 h-3.5 text-amber-500" />}
                          <span>{isSaved ? 'Saqlangan' : '+ SRS Lug\'atiga'}</span>
                        </button>
                        <span className="text-[11px] text-slate-400">
                          Aylantirish uchun bosing
                        </span>
                      </div>
                    </div>
                  );
                })()}

                {/* Card Controls */}
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setIsFlipped(false);
                      setVocabCardIndex(prev => Math.max(0, prev - 1));
                    }}
                    disabled={vocabCardIndex === 0}
                    className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold disabled:opacity-40 transition flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Oldingi</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    {currentPassage.targetVocab.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === vocabCardIndex ? 'w-6 bg-sky-600' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsFlipped(false);
                      setVocabCardIndex(prev => Math.min(currentPassage.targetVocab.length - 1, prev + 1));
                    }}
                    disabled={vocabCardIndex === currentPassage.targetVocab.length - 1}
                    className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold disabled:opacity-40 transition flex items-center gap-1 cursor-pointer"
                  >
                    <span>Keyingi</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* MODE B: GRID VIEW */}
            {vocabViewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentPassage.targetVocab.map((tw) => {
                  const wordKey = `${currentPassage.id}-${tw.word}`;
                  const isSaved = addedWordKeys.has(wordKey);

                  return (
                    <div
                      key={tw.word}
                      className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-sky-300 transition flex flex-col justify-between space-y-3"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-baseline gap-2">
                            <h4 className="text-lg font-black text-slate-900">{tw.word}</h4>
                            <span className="text-xs font-semibold text-slate-400 italic">{tw.pos}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handlePronounceWord(tw.word)}
                            className="p-1.5 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 transition cursor-pointer"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        {tw.phonetic && (
                          <div className="text-xs font-mono text-sky-700 font-semibold mt-0.5">
                            {tw.phonetic}
                          </div>
                        )}

                        <div className="mt-2 text-xs font-bold text-sky-900 bg-sky-50/70 p-2 rounded-lg">
                          {tw.translationUz}
                        </div>

                        <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                          {tw.definitionEn}
                        </p>

                        {tw.collocation && (
                          <div className="mt-2 text-[11px] font-semibold text-amber-900 bg-amber-50 p-1.5 rounded-lg">
                            Collocation: <span className="font-bold">"{tw.collocation}"</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => handleAddWordToSRS(tw)}
                          className={`w-full py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                            isSaved ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                          }`}
                        >
                          {isSaved ? <Check className="w-3.5 h-3.5" /> : <BookmarkCheck className="w-3.5 h-3.5 text-amber-500" />}
                          <span>{isSaved ? 'Lug\'atga saqlangan' : '+ SRS Lug\'atiga qo\'shish'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB: SYNONYM MATCHING LAB                                         */}
        {/* ================================================================= */}
        {readerTab === 'synonyms' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-2">
                    <Shuffle className="w-3.5 h-3.5" />
                    <span>Akademik Sinonimlar Laboratoriyasi</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    So'zlarni Ularning Kontekstual Sinonimlari Bilan Moslashtiring
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Chap ustundagi so'z ustiga bosing, so'ng o'ng ustundagi unga mos sinonimni tanlang. Har bir to'g'ri juftlik uchun ball va XP olasiz!
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-center px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-100">
                    <div className="text-xl font-black text-indigo-700">{matchedWordsSet.size}/{synonymPairs.length}</div>
                    <div className="text-[10px] text-indigo-500 uppercase font-bold">Moslashtirildi</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedMatchWord(null);
                      setSelectedMatchSynonym(null);
                      setMatchedWordsSet(new Set());
                      setWrongMatchAttempt(null);
                      setIsMatchingComplete(false);
                      const syns = synonymPairs.map(p => p.synonym);
                      setShuffledSynonymsList([...syns].sort(() => Math.random() - 0.5));
                      playSound('click');
                    }}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
                    title="Qayta boshlash"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Completion Banner */}
              {isMatchingComplete && (
                <div className="my-6 p-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-black">Tabriklaymiz! Barcha sinonimlar to'g'ri topildi!</h4>
                  <p className="text-xs sm:text-sm text-emerald-100 max-w-md mx-auto">
                    Siz barcha {synonymPairs.length} ta akademik so'z va ularning sinonimlarini to'liq o'zlashtirdingiz. Sizga +50 XP berildi!
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setReaderTab('quiz')}
                      className="px-5 py-2.5 rounded-xl bg-white text-emerald-800 font-black text-xs hover:bg-emerald-50 transition shadow-xs cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>Keyingi bosqich: Tushunish Testi (Quiz)</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* TWO COLUMNS MATCHING GRID */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Column 1: Academic Words */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
                    <span>1. Akademik So'z (Passage Word)</span>
                    <span>Tanlang</span>
                  </div>

                  <div className="space-y-2.5">
                    {synonymPairs.map((pair) => {
                      const isMatched = matchedWordsSet.has(pair.word);
                      const isSelected = selectedMatchWord === pair.word;
                      const isWrong = wrongMatchAttempt?.word === pair.word;

                      return (
                        <button
                          key={pair.word}
                          type="button"
                          disabled={isMatched}
                          onClick={() => handleSynonymWordClick(pair.word)}
                          className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                            isMatched
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-900 opacity-80 cursor-default'
                              : isWrong
                              ? 'bg-rose-50 border-rose-400 text-rose-900 ring-2 ring-rose-300'
                              : isSelected
                              ? 'bg-indigo-600 border-indigo-600 text-white shadow-md ring-4 ring-indigo-200 font-bold scale-102'
                              : 'bg-white border-slate-200 text-slate-800 hover:border-indigo-300 hover:bg-indigo-50/40 shadow-2xs'
                          }`}
                        >
                          <div>
                            <div className="text-sm font-black flex items-center gap-2">
                              <span>{pair.word}</span>
                              {pair.translationUz && (
                                <span className={`text-xs font-normal ${isSelected ? 'text-indigo-200' : 'text-slate-400'}`}>
                                  ({pair.translationUz})
                                </span>
                              )}
                            </div>
                            {pair.definitionEn && (
                              <div className={`text-[11px] mt-0.5 line-clamp-1 ${isSelected ? 'text-indigo-100' : 'text-slate-500'}`}>
                                {pair.definitionEn}
                              </div>
                            )}
                          </div>

                          <div className="shrink-0 ml-3">
                            {isMatched ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            ) : (
                              <div className={`w-3.5 h-3.5 rounded-full border ${isSelected ? 'bg-white border-white' : 'border-slate-300'}`} />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Column 2: Contextual Synonyms */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
                    <span>2. Kontekstual Sinonim (Synonym)</span>
                    <span>Juftlang</span>
                  </div>

                  <div className="space-y-2.5">
                    {shuffledSynonymsList.map((synonym, sIdx) => {
                      const matchedWordForThis = Array.from(matchedWordsSet).find(w => {
                        const p = synonymPairs.find(item => item.word === w);
                        return p?.synonym === synonym;
                      });
                      const isMatched = !!matchedWordForThis;
                      const isSelected = selectedMatchSynonym === synonym;
                      const isWrong = wrongMatchAttempt?.synonym === synonym;

                      return (
                        <button
                          key={`${synonym}-${sIdx}`}
                          type="button"
                          disabled={isMatched}
                          onClick={() => handleSynonymItemClick(synonym)}
                          className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                            isMatched
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-900 opacity-80 cursor-default'
                              : isWrong
                              ? 'bg-rose-50 border-rose-400 text-rose-900 ring-2 ring-rose-300'
                              : isSelected
                              ? 'bg-indigo-600 border-indigo-600 text-white shadow-md ring-4 ring-indigo-200 font-bold scale-102'
                              : 'bg-white border-slate-200 text-slate-800 hover:border-indigo-300 hover:bg-indigo-50/40 shadow-2xs'
                          }`}
                        >
                          <div>
                            <div className="text-sm font-black flex items-center gap-2">
                              <span>{synonym}</span>
                              {isMatched && (
                                <span className="text-xs font-medium text-emerald-700">
                                  ↔ {matchedWordForThis}
                                </span>
                              )}
                            </div>
                            <div className={`text-[11px] mt-0.5 ${isSelected ? 'text-indigo-100' : 'text-slate-400'}`}>
                              Sinonimik muqobil
                            </div>
                          </div>

                          <div className="shrink-0 ml-3">
                            {isMatched ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            ) : (
                              <div className={`w-3.5 h-3.5 rounded-full border ${isSelected ? 'bg-white border-white' : 'border-slate-300'}`} />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 3: PRONUNCIATION LAB (AI SPEECH RECOGNITION & PHONETICS)       */}
        {/* ================================================================= */}
        {readerTab === 'pronunciation' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
            <WordPronunciationPractice
              words={currentPassage.targetVocab.map(tw => ({
                word: tw.word,
                phonetic: tw.phonetic,
                pos: tw.pos,
                definition: tw.definitionEn,
                translationUz: tw.translationUz,
                example: tw.sampleSentence
              }))}
              title={`Book ${currentBook.bookNumber} • Unit ${currentUnit.unitNumber} Pronunciation Lab`}
              subtitle={`Story: "${currentPassage.title}" • Practice speaking and master American phonetics for all ${currentPassage.targetVocab.length} target words`}
              sourceType="reading_curriculum"
              sourceId={currentPassage.id}
            />
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 4: GRAPHIC ORGANIZER (VISUAL ANALYSIS)                        */}
        {/* ================================================================= */}
        {readerTab === 'organizer' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase mb-1">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>{currentPassage.graphicOrganizer.organizerType.replace('-', ' ')} Structure</span>
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  {currentPassage.graphicOrganizer.title}
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Visual Concept Map
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPassage.graphicOrganizer.sections.map((sec, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-black text-xs mb-2">
                      {sIdx + 1}
                    </div>
                    <h4 className="font-black text-slate-900 text-sm">
                      {sec.heading}
                    </h4>
                    <ul className="mt-3 space-y-2 text-xs text-slate-700">
                      {sec.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs text-sky-950 flex items-center gap-3">
              <Lightbulb className="w-5 h-5 text-sky-600 shrink-0" />
              <span>
                <b>Foydali tavsiya:</b> Grafik organizer matnning asosiy sabab-oqibat yoki taqqoslash zanjirini xotirada mustahkamlaydi. TOEFL va IELTS akademik reading savollariga javob berishda matn strukturasini tasavvur qilish juda qo'l keladi.
              </span>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 5: COMPREHENSION QUIZ (TEST & SCORING)                        */}
        {/* ================================================================= */}
        {readerTab === 'quiz' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Comprehension Quiz (Tushunish Testi)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Har bir savol bo'yicha to'g'ri javobni belgilang va yakunida tahlilni ko'ring.
                </p>
              </div>

              {quizSubmitted && (
                <div className={`px-4 py-2 rounded-xl text-sm font-black flex items-center gap-2 ${
                  quizScore >= 75 ? 'bg-emerald-100 text-emerald-900' : 'bg-amber-100 text-amber-900'
                }`}>
                  <Award className="w-4 h-4" />
                  <span>Natija: {quizScore}%</span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {currentPassage.comprehensionQuiz.map((q, qIdx) => {
                const selectedOption = userAnswers[q.id];
                const isAnswered = selectedOption !== undefined;

                return (
                  <div
                    key={q.id}
                    className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-sky-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                          {qIdx + 1}
                        </span>
                        <span className="text-xs font-bold text-sky-800 bg-sky-100/80 px-2 py-0.5 rounded uppercase">
                          {q.type.replace('_', ' ')}
                        </span>
                      </div>

                      {quizSubmitted && (
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                          selectedOption === q.correctIndex
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}>
                          {selectedOption === q.correctIndex ? 'To\'g\'ri' : 'Noto\'g\'ri'}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {q.question}
                    </h4>

                    {/* Options List */}
                    <div className="space-y-2">
                      {q.options.map((opt, oIdx) => {
                        const isChosen = selectedOption === oIdx;
                        const isCorrectAnswer = oIdx === q.correctIndex;

                        let optionStyle = 'bg-white border-slate-200 text-slate-800 hover:border-sky-300';
                        if (quizSubmitted) {
                          if (isCorrectAnswer) {
                            optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-200';
                          } else if (isChosen && !isCorrectAnswer) {
                            optionStyle = 'bg-rose-50 border-rose-400 text-rose-950 line-through';
                          }
                        } else if (isChosen) {
                          optionStyle = 'bg-sky-50 border-sky-600 text-sky-950 font-bold ring-2 ring-sky-200';
                        }

                        return (
                          <div
                            key={oIdx}
                            onClick={() => handleAnswerSelect(q.id, oIdx)}
                            className={`p-3.5 rounded-xl border transition cursor-pointer flex items-center gap-3 text-xs sm:text-sm ${optionStyle}`}
                          >
                            <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center font-bold text-xs shrink-0">
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span className="flex-1 leading-relaxed">{opt}</span>
                            {quizSubmitted && isCorrectAnswer && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Uzbek Explanation after submit */}
                    {quizSubmitted && q.explanationUz && (
                      <div className="p-3.5 rounded-xl bg-sky-50/80 border border-sky-200 text-xs text-slate-700 leading-relaxed space-y-1">
                        <div className="font-bold text-sky-900 flex items-center gap-1.5">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                          <span>O'zbekcha izoh va tushuntirish:</span>
                        </div>
                        <div>{q.explanationUz}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quiz Submit & Retake Action */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
              {!quizSubmitted ? (
                <button
                  type="button"
                  onClick={handleQuizSubmit}
                  disabled={Object.keys(userAnswers).length < currentPassage.comprehensionQuiz.length}
                  className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-40 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>Javoblarni Tekshirish</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleRetakeQuiz}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition flex items-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Qayta topshirish</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setReaderTab('discussion')}
                    className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition flex items-center gap-2 cursor-pointer"
                  >
                    <span>Keyingi: Munozara savollari</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 6: DISCUSSION PROMPTS & SPEAKING PRACTICE                     */}
        {/* ================================================================= */}
        {readerTab === 'discussion' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Critical Thinking & Discussion Questions
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Ushbu savollar bo'yicha sherigingiz bilan suhbatlashing yoki mustaqil javob tayyorlang.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {currentPassage.discussionPrompts && currentPassage.discussionPrompts.length > 0 ? (
                currentPassage.discussionPrompts.map((prompt, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200/80 space-y-2"
                  >
                    <div className="flex items-center gap-2 text-xs font-black text-purple-900 uppercase">
                      <MessageSquare className="w-4 h-4 text-purple-600" />
                      <span>Munozara Savoli #{idx + 1}</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900 leading-relaxed">
                      "{prompt}"
                    </p>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-sm text-slate-400">
                  Ushbu maqola uchun munozara savollari mavjud emas.
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 7: AI READING TUTOR (GEMINI)                                  */}
        {/* ================================================================= */}
        {readerTab === 'ai-tutor' && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4 flex flex-col h-[650px]">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-600 to-indigo-600 text-white flex items-center justify-center shadow-xs">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900">
                    AI Reading Tutor (Gemini)
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Passage: "{currentPassage.title}" bo'yicha savollaringizga o'zbek va ingliz tilida javob beradi
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setAiChatMessages([])}
                className="text-xs text-slate-400 hover:text-slate-600 transition"
              >
                Tozalash
              </button>
            </div>

            {/* Quick Suggestions Chips */}
            <div className="flex flex-wrap gap-1.5 shrink-0">
              {[
                'Matndagi eng qiyin 3 ta jumlani tushuntirib bering',
                'Bu maqolaning asosiy xulosasi nima?',
                'Academic so\'zlarni qo\'llab 3 ta yangi gap tuzib bering',
                'IELTS Writing Task 2 uchun qanday g\'oyalar olsa bo\'ladi?'
              ].map((suggestion, sIdx) => (
                <button
                  key={sIdx}
                  type="button"
                  onClick={() => setAiInputText(suggestion)}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-sky-50 hover:text-sky-700 text-slate-600 font-medium transition cursor-pointer"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto space-y-3 p-3 rounded-2xl bg-slate-50/70 border border-slate-100">
              {aiChatMessages.map((msg, mIdx) => (
                <div
                  key={mIdx}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-sm max-w-[85%] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-sky-600 text-white rounded-br-none shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-2xs'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                    <div className={`text-[10px] mt-1.5 font-mono ${
                      msg.sender === 'user' ? 'text-sky-200' : 'text-slate-400'
                    }`}>
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}

              {isAiLoading && (
                <div className="flex items-center gap-2 text-xs text-slate-400 p-2">
                  <Loader2 className="w-4 h-4 animate-spin text-sky-600" />
                  <span>AI repetitor javob tayyorlamoqda...</span>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Input Bar */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-100 shrink-0">
              <input
                type="text"
                value={aiInputText}
                onChange={(e) => setAiInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendAiMessage();
                }}
                placeholder="Matn bo'yicha savolingizni yozing..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-sky-500 focus:outline-none text-xs sm:text-sm"
              />
              <button
                type="button"
                onClick={handleSendAiMessage}
                disabled={!aiInputText.trim() || isAiLoading}
                className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-40 text-white font-bold text-xs transition flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>Yuborish</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* INTERACTIVE VOCABULARY OVERLAY ENGINE CARD */}
        {showVocabOverlay && selectedVocab && (
          <VocabularyOverlayCard
            vocab={selectedVocab}
            allPassageVocab={currentPassage.targetVocab || []}
            passageParagraphs={currentPassage.paragraphs || []}
            passageTitle={currentPassage.title}
            theme="day"
            isSaved={addedWordKeys.has(`${currentPassage.id}-${selectedVocab.word}`)}
            onClose={() => setShowVocabOverlay(false)}
            onSelectVocab={(v) => setSelectedVocab(v)}
            onSaveToMyVocab={(v) => handleAddWordToSRS(v)}
          />
        )}
      </div>
    </div>
  );
};
