import React, { useState, useRef, useEffect } from 'react';
import { PODCASTS_DATA } from '../../data/podcastsData';
import { PodcastItem, PodcastQuestion } from '../../types';
import { 
  Headphones, Play, Pause, Clock, BookOpen, HelpCircle, 
  CheckCircle2, XCircle, ChevronLeft, Award, 
  ExternalLink, MessageSquare, Volume2, RotateCcw, Filter,
  Mic, MicOff, Sparkles, Gauge, Search, Eye, EyeOff,
  Radio, Film, RotateCw, VolumeX
} from 'lucide-react';

export const PodcastsPage: React.FC = () => {
  const [selectedPodcast, setSelectedPodcast] = useState<PodcastItem | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [isAnswerChecked, setIsAnswerChecked] = useState<Record<string, boolean>>({});
  
  // Tabs: questions | transcript | vocabulary | shadowing | summary
  const [activeTab, setActiveTab] = useState<'questions' | 'transcript' | 'vocabulary' | 'shadowing' | 'summary'>('questions');
  const [activeLineId, setActiveLineId] = useState<string | null>(null);
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<string>('all');
  const [speakingNotes, setSpeakingNotes] = useState<string>('');
  const [isNotesSaved, setIsNotesSaved] = useState<boolean>(false);
  
  // Player Mode: 'audio' (Native bot-free Podcast player) vs 'youtube' (Embedded video)
  const [playerMode, setPlayerMode] = useState<'audio' | 'youtube'>('audio');
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState<number>(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [transcriptSearch, setTranscriptSearch] = useState<string>('');
  const [showTranslations, setShowTranslations] = useState<boolean>(true);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Summary Gap-fill state
  const [summaryAnswers, setSummaryAnswers] = useState<Record<string, string>>({});
  const [summaryChecked, setSummaryChecked] = useState<boolean>(false);

  // Shadowing Audio Recording state
  const [recordingPhraseId, setRecordingPhraseId] = useState<string | null>(null);
  const [audioRecordings, setAudioRecordings] = useState<Record<string, string>>({});
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Vocabulary Flashcard test mode
  const [vocabTestIndex, setVocabTestIndex] = useState<number | null>(null);
  const [vocabQuizSelected, setVocabQuizSelected] = useState<string | null>(null);
  const [vocabQuizChecked, setVocabQuizChecked] = useState<boolean>(false);

  // YouTube iframe controller
  const sendIframeCommand = (func: string, args: any[] = []) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func, args }),
        '*'
      );
    }
  };

  const handleSeekVideo = (seconds: number) => {
    if (playerMode === 'youtube') {
      sendIframeCommand('seekTo', [seconds, true]);
      sendIframeCommand('playVideo', []);
    } else {
      // Find matching transcript line
      const lineIdx = selectedPodcast?.transcript?.findIndex(
        (t) => seconds >= t.startTime && seconds <= t.endTime
      );
      if (lineIdx !== undefined && lineIdx >= 0) {
        playTranscriptAudioFrom(lineIdx);
      }
    }
  };

  // Continuous Native Speech Synthesis Audio Player
  const playTranscriptAudioFrom = (startIndex: number) => {
    if (!selectedPodcast?.transcript || startIndex >= selectedPodcast.transcript.length) {
      setIsAudioPlaying(false);
      return;
    }

    if (!('speechSynthesis' in window)) {
      alert("Brauzeringiz nutq sintezini qo'llab-quvvatlamaydi.");
      return;
    }

    window.speechSynthesis.cancel();
    setCurrentAudioIndex(startIndex);
    setIsAudioPlaying(true);
    setActiveLineId(selectedPodcast.transcript[startIndex].id);

    const line = selectedPodcast.transcript[startIndex];
    const utterance = new SpeechSynthesisUtterance(line.text);
    utterance.lang = 'en-US';
    utterance.rate = playbackRate === 0.75 ? 0.8 : playbackRate === 1.25 ? 1.2 : 1.0;

    utterance.onend = () => {
      // Play next line automatically
      if (startIndex + 1 < selectedPodcast.transcript!.length) {
        playTranscriptAudioFrom(startIndex + 1);
      } else {
        setIsAudioPlaying(false);
        setCurrentAudioIndex(0);
      }
    };

    utterance.onerror = (e) => {
      console.warn("TTS Error:", e);
      setIsAudioPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const toggleAudioPlayPause = () => {
    if (isAudioPlaying) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsAudioPlaying(false);
    } else {
      playTranscriptAudioFrom(currentAudioIndex);
    }
  };

  const handleStopAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsAudioPlaying(false);
  };

  // Single sentence speak helper
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsAudioPlaying(false);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = playbackRate === 0.75 ? 0.8 : playbackRate === 1.25 ? 1.2 : 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Stop audio on unmount or podcast change
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectedPodcast]);

  // Shadowing: Microphone recording handlers
  const startRecording = async (phraseId: string) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioRecordings((prev) => ({ ...prev, [phraseId]: audioUrl }));
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setRecordingPhraseId(phraseId);
    } catch (err) {
      console.warn("Mikrofon ruxsati berilmadi:", err);
      alert("Mikrofon orqali yozib olish uchun brauzerda mikrofonga ruxsat bering.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    setRecordingPhraseId(null);
  };

  const handleSelectAnswer = (questionId: string, optIdx: number) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: optIdx }));
  };

  const handleCheckQuestion = (q: PodcastQuestion) => {
    setIsAnswerChecked((prev) => ({ ...prev, [q.id]: true }));
  };

  const handleCheckAll = () => {
    if (!selectedPodcast) return;
    const checked: Record<string, boolean> = {};
    selectedPodcast.questions.forEach((q) => {
      checked[q.id] = true;
    });
    setIsAnswerChecked(checked);
  };

  const calculateScore = () => {
    if (!selectedPodcast) return { correct: 0, total: 0, percent: 0 };
    let correct = 0;
    selectedPodcast.questions.forEach((q) => {
      if (userAnswers[q.id] === q.answerIndex) {
        correct++;
      }
    });
    const total = selectedPodcast.questions.length;
    const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, total, percent };
  };

  const score = calculateScore();
  const allChecked = selectedPodcast && selectedPodcast.questions.every((q) => isAnswerChecked[q.id]);

  const filteredPodcasts = PODCASTS_DATA.filter((p) => {
    if (selectedLevelFilter === 'all') return true;
    return p.level === selectedLevelFilter;
  });

  const filteredTranscript = selectedPodcast?.transcript?.filter((line) => {
    if (!transcriptSearch.trim()) return true;
    const q = transcriptSearch.toLowerCase();
    return line.text.toLowerCase().includes(q) || (line.translationUz && line.translationUz.toLowerCase().includes(q));
  });

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-emerald-900 to-slate-950 text-white py-8 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-6xl mx-auto">
          {selectedPodcast ? (
            <button
              id="back-to-podcasts-btn"
              onClick={() => {
                handleStopAudio();
                setSelectedPodcast(null);
                setUserAnswers({});
                setIsAnswerChecked({});
                setActiveLineId(null);
                setIsNotesSaved(false);
                setSummaryAnswers({});
                setSummaryChecked(false);
                setVocabTestIndex(null);
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors mb-4 backdrop-blur-sm border border-white/10"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Barcha podkastlar katalogiga qaytish</span>
            </button>
          ) : null}

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Headphones className="w-3.5 h-3.5" />
                <span>Interaktiv Ta'limiy Podkastlar & TED Talks</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                {selectedPodcast ? selectedPodcast.title : 'Ingliz tili Ta\'limiy Podkastlari'}
              </h1>
              <p className="text-emerald-100/90 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                {selectedPodcast
                  ? `${selectedPodcast.channel} spikeri nutqi orqali jonli ingliz tilini o'rganing: to'liq audio pleer, transkript, shadowing va tushunish mashqlari.`
                  : "BBC, TED-Ed va yetakchi kanallardan saralangan intellektual podkastlar. Ovozli transkript, shadowing va lug'at mashqlari."}
              </p>
            </div>

            {selectedPodcast && (
              <div className="flex items-center gap-2">
                <a
                  href={`https://www.youtube.com/watch?v=${selectedPodcast.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition shadow-sm"
                >
                  <span>YouTube'da to'g'ridan-to'g'ri ochish</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {selectedPodcast ? (
          /* Active Podcast Detail View */
          <div className="space-y-6">
            {/* Player Mode Switcher Tabs (Audio vs YouTube) */}
            <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setPlayerMode('audio');
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
                    playerMode === 'audio'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <Radio className="w-4 h-4" />
                  <span>🎧 Podkast Audio Pleer (Tavsiya etiladi — Bot xatosiz!)</span>
                </button>

                <button
                  onClick={() => {
                    handleStopAudio();
                    setPlayerMode('youtube');
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
                    playerMode === 'youtube'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <Film className="w-4 h-4" />
                  <span>🎬 YouTube Video Rejimi</span>
                </button>
              </div>

              {/* Notice for Bot block */}
              {playerMode === 'youtube' && (
                <div className="text-[11px] text-amber-800 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 flex items-center gap-1.5">
                  <span>💡 Agar YouTube "Sign in to confirm you're not a bot" desa, </span>
                  <button
                    onClick={() => setPlayerMode('audio')}
                    className="font-bold underline hover:text-amber-950"
                  >
                    "Audio Pleer"ga o'ting
                  </button>
                  <span> yoki </span>
                  <a
                    href={`https://www.youtube.com/watch?v=${selectedPodcast.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline text-rose-700"
                  >
                    alohida tabda oching
                  </a>
                </div>
              )}
            </div>

            {/* Top Player & Summary Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Active Player Component */}
              <div className="lg:col-span-7 flex flex-col space-y-3">
                {playerMode === 'audio' ? (
                  /* Audio Podcast Station Card */
                  <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 rounded-2xl p-6 text-white shadow-md border border-slate-800 flex flex-col justify-between min-h-[300px]">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/20 shadow-sm shrink-0">
                          <img
                            src={selectedPodcast.coverImage}
                            alt={selectedPodcast.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                            Smart Audio Podkast
                          </span>
                          <h4 className="text-base font-black text-white mt-1 line-clamp-1">
                            {selectedPodcast.title}
                          </h4>
                          <p className="text-xs text-emerald-200/80">{selectedPodcast.channel}</p>
                        </div>
                      </div>

                      <span className="text-xs font-mono px-2 py-1 rounded bg-black/40 text-emerald-300 border border-white/10">
                        {selectedPodcast.duration}
                      </span>
                    </div>

                    {/* Active playing sentence preview in audio card */}
                    <div className="p-4 my-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <div className="text-[11px] text-emerald-400 font-bold mb-1 flex items-center justify-between">
                        <span>Hozirgi jumla ({currentAudioIndex + 1} / {selectedPodcast.transcript?.length || 0}):</span>
                        {isAudioPlaying && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-emerald-300 animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            Ijro etilmoqda
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-white leading-relaxed">
                        "{selectedPodcast.transcript?.[currentAudioIndex]?.text || 'Podkastni boshlash uchun Play tugmasini bosing'}"
                      </p>
                      {selectedPodcast.transcript?.[currentAudioIndex]?.translationUz && (
                        <p className="text-xs text-slate-300 mt-1.5 italic">
                          O'zbekcha: {selectedPodcast.transcript[currentAudioIndex].translationUz}
                        </p>
                      )}
                    </div>

                    {/* Audio Station Controls */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      {/* Prev / Play / Next Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            if (currentAudioIndex > 0) {
                              playTranscriptAudioFrom(currentAudioIndex - 1);
                            }
                          }}
                          disabled={currentAudioIndex === 0}
                          title="Oldingi jumla"
                          className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white transition"
                        >
                          <RotateCcw className="w-4 h-4" />
                        </button>

                        <button
                          id="toggle-audio-play-pause"
                          onClick={toggleAudioPlayPause}
                          className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-2 transition shadow-md"
                        >
                          {isAudioPlaying ? (
                            <>
                              <Pause className="w-4 h-4 fill-current" />
                              <span>To'xtatish (Pause)</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 fill-current" />
                              <span>{currentAudioIndex > 0 ? "Davom ettirish" : "Podkastni Eshitish"}</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => {
                            if (selectedPodcast.transcript && currentAudioIndex < selectedPodcast.transcript.length - 1) {
                              playTranscriptAudioFrom(currentAudioIndex + 1);
                            }
                          }}
                          disabled={!selectedPodcast.transcript || currentAudioIndex >= selectedPodcast.transcript.length - 1}
                          title="Keyingi jumla"
                          className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white transition"
                        >
                          <RotateCw className="w-4 h-4" />
                        </button>

                        {isAudioPlaying && (
                          <button
                            onClick={handleStopAudio}
                            title="Butunlay to'xtatish"
                            className="p-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 transition"
                          >
                            <VolumeX className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {/* Speed selector */}
                      <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10 text-xs">
                        {[0.75, 1.0, 1.25].map((rate) => (
                          <button
                            key={rate}
                            onClick={() => setPlaybackRate(rate)}
                            className={`px-2 py-1 rounded-lg font-bold text-[11px] transition ${
                              playbackRate === rate
                                ? 'bg-emerald-500 text-slate-950'
                                : 'text-slate-300 hover:text-white'
                            }`}
                          >
                            {rate}x
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* YouTube Iframe Player */
                  <div className="space-y-2">
                    <div className="bg-slate-950 rounded-2xl overflow-hidden shadow-md aspect-video relative border border-slate-800">
                      <iframe
                        ref={iframeRef}
                        id="podcast-youtube-iframe"
                        title={selectedPodcast.title}
                        src={`https://www.youtube-nocookie.com/embed/${selectedPodcast.youtubeId}?enablejsapi=1&rel=0&modestbranding=1`}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs px-2 text-slate-500">
                      <span>YouTube'da bot tekshiruvi chiqsa:</span>
                      <button
                        onClick={() => setPlayerMode('audio')}
                        className="font-bold text-emerald-700 hover:underline inline-flex items-center gap-1"
                      >
                        <Radio className="w-3.5 h-3.5" />
                        <span>Podkast Audio rejimiga o'tish (Benuqson)</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Summary & Topic Info */}
              <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-xs p-5 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-100 text-emerald-800 uppercase tracking-wide">
                      {selectedPodcast.level} daraja
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{selectedPodcast.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                    {selectedPodcast.title}
                  </h3>
                  <div className="text-xs font-bold text-emerald-700">{selectedPodcast.channel}</div>

                  {/* Summary Box (Emoji toza matnga almashtirildi) */}
                  <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200/60 text-xs text-emerald-950 leading-relaxed">
                    <div className="font-bold mb-1 flex items-center gap-1.5 text-emerald-900">
                      <span className="px-1.5 py-0.5 rounded bg-emerald-200/60 text-[10px] font-extrabold uppercase">
                        O'zbekcha
                      </span>
                      <span>Mavzuning qisqacha mazmuni:</span>
                    </div>
                    {selectedPodcast.summaryUz}
                  </div>
                </div>

                <div className="text-xs text-slate-500 border-t border-slate-100 pt-3 flex items-center justify-between">
                  <span>Mavzu: <strong className="text-slate-800">{selectedPodcast.topic}</strong></span>
                  <span className="text-emerald-700 font-bold">{selectedPodcast.questions.length} ta savol</span>
                </div>
              </div>
            </div>

            {/* 5 Main Interactive Learning Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200">
              <button
                id="tab-questions"
                onClick={() => setActiveTab('questions')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'questions'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>1. Savollar & Testlar ({selectedPodcast.questions.length})</span>
              </button>

              <button
                id="tab-shadowing"
                onClick={() => setActiveTab('shadowing')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'shadowing'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Mic className="w-4 h-4 text-rose-500" />
                <span>2. Shadowing & Nutq Mashqi ({selectedPodcast.shadowingPhrases?.length || 0})</span>
              </button>

              <button
                id="tab-summary"
                onClick={() => setActiveTab('summary')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'summary'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>3. Xulosa Bo'shliqlarini To'ldirish</span>
              </button>

              <button
                id="tab-transcript"
                onClick={() => setActiveTab('transcript')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'transcript'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Volume2 className="w-4 h-4" />
                <span>4. Sinxron Transkript ({selectedPodcast.transcript?.length || 0})</span>
              </button>

              <button
                id="tab-vocabulary"
                onClick={() => setActiveTab('vocabulary')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'vocabulary'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <BookOpen className="w-4 h-4 text-teal-600" />
                <span>5. Muhim Lug'at ({selectedPodcast.keyVocabulary.length})</span>
              </button>
            </div>

            {/* TAB 1: Questions & Comprehension */}
            {activeTab === 'questions' && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 text-base font-bold text-slate-900">
                      <HelpCircle className="w-5 h-5 text-emerald-600" />
                      <span>Tushunish darajasini tekshirish ({selectedPodcast.questions.length} ta savol)</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Podkastni tinglab, quyidagi savollarga javob bering va o'zlashtirishni tekshiring.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {allChecked ? (
                      <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 text-emerald-800 text-xs font-bold">
                        <Award className="w-4 h-4 text-emerald-600" />
                        <span>Natija: {score.correct} / {score.total} ({score.percent}%)</span>
                      </div>
                    ) : (
                      <button
                        id="check-all-pod-questions-btn"
                        onClick={handleCheckAll}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-xs"
                      >
                        Barchasini tekshirish
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  {selectedPodcast.questions.map((q, idx) => {
                    const selected = userAnswers[q.id];
                    const isChecked = isAnswerChecked[q.id];
                    const isCorrect = isChecked && selected === q.answerIndex;

                    const questionTypeLabel = 
                      q.type === 'true_false' ? '⚖️ True / False' :
                      q.type === 'vocabulary' ? '📖 Lug\'at konteksti' :
                      '🎯 Tanlovli savol';

                    return (
                      <div
                        key={q.id}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="font-bold text-sm text-slate-900">
                            {idx + 1}. {q.question}
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 whitespace-nowrap">
                            {questionTypeLabel}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map((opt, optIdx) => {
                            const isOptionSelected = selected === optIdx;
                            const isOptionCorrect = optIdx === q.answerIndex;

                            let btnStyle = 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200';
                            if (isChecked) {
                              if (isOptionCorrect) {
                                btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                              } else if (isOptionSelected && !isOptionCorrect) {
                                btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 line-through';
                              }
                            } else if (isOptionSelected) {
                              btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-xs';
                            }

                            return (
                              <button
                                key={optIdx}
                                id={`pod-opt-${q.id}-${optIdx}`}
                                disabled={isChecked}
                                onClick={() => handleSelectAnswer(q.id, optIdx)}
                                className={`p-2.5 text-xs text-left rounded-xl border transition-all ${btnStyle}`}
                              >
                                <span className="font-bold mr-1.5">{String.fromCharCode(65 + optIdx)}.</span>
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          {!isChecked ? (
                            <button
                              id={`check-pod-q-${q.id}`}
                              disabled={selected === undefined}
                              onClick={() => handleCheckQuestion(q)}
                              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-bold transition-colors ml-auto shadow-xs"
                            >
                              Tekshirish
                            </button>
                          ) : (
                            <div className="flex flex-wrap items-center gap-2 text-xs">
                              {isCorrect ? (
                                <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                                  <CheckCircle2 className="w-4 h-4" />
                                  <span>To'g'ri! (+10 XP)</span>
                                </div>
                              ) : (
                                <div className="flex items-center gap-1.5 text-rose-600 font-bold">
                                  <XCircle className="w-4 h-4" />
                                  <span>Xato! To'g'ri javob: {String.fromCharCode(65 + q.answerIndex)}</span>
                                </div>
                              )}
                              {q.explanationUz && (
                                <span className="text-slate-600 italic bg-white px-2 py-0.5 rounded border border-slate-200">
                                  Tahlil: {q.explanationUz}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Speaking / Discussion Prompt */}
                {selectedPodcast.discussionPromptUz && (
                  <div className="p-4 rounded-xl border border-teal-200 bg-teal-50/50 space-y-3">
                    <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
                      <MessageSquare className="w-4 h-4 text-teal-700" />
                      <span>Mavzu bo'yicha erkin fikrlash & Speaking savoli:</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {selectedPodcast.discussionPromptUz}
                    </p>
                    <div className="space-y-2">
                      <textarea
                        value={speakingNotes}
                        onChange={(e) => {
                          setSpeakingNotes(e.target.value);
                          setIsNotesSaved(false);
                        }}
                        placeholder="O'z fikringizni yoki javobingizni ingliz tilida yozing..."
                        className="w-full text-xs p-3 rounded-xl border border-teal-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-[70px]"
                      />
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-teal-800">
                          {isNotesSaved ? "✅ Fikringiz o'qituvchi nazorati uchun muvaffaqiyatli saqlandi!" : "O'qituvchingiz ko'rishi uchun saqlang"}
                        </span>
                        <button
                          onClick={() => setIsNotesSaved(true)}
                          disabled={!speakingNotes.trim()}
                          className="px-3.5 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 disabled:opacity-50 text-white text-xs font-bold transition shadow-xs"
                        >
                          Fikrni saqlash
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: Shadowing & Speaking */}
            {activeTab === 'shadowing' && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 text-base font-bold text-slate-900">
                      <Mic className="w-5 h-5 text-rose-500" />
                      <span>Shadowing Texnikasi — Spikerdek Talaffuz Qilish</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Podkastdagi eng ifodali jumlalarni xuddi spiker kabi intonatsiya, urg'u va tezlik bilan qaytarib, o'z ovozingizni yozib oling.
                    </p>
                  </div>
                  <div className="text-xs text-slate-500 bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-xl font-medium">
                    🎙️ Mikrofon orqali real vaqtda ovoz yozish
                  </div>
                </div>

                <div className="space-y-4">
                  {selectedPodcast.shadowingPhrases?.map((phrase, idx) => {
                    const isRecordingThis = recordingPhraseId === phrase.id;
                    const recordedAudioUrl = audioRecordings[phrase.id];

                    return (
                      <div
                        key={phrase.id}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold text-slate-400">
                            IBORA #{idx + 1}
                          </span>
                          <button
                            onClick={() => handleSeekVideo(phrase.startTime)}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200"
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>Tinglash ({Math.floor(phrase.startTime / 60)}:{(phrase.startTime % 60).toString().padStart(2, '0')})</span>
                          </button>
                        </div>

                        {/* Phrase text */}
                        <div className="space-y-1">
                          <div className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                            "{phrase.text}"
                          </div>
                          <div className="text-xs text-slate-500 italic">
                            O'zbekcha: {phrase.translationUz}
                          </div>
                        </div>

                        {/* Pronunciation tip */}
                        <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                          <span className="font-bold">💡 Fonetik maslahat:</span>
                          <span>{phrase.pronunciationTipUz}</span>
                        </div>

                        {/* Audio action bar */}
                        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/60">
                          {/* Listen TTS button */}
                          <button
                            onClick={() => speakText(phrase.text)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition"
                          >
                            <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Spiker ovozida eshitish</span>
                          </button>

                          {/* Record button */}
                          {!isRecordingThis ? (
                            <button
                              id={`start-rec-${phrase.id}`}
                              onClick={() => startRecording(phrase.id)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition shadow-xs"
                            >
                              <Mic className="w-3.5 h-3.5" />
                              <span>Talaffuzimni yozish</span>
                            </button>
                          ) : (
                            <button
                              id={`stop-rec-${phrase.id}`}
                              onClick={stopRecording}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold transition animate-pulse"
                            >
                              <MicOff className="w-3.5 h-3.5" />
                              <span>Yozishni to'xtatish...</span>
                            </button>
                          )}

                          {/* Recorded Audio playback */}
                          {recordedAudioUrl && (
                            <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-slate-200 ml-auto">
                              <span className="text-[11px] font-bold text-slate-600">Mening ovozim:</span>
                              <audio src={recordedAudioUrl} controls className="h-7 w-48 sm:w-56" />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 3: Summary Gap-fill Exercise */}
            {activeTab === 'summary' && selectedPodcast.summaryExercise && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 text-base font-bold text-slate-900">
                      <Sparkles className="w-5 h-5 text-amber-500" />
                      <span>{selectedPodcast.summaryExercise.title}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {selectedPodcast.summaryExercise.instructionUz}
                    </p>
                  </div>

                  <button
                    id="check-summary-exercise-btn"
                    onClick={() => setSummaryChecked(true)}
                    className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs"
                  >
                    Xulosani tekshirish
                  </button>
                </div>

                {/* Gap fill text renderer */}
                <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 leading-loose text-sm sm:text-base text-slate-800 font-medium">
                  {selectedPodcast.summaryExercise.template.split(/(\{\{gap_\d+\}\})/).map((chunk, i) => {
                    const match = chunk.match(/\{\{gap_(\d+)\}\}/);
                    if (match) {
                      const gapKey = `gap_${match[1]}`;
                      const gapInfo = selectedPodcast.summaryExercise?.gaps.find((g) => g.id === gapKey);
                      if (!gapInfo) return null;

                      const selectedVal = summaryAnswers[gapKey] || '';
                      const isCorrect = summaryChecked && selectedVal.toLowerCase() === gapInfo.correctWord.toLowerCase();

                      let selectStyle = 'border-slate-300 bg-white text-slate-800';
                      if (summaryChecked) {
                        if (isCorrect) {
                          selectStyle = 'border-emerald-500 bg-emerald-100 text-emerald-950 font-bold';
                        } else {
                          selectStyle = 'border-rose-400 bg-rose-100 text-rose-950';
                        }
                      }

                      return (
                        <span key={i} className="inline-block mx-1.5 my-1">
                          <select
                            value={selectedVal}
                            disabled={summaryChecked}
                            onChange={(e) => {
                              setSummaryAnswers((prev) => ({ ...prev, [gapKey]: e.target.value }));
                              setSummaryChecked(false);
                            }}
                            className={`px-2.5 py-1 text-xs rounded-lg border focus:ring-2 focus:ring-amber-500 font-bold ${selectStyle}`}
                          >
                            <option value="">[Tanlang...]</option>
                            {gapInfo.options.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </span>
                      );
                    }
                    return <span key={i}>{chunk}</span>;
                  })}
                </div>

                {/* Hints and explanation for gaps */}
                {summaryChecked && (
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                      To'g'ri javoblar va izohlar:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedPodcast.summaryExercise.gaps.map((gap, i) => {
                        const isMatch = (summaryAnswers[gap.id] || '').toLowerCase() === gap.correctWord.toLowerCase();
                        return (
                          <div
                            key={gap.id}
                            className={`p-3 rounded-xl border text-xs ${
                              isMatch ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-950'
                            }`}
                          >
                            <div className="font-bold flex items-center justify-between">
                              <span>Bo'shliq #{i + 1}: <code className="text-sm font-mono text-emerald-700 underline">{gap.correctWord}</code></span>
                              <span>{isMatch ? '✅ To\'g\'ri' : '❌ Xato'}</span>
                            </div>
                            <p className="text-[11px] mt-1 text-slate-600">💡 Maslahat: {gap.hintUz}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: Synchronous Interactive Transcript */}
            {activeTab === 'transcript' && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                  <div>
                    <div className="flex items-center gap-2 text-base font-bold text-slate-900">
                      <Volume2 className="w-5 h-5 text-emerald-600" />
                      <span>Sinxron Transkript ({selectedPodcast.transcript?.length || 0} ta jumla)</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Gap ustiga bosing — audio aynan shu jumlani o'qiydi. Tarjimani o'rganing va talaffuzni kuzating.
                    </p>
                  </div>

                  {/* Search and Translation toggle */}
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                      <input
                        type="text"
                        placeholder="Transkriptdan qidirish..."
                        value={transcriptSearch}
                        onChange={(e) => setTranscriptSearch(e.target.value)}
                        className="pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-48 sm:w-56"
                      />
                    </div>

                    <button
                      onClick={() => setShowTranslations((prev) => !prev)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold"
                    >
                      {showTranslations ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{showTranslations ? "Tarjimani yashirish" : "Tarjimani ko'rsatish"}</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {filteredTranscript?.map((line, idx) => {
                    const isCurrentlySpeaking = isAudioPlaying && currentAudioIndex === idx;
                    const isActive = activeLineId === line.id || isCurrentlySpeaking;

                    const formatTime = (sec: number) => {
                      const m = Math.floor(sec / 60);
                      const s = sec % 60;
                      return `${m}:${s < 10 ? '0' : ''}${s}`;
                    };

                    return (
                      <div
                        key={line.id}
                        className={`p-3.5 rounded-xl border transition-all ${
                          isActive
                            ? 'bg-emerald-50/90 border-emerald-400 ring-2 ring-emerald-300 shadow-xs'
                            : 'bg-slate-50/80 border-slate-200 hover:bg-slate-100/90'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                playTranscriptAudioFrom(idx);
                              }}
                              className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-600 text-white hover:bg-emerald-700 transition"
                            >
                              <Play className="w-2.5 h-2.5 fill-current" />
                              <span>{formatTime(line.startTime)}</span>
                            </button>
                            {line.speaker && (
                              <span className="text-xs font-bold text-emerald-800">
                                {line.speaker}:
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => speakText(line.text)}
                              title="Faqat shu gapni eshitish"
                              className="p-1 rounded text-slate-400 hover:text-emerald-700 transition"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <p
                          onClick={() => {
                            playTranscriptAudioFrom(idx);
                          }}
                          className="text-sm font-semibold text-slate-900 leading-relaxed cursor-pointer hover:text-emerald-800"
                        >
                          {line.text}
                        </p>

                        {showTranslations && line.translationUz && (
                          <p className="text-xs text-slate-600 mt-2 pt-1.5 border-t border-slate-200/60 leading-relaxed">
                            O'zbekcha: {line.translationUz}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 5: Vocabulary & Interactive Flashcard Quiz */}
            {activeTab === 'vocabulary' && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 text-base font-bold text-slate-900">
                      <BookOpen className="w-5 h-5 text-teal-600" />
                      <span>Muhim Lug'at & Interaktiv Talaffuz (Key Vocabulary)</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Podkastdagi akademik va ilmiy so'zlar. Talaffuzni eshiting va o'zingizni sinab ko'ring.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      if (vocabTestIndex === null) {
                        setVocabTestIndex(0);
                        setVocabQuizSelected(null);
                        setVocabQuizChecked(false);
                      } else {
                        setVocabTestIndex(null);
                      }
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{vocabTestIndex === null ? "Lug'at sinovi (Quiz)" : "Oddiy ro'yxatga qaytish"}</span>
                  </button>
                </div>

                {/* Vocabulary Quiz Mode */}
                {vocabTestIndex !== null ? (
                  <div className="p-6 rounded-2xl bg-teal-50/60 border border-teal-200 text-center space-y-4 max-w-xl mx-auto">
                    <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                      So'z {vocabTestIndex + 1} / {selectedPodcast.keyVocabulary.length}
                    </span>

                    <div className="space-y-1">
                      <div className="text-2xl font-black text-slate-900">
                        {selectedPodcast.keyVocabulary[vocabTestIndex].word}
                      </div>
                      <div className="text-xs text-slate-500 font-mono">
                        ({selectedPodcast.keyVocabulary[vocabTestIndex].partOfSpeech})
                      </div>
                    </div>

                    <button
                      onClick={() => speakText(selectedPodcast.keyVocabulary[vocabTestIndex].word)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-teal-200 text-teal-800 text-xs font-bold hover:bg-teal-100/80 transition"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Talaffuzni eshitish</span>
                    </button>

                    <p className="text-xs font-semibold text-slate-600">
                      Ushbu so'zning to'g'ri o'zbekcha tarjimasini tanlang:
                    </p>

                    <div className="grid grid-cols-1 gap-2 text-left">
                      {selectedPodcast.keyVocabulary.map((item, idx) => {
                        const isChosen = vocabQuizSelected === item.meaningUz;
                        const isRight = item.meaningUz === selectedPodcast.keyVocabulary[vocabTestIndex].meaningUz;

                        let style = 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800';
                        if (vocabQuizChecked) {
                          if (isRight) {
                            style = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                          } else if (isChosen && !isRight) {
                            style = 'bg-rose-100 border-rose-400 text-rose-950 line-through';
                          }
                        } else if (isChosen) {
                          style = 'bg-teal-600 text-white border-teal-600 font-bold';
                        }

                        return (
                          <button
                            key={idx}
                            disabled={vocabQuizChecked}
                            onClick={() => setVocabQuizSelected(item.meaningUz)}
                            className={`p-3 rounded-xl border text-xs font-semibold transition ${style}`}
                          >
                            {item.meaningUz}
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {!vocabQuizChecked ? (
                        <button
                          disabled={!vocabQuizSelected}
                          onClick={() => setVocabQuizChecked(true)}
                          className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 disabled:opacity-50 text-white text-xs font-bold transition mx-auto shadow-xs"
                        >
                          Javobni tekshirish
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            if (vocabTestIndex < selectedPodcast.keyVocabulary.length - 1) {
                              setVocabTestIndex((prev) => (prev !== null ? prev + 1 : 0));
                              setVocabQuizSelected(null);
                              setVocabQuizChecked(false);
                            } else {
                              alert("Barcha so'zlar bo'yicha sinov muvaffaqiyatli yakunlandi! Barakalla!");
                              setVocabTestIndex(null);
                            }
                          }}
                          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition mx-auto shadow-xs"
                        >
                          {vocabTestIndex < selectedPodcast.keyVocabulary.length - 1 ? "Keyingi so'z ➔" : "Sinovni yakunlash"}
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Standard Vocabulary Cards Grid */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {selectedPodcast.keyVocabulary.map((vocab, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:bg-teal-50/40 transition-colors space-y-2"
                      >
                        <div className="flex items-baseline justify-between">
                          <div className="flex items-baseline gap-2">
                            <span className="text-base font-black text-slate-900">{vocab.word}</span>
                            <span className="text-xs text-slate-500 italic font-mono">({vocab.partOfSpeech})</span>
                          </div>
                          <button
                            onClick={() => speakText(vocab.word)}
                            title="Talaffuzni eshitish"
                            className="p-1 rounded-md text-teal-700 hover:bg-teal-100 transition"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-xs font-bold text-teal-900">
                          {vocab.meaningUz}
                        </div>

                        <p className="text-xs text-slate-600 italic bg-white p-2 rounded-lg border border-slate-200/60">
                          "{vocab.example}"
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          /* Podcasts Catalog View */
          <div className="space-y-6">
            {/* Level Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-slate-700">Daraja bo'yicha saralash:</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { label: 'Barchasi', val: 'all' },
                  { label: 'A2 (Elementary)', val: 'A2' },
                  { label: 'B1 (Intermediate)', val: 'B1' },
                  { label: 'B2 (Upper-Inter)', val: 'B2' }
                ].map((lvl) => (
                  <button
                    key={lvl.val}
                    onClick={() => setSelectedLevelFilter(lvl.val)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                      selectedLevelFilter === lvl.val
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                    }`}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Podcasts Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPodcasts.map((pod) => (
                <div
                  key={pod.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group hover:-translate-y-1"
                >
                  {/* Image & Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={pod.coverImage}
                      alt={pod.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[11px] font-extrabold rounded-lg bg-emerald-600 text-white shadow-xs uppercase tracking-wider">
                        {pod.level}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-bold">
                      <Clock className="w-3 h-3" />
                      <span>{pod.duration}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-base sm:text-lg font-black tracking-tight leading-snug drop-shadow-sm line-clamp-2">
                        {pod.title}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-300 mt-0.5">{pod.channel}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {pod.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-col text-[11px] text-slate-500 font-medium">
                        <span className="text-emerald-700 font-bold">
                          {pod.questions.length} test • {pod.keyVocabulary.length} yangi so'z
                        </span>
                        <span>Audio stansiya & Transkript</span>
                      </div>

                      <button
                        id={`open-podcast-${pod.id}`}
                        onClick={() => {
                          setSelectedPodcast(pod);
                          setActiveTab('questions');
                          setPlayerMode('audio');
                        }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Boshlash</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
