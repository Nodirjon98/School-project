import React, { useState, useEffect, useRef } from 'react';
import { REAL_LIFE_DIALOGUES } from '../../data/dialoguesData';
import { DialogueSituation, DialogueLine } from '../../types';
import { 
  MessagesSquare, Play, Pause, Volume2, Mic, MicOff, 
  CheckCircle2, XCircle, ChevronLeft, Award, Sparkles, 
  RotateCcw, BookOpen, HelpCircle, Eye, EyeOff, 
  Plane, Utensils, Briefcase, Building, Activity, ShoppingBag, 
  UserCheck, ArrowRight
} from 'lucide-react';

export const DialoguesPage: React.FC = () => {
  const [selectedDialogue, setSelectedDialogue] = useState<DialogueSituation | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'roleplay' | 'phrases' | 'quiz'>('roleplay');
  
  // Audio narration state
  const [isPlayingAll, setIsPlayingAll] = useState<boolean>(false);
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [showTranslations, setShowTranslations] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);

  // Microphone recording state for student role lines
  const [recordingLineId, setRecordingLineId] = useState<string | null>(null);
  const [recordedAudios, setRecordedAudios] = useState<Record<string, string>>({});
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizChecked, setQuizChecked] = useState<boolean>(false);

  // Category Icon mapper
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'travel': return <Plane className="w-4 h-4 text-sky-600" />;
      case 'food': return <Utensils className="w-4 h-4 text-amber-600" />;
      case 'business': return <Briefcase className="w-4 h-4 text-indigo-600" />;
      case 'medical': return <Activity className="w-4 h-4 text-rose-600" />;
      case 'shopping': return <ShoppingBag className="w-4 h-4 text-emerald-600" />;
      default: return <Building className="w-4 h-4 text-teal-600" />;
    }
  };

  // Single sentence TTS speak helper
  const speakLine = (line: DialogueLine, onEnd?: () => void) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(line.text);
    utterance.lang = 'en-US';
    utterance.rate = playbackSpeed === 0.75 ? 0.8 : playbackSpeed === 1.25 ? 1.2 : 1.0;
    
    // Choose pitch based on speaker if possible
    if (line.roleId === 'waiter' || line.roleId === 'candidate' || line.roleId === 'traveler') {
      utterance.pitch = 1.05;
    } else {
      utterance.pitch = 0.95;
    }

    utterance.onend = () => {
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      setIsPlayingAll(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  // Continuous Full Dialogue Playback
  const playDialogueFrom = (index: number) => {
    if (!selectedDialogue?.lines || index >= selectedDialogue.lines.length) {
      setIsPlayingAll(false);
      setCurrentLineIndex(0);
      return;
    }

    setCurrentLineIndex(index);
    setIsPlayingAll(true);

    const line = selectedDialogue.lines[index];
    speakLine(line, () => {
      // Pause slightly between dialogue lines for natural timing
      setTimeout(() => {
        if (index + 1 < selectedDialogue.lines.length) {
          playDialogueFrom(index + 1);
        } else {
          setIsPlayingAll(false);
          setCurrentLineIndex(0);
        }
      }, 700);
    });
  };

  const togglePlayPauseAll = () => {
    if (isPlayingAll) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingAll(false);
    } else {
      playDialogueFrom(currentLineIndex);
    }
  };

  const handleStopAll = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAll(false);
    setCurrentLineIndex(0);
  };

  // Stop audio on unmount or dialog switch
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectedDialogue]);

  // Audio Recording (Microphone)
  const startRecording = async (lineId: string) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setRecordedAudios((prev) => ({ ...prev, [lineId]: url }));
        stream.getTracks().forEach((track) => track.stop());
      };

      recorder.start();
      setRecordingLineId(lineId);
    } catch (err) {
      console.warn("Mikrofon ruxsati berilmadi:", err);
      alert("Ovozingizni yozib olish uchun brauzerda mikrofonga ruxsat bering.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    setRecordingLineId(null);
  };

  // Filtered Dialogues
  const filteredDialogues = REAL_LIFE_DIALOGUES.filter((d) => {
    if (activeCategory === 'all') return true;
    return d.category === activeCategory;
  });

  const categories = [
    { id: 'all', label: 'Barchasi' },
    { id: 'travel', label: 'Sayohat & Aeroport' },
    { id: 'food', label: 'Restoran & Taom' },
    { id: 'business', label: 'Ish & Intervyu' },
    { id: 'medical', label: 'Salomatlik & Shifokor' },
    { id: 'shopping', label: 'Do\'kon & Xarid' }
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Top Hero Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-6xl mx-auto">
          {selectedDialogue && (
            <button
              onClick={() => {
                handleStopAll();
                setSelectedDialogue(null);
                setQuizAnswers({});
                setQuizChecked(false);
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors mb-4 backdrop-blur-sm border border-white/10"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Barcha hayotiy vaziyatlar ro'yxatiga qaytish</span>
            </button>
          )}

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">
                <MessagesSquare className="w-3.5 h-3.5" />
                <span>Real-Life English Situations & Roleplay</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                {selectedDialogue ? selectedDialogue.title : 'Hayotiy Muloqot & Dialog Simulyatori'}
              </h1>
              <p className="text-indigo-200/90 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                {selectedDialogue
                  ? selectedDialogue.scenarioUz
                  : "Aeroport, restoran, ish suhbati va mehmonxonalardagi real muloqotlar. Rol ijro eting, ovozli talaffuzni sinang va ravon ingliz tilida gapiring."}
              </p>
            </div>

            {selectedDialogue && (
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-extrabold text-xs">
                  {selectedDialogue.level} Daraja
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 text-white text-xs font-bold border border-white/10">
                  {selectedDialogue.lines.length} ta jumla
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {selectedDialogue ? (
          /* Active Dialogue Detail & Roleplay Screen */
          <div className="space-y-6">
            {/* Top Control Bar & Player */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
              {/* Audio narration playback */}
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlayPauseAll}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shadow-xs"
                >
                  {isPlayingAll ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>Dialogni to'xtatish</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>{currentLineIndex > 0 ? "Davom ettirish" : "To'liq dialog audio ijrosi"}</span>
                    </>
                  )}
                </button>

                {isPlayingAll && (
                  <button
                    onClick={handleStopAll}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs transition"
                    title="Boshiga qaytarish"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}

                {/* Speed selector */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs">
                  {[0.75, 1.0, 1.25].map((speed) => (
                    <button
                      key={speed}
                      onClick={() => setPlaybackSpeed(speed)}
                      className={`px-2 py-1 rounded-lg font-bold text-[11px] transition ${
                        playbackSpeed === speed
                          ? 'bg-white text-indigo-700 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {speed}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Translation Toggle */}
              <button
                onClick={() => setShowTranslations((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition"
              >
                {showTranslations ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showTranslations ? "Tarjimalarni yashirish" : "Tarjimalarni ko'rsatish"}</span>
              </button>
            </div>

            {/* Sub-Tabs: Roleplay / Phrases / Quiz */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <button
                onClick={() => setActiveTab('roleplay')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === 'roleplay'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <MessagesSquare className="w-4 h-4" />
                <span>1. Rolli O'yin & Nutq Mashqi ({selectedDialogue.lines.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('phrases')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === 'phrases'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>2. Foydali Iboralar & Kollokatsiyalar ({selectedDialogue.usefulPhrases.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === 'quiz'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>3. Tushunish Testi ({selectedDialogue.comprehensionQuiz.length})</span>
              </button>
            </div>

            {/* TAB 1: Roleplay and Lines */}
            {activeTab === 'roleplay' && (
              <div className="space-y-4">
                {/* Roles Legend Banner */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-indigo-50/70 border border-indigo-200/80 rounded-2xl">
                  {selectedDialogue.roles.map((role) => (
                    <div key={role.id} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-indigo-100 shadow-2xs">
                      <span className="text-2xl">{role.avatar}</span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-extrabold text-slate-900">{role.name}</span>
                          {role.isUserEligible && (
                            <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                              Sizning rolingiz
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 leading-tight mt-0.5">{role.descriptionUz}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Lines Chat Stream */}
                <div className="space-y-3">
                  {selectedDialogue.lines.map((line, idx) => {
                    const isStudentRole = line.roleId === 'traveler' || line.roleId === 'guest' || line.roleId === 'candidate' || line.roleId === 'patient' || line.roleId === 'customer';
                    const isLineActive = isPlayingAll && currentLineIndex === idx;
                    const isRecording = recordingLineId === line.id;
                    const recordedAudioUrl = recordedAudios[line.id];

                    return (
                      <div
                        key={line.id}
                        className={`p-4 rounded-2xl border transition-all ${
                          isLineActive
                            ? 'bg-indigo-50 border-indigo-400 ring-2 ring-indigo-300 shadow-xs'
                            : isStudentRole
                            ? 'bg-emerald-50/40 border-emerald-200/80 hover:bg-emerald-50/70'
                            : 'bg-white border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">
                              {isStudentRole ? '👤' : '🤖'}
                            </span>
                            <span className="text-xs font-extrabold text-slate-900">
                              {line.speakerName}
                            </span>
                            {isStudentRole && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                                Sizning navbatingiz
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => {
                                playDialogueFrom(idx);
                              }}
                              className="p-1.5 rounded-lg bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-700 transition"
                              title="Shu gapdan boshlab eshitish"
                            >
                              <Play className="w-3.5 h-3.5 fill-current" />
                            </button>

                            <button
                              onClick={() => speakLine(line)}
                              className="p-1.5 rounded-lg bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-700 transition"
                              title="Faqat shu gapni eshitish"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* English text */}
                        <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                          "{line.text}"
                        </p>

                        {/* Uzbek translation */}
                        {showTranslations && (
                          <p className="text-xs text-slate-600 mt-1.5 italic">
                            O'zbekcha: {line.translationUz}
                          </p>
                        )}

                        {/* Phonetic Tip */}
                        {line.phoneticTipUz && (
                          <div className="mt-2 text-[11px] text-amber-900 bg-amber-50 p-2 rounded-lg border border-amber-200/80 flex items-start gap-1.5">
                            <span className="font-bold">💡 Fonetika:</span>
                            <span>{line.phoneticTipUz}</span>
                          </div>
                        )}

                        {/* Speaking and recording action for Student Role */}
                        {isStudentRole && (
                          <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              {!isRecording ? (
                                <button
                                  onClick={() => startRecording(line.id)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition shadow-2xs"
                                >
                                  <Mic className="w-3.5 h-3.5" />
                                  <span>Talaffuzimni yozish</span>
                                </button>
                              ) : (
                                <button
                                  onClick={stopRecording}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold transition animate-pulse"
                                >
                                  <MicOff className="w-3.5 h-3.5" />
                                  <span>Yozishni to'xtatish...</span>
                                </button>
                              )}
                              <span className="text-[11px] text-slate-500">
                                Gapni xuddi spikerdek baland va ravon ayting!
                              </span>
                            </div>

                            {recordedAudioUrl && (
                              <div className="flex items-center gap-2 bg-white px-2.5 py-1 rounded-xl border border-slate-200 shadow-2xs">
                                <span className="text-[11px] font-bold text-slate-600">Yozuv:</span>
                                <audio src={recordedAudioUrl} controls className="h-6 w-44" />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 2: Useful Phrases */}
            {activeTab === 'phrases' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4 shadow-xs">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-base font-bold text-slate-900">
                    Ushbu vaziyat uchun eng zarur inglizcha iboralar & kollokatsiyalar
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Bu iboralar haqiqiy hayotda tez-tez uchraydi. Ularni yod oling va suhbatda ishlating.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {selectedDialogue.usefulPhrases.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 hover:bg-indigo-50/40 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-base font-black text-indigo-950">
                          {item.phrase}
                        </div>
                        <button
                          onClick={() => {
                            if ('speechSynthesis' in window) {
                              const u = new SpeechSynthesisUtterance(item.phrase);
                              u.lang = 'en-US';
                              window.speechSynthesis.speak(u);
                            }
                          }}
                          className="p-1 rounded-md text-indigo-700 hover:bg-indigo-100 transition"
                          title="Talaffuzni eshitish"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-xs font-bold text-emerald-800">
                        O'zbekcha: {item.meaningUz}
                      </div>

                      <p className="text-xs text-slate-600 bg-white p-2 rounded-lg border border-slate-200/80">
                        💡 Qachon ishlatiladi: {item.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: Comprehension Quiz */}
            {activeTab === 'quiz' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-5 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Muloqotni tushunish bo'yicha tezkor test
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Dialogdagi asosiy tafsilotlar va ma'nolarni to'g'ri tushunganingizni tekshiring.
                    </p>
                  </div>

                  <button
                    onClick={() => setQuizChecked(true)}
                    disabled={Object.keys(quizAnswers).length === 0}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold transition shadow-xs"
                  >
                    Natijani tekshirish
                  </button>
                </div>

                <div className="space-y-4">
                  {selectedDialogue.comprehensionQuiz.map((q, qIdx) => {
                    const selected = quizAnswers[qIdx];
                    const isCorrect = quizChecked && selected === q.correctIndex;

                    return (
                      <div key={qIdx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                        <div className="font-bold text-sm text-slate-900">
                          {qIdx + 1}. {q.question}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map((opt, optIdx) => {
                            const isOptionChosen = selected === optIdx;
                            const isThisCorrect = optIdx === q.correctIndex;

                            let btnStyle = 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100';
                            if (quizChecked) {
                              if (isThisCorrect) {
                                btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                              } else if (isOptionChosen && !isThisCorrect) {
                                btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 line-through';
                              }
                            } else if (isOptionChosen) {
                              btnStyle = 'bg-indigo-600 text-white border-indigo-600 font-bold';
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={quizChecked}
                                onClick={() => setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))}
                                className={`p-2.5 text-xs text-left rounded-xl border transition ${btnStyle}`}
                              >
                                <span className="font-bold mr-1.5">{String.fromCharCode(65 + optIdx)}.</span>
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {quizChecked && (
                          <div className="pt-2 text-xs">
                            {isCorrect ? (
                              <div className="text-emerald-700 font-bold flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>A'lo! Javobingiz to'g'ri (+15 XP)</span>
                              </div>
                            ) : (
                              <div className="text-rose-600 font-bold flex items-center gap-1.5">
                                <XCircle className="w-4 h-4" />
                                <span>Xato! To'g'ri javob: {String.fromCharCode(65 + q.correctIndex)}</span>
                              </div>
                            )}
                            <p className="text-slate-600 mt-1 italic">
                              Izoh: {q.explanationUz}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Dialogues Catalog Grid */
          <div className="space-y-6">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid of Dialogues */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDialogues.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group hover:-translate-y-1"
                >
                  {/* Image and Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[11px] font-extrabold rounded-lg bg-indigo-600 text-white shadow-xs uppercase tracking-wider">
                        {item.level}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-bold">
                      {getCategoryIcon(item.category)}
                      <span className="capitalize">{item.category}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-base sm:text-lg font-black tracking-tight leading-snug drop-shadow-sm">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.scenarioUz}
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-[11px] text-slate-500 font-medium">
                        <span className="text-indigo-700 font-bold">{item.lines.length} ta jumla</span>
                        <span> • {item.usefulPhrases.length} ibora</span>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedDialogue(item);
                          setActiveTab('roleplay');
                        }}
                        className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shadow-xs"
                      >
                        <span>Mashq qilish</span>
                        <ArrowRight className="w-3.5 h-3.5" />
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
