import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, MicOff, Volume2, VolumeX, Sparkles, Send, 
  RotateCcw, Award, CheckCircle2, ChevronRight, 
  HelpCircle, MessageSquare, AlertCircle, Headphones, 
  PhoneOff, Play, Clock, Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { 
  getSafoyevVoiceProfile, 
  speakWithSafoyevVoice, 
  generateSafoyevTeacherResponse, 
  TeacherSpeakingResponse 
} from '../../services/safoyevVoiceService';
import { LiveSpeakingMessage, LiveSpeakingSession } from '../../types';

interface TopicOption {
  id: string;
  title: string;
  category: string;
  initialQuestion: string;
  initialQuestionUz: string;
}

const SPEAKING_TOPICS: TopicOption[] = [
  {
    id: 'topic-1',
    title: 'IELTS Part 1: Hometown & City Life',
    category: 'Daily Life',
    initialQuestion: "Hello! Welcome to our session. Let's start with your hometown. What is the most remarkable aspect of living in your city or region in Uzbekistan?",
    initialQuestionUz: "Xush kelibsiz! Keling, shahar hayotidan boshlaymiz. O'zbekistonda yashaydigan shahar yoki hududingizning eng e'tiborga loyiq jihati nima?"
  },
  {
    id: 'topic-2',
    title: 'IELTS Part 3: Technology & Human Interaction',
    category: 'Society & Tech',
    initialQuestion: "Good to see you! Today we explore technology. Some believe artificial intelligence is reducing authentic human empathy. What is your considered perspective on this?",
    initialQuestionUz: "Ba'zilar sun'iy intellekt insoniy munosabatlarni sovitmoqda deb hisoblaydi. Sizning bu boradagi xulosangiz qanday?"
  },
  {
    id: 'topic-3',
    title: 'TOEFL Academic Debate: Education Reform',
    category: 'Education',
    initialQuestion: "Welcome! Should universities focus strictly on practical career skills, or should they cultivate broad intellectual and philosophical curiosity?",
    initialQuestionUz: "Universitetlar faqat amaliy kasbiy ko'nikmalarni o'rgatishi kerakmi yoki keng dunyoqarash va nazariyani ham rivojlantirishi lozimmi?"
  }
];

