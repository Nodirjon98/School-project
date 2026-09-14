import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { 
  Clock, CheckCircle2, Award, RotateCcw, ArrowRight, 
  ShieldCheck, AlertCircle, FileText 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const GrammarExamTakePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { profile } = useAuth();
  const { t } = useLanguage();
  const { awardXp } = useLMSData();

  // Mock exam data matching GrammarExamBuilder
  const mockExam = {
    id: id || 'g-exam-1',
    title: 'Beginner Grammar Midterm Exam (Units 1–5)',
    description: 'am/is/are, Present Continuous, and Present Simple topic mastery test.',
    targetLevel: 'A1 Beginner',
    durationMinutes: 20,
    passPercentage: 70,
    questions: [
      {
        id: 'q-m1',
        question: 'Where ______ your brother living nowadays?',
        options: ['is', 'are', 'am', 'do'],
        correctAnswer: 'is',
        explanationUz: 'Your brother (he) bo\'lgani uchun "is" ishlatiladi.',
        points: 20
      },
      {
        id: 'q-m2',
        question: 'Listen! Somebody ______ the piano in the music room.',
        options: ['plays', 'is playing', 'play', 'are playing'],
        correctAnswer: 'is playing',
        explanationUz: 'Hozir ayni paytda bo\'layotgani (Listen!) uchun Present Continuous.',
        points: 20
      },
      {
        id: 'q-m3',
        question: 'Terry ______ in a bank in downtown Tashkent.',
        options: ['works', 'work', 'is work', 'working'],
        correctAnswer: 'works',
        explanationUz: 'Terry (he) uchinchi shaxs birlikda Present Simple -s qo\'shimchasini oladi.',
        points: 20
      },
      {
        id: 'q-m4',
        question: '______ your parents at home right now?',
        options: ['Are', 'Is', 'Do', 'Have'],
        correctAnswer: 'Are',
        explanationUz: 'Parents ko\'plikda bo\'lgani uchun "Are" ishlatiladi.',
        points: 20
      },
      {
        id: 'q-m5',
        question: 'It\'s 10:00 PM. I ______ hungry, but I\'m very tired.',
        options: ['am not', 'isn\'t', 'aren\'t', 'don\'t'],
        correctAnswer: 'am not',
        explanationUz: 'I bilan inkor shakli "am not".',
        points: 20
      }
    ]
  };

  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState<number>(mockExam.durationMinutes * 60);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [passed, setPassed] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (isFinished || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isFinished]);

  const currentQ = mockExam.questions[currentIdx];

  const handleSelect = (opt: string) => {
    setUserAnswers(prev => ({ ...prev, [currentQ.id]: opt }));
  };

  const finishExam = () => {
    let earned = 0;
    mockExam.questions.forEach(q => {
      if ((userAnswers[q.id] || '').trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()) {
        earned += q.points;
      }
    });

    const maxScore = mockExam.questions.reduce((acc, q) => acc + q.points, 0);
    const scorePct = Math.round((earned / maxScore) * 100);
    const isPass = scorePct >= mockExam.passPercentage;

    setScore(scorePct);
    setPassed(isPass);
    setIsFinished(true);

    if (isPass) {
      awardXp(150, `Passed Grammar Exam: ${mockExam.title}`);
      try {
        confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
      } catch {}
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto pb-12">
      {!isFinished ? (
        <div className="space-y-5">
          {/* Exam Header Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                {mockExam.targetLevel}
              </span>
              <h2 className="text-lg font-black text-slate-900 mt-1">{mockExam.title}</h2>
            </div>

            <div className="flex items-center gap-2 bg-rose-50 px-3.5 py-1.5 rounded-xl border border-rose-200 text-rose-700 font-mono font-bold text-sm">
              <Clock className="w-4 h-4 animate-pulse" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Progress */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600">
              <span>Savol {currentIdx + 1} / {mockExam.questions.length}</span>
              <span>{Math.round(((currentIdx + 1) / mockExam.questions.length) * 100)}% Bajarildi</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / mockExam.questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <h3 className="text-base font-bold text-slate-900 leading-relaxed">
              {currentQ.question}
            </h3>

            <div className="grid grid-cols-1 gap-2.5">
              {currentQ.options.map((opt, i) => {
                const isSelected = userAnswers[currentQ.id] === opt;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelect(opt)}
                    className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition flex items-center justify-between ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                    }`}
                  >
                    <span>{opt}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx(prev => prev - 1)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-30 transition"
              >
                Oldingisi
              </button>

              {currentIdx < mockExam.questions.length - 1 ? (
                <button
                  type="button"
                  disabled={!userAnswers[currentQ.id]}
                  onClick={() => setCurrentIdx(prev => prev + 1)}
                  className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-40 transition"
                >
                  <span>Keyingi Savol</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={!userAnswers[currentQ.id]}
                  onClick={finishExam}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-sm"
                >
                  Imtihonni Yakunlash
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Exam Results Screen */
        <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center space-y-6 shadow-md">
          <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center font-black text-2xl ${
            passed ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-300' : 'bg-rose-100 text-rose-700 border-2 border-rose-300'
          }`}>
            {score}%
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              {passed ? 'Tabriklaymiz! Imtihon Muvaffaqiyatli Topshirildi' : 'Imtihon Yakunlandi'}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              O'tish bali: {mockExam.passPercentage}% • Sizning natijangiz: <strong className={passed ? 'text-emerald-600' : 'text-rose-600'}>{score}%</strong>
            </p>
          </div>

          {passed && (
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-800 text-xs font-semibold max-w-md mx-auto">
              🏆 +150 XP sizning profilingizga qo'shildi va Grammatika bo'yicha darajangiz tasdiqlandi!
            </div>
          )}

          <div className="pt-4 border-t border-slate-100 flex justify-center gap-3">
            <Link
              to="/grammar-curriculum"
              className="px-5 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200 transition"
            >
              Grammatika Darsligiga Qaytish
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
