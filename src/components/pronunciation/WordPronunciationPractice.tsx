import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, MicOff, Volume2, Play, Square, RotateCcw, 
  CheckCircle2, Sparkles, ChevronRight, ChevronLeft, 
  Award, Headphones, Info, Flame, AlertCircle, ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  evaluatePronunciationWithAI, 
  evaluatePronunciation,
  speakTargetWord, 
  getSyllableBreakdown, 
  PronunciationEvaluationResult 
} from '../../lib/pronunciationEngine';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';

export interface PracticeWordItem {
  word: string;
  phonetic?: string;
  pos?: string;
  definition?: string;
  translationUz?: string;
  example?: string;
}

interface WordPronunciationPracticeProps {
  words: PracticeWordItem[];
  title: string;
  subtitle?: string;
  sourceType: 'reading_curriculum' | 'toefl_essay';
  sourceId: string;
  onClose?: () => void;
}

export const WordPronunciationPractice: React.FC<WordPronunciationPracticeProps> = ({
  words,
  title,
  subtitle,
  sourceType,
  sourceId,
  onClose,
}) => {
  const { t } = useLanguage();
  const { awardXp } = useLMSData();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [isPlayingNative, setIsPlayingNative] = useState(false);
  const [isPlayingUser, setIsPlayingUser] = useState(false);
  const [userAudioUrl, setUserAudioUrl] = useState<string | null>(null);
  const [evaluation, setEvaluation] = useState<PronunciationEvaluationResult | null>(null);
  const [masteredWords, setMasteredWords] = useState<Record<string, number>>({});
  const [streak, setStreak] = useState(0);

  const recognitionRef = useRef<any>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const currentTranscriptRef = useRef<string>('');
  const userAudioElementRef = useRef<HTMLAudioElement | null>(null);

  const currentWord = words[currentIndex] || { word: '' };
  const syllable = getSyllableBreakdown(currentWord.word);

  // Initialize Web Speech Recognition
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

      recognition.onerror = (event: any) => {
        setIsRecording(false);
        if (event.error !== 'no-speech') {
          console.warn('Speech recognition error:', event.error);
        }
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        try { recognitionRef.current.abort(); } catch (_) {}
      }
    };
  }, [currentIndex, currentWord.word]);

  // Clean up user audio URL when changing words
  useEffect(() => {
    setUserAudioUrl(null);
    setEvaluation(null);
    currentTranscriptRef.current = '';
    if (userAudioElementRef.current) {
      userAudioElementRef.current.pause();
    }
  }, [currentIndex]);

  const processScore = (result: PronunciationEvaluationResult) => {
    if (result.score >= 80) {
      setStreak(prev => prev + 1);
      setMasteredWords(prev => ({ ...prev, [currentWord.word]: result.score }));
      awardXp(15, `Mastered pronunciation: ${currentWord.word}`);
      
      if (result.score >= 90) {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.7 }
        });
      }
    } else {
      setStreak(0);
    }
  };

  const handleStartRecording = async () => {
    if (isRecording) {
      handleStopRecording();
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      currentTranscriptRef.current = '';
      setEvaluation(null);

      const mediaRecorder = new MediaRecorder(stream);
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setUserAudioUrl(url);
        // Stop stream tracks
        stream.getTracks().forEach(track => track.stop());

        // Call Multimodal AI Pronunciation Check on actual audio recording
        setIsEvaluating(true);
        try {
          const result = await evaluatePronunciationWithAI(
            currentWord.word, 
            audioBlob, 
            currentTranscriptRef.current
          );
          setEvaluation(result);
          processScore(result);
        } catch (err) {
          console.error('AI check error:', err);
          const fallbackResult = evaluatePronunciation(currentWord.word, currentTranscriptRef.current);
          setEvaluation(fallbackResult);
          processScore(fallbackResult);
        } finally {
          setIsEvaluating(false);
        }
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();

      setIsRecording(true);
      if (recognitionRef.current) {
        try {
          recognitionRef.current.start();
        } catch (_) {}
      }
    } catch (err) {
      console.warn('Microphone access issue:', err);
      alert('Iltimos mikrofon ruxsatini yoqing (Please allow microphone access).');
    }
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch (_) {}
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
  };

  const handlePlayNative = (rate = 1.0) => {
    setIsPlayingNative(true);
    speakTargetWord(currentWord.word, {
      rate,
      onEnd: () => setIsPlayingNative(false)
    });
  };

  const handlePlayUserAudio = () => {
    if (!userAudioUrl) return;
    if (isPlayingUser) {
      userAudioElementRef.current?.pause();
      setIsPlayingUser(false);
      return;
    }

    const audio = new Audio(userAudioUrl);
    userAudioElementRef.current = audio;
    setIsPlayingUser(true);
    audio.play();
    audio.onended = () => setIsPlayingUser(false);
  };

  const handleNextWord = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevWord = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const masteredCount = Object.keys(masteredWords).length;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
      {/* Top Header */}
      <div className="p-4 sm:p-6 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-500/30 text-indigo-300 border border-indigo-400/30 uppercase tracking-wide">
              Pronunciation Lab
            </span>
            {subtitle && <span className="text-xs text-slate-300">{subtitle}</span>}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{title}</h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
            Eshiting, mikrofonga ayting va sun'iy intellekt orqali talaffuz aniqligini tekshiring.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Streak */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/20 border border-amber-400/40 rounded-xl text-amber-300 text-xs sm:text-sm font-bold">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>{streak} streak</span>
          </div>

          {/* Mastered Counter */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 border border-emerald-400/40 rounded-xl text-emerald-300 text-xs sm:text-sm font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{masteredCount}/{words.length} O'zlashtirildi</span>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-medium transition"
            >
              Yopish
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-1.5">
        <div 
          className="bg-indigo-600 h-1.5 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}
        />
      </div>

      {/* Main Pronunciation Card */}
      <div className="p-6 sm:p-10 flex flex-col items-center max-w-3xl mx-auto w-full">
        {/* Navigation indicator */}
        <div className="flex items-center justify-between w-full mb-6 text-sm text-slate-500 font-medium">
          <button
            onClick={handlePrevWord}
            disabled={currentIndex === 0}
            className="flex items-center gap-1 hover:text-indigo-600 disabled:opacity-40 disabled:hover:text-slate-500 cursor-pointer transition"
          >
            <ChevronLeft className="w-4 h-4" /> Oldingi so'z
          </button>
          <span className="bg-slate-100 px-3 py-1 rounded-full font-semibold text-slate-700">
            {currentIndex + 1} / {words.length}
          </span>
          <button
            onClick={handleNextWord}
            disabled={currentIndex === words.length - 1}
            className="flex items-center gap-1 hover:text-indigo-600 disabled:opacity-40 disabled:hover:text-slate-500 cursor-pointer transition"
          >
            Keyingi so'z <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Word Display with Syllable Stress */}
        <div className="text-center mb-6">
          <div className="text-xs uppercase tracking-widest text-indigo-600 font-bold mb-2">
            Bo'g'inlar & Urg'u
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-bold text-indigo-900 bg-indigo-50/60 px-6 py-2 rounded-2xl inline-block border border-indigo-100 mb-3 tracking-wide">
            {syllable}
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight capitalize mb-2">
            {currentWord.word}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
            {currentWord.phonetic && (
              <span className="font-mono text-sm sm:text-base text-slate-600 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                {currentWord.phonetic}
              </span>
            )}
            {currentWord.pos && (
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-lg">
                {currentWord.pos}
              </span>
            )}
            {currentWord.translationUz && (
              <span className="text-sm font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                🇺🇿 {currentWord.translationUz}
              </span>
            )}
          </div>

          {currentWord.definition && (
            <p className="text-sm text-slate-600 mt-4 max-w-xl mx-auto italic">
              "{currentWord.definition}"
            </p>
          )}

          {currentWord.example && (
            <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 max-w-xl mx-auto">
              <span className="font-semibold text-slate-900">Misol: </span>
              {currentWord.example}
            </div>
          )}
        </div>

        {/* Listen Controls (Normal & Slow) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <button
            onClick={() => handlePlayNative(1.0)}
            disabled={isPlayingNative}
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-sm transition active:scale-95 cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
            <span>Oddiy tezlik (1.0x)</span>
          </button>

          <button
            onClick={() => handlePlayNative(0.75)}
            disabled={isPlayingNative}
            className="flex items-center gap-2 px-4 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-xl font-medium transition active:scale-95 cursor-pointer text-sm"
          >
            <Headphones className="w-4 h-4 text-indigo-600" />
            <span>Sekinroq tinglash (0.75x)</span>
          </button>
        </div>

        {/* Microphone Record Action Button */}
        <div className="flex flex-col items-center justify-center gap-3 mb-8">
          <button
            onClick={isRecording ? handleStopRecording : handleStartRecording}
            disabled={isEvaluating}
            className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center shadow-lg transition-all duration-200 active:scale-90 cursor-pointer ${
              isRecording
                ? 'bg-rose-500 hover:bg-rose-600 text-white ring-8 ring-rose-200 animate-pulse'
                : isEvaluating
                ? 'bg-indigo-600 text-white ring-8 ring-indigo-200 animate-pulse cursor-wait'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white ring-4 ring-emerald-100'
            }`}
          >
            {isRecording ? (
              <>
                <Square className="w-8 h-8 fill-current mb-0.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Tugatish</span>
              </>
            ) : isEvaluating ? (
              <>
                <Sparkles className="w-8 h-8 animate-spin mb-0.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Tahlil...</span>
              </>
            ) : (
              <>
                <Mic className="w-8 h-8 sm:w-9 sm:h-9 mb-0.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Talaffuz</span>
              </>
            )}
          </button>

          <p className="text-xs text-slate-500">
            {isRecording 
              ? "Gapiring, audio to'liq yozib olinmoqda..." 
              : isEvaluating 
              ? "🎙️ Sun'iy intellekt audioni fonetik tahlil qilmoqda (Gemini Multimodal)..." 
              : "Tugmani bosing va so'zni baland ovozda ayting"}
          </p>
        </div>

        {/* Evaluation Results Card */}
        {evaluation && (
          <div className={`w-full p-5 sm:p-6 rounded-2xl border transition-all ${
            evaluation.status === 'excellent'
              ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
              : evaluation.status === 'good'
              ? 'bg-blue-50/70 border-blue-300 text-blue-950'
              : 'bg-amber-50/70 border-amber-300 text-amber-950'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-black text-xl shadow-sm ${
                  evaluation.status === 'excellent'
                    ? 'bg-emerald-600 text-white'
                    : evaluation.status === 'good'
                    ? 'bg-blue-600 text-white'
                    : 'bg-amber-600 text-white'
                }`}>
                  <span>{evaluation.score}%</span>
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg capitalize">
                    {evaluation.status === 'excellent' ? "A'lo talaffuz!" : evaluation.status === 'good' ? "Yaxshi urinish!" : "Yana mashq qiling"}
                  </h4>
                  <p className="text-xs opacity-80">
                    Siz aytgan so'z: <span className="font-semibold italic">"{evaluation.transcript || '—'}"</span>
                  </p>
                </div>
              </div>

              {/* Side-by-side Audio Comparison */}
              {userAudioUrl && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePlayUserAudio}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white shadow-xs border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-semibold rounded-lg transition"
                  >
                    <Play className="w-3.5 h-3.5 text-indigo-600" />
                    <span>O'z ovozingiz</span>
                  </button>
                  <button
                    onClick={() => handlePlayNative(1.0)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white shadow-xs border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-semibold rounded-lg transition"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Namuna</span>
                  </button>
                </div>
              )}
            </div>

            {/* Letter Match Highlight */}
            <div className="bg-white/80 p-3 rounded-xl border border-black/5 mb-3">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Tovushlar tahlili:
              </span>
              <div className="flex items-center gap-1 font-mono text-lg font-bold">
                {evaluation.matchedPhonemes.map((p, idx) => (
                  <span 
                    key={idx}
                    className={`px-1.5 py-0.5 rounded ${
                      p.matched ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-700'
                    }`}
                  >
                    {p.char}
                  </span>
                ))}
              </div>
            </div>

            {/* Uzbek & English Tips */}
            <p className="text-xs sm:text-sm font-medium mb-1">
              {evaluation.feedbackUz}
            </p>
            <p className="text-xs opacity-75">
              💡 Maslahat: {evaluation.tipUz}
            </p>

            {/* Action buttons */}
            <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between">
              <button
                onClick={handleStartRecording}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Qaytadan aytish
              </button>

              {currentIndex < words.length - 1 && (
                <button
                  onClick={handleNextWord}
                  className="flex items-center gap-1.5 px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold cursor-pointer transition"
                >
                  Keyingi so'zga o'tish <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Word Quick Pills Carousel */}
        <div className="w-full mt-8 pt-6 border-t border-slate-200">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 text-center sm:text-left">
            Barcha so'zlar ro'yxati
          </div>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {words.map((w, idx) => {
              const isDone = Boolean(masteredWords[w.word]);
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                    isCurrent
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : isDone
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                  <span>{w.word}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