export const LiveSafoyevSpeakingRoom: React.FC = () => {
  const { profile } = useAuth();
  const { t } = useLanguage();
  const { awardXp } = useLMSData();

  const [selectedTopic, setSelectedTopic] = useState<TopicOption>(SPEAKING_TOPICS[0]);
  const [messages, setMessages] = useState<LiveSpeakingMessage[]>([]);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isTeacherSpeaking, setIsTeacherSpeaking] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [latestFeedback, setLatestFeedback] = useState<TeacherSpeakingResponse | null>(null);
  const [sessionCompleted, setSessionCompleted] = useState(false);

  const recognitionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const teacherProfile = getSafoyevVoiceProfile();

  // Initialize Web Speech Recognition
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        let currentText = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentText += event.results[i][0].transcript;
        }
        setTranscript(currentText);
      };

      recognition.onerror = () => setIsRecording(false);
      recognition.onend = () => setIsRecording(false);

      recognitionRef.current = recognition;
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const startSession = () => {
    setIsSessionActive(true);
    setSessionCompleted(false);
    const initialMsg: LiveSpeakingMessage = {
      id: `msg-${Date.now()}`,
      sender: 'teacher',
      text: selectedTopic.initialQuestion,
      uzbekTranslation: selectedTopic.initialQuestionUz,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([initialMsg]);

    // Speak with Mr. Safoyev's voice (prefer authentic recorded greeting clip if available)
    setIsTeacherSpeaking(true);
    const greetingKey = teacherProfile.recordedClips?.greeting_intro ? 'greeting_intro' : 'greeting';
    speakWithSafoyevVoice(selectedTopic.initialQuestion, {
      preferRecordedClip: teacherProfile.recordedClips?.[greetingKey] ? greetingKey : undefined,
      onEnd: () => setIsTeacherSpeaking(false)
    });
  };

  const handleToggleRecording = () => {
    if (isRecording) {
      handleStopAndSend();
    } else {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      setIsTeacherSpeaking(false);
      setTranscript('');
      setIsRecording(true);
      if (recognitionRef.current) {
        try { recognitionRef.current.start(); } catch (_) {}
      }
    }
  };

  const handleStopAndSend = () => {
    setIsRecording(false);
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch (_) {}
    }

    const textToSend = transcript.trim();
    if (!textToSend) return;

    const studentMsg: LiveSpeakingMessage = {
      id: `msg-${Date.now()}`,
      sender: 'student',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, studentMsg]);
    setTranscript('');

    // Teacher processes student response
    setIsAnalyzing(true);
    setTimeout(() => {
      const studentTurnCount = messages.filter(m => m.sender === 'student').length + 1;
      const response = generateSafoyevTeacherResponse(textToSend, selectedTopic.title, studentTurnCount);
      setLatestFeedback(response);
      setIsAnalyzing(false);

      const teacherMsg: LiveSpeakingMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'teacher',
        text: response.replyEn,
        uzbekTranslation: response.replyUz,
        corrections: response.corrections,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, teacherMsg]);

      // Smart Voice Selection: Prefer authentic phrase from Matrix if recorded, else DSP Morphed speech
      let preferredClip: string | undefined = undefined;
      if (studentTurnCount === 1 && teacherProfile.recordedClips?.part1_expand) {
        preferredClip = 'part1_expand';
      } else if (studentTurnCount === 2 && teacherProfile.recordedClips?.part3_deep_question) {
        preferredClip = 'part3_deep_question';
      } else if (studentTurnCount >= 3 && teacherProfile.recordedClips?.exam_conclusion) {
        preferredClip = 'exam_conclusion';
      } else if (teacherProfile.recordedClips?.praise_fluency && response.fluencyScore >= 7.5) {
        preferredClip = 'praise_fluency';
      }

      // Speak Teacher's response
      setIsTeacherSpeaking(true);
      speakWithSafoyevVoice(response.replyEn, {
        preferRecordedClip: preferredClip,
        onEnd: () => setIsTeacherSpeaking(false)
      });

      // End session if reached 3-4 full turns
      if (studentTurnCount >= 3) {
        setSessionCompleted(true);
        awardXp(50, 'Completed Live Speaking with Mr. Safoyev');
        confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
      }
    }, 1200);
  };

  const endSession = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSessionActive(false);
    setIsTeacherSpeaking(false);
    setIsRecording(false);
  };

  return (
    <div className="space-y-6">
      {/* Teacher Profile Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-indigo-900/50 shadow-sm relative overflow-hidden">
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            {/* Teacher Avatar with Pulse Animation when speaking */}
            <div className="relative">
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-indigo-500 to-indigo-700 text-white flex items-center justify-center font-black text-2xl shadow-xl border-2 ${
                isTeacherSpeaking ? 'border-emerald-400 ring-4 ring-emerald-500/30' : 'border-indigo-400/40'
              }`}>
                NS
              </div>
              {isTeacherSpeaking && (
                <span className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-emerald-500 text-slate-950 font-black text-[10px] rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md animate-bounce">
                  <Volume2 className="w-3 h-3" /> Speaking
                </span>
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-500/30 text-indigo-300 border border-indigo-400/30 uppercase tracking-wide">
                  Live Voice Simulation
                </span>
                <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Cloned Voice v2.4
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Live Speaking with {teacherProfile.teacherName}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                {teacherProfile.title} • {teacherProfile.bioUz}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {!isSessionActive ? (
              <button
                onClick={startSession}
                className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-xl font-bold shadow-md transition active:scale-95 cursor-pointer text-sm sm:text-base"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>Jonli darsni boshlash (Start Session)</span>
              </button>
            ) : (
              <button
                onClick={endSession}
                className="flex items-center gap-2 px-4 py-2.5 bg-rose-600/80 hover:bg-rose-600 text-white rounded-xl font-bold transition text-xs sm:text-sm cursor-pointer"
              >
                <PhoneOff className="w-4 h-4" />
                <span>Suhbatni yakunlash</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {!isSessionActive ? (
        /* Topic Selection Mode */
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Mavzuni tanlang (Select Discussion Topic)</h3>
          <p className="text-xs text-slate-500 mb-6">
            Mr. Safoyev bilan qaysi formatda suhbatlashmoqchisiz? Quyidagi mavzulardan birini tanlang va boshlash tugmasini bosing:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SPEAKING_TOPICS.map(topic => (
              <div
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className={`p-5 rounded-2xl border-2 text-left cursor-pointer transition ${
                  selectedTopic.id === topic.id
                    ? 'border-indigo-600 bg-indigo-50/60 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                }`}
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">
                  {topic.category}
                </span>
                <h4 className="font-bold text-slate-900 text-base mt-2 mb-1">
                  {topic.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2 italic mb-2">
                  "{topic.initialQuestion}"
                </p>
                <p className="text-[11px] text-emerald-800 font-medium">
                  🇺🇿 {topic.initialQuestionUz}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Active Live Interactive Room */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat / Transcript Stream (2 cols) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-[560px]">
            {/* Room Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80 rounded-t-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-slate-700">
                  {selectedTopic.title}
                </span>
              </div>

              {isTeacherSpeaking && (
                <div className="flex items-center gap-1.5 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-semibold">
                  <Volume2 className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
                  <span>Ustoz gapirmoqda...</span>
                </div>
              )}
            </div>

            {/* Message Log */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'student' ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-center gap-2 mb-1 text-[11px] text-slate-400 font-medium">
                    <span>{msg.sender === 'student' ? (profile?.full_name || 'Talaba') : teacherProfile.teacherName}</span>
                    <span>• {msg.timestamp}</span>
                  </div>

                  <div className={`p-4 rounded-2xl max-w-xl text-sm leading-relaxed ${
                    msg.sender === 'student'
                      ? 'bg-indigo-600 text-white rounded-tr-xs shadow-xs'
                      : 'bg-slate-100 text-slate-900 rounded-tl-xs border border-slate-200'
                  }`}>
                    <p className="font-medium">{msg.text}</p>
                    {msg.uzbekTranslation && (
                      <p className="text-xs text-indigo-900/80 mt-2 pt-2 border-t border-slate-200/80 italic">
                        🇺🇿 {msg.uzbekTranslation}
                      </p>
                    )}
                  </div>

                  {/* Corrections Card if any */}
                  {msg.corrections && msg.corrections.length > 0 && (
                    <div className="mt-2 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 max-w-xl">
                      <div className="font-bold flex items-center gap-1 text-amber-900 mb-1">
                        <AlertCircle className="w-3.5 h-3.5" /> Grammatika va ibora bo'yicha maslahat:
                      </div>
                      {msg.corrections.map((c, i) => (
                        <div key={i} className="mb-1">
                          <span className="line-through text-rose-600 font-semibold mr-2">{c.original}</span>
                          <span className="text-emerald-700 font-bold mr-2">➜ {c.improved}</span>
                          <span className="text-slate-600 block text-[11px]">{c.explanationUz}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isAnalyzing && (
                <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 p-3 bg-indigo-50 rounded-xl max-w-xs animate-pulse">
                  <Sparkles className="w-4 h-4" />
                  <span>Mr. Safoyev javobingizni tahlil qilmoqda...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Bottom Microphone Control Bar */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 rounded-b-2xl">
              {isRecording && (
                <div className="mb-3 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping" />
                    <span className="font-semibold">Sizni tinglamoqdamiz:</span>
                    <span className="italic">"{transcript || 'Gapiring...'}"</span>
                  </div>
                  <span className="text-[10px] font-bold text-rose-700 uppercase">Jonli yozilmoqda</span>
                </div>
              )}

              <div className="flex items-center gap-3">
                <button
                  onClick={handleToggleRecording}
                  disabled={isAnalyzing}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm shadow-xs transition active:scale-98 cursor-pointer ${
                    isRecording
                      ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  {isRecording ? (
                    <>
                      <MicOff className="w-5 h-5" />
                      <span>Gapirishni to'xtatish va yuborish (Send)</span>
                    </>
                  ) : (
                    <>
                      <Mic className="w-5 h-5" />
                      <span>Javob berish (Mikrofonga bosing)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Live Teacher Coaching & IELTS Score Card (1 col) */}
          <div className="space-y-4">
            {/* Live Scores */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" /> IELTS Speaking Band Analizi
                </h4>
                <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                  Live
                </span>
              </div>

              {latestFeedback ? (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">Fluency</div>
                      <div className="text-lg font-black text-indigo-600">{latestFeedback.fluencyScore}</div>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">Lexical</div>
                      <div className="text-lg font-black text-emerald-600">{latestFeedback.lexicalScore}</div>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">Grammar</div>
                      <div className="text-lg font-black text-amber-600">{latestFeedback.grammarScore}</div>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">Pronunciation</div>
                      <div className="text-lg font-black text-blue-600">{latestFeedback.pronunciationScore}</div>
                    </div>
                  </div>

                  {latestFeedback.suggestedPhrases.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-700 block mb-2">
                        Ustoz tavsiya etgan iboralar:
                      </span>
                      <div className="space-y-1">
                        {latestFeedback.suggestedPhrases.map((phrase, i) => (
                          <div key={i} className="text-xs p-2 bg-indigo-50/60 rounded-lg text-indigo-900 font-medium">
                            • "{phrase}"
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-xs text-slate-500 leading-relaxed">
                  Savolga mikrofonda javob bering, Mr. Safoyev real vaqtda sizning Fluency, Grammar va Pronunciation ko'rsatkichlaringizni tahlil qilib beradi.
                </p>
              )}
            </div>

            {/* Teacher Tips */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl border border-indigo-100 p-6 shadow-sm">
              <h4 className="font-bold text-indigo-950 text-sm mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" /> Mr. Safoyev Maslahati
              </h4>
              <p className="text-xs text-indigo-900/80 leading-relaxed mb-3">
                "Gapirishda to'xtab qolmaslik uchun filler so'zlardan (masalan, 'Well, from my perspective...', 'That is an intriguing question...') foydalaning. Bu miyangizga fikrni to'plash uchun 2-3 soniya beradi."
              </p>
              <div className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/60 px-3 py-1.5 rounded-xl inline-block">
                🇺🇿 Har doim 3-4 ta to'liq gap bilan javob bering.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
