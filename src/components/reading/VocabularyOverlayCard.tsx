import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  Volume2, VolumeX, Play, RotateCcw, Check, Plus, X, 
  Sparkles, Mic, MicOff, Copy, ChevronLeft, ChevronRight, 
  BookOpen, Award, ExternalLink, Bookmark, Gauge, Lightbulb,
  CornerDownRight, CheckCircle2, AlertCircle, Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { RealWorldVocab } from '../../types';
import { playSound } from '../../lib/sound';
import { 
  speakTargetWord, 
  getSyllableBreakdown, 
  evaluatePronunciation, 
  PronunciationEvaluationResult 
} from '../../lib/pronunciationEngine';
import { getSynonymForVocab } from '../../data/realworld/academicSynonyms';

export interface VocabularyOverlayCardProps {
  vocab: RealWorldVocab;
  allPassageVocab?: RealWorldVocab[];
  passageParagraphs?: string[];
  passageTitle?: string;
  onClose: () => void;
  onSelectVocab?: (vocab: RealWorldVocab) => void;
  onSaveToMyVocab?: (vocab: RealWorldVocab) => void;
  isSaved?: boolean;
  onJumpToText?: (word: string) => void;
  theme?: 'paper' | 'day' | 'night';
}

export const VocabularyOverlayCard: React.FC<VocabularyOverlayCardProps> = ({
  vocab,
  allPassageVocab = [],
  passageParagraphs = [],
  passageTitle,
  onClose,
  onSelectVocab,
  onSaveToMyVocab,
  isSaved = false,
  onJumpToText,
  theme = 'paper'
}) => {
  // Pronunciation states
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState<'normal' | 'slow'>('normal');
  const [activeTab, setActiveTab] = useState<'details' | 'practice'>('details');
  const [copied, setCopied] = useState(false);

  // Practice state
  const [isRecording, setIsRecording] = useState(false);
  const [practiceResult, setPracticeResult] = useState<PronunciationEvaluationResult | null>(null);
  const [practiceAttempts, setPracticeAttempts] = useState(0);
  const [speechSupported, setSpeechSupported] = useState(true);
  const recognitionRef = useRef<any>(null);
  const currentTranscriptRef = useRef('');

  // Enriched synonym data
  const synonymInfo = useMemo(() => {
    return getSynonymForVocab(vocab);
  }, [vocab]);

  // Syllable breakdown with stress
  const syllables = useMemo(() => {
    return getSyllableBreakdown(vocab.word);
  }, [vocab.word]);

  // Find sentence from the reading passage
  const passageContextSentence = useMemo(() => {
    if (!passageParagraphs || passageParagraphs.length === 0) return null;
    const escaped = vocab.word.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const wordRegex = new RegExp(`\\b${escaped}(s|es|ed|ing|d)?\\b`, 'i');

    for (const para of passageParagraphs) {
      // Split into sentences
      const sentences = para.match(/[^.!?]+[.!?]+(\s+|$)|[^.!?]+$/g) || [para];
      for (const sent of sentences) {
        if (wordRegex.test(sent)) {
          return sent.trim();
        }
      }
    }
    return null;
  }, [passageParagraphs, vocab.word]);

  // Navigation index among all passage target words
  const currentIndex = useMemo(() => {
    return allPassageVocab.findIndex(
      v => v.word.toLowerCase() === vocab.word.toLowerCase()
    );
  }, [allPassageVocab, vocab.word]);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < allPassageVocab.length - 1;

  const handlePrev = useCallback(() => {
    if (hasPrev && onSelectVocab) {
      playSound('click');
      const prevVocab = allPassageVocab[currentIndex - 1];
      onSelectVocab(prevVocab);
    }
  }, [hasPrev, onSelectVocab, allPassageVocab, currentIndex]);

  const handleNext = useCallback(() => {
    if (hasNext && onSelectVocab) {
      playSound('click');
      const nextVocab = allPassageVocab[currentIndex + 1];
      onSelectVocab(nextVocab);
    }
  }, [hasNext, onSelectVocab, allPassageVocab, currentIndex]);

  // Audio Playback
  const handlePlayAudio = useCallback((speed: 'normal' | 'slow' = 'normal') => {
    setAudioSpeed(speed);
    setIsPlayingAudio(true);
    speakTargetWord(vocab.word, {
      rate: speed === 'slow' ? 0.72 : 1.0,
      pitch: 1.0,
      onEnd: () => {
        setIsPlayingAudio(false);
      }
    });
  }, [vocab.word]);

  // Auto-play audio on open or word change
  useEffect(() => {
    handlePlayAudio('normal');
    setPracticeResult(null);
    setIsRecording(false);
  }, [vocab.word]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev) {
        handlePrev();
      } else if (e.key === 'ArrowRight' && hasNext) {
        handleNext();
      } else if (e.key.toLowerCase() === 'p' || e.code === 'Space') {
        // Prevent page scroll on Space
        if (e.code === 'Space' && (e.target as HTMLElement)?.tagName !== 'INPUT') {
          e.preventDefault();
        }
        handlePlayAudio('normal');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, hasPrev, hasNext, handlePrev, handleNext, handlePlayAudio]);

  // Speech Recognition Setup for Pronunciation Practice
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        currentTranscriptRef.current = transcript;
      };

      recognition.onerror = () => {
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
        const spoken = currentTranscriptRef.current;
        if (spoken) {
          const evalResult = evaluatePronunciation(vocab.word, spoken);
          setPracticeResult(evalResult);
          setPracticeAttempts(prev => prev + 1);

          if (evalResult.score >= 80) {
            playSound('correct');
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.6 }
            });
          } else {
            playSound('wrong');
          }
        }
      };

      recognitionRef.current = recognition;
    } else {
      setSpeechSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        try { recognitionRef.current.abort(); } catch (_) {}
      }
    };
  }, [vocab.word]);

  const handleToggleRecord = () => {
    if (!speechSupported) return;

    if (isRecording) {
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch (_) {}
      }
      setIsRecording(false);
    } else {
      currentTranscriptRef.current = '';
      setPracticeResult(null);
      setIsRecording(true);
      playSound('click');
      try {
        recognitionRef.current?.start();
      } catch (err) {
        console.warn('Recognition start error:', err);
        setIsRecording(false);
      }
    }
  };

  // Copy Word and definition
  const handleCopy = () => {
    const textToCopy = `${vocab.word} [${vocab.phonetic}] (${vocab.pos})\nDefinition: ${vocab.definitionEn}\nO'zbekcha: ${vocab.translationUz}\nExample: "${vocab.sampleSentence}"`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    playSound('click');
    setTimeout(() => setCopied(false), 2000);
  };

  // Part of speech color tag
  const posBadgeColor = useMemo(() => {
    const p = (vocab.pos || '').toLowerCase();
    if (p.includes('n.')) return 'bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-800';
    if (p.includes('v.')) return 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800';
    if (p.includes('adj.')) return 'bg-amber-100 text-amber-900 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800';
    if (p.includes('adv.')) return 'bg-purple-100 text-purple-900 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800';
    return 'bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';
  }, [vocab.pos]);

  // Highlight word within a sentence
  const renderHighlightedSentence = (sentence: string) => {
    const escaped = vocab.word.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(\\b${escaped}(?:s|es|ed|ing|d)?\\b)`, 'gi');
    const parts = sentence.split(regex);

    return parts.map((part, idx) => {
      if (regex.test(part)) {
        return (
          <span 
            key={idx} 
            className="font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 px-1 py-0.5 rounded border-b border-indigo-300 dark:border-indigo-700"
          >
            {part}
          </span>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="vocab-overlay-title"
    >
      <div 
        className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[88vh] animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* =================================================================== */}
        {/* TOP BAR: CAROUSEL COUNTER, SHORTCUTS & CLOSE BUTTON                */}
        {/* =================================================================== */}
        <div className="px-5 py-3.5 bg-slate-50/90 dark:bg-slate-800/80 border-b border-slate-200/80 dark:border-slate-750 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Akademik Lug'at Kartasi
            </span>
            {allPassageVocab.length > 0 && (
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800">
                {currentIndex >= 0 ? currentIndex + 1 : 1} / {allPassageVocab.length}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            {/* Carousel navigation arrows */}
            {allPassageVocab.length > 1 && (
              <div className="flex items-center bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-0.5 mr-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={!hasPrev}
                  className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                  title="Oldingi so'z (←)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!hasNext}
                  className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                  title="Keyingi so'z (→)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              className="p-1.5 rounded-xl hover:bg-white dark:hover:bg-slate-800 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition cursor-pointer"
              title="So'zni nusxalash"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-white dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition cursor-pointer"
              title="Yopish (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* =================================================================== */}
        {/* CARD CONTENT (SCROLLABLE BODY)                                      */}
        {/* =================================================================== */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 text-slate-800 dark:text-slate-200">
          
          {/* 1. PRONUNCIATION HEADER SECTION */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h2 
                  id="vocab-overlay-title" 
                  className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight"
                >
                  {vocab.word}
                </h2>
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${posBadgeColor}`}>
                  {vocab.pos}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                  AWL Academic
                </span>
              </div>

              {/* Phonetic & Syllables */}
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs">
                <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/70 dark:bg-indigo-950/40 px-2 py-0.5 rounded">
                  {vocab.phonetic}
                </span>
                {syllables && syllables !== vocab.word.toUpperCase() && (
                  <span className="text-slate-400 dark:text-slate-500 font-medium">
                    Bo'g'inlar: <strong className="text-slate-600 dark:text-slate-300">{syllables}</strong>
                  </span>
                )}
              </div>

              {/* PROMINENT PREBUILT UZBEK TRANSLATION SPOTLIGHT */}
              <div className="mt-3 p-3 sm:p-3.5 rounded-2xl bg-indigo-50/90 dark:bg-indigo-950/70 border-2 border-indigo-200 dark:border-indigo-800 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
                    O'zbekcha Ma'nosi (Tayyor Lug'at):
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full">
                    ✓ Rasmiy tarjima
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-indigo-950 dark:text-indigo-100 mt-1">
                  {vocab.translationUz}
                </div>
              </div>
            </div>

            {/* Pronunciation Audio Controls */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Normal Speed Audio (1.0x) */}
              <button
                type="button"
                onClick={() => handlePlayAudio('normal')}
                className={`relative px-3 py-2 rounded-xl flex items-center gap-2 font-bold text-xs transition shadow-xs cursor-pointer ${
                  isPlayingAudio && audioSpeed === 'normal'
                    ? 'bg-indigo-600 text-white ring-2 ring-indigo-400 ring-offset-2'
                    : 'bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                }`}
                title="Tabiiy talaffuz (1.0x)"
              >
                <Volume2 className="w-4 h-4" />
                <span>1.0x</span>
                {isPlayingAudio && audioSpeed === 'normal' && (
                  <span className="flex items-center gap-0.5 ml-1">
                    <span className="w-1 h-3 bg-white rounded-full animate-bounce" />
                    <span className="w-1 h-2 bg-white rounded-full animate-bounce delay-75" />
                    <span className="w-1 h-3.5 bg-white rounded-full animate-bounce delay-150" />
                  </span>
                )}
              </button>

              {/* Slow Audio (0.75x) for Syllable Practice */}
              <button
                type="button"
                onClick={() => handlePlayAudio('slow')}
                className={`px-2.5 py-2 rounded-xl flex items-center gap-1.5 font-bold text-xs transition cursor-pointer ${
                  isPlayingAudio && audioSpeed === 'slow'
                    ? 'bg-amber-500 text-white ring-2 ring-amber-300 ring-offset-2'
                    : 'bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/60 dark:hover:bg-amber-900 text-amber-800 dark:text-amber-300'
                }`}
                title="Sekinlashtirilgan talaffuz (0.75x bo'g'inlab)"
              >
                <Gauge className="w-3.5 h-3.5" />
                <span>0.75x</span>
              </button>

              {/* Practice Mic Button Toggle */}
              {speechSupported && (
                <button
                  type="button"
                  onClick={() => setActiveTab(prev => prev === 'practice' ? 'details' : 'practice')}
                  className={`p-2 rounded-xl transition cursor-pointer ${
                    activeTab === 'practice'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300'
                  }`}
                  title="Talaffuzni mashq qilish (Ovozli tekshiruv)"
                >
                  <Mic className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* PRONUNCIATION PRACTICE DRAWER (EXPANDABLE) */}
          {activeTab === 'practice' && speechSupported && (
            <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mic className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                    O'z talaffuzingizni tekshiring:
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className="text-[11px] text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  Yopish
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleToggleRecord}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition cursor-pointer ${
                    isRecording
                      ? 'bg-rose-600 text-white animate-pulse shadow-md'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                  }`}
                >
                  {isRecording ? (
                    <>
                      <MicOff className="w-4 h-4" />
                      <span>Eshitilmoqda... (Gapiring)</span>
                    </>
                  ) : (
                    <>
                      <Mic className="w-4 h-4" />
                      <span>Mikrofonni yoqish</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  "{vocab.word}" so'zini aniq talaffuz qiling.
                </p>
              </div>

              {/* Practice Result Feedback */}
              {practiceResult && (
                <div className={`p-3 rounded-xl border text-xs space-y-1.5 ${
                  practiceResult.score >= 80
                    ? 'bg-white dark:bg-slate-900 border-emerald-300 dark:border-emerald-700'
                    : 'bg-white dark:bg-slate-900 border-amber-300 dark:border-amber-700'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">
                      Natija: <strong className={practiceResult.score >= 80 ? 'text-emerald-600' : 'text-amber-600'}>{practiceResult.score}% Aniqlik</strong>
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Eshitildi: "{practiceResult.transcript}"
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {practiceResult.feedbackUz}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* 2. TRANSLATION & DEFINITION SECTION */}
          <div className="space-y-3">
            {/* Uzbek Meaning */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/80">
              <div className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                O'zbekcha Ma'nosi:
              </div>
              <div className="text-lg font-black text-indigo-950 dark:text-indigo-100 mt-1">
                {vocab.translationUz}
              </div>
            </div>

            {/* English Academic Definition */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-1">
              <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                English Academic Definition:
              </div>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
                {vocab.definitionEn}
              </p>
            </div>
          </div>

          {/* 3. SYNONYM & COLLOCATION GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Synonym Box */}
            <div className="p-3.5 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/60">
              <div className="text-[10px] font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider flex items-center justify-between">
                <span>Akademik Sinonimi:</span>
                <span className="text-[9px] bg-purple-200/60 dark:bg-purple-900/80 text-purple-800 dark:text-purple-200 px-1.5 py-0.2 rounded font-mono">
                  1-Mashq
                </span>
              </div>
              <div className="text-sm font-black text-purple-950 dark:text-purple-100 mt-1">
                {synonymInfo.synonym}
              </div>
              {synonymInfo.translationUz && synonymInfo.translationUz !== vocab.translationUz && (
                <div className="text-[11px] text-purple-700 dark:text-purple-300 mt-0.5">
                  ({synonymInfo.translationUz})
                </div>
              )}
            </div>

            {/* Collocation Box */}
            <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60">
              <div className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                Academic Collocation:
              </div>
              <div className="text-sm font-black text-emerald-950 dark:text-emerald-100 mt-1">
                {vocab.collocation || `${vocab.word} pattern`}
              </div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5">
                Tez-tez birga keluvchi ibora
              </div>
            </div>
          </div>

          {/* 4. USAGE EXAMPLES SECTION */}
          <div className="space-y-3 pt-1">
            {/* Sentence from Reading Unit Passage */}
            {passageContextSentence && (
              <div className="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/50 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3 text-amber-600" />
                    <span>Matndagi jumlasi ({passageTitle ? `"${passageTitle}"` : 'Unit matni'}):</span>
                  </div>
                  {onJumpToText && (
                    <button
                      type="button"
                      onClick={() => {
                        onJumpToText(vocab.word);
                        onClose();
                      }}
                      className="text-amber-900 dark:text-amber-200 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                      title="Matndagi o'rniga o'tish"
                    >
                      <span>Matnda ko'rish</span>
                      <CornerDownRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
                <p className="text-xs sm:text-[13px] leading-relaxed text-slate-800 dark:text-slate-200 italic font-serif">
                  "{renderHighlightedSentence(passageContextSentence)}"
                </p>
              </div>
            )}

            {/* Curated Sample Sentence */}
            <div className="p-3.5 rounded-2xl bg-slate-50/90 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-800 space-y-1.5">
              <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Lightbulb className="w-3 h-3 text-amber-500" />
                <span>Lug'atdagi namunaviy misol jumla:</span>
              </div>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-800 dark:text-slate-200 italic">
                "{renderHighlightedSentence(vocab.sampleSentence)}"
              </p>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* CARD FOOTER ACTIONS: SAVE TO MY VOCAB, JUMP TO TEXT, CLOSE          */}
        {/* =================================================================== */}
        <div className="px-5 py-3.5 bg-slate-50/90 dark:bg-slate-800/80 border-t border-slate-200/80 dark:border-slate-750 flex flex-wrap items-center justify-between gap-2.5 shrink-0">
          {/* Quick text jump */}
          {onJumpToText && (
            <button
              type="button"
              onClick={() => {
                onJumpToText(vocab.word);
                onClose();
              }}
              className="py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs text-slate-700 dark:text-slate-200 transition flex items-center gap-1.5 cursor-pointer"
            >
              <CornerDownRight className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Matnda ko'rish</span>
            </button>
          )}

          {/* Save to personal vocabulary */}
          <button
            type="button"
            onClick={() => {
              if (onSaveToMyVocab && !isSaved) {
                onSaveToMyVocab(vocab);
              }
            }}
            disabled={isSaved}
            className={`flex-1 min-w-[200px] py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-xs ${
              isSaved
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800 cursor-default'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200 dark:shadow-none'
            }`}
          >
            {isSaved ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Shaxsiy lug'atga saqlangan (+10 XP)</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Shaxsiy lug'atga saqlash (+10 XP)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
