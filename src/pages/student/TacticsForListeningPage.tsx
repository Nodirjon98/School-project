import React, { useState, useEffect, useRef } from 'react';
import { 
  Headphones, Play, Pause, RotateCcw,
  CheckCircle2, ChevronRight, ChevronLeft, 
  Volume2, BookOpen, Search, Loader2, Info,
  FileText, Check, ArrowRight, Sparkles, X, Maximize2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  BASIC_TACTICS_FOR_LISTENING_UNITS, 
  getTacticsUnitByNumber
} from '../../data/tacticsForListeningData';
import { TacticsUnit, TacticsDialogueLine, TacticsQuestion } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { TacticsQuestionItem } from '../../components/tactics/TacticsQuestionItem';
import { TacticsTaskRenderer } from '../../components/tactics/TacticsTaskRenderer';
import { TacticsDictationCard } from '../../components/tactics/TacticsDictationCard';
import { TacticsPronunciationCard } from '../../components/tactics/TacticsPronunciationCard';
import { TacticsGettingReadyCard } from '../../components/tactics/TacticsGettingReadyCard';

export interface AudioTrackInfo {
  id: string; // 'l1' | 'l2-t1' | 'l2-t2' | 'l3-t1' | 'l3-t2' | 'pron' | 'dict'
  title: string;
  file: string;
  url: string;
}

