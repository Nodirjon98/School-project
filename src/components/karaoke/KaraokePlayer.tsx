import React, { useState, useEffect, useRef } from 'react';
import { KaraokeSong, KaraokeLine, KaraokeQuestion } from '../../types';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  CheckCircle2,
  XCircle,
  Sparkles,
  Award,
  Eye,
  EyeOff,
  Music,
  ChevronRight,
  ExternalLink,
  BookOpen,
  HelpCircle,
  Layers,
  Check,
  CheckCheck
} from 'lucide-react';

interface KaraokePlayerProps {
  song: KaraokeSong;
  onFinish?: (score: number, total: number) => void;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const KaraokePlayer: React.FC<KaraokePlayerProps> = ({ song, onFinish }) => {
  const [activeTab, setActiveTab] = useState<'lyrics' | 'quiz' | 'grammar'>('lyrics');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});
  const [checkedGaps, setCheckedGaps] = useState<Record<string, boolean>>({});
  const [showTranslations, setShowTranslations] = useState(false);
  const [inputMode, setInputMode] = useState<'type' | 'options'>('type');
  const [activeLineId, setActiveLineId] = useState<string | null>(null);

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeLineRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<any>(null);

  // Load YouTube Iframe API
  useEffect(() => {
    let isMounted = true;

    const setupPlayer = () => {
      if (!window.YT || !window.YT.Player) return;
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // ignore
        }
      }

      playerRef.current = new window.YT.Player(`youtube-karaoke-${song.id}`, {
        videoId: song.youtubeId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1
        },
        events: {
          onReady: (event: any) => {
            if (!isMounted) return;
            setDuration(event.target.getDuration());
          },
          onStateChange: (event: any) => {
            if (!isMounted) return;
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
              setIsPlaying(false);
            }
          }
        }
      });
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => {
        if (isMounted) setupPlayer();
      };
    } else {
      setupPlayer();
    }

    // Timer interval to poll current playback time
    intervalRef.current = setInterval(() => {
      if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
        try {
          const t = playerRef.current.getCurrentTime();
          setCurrentTime(t);

          // Find which line is currently active
          const active = song.lines.find(l => t >= l.startTime && t <= l.endTime + 0.5);
          if (active) {
            setActiveLineId(active.id);
          } else {
            // keep the nearest previous line
            const pastLines = song.lines.filter(l => t >= l.startTime);
            if (pastLines.length > 0) {
              setActiveLineId(pastLines[pastLines.length - 1].id);
            }
          }
        } catch (err) {
          // Player not ready
        }
      }
    }, 250);

    return () => {
      isMounted = false;
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {}
      }
    };
  }, [song.id, song.youtubeId]);

  // Scroll active line into view smoothly
  useEffect(() => {
    if (activeLineRef.current && activeTab === 'lyrics') {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [activeLineId, activeTab]);

  const jumpToLine = (line: KaraokeLine) => {
    if (!playerRef.current || typeof playerRef.current.seekTo !== 'function') return;
    try {
      playerRef.current.seekTo(line.startTime, true);
      playerRef.current.playVideo();
      setIsPlaying(true);
      setActiveLineId(line.id);
    } catch (e) {
      console.error(e);
    }
  };

  const handleInputChange = (lineId: string, val: string) => {
    setUserInputs(prev => ({ ...prev, [lineId]: val }));
  };

  const cleanWord = (w: string) => w.toLowerCase().replace(/[^a-z0-9']/g, '').trim();

  const checkLineAnswer = (line: KaraokeLine) => {
    const entered = cleanWord(userInputs[line.id] || '');
    const correct = cleanWord(line.targetWord);
    const isMatched = entered === correct;

    setCheckedGaps(prev => ({ ...prev, [line.id]: isMatched }));

    // Check if total completed
    const newCorrectCount = Object.keys(checkedGaps).filter(k => checkedGaps[k]).length + (isMatched ? 1 : 0);
    if (newCorrectCount === song.lines.length && onFinish) {
      onFinish(newCorrectCount, song.lines.length);
    }
  };

  const selectOption = (line: KaraokeLine, opt: string) => {
    setUserInputs(prev => ({ ...prev, [line.id]: opt }));
    const entered = cleanWord(opt);
    const correct = cleanWord(line.targetWord);
    const isMatched = entered === correct;

    setCheckedGaps(prev => ({ ...prev, [line.id]: isMatched }));

    const newCorrectCount = Object.keys(checkedGaps).filter(k => checkedGaps[k]).length + (isMatched ? 1 : 0);
    if (newCorrectCount === song.lines.length && onFinish) {
      onFinish(newCorrectCount, song.lines.length);
    }
  };

  // Score statistics
  const totalGaps = song.lines.length;
  const correctCount = Object.values(checkedGaps).filter(Boolean).length;
  const scorePercent = totalGaps > 0 ? Math.round((correctCount / totalGaps) * 100) : 0;

  // Quiz calculations
  const quizQuestions = song.quizQuestions || [];
  const quizAnsweredCount = Object.keys(quizAnswers).length;
  const quizCorrectCount = quizQuestions.filter(q => quizAnswers[q.id] === q.answerIndex).length;

  const handleQuizSelect = (questionId: string, optionIndex: number) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const resetKaraoke = () => {
    setUserInputs({});
    setCheckedGaps({});
  };

  // Render a lyric line with clean gap-filling and zero overlap
  const renderLineContent = (line: KaraokeLine, isActive: boolean) => {
    const rawText = line.lineText;
    const target = line.targetWord;

    const regex = new RegExp(`\\b${target}\\b`, 'i');
    const parts = rawText.split(regex);

    const currentVal = userInputs[line.id] || '';
    const isChecked = checkedGaps[line.id] !== undefined;
    const isCorrect = checkedGaps[line.id] === true;
    const isWrong = isChecked && !isCorrect;

    return (
      <div className="space-y-2 mt-1">
        {/* Lyric line with inline gap and non-overlapping check mark */}
        <div className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed flex flex-wrap items-center">
          <span>{parts[0]}</span>

          {/* Gap Input Container with safe inline spacing */}
          <span className="inline-flex items-center gap-1.5 mx-1.5">
            {inputMode === 'type' ? (
              <input
                id={`karaoke-input-${line.id}`}
                type="text"
                autoComplete="off"
                placeholder="yozing..."
                value={currentVal}
                onChange={(e) => handleInputChange(line.id, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    checkLineAnswer(line);
                  }
                }}
                onBlur={() => {
                  if (currentVal.trim()) checkLineAnswer(line);
                }}
                className={`w-28 sm:w-36 text-center font-bold px-2 py-1 text-sm sm:text-base rounded-lg border transition-all outline-none shadow-sm ${
                  isCorrect
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-300'
                    : isWrong
                    ? 'bg-rose-50 border-rose-400 text-rose-900 ring-2 ring-rose-300'
                    : isActive
                    ? 'bg-white border-indigo-500 ring-2 ring-indigo-300 text-indigo-950 font-bold'
                    : 'bg-white/90 border-slate-300 text-slate-900'
                }`}
              />
            ) : (
              <span
                className={`min-w-28 sm:min-w-36 text-center font-bold px-3 py-1 text-sm sm:text-base rounded-lg border transition-all ${
                  isCorrect
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                    : isWrong
                    ? 'bg-rose-50 border-rose-400 text-rose-900'
                    : 'bg-indigo-50 border-indigo-300 text-indigo-700 underline decoration-dotted'
                }`}
              >
                {currentVal || '______'}
              </span>
            )}

            {/* Check/Cross icons displayed strictly inline to prevent overlap */}
            {isCorrect && (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            )}
            {isWrong && (
              <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
            )}
          </span>

          <span>{parts[1]}</span>
        </div>

        {/* Options picker if in options mode */}
        {line.options && line.options.length > 0 && inputMode === 'options' && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-xs text-slate-500 font-medium mr-1">Variantlar:</span>
            {line.options.map((opt) => (
              <button
                key={opt}
                id={`karaoke-opt-${line.id}-${opt}`}
                onClick={() => selectOption(line, opt)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg border transition-all shadow-sm ${
                  currentVal.toLowerCase() === opt.toLowerCase()
                    ? isCorrect
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-rose-600 text-white border-rose-600'
                    : 'bg-white hover:bg-indigo-50 text-slate-700 border-slate-300'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {/* Show correct answer hint when user was wrong */}
        {isWrong && (
          <div className="text-xs text-rose-600 font-medium">
            To'g'ri javob: <span className="font-bold underline">{line.targetWord}</span>
          </div>
        )}

        {/* Uzbek Translation */}
        {showTranslations && line.translationUz && (
          <div className="text-xs sm:text-sm text-slate-500 italic flex items-center gap-1.5 mt-1">
            <span>🇺🇿</span>
            <span>{line.translationUz}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Top Header: Song Info & Main Tab Selector */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-md flex-shrink-0 bg-slate-900">
            <img src={song.coverImage} alt={song.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Music className="w-7 h-7 text-white/90" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-indigo-100 text-indigo-700 uppercase tracking-wide">
                {song.level} • {song.difficulty}
              </span>
              <span className="text-xs text-slate-500 font-medium">{song.genre}</span>
            </div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">{song.title}</h2>
            <p className="text-sm font-medium text-slate-600">{song.artist}</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            id="tab-karaoke-lyrics"
            onClick={() => setActiveTab('lyrics')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'lyrics'
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Music className="w-4 h-4" />
            <span>Sinxron Karaoke ({totalGaps})</span>
          </button>

          <button
            id="tab-karaoke-quiz"
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'quiz'
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Qo'shiq Testi ({quizQuestions.length})</span>
          </button>

          {song.grammarPoints && song.grammarPoints.length > 0 && (
            <button
              id="tab-karaoke-grammar"
              onClick={() => setActiveTab('grammar')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'grammar'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Grammatika & Iboralar</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Grid: Left Video / Right Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: YouTube Video Embed + Controls + Direct Link */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-800 aspect-video relative">
            <div id={`youtube-karaoke-${song.id}`} className="w-full h-full" />
          </div>

          {/* Direct YouTube Fallback Button */}
          <div className="flex items-center justify-between px-3 py-2 bg-slate-100 rounded-xl border border-slate-200 text-xs">
            <span className="text-slate-600">Video yuklanmadimi?</span>
            <a
              href={`https://www.youtube.com/watch?v=${song.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-red-600 hover:text-red-700 hover:underline"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>YouTube'da ochish</span>
            </a>
          </div>

          {/* Quick Info / Theme Card */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm text-xs space-y-1.5">
            <div className="font-bold text-slate-900">Mavzu va mohiyat:</div>
            <p className="text-slate-600 leading-relaxed">{song.theme}</p>
            <p className="text-slate-500 pt-1 italic">{song.description}</p>
          </div>

          {/* Score Pill in Left Panel for Quick Progress */}
          <div className="bg-gradient-to-r from-amber-50 to-amber-100/70 rounded-2xl p-4 border border-amber-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-amber-600" />
              <div>
                <div className="text-sm font-bold text-amber-950">
                  Gap-fill: {correctCount} / {totalGaps}
                </div>
                <div className="text-xs text-amber-800 font-medium">
                  {scorePercent}% aniqlik • {quizAnsweredCount > 0 ? `Test: ${quizCorrectCount}/${quizQuestions.length}` : 'Test hali yechilmadi'}
                </div>
              </div>
            </div>
            {correctCount > 0 && (
              <button
                onClick={resetKaraoke}
                title="Qayta boshlash"
                className="text-xs font-semibold px-2.5 py-1 bg-white hover:bg-amber-50 text-amber-900 border border-amber-300 rounded-lg shadow-sm"
              >
                Tozalash
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Dynamic Tab Content */}
        <div className="lg:col-span-7">
          {/* TAB 1: Synchronized Karaoke Lyrics Gap-Fill */}
          {activeTab === 'lyrics' && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 flex flex-col h-[540px]">
              {/* Controls bar: Mode toggle & translations */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 mb-3">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Sinxron so'zlar ({correctCount}/{totalGaps})</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Mode switch */}
                  <div className="flex items-center bg-white p-0.5 rounded-lg border border-slate-200 text-xs font-semibold shadow-sm">
                    <button
                      id="mode-type-btn"
                      onClick={() => setInputMode('type')}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        inputMode === 'type' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      ✍️ Yozish
                    </button>
                    <button
                      id="mode-options-btn"
                      onClick={() => setInputMode('options')}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        inputMode === 'options' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      🎯 Variantlar
                    </button>
                  </div>

                  {/* Uzbek translation toggle */}
                  <button
                    id="toggle-uz-translation-btn"
                    onClick={() => setShowTranslations(!showTranslations)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                      showTranslations
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {showTranslations ? <Eye className="w-3.5 h-3.5 text-emerald-600" /> : <EyeOff className="w-3.5 h-3.5 text-slate-400" />}
                    <span>Tarjima</span>
                  </button>
                </div>
              </div>

              {/* Scrollable Lyrics Stream */}
              <div ref={containerRef} className="flex-1 overflow-y-auto space-y-3.5 pr-1.5 scroll-smooth">
                {song.lines.map((line, idx) => {
                  const isActive = activeLineId === line.id;
                  const isPast = currentTime > line.endTime;

                  return (
                    <div
                      key={line.id}
                      ref={isActive ? activeLineRef : null}
                      className={`relative p-4 rounded-xl transition-all duration-200 border ${
                        isActive
                          ? 'bg-white border-indigo-400 ring-2 ring-indigo-200 shadow-md transform scale-[1.01]'
                          : isPast
                          ? 'bg-white/70 border-slate-200 opacity-95'
                          : 'bg-white/40 border-slate-200/70 hover:bg-white/80'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="text-[11px] font-bold text-slate-400">
                          #{idx + 1} • {Math.floor(line.startTime)}s
                        </span>

                        <button
                          id={`replay-line-${line.id}`}
                          onClick={() => jumpToLine(line)}
                          title="Shu satrni qayta eshitish"
                          className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Qayta eshitish</span>
                        </button>
                      </div>

                      {renderLineContent(line, isActive)}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Completion Banner */}
              {correctCount === totalGaps && (
                <div className="mt-3 p-3 bg-emerald-50 border border-emerald-300 rounded-xl flex items-center justify-between text-emerald-900 animate-fade-in">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                    <span>Ajoyib! Barcha so'zlarni to'g'ri topdingiz!</span>
                  </div>
                  <button
                    onClick={() => setActiveTab('quiz')}
                    className="flex items-center gap-1 text-xs px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-sm"
                  >
                    <span>Testni yechish</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Song Comprehension & Idioms Quiz */}
          {activeTab === 'quiz' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-6 h-[540px] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-indigo-600" />
                    <span>Qo'shiq tahlili, iboralar va mazmuniy savollar</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Qo'shiqda ishlatilgan metaforalar, frazeologizmlar va g'oyaviy ma'noni tekshiring.
                  </p>
                </div>
                <div className="px-3 py-1 bg-indigo-50 text-indigo-700 font-bold rounded-xl text-xs">
                  {quizAnsweredCount} / {quizQuestions.length} yechildi
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {quizQuestions.map((q, qIndex) => {
                  const selected = quizAnswers[q.id];
                  const hasAnswered = selected !== undefined;
                  const isCorrect = selected === q.answerIndex;

                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-xl border transition-all ${
                        hasAnswered
                          ? isCorrect
                            ? 'bg-emerald-50/50 border-emerald-200'
                            : 'bg-rose-50/50 border-rose-200'
                          : 'bg-slate-50/60 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-200 text-slate-700 uppercase">
                          Savol #{qIndex + 1} • {q.type}
                        </span>
                        {hasAnswered && (
                          <span
                            className={`text-xs font-bold ${
                              isCorrect ? 'text-emerald-700' : 'text-rose-600'
                            }`}
                          >
                            {isCorrect ? '✓ To\'g\'ri javob (+10 XP)' : '✗ Noto\'g\'ri javob'}
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
                        {q.question}
                      </h4>

                      {/* Options */}
                      <div className="space-y-2">
                        {q.options.map((opt, oIdx) => {
                          const isOptionSelected = selected === oIdx;
                          const isOptionCorrect = oIdx === q.answerIndex;

                          let btnStyle = 'bg-white border-slate-200 hover:bg-slate-100 text-slate-800';

                          if (hasAnswered) {
                            if (isOptionCorrect) {
                              btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                            } else if (isOptionSelected && !isCorrect) {
                              btnStyle = 'bg-rose-600 text-white border-rose-600 font-bold';
                            } else {
                              btnStyle = 'bg-white border-slate-200 opacity-60 text-slate-500';
                            }
                          }

                          return (
                            <button
                              key={oIdx}
                              disabled={hasAnswered}
                              onClick={() => handleQuizSelect(q.id, oIdx)}
                              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {hasAnswered && isOptionCorrect && (
                                <Check className="w-4 h-4 text-white" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      {hasAnswered && (
                        <div className="mt-3 p-3 bg-white/80 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                          <span className="font-bold text-indigo-700 flex items-center gap-1">
                            <span>🇺🇿 Tahliliy izoh:</span>
                          </span>
                          <p className="leading-relaxed">{q.explanationUz}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Overall quiz completion card */}
              {quizAnsweredCount === quizQuestions.length && (
                <div className="p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-2xl border border-indigo-200 text-indigo-950 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm">
                      Test yakunlandi: {quizCorrectCount} / {quizQuestions.length} to'g'ri!
                    </div>
                    <div className="text-xs text-indigo-700">
                      Qo'shiq tahlilini muvaffaqiyatli bajardingiz. +{quizCorrectCount * 10} XP hisobingizga qo'shildi!
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('grammar')}
                    className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm"
                  >
                    Grammatikani ko'rish →
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Grammar Points & Idioms Cards */}
          {activeTab === 'grammar' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-5 h-[540px] overflow-y-auto">
              <div className="border-b border-slate-200 pb-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  <span>Qo'shiqdagi Grammatika & Foydali Konstruksiyalar</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Qo'shiq orqali o'rganiladigan real ingliz tili qoidalari va frazalari.
                </p>
              </div>

              <div className="space-y-4">
                {song.grammarPoints?.map((gp, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/40 space-y-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-sm text-indigo-950">{gp.title}</h4>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
                      {gp.ruleUz}
                    </p>

                    <div className="ml-8 p-2.5 bg-white rounded-lg border border-indigo-200/70 text-xs font-mono text-indigo-900">
                      <span className="font-bold text-indigo-600 mr-1.5">🎵 Qo'shiqdan misol:</span>
                      <span>"{gp.exampleFromSong}"</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Practice suggestion */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-center justify-between">
                <span>Ushbu konstruksiyalarni yodda saqlab, qo'shiqni yana bir bor tinglab ko'ring!</span>
                <button
                  onClick={() => setActiveTab('lyrics')}
                  className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-sm"
                >
                  Karaokega qaytish
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
