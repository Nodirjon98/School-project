import React from 'react';
import { Volume2, Play, Pause, BookOpen, CheckCircle2 } from 'lucide-react';
import { TacticsPronunciationRule } from '../../types';
import { TACTICS_PRONUNCIATION_MAP } from '../../data/tacticsPronunciationData';

interface TacticsPronunciationCardProps {
  unitNumber: number;
  pronunciation?: TacticsPronunciationRule;
  audioTrack: { id: string; url: string; title: string };
  isPlaying: boolean;
  currentTrackId: string | null;
  onPlayTrack: (track: { id: string; url: string; title: string }) => void;
}

export const TacticsPronunciationCard: React.FC<TacticsPronunciationCardProps> = ({
  unitNumber,
  pronunciation,
  audioTrack,
  isPlaying,
  currentTrackId,
  onPlayTrack,
}) => {
  const info = TACTICS_PRONUNCIATION_MAP[unitNumber] || {
    unitNumber,
    title: pronunciation?.title || 'Pronunciation Practice',
    helpRule: pronunciation?.explanation || '',
    tableRows: [],
    task1Items: pronunciation?.examples || [],
  };

  const isAudioActive = isPlaying && currentTrackId === audioTrack.id;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-5 shadow-xs">
      {/* Header with audio play button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-extrabold uppercase bg-sky-100 text-sky-800 border border-sky-300">
              Pronunciation
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
              {info.title}
            </h3>
          </div>
          {pronunciation?.explanationUz && (
            <p className="text-xs text-slate-500 mt-1 font-medium">
              {pronunciation.explanationUz}
            </p>
          )}
        </div>

        {/* Audio control button */}
        <button
          type="button"
          onClick={() => onPlayTrack(audioTrack)}
          className={`px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition cursor-pointer shadow-xs ${
            isAudioActive
              ? 'bg-sky-700 text-white ring-2 ring-sky-300'
              : 'bg-sky-600 hover:bg-sky-700 text-white'
          }`}
          title={isAudioActive ? "Audioni to'xtatish" : "Talaffuz audiosini eshitish"}
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
              <span>Audioni eshitish</span>
            </>
          )}
        </button>
      </div>

      {/* Oxford Pronunciation Help Rule Box */}
      {info.helpRule && (
        <div className="p-4 rounded-xl bg-gradient-to-br from-sky-50/70 to-indigo-50/50 border border-sky-200 space-y-2.5">
          <div className="flex items-center gap-2 text-sky-950 font-extrabold text-xs uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-sky-600" />
            <span>Pronunciation Help (Talaffuz qoidasi)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
            {info.helpRule}
          </p>

          {/* Table if present */}
          {info.tableRows && info.tableRows.length > 0 && (
            <div className="mt-3 overflow-x-auto">
              <table className="w-full max-w-md text-xs border border-slate-200 bg-white rounded-lg overflow-hidden shadow-2xs">
                <thead>
                  <tr className="bg-sky-100/70 text-sky-900 border-b border-sky-200 font-extrabold">
                    {info.tableRows[0].map((header, hIdx) => (
                      <th key={hIdx} className="px-3 py-2 text-left">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {info.tableRows.slice(1).map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`px-3 py-1.5 ${
                            cIdx === 1 ? 'font-mono font-bold text-sky-700' : 'text-slate-800'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Task 1: Listen and Repeat Items */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-xs text-slate-800 uppercase tracking-wider">
            ‣ Task 1: Listen and repeat
          </span>
          <span className="text-xs text-slate-500 font-normal">
            (Eshiting va ovoz chiqarib qaytaring)
          </span>
        </div>

        {info.task1Items && info.task1Items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {info.task1Items.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-white hover:border-sky-300 transition"
              >
                <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="leading-snug">{item.replace(/^\d+\.\s*/, '')}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-500 italic">
            Ushbu bo'lim uchun audio yozuvni tinglab mashq qiling.
          </p>
        )}
      </div>
    </div>
  );
};
