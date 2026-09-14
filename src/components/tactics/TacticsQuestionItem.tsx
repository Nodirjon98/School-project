import React, { useState } from 'react';
import { Check, X, Info, Maximize2 } from 'lucide-react';
import { TacticsQuestion } from '../../types';

interface TacticsQuestionItemProps {
  question: TacticsQuestion;
  index: number;
  selectedAnswer: number | undefined;
  onSelectAnswer: (optionIndex: number) => void;
  isChecked: boolean;
  onImageClick?: (imageUrl: string, altText: string) => void;
}

export const TacticsQuestionItem: React.FC<TacticsQuestionItemProps> = ({
  question: q,
  index,
  selectedAnswer,
  onSelectAnswer,
  isChecked,
  onImageClick,
}) => {
  const isSelected = selectedAnswer !== undefined;
  const isCorrect = isChecked && selectedAnswer === q.answerIndex;
  const isWrong = isChecked && isSelected && selectedAnswer !== q.answerIndex;

  // Question type heuristics
  const options = q.options || [];
  const hasOptionImages = Boolean(q.optionImages && q.optionImages.length > 0);
  const isNumberOrdering = !hasOptionImages && options.length > 2 && options.every(o => /^\d+$/.test(o.trim()));
  const isTrueFalse = !hasOptionImages && options.length === 2 && 
    (options.some(o => o.toLowerCase() === 'true') || 
     options.some(o => o.toLowerCase() === 'correct') || 
     options.some(o => o.toLowerCase() === 'yes'));
  const isPictureChoice = !hasOptionImages && options.length === 2 && options.some(o => o.toLowerCase().startsWith('picture'));
  const isManyOptions = !hasOptionImages && options.length >= 6 && !isNumberOrdering;

  return (
    <div
      id={`question-card-${q.id}`}
      className={`p-4 rounded-xl border transition-all ${
        isCorrect
          ? 'bg-emerald-50/70 border-emerald-300 shadow-xs'
          : isWrong
          ? 'bg-rose-50/70 border-rose-300 shadow-xs'
          : isSelected
          ? 'bg-white border-slate-300 shadow-xs ring-1 ring-slate-200'
          : 'bg-slate-50/70 border-slate-200 hover:bg-white'
      }`}
    >
      {/* Question Header & Image */}
      <div className="space-y-2.5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center">
              {index + 1}
            </span>
            <div>
              <h4 className="font-extrabold text-slate-900 text-sm leading-snug">
                {q.question}
              </h4>
              {q.questionUz && (
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {q.questionUz}
                </p>
              )}
            </div>
          </div>

          {/* Status badge when checked */}
          {isChecked && (
            <div className="flex-shrink-0">
              {isCorrect ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <Check className="w-3.5 h-3.5" /> To'g'ri
                </span>
              ) : isWrong ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">
                  <X className="w-3.5 h-3.5" /> Noto'g'ri
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-300">
                  Belgilanmagan
                </span>
              )}
            </div>
          )}
        </div>

        {/* Optional Top Image */}
        {q.image && !hasOptionImages && (
          <div className="relative group max-w-sm mx-auto sm:mx-0 my-2">
            <img
              src={q.image}
              alt={q.question}
              className="rounded-lg border border-slate-200 object-contain max-h-48 w-auto bg-white p-1.5 shadow-2xs cursor-pointer hover:opacity-95 transition"
              onClick={() => onImageClick && onImageClick(q.image!, q.question)}
              loading="lazy"
            />
            {onImageClick && (
              <button
                type="button"
                onClick={() => onImageClick(q.image!, q.question)}
                className="absolute bottom-2 right-2 bg-slate-900/70 hover:bg-slate-900 text-white p-1 rounded-md opacity-0 group-hover:opacity-100 transition"
                title="Kattalashtirish"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Options Rendering Based on Type */}
      <div className="mt-3.5">
        {/* CASE 0: Options with Images (e.g. Picture A vs Picture B) */}
        {hasOptionImages && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl">
            {options.map((opt, optIdx) => {
              const optImage = q.optionImages?.[optIdx];
              const isThisSelected = selectedAnswer === optIdx;
              const isThisCorrect = isChecked && optIdx === q.answerIndex;
              const isThisWrong = isChecked && isThisSelected && optIdx !== q.answerIndex;

              return (
                <div
                  key={optIdx}
                  onClick={() => !isChecked && onSelectAnswer(optIdx)}
                  className={`group/opt relative rounded-2xl border-2 p-3 transition-all cursor-pointer flex flex-col items-center select-none ${
                    isThisCorrect
                      ? 'bg-emerald-50/90 border-emerald-500 ring-2 ring-emerald-300 shadow-sm'
                      : isThisWrong
                      ? 'bg-rose-50/90 border-rose-500 ring-2 ring-rose-200 shadow-sm'
                      : isThisSelected
                      ? 'bg-emerald-50/60 border-emerald-500 ring-2 ring-emerald-400 shadow-sm'
                      : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  {/* Header: Label + selection checkbox */}
                  <div className="w-full flex items-center justify-between gap-2 mb-2 px-1">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-black tracking-wide ${
                      isThisCorrect
                        ? 'bg-emerald-600 text-white'
                        : isThisWrong
                        ? 'bg-rose-600 text-white'
                        : isThisSelected
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-800'
                    }`}>
                      {opt}
                    </span>

                    {/* Radio/Check Indicator */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                      isThisCorrect
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : isThisWrong
                        ? 'bg-rose-600 text-white border-rose-600'
                        : isThisSelected
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'border-slate-300 bg-white group-hover/opt:border-slate-400'
                    }`}>
                      {isThisCorrect ? (
                        <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                      ) : isThisWrong ? (
                        <X className="w-3.5 h-3.5 text-white stroke-[3]" />
                      ) : isThisSelected ? (
                        <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-slate-300 group-hover/opt:bg-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Option Image */}
                  {optImage && (
                    <div className="relative w-full rounded-xl overflow-hidden bg-white border border-slate-200/80 p-1 flex items-center justify-center min-h-[160px]">
                      <img
                        src={optImage}
                        alt={`${q.question} - ${opt}`}
                        className="rounded-lg object-contain max-h-52 w-auto transition-transform duration-200 group-hover/opt:scale-[1.02]"
                        loading="lazy"
                      />
                      {onImageClick && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onImageClick(optImage, `${q.question} - ${opt}`);
                          }}
                          className="absolute bottom-2 right-2 bg-slate-900/80 hover:bg-slate-900 text-white p-1.5 rounded-lg opacity-0 group-hover/opt:opacity-100 transition shadow"
                          title="Kattalashtirish"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  )}

                  {/* Feedback status on check */}
                  {isChecked && (
                    <div className="mt-2.5 w-full text-center">
                      {isThisCorrect ? (
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100/90 px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> To'g'ri rasm
                        </span>
                      ) : isThisWrong ? (
                        <span className="text-xs font-bold text-rose-700 bg-rose-100/90 px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                          <X className="w-3.5 h-3.5" /> Noto'g'ri tanlov
                        </span>
                      ) : null}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* CASE 1: Number Ordering (e.g. 1, 2, 3, 4, 5, 6) */}
        {isNumberOrdering && (
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Tegishli raqamni belgilang (Number):
            </span>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {options.map((opt, optIdx) => {
                const isThisSelected = selectedAnswer === optIdx;
                const isThisCorrect = isChecked && optIdx === q.answerIndex;
                const isThisWrong = isChecked && isThisSelected && optIdx !== q.answerIndex;

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => !isChecked && onSelectAnswer(optIdx)}
                    disabled={isChecked}
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl text-sm font-extrabold flex items-center justify-center border transition-all cursor-pointer ${
                      isThisCorrect
                        ? 'bg-emerald-600 text-white border-emerald-700 ring-2 ring-emerald-300 font-black'
                        : isThisWrong
                        ? 'bg-rose-600 text-white border-rose-700 ring-2 ring-rose-200'
                        : isThisSelected
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 active:scale-95'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* CASE 2: True/False, Correct/Incorrect, Yes/No, Picture A/B */}
        {(isTrueFalse || isPictureChoice) && (
          <div className="grid grid-cols-2 gap-2 sm:max-w-md">
            {options.map((opt, optIdx) => {
              const isThisSelected = selectedAnswer === optIdx;
              const isThisCorrect = isChecked && optIdx === q.answerIndex;
              const isThisWrong = isChecked && isThisSelected && optIdx !== q.answerIndex;

              return (
                <button
                  key={optIdx}
                  type="button"
                  onClick={() => !isChecked && onSelectAnswer(optIdx)}
                  disabled={isChecked}
                  className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    isThisCorrect
                      ? 'bg-emerald-600 text-white border-emerald-700 ring-2 ring-emerald-300'
                      : isThisWrong
                      ? 'bg-rose-600 text-white border-rose-700 ring-2 ring-rose-200'
                      : isThisSelected
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 active:scale-98'
                  }`}
                >
                  <span>{opt}</span>
                  {isThisCorrect && <Check className="w-4 h-4 text-white" />}
                </button>
              );
            })}
          </div>
        )}

        {/* CASE 3: Standard Multiple Choice (2 to 5 options) */}
        {!isNumberOrdering && !isTrueFalse && !isPictureChoice && !isManyOptions && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {options.map((opt, optIdx) => {
              const optLabel = String.fromCharCode(97 + optIdx); // a, b, c, d
              const isThisSelected = selectedAnswer === optIdx;
              const isThisCorrect = isChecked && optIdx === q.answerIndex;
              const isThisWrong = isChecked && isThisSelected && optIdx !== q.answerIndex;

              // Format text if opt already has letter like "a) ..."
              const displayOpt = opt.replace(/^[a-f]\)\s*/i, '');

              return (
                <button
                  key={optIdx}
                  type="button"
                  onClick={() => !isChecked && onSelectAnswer(optIdx)}
                  disabled={isChecked}
                  className={`p-3 rounded-xl text-left text-xs sm:text-sm font-semibold flex items-center justify-between border transition-all cursor-pointer ${
                    isThisCorrect
                      ? 'bg-emerald-600 text-white border-emerald-700 ring-2 ring-emerald-300 font-bold'
                      : isThisWrong
                      ? 'bg-rose-600 text-white border-rose-700 ring-2 ring-rose-200'
                      : isThisSelected
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 active:scale-98'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                      isThisSelected || isThisCorrect ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {optLabel}
                    </span>
                    <span>{displayOpt}</span>
                  </div>
                  {isThisCorrect && <Check className="w-4 h-4 text-white shrink-0" />}
                </button>
              );
            })}
          </div>
        )}

        {/* CASE 4: Many Options (6+ choices, e.g. names or vocabulary list) */}
        {isManyOptions && (
          <div className="space-y-2">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Ro'yxatdan to'g'ri variantni tanlang:
            </span>
            <div className="flex flex-wrap gap-2">
              {options.map((opt, optIdx) => {
                const isThisSelected = selectedAnswer === optIdx;
                const isThisCorrect = isChecked && optIdx === q.answerIndex;
                const isThisWrong = isChecked && isThisSelected && optIdx !== q.answerIndex;

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => !isChecked && onSelectAnswer(optIdx)}
                    disabled={isChecked}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                      isThisCorrect
                        ? 'bg-emerald-600 text-white border-emerald-700 ring-2 ring-emerald-300'
                        : isThisWrong
                        ? 'bg-rose-600 text-white border-rose-700'
                        : isThisSelected
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
                    }`}
                  >
                    <span>{opt}</span>
                    {isThisCorrect && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Explanation when checked */}
      {isChecked && (
        <div className="mt-3 pt-3 border-t border-slate-200/80 space-y-1.5 text-xs">
          {/* If wrong, reveal correct answer clearly */}
          {selectedAnswer !== q.answerIndex && (
            <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
              <span>To'g'ri javob:</span>
              <span className="px-2 py-0.5 bg-emerald-100 rounded text-emerald-900 border border-emerald-300">
                {options[q.answerIndex]}
              </span>
            </div>
          )}

          {/* Audio Dialogue Explanation in Uzbek */}
          {q.explanationUz && (
            <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-bold">Eshitish tushuntirishi: </span>
                {q.explanationUz}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
