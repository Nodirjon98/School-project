import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  BookOpen, Sparkles, Volume2, VolumeX, Lightbulb, PenTool, 
  Check, BookmarkCheck, ChevronRight, Search, Filter, 
  Share2, ArrowLeft, Award, HelpCircle, Layers, CheckCircle2,
  Copy, GraduationCap, Zap, Compass, FileText, ArrowUpRight, Flame,
  X, Loader2, Mic
} from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { TOEFL_TOPICS, getToeflTopicById, ALL_USEFUL_WRITING_CHUNKS } from '../../data/toeflEssaysData';
import { findTargetWordInCurriculum, isPlaceholderTranslation } from '../../data/essentialWordsData';
import { TOPIC_WORD_LISTS } from '../../data/toefl/topicWordLists';
import { getCachedWord, saveCachedWord } from '../../lib/clientWordCache';
import { quickDefineWord } from '../../lib/ai';
import { WordPronunciationPractice } from '../../components/pronunciation/WordPronunciationPractice';
import { 
  ToeflTopic, ToeflEssayModel, WritingChunk, EssayIdea, 
  TargetWord, ReadingPhrase, WritingChunkCategory, IdeaType 
} from '../../types';
import { playSound, speakWord } from '../../lib/sound';

type HighlightFilter = 'all' | 'ideas' | 'chunks' | 'words' | 'phrases' | 'none';
type ViewTab = 'essay' | 'topic_vocab' | 'chunks_vault' | 'idea_bank' | 'vocab' | 'practice' | 'pronunciation';

