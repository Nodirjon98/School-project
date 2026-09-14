import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { 
  ArrowLeft, CheckCircle2, Send, Clock, 
  HelpCircle, AlertCircle, Award, Sparkles, RotateCcw 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { evaluateIELTSEssay } from '../../lib/ai';
import { IELTSEvaluation } from '../../types';

export const HomeworkSubmit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { profile } = useAuth();
  const { t } = useLanguage();
  const { homeworks, submissions, submitHomework } = useLMSData();
  const navigate = useNavigate();

  const homework = homeworks.find(h => h.id === id);
  const existingSubmission = submissions.find(s => s.homework_id === id && s.student_id === profile?.id);

  // Form states
  const [mcAnswers, setMcAnswers] = useState<Record<string, string>>(
    (existingSubmission?.submission_data?.answers as Record<string, string>) || {}
  );
  const [writtenText, setWrittenText] = useState<string>(
    existingSubmission?.submission_data?.written_text || ''
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(Boolean(existingSubmission));
  const [aiEvaluation, setAiEvaluation] = useState<IELTSEvaluation | null>(null);
  const [isAiChecking, setIsAiChecking] = useState(false);

  const handleAiPrecheck = async () => {
    if (wordCount < 20 || !homework.content.prompt) return;
    setIsAiChecking(true);
    try {
      const res = await evaluateIELTSEssay(writtenText, 'task2', homework.content.prompt, 7.0);
      setAiEvaluation(res);
    } catch (e) {
      console.error('AI check error:', e);
    } finally {
      setIsAiChecking(false);
    }
  };

  if (!homework) {
    return (
      <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900">Vazifa topilmadi</h2>
        <Link to="/homework" className="text-xs text-blue-600 font-semibold mt-2 inline-block">
          Barcha vazifalar ro'yxatiga qaytish
        </Link>
      </div>
    );
  }

  const isDueDatePassed = new Date(homework.due_date) < new Date();
  const isAlreadySubmitted = Boolean(existingSubmission);

  // Word count for written tasks
  const wordCount = writtenText.trim().split(/\s+/).filter(Boolean).length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isAlreadySubmitted || !profile) return;

    setIsSubmitting(true);

    let autoGraded = false;
    let score: number | undefined = undefined;
    let status: 'submitted' | 'graded' = 'submitted';

    // Auto grading for multiple choice
    if (homework.type === 'multiple_choice' && homework.content.questions) {
      autoGraded = true;
      let totalEarned = 0;
      homework.content.questions.forEach(q => {
        if (mcAnswers[q.id]?.trim().toLowerCase() === q.correct_answer?.trim().toLowerCase()) {
          totalEarned += q.points;
        }
      });
      score = totalEarned;
      status = 'graded';
    } else if (homework.type === 'fill_in_gap' && homework.content.questions) {
      autoGraded = true;
      let totalEarned = 0;
      homework.content.questions.forEach(q => {
        if (mcAnswers[q.id]?.trim().toLowerCase() === q.correct_answer?.trim().toLowerCase()) {
          totalEarned += q.points;
        }
      });
      score = totalEarned;
      status = 'graded';
    }

    await submitHomework({
      homework_id: homework.id,
      student_id: profile.id,
      submission_data: {
        answers: mcAnswers,
        written_text: writtenText,
        submitted_at: new Date().toISOString()
      },
      score,
      auto_graded: autoGraded,
      status,
      is_late: isDueDatePassed,
      feedback: autoGraded ? `Avtomatik baholandi. Ball: ${score} / ${homework.max_score}` : undefined,
      graded_at: autoGraded ? new Date().toISOString() : undefined,
      homework_title: homework.title,
      student_name: profile.full_name,
      max_score: homework.max_score
    });

    setIsSubmitting(false);
    setSubmittedSuccess(true);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch {}
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Top back button */}
      <Link
        to="/homework"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Vazifalar ro'yxatiga qaytish</span>
      </Link>

      {/* Homework Info Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            {homework.type.replace('_', ' ')}
          </span>

          <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Muddat: {new Date(homework.due_date).toLocaleDateString()}</span>
          </div>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
          {homework.title}
        </h1>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          {homework.description}
        </p>

        {homework.content.prompt && (
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 leading-relaxed">
            <span className="font-bold text-slate-900 block mb-1">Mavzu va Topshiriq:</span>
            {homework.content.prompt}
          </div>
        )}
      </div>

      {/* Submission Status banner if already graded or submitted */}
      {isAlreadySubmitted && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <span className="text-xs font-bold text-emerald-900 block">Vazifa topshirilgan!</span>
              <span className="text-[11px] text-emerald-700">
                {existingSubmission?.status === 'graded' 
                  ? `Baholandi: ${existingSubmission.score} / ${homework.max_score} ball`
                  : 'O\'qituvchi tekshiruvida'}
              </span>
            </div>
          </div>
          {existingSubmission?.feedback && (
            <div className="text-right text-xs text-emerald-800 italic">
              "{existingSubmission.feedback}"
            </div>
          )}
        </div>
      )}

      {/* Form Submission Area */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-6">
        {/* Case 1: Multiple Choice */}
        {homework.type === 'multiple_choice' && homework.content.questions && (
          <div className="space-y-6">
            {homework.content.questions.map((q, idx) => (
              <div key={q.id} className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
                <span className="text-[11px] font-bold text-blue-600 block mb-1">
                  Savol {idx + 1} ({q.points} ball)
                </span>
                <p className="text-sm font-bold text-slate-900 mb-3">{q.question}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options?.map(opt => (
                    <button
                      key={opt}
                      type="button"
                      disabled={isAlreadySubmitted}
                      onClick={() => setMcAnswers(prev => ({ ...prev, [q.id]: opt }))}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold transition ${
                        mcAnswers[q.id] === opt
                          ? 'border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-500/20'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Case 2: Fill In The Gap */}
        {homework.type === 'fill_in_gap' && homework.content.questions && (
          <div className="space-y-4">
            {homework.content.questions.map((q, idx) => (
              <div key={q.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-bold text-blue-600 block mb-1">
                  Bo'shliqni to'ldiring #{idx + 1} ({q.points} ball)
                </span>
                <p className="text-xs font-semibold text-slate-800 mb-2">{q.question}</p>
                <input
                  type="text"
                  disabled={isAlreadySubmitted}
                  value={mcAnswers[q.id] || ''}
                  onChange={(e) => setMcAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                  placeholder="Javob so'zni yozing..."
                  className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-hidden focus:border-blue-500"
                />
              </div>
            ))}
          </div>
        )}

        {/* Case 3: Writing Task */}
        {homework.type === 'writing' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
              <label>Sizning inshoyingiz / Javobingiz:</label>
              <span className={`px-2 py-0.5 rounded-md ${wordCount >= 250 ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                So'zlar soni: {wordCount} (Tavsiya: 250+)
              </span>
            </div>

            <textarea
              rows={12}
              disabled={isAlreadySubmitted}
              value={writtenText}
              onChange={(e) => setWrittenText(e.target.value)}
              placeholder={t('writeAnswerPlaceholder')}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-sans leading-relaxed focus:bg-white focus:outline-hidden focus:border-blue-500 transition"
            />

            {/* AI Pre-Check Trigger */}
            {!isAlreadySubmitted && (
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-500">
                  {wordCount < 20 ? 'AI tahlili uchun kamida 20 ta so\'z yozing' : 'AI tahliliga tayyor'}
                </span>
                <button
                  type="button"
                  disabled={wordCount < 20 || isAiChecking}
                  onClick={handleAiPrecheck}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 disabled:opacity-50 transition cursor-pointer"
                >
                  {isAiChecking ? (
                    <>
                      <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                      <span>Tekshirilmoqda...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      <span>AI Pre-Check (Band & Xatolar)</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {/* AI Diagnostic Display */}
            {aiEvaluation && (
              <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 space-y-3 text-xs animate-in fade-in">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-indigo-950 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    AI Dastlabki Xulosasi (Taxminiy Band: {aiEvaluation.overallBand})
                  </span>
                  <span className="font-bold text-indigo-700 px-2 py-0.5 rounded bg-white border border-indigo-200">
                    CEFR: {aiEvaluation.estimatedCefr}
                  </span>
                </div>
                <p className="text-indigo-900 leading-relaxed">
                  {aiEvaluation.generalFeedback}
                </p>
                {aiEvaluation.uzbekSummary && (
                  <div className="p-2.5 rounded-lg bg-white/80 border border-indigo-200 text-indigo-950 text-[11px]">
                    <strong>🇺🇿 O'zbekcha tavsiya:</strong> {aiEvaluation.uzbekSummary}
                  </div>
                )}
                {aiEvaluation.grammaticalAccuracy?.errors && aiEvaluation.grammaticalAccuracy.errors.length > 0 && (
                  <div className="space-y-1 pt-1">
                    <span className="font-bold text-indigo-900 block text-[11px]">E'tibor bering (Grammatika):</span>
                    {aiEvaluation.grammaticalAccuracy.errors.slice(0, 2).map((err, i) => (
                      <div key={i} className="text-[11px] bg-white p-1.5 rounded border border-indigo-100">
                        <span className="line-through text-rose-600">"{err.quote}"</span> → <span className="font-bold text-emerald-700">{err.correction}</span>
                        {err.explanationUz && <span className="text-slate-500 block">({err.explanationUz})</span>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {!isAlreadySubmitted ? (
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition shadow-sm disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? 'Topshirilmoqda...' : t('submitHomeworkBtn')}</span>
          </button>
        ) : (
          <div className="text-center text-xs text-slate-400">
            Ushbu topshiriq allaqachon muvaffaqiyatli saqlangan.
          </div>
        )}
      </form>
    </div>
  );
};
