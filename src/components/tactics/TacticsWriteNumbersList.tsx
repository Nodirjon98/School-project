import React from 'react';
import { Check, Sparkles, Hash } from 'lucide-react';
import { TacticsQuestion } from '../../types';

interface TacticsWriteNumbersListProps {
  questions: TacticsQuestion[];
  answers: Record<string, number>;
  onSelectAnswer: (questionId: string, optIdx: number) => void;
  isChecked: boolean;
  valueLabel?: string;
}

export const TacticsWriteNumbersList: React.FC<TacticsWriteNumbersListProps> = ({
  questions,
  answers,
  onSelectAnswer,
  isChecked,
  valueLabel = "Yosh",
}) => {
  return (
    <div className="space-y-4">
      {/* Helper Guidance Banner */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-slate-700">
          <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
            <Hash className="w-3.5 h-3.5" />
          </span>
          <div>
            <span className="font-bold text-slate-900 block sm:inline">
              Audioda aytilgan {valueLabel.toLowerCase()}ni yozing:
            </span>{' '}
            <span className="text-slate-600">
              Har bir qatorda audioda eshitilgan qiymatni kiriting yoki tanlang.
            </span>
          </div>
        </div>

        <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs self-end sm:self-auto">
          To'ldirildi: {questions.filter((q) => q.isExample || answers[q.id] !== undefined).length} / {questions.length}
        </span>
      </div>

      {/* Grid of Number Inputs: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {questions.map((q, idx) => {
          const optIdx = answers[q.id];
          const selectedValue = q.isExample
            ? q.exampleValue || q.options[q.answerIndex]
            : optIdx !== undefined
            ? q.options[optIdx]
            : '';

          const isCorrect = isChecked && (q.isExample || optIdx === q.answerIndex);
          const isWrong = isChecked && !q.isExample && optIdx !== q.answerIndex;
          const correctValue = q.options[q.answerIndex];

          return (
            <div
              key={q.id}
              className={`rounded-2xl border-2 transition-all p-3.5 flex items-center justify-between gap-3 bg-white ${
                isCorrect
                  ? 'border-emerald-500 bg-emerald-50/60 shadow-xs ring-1 ring-emerald-300'
                  : isWrong
                  ? 'border-rose-500 bg-rose-50/60 shadow-xs ring-1 ring-rose-200'
                  : q.isExample
                  ? 'border-slate-300 bg-slate-50/80'
                  : selectedValue
                  ? 'border-emerald-500 bg-emerald-50/20 ring-1 ring-emerald-300'
                  : 'border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              {/* Item Info / Label */}
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-7 h-7 rounded-xl bg-slate-900 text-white text-xs font-black flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>

                <div className="truncate">
                  <div className="text-xs sm:text-sm font-black text-slate-800 truncate">
                    {q.question.replace(/^\d+\.\s*/, '') || `Item ${idx + 1}`}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">
                    {valueLabel}:
                  </div>
                </div>
              </div>

              {/* Input or Example */}
              <div className="flex flex-col items-end shrink-0">
                {q.isExample ? (
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      Namuna
                    </span>
                    <div className="w-14 py-1.5 px-2 bg-emerald-600 text-white rounded-xl text-center text-sm font-black tracking-wide shadow-2xs">
                      {selectedValue}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={3}
                        value={selectedValue || ''}
                        disabled={isChecked}
                        placeholder="___"
                        onChange={(e) => {
                          const val = e.target.value.trim();
                          if (!val) {
                            onSelectAnswer(q.id, -1);
                            return;
                          }
                          const foundIdx = q.options.findIndex((opt) => opt.trim() === val);
                          if (foundIdx !== -1) {
                            onSelectAnswer(q.id, foundIdx);
                          }
                        }}
                        className={`w-16 text-center text-sm sm:text-base font-black py-1.5 px-2 rounded-xl border-2 transition-all ${
                          isCorrect
                            ? 'bg-emerald-100 border-emerald-600 text-emerald-900 font-black'
                            : isWrong
                            ? 'bg-rose-100 border-rose-600 text-rose-900 line-through'
                            : selectedValue
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                            : 'bg-white border-slate-300 hover:border-slate-400 text-slate-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200'
                        }`}
                      />
                    </div>

                    {/* Quick Select dropdown for mobile or fast selection */}
                    {!isChecked && q.options.length > 0 && (
                      <select
                        aria-label={`${q.question} tanlash`}
                        value={optIdx !== undefined ? optIdx : ''}
                        onChange={(e) => {
                          const val = e.target.value;
                          onSelectAnswer(q.id, val === '' ? -1 : Number(val));
                        }}
                        className="text-xs font-bold py-1.5 px-2 rounded-xl border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 cursor-pointer"
                      >
                        <option value="">Tanlang...</option>
                        {q.options.map((opt, oIdx) => (
                          <option key={oIdx} value={oIdx}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                )}

                {/* Feedback on Check */}
                {isChecked && !q.isExample && (
                  <div className="mt-1 text-right">
                    {isCorrect ? (
                      <span className="text-[11px] font-extrabold text-emerald-700 inline-flex items-center gap-0.5">
                        <Check className="w-3 h-3 stroke-[3]" /> To'g'ri
                      </span>
                    ) : isWrong ? (
                      <span className="text-[11px] font-black text-rose-600 inline-flex items-center gap-0.5">
                        To'g'ri: <strong className="text-emerald-700 ml-0.5">{correctValue}</strong>
                      </span>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
