import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { STORIES_FOR_REPRODUCTION, StoryForReproduction, getStoryById } from '../../data/storiesForReproductionData';
import { Modal } from '../../components/common/Modal';
import { playSound } from '../../lib/sound';
import confetti from 'canvas-confetti';
import { 
  BookOpen, Volume2, Play, Pause, RotateCcw, Sparkles, CheckCircle2, 
  Check, Copy, ChevronRight, ChevronLeft, Send, Award, Search, Mic, 
  FileText, CheckSquare, Layers, Eye, HelpCircle, Lightbulb, X, Flame, 
  ListChecks, PenTool, MessageSquare, ArrowRight, BookmarkCheck, ArrowLeft
} from 'lucide-react';

export const StoriesForReproductionPage: React.FC = () => {
  const { role, profile } = useAuth();
  const { t } = useLanguage();
  const { groups, createHomework, addXP, addDailyWord } = useLMSData();

  // Active Story state
  const [activeStoryId, setActiveStoryId] = useState<string>('story-1');
  const [activeTab, setActiveTab] = useState<'story' | 'vocabulary' | 'questions' | 'tfng' | 'reproduction'>('story');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [searchQuery, setSearchQuery] = useState('');

  // True / False / Not Given state
  const [tfAnswers, setTfAnswers] = useState<Record<string, 'True' | 'False' | 'Not Given'>>({});

  // Audio / Speech Synthesis state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [currentlySpeakingSentence, setCurrentlySpeakingSentence] = useState<string | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Question answering state (typed answers & revealed model answers)
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showModelAnswers, setShowModelAnswers] = useState<Record<string, boolean>>({});
  const [checkedQuestions, setCheckedQuestions] = useState<Record<string, boolean>>({});
  
  // Multiple Choice Quiz state (alternative mode for Q&A)
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [qaMode, setQaMode] = useState<'open' | 'quiz'>('open');

  // Reproduction (Retelling) state
  const [reproductionText, setReproductionText] = useState<string>('');
  const [savedReproductions, setSavedReproductions] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('premier_reproduction_stories');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [showModelRetelling, setShowModelRetelling] = useState(false);
  const [reproductionSubmitted, setReproductionSubmitted] = useState(false);

  // Teacher / Admin Assignment Modal
  const [assignModalOpen, setAssignModalOpen] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState<string>(groups[0]?.id || '');
  const [dueDate, setDueDate] = useState<string>('2026-09-25');
  const [assignMessage, setAssignMessage] = useState<string | null>(null);

  // Daily word added toast
  const [addedWords, setAddedWords] = useState<Set<string>>(new Set());
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const activeStory: StoryForReproduction = useMemo(() => {
    return getStoryById(activeStoryId) || STORIES_FOR_REPRODUCTION[0];
  }, [activeStoryId]);

  // Load existing saved reproduction for active story
  useEffect(() => {
    setReproductionText(savedReproductions[activeStory.id] || '');
    setShowModelRetelling(false);
    setReproductionSubmitted(!!savedReproductions[activeStory.id]);
    stopSpeech();
  }, [activeStoryId]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Text-To-Speech Controls
  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      setCurrentlySpeakingSentence(null);
    }
  };

  const speakText = (text: string, rate: number = playbackSpeed) => {
    if (!('speechSynthesis' in window)) return;
    stopSpeech();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setIsPlayingAudio(true);
      setCurrentlySpeakingSentence(text);
    };

    utterance.onend = () => {
      setIsPlayingAudio(false);
      setCurrentlySpeakingSentence(null);
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
      setCurrentlySpeakingSentence(null);
    };

    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handlePlayFullStory = () => {
    if (isPlayingAudio) {
      stopSpeech();
    } else {
      speakText(activeStory.storyText, playbackSpeed);
    }
  };

  // Handle Q&A Check
  const handleCheckQuestion = (qId: string, modelAnswer: string, keywords: string[]) => {
    const ans = (userAnswers[qId] || '').trim().toLowerCase();
    if (!ans) return;

    setCheckedQuestions(prev => ({ ...prev, [qId]: true }));
    setShowModelAnswers(prev => ({ ...prev, [qId]: true }));

    // Check if at least 1 keyword is included
    const matchedCount = keywords.filter(kw => ans.includes(kw.toLowerCase())).length;
    if (matchedCount > 0) {
      playSound('pop');
      addXP(10, `Answered Story ${activeStory.storyNumber} Question`);
    } else {
      playSound('tap');
    }
  };

  // Handle Quiz Option Selection
  const handleSelectQuizOption = (qId: string, optionIdx: number, correctIdx?: number) => {
    setQuizAnswers(prev => ({ ...prev, [qId]: optionIdx }));
    if (optionIdx === correctIdx) {
      playSound('pop');
      addXP(10, `Correct Answer in Story ${activeStory.storyNumber}`);
    } else {
      playSound('tap');
    }
  };

  // Handle True / False / Not Given Selection
  const handleSelectTfAnswer = (qId: string, answer: 'True' | 'False' | 'Not Given', correctAns: 'True' | 'False' | 'Not Given') => {
    if (tfAnswers[qId]) return;
    setTfAnswers(prev => ({ ...prev, [qId]: answer }));
    if (answer === correctAns) {
      playSound('pop');
      addXP(10, `Correct T/F/NG in Story ${activeStory.storyNumber}`);
    } else {
      playSound('tap');
    }
  };

  // Handle Reproduction Submit
  const handleSubmitReproduction = (e: React.FormEvent) => {
    e.preventDefault();
    if (reproductionText.trim().split(/\s+/).length < 25) {
      alert("Iltimos, qayta hikoya qilish uchun kamida 25 ta so'z yozing.");
      return;
    }

    const updated = { ...savedReproductions, [activeStory.id]: reproductionText };
    setSavedReproductions(updated);
    try {
      localStorage.setItem('premier_reproduction_stories', JSON.stringify(updated));
    } catch {}

    setReproductionSubmitted(true);
    addXP(50, `Completed Reproduction for Story ${activeStory.storyNumber}`);
    playSound('fanfare');
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch {}
    showToast(`🎉 Hikoya muvaffaqiyatli qayta hikoya qilindi! +50 XP berildi.`);
  };

  // Add word to Leitner SRS Deck
  const handleAddWordToSRS = (word: string, translationUz: string) => {
    addDailyWord({
      word,
      definition: translationUz,
      translation: translationUz,
      level: activeStory.cefrLevel
    });
    setAddedWords(prev => new Set(prev).add(word));
    playSound('bell');
    showToast(`"${word}" so'zlar lug'atingizga (SRS) qo'shildi!`);
  };

  // Teacher / Admin Homework Assignment
  const handleAssignHomework = async (e: React.FormEvent) => {
    e.preventDefault();
    await createHomework({
      group_id: selectedGroupId,
      teacher_id: profile?.id || 't1',
      title: `Story ${activeStory.storyNumber}: ${activeStory.title} (Stories for Reproduction)`,
      description: `L.A. Hill Elementary Stories for Reproduction • ${activeStory.summaryUz}`,
      type: 'writing',
      due_date: dueDate,
      max_score: 100,
      content: {
        prompt: `Story ${activeStory.storyNumber}: ${activeStory.title}\n\n1. Matnni diqqat bilan o'qing.\n2. Berilgan savollarga javob bering.\n3. Hikoyani o'z so'zlaringiz bilan to'liq qayta yozing (Reproduction).`,
        questions: activeStory.questions.map(q => ({
          id: q.id,
          question: q.question,
          options: q.options,
          correct_answer: q.modelAnswer,
          points: 5
        }))
      }
    });

    setAssignMessage(`✅ "Story ${activeStory.storyNumber}: ${activeStory.title}" guruhingizga uy vazifasi qilib muvaffaqiyatli yuklandi!`);
    setTimeout(() => {
      setAssignModalOpen(false);
      setAssignMessage(null);
    }, 2000);
  };

  // Filtered stories
  const filteredStories = useMemo(() => {
    if (!searchQuery.trim()) return STORIES_FOR_REPRODUCTION;
    const q = searchQuery.toLowerCase();
    return STORIES_FOR_REPRODUCTION.filter(s => 
      s.title.toLowerCase().includes(q) ||
      s.titleUz.toLowerCase().includes(q) ||
      s.storyText.toLowerCase().includes(q) ||
      s.summaryUz.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Reproduction Word Count & Keyword matches
  const reproductionWordsCount = reproductionText.trim() ? reproductionText.trim().split(/\s+/).length : 0;
  const matchedKeywordsInReproduction = useMemo(() => {
    const textLower = reproductionText.toLowerCase();
    const allKws = activeStory.vocabulary.map(v => v.word.toLowerCase());
    return allKws.filter(kw => textLower.includes(kw));
  }, [reproductionText, activeStory]);

  return (
    <div className="space-y-6 pb-16">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-950 text-white px-5 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-rose-900/40 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30 mb-2.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Elementary Stories for Reproduction • L.A. Hill (Oxford University Press)</span>
              <span className="px-2 py-0.5 rounded-md bg-rose-500 text-white text-[10px] font-black uppercase">
                A1-A2
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Hikoyalarni Qayta Aytib Berish (Reproduction)
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Klassik qisqa hikoyalar orqali matnni tushunish, ketma-ket savollarga to'g'ri javob berish va hikoyani o'z so'zlari bilan ravon qayta aytib berish mahoratini oshiring.
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0">
            {(role === 'teacher' || role === 'admin') && (
              <button
                type="button"
                onClick={() => setAssignModalOpen(true)}
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-md transition flex items-center gap-2 cursor-pointer"
              >
                <CheckSquare className="w-4 h-4" />
                <span>Guruhga Vazifa Qilib Yuborish</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Container: Left Sidebar & Right Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN (4 Cols): Story Selector List */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-2xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-rose-600" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Hikoyalar Ro'yxati ({STORIES_FOR_REPRODUCTION.length})
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 text-[10px] font-extrabold border border-rose-200">
                Elementary
              </span>
            </div>

            {/* Search Input */}
            <div className="relative mb-3">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Hikoya nomi yoki mavzuni qidirish..."
                className="w-full pl-9 pr-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden font-medium text-slate-800"
              />
            </div>

            {/* Stories List */}
            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
              {filteredStories.map((story) => {
                const isActive = story.id === activeStory.id;
                const isDone = !!savedReproductions[story.id];

                return (
                  <button
                    key={story.id}
                    type="button"
                    onClick={() => setActiveStoryId(story.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition cursor-pointer flex items-start gap-3 ${
                      isActive
                        ? 'bg-rose-50 border-rose-300 shadow-xs'
                        : 'bg-white border-slate-200/80 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                      isActive 
                        ? 'bg-rose-600 text-white shadow-xs' 
                        : isDone 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {isDone ? <Check className="w-4 h-4" /> : story.storyNumber}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className={`text-xs font-bold truncate ${isActive ? 'text-rose-950 font-black' : 'text-slate-800'}`}>
                          Story {story.storyNumber}: {story.title}
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold shrink-0">
                          {story.wordCount} words
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">
                        {story.titleUz}
                      </div>
                      <div className="flex items-center gap-2 mt-1.5 text-[10px] text-slate-400">
                        <span className="font-semibold text-indigo-600">{story.questions.length} ta savol</span>
                        <span>•</span>
                        <span className="text-rose-600 font-semibold">{story.trueFalseQuestions?.length || 6} ta T/F/NG</span>
                        <span>•</span>
                        <span>{story.vocabulary.length} ta lug'at</span>
                        {isDone && (
                          <>
                            <span>•</span>
                            <span className="text-emerald-600 font-bold">Topshirilgan ✓</span>
                          </>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Tip Card */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 p-4 rounded-2xl text-xs space-y-2 text-amber-900">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Stories for Reproduction Metodi:</span>
            </div>
            <p className="text-[11px] leading-relaxed text-amber-800">
              Har bir hikoya ostidagi savollar shunchaki test emas — ularga ketma-ket javob berilsa, butun hikoyaning to'liq matni o'z-o'zidan shakllanadi! Savollar yordamida hikoyani yodlab oling va qayta aytib bering.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN (8 Cols): Story Reader & Reproduction Studio */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Active Story Card Header */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-black">
                    Story {activeStory.storyNumber}
                  </span>
                  <span className="text-slate-400 text-xs">•</span>
                  <span className="text-xs font-bold text-slate-500">{activeStory.titleUz}</span>
                  <span className="text-slate-400 text-xs">•</span>
                  <span className="text-xs font-semibold text-slate-400">{activeStory.wordCount} so'z</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {activeStory.title}
                </h2>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-1.5 self-start sm:self-auto">
                <button
                  type="button"
                  disabled={activeStory.storyNumber <= 1}
                  onClick={() => {
                    const prev = STORIES_FOR_REPRODUCTION.find(s => s.storyNumber === activeStory.storyNumber - 1);
                    if (prev) setActiveStoryId(prev.id);
                  }}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                  title="Oldingi hikoya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  disabled={activeStory.storyNumber >= STORIES_FOR_REPRODUCTION.length}
                  onClick={() => {
                    const next = STORIES_FOR_REPRODUCTION.find(s => s.storyNumber === activeStory.storyNumber + 1);
                    if (next) setActiveStoryId(next.id);
                  }}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                  title="Keyingi hikoya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Reader Tab Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setActiveTab('story')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'story'
                      ? 'bg-white text-rose-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Hikoya Matni</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('vocabulary')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'vocabulary'
                      ? 'bg-white text-rose-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Lug'at ({activeStory.vocabulary.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('questions')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'questions'
                      ? 'bg-white text-rose-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <ListChecks className="w-3.5 h-3.5" />
                  <span>Savol-Javoblar ({activeStory.questions.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('tfng')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'tfng'
                      ? 'bg-white text-rose-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>True / False / Not Given ({activeStory.trueFalseQuestions?.length || 6})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('reproduction')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'reproduction'
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'text-rose-700 hover:bg-rose-50'
                  }`}
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Qayta Hikoya Qilish (Reproduction)</span>
                  {savedReproductions[activeStory.id] && <Check className="w-3 h-3 text-emerald-300" />}
                </button>
              </div>

              {/* Font Sizer Controls */}
              {activeTab === 'story' && (
                <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-xl px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setFontSize('sm')}
                    className={`px-2 py-0.5 rounded text-xs font-bold transition cursor-pointer ${
                      fontSize === 'sm' ? 'bg-slate-200 text-slate-900' : 'text-slate-500'
                    }`}
                  >
                    A-
                  </button>
                  <button
                    type="button"
                    onClick={() => setFontSize('base')}
                    className={`px-2 py-0.5 rounded text-xs font-bold transition cursor-pointer ${
                      fontSize === 'base' ? 'bg-slate-200 text-slate-900' : 'text-slate-500'
                    }`}
                  >
                    A
                  </button>
                  <button
                    type="button"
                    onClick={() => setFontSize('lg')}
                    className={`px-2 py-0.5 rounded text-xs font-bold transition cursor-pointer ${
                      fontSize === 'lg' ? 'bg-slate-200 text-slate-900' : 'text-slate-500'
                    }`}
                  >
                    A+
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* TAB 1: STORY READING & AUDIO */}
          {activeTab === 'story' && (
            <div className="space-y-4">
              {/* Audio Player Bar */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-2xs flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePlayFullStory}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white transition shadow-sm cursor-pointer ${
                      isPlayingAudio ? 'bg-rose-600 hover:bg-rose-700 animate-pulse' : 'bg-rose-600 hover:bg-rose-700'
                    }`}
                    title={isPlayingAudio ? "To'xtatish" : "To'liq hikoyani tinglash"}
                  >
                    {isPlayingAudio ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                  </button>

                  <div>
                    <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 text-rose-600" />
                      <span>{isPlayingAudio ? "O'qilmoqda..." : "Hikoyani tinglash (Native Audio TTS)"}</span>
                    </div>
                    <span className="text-[11px] text-slate-400">
                      So'zlarga bosib alohida talaffuzni eshitishingiz mumkin
                    </span>
                  </div>
                </div>

                {/* Playback speed controls */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                  {[0.8, 1.0, 1.2].map(spd => (
                    <button
                      key={spd}
                      type="button"
                      onClick={() => {
                        setPlaybackSpeed(spd);
                        if (isPlayingAudio) speakText(activeStory.storyText, spd);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                        playbackSpeed === spd
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Reading Passage Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs space-y-4">
                <div className="space-y-4">
                  {activeStory.paragraphs.map((p, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 group"
                    >
                      <button
                        type="button"
                        onClick={() => speakText(p, playbackSpeed)}
                        className="p-1.5 rounded-lg text-slate-300 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer shrink-0 mt-0.5"
                        title="Ushbu xatboshini tinglash"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      <p className={`text-slate-800 leading-relaxed ${
                        fontSize === 'sm' ? 'text-sm' : fontSize === 'lg' ? 'text-lg sm:text-xl' : 'text-base'
                      }`}>
                        {p}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Uzbek Summary Accordion */}
                <div className="mt-6 pt-5 border-t border-slate-100 bg-slate-50/70 p-4 rounded-xl">
                  <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5 mb-1.5">
                    <Sparkles className="w-4 h-4 text-rose-500" />
                    <span>O'zbekcha qisqacha mazmuni:</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{activeStory.summaryUz}"
                  </p>
                </div>

                {/* Action to proceed to Q&A */}
                <div className="flex justify-end pt-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab('questions')}
                    className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Savollarga O'tish ({activeStory.questions.length})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: VOCABULARY GLOSSARY */}
          {activeTab === 'vocabulary' && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-black text-slate-900">
                      Hikoyaning Asosiy Kalit So'zlari ({activeStory.vocabulary.length} ta)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Hikoyani to'g'ri qayta hikoya qilish uchun kerakli so'zlar va iboralar.
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
                    A2 Level Vocabulary
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeStory.vocabulary.map((v, i) => {
                    const isAdded = addedWords.has(v.word);

                    return (
                      <div 
                        key={i} 
                        className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/70 hover:border-indigo-300 transition space-y-2 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="font-extrabold text-sm text-slate-900">{v.word}</span>
                              <span className="text-[10px] text-slate-400 italic">{v.pos}</span>
                              <span className="font-mono text-[11px] text-slate-500">{v.phonetic}</span>
                            </div>

                            <button
                              type="button"
                              onClick={() => speakText(v.word)}
                              className="p-1 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition cursor-pointer"
                              title="Talaffuzini tinglash"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="text-xs font-bold text-rose-700 mt-1">
                            {v.translationUz}
                          </div>

                          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                            {v.definitionEn}
                          </p>

                          <div className="mt-2 text-[11px] text-slate-700 italic bg-white/70 p-2 rounded-lg border border-slate-200/50">
                            "{v.exampleSentence}"
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-200/60 flex justify-end">
                          <button
                            type="button"
                            onClick={() => handleAddWordToSRS(v.word, v.translationUz)}
                            disabled={isAdded}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition flex items-center gap-1 cursor-pointer ${
                              isAdded
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700'
                            }`}
                          >
                            {isAdded ? <Check className="w-3 h-3" /> : <Layers className="w-3 h-3" />}
                            <span>{isAdded ? "Lug'atda mavjud" : "+ Lug'atimga qo'shish (SRS)"}</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: QUESTIONS & COMPREHENSION */}
          {activeTab === 'questions' && (
            <div className="space-y-4">
              {/* Mode Switcher: Open Question vs Multiple Choice Quiz */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-black text-slate-900">
                    Hikoya Bo'yicha Savollar ({activeStory.questions.length} ta)
                  </h3>
                  <p className="text-xs text-slate-500">
                    {qaMode === 'open' 
                      ? "Savollarga to'liq gap bilan javob bering yoki model javobni tekshiring." 
                      : "Variantlardan to'g'risini tanlang."}
                  </p>
                </div>

                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setQaMode('open')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      qaMode === 'open'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Yozma Javob
                  </button>
                  <button
                    type="button"
                    onClick={() => setQaMode('quiz')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      qaMode === 'quiz'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Variantli Test
                  </button>
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-3">
                {activeStory.questions.map((q) => {
                  const isChecked = checkedQuestions[q.id];
                  const showModel = showModelAnswers[q.id];
                  const userVal = userAnswers[q.id] || '';
                  const selectedQuizOpt = quizAnswers[q.id];
                  const hasQuizAnswered = selectedQuizOpt !== undefined;

                  return (
                    <div 
                      key={q.id}
                      className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs space-y-3"
                    >
                      {/* Question Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                            {q.order}
                          </span>
                          <div>
                            <div className="text-xs sm:text-sm font-bold text-slate-900">
                              {q.question}
                            </div>
                            {q.explanationUz && isChecked && (
                              <div className="text-[11px] text-slate-500 mt-0.5">
                                {q.explanationUz}
                              </div>
                            )}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => speakText(q.question)}
                          className="p-1 rounded-lg text-slate-400 hover:text-rose-600 transition cursor-pointer shrink-0"
                          title="Savolni tinglash"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* MODE 1: OPEN TYPING & MODEL CHECK */}
                      {qaMode === 'open' && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={userVal}
                              onChange={(e) => setUserAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                              placeholder="Ingliz tilida javob yozing..."
                              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-hidden font-medium"
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  handleCheckQuestion(q.id, q.modelAnswer, q.keywords);
                                }
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => handleCheckQuestion(q.id, q.modelAnswer, q.keywords)}
                              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition shrink-0 cursor-pointer shadow-xs"
                            >
                              Tekshirish
                            </button>
                          </div>

                          {/* Model Answer Toggle */}
                          <div className="flex items-center justify-between pt-1">
                            <button
                              type="button"
                              onClick={() => setShowModelAnswers(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>{showModel ? "Model javobni yashirish" : "Model javobni ko'rish"}</span>
                            </button>

                            {isChecked && (
                              <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>Qabul qilindi (+10 XP)</span>
                              </span>
                            )}
                          </div>

                          {showModel && (
                            <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl text-xs space-y-1 animate-in fade-in duration-150">
                              <span className="text-[10px] font-black uppercase text-emerald-800 tracking-wider block">
                                Kitobdagi Model Javob:
                              </span>
                              <div className="font-bold text-emerald-950 flex items-center justify-between">
                                <span>{q.modelAnswer}</span>
                                <button
                                  type="button"
                                  onClick={() => speakText(q.modelAnswer)}
                                  className="text-emerald-700 hover:text-emerald-950 p-1 cursor-pointer"
                                  title="Model javobni tinglash"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* MODE 2: MULTIPLE CHOICE QUIZ */}
                      {qaMode === 'quiz' && q.options && (
                        <div className="space-y-2 pt-1">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = selectedQuizOpt === optIdx;
                              const isCorrect = q.correctOptionIndex === optIdx;

                              let btnStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100';
                              if (hasQuizAnswered) {
                                if (isCorrect) {
                                  btnStyle = 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold';
                                } else if (isSelected && !isCorrect) {
                                  btnStyle = 'bg-rose-50 border-rose-300 text-rose-900';
                                }
                              }

                              return (
                                <button
                                  key={optIdx}
                                  type="button"
                                  disabled={hasQuizAnswered}
                                  onClick={() => handleSelectQuizOption(q.id, optIdx, q.correctOptionIndex)}
                                  className={`p-3 rounded-xl border text-xs text-left transition flex items-center justify-between cursor-pointer ${btnStyle}`}
                                >
                                  <span>{opt}</span>
                                  {hasQuizAnswered && isCorrect && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                                  {hasQuizAnswered && isSelected && !isCorrect && <X className="w-4 h-4 text-rose-500 shrink-0" />}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Call to Action */}
              <div className="bg-rose-50 border border-rose-200 p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-rose-900">
                    Barcha savollar bilan tanishdingizmi?
                  </div>
                  <div className="text-[11px] text-rose-700">
                    Endi hikoyani o'z so'zlaringiz bilan to'liq qayta hikoya qilib yozing (Reproduction)!
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab('tfng')}
                  className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition flex items-center gap-1.5 cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>True / False / Not Given Mashqlari →</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: TRUE / FALSE / NOT GIVEN (IELTS READING STYLE) */}
          {activeTab === 'tfng' && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-[10px] font-black uppercase">
                        Reading Comprehension
                      </span>
                      <span className="text-xs font-bold text-slate-500">IELTS Standarti</span>
                    </div>
                    <h3 className="text-base font-black text-slate-900 tracking-tight">
                      True / False / Not Given Mashqlari
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>To'g'ri: {
                      (activeStory.trueFalseQuestions || []).filter(q => tfAnswers[q.id] === q.correctAnswer).length
                    } / {(activeStory.trueFalseQuestions || []).length}</span>
                  </div>
                </div>

                <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200/60 leading-relaxed">
                  <span className="font-bold text-slate-800">Qoida: </span>
                  Agar fikr hikoya matniga to'g'ri kelsa — <span className="font-bold text-emerald-700">True</span>; agar matnga teskari yoki noto'g'ri bo'lsa — <span className="font-bold text-rose-700">False</span>; agar matnda bu haqda ma'lumot berilmagan bo'lsa — <span className="font-bold text-amber-700">Not Given</span> deb belgilang.
                </div>
              </div>

              {/* Statements List */}
              <div className="space-y-3">
                {(activeStory.trueFalseQuestions || []).map((q) => {
                  const userAnswer = tfAnswers[q.id];
                  const hasAnswered = userAnswer !== undefined;
                  const isCorrect = userAnswer === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs space-y-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                            {q.order}
                          </span>
                          <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                            {q.statement}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => speakText(q.statement)}
                          className="p-1 rounded-lg text-slate-400 hover:text-indigo-600 transition cursor-pointer shrink-0"
                          title="Fikrni tinglash"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* 3 Decision Buttons: True, False, Not Given */}
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {(['True', 'False', 'Not Given'] as const).map((opt) => {
                          const isSelected = userAnswer === opt;
                          const isOptCorrect = q.correctAnswer === opt;

                          let btnStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100';
                          if (hasAnswered) {
                            if (isOptCorrect) {
                              btnStyle = 'bg-emerald-50 border-emerald-300 text-emerald-900 font-black shadow-xs';
                            } else if (isSelected && !isOptCorrect) {
                              btnStyle = 'bg-rose-50 border-rose-300 text-rose-900 font-bold';
                            } else {
                              btnStyle = 'bg-slate-50/50 border-slate-100 text-slate-400 opacity-60';
                            }
                          }

                          return (
                            <button
                              key={opt}
                              type="button"
                              disabled={hasAnswered}
                              onClick={() => handleSelectTfAnswer(q.id, opt, q.correctAnswer)}
                              className={`py-2.5 px-3 rounded-xl border text-xs font-bold text-center transition flex items-center justify-center gap-1.5 cursor-pointer ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {hasAnswered && isOptCorrect && <Check className="w-4 h-4 text-emerald-600" />}
                              {hasAnswered && isSelected && !isOptCorrect && <X className="w-4 h-4 text-rose-500" />}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation in Uzbek after answering */}
                      {hasAnswered && (
                        <div className={`p-3 rounded-xl border text-xs leading-relaxed animate-in fade-in duration-150 ${
                          isCorrect 
                            ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950' 
                            : 'bg-rose-50/80 border-rose-200 text-rose-950'
                        }`}>
                          <div className="flex items-center gap-1.5 font-bold mb-0.5">
                            {isCorrect ? (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                <span>To'g'ri topdingiz! (+10 XP)</span>
                              </>
                            ) : (
                              <>
                                <X className="w-4 h-4 text-rose-600" />
                                <span>To'g'ri javob: <span className="font-extrabold underline">{q.correctAnswer}</span></span>
                              </>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-700 mt-1">
                            {q.explanationUz}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Navigation to Reproduction */}
              <div className="bg-rose-50 border border-rose-200 p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-rose-900">
                    True / False / Not Given savollarini yakunladingizmi?
                  </div>
                  <div className="text-[11px] text-rose-700">
                    Endi hikoyani to'liq qayta aytib berish (Reproduction) studiyasiga o'ting!
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab('reproduction')}
                  className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition flex items-center gap-1.5 cursor-pointer"
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Reproduction Studio →</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: REPRODUCTION STUDIO (RETELL IN OWN WORDS) */}
          {activeTab === 'reproduction' && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-black uppercase">
                      Reproduction Workshop
                    </span>
                    <span className="text-xs font-bold text-slate-500">+50 XP Mukofot</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    Hikoyani Qayta Aytib Berish & Yozish
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Quyidagi reja (outline) va savollardan foydalanib, hikoyaning to'liq mazmunini ingliz tilida o'z so'zlaringiz bilan yozing.
                  </p>
                </div>

                {/* Reproduction Outline Prompts */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                  <div className="font-bold text-slate-800 flex items-center gap-1.5">
                    <ListChecks className="w-4 h-4 text-indigo-600" />
                    <span>Hikoya Rejasi (Story Outline):</span>
                  </div>
                  <ul className="space-y-1 text-slate-600 text-[11px] list-disc pl-5">
                    {activeStory.reproductionOutline.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Reproduction Form */}
                <form onSubmit={handleSubmitReproduction} className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1.5 text-xs">
                      <label className="font-bold text-slate-700">
                        Sizning Hikoyangiz (Reproduction):
                      </label>
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className={`font-bold ${reproductionWordsCount >= 25 ? 'text-emerald-600' : 'text-slate-400'}`}>
                          {reproductionWordsCount} so'z (min. 25)
                        </span>
                        <span>•</span>
                        <span className="text-indigo-600 font-semibold">
                          {matchedKeywordsInReproduction.length}/{activeStory.vocabulary.length} kalit so'z
                        </span>
                      </div>
                    </div>

                    <textarea
                      rows={7}
                      required
                      value={reproductionText}
                      onChange={(e) => setReproductionText(e.target.value)}
                      placeholder={`Masalan:\nTwo weeks before Christmas, Mrs Smith bought a lot of Christmas cards for their friends. She asked her husband to write them while she was cooking...`}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-hidden font-medium leading-relaxed"
                    />
                  </div>

                  {/* Submission & Comparison Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowModelRetelling(!showModelRetelling)}
                      className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{showModelRetelling ? "Model Qayta Hikoyani Yashirish" : "Model Qayta Hikoya Bilan Solishtirish"}</span>
                    </button>

                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md transition flex items-center gap-2 cursor-pointer"
                    >
                      <Check className="w-4 h-4" />
                      <span>Hikoyani Topshirish (+50 XP)</span>
                    </button>
                  </div>
                </form>

                {/* Model Retelling Comparison View */}
                {showModelRetelling && (
                  <div className="mt-4 p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-xs space-y-2 animate-in fade-in duration-150">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-indigo-950 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Namuna: Model Retelling (Oxford Standard):</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => speakText(activeStory.modelRetelling)}
                        className="text-indigo-700 hover:text-indigo-950 p-1 cursor-pointer"
                        title="Model hikoyani tinglash"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-slate-800 text-xs sm:text-sm leading-relaxed italic bg-white p-3.5 rounded-xl border border-indigo-100">
                      "{activeStory.modelRetelling}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* TEACHER / ADMIN ASSIGN HOMEWORK MODAL */}
      <Modal
        isOpen={assignModalOpen}
        onClose={() => setAssignModalOpen(false)}
        title={`Guruhga Vazifa Qilib Yuborish: Story ${activeStory.storyNumber}`}
      >
        <form onSubmit={handleAssignHomework} className="space-y-4">
          {assignMessage && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bold">
              {assignMessage}
            </div>
          )}

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1">
            <div className="font-bold text-slate-900">
              Story {activeStory.storyNumber}: {activeStory.title}
            </div>
            <div className="text-slate-500 text-[11px]">
              {activeStory.titleUz} • {activeStory.questions.length} ta savol va to'liq qayta hikoya qilish (Reproduction) vazifasi
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Qaysi Guruhga Yuborilsin?
            </label>
            <select
              value={selectedGroupId}
              onChange={(e) => setSelectedGroupId(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden font-bold text-slate-800"
            >
              {groups.map(g => (
                <option key={g.id} value={g.id}>
                  {g.name} ({g.level}) - {g.schedule}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Topshirish Muddatini Belgilang (Due Date)
            </label>
            <input
              type="date"
              required
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden font-medium"
            />
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setAssignModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold cursor-pointer"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition cursor-pointer"
            >
              Vazifani Guruhga Yuklash ✓
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
