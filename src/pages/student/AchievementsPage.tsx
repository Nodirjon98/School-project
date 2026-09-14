import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { StudentAchievement } from '../../types';
import { 
  Trophy, Award, Sparkles, Flame, Star, CheckCircle2, 
  Download, Printer, Share2, Shield, Headphones, Mic, 
  Music, BookOpen, PenTool, CheckSquare, Target
} from 'lucide-react';

export const AchievementsPage: React.FC = () => {
  const { profile } = useAuth();
  const [selectedBadge, setSelectedBadge] = useState<StudentAchievement | null>(null);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  const studentName = profile?.full_name || 'Nodir Safoyev';
  const userXp = profile?.xp || 2450;
  const currentStreak = 14; // days
  const completedLessons = 38;

  const ACHIEVEMENTS: StudentAchievement[] = [
    {
      id: 'ach-podcast-maestro',
      title: 'Podcast Maestro',
      descriptionUz: 'Podkastlar bo\'limida kamida 5 ta to\'liq audio eshitish va tushunish testini 100% bajarish.',
      category: 'podcast',
      icon: '🎧',
      xpReward: 250,
      progressPercent: 100,
      isUnlocked: true,
      unlockedAt: '2026-09-02'
    },
    {
      id: 'ach-karaoke-rockstar',
      title: 'Karaoke Rockstar',
      descriptionUz: 'Karaoke qo\'shiqlarida barcha bo\'shliqlarni xatosiz to\'ldirib, birinchi urinishda 90%+ ball olish.',
      category: 'karaoke',
      icon: '🎵',
      xpReward: 300,
      progressPercent: 100,
      isUnlocked: true,
      unlockedAt: '2026-09-05'
    },
    {
      id: 'ach-tactics-ace',
      title: 'Tactics for Listening Ace',
      descriptionUz: 'Oxford Tactics for Listening kursining kamida 10 ta unitini to\'liq tamomlash.',
      category: 'listening',
      icon: '📻',
      xpReward: 400,
      progressPercent: 80,
      isUnlocked: false
    },
    {
      id: 'ach-speaking-champion',
      title: 'Speaking Prodigy (Band 8+)',
      descriptionUz: 'Mr. Safoyev bilan jonli intervyu va talaffuz tahlilida ketma-ket 3 marta 8.0+ baho olish.',
      category: 'speaking',
      icon: '🎙️',
      xpReward: 500,
      progressPercent: 100,
      isUnlocked: true,
      unlockedAt: '2026-09-07'
    },
    {
      id: 'ach-streak-warrior',
      title: '14-Day Streak Warrior',
      descriptionUz: 'Platformaga uzluksiz 14 kun davomida kirib, kundalik topshiriqlarni bajarish.',
      category: 'streak',
      icon: '🔥',
      xpReward: 350,
      progressPercent: 100,
      isUnlocked: true,
      unlockedAt: '2026-09-08'
    },
    {
      id: 'ach-vocab-gladiator',
      title: '1000 Words Vocabulary Master',
      descriptionUz: '4000 Essential English Words va Daily Words orqali 1000 ta so\'zni yod olib faol xotirada saqlash.',
      category: 'vocabulary',
      icon: '⚔️',
      xpReward: 450,
      progressPercent: 65,
      isUnlocked: false
    },
    {
      id: 'ach-ielts-essayist',
      title: 'IELTS Band 9 Essayist',
      descriptionUz: 'IELTS Writing AI tekshiruvida barcha mezonlar bo\'yicha mukammal insho yozish.',
      category: 'writing',
      icon: '✍️',
      xpReward: 400,
      progressPercent: 90,
      isUnlocked: false
    },
    {
      id: 'ach-dialogue-diplomat',
      title: 'Real-Life Diplomat',
      descriptionUz: 'Aeroport, restoran va ish suhbati hayotiy dialoglarida ovozli rol ijrosini muvaffaqiyatli yakunlash.',
      category: 'speaking',
      icon: '🧳',
      xpReward: 300,
      progressPercent: 100,
      isUnlocked: true,
      unlockedAt: '2026-09-08'
    },
    {
      id: 'ach-grammar-ninja',
      title: 'Grammar Ninja',
      descriptionUz: 'Grammatika laboratoriyasida 50 ta qiyin murakkab gap strukturasini to\'g\'ri yechish.',
      category: 'vocabulary',
      icon: '⚡',
      xpReward: 200,
      progressPercent: 75,
      isUnlocked: false
    }
  ];

  const unlockedCount = ACHIEVEMENTS.filter((a) => a.isUnlocked).length;
  const totalCount = ACHIEVEMENTS.length;
  const overallPercent = Math.round((unlockedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-indigo-950 text-white py-8 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Trophy className="w-3.5 h-3.5" />
              <span>Yutuqlar, Reyting & Sertifikatlar</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Shaxsiy Yutuqlar va Mukofotlar Zal (Hall of Fame)
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              O'quv jarayonidagi har bir faolligingiz — qo'shiqlar, podkastlar, Tactics for Listening va speaking topshiriqlari hisobga olinadi va maxsus nishonlar bilan taqdirlanadi.
            </p>
          </div>

          <button
            onClick={() => setShowCertificate(true)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs transition shadow-lg shrink-0"
          >
            <Award className="w-4 h-4" />
            <span>Rasmiy Sertifikatni Ko'rish</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-6">
        {/* Stats Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500">Jami Yutuqlar</div>
              <div className="text-2xl font-black text-slate-900">{unlockedCount} / {totalCount}</div>
              <div className="text-[11px] text-emerald-600 font-bold mt-0.5">{overallPercent}% ochilgan</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500">Umumiy Tajriba (XP)</div>
              <div className="text-2xl font-black text-indigo-950">{userXp.toLocaleString()} XP</div>
              <div className="text-[11px] text-indigo-700 font-bold mt-0.5">Diamond Liga #3</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500">Faollik Ketma-ketligi</div>
              <div className="text-2xl font-black text-slate-900">{currentStreak} Kun</div>
              <div className="text-[11px] text-rose-600 font-bold mt-0.5">🔥 Yong'in darajasida!</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <CheckSquare className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500">Tugallangan Darslar</div>
              <div className="text-2xl font-black text-slate-900">{completedLessons} ta</div>
              <div className="text-[11px] text-emerald-700 font-bold mt-0.5">Barcha modullar bo'yicha</div>
            </div>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-500" />
                <span>Eksklyuziv Ta'limiy Nishonlar (Badges)</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Har bir nishon ustiga bosib, batafsil shartlar va mukofotlarni bilib oling.
              </p>
            </div>

            <div className="text-xs font-extrabold text-slate-600 bg-slate-100 px-3 py-1 rounded-xl">
              Nishonlar ochilishi: {unlockedCount} / {totalCount}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ACHIEVEMENTS.map((badge) => (
              <div
                key={badge.id}
                onClick={() => setSelectedBadge(badge)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-3 ${
                  badge.isUnlocked
                    ? 'bg-gradient-to-br from-white to-amber-50/40 border-amber-200 hover:shadow-md hover:border-amber-300'
                    : 'bg-slate-50/70 border-slate-200 opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-xs ${
                      badge.isUnlocked ? 'bg-amber-100/80 border border-amber-300' : 'bg-slate-200 grayscale'
                    }`}>
                      {badge.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900 leading-tight">
                        {badge.title}
                      </h3>
                      <span className="text-[11px] font-bold text-amber-700">
                        +{badge.xpReward} XP
                      </span>
                    </div>
                  </div>

                  {badge.isUnlocked ? (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Ochilgan
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 text-[10px] font-bold">
                      {badge.progressPercent}%
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {badge.descriptionUz}
                </p>

                {/* Progress bar */}
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 rounded-full ${
                      badge.isUnlocked ? 'bg-amber-500' : 'bg-indigo-500'
                    }`}
                    style={{ width: `${badge.progressPercent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        {showCertificate && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95">
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <h3 className="text-base font-black text-slate-900">Premier School Rasmiy Sertifikati</h3>
                </div>
                <button
                  onClick={() => setShowCertificate(false)}
                  className="px-3 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
                >
                  Yopish
                </button>
              </div>

              {/* Printable Certificate Frame */}
              <div className="p-8 rounded-2xl bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 border-4 border-double border-amber-300 text-center space-y-4 relative shadow-sm">
                <div className="text-xs font-black tracking-widest text-amber-700 uppercase">
                  PREMIER SCHOOL OF ENGLISH • ACADEMIC EXCELLENCE
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-900">
                  CERTIFICATE OF ACHIEVEMENT
                </h2>

                <p className="text-xs text-slate-500 italic">
                  Ushbu sertifikat quyidagi o'quvchining yuqori intellektual salohiyati va natijalari uchun beriladi:
                </p>

                <div className="text-2xl sm:text-3xl font-black text-indigo-950 border-b-2 border-indigo-200 inline-block px-8 pb-1">
                  {studentName}
                </div>

                <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed">
                  Ingliz tili kursining barcha audio, video, podkastlar, grammatika va nutqiy amaliyotlarini namunali yakunlab, umumiy <strong>{userXp.toLocaleString()} XP</strong> to'plaganligi tasdiqlanadi.
                </p>

                <div className="pt-6 flex items-center justify-between text-xs text-slate-600 border-t border-amber-200">
                  <div className="text-left">
                    <div className="font-bold text-slate-900">Nodirjon Safoyev</div>
                    <div className="text-[10px] text-slate-500">Bosh O'qituvchi & Metodist</div>
                  </div>

                  <div className="w-16 h-16 rounded-full border-2 border-amber-400 bg-amber-100/50 flex items-center justify-center text-[10px] font-black text-amber-800 rotate-12 shadow-2xs">
                    PREMIER
                    SEAL
                  </div>

                  <div className="text-right">
                    <div className="font-bold text-slate-900">Sana: {new Date().toLocaleDateString('uz-UZ')}</div>
                    <div className="text-[10px] text-slate-500">ID: PS-2026-CERT-884</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-xs"
                >
                  <Printer className="w-4 h-4" />
                  <span>Chop etish / PDF saqlash</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
