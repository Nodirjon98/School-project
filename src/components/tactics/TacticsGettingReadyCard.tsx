import React, { useState } from 'react';
import { Check, RotateCcw, Sparkles, Image as ImageIcon, Maximize2 } from 'lucide-react';
import { TacticsGettingStarted } from '../../types';

interface TacticsGettingReadyCardProps {
  gettingStarted: TacticsGettingStarted;
  onImageClick?: (imageUrl: string, altText: string) => void;
}

export const TacticsGettingReadyCard: React.FC<TacticsGettingReadyCardProps> = ({
  gettingStarted,
  onImageClick,
}) => {
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isChecked, setIsChecked] = useState(false);

  const items = gettingStarted.items || [];
  const options = gettingStarted.options || [];
  const images = gettingStarted.images || [];

  const handleSelect = (itemId: string, val: string) => {
    setUserAnswers(prev => ({ ...prev, [itemId]: val }));
  };

  const handleReset = () => {
    setUserAnswers({});
    setIsChecked(false);
  };

  let score = 0;
  if (isChecked) {
    items.forEach(item => {
      const uVal = (userAnswers[item.id] || '').trim().toLowerCase();
      const cVal = (item.correctAnswer || '').trim().toLowerCase();
      if (uVal === cVal) {
        score++;
      }
    });
  }

  // Parse option keys: if options like "a) ...", extracts 'a' as value
  const optionList = options.map(opt => {
    const match = opt.match(/^([a-z0-9]+)[\.\)]\s*(.*)/i);
    return {
      key: match ? match[1].toLowerCase() : opt.toLowerCase(),
      fullText: opt,
    };
  });

  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-5 shadow-xs">
      <div className="border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[11px] font-extrabold uppercase bg-amber-100 text-amber-800 border border-amber-300">
            Warm-Up
          </span>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
            Getting Ready
          </h2>
        </div>
        <p className="text-xs text-slate-600 mt-1">
          {gettingStarted.instruction || "Match each item with the correct answer."}
          {gettingStarted.instructionUz && (
            <span className="text-slate-500 block sm:inline sm:ml-1">
              • {gettingStarted.instructionUz}
            </span>
          )}
        </p>
      </div>

      {/* Warm-Up Images if present */}
      {images.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
            <ImageIcon className="w-3.5 h-3.5 text-slate-500" />
            <span>Mavzuga oid rasmlar:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {images.map((img, idx) => (
              <div key={idx} className="relative group max-w-xs">
                <img
                  src={img}
                  alt={`Getting ready ${idx + 1}`}
                  className="rounded-xl border border-slate-200 max-h-48 object-contain bg-white p-1 shadow-2xs cursor-pointer hover:opacity-95 transition"
                  onClick={() => onImageClick && onImageClick(img, `Getting ready ${idx + 1}`)}
                  loading="lazy"
                />
                {onImageClick && (
                  <button
                    type="button"
                    onClick={() => onImageClick(img, `Getting ready ${idx + 1}`)}
                    className="absolute bottom-2 right-2 bg-slate-900/70 hover:bg-slate-900 text-white p-1 rounded-md opacity-0 group-hover:opacity-100 transition"
                    title="Kattalashtirish"
                  >
                    <Maximize2 className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Score Banner when checked */}
      {isChecked && items.length > 0 && (
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-extrabold text-slate-900">
              Natija: {score} / {items.length} to'g'ri ({Math.round((score / items.length) * 100)}%)
            </span>
          </div>
          <span className="text-xs font-bold text-slate-700">
            {score === items.length ? 'Barchasi to\'g\'ri! 🌟' : 'Xatolarni tekshirib oling.'}
          </span>
        </div>
      )}

      {/* Items & Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Statements / Items */}
        <div className="space-y-2">
          <h4 className="font-extrabold text-xs text-slate-500 uppercase tracking-wider">
            Savollar / Iboralar (Items)
          </h4>
          <div className="space-y-2">
            {items.map((item, idx) => {
              const userVal = (userAnswers[item.id] || '').trim().toLowerCase();
              const correctVal = (item.correctAnswer || '').trim().toLowerCase();
              const isItemCorrect = isChecked && userVal === correctVal;
              const isItemWrong = isChecked && userVal !== '' && userVal !== correctVal;

              return (
                <div
                  key={item.id}
                  className={`p-3 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
                    isItemCorrect
                      ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                      : isItemWrong
                      ? 'bg-rose-50/70 border-rose-300 text-rose-950'
                      : 'bg-slate-50/80 border-slate-200 text-slate-800'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-bold flex-1">
                    {idx + 1}. {item.label}
                  </span>

                  {/* Interactive Selector */}
                  <div className="flex items-center gap-2 shrink-0">
                    {optionList.length > 0 ? (
                      <select
                        value={userAnswers[item.id] || ''}
                        onChange={e => handleSelect(item.id, e.target.value)}
                        disabled={isChecked}
                        className={`text-xs font-extrabold px-2.5 py-1.5 rounded-lg border outline-none cursor-pointer transition ${
                          isItemCorrect
                            ? 'bg-emerald-100 border-emerald-400 text-emerald-900'
                            : isItemWrong
                            ? 'bg-rose-100 border-rose-400 text-rose-900'
                            : 'bg-white border-slate-300 text-slate-800 focus:border-emerald-500'
                        }`}
                      >
                        <option value="">Tanlang...</option>
                        {optionList.map((opt, oIdx) => (
                          <option key={oIdx} value={opt.key}>
                            {opt.key.toUpperCase()}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        value={userAnswers[item.id] || ''}
                        onChange={e => handleSelect(item.id, e.target.value)}
                        disabled={isChecked}
                        placeholder="Javob"
                        className="w-20 text-xs font-bold px-2 py-1 rounded-lg border bg-white border-slate-300 outline-none text-center"
                      />
                    )}

                    {isChecked && (
                      isItemCorrect ? (
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded border border-emerald-300">
                          {item.correctAnswer.toUpperCase()}
                        </span>
                      )
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Available Options Reference List */}
        {options.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-extrabold text-xs text-slate-500 uppercase tracking-wider">
              Javob variantlari (Options)
            </h4>
            <div className="space-y-1.5">
              {options.map((opt, idx) => (
                <div
                  key={idx}
                  className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 flex items-start gap-2"
                >
                  <span className="w-5 h-5 rounded-md bg-white border border-slate-300 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    {String.fromCharCode(97 + idx)}
                  </span>
                  <span className="leading-snug">{opt.replace(/^[a-z0-9]+[\.\)]\s*/i, '')}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action buttons */}
      {items.length > 0 && (
        <div className="flex items-center gap-2 pt-2">
          {!isChecked ? (
            <button
              type="button"
              onClick={() => setIsChecked(true)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Tekshirish</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReset}
              className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Qayta urinish</span>
            </button>
          )}
        </div>
      )}
    </section>
  );
};
