import React, { useState } from 'react';
import { Volume2, Play, Pause, Check, RotateCcw, Eye, Sparkles } from 'lucide-react';
import { TacticsDictationSection } from '../../types';

interface TacticsDictationCardProps {
  dictation: TacticsDictationSection;
  audioTrack: { id: string; url: string; title: string };
  isPlaying: boolean;
  currentTrackId: string | null;
  onPlayTrack: (track: { id: string; url: string; title: string }) => void;
  onTranscriptOpen?: () => void;
}

export const TacticsDictationCard: React.FC<TacticsDictationCardProps> = ({
  dictation,
  audioTrack,
  isPlaying,
  currentTrackId,
  onPlayTrack,
  onTranscriptOpen,
}) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isChecked, setIsChecked] = useState(false);
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  const dialogueText = dictation.dialogueText || '';
  const blanks = dictation.blanks || [];

  // Parse turns
  const turns = dialogueText.split(/(?=[A-Z]:\s*)/);

  // Normalizer for comparison
  const normalize = (val: string) =>
    (val || '')
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  // Score calculation
  let correctCount = 0;
  if (isChecked) {
    blanks.forEach((blankWord, idx) => {
      const userVal = answers[idx + 1] || '';
      if (normalize(userVal) === normalize(blankWord)) {
        correctCount++;
      }
    });
  }

  const handleInputChange = (blankNum: number, value: string) => {
    setAnswers(prev => ({ ...prev, [blankNum]: value }));
  };

  const handleReset = () => {
    setAnswers({});
    setIsChecked(false);
    setShowAllAnswers(false);
  };

  const isAudioActive = isPlaying && currentTrackId === audioTrack.id;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-5 shadow-xs">
      {/* Header with audio button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-extrabold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
              Dictation
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
              Task 1: Listen and write the missing words
            </h3>
          </div>
          <p className="text-xs text-slate-600 mt-1">
            {dictation.instruction || "Listen to the conversation. Write the missing words."}
            {dictation.instructionUz && (
              <span className="text-slate-500 block sm:inline sm:ml-1">
                • {dictation.instructionUz}
              </span>
            )}
          </p>
        </div>

        {/* Audio control button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onPlayTrack(audioTrack)}
            className={`px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition cursor-pointer shadow-xs ${
              isAudioActive
                ? 'bg-emerald-700 text-white ring-2 ring-emerald-300'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white'
            }`}
            title={isAudioActive ? "Audioni to'xtatish" : "Diktant audiosini eshitish"}
          >
            <Volume2 className="w-4 h-4" />
            {isAudioActive ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>To'xtatish</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Eshitish</span>
              </>
            )}
          </button>

          {onTranscriptOpen && (
            <button
              type="button"
              onClick={onTranscriptOpen}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <span>Skript</span>
            </button>
          )}
        </div>
      </div>

      {/* Score overview when checked */}
      {isChecked && (
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-extrabold text-emerald-950">
              Natijangiz: {correctCount} / {blanks.length} to'g'ri (
              {Math.round((correctCount / (blanks.length || 1)) * 100)}%)
            </span>
          </div>
          <span className="text-xs font-bold text-emerald-800">
            {correctCount === blanks.length
              ? 'Ajoyib natija! 🎯'
              : 'Yaxshi harakat, xatolarni ko\'rib chiqing!'}
          </span>
        </div>
      )}

      {/* Interactive Dialogue Container */}
      <div className="p-4 sm:p-5 bg-slate-50/80 rounded-xl border border-slate-200 space-y-3.5 font-sans leading-relaxed">
        {turns.map((turn, tIdx) => {
          const speakerMatch = turn.match(/^([A-Z]:)\s*(.*)/s);
          const speaker = speakerMatch ? speakerMatch[1] : '';
          const content = speakerMatch ? speakerMatch[2] : turn;

          // Split by blank captures: (X) [X: word]
          const parts = content.split(/\((\d+)\)\s*\[\d+:\s*([^\]]+)\]/);

          return (
            <div key={tIdx} className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base text-slate-800 flex-wrap sm:flex-nowrap">
              {speaker && (
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-100 text-emerald-900 font-extrabold text-xs flex items-center justify-center border border-emerald-200 mt-1">
                  {speaker.replace(':', '')}
                </span>
              )}
              <div className="flex-1 leading-loose">
                {parts.map((part, pIdx) => {
                  // If pIdx % 3 === 0, it's normal text
                  if (pIdx % 3 === 0) {
                    return <span key={pIdx}>{part}</span>;
                  }
                  // If pIdx % 3 === 1, it's blankNumber
                  if (pIdx % 3 === 1) {
                    const blankNum = parseInt(part, 10);
                    const blankAnswer = parts[pIdx + 1] || '';
                    const userVal = answers[blankNum] || '';
                    const isUserCorrect = isChecked && normalize(userVal) === normalize(blankAnswer);
                    const isUserWrong = isChecked && normalize(userVal) !== normalize(blankAnswer);

                    return (
                      <span key={pIdx} className="inline-flex flex-col align-middle mx-1 my-0.5">
                        <span className="inline-flex items-center gap-1">
                          <span className="text-[10px] font-bold text-slate-400 select-none">
                            ({blankNum})
                          </span>
                          <input
                            type="text"
                            value={showAllAnswers ? blankAnswer : userVal}
                            onChange={e => handleInputChange(blankNum, e.target.value)}
                            disabled={isChecked || showAllAnswers}
                            placeholder="..."
                            className={`px-2 py-1 text-sm font-semibold rounded-lg border outline-none transition-all ${
                              showAllAnswers
                                ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold'
                                : isUserCorrect
                                ? 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold'
                                : isUserWrong
                                ? 'bg-rose-50 border-rose-400 text-rose-950'
                                : 'bg-white border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100'
                            }`}
                            style={{ width: `${Math.max(blankAnswer.length * 11 + 24, 75)}px` }}
                          />
                          {isChecked && isUserCorrect && (
                            <Check className="w-4 h-4 text-emerald-600 inline ml-0.5" />
                          )}
                        </span>

                        {/* Show correct answer pill if user got it wrong */}
                        {isChecked && isUserWrong && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 mt-0.5 self-start">
                            {blankAnswer}
                          </span>
                        )}
                      </span>
                    );
                  }
                  // If pIdx % 3 === 2, it's blankAnswer (already handled above)
                  return null;
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2">
          {!isChecked ? (
            <button
              type="button"
              onClick={() => setIsChecked(true)}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-extrabold transition shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Javoblarni tekshirish</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Qayta urinish</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setShowAllAnswers(!showAllAnswers)}
            className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{showAllAnswers ? 'Yashirish' : 'Javoblarni ko\'rsatish'}</span>
          </button>
        </div>

        <div className="text-[11px] text-slate-500">
          jami: {blanks.length} ta so'z
        </div>
      </div>

      {/* Task 2: Conversation practice guide */}
      <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-center gap-2.5">
        <span className="font-extrabold px-2 py-0.5 bg-amber-200 text-amber-900 rounded text-[10px] uppercase">
          Task 2
        </span>
        <p className="leading-snug">
          Muloqotni sherigingiz bilan ovoz chiqarib mashq qiling. Talaffuzga alohida e'tibor bering!
        </p>
      </div>
    </div>
  );
};
