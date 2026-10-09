import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { CheckCircle2, ArrowRight, RotateCcw, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getStorageItem, setStorageItem } from '../../lib/storage';
import { loadCollection, syncCollection } from '../../lib/lmsStore';
import {
  PLACEMENT_QUESTIONS as DIAGNOSTIC_QUESTIONS,
  PLACEMENT_LEVELS,
  PASS_MARK,
  LEVEL_LABELS,
  LEVEL_SUMMARY,
  scorePlacement,
  PlacementResult,
} from '../../data/placementTestData';

const XP_AWARDED_KEY = 'premier_placement_xp_awarded';
const PLACEMENT_QUESTIONS_PER_LEVEL = DIAGNOSTIC_QUESTIONS.length / PLACEMENT_LEVELS.length;

export const PlacementTestPage: React.FC = () => {
  const { profile, updateProfile } = useAuth();
  const { t } = useLanguage();
  const { awardXp } = useLMSData();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<PlacementResult | null>(null);
  const [certId, setCertId] = useState('');
  const [certDate] = useState(new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }));

  const score = result?.total ?? 0;
  const totalQuestions = DIAGNOSTIC_QUESTIONS.length;
  const calculatedLevel = result?.level ?? 'A1';

  const currentQ = DIAGNOSTIC_QUESTIONS[currentIdx];
  const isSelected = Boolean(selectedAnswers[currentQ?.id]);

  const handleSelectOption = (opt: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQ.id]: opt
    }));
  };

  const handleNext = () => {
    if (currentIdx < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      finishTest();
    }
  };

  const finishTest = async () => {
    const res = scorePlacement(selectedAnswers);
    const certificateId = `PS-CEFR-${Date.now().toString(36).toUpperCase()}`;
    setResult(res);
    setCertId(certificateId);
    setIsCompleted(true);

    // Keep every attempt in the database so the admin sees the level history.
    const previous = (await loadCollection<{ id: string }>('placement_results')) ?? [];
    if (profile?.id) {
      await syncCollection('placement_results', [{
        id: certificateId,
        student_id: profile.id,
        level: res.level,
        correct: res.total,
        total: res.outOf,
        per_level: res.perLevel,
        taken_at: new Date().toISOString(),
      }], { studentIdOf: r => r.student_id });
    }

    // XP only for the first completion (on any device), so retakes cannot farm XP.
    const xpKey = `${XP_AWARDED_KEY}_${profile?.id ?? 'guest'}`;
    if (!getStorageItem<boolean>(xpKey, false) && previous.length === 0) {
      awardXp(100);
    }
    setStorageItem(xpKey, true);

    if (updateProfile) {
      updateProfile({ level: res.level, level_estimate: res.level });
    }

    try {
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
    } catch {}
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setIsCompleted(false);
    setResult(null);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              CEFR Diagnostic Placement Assessment
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700 border border-indigo-200">
              {totalQuestions} questions • A1–C1
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Determine your European Framework level (A1 to C1). Each level has {PLACEMENT_QUESTIONS_PER_LEVEL} questions; answer at least {PASS_MARK} correctly to pass it.
          </p>
        </div>

        {isCompleted && (
          <button
            type="button"
            onClick={handleRetake}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition self-start"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Retake Test
          </button>
        )}
      </div>

      {!isCompleted ? (
        /* Test Taking Interface */
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Progress Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600">
              <span>Question {currentIdx + 1} of {DIAGNOSTIC_QUESTIONS.length}</span>
              <span className="text-indigo-600 font-mono">
                {Math.round(((currentIdx + 1) / DIAGNOSTIC_QUESTIONS.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / DIAGNOSTIC_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                Target Level: {currentQ.level} • {currentQ.domain}
              </span>
              <span className="text-xs font-mono text-slate-400">#Q-{currentQ.id}</span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="grid grid-cols-1 gap-2.5">
              {currentQ.options.map((opt, i) => {
                const isCurrentSelected = selectedAnswers[currentQ.id] === opt;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelectOption(opt)}
                    className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition flex items-center justify-between ${
                      isCurrentSelected
                        ? 'bg-indigo-50 border-indigo-500 text-indigo-900 shadow-xs ring-1 ring-indigo-300'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                        isCurrentSelected ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-300 text-slate-600'
                      }`}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span>{opt}</span>
                    </div>
                    {isCurrentSelected && <CheckCircle2 className="w-4 h-4 text-indigo-600" />}
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx(prev => prev - 1)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-30 transition"
              >
                Previous
              </button>

              <button
                type="button"
                disabled={!isSelected}
                onClick={handleNext}
                className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 shadow-sm transition cursor-pointer"
              >
                <span>{currentIdx === DIAGNOSTIC_QUESTIONS.length - 1 ? 'Finish & See Results' : 'Next Question'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Results & Certificate Display */
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Summary Banner */}
          <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300">
                Diagnostic Assessment Complete
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                CEFR Level: {calculatedLevel}
              </h2>
              <p className="text-xs text-slate-300 max-w-md">
                You scored <strong className="text-amber-300">{score} out of {totalQuestions}</strong> ({Math.round((score / totalQuestions) * 100)}% accuracy).
                {' '}{LEVEL_SUMMARY[calculatedLevel]}
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-black text-amber-400">{score}/{totalQuestions}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">Correct</span>
              </div>
              <button
                type="button"
                onClick={handlePrintCertificate}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 shadow-sm transition"
              >
                <Printer className="w-3.5 h-3.5" /> Print Certificate
              </button>
            </div>
          </div>

          {/* Official Premier School Certificate (Print-Ready) */}
          <div className="bg-white border-8 border-slate-900/10 p-8 sm:p-12 rounded-3xl shadow-md text-center relative overflow-hidden space-y-6 print:border-4 print:p-6 print:shadow-none">
            {/* Watermark seal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none" />

            {/* Certificate Header */}
            <div className="space-y-1 relative">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl mx-auto shadow-sm">
                P
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 block pt-2">
                Premier School English Language Center
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 tracking-tight">
                Certificate of Proficiency & Level Assessment
              </h3>
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
                CEFR Placement Test
              </p>
            </div>

            {/* Candidate Info */}
            <div className="py-4 space-y-2 relative border-y border-slate-200/80 max-w-lg mx-auto">
              <span className="text-xs text-slate-500 italic block">This is officially presented to:</span>
              <h4 className="text-2xl font-bold text-slate-900 font-serif">
                {profile?.full_name || "O'quvchi"}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                Having completed the Premier School placement test, achieving an estimated level of:
              </p>
              <div className="inline-block px-5 py-2 rounded-xl bg-indigo-50 border-2 border-indigo-200 font-black text-indigo-800 text-lg sm:text-xl tracking-wide">
                CEFR LEVEL {calculatedLevel} • {LEVEL_LABELS[calculatedLevel]}
              </div>
            </div>

            {/* Verification Footer */}
            <div className="grid grid-cols-2 gap-8 max-w-md mx-auto pt-4 relative text-left text-xs">
              <div className="space-y-1 border-t border-slate-300 pt-2">
                <span className="font-bold text-slate-800 block">Assessment Date:</span>
                <span className="text-slate-500">{certDate}</span>
                <span className="text-[10px] text-slate-400 block">ID: {certId}</span>
              </div>
              <div className="space-y-1 border-t border-slate-300 pt-2 text-right">
                <span className="font-bold text-slate-800 block">Issued by:</span>
                <span className="text-slate-600 font-serif italic">Premier School Academic Department</span>
              </div>
            </div>
          </div>

          {/* Per-level breakdown */}
          {result && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Results by Level
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {PLACEMENT_LEVELS.map(lvl => {
                  const { correct, total } = result.perLevel[lvl];
                  const passed = correct >= PASS_MARK;
                  return (
                    <div
                      key={lvl}
                      className={`p-3 rounded-xl border text-center ${
                        passed ? 'bg-emerald-50/60 border-emerald-200' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="text-sm font-black text-slate-900">{lvl}</div>
                      <div className={`text-xs font-bold ${passed ? 'text-emerald-700' : 'text-slate-500'}`}>
                        {correct}/{total}
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-[11px] text-slate-500">
                A level is passed with at least {PASS_MARK} of {PLACEMENT_QUESTIONS_PER_LEVEL} correct answers. Your level is the highest one reached without skipping a lower level.
              </p>
            </div>
          )}

          {/* Diagnostic Review Breakdown */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Diagnostic Answers Breakdown
            </h3>
            <div className="space-y-3">
              {DIAGNOSTIC_QUESTIONS.map((q) => {
                const isCorrect = selectedAnswers[q.id] === q.correct;
                return (
                  <div
                    key={q.id}
                    className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                      isCorrect ? 'bg-emerald-50/60 border-emerald-200' : 'bg-rose-50/60 border-rose-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">
                        Q{q.id}. {q.question}
                      </span>
                      <span className={`px-2 py-0.5 rounded font-bold uppercase text-[10px] ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>

                    <div className="text-slate-600">
                      <strong>Your answer:</strong> <span className={isCorrect ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>{selectedAnswers[q.id] || 'None'}</span>
                      {!isCorrect && (
                        <span className="ml-3 text-emerald-800 font-bold">
                          (Correct: {q.correct})
                        </span>
                      )}
                    </div>

                    <p className="text-[11px] text-slate-500">{q.explanation}</p>
                    {q.explanationUz && (
                      <p className="text-[11px] text-indigo-700 bg-white/70 p-1.5 rounded border border-indigo-100">
                        🇺🇿 {q.explanationUz}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
