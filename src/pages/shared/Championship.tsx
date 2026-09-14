import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { 
  Trophy, Medal, Award, Flame, 
  RotateCcw, Sparkles, CheckCircle2, Shield 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Championship: React.FC = () => {
  const { role } = useAuth();
  const { t } = useLanguage();
  const { championshipScores, resetSeason } = useLMSData();

  const [resetSuccess, setResetSuccess] = useState(false);

  useEffect(() => {
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.5 } });
    } catch {}
  }, []);

  const handleResetSeason = async () => {
    if (window.confirm('Haqiqatan ham yangi oyni boshlab, chempionat ballarini yangilamoqchimisiz?')) {
      await resetSeason();
      setResetSuccess(true);
      setTimeout(() => setResetSuccess(false), 3000);
      try {
        confetti({ particleCount: 100, spread: 80 });
      } catch {}
    }
  };

  const top1 = championshipScores[0];
  const top2 = championshipScores[1];
  const top3 = championshipScores[2];
  const rest = championshipScores.slice(3);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg shadow-amber-900/10">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold text-amber-100 mb-3">
            <Trophy className="w-3.5 h-3.5 text-yellow-200" />
            <span>Premier School Tashkent • Oylik Chempionat</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            {t('championshipTitle')}
          </h1>
          <p className="text-xs sm:text-sm text-amber-100 mt-1 leading-relaxed">
            {t('championshipSubtitle')}
          </p>

          {role === 'admin' && (
            <div className="mt-6">
              <button
                type="button"
                onClick={handleResetSeason}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white font-bold text-xs transition border border-white/20 shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t('resetSeasonBtn')}</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {resetSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Chempionat mavsumi muvaffaqiyatli yangilandi va g'oliblarga maxsus nishonlar berildi!</span>
        </div>
      )}

      {/* Podium for Top 3 */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
        <h2 className="text-center font-black text-slate-900 text-lg sm:text-xl mb-8">
          Oltin Uchlik (Top 3 Students)
        </h2>

        <div className="grid grid-cols-3 gap-2 sm:gap-6 items-end max-w-2xl mx-auto pt-6">
          {/* 2nd Place (Silver) */}
          {top2 && (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-slate-100 border-2 border-slate-300 flex items-center justify-center font-black text-slate-700 text-sm sm:text-lg mb-2 shadow-2xs">
                {(top2.student_name || top2.student?.full_name || 'U')[0]}
              </div>
              <span className="font-bold text-xs sm:text-sm text-slate-900 text-center line-clamp-1">
                {top2.student_name || top2.student?.full_name || 'Student'}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-semibold mb-2">
                {top2.xp.toLocaleString()} XP
              </span>
              <div className="w-full bg-gradient-to-t from-slate-200 to-slate-100 rounded-t-2xl h-28 sm:h-36 flex flex-col items-center justify-center border-t-4 border-slate-400">
                <Medal className="w-6 h-6 text-slate-500 mb-1" />
                <span className="font-black text-lg text-slate-700">#2</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase">Kumush</span>
              </div>
            </div>
          )}

          {/* 1st Place (Gold) */}
          {top1 && (
            <div className="flex flex-col items-center -mt-6">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-amber-100 border-3 border-amber-400 flex items-center justify-center font-black text-amber-800 text-base sm:text-2xl mb-2 shadow-md relative">
                {(top1.student_name || top1.student?.full_name || 'U')[0]}
                <Trophy className="w-5 h-5 text-amber-500 absolute -top-3 -right-2 rotate-12" />
              </div>
              <span className="font-black text-xs sm:text-base text-slate-900 text-center line-clamp-1">
                {top1.student_name || top1.student?.full_name || 'Student'}
              </span>
              <span className="text-[10px] sm:text-xs text-amber-600 font-bold mb-2">
                {top1.xp.toLocaleString()} XP
              </span>
              <div className="w-full bg-gradient-to-t from-amber-200 via-amber-100 to-yellow-100 rounded-t-2xl h-36 sm:h-48 flex flex-col items-center justify-center border-t-4 border-amber-400 shadow-sm">
                <Trophy className="w-8 h-8 text-amber-600 mb-1" />
                <span className="font-black text-2xl text-amber-900">#1</span>
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wide">Chempion</span>
              </div>
            </div>
          )}

          {/* 3rd Place (Bronze) */}
          {top3 && (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 border-2 border-amber-300 flex items-center justify-center font-black text-amber-900 text-sm sm:text-lg mb-2 shadow-2xs">
                {(top3.student_name || top3.student?.full_name || 'U')[0]}
              </div>
              <span className="font-bold text-xs sm:text-sm text-slate-900 text-center line-clamp-1">
                {top3.student_name || top3.student?.full_name || 'Student'}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-semibold mb-2">
                {top3.xp.toLocaleString()} XP
              </span>
              <div className="w-full bg-gradient-to-t from-orange-200 to-orange-100 rounded-t-2xl h-20 sm:h-28 flex flex-col items-center justify-center border-t-4 border-orange-400">
                <Award className="w-6 h-6 text-orange-600 mb-1" />
                <span className="font-black text-lg text-orange-800">#3</span>
                <span className="text-[10px] font-bold text-orange-700 uppercase">Bronza</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-sm text-slate-900">To'liq Reyting Jadvali</h3>
          <span className="text-xs text-slate-500 font-semibold">Toshkent filiali</span>
        </div>

        <div className="divide-y divide-slate-100">
          {championshipScores.map((student) => (
            <div 
              key={student.student_id}
              className="p-4 sm:p-5 flex items-center justify-between hover:bg-slate-50/70 transition"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span className={`w-8 h-8 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center ${
                  student.rank === 1 ? 'bg-amber-100 text-amber-800 border border-amber-300' :
                  student.rank === 2 ? 'bg-slate-100 text-slate-700 border border-slate-300' :
                  student.rank === 3 ? 'bg-orange-100 text-orange-800 border border-orange-300' :
                  'bg-slate-50 text-slate-500 border border-slate-200'
                }`}>
                  #{student.rank}
                </span>

                <div>
                  <h4 className="font-bold text-sm text-slate-900">{student.student_name || student.student?.full_name || 'Student'}</h4>
                  <span className="text-xs text-slate-400 font-medium">{student.group_name || 'Premier ESL'}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Badges preview */}
                <div className="hidden sm:flex items-center gap-1">
                  {Array.isArray(student.badges) && student.badges.map((badge: any, idx: number) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 font-bold text-[10px] border border-indigo-200"
                    >
                      {typeof badge === 'string' ? badge : badge.title || 'Badge'}
                    </span>
                  ))}
                </div>

                <div className="text-right">
                  <span className="text-sm sm:text-base font-black text-slate-900 block">
                    {student.xp.toLocaleString()} XP
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold">Faol o'quvchi</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