export const TacticsForListeningPage: React.FC = () => {
  const { t } = useLanguage();
  const { awardXp } = useLMSData();

  const [activeUnitNumber, setActiveUnitNumber] = useState(1);
  const [activeTab, setActiveTab] = useState<'main' | 'getting_ready' | 'listening1' | 'listening2' | 'listening3' | 'conversation_corner' | 'answer_key'>('main');
  const [searchQuery, setSearchQuery] = useState('');

  // Image zoom modal
  const [modalImage, setModalImage] = useState<{ url: string; title: string } | null>(null);

  // Current Unit
  const currentUnit: TacticsUnit = getTacticsUnitByNumber(activeUnitNumber) || BASIC_TACTICS_FOR_LISTENING_UNITS[0];

  // Helper to derive track list for a unit with cache-busting
  const getUnitTracks = (unit: TacticsUnit): Record<string, AudioTrackInfo> => {
    const uNum = unit.unitNumber;
    const formatUrl = (rawUrl: string, fallbackFile: string) => {
      const base = rawUrl || `/api/tactics-audio/${fallbackFile}`;
      return `${base.split('?')[0]}?v=3rd-edition-oxford`;
    };

    return {
      l1: {
        id: 'l1',
        title: `Listening 1 (${unit.listening1?.audioFile || `cd1-${(uNum - 1) * 5 + 2}.mp3`})`,
        file: unit.listening1?.audioFile || `cd1-${(uNum - 1) * 5 + 2}.mp3`,
        url: formatUrl(unit.listening1?.audioUrl || '', unit.listening1?.audioFile || `cd1-${(uNum - 1) * 5 + 2}.mp3`)
      },
      l2_t1: {
        id: 'l2-t1',
        title: `Listening 2: Task 1 (${unit.listening2?.audioFile || `cd1-${(uNum - 1) * 5 + 3}.mp3`})`,
        file: unit.listening2?.audioFile || `cd1-${(uNum - 1) * 5 + 3}.mp3`,
        url: formatUrl(unit.listening2?.audioUrl || '', unit.listening2?.audioFile || `cd1-${(uNum - 1) * 5 + 3}.mp3`)
      },
      l2_t2: {
        id: 'l2-t2',
        title: `Listening 2: Task 2 (${unit.listening2?.audioFile || `cd1-${(uNum - 1) * 5 + 3}.mp3`})`,
        file: unit.listening2?.audioFile || `cd1-${(uNum - 1) * 5 + 3}.mp3`,
        url: formatUrl(unit.listening2?.task2?.audioUrl || unit.listening2?.audioUrl || '', unit.listening2?.audioFile || `cd1-${(uNum - 1) * 5 + 3}.mp3`)
      },
      l3_t1: {
        id: 'l3-t1',
        title: `Listening 3: Task 1 (${unit.listening3?.audioFile || `cd1-${(uNum - 1) * 5 + 4}.mp3`})`,
        file: unit.listening3?.audioFile || `cd1-${(uNum - 1) * 5 + 4}.mp3`,
        url: formatUrl(unit.listening3?.audioUrl || '', unit.listening3?.audioFile || `cd1-${(uNum - 1) * 5 + 4}.mp3`)
      },
      l3_t2: {
        id: 'l3-t2',
        title: `Listening 3: Task 2 (${unit.listening3?.audioFile || `cd1-${(uNum - 1) * 5 + 4}.mp3`})`,
        file: unit.listening3?.audioFile || `cd1-${(uNum - 1) * 5 + 4}.mp3`,
        url: formatUrl(unit.listening3?.task2?.audioUrl || unit.listening3?.audioUrl || '', unit.listening3?.audioFile || `cd1-${(uNum - 1) * 5 + 4}.mp3`)
      },
      pron: {
        id: 'pron',
        title: `Pronunciation (${unit.pronunciation?.audioFile || `cd1-${(uNum - 1) * 5 + 5}.mp3`})`,
        file: unit.pronunciation?.audioFile || `cd1-${(uNum - 1) * 5 + 5}.mp3`,
        url: formatUrl(unit.pronunciation?.audioUrl || '', unit.pronunciation?.audioFile || `cd1-${(uNum - 1) * 5 + 5}.mp3`)
      },
      dict: {
        id: 'dict',
        title: `Dictation (${unit.dictation?.audioFile || `cd1-${(uNum - 1) * 5 + 6}.mp3`})`,
        file: unit.dictation?.audioFile || `cd1-${(uNum - 1) * 5 + 6}.mp3`,
        url: formatUrl(unit.dictation?.audioUrl || '', unit.dictation?.audioFile || `cd1-${(uNum - 1) * 5 + 6}.mp3`)
      }
    };
  };

  const tracks = getUnitTracks(currentUnit);

  // Audio Player State
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<AudioTrackInfo>(tracks.l1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [audioError, setAudioError] = useState(false);

  // Script transcript state
  const [showScriptModal, setShowScriptModal] = useState<string | null>(null);
  const [scriptDialogues, setScriptDialogues] = useState<Array<{ number: number; lines: TacticsDialogueLine[] }>>([]);
  const [isLoadingScript, setIsLoadingScript] = useState(false);
  const [scriptCache, setScriptCache] = useState<Record<string, Array<{ number: number; lines: TacticsDialogueLine[] }>>>({});
  const [showUzbekTranslations, setShowUzbekTranslations] = useState(true);

  // Helper to extract initial answers (including prefilled example questions)
  const getInitialAnswers = (questions?: TacticsQuestion[]) => {
    const ans: Record<string, number> = {};
    if (!questions) return ans;
    questions.forEach(q => {
      if (q.isExample) {
        ans[q.id] = q.answerIndex;
      }
    });
    return ans;
  };

  // Universal Answers per section: { [questionId]: optionIndex }
  const [l1Answers, setL1Answers] = useState<Record<string, number>>(() => getInitialAnswers(currentUnit.listening1?.task1?.questions));
  const [l2t1Answers, setL2t1Answers] = useState<Record<string, number>>(() => getInitialAnswers(currentUnit.listening2?.task1?.questions));
  const [l2t2Answers, setL2t2Answers] = useState<Record<string, number>>(() => getInitialAnswers(currentUnit.listening2?.task2?.questions));
  const [l3t1Answers, setL3t1Answers] = useState<Record<string, number>>(() => getInitialAnswers(currentUnit.listening3?.task1?.questions));
  const [l3t2Answers, setL3t2Answers] = useState<Record<string, number>>(() => getInitialAnswers(currentUnit.listening3?.task2?.questions));

  // Submission checks
  const [isL1Checked, setIsL1Checked] = useState(false);
  const [isL2t1Checked, setIsL2t1Checked] = useState(false);
  const [isL2t2Checked, setIsL2t2Checked] = useState(false);
  const [isL3t1Checked, setIsL3t1Checked] = useState(false);
  const [isL3t2Checked, setIsL3t2Checked] = useState(false);

  // Unit switch effect
  useEffect(() => {
    const newTracks = getUnitTracks(currentUnit);
    setCurrentTrack(newTracks.l1);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = newTracks.l1.url;
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setAudioError(false);

    // Reset user answers for new unit (prefilling examples)
    setL1Answers(getInitialAnswers(currentUnit.listening1?.task1?.questions));
    setL2t1Answers(getInitialAnswers(currentUnit.listening2?.task1?.questions));
    setL2t2Answers(getInitialAnswers(currentUnit.listening2?.task2?.questions));
    setL3t1Answers(getInitialAnswers(currentUnit.listening3?.task1?.questions));
    setL3t2Answers(getInitialAnswers(currentUnit.listening3?.task2?.questions));
    setIsL1Checked(false);
    setIsL2t1Checked(false);
    setIsL2t2Checked(false);
    setIsL3t1Checked(false);
    setIsL3t2Checked(false);
  }, [activeUnitNumber]);

  // Audio Playback functions
  const playTrack = async (track: AudioTrackInfo) => {
    if (!audioRef.current) return;
    
    // If this track is already playing, toggle pause
    if (currentTrack.id === track.id && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    // Switch track if different
    const isDifferentTrack = currentTrack.id !== track.id || (!audioRef.current.src.endsWith(track.url) && audioRef.current.getAttribute('src') !== track.url);
    if (isDifferentTrack) {
      setCurrentTrack(track);
      audioRef.current.src = track.url;
      audioRef.current.currentTime = 0;
    }

    try {
      setIsLoadingAudio(true);
      setAudioError(false);
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.warn("Playback error:", err);
      setAudioError(true);
    } finally {
      setIsLoadingAudio(false);
    }
  };

  const togglePlayAudio = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        setIsLoadingAudio(true);
        setAudioError(false);
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Toggle play error:", err);
        setAudioError(true);
      } finally {
        setIsLoadingAudio(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setIsLoadingAudio(false);
      setAudioError(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = parseFloat(e.target.value);
    setCurrentTime(target);
    if (audioRef.current) {
      audioRef.current.currentTime = target;
    }
  };

  const handleRewind5s = () => {
    if (audioRef.current) {
      const nextTime = Math.max(0, audioRef.current.currentTime - 5);
      audioRef.current.currentTime = nextTime;
      setCurrentTime(nextTime);
    }
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  const formatSeconds = (sec: number) => {
    if (isNaN(sec) || sec < 0) return "0:00";
    const mins = Math.floor(sec / 60);
    const secs = Math.floor(sec % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Fetch transcripts for a section
  const openScript = async (sectionKey: 'listening1' | 'listening2' | 'listening3') => {
    setShowScriptModal(sectionKey);
    const cacheKey = `${activeUnitNumber}-${sectionKey}`;
    if (scriptCache[cacheKey]) {
      setScriptDialogues(scriptCache[cacheKey]);
      return;
    }
    const sectionObj = currentUnit[sectionKey];
    if (sectionObj?.dialogues && sectionObj.dialogues.length > 0) {
      setScriptDialogues(sectionObj.dialogues);
      setScriptCache(prev => ({ ...prev, [cacheKey]: sectionObj.dialogues! }));
      return;
    }
    setIsLoadingScript(true);
    try {
      const res = await fetch(`/api/tactics-script/${activeUnitNumber}/${sectionKey}`);
      if (res.ok) {
        const data = await res.json();
        if (data.dialogues) {
          setScriptDialogues(data.dialogues);
          setScriptCache(prev => ({ ...prev, [cacheKey]: data.dialogues }));
        }
      }
    } catch (e) {
      console.warn("Script fetch error:", e);
    } finally {
      setIsLoadingScript(false);
    }
  };

  // Calculate score helper
  const calculateScore = (questions: TacticsQuestion[] = [], userAns: Record<string, number>) => {
    let correct = 0;
    questions.forEach(q => {
      if (q.isExample || userAns[q.id] === q.answerIndex) {
        correct++;
      }
    });
    return { correct, total: questions.length };
  };

  const handleCheckSection = (
    questions: TacticsQuestion[] = [],
    userAns: Record<string, number>,
    setCheck: (val: boolean) => void
  ) => {
    setCheck(true);
    const score = calculateScore(questions, userAns);
    if (score.correct > 0) {
      confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
      awardXp(score.correct * 5);
    }
  };

  const nextUnit = BASIC_TACTICS_FOR_LISTENING_UNITS.find(u => u.unitNumber === activeUnitNumber + 1);

  return (
    <div className="space-y-6 pb-36 max-w-5xl mx-auto font-sans">
      {/* Permanent HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => { setIsPlaying(false); setCurrentTime(0); }}
        onError={(e) => {
          console.warn("Audio element error", e);
          if (!duration) setAudioError(true);
          setIsLoadingAudio(false);
          setIsPlaying(false);
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onCanPlay={() => {
          setIsLoadingAudio(false);
          setAudioError(false);
        }}
        preload="auto"
        crossOrigin="anonymous"
      />

      {/* Top Header Bar with Unit Switcher */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30 px-4 py-3 -mx-4 sm:mx-0 sm:rounded-2xl flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveUnitNumber(prev => Math.max(1, prev - 1))}
            disabled={activeUnitNumber === 1}
            className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 disabled:opacity-30 cursor-pointer transition"
            title="Oldingi unit"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <div>
            <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span>Unit {currentUnit.unitNumber}:</span>
              <span>{currentUnit.title}</span>
            </h1>
            <p className="text-xs text-slate-500 hidden sm:block">
              {currentUnit.overviewUz}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Unit selector dropdown */}
          <select
            value={activeUnitNumber}
            onChange={(e) => setActiveUnitNumber(Number(e.target.value))}
            className="text-xs font-extrabold bg-slate-100 border border-slate-200 rounded-xl px-2.5 sm:px-3 py-1.5 text-slate-800 outline-hidden cursor-pointer hover:bg-slate-200 transition"
          >
            {BASIC_TACTICS_FOR_LISTENING_UNITS.map(u => (
              <option key={u.unitNumber} value={u.unitNumber}>
                Unit {u.unitNumber}: {u.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* View Switcher Tabs */}
      <div className="flex gap-1.5 sm:gap-2 border-b border-slate-200 overflow-x-auto pb-1 text-xs sm:text-sm">
        {[
          { id: 'main', label: 'Barcha bo\'limlar (All)' },
          { id: 'getting_ready', label: 'Getting Ready' },
          { id: 'listening1', label: 'Listening 1' },
          { id: 'listening2', label: 'Listening 2' },
          { id: 'listening3', label: 'Listening 3' },
          { id: 'conversation_corner', label: 'Conversation Corner' },
          { id: 'answer_key', label: 'Javoblar kaliti' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-t-xl font-extrabold whitespace-nowrap transition cursor-pointer ${
              activeTab === tab.id
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: GETTING READY                                                  */}
      {/* ========================================================================= */}
      {(activeTab === 'main' || activeTab === 'getting_ready') && currentUnit.gettingStarted && (
        <TacticsGettingReadyCard
          gettingStarted={currentUnit.gettingStarted}
          onImageClick={(url, title) => setModalImage({ url, title })}
        />
      )}

      {/* ========================================================================= */}
      {/* SECTION 2: LISTENING 1                                                    */}
      {/* ========================================================================= */}
      {(activeTab === 'main' || activeTab === 'listening1') && currentUnit.listening1 && (
        <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-5 shadow-xs">
          {/* Header with audio trigger & transcript button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-extrabold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Listening 1
                </span>
                <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                  {currentUnit.listening1.title || 'Listening 1'}
                </h2>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => playTrack(tracks.l1)}
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs ${
                    isPlaying && currentTrack.id === 'l1'
                      ? 'bg-emerald-700 text-white ring-2 ring-emerald-300'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                  title={isPlaying && currentTrack.id === 'l1' ? "Audioni to'xtatish" : "Audioni eshitish"}
                >
                  <Volume2 className="w-4 h-4" />
                  {isPlaying && currentTrack.id === 'l1' ? (
                    <Pause className="w-3.5 h-3.5 fill-current" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current" />
                  )}
                  <span>{isPlaying && currentTrack.id === 'l1' ? "To'xtatish" : "Audioni eshitish"}</span>
                </button>
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  ‣ {currentUnit.listening1.instruction || "Listen. Circle the correct answer."}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openScript('listening1')}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Skriptni ko'rish (Transcript)</span>
            </button>
          </div>

          {/* Listening 1 Score display when checked */}
          {isL1Checked && (
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-extrabold text-emerald-950">
                  Natija: {calculateScore(currentUnit.listening1.task1?.questions, l1Answers).correct} / {currentUnit.listening1.task1?.questions.length} to'g'ri (
                  {Math.round((calculateScore(currentUnit.listening1.task1?.questions, l1Answers).correct / (currentUnit.listening1.task1?.questions.length || 1)) * 100)}%)
                </span>
              </div>
            </div>
          )}

          {/* Questions Grid */}
          {currentUnit.listening1.task1 && (
            <TacticsTaskRenderer
              task={currentUnit.listening1.task1}
              answers={l1Answers}
              onSelectAnswer={(qId, optIdx) => setL1Answers(prev => ({ ...prev, [qId]: optIdx }))}
              isChecked={isL1Checked}
              onImageClick={(url, title) => setModalImage({ url, title })}
            />
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => handleCheckSection(
                currentUnit.listening1?.task1?.questions,
                l1Answers,
                setIsL1Checked
              )}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold rounded-xl transition shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>{isL1Checked ? "Qayta tekshirish" : "Javoblarni tekshirish (Check)"}</span>
            </button>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 3: LISTENING 2                                                    */}
      {/* ========================================================================= */}
      {(activeTab === 'main' || activeTab === 'listening2') && currentUnit.listening2 && (
        <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-6 shadow-xs">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-extrabold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
                Listening 2
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                {currentUnit.listening2.title || 'Listening 2'}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => openScript('listening2')}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Skriptni ko'rish (Transcript)</span>
            </button>
          </div>

          {/* TASK 1: Dynamic Question Rendering */}
          {currentUnit.listening2.task1 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => playTrack(tracks.l2_t1)}
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs ${
                    isPlaying && currentTrack.id === 'l2-t1'
                      ? 'bg-emerald-700 text-white ring-2 ring-emerald-300'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  {isPlaying && currentTrack.id === 'l2-t1' ? (
                    <Pause className="w-3.5 h-3.5 fill-current" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current" />
                  )}
                  <span>Task 1 Audio</span>
                </button>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                  ‣ Task 1
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                {currentUnit.listening2.task1.instruction || "Listen and complete the task."}
              </p>

              {/* Task 1 Questions */}
              <TacticsTaskRenderer
                task={currentUnit.listening2.task1}
                answers={l2t1Answers}
                onSelectAnswer={(qId, optIdx) => setL2t1Answers(prev => ({ ...prev, [qId]: optIdx }))}
                isChecked={isL2t1Checked}
                onImageClick={(url, title) => setModalImage({ url, title })}
              />

              {/* Action Button & Score for Task 1 */}
              <div className="flex items-center justify-between pt-2">
                {isL2t1Checked && (
                  <div className="text-xs font-extrabold text-emerald-800">
                    Natija: {calculateScore(currentUnit.listening2.task1.questions, l2t1Answers).correct} / {currentUnit.listening2.task1.questions.length} to'g'ri
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => handleCheckSection(
                    currentUnit.listening2?.task1?.questions,
                    l2t1Answers,
                    setIsL2t1Checked
                  )}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition cursor-pointer ml-auto flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{isL2t1Checked ? "Qayta tekshirish" : "Task 1 ni tekshirish"}</span>
                </button>
              </div>
            </div>
          )}

          {/* TASK 2: Dynamic Question Rendering */}
          {currentUnit.listening2.task2 && (
            <div className="space-y-4 pt-5 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => playTrack(tracks.l2_t2)}
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs ${
                    isPlaying && currentTrack.id === 'l2-t2'
                      ? 'bg-emerald-700 text-white ring-2 ring-emerald-300'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  {isPlaying && currentTrack.id === 'l2-t2' ? (
                    <Pause className="w-3.5 h-3.5 fill-current" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current" />
                  )}
                  <span>Task 2 Audio</span>
                </button>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                  ‣ Task 2
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                {currentUnit.listening2.task2.instruction || "Listen again. Circle the correct answer."}
              </p>

              {/* Task 2 Questions */}
              <TacticsTaskRenderer
                task={currentUnit.listening2.task2}
                answers={l2t2Answers}
                onSelectAnswer={(qId, optIdx) => setL2t2Answers(prev => ({ ...prev, [qId]: optIdx }))}
                isChecked={isL2t2Checked}
                onImageClick={(url, title) => setModalImage({ url, title })}
              />

              {/* Action Button & Score for Task 2 */}
              <div className="flex items-center justify-between pt-2">
                {isL2t2Checked && (
                  <div className="text-xs font-extrabold text-emerald-800">
                    Natija: {calculateScore(currentUnit.listening2.task2.questions, l2t2Answers).correct} / {currentUnit.listening2.task2.questions.length} to'g'ri
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => handleCheckSection(
                    currentUnit.listening2?.task2?.questions,
                    l2t2Answers,
                    setIsL2t2Checked
                  )}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition cursor-pointer ml-auto flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{isL2t2Checked ? "Qayta tekshirish" : "Task 2 ni tekshirish"}</span>
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 4: LISTENING 3                                                    */}
      {/* ========================================================================= */}
      {(activeTab === 'main' || activeTab === 'listening3') && currentUnit.listening3 && (
        <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-6 shadow-xs">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-extrabold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
                Listening 3
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                {currentUnit.listening3.title || 'Listening 3'}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => openScript('listening3')}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Skriptni ko'rish (Transcript)</span>
            </button>
          </div>

          {/* TASK 1: Dynamic Question Rendering */}
          {currentUnit.listening3.task1 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => playTrack(tracks.l3_t1)}
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs ${
                    isPlaying && currentTrack.id === 'l3-t1'
                      ? 'bg-emerald-700 text-white ring-2 ring-emerald-300'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  {isPlaying && currentTrack.id === 'l3-t1' ? (
                    <Pause className="w-3.5 h-3.5 fill-current" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current" />
                  )}
                  <span>Task 1 Audio</span>
                </button>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                  ‣ Task 1
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                {currentUnit.listening3.task1.instruction || "Listen and complete the task."}
              </p>

              {/* Task 1 Questions */}
              <TacticsTaskRenderer
                task={currentUnit.listening3.task1}
                answers={l3t1Answers}
                onSelectAnswer={(qId, optIdx) => setL3t1Answers(prev => ({ ...prev, [qId]: optIdx }))}
                isChecked={isL3t1Checked}
                onImageClick={(url, title) => setModalImage({ url, title })}
              />

              {/* Action Button & Score for Task 1 */}
              <div className="flex items-center justify-between pt-2">
                {isL3t1Checked && (
                  <div className="text-xs font-extrabold text-emerald-800">
                    Natija: {calculateScore(currentUnit.listening3.task1.questions, l3t1Answers).correct} / {currentUnit.listening3.task1.questions.length} to'g'ri
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => handleCheckSection(
                    currentUnit.listening3?.task1?.questions,
                    l3t1Answers,
                    setIsL3t1Checked
                  )}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition cursor-pointer ml-auto flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{isL3t1Checked ? "Qayta tekshirish" : "Task 1 ni tekshirish"}</span>
                </button>
              </div>
            </div>
          )}

          {/* TASK 2: Dynamic Question Rendering */}
          {currentUnit.listening3.task2 && (
            <div className="space-y-4 pt-5 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => playTrack(tracks.l3_t2)}
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs ${
                    isPlaying && currentTrack.id === 'l3-t2'
                      ? 'bg-emerald-700 text-white ring-2 ring-emerald-300'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  {isPlaying && currentTrack.id === 'l3-t2' ? (
                    <Pause className="w-3.5 h-3.5 fill-current" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current" />
                  )}
                  <span>Task 2 Audio</span>
                </button>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                  ‣ Task 2
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                {currentUnit.listening3.task2.instruction || "Listen again and choose the correct answer."}
              </p>

              {/* Task 2 Questions */}
              <TacticsTaskRenderer
                task={currentUnit.listening3.task2}
                answers={l3t2Answers}
                onSelectAnswer={(qId, optIdx) => setL3t2Answers(prev => ({ ...prev, [qId]: optIdx }))}
                isChecked={isL3t2Checked}
                onImageClick={(url, title) => setModalImage({ url, title })}
              />

              {/* Action Button & Score for Task 2 */}
              <div className="flex items-center justify-between pt-2">
                {isL3t2Checked && (
                  <div className="text-xs font-extrabold text-emerald-800">
                    Natija: {calculateScore(currentUnit.listening3.task2.questions, l3t2Answers).correct} / {currentUnit.listening3.task2.questions.length} to'g'ri
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => handleCheckSection(
                    currentUnit.listening3?.task2?.questions,
                    l3t2Answers,
                    setIsL3t2Checked
                  )}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition cursor-pointer ml-auto flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{isL3t2Checked ? "Qayta tekshirish" : "Task 2 ni tekshirish"}</span>
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 5: CONVERSATION CORNER (Pronunciation & Dictation)                */}
      {/* ========================================================================= */}
      {(activeTab === 'main' || activeTab === 'conversation_corner') && (
        <section className="space-y-6">
          {/* Pronunciation Card */}
          <TacticsPronunciationCard
            unitNumber={currentUnit.unitNumber}
            pronunciation={currentUnit.pronunciation}
            audioTrack={tracks.pron}
            isPlaying={isPlaying}
            currentTrackId={currentTrack.id}
            onPlayTrack={playTrack}
          />

          {/* Dictation Card */}
          {currentUnit.dictation && (
            <TacticsDictationCard
              dictation={currentUnit.dictation}
              audioTrack={tracks.dict}
              isPlaying={isPlaying}
              currentTrackId={currentTrack.id}
              onPlayTrack={playTrack}
              onTranscriptOpen={() => openScript('listening3')}
            />
          )}
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 6: ANSWER KEY (Dynamically derived from real unit data)           */}
      {/* ========================================================================= */}
      {activeTab === 'answer_key' && (
        <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-5 shadow-xs">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
              Answer Key • Unit {currentUnit.unitNumber}: {currentUnit.title}
            </h2>
            <p className="text-xs text-slate-500">
              Ushbu sahifada Unit {currentUnit.unitNumber} bo'yicha barcha to'g'ri javoblar rasmiy darslikka muvofiq jamlangan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Listening 1 Key */}
            {currentUnit.listening1?.task1?.questions && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-extrabold text-slate-900 text-sm">Listening 1:</h4>
                <div className="space-y-1">
                  {currentUnit.listening1.task1.questions.map((q, idx) => (
                    <div key={q.id} className="flex items-center gap-2">
                      <span className="font-bold text-slate-700">{idx + 1}.</span>
                      <span className="font-bold text-emerald-800">
                        {q.options[q.answerIndex]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Listening 2 Key */}
            {currentUnit.listening2 && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-extrabold text-slate-900 text-sm">Listening 2:</h4>
                {currentUnit.listening2.task1?.questions && (
                  <div className="space-y-1">
                    <span className="font-bold text-slate-500 text-[11px] block">Task 1:</span>
                    <div className="flex flex-wrap gap-2">
                      {currentUnit.listening2.task1.questions.map((q, idx) => (
                        <span key={q.id} className="px-2 py-0.5 bg-white rounded border border-slate-200">
                          <strong className="text-slate-600">{idx + 1}:</strong>{' '}
                          <span className="text-emerald-700 font-bold">{q.options[q.answerIndex]}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {currentUnit.listening2.task2?.questions && (
                  <div className="space-y-1 pt-2">
                    <span className="font-bold text-slate-500 text-[11px] block">Task 2:</span>
                    <div className="flex flex-wrap gap-2">
                      {currentUnit.listening2.task2.questions.map((q, idx) => (
                        <span key={q.id} className="px-2 py-0.5 bg-white rounded border border-slate-200">
                          <strong className="text-slate-600">{idx + 1}:</strong>{' '}
                          <span className="text-emerald-700 font-bold">{q.options[q.answerIndex]}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Listening 3 Key */}
            {currentUnit.listening3 && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-extrabold text-slate-900 text-sm">Listening 3:</h4>
                {currentUnit.listening3.task1?.questions && (
                  <div className="space-y-1">
                    <span className="font-bold text-slate-500 text-[11px] block">Task 1:</span>
                    <div className="flex flex-wrap gap-2">
                      {currentUnit.listening3.task1.questions.map((q, idx) => (
                        <span key={q.id} className="px-2 py-0.5 bg-white rounded border border-slate-200">
                          <strong className="text-slate-600">{idx + 1}:</strong>{' '}
                          <span className="text-emerald-700 font-bold">{q.options[q.answerIndex]}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {currentUnit.listening3.task2?.questions && (
                  <div className="space-y-1 pt-2">
                    <span className="font-bold text-slate-500 text-[11px] block">Task 2:</span>
                    <div className="flex flex-wrap gap-2">
                      {currentUnit.listening3.task2.questions.map((q, idx) => (
                        <span key={q.id} className="px-2 py-0.5 bg-white rounded border border-slate-200">
                          <strong className="text-slate-600">{idx + 1}:</strong>{' '}
                          <span className="text-emerald-700 font-bold">{q.options[q.answerIndex]}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Dictation Key */}
            {currentUnit.dictation?.blanks && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-extrabold text-slate-900 text-sm">Dictation:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentUnit.dictation.blanks.map((blank, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-white rounded border border-slate-200">
                      <strong className="text-slate-600">({idx + 1}):</strong>{' '}
                      <span className="text-emerald-700 font-bold">{blank}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SCRIPT MODAL (Full transcripts with Uzbek translations)                   */}
      {/* ========================================================================= */}
      {showScriptModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 text-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-700">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-sm text-white">
                  {showScriptModal.toUpperCase()} Audioskripti (Transcript)
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowUzbekTranslations(!showUzbekTranslations)}
                  className="text-xs text-emerald-400 hover:text-white px-2.5 py-1 rounded-lg bg-slate-800 cursor-pointer transition font-medium"
                >
                  {showUzbekTranslations ? "O'zbekchani yashirish" : "O'zbekcha tarjima"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowScriptModal(null)}
                  className="text-slate-400 hover:text-white p-1 cursor-pointer transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 overflow-y-auto space-y-4 flex-1">
              {isLoadingScript ? (
                <div className="flex flex-col items-center justify-center py-10 text-emerald-400 gap-2">
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span className="text-xs font-semibold">Skript yuklanmoqda...</span>
                </div>
              ) : scriptDialogues.length > 0 ? (
                scriptDialogues.map((dialogue, dIdx) => (
                  <div key={dIdx} className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 space-y-2">
                    <span className="text-[11px] font-black text-emerald-400">
                      {dialogue.number ? `${dialogue.number}-Muloqot` : `Muloqot ${dIdx + 1}`}
                    </span>
                    <div className="space-y-1.5">
                      {dialogue.lines.map((line, lIdx) => (
                        <div key={lIdx} className="text-xs space-y-0.5">
                          <div className="flex items-start gap-2">
                            <span className="font-bold text-slate-400 shrink-0">{line.speaker}:</span>
                            <span className="text-slate-200">{line.text}</span>
                          </div>
                          {showUzbekTranslations && line.translationUz && (
                            <p className="text-[11px] text-emerald-400 pl-4 font-normal">
                              🇺🇿 {line.translationUz}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-400 text-center py-6">Audioskript mavjud emas</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* IMAGE ZOOM / LIGHTBOX MODAL                                               */}
      {/* ========================================================================= */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <div 
            className="relative bg-white rounded-2xl p-2 max-w-2xl max-h-[90vh] overflow-hidden flex flex-col items-center shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between p-2 border-b border-slate-100">
              <span className="text-xs font-extrabold text-slate-800">{modalImage.title}</span>
              <button
                type="button"
                onClick={() => setModalImage(null)}
                className="p-1 rounded-lg text-slate-500 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-2 overflow-auto max-h-[78vh] flex items-center justify-center">
              <img
                src={modalImage.url}
                alt={modalImage.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PERSISTENT BOTTOM AUDIO PLAYER (Green themed matching website screenshot) */}
      {/* ========================================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1e4d3a] text-white border-t-2 border-emerald-500 px-4 py-2.5 shadow-2xl">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
          {/* Track Info & Play/Pause */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <button
              type="button"
              onClick={togglePlayAudio}
              className="w-10 h-10 rounded-full bg-white text-emerald-900 flex items-center justify-center font-black shadow-md hover:scale-105 active:scale-95 transition cursor-pointer shrink-0"
              title={isPlaying ? "To'xtatish" : "Eshitish"}
            >
              {isLoadingAudio ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-extrabold truncate">
                {currentTrack.title}
              </div>
              <div className="text-[10px] text-emerald-200 truncate">
                {currentTrack.file} • Oxford 3rd Edition
              </div>
            </div>

            {/* Quick rewind 5s */}
            <button
              type="button"
              onClick={handleRewind5s}
              className="p-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 transition cursor-pointer"
              title="5 soniya orqaga"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Scrubber & Timers */}
          <div className="flex items-center gap-2 w-full sm:max-w-md text-[11px] text-emerald-200">
            <span>{formatSeconds(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 h-1.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-white"
            />
            <span>{formatSeconds(duration)}</span>
          </div>

          {/* Quick Nav: Conversation Corner & Next Unit */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={() => setActiveTab('conversation_corner')}
              className="px-3 py-1.5 rounded-lg bg-emerald-800/80 hover:bg-emerald-800 text-white text-xs font-bold transition whitespace-nowrap cursor-pointer"
            >
              Conversation Corner
            </button>

            {nextUnit && (
              <button
                type="button"
                onClick={() => {
                  setActiveUnitNumber(nextUnit.unitNumber);
                  setActiveTab('main');
                }}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1 whitespace-nowrap cursor-pointer"
              >
                <span>Unit {nextUnit.unitNumber}: {nextUnit.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
