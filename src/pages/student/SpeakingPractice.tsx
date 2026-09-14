import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { evaluateSpeakingResponse } from '../../lib/ai';
import { SpeakingEvaluation } from '../../types';
import { LiveSafoyevSpeakingRoom } from '../../components/speaking/LiveSafoyevSpeakingRoom';
import { SafoyevVoiceCloneStudio } from '../../components/speaking/SafoyevVoiceCloneStudio';
import { 
  Mic, MicOff, Volume2, Sparkles, Award, Clock, 
  RotateCcw, CheckCircle2, ChevronRight, Play, Square,
  HelpCircle, VolumeX, AlertCircle, MessageSquare, Radio,
  Sliders, ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface SpeakingTopic {
  id: string;
  part: 1 | 2 | 3;
  category: string;
  question: string;
  cuePoints?: string[];
  tips: string;
}

const SPEAKING_TOPICS: SpeakingTopic[] = [
  {
    id: 'sp-1',
    part: 1,
    category: 'Hometown & Daily Life',
    question: 'Could you describe what you enjoy most about living in your city or neighborhood?',
    tips: 'Aim for 3-4 fluent sentences. Give a direct answer, reasons, and a specific personal detail.'
  },
  {
    id: 'sp-2',
    part: 1,
    category: 'Work & Studies',
    question: 'What made you choose your current field of study or professional career?',
    tips: 'Use past tense to explain the reason, then present perfect for what you have achieved.'
  },
  {
    id: 'sp-3',
    part: 2,
    category: 'Cue Card: Historic Place',
    question: 'Describe a memorable historic landmark or monument in Uzbekistan that you have visited.',
    cuePoints: [
      'Where it is situated (e.g. Samarkand Registan, Bukhara Ark, Khiva)',
      'When and with whom you visited it',
      'What you learned about its architectural or historical heritage',
      'And explain why it left a profound impression on you'
    ],
    tips: 'You have 1 minute to plan notes, and 1 to 2 minutes to speak. Cover all 4 bullet points smoothly.'
  },
  {
    id: 'sp-4',
    part: 2,
    category: 'Cue Card: Personal Achievement',
    question: 'Describe an ambitious project or goal that you worked hard to achieve.',
    cuePoints: [
      'What the goal was',
      'What obstacles you had to overcome',
      'How you prepared or persevered',
      'And explain how achieving it made you feel'
    ],
    tips: 'Highlight narrative tenses (Past Continuous, Past Perfect) to tell a structured story.'
  },
  {
    id: 'sp-5',
    part: 3,
    category: 'Global Tourism & Preservation',
    question: 'Do you believe international mass tourism preserves or threatens traditional cultural heritages?',
    tips: 'Avoid talking about yourself. Use broad academic discourse (e.g. "On the one hand... conversely...").'
  }
];

export const SpeakingPractice: React.FC = () => {
  const { profile } = useAuth();
  const { t } = useLanguage();
  const { awardXp } = useLMSData();

  const [speakingMode, setSpeakingMode] = useState<'safoyev_live' | 'voice_studio' | 'ielts_simulator'>('safoyev_live');
  const [activeTopic, setActiveTopic] = useState<SpeakingTopic>(SPEAKING_TOPICS[0]);
  const [responseInput, setResponseInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Timer for Part 2 Cue Card (1 min prep, 2 mins speaking)
  const [prepSeconds, setPrepSeconds] = useState(60);
  const [isPrepActive, setIsPrepActive] = useState(false);

  // AI Evaluation
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [evaluation, setEvaluation] = useState<SpeakingEvaluation | null>(null);

  const recognitionRef = useRef<any>(null);

  // Initialize Speech Recognition if supported in browser
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        let currentTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript + ' ';
        }
        setResponseInput(currentTranscript.trim());
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    } else {
      setSpeechSupported(false);
    }
  }, []);

  // Prep timer tick
  useEffect(() => {
    let timer: any = null;
    if (isPrepActive && prepSeconds > 0) {
      timer = setInterval(() => setPrepSeconds(prev => prev - 1), 1000);
    } else if (prepSeconds === 0) {
      setIsPrepActive(false);
    }
    return () => clearInterval(timer);
  }, [isPrepActive, prepSeconds]);

  // Audio Play Examiner Question
  const handlePlayExaminerAudio = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(activeTopic.question);
    utterance.lang = 'en-GB';
    utterance.rate = 0.95;
    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
    window.speechSynthesis.speak(utterance);
  };

  // Toggle voice recording
  const handleToggleRecord = () => {
    if (!recognitionRef.current) return;
    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      setResponseInput('');
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };

  // Evaluate candidate response
  const handleEvaluate = async () => {
    if (!responseInput.trim()) return;
    setIsAnalyzing(true);
    try {
      const result = await evaluateSpeakingResponse(activeTopic.question, activeTopic.part, responseInput);
      const evalData: SpeakingEvaluation = {
        ...result,
        part: activeTopic.part,
        topic: activeTopic.question,
        userResponse: responseInput,
        evaluated_at: new Date().toISOString()
      };
      setEvaluation(evalData);
      awardXp(50);
      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      } catch {}
    } catch (err) {
      console.error('Speaking analysis failed:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Title & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Speaking & Fluency Arena
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700 border border-indigo-200 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-indigo-600" />
              Voice Examiner
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Mr. Safoyev bilan 1-on-1 jonli suhbat qiling yoki IELTS rasmiy Speaking imtihoni simulyatorida mashq qiling.
          </p>
        </div>

        {/* Mode switcher tabs */}
        <div className="flex flex-wrap items-center bg-slate-100 p-1 rounded-xl border border-slate-200 gap-1">
          <button
            type="button"
            onClick={() => setSpeakingMode('safoyev_live')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
              speakingMode === 'safoyev_live'
                ? 'bg-white text-indigo-600 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span>Mr. Safoyev bilan Jonli Dars</span>
          </button>

          <button
            type="button"
            onClick={() => setSpeakingMode('voice_studio')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
              speakingMode === 'voice_studio'
                ? 'bg-white text-indigo-600 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Mic className="w-3.5 h-3.5 text-indigo-600" />
            <span>🎙️ Mr. Safoyev Voice Studio (Ovoz Klonlash)</span>
          </button>

          <button
            type="button"
            onClick={() => setSpeakingMode('ielts_simulator')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
              speakingMode === 'ielts_simulator'
                ? 'bg-white text-indigo-600 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>IELTS Exam Simulator</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Live Speaking with Mr. Safoyev */}
      {speakingMode === 'safoyev_live' ? (
        <LiveSafoyevSpeakingRoom />
      ) : speakingMode === 'voice_studio' ? (
        <SafoyevVoiceCloneStudio />
      ) : (
        /* Mode 3: Main Grid: Question Card & Recording vs Feedback */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Topics & Active Audio Recorder */}
        <div className="lg:col-span-7 space-y-4">
          {/* Topic Selectors */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Select Speaking Module
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SPEAKING_TOPICS.map((topic) => {
                const isSelected = activeTopic.id === topic.id;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => {
                      setActiveTopic(topic);
                      setResponseInput('');
                      setEvaluation(null);
                      setPrepSeconds(60);
                      setIsPrepActive(false);
                    }}
                    className={`text-left p-3 rounded-xl border transition text-xs ${
                      isSelected
                        ? 'bg-indigo-50/80 border-indigo-300 ring-1 ring-indigo-200 shadow-xs'
                        : 'bg-slate-50 border-slate-200/80 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900">{topic.category}</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white border border-slate-200 text-indigo-600">
                        Part {topic.part}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{topic.question}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Speaking Prompt Canvas */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            {/* Prompt Card Header */}
            <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block">
                  IELTS Speaking • Part {activeTopic.part}
                </span>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {activeTopic.question}
                </h3>
              </div>

              {/* Hear Audio Button */}
              <button
                type="button"
                onClick={handlePlayExaminerAudio}
                className="p-2.5 rounded-xl bg-white hover:bg-indigo-50 text-indigo-600 border border-slate-200 shadow-xs transition flex items-center gap-1 text-xs font-bold shrink-0"
                title="Listen to British Examiner speak question"
              >
                <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-bounce text-indigo-700' : ''}`} />
                <span className="hidden sm:inline">Listen</span>
              </button>
            </div>

            {/* Part 2 Cue Card Bullets & 1-min Prep Timer */}
            {activeTopic.part === 2 && (
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-900">
                    Candidate Task Card (You should say):
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-800 bg-white px-2 py-0.5 rounded border border-amber-200">
                      Prep: {prepSeconds}s
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsPrepActive(!isPrepActive)}
                      className="text-[10px] font-bold px-2 py-1 rounded bg-amber-200 hover:bg-amber-300 text-amber-900 transition"
                    >
                      {isPrepActive ? 'Pause' : 'Start 1-Min Prep'}
                    </button>
                  </div>
                </div>

                <ul className="space-y-1 pl-4 list-disc text-xs text-amber-950 font-medium">
                  {activeTopic.cuePoints?.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pedagogical Strategy Tip */}
            <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex items-center gap-2">
              <span className="font-bold text-indigo-600">💡 Examiner Tip:</span>
              <span>{activeTopic.tips}</span>
            </div>

            {/* Spoken Response Input Area */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">
                  Your Spoken Response:
                </label>
                {speechSupported ? (
                  <button
                    type="button"
                    onClick={handleToggleRecord}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-xs ${
                      isRecording
                        ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                  >
                    {isRecording ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                    {isRecording ? 'Listening... Click to Stop' : 'Record with Mic'}
                  </button>
                ) : (
                  <span className="text-[10px] text-slate-400">Microphone not supported in this browser; type your answer below</span>
                )}
              </div>

              <textarea
                value={responseInput}
                onChange={(e) => setResponseInput(e.target.value)}
                placeholder="Speak using your microphone or type your response here as if in a live Cambridge oral examination..."
                rows={7}
                className="w-full text-xs sm:text-sm text-slate-900 p-3.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-y placeholder:text-slate-400 leading-relaxed font-sans"
              />
            </div>

            {/* Evaluate Action */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <span className="text-xs text-slate-500">
                {responseInput.trim().length < 15
                  ? 'Provide a response of at least 1-2 complete sentences'
                  : 'Ready for IELTS oral diagnostic'}
              </span>

              <button
                type="button"
                disabled={responseInput.trim().length < 15 || isAnalyzing}
                onClick={handleEvaluate}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 shadow-sm transition cursor-pointer"
              >
                {isAnalyzing ? (
                  <>
                    <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                    Examiner Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    Evaluate Speech (+50 XP)
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Speaking Examiner Feedback */}
        <div className="lg:col-span-5 space-y-4">
          {!evaluation && !isAnalyzing ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto text-indigo-600">
                <Mic className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Record or Type Your Response</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto leading-relaxed">
                  Listen to the native British examiner question, record your continuous spoken answer, and receive real-time scoring on fluency, lexical resource, and pronunciation.
                </p>
              </div>
            </div>
          ) : isAnalyzing ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4 shadow-xs animate-pulse">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center mx-auto text-indigo-600">
                <Sparkles className="w-6 h-6 animate-spin" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Analyzing Spoken Fluency...</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Measuring natural tempo, discourse markers, grammatical range, and phonetic stress.
                </p>
              </div>
            </div>
          ) : evaluation ? (
            <div className="space-y-4">
              {/* Speaking Band Card */}
              <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl p-5 text-white shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest block">
                      Estimated Speaking Band
                    </span>
                    <h2 className="text-3xl font-black tracking-tight text-white mt-0.5">
                      Band {evaluation.overallBand}
                    </h2>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-white/20 text-xs font-bold">
                    Part {evaluation.part} Oral Score
                  </div>
                </div>

                {evaluation.uzbekFeedback && (
                  <div className="mt-3 bg-indigo-950/80 p-3 rounded-xl border border-indigo-700/50 text-[11px] text-indigo-200 leading-relaxed">
                    <span className="font-bold text-amber-300 block mb-0.5">🇺🇿 O'zbekcha tavsiya:</span>
                    {evaluation.uzbekFeedback}
                  </div>
                )}
              </div>

              {/* Detailed Breakdown Cards */}
              <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Criterion Diagnostics
                </span>

                {/* Fluency */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">Fluency & Coherence</span>
                    <span className="font-black text-indigo-600">Band {evaluation.fluency?.band || evaluation.overallBand}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {evaluation.fluency?.feedback}
                  </p>
                </div>

                {/* Vocabulary */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">Lexical Resource & Idioms</span>
                    <span className="font-black text-indigo-600">Band {evaluation.vocabulary?.band || evaluation.overallBand}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {evaluation.vocabulary?.feedback}
                  </p>
                  {evaluation.vocabulary?.recommendedPhrases && evaluation.vocabulary.recommendedPhrases.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {evaluation.vocabulary.recommendedPhrases.map((phrase, i) => (
                        <span key={i} className="text-[10px] font-bold bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">
                          + {phrase}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Pronunciation tips */}
                {evaluation.pronunciation?.tips && evaluation.pronunciation.tips.length > 0 && (
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs space-y-1">
                    <span className="font-bold text-amber-900 block">Pronunciation & Stress Coaching:</span>
                    <ul className="space-y-1 pl-4 list-disc text-[11px] text-amber-950">
                      {evaluation.pronunciation.tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Band 8.5 Model Answer */}
              {evaluation.modelAnswer && (
                <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      Band 8.5 Native Model Response
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        if ('speechSynthesis' in window) {
                          window.speechSynthesis.cancel();
                          const utt = new SpeechSynthesisUtterance(evaluation.modelAnswer);
                          utt.lang = 'en-GB';
                          utt.rate = 0.95;
                          window.speechSynthesis.speak(utt);
                        }
                      }}
                      className="text-[11px] font-bold text-indigo-300 hover:text-white flex items-center gap-1 transition"
                    >
                      <Volume2 className="w-3 h-3" /> Listen
                    </button>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed italic bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    "{evaluation.modelAnswer}"
                  </p>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
      )}
    </div>
  );
};
