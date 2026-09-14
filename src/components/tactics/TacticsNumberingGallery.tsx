import React, { useState } from 'react';
import { Check, X, Maximize2, Sparkles, Hash } from 'lucide-react';
import { TacticsQuestion } from '../../types';

interface TacticsNumberingGalleryProps {
  questions: TacticsQuestion[];
  answers: Record<string, number>;
  onSelectAnswer: (questionId: string, optIdx: number) => void;
  isChecked: boolean;
  onImageClick?: (url: string, title?: string) => void;
}

export const TacticsNumberingGallery: React.FC<TacticsNumberingGalleryProps> = ({
  questions,
  answers,
  onSelectAnswer,
  isChecked,
  onImageClick,
}) => {
  const [activePickerId, setActivePickerId] = useState<string | null>(null);

  // Available numbers for this task (usually 1..N)
  const maxNumber = questions.length;
  const availableNumbers = Array.from({ length: maxNumber }, (_, i) => String(i + 1));

  // Determine currently chosen numbers across questions to help student avoid duplicates
  const chosenNumbers = new Set(
    questions
      .map((q) => {
        if (q.isExample && q.exampleValue) return q.exampleValue;
        const ansIdx = answers[q.id];
        return ansIdx !== undefined && q.options[ansIdx] !== undefined ? q.options[ansIdx] : null;
      })
      .filter(Boolean)
  );

  return (
    <div className="space-y-4">
      {/* Helper Guidance Banner */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
        <div className="flex items-center gap-2 text-slate-700">
          <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center shrink-0">
            <Hash className="w-3.5 h-3.5" />
          </span>
          <div>
            <span className="font-bold text-slate-900 block sm:inline">
              Suratlarni audioda eshitilgan tartibda raqamlang:
            </span>{' '}
            <span className="text-slate-600">
              Har bir rasm ostiga 1 dan {maxNumber} gacha mos raqamni kiriting yoki tanlang.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
            To'ldirildi: {questions.filter((q) => q.isExample || answers[q.id] !== undefined).length} / {questions.length}
          </span>
        </div>
      </div>

      {/* Picture Grid: Responsive 2-cols mobile, 3-cols tablet, 6-cols desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
        {questions.map((q, idx) => {
          const letter = String.fromCharCode(65 + idx); // A, B, C, D, E, F...
          const optIdx = answers[q.id];
          const selectedValue = q.isExample
            ? q.exampleValue || q.options[q.answerIndex]
            : optIdx !== undefined
            ? q.options[optIdx]
            : '';

          const isCorrect = isChecked && (q.isExample || optIdx === q.answerIndex);
          const isWrong = isChecked && !q.isExample && optIdx !== q.answerIndex;
          const correctValue = q.options[q.answerIndex] || String(q.answerIndex + 1);
          const isPickerOpen = activePickerId === q.id && !isChecked && !q.isExample;

          return (
            <div
              key={q.id}
              className={`relative rounded-2xl border-2 transition-all p-2.5 flex flex-col items-center bg-white ${
                isCorrect
                  ? 'border-emerald-500 bg-emerald-50/50 shadow-sm ring-2 ring-emerald-200'
                  : isWrong
                  ? 'border-rose-500 bg-rose-50/50 shadow-sm ring-2 ring-rose-200'
                  : q.isExample
                  ? 'border-slate-300 bg-slate-50/60'
                  : selectedValue
                  ? 'border-emerald-500 ring-2 ring-emerald-300 bg-emerald-50/20'
                  : 'border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              {/* Header: Letter and Example badge */}
              <div className="w-full flex items-center justify-between gap-1 mb-2 px-0.5">
                <span className="w-6 h-6 rounded-lg bg-slate-900 text-white text-xs font-black flex items-center justify-center shadow-2xs">
                  {letter}
                </span>

                {q.isExample ? (
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    Namuna
                  </span>
                ) : (
                  <span className="text-[11px] font-bold text-slate-400">
                    #{idx + 1}
                  </span>
                )}
              </div>

              {/* Image Container with Zoom */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-50 border border-slate-200/80 p-1 flex items-center justify-center group/img">
                {q.image ? (
                  <img
                    src={q.image}
                    alt={`${q.question || `Picture ${letter}`}`}
                    className="w-full h-full object-contain rounded-lg transition-transform duration-200 group-hover/img:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-slate-300 text-xs font-medium">Rasm yo'q</div>
                )}

                {q.image && onImageClick && (
                  <button
                    type="button"
                    onClick={() => onImageClick(q.image!, `${letter}. ${q.question || `Picture ${letter}`}`)}
                    className="absolute bottom-1.5 right-1.5 p-1.5 bg-slate-900/85 hover:bg-slate-900 text-white rounded-lg opacity-0 group-hover/img:opacity-100 transition shadow cursor-pointer"
                    title="Kattalashtirish (Zoom)"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Number Input / Selector Area */}
              <div className="w-full mt-2.5 relative flex flex-col items-center">
                {q.isExample ? (
                  /* Example: Pre-filled & disabled */
                  <div className="w-full">
                    <div className="w-full py-1.5 px-3 bg-emerald-600 text-white rounded-xl text-center text-sm font-black tracking-wider shadow-xs">
                      {selectedValue}
                    </div>
                    <span className="text-[10px] text-center block text-slate-500 font-bold mt-1">
                      (Tinglash namunasi)
                    </span>
                  </div>
                ) : (
                  /* Interactive input for student */
                  <div className="w-full">
                    <div className="relative">
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={2}
                        value={selectedValue || ''}
                        disabled={isChecked}
                        placeholder="—"
                        onClick={() => !isChecked && setActivePickerId(activePickerId === q.id ? null : q.id)}
                        onChange={(e) => {
                          const val = e.target.value.trim();
                          if (!val) {
                            // Clear
                            onSelectAnswer(q.id, -1);
                            return;
                          }
                          const foundIdx = q.options.findIndex((opt) => opt.trim() === val);
                          if (foundIdx !== -1) {
                            onSelectAnswer(q.id, foundIdx);
                          }
                        }}
                        className={`w-full text-center text-sm sm:text-base font-black py-1.5 px-2 rounded-xl border-2 transition-all cursor-pointer ${
                          isCorrect
                            ? 'bg-emerald-100/90 border-emerald-600 text-emerald-900 font-black'
                            : isWrong
                            ? 'bg-rose-100/90 border-rose-600 text-rose-900 line-through'
                            : selectedValue
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                            : 'bg-white border-slate-300 hover:border-slate-400 text-slate-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200'
                        }`}
                      />

                      {/* Quick Picker Toggle Button */}
                      {!isChecked && (
                        <button
                          type="button"
                          onClick={() => setActivePickerId(activePickerId === q.id ? null : q.id)}
                          className="absolute right-1 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 hover:text-slate-700 px-1 py-0.5 rounded cursor-pointer"
                          title="Raqamlar ro'yxatini ochish"
                        >
                          ▾
                        </button>
                      )}
                    </div>

                    {/* Popover Quick Number Picker */}
                    {isPickerOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-30 bg-white rounded-xl shadow-xl border border-slate-200 p-2 w-48 sm:w-52">
                        <div className="text-[10px] font-bold text-slate-500 mb-1.5 text-center">
                          Raqamni tanlang:
                        </div>
                        <div className="grid grid-cols-3 gap-1.5">
                          {availableNumbers.map((num) => {
                            const optIndex = q.options.findIndex((o) => o.trim() === num);
                            if (optIndex === -1) return null;
                            const isSelected = selectedValue === num;
                            const isUsedElsewhere = chosenNumbers.has(num) && !isSelected;

                            return (
                              <button
                                key={num}
                                type="button"
                                onClick={() => {
                                  onSelectAnswer(q.id, optIndex);
                                  setActivePickerId(null);
                                }}
                                className={`py-1.5 text-xs font-black rounded-lg border transition-all cursor-pointer ${
                                  isSelected
                                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                                    : isUsedElsewhere
                                    ? 'bg-slate-100 text-slate-400 border-slate-200 hover:bg-slate-200'
                                    : 'bg-white text-slate-800 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50'
                                }`}
                              >
                                {num}
                              </button>
                            );
                          })}
                        </div>
                        <button
                          type="button"
                          onClick={() => setActivePickerId(null)}
                          className="w-full mt-2 text-[10px] font-bold text-slate-500 hover:text-slate-700 text-center py-0.5"
                        >
                          Yopish
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Feedback Indicator when Checked */}
                {isChecked && (
                  <div className="mt-2 w-full text-center">
                    {isCorrect ? (
                      <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                        <Check className="w-3 h-3 stroke-[3]" /> To'g'ri
                      </span>
                    ) : isWrong ? (
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-[10px] font-bold text-rose-600 line-through">
                          Tanlangan: {selectedValue || "Bo'sh"}
                        </span>
                        <span className="text-[11px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-flex items-center gap-0.5">
                          To'g'ri: {correctValue}
                        </span>
                      </div>
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