export const ToeflEssaysPage: React.FC = () => {
  const { topicId } = useParams<{ topicId?: string }>();
  const navigate = useNavigate();

  // Selected topic and essay
  const [selectedTopicId, setSelectedTopicId] = useState<string>(topicId || TOEFL_TOPICS[0].id);
  const [selectedEssayIndex, setSelectedEssayIndex] = useState<number>(0);

  // Active view tab
  const [activeTab, setActiveTab] = useState<ViewTab>('essay');

  // Search and category filters
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [chunksCategoryFilter, setChunksCategoryFilter] = useState<string>('all');
  const [chunksScope, setChunksScope] = useState<'all' | 'essay'>('all');
  const [topicVocabSearch, setTopicVocabSearch] = useState<string>('');

  // Highlight display filter
  const [highlightFilter, setHighlightFilter] = useState<HighlightFilter>('all');

  // Active Inspector selection
  const [selectedIdea, setSelectedIdea] = useState<EssayIdea | null>(null);
  const [selectedChunk, setSelectedChunk] = useState<WritingChunk | null>(null);
  const [selectedWord, setSelectedWord] = useState<TargetWord | null>(null);
  const [selectedPhrase, setSelectedPhrase] = useState<ReadingPhrase | null>(null);
  const [isDefiningWord, setIsDefiningWord] = useState(false);

  // Mobile / Tablet Pop-up modal visibility
  const [isMobilePopupOpen, setIsMobilePopupOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // User flashcard saves & copied state
  const [savedItemIds, setSavedItemIds] = useState<Set<string>>(new Set());
  const [copiedChunkId, setCopiedChunkId] = useState<string | null>(null);

  // Audio TTS State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Practice Writing state
  const [userEssayText, setUserEssayText] = useState<string>('');
  const [isCopiedOutline, setIsCopiedOutline] = useState(false);

  // Current Topic & Essay
  const currentTopic = useMemo(() => {
    return TOEFL_TOPICS.find(t => t.id === selectedTopicId) || TOEFL_TOPICS[0];
  }, [selectedTopicId]);

  const currentEssay: ToeflEssayModel = useMemo(() => {
    return currentTopic.essays[selectedEssayIndex] || currentTopic.essays[0];
  }, [currentTopic, selectedEssayIndex]);

  // Sync route param changes
  useEffect(() => {
    if (topicId && topicId !== selectedTopicId) {
      const found = TOEFL_TOPICS.find(t => t.id === topicId);
      if (found) {
        setSelectedTopicId(found.id);
        setSelectedEssayIndex(0);
      }
    }
  }, [topicId, selectedTopicId]);

  // Initialize first selection on essay change
  useEffect(() => {
    if (currentEssay.ideas && currentEssay.ideas.length > 0) {
      setSelectedIdea(currentEssay.ideas[0]);
    } else {
      setSelectedIdea(null);
    }
    setSelectedChunk(null);
    setSelectedWord(null);
    setSelectedPhrase(null);

    // Stop audio if playing
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
  }, [currentEssay]);

  // Filtered topics list
  const filteredTopics = useMemo(() => {
    return TOEFL_TOPICS.filter(topic => {
      const matchesCat = categoryFilter === 'all' || topic.category === categoryFilter;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;
      const matchesSearch = 
        topic.shortTitle.toLowerCase().includes(q) ||
        topic.prompt.toLowerCase().includes(q) ||
        `topic ${topic.topicNumber}`.toLowerCase().includes(q) ||
        topic.topicNumber.toString() === q;
      return matchesCat && matchesSearch;
    });
  }, [searchQuery, categoryFilter]);

  // Audio Speech Handlers
  const handleToggleAudio = () => {
    if (!window.speechSynthesis) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(currentEssay.essayText);
    utterance.lang = 'en-US';
    utterance.rate = playbackSpeed;

    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
    if (enVoice) utterance.voice = enVoice;

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  const handlePronounce = (text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  // Copy chunk to clipboard
  const handleCopyChunk = (chunk: WritingChunk) => {
    navigator.clipboard.writeText(chunk.phrase);
    setCopiedChunkId(chunk.id);
    playSound('correct');
    setTimeout(() => {
      setCopiedChunkId(null);
    }, 2000);
  };

  // Save item to SRS Flashcards
  const handleSaveToFlashcards = (id: string) => {
    setSavedItemIds(prev => new Set(prev).add(id));
    playSound('correct');
  };

  // Copy any text with visual feedback
  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    playSound('correct');
    setTimeout(() => {
      setCopiedText(null);
    }, 2000);
  };

  // Selection handlers that open the responsive mobile/tablet pop-up sheet
  const handleSelectIdea = (idea: EssayIdea) => {
    setSelectedIdea(idea);
    setSelectedChunk(null);
    setSelectedWord(null);
    setSelectedPhrase(null);
    setIsMobilePopupOpen(true);
  };

  const handleSelectChunk = (chunk: WritingChunk) => {
    setSelectedChunk(chunk);
    setSelectedIdea(null);
    setSelectedWord(null);
    setSelectedPhrase(null);
    handlePronounce(chunk.phrase);
    setIsMobilePopupOpen(true);
  };

  const handleSelectPhrase = (phrase: ReadingPhrase) => {
    setSelectedPhrase(phrase);
    setSelectedIdea(null);
    setSelectedChunk(null);
    setSelectedWord(null);
    handlePronounce(phrase.phrase);
    setIsMobilePopupOpen(true);
  };

  const handleSelectWord = (word: TargetWord) => {
    setSelectedWord(word);
    setSelectedIdea(null);
    setSelectedChunk(null);
    setSelectedPhrase(null);
    handlePronounce(word.word);
    setIsMobilePopupOpen(true);
  };

  const handleAnyWordClick = async (rawToken: string, sentenceContext?: string) => {
    if (!rawToken) return;
    const clean = rawToken.toLowerCase().replace(/^[^a-z]+|[^a-z]+$/g, '');
    if (!clean || clean.length < 2) return;

    // 1. Check currentEssay.targetWords
    const essayWord = currentEssay.targetWords?.find(w => w.word.toLowerCase() === clean);
    if (essayWord) {
      if (isPlaceholderTranslation(essayWord.translationUz, essayWord.word)) {
        const enriched = findTargetWordInCurriculum(clean);
        if (enriched) essayWord.translationUz = enriched.translationUz;
      }
      handleSelectWord(essayWord);
      return;
    }

    // 2. Check topic-related word lists for current topic
    const topicWords = TOPIC_WORD_LISTS[currentTopic.id];
    const topicWordMatch = topicWords?.find(w => w.word.toLowerCase() === clean || w.word.toLowerCase().split(' ').includes(clean));
    if (topicWordMatch) {
      handleSelectWord(topicWordMatch);
      return;
    }

    // 3. Check currentEssay.phrases
    const essayPhrase = currentEssay.phrases?.find(p => p.phrase.toLowerCase().split(' ').includes(clean));
    if (essayPhrase) {
      handleSelectPhrase(essayPhrase);
      return;
    }

    // 4. Check 4000 Essential English Words dictionary + Master Lexicon (4,140+ words)
    const curriculumWord = findTargetWordInCurriculum(clean);
    if (curriculumWord) {
      handleSelectWord({
        ...curriculumWord,
        example: sentenceContext ? `"${sentenceContext.trim()}"` : curriculumWord.example
      });
      return;
    }

    // 5. Check client-side cached dynamic words
    const cachedWord = getCachedWord(clean);
    if (cachedWord) {
      handleSelectWord(cachedWord);
      return;
    }

    // 6. Instant dynamic fallback word with AI quick-define
    const initialWord: TargetWord = {
      id: `essay-dyn-${clean}`,
      word: rawToken.trim(),
      phonetic: `/${clean}/`,
      partOfSpeech: 'academic vocabulary',
      definition: `Matn kontekstidagi so‘z ma’nosi yuklanmoqda...`,
      translationUz: `Matn kontekstida tahlil qilinmoqda...`,
      example: sentenceContext ? `"${sentenceContext.trim()}"` : `Found in essay`
    };
    handleSelectWord(initialWord);
    setIsDefiningWord(true);

    try {
      const def = await quickDefineWord(rawToken.trim(), sentenceContext);
      if (def) {
        const enrichedWord: TargetWord = {
          id: `essay-dyn-${clean}`,
          word: def.word || rawToken.trim(),
          phonetic: def.phonetic || `/${clean}/`,
          partOfSpeech: def.partOfSpeech || 'academic vocabulary',
          definition: def.definition || 'Contextual vocabulary item.',
          translationUz: def.translationUz || `${rawToken.trim()} so'zi`,
          example: def.example || (sentenceContext ? `"${sentenceContext.trim()}"` : `Found in essay`)
        };
        saveCachedWord(clean, enrichedWord);
        setSelectedWord(enrichedWord);
      }
    } catch (err) {
      console.warn('Quick define error:', err);
    } finally {
      setIsDefiningWord(false);
    }
  };

  // Insert chunk into practice editor
  const handleInsertChunkToPractice = (chunkText: string) => {
    setUserEssayText(prev => prev ? `${prev} ${chunkText} ` : `${chunkText} `);
    setActiveTab('practice');
    playSound('correct');
  };

  // Copy Outline
  const handleCopyOutline = () => {
    const outlineText = `OUTLINE: Topic ${currentTopic.topicNumber} - ${currentTopic.shortTitle}
Prompt: ${currentTopic.prompt}

INTRODUCTION:
${currentEssay.outline.introduction}

BODY PARAGRAPHS:
${currentEssay.outline.bodyPoints.map((p, i) => `${i + 1}. ${p}`).join('\n')}

CONCLUSION:
${currentEssay.outline.conclusion}`;

    navigator.clipboard.writeText(outlineText);
    setIsCopiedOutline(true);
    playSound('correct');
    setTimeout(() => setIsCopiedOutline(false), 2000);
  };

  /**
   * INTERACTIVE PASSAGE RENDERING
   * Merges Ideas, Writing Chunks, Collocations/Phrases, and Target Words
   */
  const renderedEssayPassage = useMemo(() => {
    const paragraphs = currentEssay.essayText.split('\n\n');
    const ideas = currentEssay.ideas || [];
    const chunks = currentEssay.writingChunks || [];
    const phrases = currentEssay.phrases || [];
    const words = currentEssay.targetWords || [];

    const escapeRegex = (s: string) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

    return paragraphs.map((para, pIdx) => {
      interface IntervalMatch {
        start: number;
        end: number;
        text: string;
        type: 'idea' | 'chunk' | 'phrase' | 'word';
        item: EssayIdea | WritingChunk | ReadingPhrase | TargetWord;
      }

      const intervals: IntervalMatch[] = [];

      // 1. Matches for Ideas
      if (highlightFilter === 'all' || highlightFilter === 'ideas') {
        ideas.forEach(idea => {
          if (!idea.anchorText) return;
          const cleanAnchor = idea.anchorText.trim();
          const idx = para.indexOf(cleanAnchor);
          if (idx !== -1) {
            intervals.push({
              start: idx,
              end: idx + cleanAnchor.length,
              text: cleanAnchor,
              type: 'idea',
              item: idea
            });
          }
        });
      }

      // 2. Matches for Writing Chunks
      if (highlightFilter === 'all' || highlightFilter === 'chunks') {
        chunks.forEach(chunk => {
          if (!chunk.phrase) return;
          const reg = new RegExp(`\\b${escapeRegex(chunk.phrase)}\\b`, 'gi');
          let m: RegExpExecArray | null;
          while ((m = reg.exec(para)) !== null) {
            intervals.push({
              start: m.index,
              end: m.index + m[0].length,
              text: m[0],
              type: 'chunk',
              item: chunk
            });
          }
        });
      }

      // 3. Matches for Phrases & Collocations
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

      // 4. Matches for Target Words
      if (highlightFilter === 'all' || highlightFilter === 'words') {
        words.forEach(w => {
          if (!w.word) return;
          const reg = new RegExp(`\\b${escapeRegex(w.word)}\\b`, 'gi');
          let m: RegExpExecArray | null;
          while ((m = reg.exec(para)) !== null) {
            intervals.push({
              start: m.index,
              end: m.index + m[0].length,
              text: m[0],
              type: 'word',
              item: w
            });
          }
        });
      }

      // Sort by start index; for overlapping matches:
      // If filtering 'ideas', we prefer idea spans; otherwise we sort by start asc, longer length desc
      intervals.sort((a, b) => {
        if (a.start !== b.start) return a.start - b.start;
        return (b.end - b.start) - (a.end - a.start);
      });

      // Filter out overlapping items
      const nonOverlapping: IntervalMatch[] = [];
      let lastEnd = 0;
      for (const match of intervals) {
        if (match.start >= lastEnd) {
          nonOverlapping.push(match);
          lastEnd = match.end;
        }
      }

      // Build JSX elements
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

        if (match.type === 'idea') {
          const idea = match.item as EssayIdea;
          const isSelected = selectedIdea?.id === idea.id;
          elements.push(
            <button
              key={`idea-${pIdx}-${mIdx}`}
              type="button"
              onClick={() => handleSelectIdea(idea)}
              className={`inline text-left px-1.5 py-0.5 rounded cursor-pointer transition-all duration-150 ${
                isSelected
                  ? 'bg-emerald-500 text-white font-medium shadow-xs ring-2 ring-emerald-300'
                  : 'bg-emerald-100/80 hover:bg-emerald-200 text-emerald-950 border-b-2 border-emerald-500 font-medium'
              }`}
              title={`[IDEA: ${idea.title}] • Click to view argument analysis & 6.0 scoring logic`}
            >
              <span className="text-[10px] mr-1 inline-flex items-center text-emerald-700 bg-emerald-200/80 px-1 rounded font-bold">
                💡 {idea.type.toUpperCase().replace('_', ' ')}
              </span>
              <span>{match.text}</span>
            </button>
          );
        } else if (match.type === 'chunk') {
          const chunk = match.item as WritingChunk;
          const isSelected = selectedChunk?.id === chunk.id;
          elements.push(
            <button
              key={`chk-${pIdx}-${mIdx}`}
              type="button"
              onClick={() => handleSelectChunk(chunk)}
              className={`inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded cursor-pointer transition-all duration-150 ${
                isSelected
                  ? 'bg-violet-600 text-white shadow-xs ring-2 ring-violet-300 font-bold'
                  : 'bg-violet-100/90 text-violet-950 hover:bg-violet-200 border-b-2 border-violet-500 font-semibold'
              }`}
              title={`[WRITING CHUNK]: ${chunk.translationUz} • Click for usage function & templates`}
            >
              <span className="text-[10px] mr-1 text-violet-600 font-black">✍️</span>
              <span>{match.text}</span>
            </button>
          );
        } else if (match.type === 'phrase') {
          const phrase = match.item as ReadingPhrase;
          const isSelected = selectedPhrase?.id === phrase.id;
          elements.push(
            <button
              key={`phr-${pIdx}-${mIdx}`}
              type="button"
              onClick={() => handleSelectPhrase(phrase)}
              className={`inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded cursor-pointer transition-all duration-150 ${
                isSelected
                  ? 'bg-amber-400 text-slate-950 shadow-xs ring-2 ring-amber-300 font-black'
                  : 'bg-amber-100/90 text-amber-950 hover:bg-amber-200 border-b-2 border-amber-500 font-semibold'
              }`}
              title={`[EXPRESSION]: ${phrase.translationUz} • Click for definition & audio`}
            >
              <span className="text-[10px] mr-1 text-amber-600 font-black">✦</span>
              <span>{match.text}</span>
            </button>
          );
        } else {
          const word = match.item as TargetWord;
          const isSelected = selectedWord?.id === word.id;
          elements.push(
            <button
              key={`wrd-${pIdx}-${mIdx}`}
              type="button"
              onClick={() => handleSelectWord(word)}
              className={`inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded cursor-pointer transition-all duration-150 ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-xs ring-2 ring-indigo-300 font-bold'
                  : 'bg-indigo-50 text-indigo-900 hover:bg-indigo-200 border-b-2 border-indigo-400 font-bold'
              }`}
              title={`[C1/C2 VOCAB]: ${word.translationUz} • Click for definition & pronunciation`}
            >
              <span>{match.text}</span>
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
        <p key={pIdx} className="mb-5 leading-relaxed tracking-normal text-slate-800 text-[15px] sm:text-base font-normal">
          {elements}
        </p>
      );
    });
  }, [currentEssay, highlightFilter, selectedIdea, selectedChunk, selectedWord, selectedPhrase]);

  return (
    <div className="space-y-6 pb-16">
      {/* Top Hero Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-800 relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>Answers to All TOEFL Essay Questions • Official ETS Bank</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              <Flame className="w-3.5 h-3.5" />
              <span>Score 6.0 Model Essays</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <Zap className="w-3.5 h-3.5" />
              <span>Vocabulary Logic • Writing Chunks • Idea Highlighting</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            TOEFL Essay Academy & Model Answers Bank
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            Master the official 185 ETS writing prompts. Read band 6.0 essays with interactive 
            academic vocabulary, formulaic writing chunks with Uzbek functions, and highlighted argument structures.
          </p>
        </div>
      </div>

      {/* Main Layout Grid: Left (Topics Catalog) + Right (Selected Essay & Studio) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Topics Browser (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <h3 className="font-bold text-sm text-slate-900">ETS Topics Catalog</h3>
              </div>
              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                {filteredTopics.length} Topics
              </span>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topic #, keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
              {[
                { id: 'all', label: 'All' },
                { id: 'education', label: 'Education' },
                { id: 'society', label: 'Society' },
                { id: 'technology', label: 'Tech & Media' },
                { id: 'work', label: 'Work & Money' },
                { id: 'environment', label: 'Science' },
                { id: 'personal', label: 'Family' }
              ].map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`px-2.5 py-1 rounded-lg font-bold text-[11px] whitespace-nowrap transition cursor-pointer ${
                    categoryFilter === cat.id
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Scrollable list of topics */}
            <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
              {filteredTopics.map(topic => {
                const isSelected = topic.id === currentTopic.id;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => {
                      setSelectedTopicId(topic.id);
                      setSelectedEssayIndex(0);
                      navigate(`/toefl-essays/${topic.id}`, { replace: true });
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition cursor-pointer flex flex-col gap-1.5 ${
                      isSelected
                        ? 'bg-indigo-50/90 border-indigo-300 ring-2 ring-indigo-500/20 shadow-xs'
                        : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/70'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wide ${
                        isSelected 
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        Topic {topic.topicNumber}
                      </span>
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                        Score 6.0
                      </span>
                    </div>

                    <div className={`font-bold text-xs leading-snug line-clamp-2 ${
                      isSelected ? 'text-indigo-950 font-black' : 'text-slate-800'
                    }`}>
                      {topic.shortTitle}
                    </div>

                    <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                      <span>{topic.categoryName}</span>
                      <span>•</span>
                      <span>{topic.essays[0].wordCount} words</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick link to 4000 Words Curriculum & IELTS Writing */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl p-4 text-white shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400" />
              <h4 className="font-bold text-xs tracking-tight">Full Curriculum Integration</h4>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Combine your TOEFL essay analysis with Paul Nation's 4000 Essential English Words reading curriculum and our AI IELTS Writing Examiner.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link
                to="/curriculum"
                className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-center text-[11px] transition flex items-center justify-center gap-1"
              >
                <span>4000 Words</span>
                <ArrowUpRight className="w-3 h-3 text-emerald-400" />
              </Link>
              <Link
                to="/ielts-writing"
                className="px-3 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-center text-[11px] transition flex items-center justify-center gap-1 shadow-2xs"
              >
                <span>IELTS AI</span>
                <ArrowUpRight className="w-3 h-3 text-amber-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Active Topic Studio (lg:col-span-8) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Prompt Card */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-800">
                  Topic #{currentTopic.topicNumber}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {currentTopic.categoryName}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  Score 6.0 Model
                </span>
              </div>
            </div>

            <h2 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
              "{currentTopic.prompt}"
            </h2>

            {/* Model Essay Selector if multiple */}
            {currentTopic.essays.length > 1 && (
              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs text-slate-400 font-bold">Model Version:</span>
                {currentTopic.essays.map((essay, idx) => (
                  <button
                    key={essay.id}
                    type="button"
                    onClick={() => setSelectedEssayIndex(idx)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      selectedEssayIndex === idx
                        ? 'bg-indigo-600 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Essay {idx + 1} ({essay.wordCount} words)
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Studio Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-1 overflow-x-auto no-scrollbar">
            {[
              { id: 'essay', label: 'Model Essay & Highlights', icon: <BookOpen className="w-4 h-4" /> },
              { id: 'topic_vocab', label: 'Topic Word List (Mavzu lug\'ati)', icon: <BookmarkCheck className="w-4 h-4" />, badge: `${currentTopic.topicWordList?.length || 0}` },
              { id: 'pronunciation', label: 'Pronunciation Lab', icon: <Mic className="w-4 h-4 text-emerald-500" />, badge: `${currentTopic.topicWordList?.length || currentEssay.targetWords?.length || 0}` },
              { id: 'chunks_vault', label: 'Writing Chunks Vault', icon: <PenTool className="w-4 h-4" />, badge: `${ALL_USEFUL_WRITING_CHUNKS.length}` },
              { id: 'idea_bank', label: 'Idea Bank & Outline', icon: <Lightbulb className="w-4 h-4" />, badge: `${currentEssay.ideas?.length || 0}` },
              { id: 'vocab', label: 'Essay Vocabulary', icon: <Layers className="w-4 h-4" />, badge: `${currentEssay.targetWords?.length || 0}` },
              { id: 'practice', label: 'Practice Writer', icon: <FileText className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as ViewTab)}
                className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                    activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* TAB 1: ESSAY READER WITH DUAL/TRIPLE INSPECTOR */}
          {activeTab === 'essay' && (
            <div className="space-y-6">
              {/* Beginner Quick-Start Guide */}
              <div className="bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-emerald-500/10 rounded-2xl p-5 border border-indigo-100 shadow-2xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-100/60 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm shadow-2xs">
                      ✦
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                        <span>Learner Quick-Start Guide</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                          Boshlovchilar uchun oson qadamlar
                        </span>
                      </h3>
                      <p className="text-xs text-slate-600">
                        Insho yozish tajribasi bo'lmagan o'rganuvchilar uchun 3 bosqichli oddiy yo'l:
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveTab('topic_vocab')}
                      className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition flex items-center gap-1.5 shadow-2xs cursor-pointer"
                    >
                      <BookmarkCheck className="w-3.5 h-3.5" />
                      <span>Mavzu lug'ati ({currentTopic.topicWordList?.length || 0})</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('chunks_vault')}
                      className="px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs transition flex items-center gap-1.5 shadow-2xs cursor-pointer"
                    >
                      <PenTool className="w-3.5 h-3.5" />
                      <span>Foydali qoliplar ({ALL_USEFUL_WRITING_CHUNKS.length})</span>
                    </button>
                  </div>
                </div>

                {/* 3 Step Pathway */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  {/* Step 1: Topic Words */}
                  <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-indigo-100/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-indigo-900 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                        Mavzu so'zlari
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold">Topic Vocab</span>
                    </div>
                    <p className="text-slate-600 leading-snug">
                      Ushbu mavzuga oid asosiy so'zlarni ko'rib chiqing va yodlang:
                    </p>
                    {currentTopic.topicWordList && currentTopic.topicWordList.length > 0 ? (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {currentTopic.topicWordList.slice(0, 4).map(w => (
                          <button
                            key={w.id}
                            type="button"
                            onClick={() => handleSelectWord(w)}
                            className="px-2 py-0.5 rounded-md bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-[11px] font-bold border border-indigo-200 transition cursor-pointer"
                            title={`${w.translationUz} • Bosing`}
                          >
                            {w.word}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="text-[11px] text-slate-400 italic">Mavzuga oid so'zlar yuklanmoqda</div>
                    )}
                  </div>

                  {/* Step 2: Useful Chunks */}
                  <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-violet-100/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-violet-900 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-violet-600 text-white flex items-center justify-center text-[10px] font-bold">2</span>
                        Foydali qoliplar
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold">Writing Chunks</span>
                    </div>
                    <p className="text-slate-600 leading-snug">
                      Akademik jumlalarni xatosiz yozish uchun tayyor qoliplardan foydalaning:
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {ALL_USEFUL_WRITING_CHUNKS.slice(0, 2).map(c => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => handleSelectChunk(c)}
                          className="px-2 py-0.5 rounded-md bg-violet-50 hover:bg-violet-100 text-violet-800 text-[10px] font-semibold border border-violet-200 transition truncate max-w-full cursor-pointer text-left"
                          title={`${c.translationUz} • Bosing`}
                        >
                          {c.phrase.slice(0, 32)}...
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Interactive Reading */}
                  <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-emerald-100/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-emerald-900 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">3</span>
                        Interaktiv o'qish
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold">Model Essay</span>
                    </div>
                    <p className="text-slate-600 leading-snug">
                      Quyidagi 6.0 inshoni o'qing. Istalgan so'z ustiga bossangiz, o'zbekcha tarjimasi va talaffuzi chiqadi!
                    </p>
                    <div className="pt-1 flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Matndagi har bir so'z bosiladi</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlight Filter & Audio Player Toolbar */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
                {/* Audio Reader Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleToggleAudio}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                      isPlayingAudio
                        ? 'bg-red-600 text-white hover:bg-red-700 shadow-xs'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xs'
                    }`}
                  >
                    {isPlayingAudio ? (
                      <>
                        <VolumeX className="w-4 h-4 animate-pulse" />
                        <span>Stop Voice</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4" />
                        <span>Listen to Essay (US Voice)</span>
                      </>
                    )}
                  </button>

                  <select
                    aria-label="Audio Playback Speed"
                    value={playbackSpeed}
                    onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
                    className="bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl px-2.5 py-2 focus:outline-hidden"
                  >
                    <option value="0.8">0.8x Speed</option>
                    <option value="1.0">1.0x Normal</option>
                    <option value="1.2">1.2x Faster</option>
                  </select>
                </div>

                {/* Highlight Filter Pills */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-bold text-slate-400 mr-1">Highlight:</span>
                  {[
                    { id: 'all', label: 'All Highlights', color: 'bg-slate-900 text-white' },
                    { id: 'ideas', label: '💡 Ideas', color: 'bg-emerald-600 text-white' },
                    { id: 'chunks', label: '✍️ Writing Chunks', color: 'bg-violet-600 text-white' },
                    { id: 'words', label: '📖 C1/C2 Vocab', color: 'bg-indigo-600 text-white' },
                    { id: 'phrases', label: '✦ Idioms', color: 'bg-amber-500 text-slate-950' },
                    { id: 'none', label: 'Plain Text', color: 'bg-slate-200 text-slate-700' }
                  ].map(f => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setHighlightFilter(f.id as HighlightFilter)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                        highlightFilter === f.id
                          ? f.color
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Essay Content & Side Inspector Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                {/* Passage Text (xl:col-span-7) */}
                <div className="xl:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-base font-black text-slate-900">
                        {currentEssay.title}
                      </h3>
                      <span className="text-xs text-slate-400 font-medium">
                        Band 6.0 Model Answer • {currentEssay.wordCount} words
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleInsertChunkToPractice('')}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Practice Prompt</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Rendered Interactive Text */}
                  <div className="prose prose-slate max-w-none">
                    {renderedEssayPassage}
                  </div>

                  {/* Legend / Guide */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span>💡 Ideas (Thesis / Core Arguments)</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-violet-600" />
                      <span>✍️ Writing Chunks & Stems</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                      <span>📖 Academic C1/C2 Vocab</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span>✦ Collocations & Idioms</span>
                    </span>
                  </div>
                </div>

                {/* Interactive Multi-Type Inspector (xl:col-span-5) */}
                <div className="xl:col-span-5 space-y-4 sticky top-6">
                  {/* 1. IF AN IDEA IS SELECTED */}
                  {selectedIdea && (
                    <div className="bg-white rounded-2xl p-5 border-2 border-emerald-500 shadow-sm space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
                            💡 {selectedIdea.type.toUpperCase().replace('_', ' ')}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            Idea Analysis
                          </span>
                        </div>
                        <span className="text-[10px] font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          ETS 6.0 Logic
                        </span>
                      </div>

                      <div>
                        <h4 className="text-base font-black text-slate-900 leading-snug">
                          {selectedIdea.title}
                        </h4>
                        <div className="mt-2 p-2.5 rounded-xl bg-emerald-50 text-emerald-950 text-xs italic font-medium leading-relaxed border border-emerald-200/60">
                          "{selectedIdea.anchorText}"
                        </div>
                      </div>

                      {/* Explanation */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed space-y-1">
                        <div className="font-bold text-slate-900">Argument Core Logic:</div>
                        <p>{selectedIdea.explanation}</p>
                      </div>

                      {/* Uzbek Explanation */}
                      <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-950 leading-relaxed space-y-1">
                        <div className="font-bold text-indigo-900">O'zbekcha mazmuni:</div>
                        <p>{selectedIdea.explanationUz}</p>
                      </div>

                      {/* Why 6.0 Score */}
                      <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 leading-relaxed space-y-1">
                        <div className="font-bold text-amber-900">Why this scores 6.0:</div>
                        <p>{selectedIdea.scoreInsight}</p>
                      </div>

                      {/* Prompt Application */}
                      <div className="p-3 rounded-xl bg-violet-50/70 border border-violet-100 text-xs text-violet-950 leading-relaxed space-y-1">
                        <div className="font-bold text-violet-900">How to use in other essays:</div>
                        <p>{selectedIdea.promptApplication}</p>
                      </div>
                    </div>
                  )}

                  {/* 2. IF A WRITING CHUNK IS SELECTED */}
                  {selectedChunk && (
                    <div className="bg-white rounded-2xl p-5 border-2 border-violet-500 shadow-sm space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-violet-100">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-violet-100 text-violet-900 border border-violet-300">
                            ✍️ {selectedChunk.categoryLabel}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            Writing Chunk
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handlePronounce(selectedChunk.phrase)}
                          className="p-1.5 rounded-lg bg-violet-50 text-violet-700 hover:bg-violet-100 transition cursor-pointer"
                          title="Listen to chunk"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div>
                        <h4 className="text-xl font-black text-slate-900 tracking-tight">
                          "{selectedChunk.phrase}"
                        </h4>
                        <div className="mt-1 text-sm font-bold text-violet-800">
                          {selectedChunk.translationUz}
                        </div>
                      </div>

                      {/* Rhetorical Function */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed space-y-1">
                        <div className="font-bold text-slate-900">Rhetorical Function:</div>
                        <p>{selectedChunk.function}</p>
                      </div>

                      {/* Example in Essay */}
                      <div className="p-3 rounded-xl bg-violet-50/70 border border-violet-200/70 text-xs text-violet-950 leading-relaxed space-y-1">
                        <div className="font-bold text-violet-900">In Essay Context:</div>
                        <p>"{selectedChunk.example}"</p>
                      </div>

                      {selectedChunk.usageNote && (
                        <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-relaxed">
                          <span className="font-bold">Exam Writing Tip: </span>
                          {selectedChunk.usageNote}
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => handleCopyChunk(selectedChunk)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                            copiedChunkId === selectedChunk.id
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-violet-600 hover:bg-violet-700 text-white shadow-2xs'
                          }`}
                        >
                          {copiedChunkId === selectedChunk.id ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copy Chunk</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleInsertChunkToPractice(selectedChunk.phrase)}
                          className="py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                        >
                          <PenTool className="w-4 h-4 text-amber-400" />
                          <span>Insert to Editor</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 3. IF A TARGET WORD IS SELECTED */}
                  {selectedWord && (
                    <div className="bg-white rounded-2xl p-5 border-2 border-indigo-500 shadow-sm space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-indigo-100">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-indigo-100 text-indigo-900 border border-indigo-300">
                            Academic C1/C2 Word
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            [{selectedWord.partOfSpeech}]
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handlePronounce(selectedWord.word)}
                          className="p-1.5 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition cursor-pointer"
                          title="Listen to pronunciation"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div>
                        <div className="flex items-baseline gap-2">
                          <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                            {selectedWord.word}
                          </h4>
                          <span className="text-xs text-indigo-600 font-mono font-bold">
                            {selectedWord.phonetic}
                          </span>
                        </div>
                        <div className="mt-1 text-sm font-bold text-indigo-800">
                          {selectedWord.translationUz}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed space-y-1">
                        <div className="font-bold text-slate-900">Definition:</div>
                        <p>{selectedWord.definition}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-200/70 text-xs text-indigo-950 leading-relaxed space-y-1">
                        <div className="font-bold text-indigo-900">Essay Example:</div>
                        <p>"{selectedWord.example}"</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleSaveToFlashcards(selectedWord.id)}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                          savedItemIds.has(selectedWord.id)
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xs'
                        }`}
                      >
                        {savedItemIds.has(selectedWord.id) ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Saved to SRS Flashcards</span>
                          </>
                        ) : (
                          <>
                            <BookmarkCheck className="w-4 h-4" />
                            <span>Save Word to Flashcards (+5 XP)</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {/* 4. IF A PHRASE / IDIOM IS SELECTED */}
                  {selectedPhrase && (
                    <div className="bg-white rounded-2xl p-5 border-2 border-amber-400 shadow-sm space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-amber-100">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-950 border border-amber-300">
                            ✦ {selectedPhrase.type.replace('_', ' ')}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            Expression
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handlePronounce(selectedPhrase.phrase)}
                          className="p-1.5 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 transition cursor-pointer"
                          title="Listen to phrase"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div>
                        <h4 className="text-xl font-black text-slate-900 tracking-tight">
                          "{selectedPhrase.phrase}"
                        </h4>
                        <div className="mt-1 text-sm font-bold text-amber-800">
                          {selectedPhrase.translationUz}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed space-y-1">
                        <div className="font-bold text-slate-900">Meaning & Usage:</div>
                        <p>{selectedPhrase.meaning}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-950 leading-relaxed space-y-1">
                        <div className="font-bold text-amber-900">Essay Example:</div>
                        <p>"{selectedPhrase.example}"</p>
                      </div>

                      {selectedPhrase.contextNote && (
                        <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-[11px] text-indigo-900 leading-relaxed">
                          <span className="font-bold">Context Note: </span>
                          {selectedPhrase.contextNote}
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => handleSaveToFlashcards(selectedPhrase.id)}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                          savedItemIds.has(selectedPhrase.id)
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-black shadow-2xs'
                        }`}
                      >
                        {savedItemIds.has(selectedPhrase.id) ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Saved to My Idioms List</span>
                          </>
                        ) : (
                          <>
                            <BookmarkCheck className="w-4 h-4" />
                            <span>Save Phrase to SRS (+5 XP)</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {/* Fallback info when nothing clicked */}
                  {!selectedIdea && !selectedChunk && !selectedWord && !selectedPhrase && (
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto">
                        <Lightbulb className="w-6 h-6" />
                      </div>
                      <h4 className="font-black text-sm text-slate-900">Interactive Inspector</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Tap on any highlighted <strong>Idea (💡)</strong>, <strong>Writing Chunk (✍️)</strong>, 
                        or <strong>Academic Word (📖)</strong> in the essay to view definitions, Uzbek translations, audio pronunciation, and exam scoring insights.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB: TOPIC WORD LIST (MAVZUGA OID LUG'AT) */}
          {activeTab === 'topic_vocab' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black">
                      <BookmarkCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-slate-900">
                        Topic #{currentTopic.topicNumber} Word List (Mavzuga oid lug'at)
                      </h3>
                      <p className="text-xs text-slate-500">
                        Ushbu mavzuda yuqori ball olish uchun zarur bo'lgan so'zlar ro'yxati va o'zbekcha tarjimalari.
                      </p>
                    </div>
                  </div>

                  {/* Search filter for topic words */}
                  <div className="relative min-w-[200px]">
                    <input
                      type="text"
                      placeholder="So'zlarni qidirish..."
                      value={topicVocabSearch}
                      onChange={(e) => setTopicVocabSearch(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-xs font-medium rounded-xl px-3 py-2 pl-8 focus:outline-hidden focus:border-indigo-500"
                    />
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 flex items-center gap-2">
                  <span className="font-black text-amber-800 uppercase tracking-wider text-[10px]">O'rganuvchiga tavsiya:</span>
                  <span>Insho yozishdan oldin ushbu so'zlarning ma'nosi va talaffuzini eshitib oling, keyin "Save to Flashcards" orqali takrorlang.</span>
                </div>
              </div>

              {/* Topic Words Grid */}
              {(() => {
                const words = (currentTopic.topicWordList || []).filter(w => 
                  !topicVocabSearch || 
                  w.word.toLowerCase().includes(topicVocabSearch.toLowerCase()) || 
                  w.translationUz.toLowerCase().includes(topicVocabSearch.toLowerCase())
                );

                if (words.length === 0) {
                  return (
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-2">
                      <p className="text-slate-500 text-xs">Qidiruv bo'yicha so'z topilmadi.</p>
                    </div>
                  );
                }

                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {words.map(word => (
                      <div
                        key={word.id}
                        className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-indigo-300 transition shadow-xs space-y-3 flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-baseline gap-2">
                              <h4 className="text-lg font-black text-slate-900">{word.word}</h4>
                              <span className="text-xs text-indigo-600 font-mono font-bold">{word.phonetic}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => handlePronounce(word.word)}
                              className="p-1 text-slate-400 hover:text-indigo-600 transition cursor-pointer"
                              title="Listen pronunciation"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[10px] uppercase font-black text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md">
                              {word.partOfSpeech}
                            </span>
                            <span className="text-xs font-black text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                              {word.translationUz}
                            </span>
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed pt-1">
                            {word.definition}
                          </p>

                          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                            <div className="text-slate-800 italic font-medium">"{word.example}"</div>
                            {word.exampleUz && (
                              <div className="text-indigo-900 text-[11px] font-medium border-t border-slate-200/60 pt-1">
                                Tarjimasi: {word.exampleUz}
                              </div>
                            )}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleSaveToFlashcards(word.id)}
                          className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                            savedItemIds.has(word.id)
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-800'
                          }`}
                        >
                          {savedItemIds.has(word.id) ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Saved to Flashcards</span>
                            </>
                          ) : (
                            <>
                              <BookmarkCheck className="w-3.5 h-3.5" />
                              <span>Save to Flashcards (+5 XP)</span>
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          )}

          {/* TAB 2: WRITING CHUNKS VAULT */}
          {activeTab === 'chunks_vault' && (
            <div className="space-y-6">
              {/* Vault Header & Controls */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-black">
                      <PenTool className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-slate-900">
                        Writing Chunks Vault (Barcha foydali qoliplar)
                      </h3>
                      <p className="text-xs text-slate-500">
                        Inshoning har bir bosqichi uchun tayyor iboralar va boshlovchilar uchun oson tavsiyalar.
                      </p>
                    </div>
                  </div>

                  {/* Scope Switcher */}
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setChunksScope('all')}
                      className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                        chunksScope === 'all'
                          ? 'bg-violet-600 text-white shadow-2xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Barcha qoliplar ({ALL_USEFUL_WRITING_CHUNKS.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setChunksScope('essay')}
                      className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                        chunksScope === 'essay'
                          ? 'bg-violet-600 text-white shadow-2xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Ushbu inshodagi ({currentEssay.writingChunks?.length || 0})
                    </button>
                  </div>
                </div>

                {/* Category Filter Pills */}
                <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-400 mr-1">Bosqich:</span>
                  {[
                    { id: 'all', label: 'Barchasi' },
                    { id: 'hook', label: '1. Kirish (Hook)' },
                    { id: 'thesis', label: '2. Fikr bildirish (Thesis)' },
                    { id: 'topic_sentence', label: '3. Asosiy dalil (Arguments)' },
                    { id: 'example', label: '4. Misollar (Examples)' },
                    { id: 'concession', label: '5. Qarshi fikr (Contrast)' },
                    { id: 'cause_effect', label: '6. Sabab/Oqibat' },
                    { id: 'conclusion', label: '7. Xulosa (Conclusion)' }
                  ].map(cat => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setChunksCategoryFilter(cat.id)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                        chunksCategoryFilter === cat.id
                          ? 'bg-violet-600 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chunks Grid */}
              {(() => {
                const sourceList = chunksScope === 'all' ? ALL_USEFUL_WRITING_CHUNKS : currentEssay.writingChunks;
                const filteredChunks = sourceList.filter(chunk => {
                  if (chunksCategoryFilter === 'all') return true;
                  return chunk.category === chunksCategoryFilter;
                });

                if (filteredChunks.length === 0) {
                  return (
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-2">
                      <p className="text-slate-500 text-xs">Ushbu toifada qoliplar topilmadi.</p>
                    </div>
                  );
                }

                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredChunks.map(chunk => (
                      <div 
                        key={chunk.id} 
                        className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-violet-300 transition shadow-xs space-y-3 flex flex-col justify-between"
                      >
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-violet-100 text-violet-800 border border-violet-200">
                              {chunk.categoryLabel}
                            </span>
                            <button
                              type="button"
                              onClick={() => handlePronounce(chunk.phrase.replace(/\[.*?\]/g, ''))}
                              className="p-1 text-slate-400 hover:text-violet-600 transition cursor-pointer"
                              title="Listen pronunciation"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>

                          <h4 className="text-base font-black text-slate-900 leading-snug">
                            "{chunk.phrase}"
                          </h4>

                          <div className="text-xs font-bold text-violet-800 bg-violet-50/60 p-2 rounded-lg border border-violet-100">
                            {chunk.translationUz}
                          </div>

                          {/* Beginner Tip in Uzbek */}
                          {chunk.beginnerTipUz && (
                            <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200 text-[11px] text-amber-950 space-y-0.5">
                              <span className="font-bold text-amber-900 flex items-center gap-1">
                                💡 Boshlovchilar uchun maslahat:
                              </span>
                              <p className="leading-relaxed">{chunk.beginnerTipUz}</p>
                            </div>
                          )}

                          <p className="text-xs text-slate-600 leading-relaxed">
                            {chunk.function}
                          </p>

                          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                            <div className="text-slate-800 italic">"{chunk.example}"</div>
                            {chunk.exampleUz && (
                              <div className="text-violet-900 text-[11px] font-medium border-t border-slate-200/60 pt-1">
                                Tarjimasi: {chunk.exampleUz}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                          <button
                            type="button"
                            onClick={() => handleCopyChunk(chunk)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                              copiedChunkId === chunk.id
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-violet-50 hover:bg-violet-100 text-violet-800'
                            }`}
                          >
                            {copiedChunkId === chunk.id ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Chunk</span>
                              </>
                            )}
                          </button>

                          <button
                            type="button"
                            onClick={() => handleInsertChunkToPractice(chunk.phrase)}
                            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
                          >
                            <PenTool className="w-3.5 h-3.5 text-amber-400" />
                            <span>Use in Practice</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          )}

          {/* TAB 3: IDEA BANK & OUTLINE */}
          {activeTab === 'idea_bank' && (
            <div className="space-y-6">
              {/* Brainstorming Pros vs Cons */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    <h3 className="font-black text-base text-slate-900">Topic Idea Bank & Brainstorming Map</h3>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyOutline}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition cursor-pointer"
                  >
                    {isCopiedOutline ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Outline Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Full Outline</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Agree / Supporting Points */}
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                    <span className="text-xs font-black uppercase text-emerald-900 tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Supporting Points (Arguments For)
                    </span>
                    <ul className="space-y-2 text-xs text-emerald-950 pt-1">
                      {currentEssay.brainstormingPros.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-bold text-emerald-700">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Counter-points / Nuances */}
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                    <span className="text-xs font-black uppercase text-amber-900 tracking-wider flex items-center gap-1">
                      <Flame className="w-4 h-4 text-amber-600" />
                      Counter-Arguments & Concessions (Arguments Against)
                    </span>
                    <ul className="space-y-2 text-xs text-amber-950 pt-1">
                      {currentEssay.brainstormingCons.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-bold text-amber-700">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Band 6.0 Essay Structural Outline */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
                <h4 className="font-black text-sm text-slate-900 uppercase tracking-wider">
                  6.0 Model Essay Structural Outline
                </h4>

                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="font-black text-indigo-900 uppercase tracking-wider text-[10px]">
                      1. Introduction & Stance
                    </span>
                    <p className="text-slate-800 leading-relaxed">{currentEssay.outline.introduction}</p>
                  </div>

                  {currentEssay.outline.bodyPoints.map((point, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <span className="font-black text-emerald-900 uppercase tracking-wider text-[10px]">
                        2.{idx + 1} Body Paragraph: Argument {idx + 1}
                      </span>
                      <p className="text-slate-800 leading-relaxed">{point}</p>
                    </div>
                  ))}

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="font-black text-violet-900 uppercase tracking-wider text-[10px]">
                      3. Synthesis & Strategic Conclusion
                    </span>
                    <p className="text-slate-800 leading-relaxed">{currentEssay.outline.conclusion}</p>
                  </div>
                </div>
              </div>

              {/* Highlighted Ideas Analysis Cards */}
              <div className="space-y-3">
                <h4 className="font-black text-sm text-slate-900 uppercase tracking-wider">
                  Highlighted Core Arguments in Essay
                </h4>

                <div className="space-y-3">
                  {currentEssay.ideas.map((idea, idx) => (
                    <div 
                      key={idea.id} 
                      className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-emerald-300 transition shadow-xs space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-200">
                          💡 Idea #{idx + 1}: {idea.type.replace('_', ' ')}
                        </span>
                        <span className="text-xs text-amber-700 font-bold">
                          ETS Score 6.0 Logic
                        </span>
                      </div>

                      <h5 className="font-bold text-sm text-slate-900">{idea.title}</h5>

                      <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs italic text-emerald-950">
                        "{idea.anchorText}"
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-xs">
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                          <span className="font-bold text-slate-900">Analysis:</span>
                          <p className="text-slate-700">{idea.explanation}</p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-indigo-50/60 border border-indigo-100 space-y-1">
                          <span className="font-bold text-indigo-900">O'zbekcha sharh:</span>
                          <p className="text-indigo-950">{idea.explanationUz}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ADVANCED VOCABULARY LIST */}
          {activeTab === 'vocab' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-black text-base text-slate-900">
                    Academic Vocabulary & Expressions in this Essay
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Academic C1/C2 words, idioms, and high-scoring collocations extracted from the model essay. 
                  Click to listen to pronunciation and save directly to your SRS flashcards.
                </p>
              </div>

              {/* Target Words */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentEssay.targetWords.map(word => (
                  <div
                    key={word.id}
                    className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-indigo-300 transition shadow-xs space-y-2.5 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <h4 className="text-lg font-black text-slate-900">{word.word}</h4>
                          <span className="text-xs text-indigo-600 font-mono font-bold">{word.phonetic}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handlePronounce(word.word)}
                          className="p-1 text-slate-400 hover:text-indigo-600 transition"
                          title="Listen"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        {word.partOfSpeech}
                      </span>

                      <div className="text-xs font-bold text-indigo-800">
                        {word.translationUz}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {word.definition}
                      </p>

                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-700 italic">
                        "{word.example}"
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSaveToFlashcards(word.id)}
                      className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                        savedItemIds.has(word.id)
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-800'
                      }`}
                    >
                      {savedItemIds.has(word.id) ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Saved to Flashcards</span>
                        </>
                      ) : (
                        <>
                          <BookmarkCheck className="w-3.5 h-3.5" />
                          <span>Save to SRS (+5 XP)</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Collocations & Phrases */}
              {currentEssay.phrases.length > 0 && (
                <div className="space-y-4 pt-4">
                  <h4 className="font-black text-sm text-slate-900 uppercase tracking-wider">
                    Idioms & Collocations
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentEssay.phrases.map(phrase => (
                      <div
                        key={phrase.id}
                        className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-amber-300 transition shadow-xs space-y-2.5 flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                              ✦ {phrase.type.replace('_', ' ')}
                            </span>
                            <button
                              type="button"
                              onClick={() => handlePronounce(phrase.phrase)}
                              className="p-1 text-slate-400 hover:text-amber-600 transition"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>

                          <h5 className="text-base font-black text-slate-900">"{phrase.phrase}"</h5>

                          <div className="text-xs font-bold text-amber-800">
                            {phrase.translationUz}
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed">
                            {phrase.meaning}
                          </p>

                          <div className="p-2 rounded-xl bg-amber-50/60 border border-amber-100 text-[11px] text-slate-800 italic">
                            "{phrase.example}"
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleSaveToFlashcards(phrase.id)}
                          className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                            savedItemIds.has(phrase.id)
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-50 hover:bg-amber-100 text-amber-900'
                          }`}
                        >
                          {savedItemIds.has(phrase.id) ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Saved</span>
                            </>
                          ) : (
                            <>
                              <BookmarkCheck className="w-3.5 h-3.5" />
                              <span>Save Phrase (+5 XP)</span>
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: PRACTICE WRITER & CHUNK INSERTION */}
          {activeTab === 'practice' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="font-black text-base text-slate-900">
                      Write Your Response to Topic #{currentTopic.topicNumber}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Target: 350 – 450 words • Practice embedding the formulaic writing chunks below.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-black px-3 py-1 rounded-full ${
                      userEssayText.trim().split(/\s+/).filter(Boolean).length >= 350
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {userEssayText.trim().split(/\s+/).filter(Boolean).length} Words
                    </span>
                  </div>
                </div>

                {/* Quick Insert Chunks Strip */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-400">
                    Quick-Insert Writing Chunks into your essay:
                  </span>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                    {currentEssay.writingChunks.map(chk => (
                      <button
                        key={chk.id}
                        type="button"
                        onClick={() => handleInsertChunkToPractice(chk.phrase)}
                        className="px-2.5 py-1 rounded-lg bg-violet-50 hover:bg-violet-100 text-violet-900 border border-violet-200 text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1"
                        title={chk.translationUz}
                      >
                        <span className="text-violet-500">+</span>
                        <span>{chk.phrase}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Textarea */}
                <textarea
                  rows={14}
                  placeholder={`Write your response to:\n"${currentTopic.prompt}"\n\nTips:\n- Start with a clear thesis statement\n- Dedicate 2-3 body paragraphs with concrete reasons and evidence\n- Conclude with a synthesis of main insights`}
                  value={userEssayText}
                  onChange={(e) => setUserEssayText(e.target.value)}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 text-sm leading-relaxed focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-sans"
                />

                {/* Evaluation Checklist */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <span className="font-bold text-xs text-slate-900 uppercase tracking-wider">
                    Band 6.0 Self-Check Checklist:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <span>Addresses all parts of the ETS prompt</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <span>Explicit thesis statement in intro</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <span>Used at least 3 academic writing chunks</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <span>Cohesive paragraph transitions</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: PRONUNCIATION LAB FOR TOEFL TOPIC VOCABULARY */}
          {activeTab === 'pronunciation' && (
            <WordPronunciationPractice
              words={currentTopic.topicWordList || currentEssay.targetWords || []}
              title={`Topic ${currentTopic.topicNumber}: ${currentTopic.shortTitle} • Pronunciation Lab`}
              subtitle={`Master the phonetics, stress, and natural delivery of TOEFL 6.0 Academic vocabulary`}
              sourceType="toefl_essay"
              sourceId={currentTopic.id}
            />
          )}
        </div>
      </div>

      {/* Mobile & Tablet Interactive Pop-up Bottom Sheet Modal */}
      {isMobilePopupOpen && (selectedWord || selectedPhrase || selectedChunk || selectedIdea) && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity cursor-pointer"
            onClick={() => setIsMobilePopupOpen(false)}
          />

          {/* Bottom Sheet Card on Mobile / Centered Modal on Tablet & Desktop */}
          <div className="relative z-10 w-full sm:max-w-xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border-t sm:border border-slate-200 p-5 sm:p-6 max-h-[88vh] overflow-y-auto space-y-4">
            {/* Mobile Drag Indicator */}
            <div className="sm:hidden flex justify-center pb-1">
              <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
            </div>

            {/* 1. TARGET WORD POPUP */}
            {selectedWord && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-900 border border-indigo-200">
                      📖 Academic C1/C2 Word
                    </span>
                    <span className="text-xs text-slate-500 font-mono font-semibold">
                      [{selectedWord.partOfSpeech}]
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handlePronounce(selectedWord.word)}
                      className="p-2 rounded-xl bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition cursor-pointer"
                      title="Pronounce"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsMobilePopupOpen(false)}
                      className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition cursor-pointer"
                      title="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {selectedWord.word}
                    </h3>
                    <span className="text-xs text-indigo-600 font-mono font-bold">
                      {selectedWord.phonetic}
                    </span>
                  </div>
                </div>

                {/* Uzbek Translation Card */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 border border-indigo-200 space-y-1">
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
                    {selectedWord.translationUz}
                  </div>
                </div>

                {/* English Definition */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed space-y-1">
                  <span className="font-bold text-slate-900">Definition:</span>
                  <p className="text-sm font-medium text-slate-700">{selectedWord.definition}</p>
                </div>

                {/* Essay Context */}
                <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 leading-relaxed space-y-1">
                  <span className="font-bold text-amber-900">In Essay Context:</span>
                  <p className="italic font-medium">"{selectedWord.example}"</p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => handleSaveToFlashcards(selectedWord.id)}
                    className={`py-3 px-3 rounded-2xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      savedItemIds.has(selectedWord.id)
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
                    }`}
                  >
                    {savedItemIds.has(selectedWord.id) ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Saved to SRS</span>
                      </>
                    ) : (
                      <>
                        <BookmarkCheck className="w-4 h-4" />
                        <span>Save (+5 XP)</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopyText(selectedWord.word)}
                    className="py-3 px-3 rounded-2xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copiedText === selectedWord.word ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Word</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* 2. READING PHRASE / IDIOM POPUP */}
            {selectedPhrase && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-black uppercase px-2.5 py-1 rounded-lg bg-amber-100 text-amber-950 border border-amber-300">
                    ✦ {selectedPhrase.type.toUpperCase().replace('_', ' ')}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handlePronounce(selectedPhrase.phrase)}
                      className="p-2 rounded-xl bg-amber-50 text-amber-800 hover:bg-amber-100 transition cursor-pointer"
                      title="Pronounce"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsMobilePopupOpen(false)}
                      className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition cursor-pointer"
                      title="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  "{selectedPhrase.phrase}"
                </h3>

                {/* Uzbek Translation */}
                <div className="p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200 space-y-0.5">
                  <span className="text-[11px] font-black uppercase text-amber-900 tracking-wider">
                    O'zbekcha ma'nosi:
                  </span>
                  <div className="text-base font-extrabold text-amber-950">
                    {selectedPhrase.translationUz}
                  </div>
                </div>

                {/* Meaning & Usage */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed space-y-1">
                  <span className="font-bold text-slate-900">Meaning & Usage:</span>
                  <p>{selectedPhrase.meaning}</p>
                </div>

                {/* Essay Context */}
                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-950 leading-relaxed space-y-1">
                  <span className="font-bold text-amber-900">In Essay Context:</span>
                  <p className="italic font-medium">"{selectedPhrase.example}"</p>
                </div>

                {selectedPhrase.contextNote && (
                  <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-950 leading-relaxed">
                    <span className="font-bold">Context Note: </span>
                    {selectedPhrase.contextNote}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => handleSaveToFlashcards(selectedPhrase.id)}
                    className={`py-3 px-3 rounded-2xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      savedItemIds.has(selectedPhrase.id)
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-black shadow-xs'
                    }`}
                  >
                    {savedItemIds.has(selectedPhrase.id) ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Saved to SRS</span>
                      </>
                    ) : (
                      <>
                        <BookmarkCheck className="w-4 h-4" />
                        <span>Save Phrase (+5 XP)</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopyText(selectedPhrase.phrase)}
                    className="py-3 px-3 rounded-2xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copiedText === selectedPhrase.phrase ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Phrase</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* 3. WRITING CHUNK POPUP */}
            {selectedChunk && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-black uppercase px-2.5 py-1 rounded-lg bg-violet-100 text-violet-900 border border-violet-200">
                    ✍️ {selectedChunk.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handlePronounce(selectedChunk.phrase)}
                      className="p-2 rounded-xl bg-violet-50 text-violet-700 hover:bg-violet-100 transition cursor-pointer"
                      title="Pronounce"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsMobilePopupOpen(false)}
                      className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition cursor-pointer"
                      title="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  "{selectedChunk.phrase}"
                </h3>

                {/* Uzbek Translation */}
                <div className="p-3.5 rounded-2xl bg-violet-50/80 border border-violet-200 space-y-0.5">
                  <span className="text-[11px] font-black uppercase text-violet-900 tracking-wider">
                    O'zbekcha tarjimasi:
                  </span>
                  <div className="text-base font-extrabold text-violet-950">
                    {selectedChunk.translationUz}
                  </div>
                </div>

                {/* Rhetorical Function */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed space-y-1">
                  <span className="font-bold text-slate-900">Rhetorical Function:</span>
                  <p>{selectedChunk.function}</p>
                </div>

                {/* Essay Context */}
                <div className="p-3.5 rounded-2xl bg-violet-50/60 border border-violet-100 text-xs text-violet-950 leading-relaxed space-y-1">
                  <span className="font-bold text-violet-900">Essay Context:</span>
                  <p className="italic font-medium">"{selectedChunk.example}"</p>
                </div>

                {selectedChunk.usageNote && (
                  <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                    <span className="font-bold">Exam Writing Tip: </span>
                    {selectedChunk.usageNote}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      handleInsertChunkToPractice(selectedChunk.phrase);
                      setIsMobilePopupOpen(false);
                    }}
                    className="py-3 px-3 rounded-2xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <PenTool className="w-4 h-4 text-amber-400" />
                    <span>Use in Practice</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopyChunk(selectedChunk)}
                    className={`py-3 px-3 rounded-2xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      copiedChunkId === selectedChunk.id
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-violet-600 hover:bg-violet-700 text-white shadow-xs'
                    }`}
                  >
                    {copiedChunkId === selectedChunk.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Chunk</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* 4. ESSAY IDEA POPUP */}
            {selectedIdea && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-black uppercase px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-950 border border-emerald-200">
                    💡 {selectedIdea.type.toUpperCase().replace('_', ' ')}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsMobilePopupOpen(false)}
                    className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition cursor-pointer"
                    title="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900 leading-snug">
                    {selectedIdea.title}
                  </h3>
                  <div className="mt-2 p-3 rounded-2xl bg-emerald-50 text-emerald-950 text-xs italic font-medium leading-relaxed border border-emerald-200/60">
                    "{selectedIdea.anchorText}"
                  </div>
                </div>

                {/* Core Logic */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed space-y-1">
                  <span className="font-bold text-slate-900">Argument Core Logic:</span>
                  <p>{selectedIdea.explanation}</p>
                </div>

                {/* Uzbek explanation */}
                <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-950 leading-relaxed space-y-1">
                  <span className="font-bold text-indigo-900">O'zbekcha mazmuni:</span>
                  <p>{selectedIdea.explanationUz}</p>
                </div>

                {/* Score Insight */}
                <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 leading-relaxed space-y-1">
                  <span className="font-bold text-amber-900">Why this scores 6.0:</span>
                  <p>{selectedIdea.scoreInsight}</p>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsMobilePopupOpen(false)}
                  className="w-full py-3 px-4 rounded-2xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Close / Tushunarli</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ToeflEssaysPage;
