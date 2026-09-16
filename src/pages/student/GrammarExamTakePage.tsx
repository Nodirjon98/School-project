import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { 
  Clock, CheckCircle2, Award, RotateCcw, ArrowRight, 
  ShieldCheck, AlertCircle, FileText, Sparkles, BookOpen, ChevronRight, Play
} from 'lucide-react';
import confetti from 'canvas-confetti';

import { GrammarExam, GrammarExamQuestion, GrammarExamSubmission } from '../../types';
import { BOOK_EXAMS_META } from '../../data/bookFinalExamsData';

export const GrammarExamTakePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { profile } = useAuth();
  const { t } = useLanguage();
  const { grammarExams, examSubmissions, submitGrammarExam, awardXp } = useLMSData();

  const [examCategory, setExamCategory] = useState<'all' | 'book_final' | 'grammar'>('book_final');
  const [activeExam, setActiveExam] = useState<GrammarExam | null>(() => {
    return grammarExams.find(e => e.id === id) || null;
  });

  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    if (id) {
      const matched = grammarExams.find(e => e.id === id);
      if (matched) {
        setActiveExam(matched);
        setTimeLeft(matched.durationMinutes * 60);
        setIsFinished(false);
        setUserAnswers({});
        setCurrentIdx(0);
      }
    } else {
      setActiveExam(null);
    }
  }, [id, grammarExams]);

  // Timer countdown
  useEffect(() => {
    if (!activeExam || isFinished || timeLeft <= 0) return;
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
  }, [timeLeft, isFinished, activeExam]);

  const handleStartExam = (exam: GrammarExam) => {
    setActiveExam(exam);
    setTimeLeft(exam.durationMinutes * 60);
    setIsFinished(false);
    setUserAnswers({});
    setCurrentIdx(0);
    navigate(`/student/grammar-exam/${exam.id}`);
  };

  const handleSelect = (opt: string) => {
    if (!activeExam) return;
    const currentQ = activeExam.questions[currentIdx];
    setUserAnswers(prev => ({ ...prev, [currentQ.id]: opt }));
  };

  const finishExam = () => {
    if (!activeExam) return;

    let earned = 0;
    activeExam.questions.forEach(q => {
      if ((userAnswers[q.id] || '').trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()) {
        earned += q.points;
      }
    });

    const maxScore = activeExam.questions.reduce((acc, q) => acc + q.points, 0);
    const scorePct = Math.round((earned / maxScore) * 100);
    const isPass = scorePct >= activeExam.passPercentage;

    setScore(scorePct);
    setPassed(isPass);
    setIsFinished(true);

    if (profile?.id) {
      submitGrammarExam({
        examId: activeExam.id,
        examTitle: activeExam.title,
        studentId: profile.id,
        studentName: profile.full_name || 'Student',
        score: earned,
        maxScore,
        percentage: scorePct,
        passed: isPass,
        userAnswers,
      });
    }

    const xpAmount = activeExam.examType === 'book_final' ? 250 : 150;
    if (isPass) {
      awardXp(xpAmount, `Passed ${activeExam.examType === 'book_final' ? 'Book Final' : 'Grammar'} Exam: ${activeExam.title}`);
      try {
        confetti({ particleCount: 85, spread: 90, origin: { y: 0.6 } });
      } catch {}
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Student's past exam submissions
  const mySubmissions = examSubmissions.filter(s => s.studentId === profile?.id);

  const bookFinalExams = grammarExams.filter(e => e.examType === 'book_final');
  const grammarTypeExams = grammarExams.filter(e => e.examType !== 'book_final');

  const visibleExams = grammarExams.filter(exam => {
    if (exam.targetGroupId && profile?.group_id && exam.targetGroupId !== profile.group_id) {
      return false;
    }
    if (examCategory === 'book_final') return exam.examType === 'book_final';
    if (examCategory === 'grammar') return exam.examType !== 'book_final';
    return true;
  });

  // If no exam selected, show Exam Selection Hub
  if (!activeExam) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto pb-12">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 text-white border border-indigo-900/60 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Premier School Rasmiy Bitiruv & Imtihonlar Arenasi</span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">
              Kitob Yakuniy & Grammatika Imtihonlari
            </h1>
            <p className="text-xs text-indigo-200/90 mt-1 max-w-xl">
              Har bir kitobni (Books 1-6) tugatgach so'zlar va gaplar tarjimasi bo'yicha yakuniy imtihon topshiring, o'z sertifikat va XP yutuqlaringizga ega bo'ling.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/curriculum"
              className="px-3.5 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border border-amber-500/30"
            >
              <BookOpen className="w-4 h-4" />
              <span>4000 Words</span>
            </Link>
            <Link
              to="/essential-grammar"
              className="px-3.5 py-2 bg-indigo-600/80 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 border border-indigo-400/30"
            >
              <BookOpen className="w-4 h-4" />
              <span>Murphy Grammar</span>
            </Link>
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          <button
            type="button"
            onClick={() => setExamCategory('book_final')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              examCategory === 'book_final'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Kitob Yakuniy Imtihonlari ({bookFinalExams.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setExamCategory('grammar')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              examCategory === 'grammar'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Grammatika Imtihonlari ({grammarTypeExams.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setExamCategory('all')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              examCategory === 'all'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <span>Barchasi ({grammarExams.length})</span>
          </button>
        </div>

        {/* Exam Cards Grid */}
        <div className="space-y-3">
          {visibleExams.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-2">
              <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
              <h4 className="text-sm font-bold text-slate-700">Ushbu toifada imtihonlar mavjud emas</h4>
              <p className="text-xs text-slate-500">Administrator yoki o'qituvchi guruhga yangi imtihon biriktirganda bu yerda ko'rinadi.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleExams.map(exam => {
                const isBookExam = exam.examType === 'book_final';
                const meta = isBookExam && exam.bookNumber ? BOOK_EXAMS_META[exam.bookNumber] : null;

                return (
                  <div 
                    key={exam.id}
                    className={`rounded-2xl p-5 border shadow-xs hover:border-indigo-400 transition flex flex-col justify-between space-y-4 ${
                      isBookExam ? 'bg-gradient-to-b from-white to-amber-50/20 border-amber-200/80' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            isBookExam ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                          }`}>
                            {isBookExam ? `Book ${exam.bookNumber} • ${exam.targetLevel}` : exam.targetLevel}
                          </span>
                          {exam.targetGroupName && (
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                              {exam.targetGroupName}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                          O'tish: {exam.passPercentage}%
                        </span>
                      </div>

                      <div className="flex items-start gap-2.5">
                        {meta && (
                          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl shrink-0">
                            {meta.badgeIcon}
                          </div>
                        )}
                        <div>
                          <h3 className="text-base font-bold text-slate-900 leading-snug">{exam.title}</h3>
                          <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">{exam.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" /> {exam.durationMinutes} Daqiqa
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText className="w-3.5 h-3.5 text-slate-400" /> {exam.questions.length} ta Savol
                        </span>
                        <span className="font-bold text-amber-600">
                          +{isBookExam ? 250 : 150} XP
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleStartExam(exam)}
                        className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs shadow-sm transition cursor-pointer text-white ${
                          isBookExam ? 'bg-amber-600 hover:bg-amber-700' : 'bg-indigo-600 hover:bg-indigo-700'
                        }`}
                      >
                        <Play className="w-4 h-4 fill-white" />
                        <span>Imtihonni Boshlash</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Submissions History Section */}
        {mySubmissions.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                <h3 className="text-sm font-bold text-slate-800">
                  Mening Imtihon Natijalarim ({mySubmissions.length})
                </h3>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-semibold uppercase text-[10px]">
                    <th className="pb-2">Imtihon Nomi</th>
                    <th className="pb-2">Topshirilgan Vaqt</th>
                    <th className="pb-2">Ball / Foiz</th>
                    <th className="pb-2 text-right">Holat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {mySubmissions.map((sub, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="py-2.5 font-bold text-slate-800">{sub.examTitle}</td>
                      <td className="py-2.5 text-slate-500">
                        {new Date(sub.submittedAt).toLocaleDateString('uz-UZ', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="py-2.5 font-mono text-slate-700">
                        {sub.score}/{sub.maxScore} ({sub.percentage}%)
                      </td>
                      <td className="py-2.5 text-right">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          sub.passed 
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                            : 'bg-rose-50 text-rose-700 border border-rose-200'
                        }`}>
                          {sub.passed ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                          <span>{sub.passed ? 'O\'tdi' : 'O\'tmadi'}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }

  const currentQ = activeExam.questions[currentIdx];

  return (
    <div className="space-y-6 max-w-3xl mx-auto pb-12">
      {!isFinished ? (
        <div className="space-y-5">
          {/* Exam Header Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                {activeExam.targetLevel}
              </span>
              <h2 className="text-lg font-black text-slate-900 mt-1">{activeExam.title}</h2>
            </div>

            <div className="flex items-center gap-2 bg-rose-50 px-3.5 py-1.5 rounded-xl border border-rose-200 text-rose-700 font-mono font-bold text-sm">
              <Clock className="w-4 h-4 animate-pulse" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600">
              <span>Savol {currentIdx + 1} / {activeExam.questions.length}</span>
              <span>{Math.round(((currentIdx + 1) / activeExam.questions.length) * 100)}% Bajarildi</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / activeExam.questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {currentQ.questionType === 'word_translation' && (
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200">
                    📖 So'zlar Tarjimasi
                  </span>
                )}
                {currentQ.questionType === 'sentence_translation' && (
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-200">
                    💬 Gaplar Tarjimasi
                  </span>
                )}
                {(!currentQ.questionType || currentQ.questionType === 'grammar') && (
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-200">
                    ⚡ Grammatika Qoidasi
                  </span>
                )}
                <span className="text-[11px] text-slate-400 font-semibold">
                  Savol {currentIdx + 1}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-relaxed">
                {currentQ.question}
              </h3>
            </div>

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

              {currentIdx < activeExam.questions.length - 1 ? (
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
              O'tish bali: {activeExam.passPercentage}% • Sizning natijangiz: <strong className={passed ? 'text-emerald-600' : 'text-rose-600'}>{score}%</strong>
            </p>
          </div>

          {passed && (
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-800 text-xs font-semibold max-w-md mx-auto space-y-1">
              <div className="font-bold text-sm text-emerald-900">
                {activeExam.examType === 'book_final' 
                  ? `🎓 Book ${activeExam.bookNumber || ''} Bitiruv Imtihoni Muvaffaqiyatli Topshirildi!`
                  : `🏆 Grammatika Imtihoni Muvaffaqiyatli Topshirildi!`}
              </div>
              <p>
                +{activeExam.examType === 'book_final' ? 250 : 150} XP sizning profilingizga qo'shildi va bilim darajangiz rasman tasdiqlandi!
              </p>
            </div>
          )}

          {/* Breakdown */}
          <div className="space-y-3 text-left max-w-xl mx-auto pt-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Natijalar Tahlili & Tushuntirishlar:
            </h4>
            {activeExam.questions.map((q, idx) => {
              const uAns = userAnswers[q.id] || '';
              const isCorrect = uAns.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
              return (
                <div key={q.id} className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                  isCorrect ? 'bg-emerald-50/70 border-emerald-200' : 'bg-rose-50/70 border-rose-200'
                }`}>
                  <div className="flex items-center justify-between font-bold">
                    <div className="flex items-center gap-1.5">
                      {q.questionType === 'word_translation' && (
                        <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 text-[9px] font-bold">So'z</span>
                      )}
                      {q.questionType === 'sentence_translation' && (
                        <span className="px-1.5 py-0.5 rounded bg-purple-100 text-purple-700 text-[9px] font-bold">Gap</span>
                      )}
                      <span>{idx + 1}. {q.question}</span>
                    </div>
                    <span className={isCorrect ? 'text-emerald-700 shrink-0' : 'text-rose-700 shrink-0'}>
                      {isCorrect ? 'To\'g\'ri ✓' : 'Noto\'g\'ri ✗'}
                    </span>
                  </div>
                  <div className="text-slate-600">
                    Sizning javobingiz: <strong className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>{uAns || 'Belgilanmagan'}</strong> • To'g'ri javob: <strong className="text-slate-900">{q.correctAnswer}</strong>
                  </div>
                  <p className="text-[11px] text-slate-500 italic bg-white/60 p-2 rounded-lg border border-slate-200/50">💡 {q.explanationUz}</p>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setActiveExam(null);
                navigate('/student/grammar-exams');
              }}
              className="px-5 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200 transition"
            >
              Imtihonlar Hubiga Qaytish
            </button>
            <Link
              to="/essential-grammar"
              className="px-5 py-2.5 bg-indigo-600 text-white font-bold text-xs rounded-xl hover:bg-indigo-700 transition shadow-xs"
            >
              Grammatika Darsligiga Qaytish
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
