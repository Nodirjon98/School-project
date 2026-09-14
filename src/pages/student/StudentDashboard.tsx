import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { 
  Flame, Zap, Trophy, BookOpen, Clock, 
  CheckCircle2, AlertCircle, ArrowRight, Sparkles, 
  Layers, ChevronRight, FileText, Award, Radio, Music, Headphones, Mic, PenTool,
  Calendar, MapPin
} from 'lucide-react';
import { AIStudyAssistant } from '../../components/student/AIStudyAssistant';
import { WeeklyTimetable } from '../../components/schedule/WeeklyTimetable';

export const StudentDashboard: React.FC = () => {
  const { profile } = useAuth();
  const { t } = useLanguage();
  const { 
    lessons, homeworks, submissions, dailyWords, 
    championshipScores, attendance, completeLesson, groups
  } = useLMSData();

  const [showTimetable, setShowTimetable] = useState(false);
  const myGroup = groups.find(g => g.id === profile?.group_id) || (profile?.group_id ? groups[0] : groups[0]);

  // Find user's championship rank & top scorers
  const sortedChampionship = [...championshipScores].sort((a, b) => a.rank - b.rank);
  const userRankObj = championshipScores.find(cs => cs.student_id === profile?.id);
  const userRank = userRankObj?.rank || 4;
  const userXp = profile?.xp || 1240;

  // Filter homework due/pending
  const submittedHwIds = new Set(submissions.filter(s => s.student_id === profile?.id).map(s => s.homework_id));
  const pendingHw = homeworks.filter(h => !submittedHwIds.has(h.id));

  // Featured word for Daily Word card
  const featuredWord = dailyWords[0] || {
    word: 'Eloquent',
    part_of_speech: 'adjective',
    phonetic: '/ˈel.ə.kwənt/',
    definition: 'Fluent or persuasive in speaking or writing.',
    translation_uz: 'Fasohathli, ta\'sirli gapiruvchi yoki yozuvchi.',
    example_sentence: 'Her eloquent speech moved the entire audience to tears.'
  };

  const currentDateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <div className="space-y-6">
      {/* 12-Column Responsive Layout matching Professional Polish */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (8 cols): Hero Banner, Quick Stats, Lessons & Daily Word */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* First-time Student Quick Start Guide Banner */}
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-2xl p-5 border border-indigo-800/40 text-white shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Yangi O'quvchi Qo'llanmasi • 3 Qadamda Boshlang
                </span>
              </div>
              <span className="text-[11px] text-slate-400">Premier LMS Guide</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Step 1 */}
              <Link
                to="/placement-test"
                className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-indigo-600/30 hover:border-indigo-400 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center text-xs font-black">1</span>
                    <Award className="w-4 h-4 text-amber-300" />
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition">
                    Darajangizni Aniqlang
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                    CEFR Diagnostic Test (A1-C2) topshirish
                  </p>
                </div>
                <div className="mt-3 text-[10px] font-bold text-amber-400 flex items-center gap-1">
                  <span>Testni boshlash</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Step 2 */}
              <Link
                to="/lessons"
                className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-indigo-600/30 hover:border-indigo-400 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-xs font-black">2</span>
                    <BookOpen className="w-4 h-4 text-indigo-300" />
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-indigo-200 transition">
                    Bugungi Darsga Kiring
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                    Guruh va kunlik dars jadvali
                  </p>
                </div>
                <div className="mt-3 text-[10px] font-bold text-indigo-300 flex items-center gap-1">
                  <span>Darsga o'tish</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Step 3 */}
              <Link
                to="/curriculum"
                className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-emerald-600/30 hover:border-emerald-400 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-black">3</span>
                    <Sparkles className="w-4 h-4 text-emerald-300" />
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-emerald-200 transition">
                    4000 Words Darsligi
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                    Audio va lug'at bilan mashq qilish
                  </p>
                </div>
                <div className="mt-3 text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                  <span>Kitobni ochish</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* Indigo Hero Banner */}
          <div className="bg-indigo-600 rounded-2xl p-6 sm:p-7 text-white flex items-center justify-between relative overflow-hidden shadow-sm">
            <div className="z-10 max-w-xl">
              <h2 className="text-xl sm:text-2xl font-bold mb-1 tracking-tight">
                Xush kelibsiz, {profile?.full_name?.split(' ')[0] || 'O\'quvchi'}!
              </h2>
              <p className="text-indigo-100 opacity-90 text-xs sm:text-sm leading-relaxed">
                Bugun sizda {lessons.length > 0 ? lessons.length : 2} ta dars rejalashtirilgan. {pendingHw.length > 0 ? `'${pendingHw[0].title}' topshirig'ingiz bajarilishini kutmoqda.` : 'Barcha topshiriqlar bajarilgan!'}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <Link
                  to="/curriculum"
                  className="bg-emerald-500 hover:bg-emerald-400 text-white px-3.5 py-2 rounded-lg text-xs font-bold shadow-xs transition inline-flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>4000 Words & Reading</span>
                </Link>
                <Link
                  to="/speaking"
                  className="bg-white text-indigo-700 px-3.5 py-2 rounded-lg text-xs font-bold shadow-xs hover:bg-indigo-50 transition inline-flex items-center gap-1.5"
                >
                  <Mic className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Speaking Simulator</span>
                </Link>
                <Link
                  to="/ielts-writing"
                  className="bg-indigo-500 text-white px-3.5 py-2 rounded-lg text-xs font-bold border border-indigo-400 hover:bg-indigo-400 transition inline-flex items-center gap-1.5"
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>IELTS Writing AI</span>
                </Link>
              </div>
            </div>

            {/* Decorative Background Icon */}
            <div className="opacity-15 absolute -right-4 -bottom-4 pointer-events-none">
              <svg className="w-48 h-48 sm:w-56 sm:h-56" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

          {/* KPI Mini-Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500 flex-shrink-0">
                <Flame className="w-5 h-5 fill-amber-400" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Streak</span>
                <span className="text-sm font-black text-slate-800">{profile?.streak || 12} days</span>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 flex-shrink-0">
                <Zap className="w-5 h-5 fill-indigo-400" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Total XP</span>
                <span className="text-sm font-black text-slate-800">{userXp.toLocaleString()}</span>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 flex-shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Rank</span>
                <span className="text-sm font-black text-slate-800">#{userRank} in Hub</span>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 flex-shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Pending</span>
                <span className="text-sm font-black text-slate-800">{pendingHw.length} tasks</span>
              </div>
            </div>
          </div>

          {/* Student Class Schedule & Timetable Card */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold text-slate-900 text-sm">Mening Dars Jadvalim</h3>
                    {myGroup && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {myGroup.level} Daraja
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500">
                    {myGroup ? `${myGroup.name} • ${myGroup.schedule}` : 'Guruhga biriktirish kutilmoqda'}
                  </p>
                </div>
              </div>

              {myGroup && (
                <button
                  type="button"
                  onClick={() => setShowTimetable(!showTimetable)}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition cursor-pointer flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>{showTimetable ? "Jadvalni yashirish" : "Haftalik to'liq jadval"}</span>
                </button>
              )}
            </div>

            {myGroup ? (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span><strong>Dars vaqti:</strong> {myGroup.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                    <span><strong>Xona:</strong> {myGroup.room || 'Oybek Campus, Room 304'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                    <span><strong>Ustoz:</strong> {myGroup.teacher_name || 'Malika Karimova'}</span>
                  </div>
                </div>

                {showTimetable && (
                  <div className="pt-2 animate-in fade-in duration-200">
                    <WeeklyTimetable groups={groups} userGroupId={myGroup.id} isStudentView={true} />
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Siz hali biror guruhga biriktirilmagansiz. Administrator darajangizga qarab tez orada guruh tayinlaydi.</span>
              </div>
            )}
          </div>

          {/* 4000 Essential English Words Level Progression Banner */}
          <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 rounded-2xl p-5 sm:p-6 text-white border border-emerald-800/60 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5 relative overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30 mb-2">
                <BookOpen className="w-3 h-3 text-amber-400" />
                <span>Level-Based Curriculum • 4000 Essential English Words</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                Unit 1: The Lion and the Rabbit
              </h3>
              <p className="text-xs text-emerald-100/80 mt-1 leading-relaxed">
                Master 20 essential English words with audio read-along, interactive dictionary, and comprehension quiz.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {['afraid', 'agree', 'angry', 'arrive', 'clever', 'cruel', 'safe'].map(w => (
                  <span key={w} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-emerald-200 border border-white/10">
                    {w}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex-shrink-0 flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3">
              <div className="text-left md:text-right">
                <div className="text-xs text-emerald-300 font-bold">Book 1 (A1–A2)</div>
                <div className="text-[11px] text-slate-400">600 Words • 30 Stories</div>
              </div>
              <Link
                to="/curriculum"
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-xl text-xs font-bold transition inline-flex items-center gap-2 shadow-sm"
              >
                <span>Continue Curriculum</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Raymond Murphy Essential Grammar (114 Units) & Examination Arena */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 rounded-2xl p-5 sm:p-6 text-white border border-indigo-800/50 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5 relative overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[11px] font-bold border border-indigo-500/30 mb-2">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Raymond Murphy • Essential Grammar in Use (4th Edition)</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                114 Ta Interaktiv Grammatika Darsi & Imtihonlar Arenasi
              </h3>
              <p className="text-xs text-indigo-100/80 mt-1 leading-relaxed">
                Har bir mavzuning aniq formulalari, o'zbekcha qoidalari, real misollar va avtomatik tekshiriluvchi mashqlar hamda darajali testlar.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {['Present Simple', 'Past Simple', 'Present Perfect', 'Passive Voice', 'Conditionals', 'Phrasal Verbs'].map(topic => (
                  <span key={topic} className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/10 text-indigo-200 border border-white/10">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex-shrink-0 flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2.5">
              <Link
                to="/essential-grammar"
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>114 Ta Darslikni Ochish</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/student/grammar-exams"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-xl text-xs font-bold transition inline-flex items-center justify-center gap-2"
              >
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Imtihonlar Arenasi</span>
              </Link>
            </div>
          </div>

          {/* New: Interactive Listening & Fun Activities Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Qiziqarli Listening Faoliyatlari</span>
                </div>
                <h3 className="text-base font-black text-slate-800 tracking-tight mt-0.5">
                  Qo'shiqlar bilan Karaoke & BBC/TED Podkastlar
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-medium">100% Odob-axloq mezonlariga mos</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Karaoke Card */}
              <Link
                to="/karaoke"
                className="group relative overflow-hidden rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 p-4 hover:border-purple-400 hover:shadow-sm transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Music className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-purple-700 uppercase">
                    <span>Karaoke Gap-Fill</span>
                    <span className="px-1.5 py-0.2 bg-purple-200 text-purple-900 rounded text-[9px]">Yangi</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mt-0.5 group-hover:text-purple-700 transition-colors">
                    Xit qo'shiqlar orqali Listening
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Bruno Mars, Louis Armstrong, Ed Sheeran qo'shiqlarida 1 ta so'zni aniqlash.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-purple-100 flex items-center justify-between text-xs font-bold text-purple-700">
                  <span>Boshlash</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Podcasts Card */}
              <Link
                to="/podcasts"
                className="group relative overflow-hidden rounded-xl border border-teal-200 bg-gradient-to-br from-teal-50 via-white to-teal-50/50 p-4 hover:border-teal-400 hover:shadow-sm transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-teal-700 uppercase">
                    <span>BBC & TED-Ed</span>
                    <span className="px-1.5 py-0.2 bg-teal-200 text-teal-900 rounded text-[9px]">A2-B2</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mt-0.5 group-hover:text-teal-700 transition-colors">
                    Ta'limiy Podkastlar
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    6-Minute English va TED-Ed ilmiy suhbatlarini eshitib, testlarni yeching.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-teal-100 flex items-center justify-between text-xs font-bold text-teal-700">
                  <span>Eshitish</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Oxford Tactics for Listening Card */}
              <Link
                to="/listening"
                className="group relative overflow-hidden rounded-xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-sky-50/50 p-4 hover:border-sky-400 hover:shadow-sm transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-sky-700 uppercase">
                    <span>Tactics for Listening</span>
                    <span className="px-1.5 py-0.2 bg-sky-200 text-sky-900 rounded text-[9px]">24 Units</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mt-0.5 group-hover:text-sky-700 transition-colors">
                    Oxford Basic Tactics (3rd Ed)
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Suratlarni raqamlash, yosh/raqam yozish va imtihon darajasidagi listening.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-sky-100 flex items-center justify-between text-xs font-bold text-sky-700">
                  <span>Darslarga o'tish</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* 2-Column Split: Today's Lessons and Daily Word */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Today's Lessons Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-800 text-sm">{t('todaysLessons')}</h3>
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">
                    {currentDateStr}
                  </span>
                </div>

                <div className="space-y-3">
                  {lessons.slice(0, 2).map((lesson, idx) => {
                    const studentAtt = attendance.find(a => a.lesson_id === lesson.id && a.student_id === profile?.id);
                    const isCompleted = studentAtt?.status === 'present';

                    return (
                      <div 
                        key={lesson.id} 
                        className="flex items-center justify-between gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-lg flex flex-col items-center justify-center text-indigo-700 flex-shrink-0">
                            <span className="text-[10px] font-bold uppercase leading-none">
                              {idx === 0 ? '14:00' : '16:30'}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                              {lesson.title}
                            </p>
                            <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                              {lesson.topic || 'Grammar & Vocabulary'} • Room 402
                            </p>
                          </div>
                        </div>

                        <div>
                          {isCompleted ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-md bg-emerald-100 text-emerald-800">
                              <CheckCircle2 className="w-3 h-3" />
                              Attended
                            </span>
                          ) : (
                            <button
                              type="button"
                              onClick={() => completeLesson(lesson.id)}
                              className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition cursor-pointer"
                              title="Mark this lesson as completed to earn +50 XP"
                            >
                              +50 XP Check-in
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  {lessons.length === 0 && (
                    <div className="text-center py-6 text-slate-400 text-xs">
                      No lessons scheduled for today
                    </div>
                  )}
                </div>
              </div>

              <Link
                to="/lessons"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700"
              >
                <span>Full timetable</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Daily Word Card (Professional Polish style) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-800 text-sm">{t('dailyWords')}</h3>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    AI Curated
                  </span>
                </div>

                <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-100 mb-3">
                  <p className="text-xl font-black text-emerald-900 tracking-tight">
                    {featuredWord.word}
                  </p>
                  <p className="text-[10px] font-medium text-emerald-700 mb-2 italic">
                    {(featuredWord as any).phonetic || '/ˈel.ə.kwənt/'} • {featuredWord.part_of_speech}
                  </p>
                  <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                    {featuredWord.definition}
                  </p>
                  {featuredWord.translation_uz && (
                    <p className="text-[11px] text-emerald-900/80 mt-1 font-semibold">
                      🇺🇿 {featuredWord.translation_uz}
                    </p>
                  )}
                </div>

                <p className="text-[10px] text-slate-500 leading-tight">
                  <span className="font-bold text-slate-700">Example: </span>
                  "{(featuredWord as any).example_sentence || (featuredWord as any).example || 'Her eloquent speech moved the entire audience to tears.'}"
                </p>
              </div>

              <Link
                to="/daily-words"
                className="mt-4 w-full py-2 text-center text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
              >
                Review Leitner Boxes
              </Link>
            </div>

          </div>

          {/* AI-Powered Study Assistant (Accessible right from Student Dashboard) */}
          <div id="ai-study-assistant-section">
            <AIStudyAssistant initialExpanded={true} />
          </div>
        </div>

        {/* Right Column (4 cols): Championship Rank & Active Assignments */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Championship Rank Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800 text-sm">{t('championship')}</h3>
              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                Tashkent League
              </span>
            </div>

            <div className="space-y-2.5">
              {/* Top 3 Ranks */}
              {sortedChampionship.slice(0, 3).map((scorer, i) => (
                <div key={scorer.id || i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition">
                  <span className={`w-6 text-center font-black text-sm ${
                    i === 0 ? 'text-amber-500' : i === 1 ? 'text-slate-400' : 'text-amber-700'
                  }`}>
                    {i + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-600 text-[10px]">
                    {(scorer.student_name || scorer.student?.full_name || 'ST').slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">
                      {scorer.student_name || scorer.student?.full_name || 'Student'}
                    </p>
                    <p className="text-[9px] text-slate-400">Target IELTS 7.5+</p>
                  </div>
                  <span className="text-xs font-bold text-slate-600">
                    {(scorer.total_score || scorer.score || scorer.xp || 0).toLocaleString()} XP
                  </span>
                </div>
              ))}

              {/* Current User Highlight in Leaderboard (Professional Polish) */}
              <div className="flex items-center gap-3 bg-indigo-50/80 p-2.5 rounded-xl border border-indigo-100">
                <span className="w-6 text-center font-black text-indigo-600 text-sm">
                  {userRank}
                </span>
                <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center font-bold text-indigo-700 text-[10px]">
                  {profile?.full_name?.slice(0, 2).toUpperCase() || 'AK'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-indigo-900 truncate">
                    {profile?.full_name || 'Azizbek K.'}
                  </p>
                  <p className="text-[9px] font-semibold text-indigo-500">You (CEFR {profile?.level || 'B2'})</p>
                </div>
                <span className="text-xs font-black text-indigo-700">
                  {userXp.toLocaleString()} XP
                </span>
              </div>
            </div>

            <Link
              to="/championship"
              className="w-full mt-4 py-2 text-xs font-bold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors block text-center"
            >
              View Full Leaderboard
            </Link>
          </div>

          {/* Active Assignments Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800 text-sm">{t('homework')}</h3>
                <span className="text-[10px] font-bold text-slate-500">
                  {pendingHw.length} Pending
                </span>
              </div>

              <div className="space-y-3">
                {homeworks.slice(0, 3).map((hw, idx) => {
                  const sub = submissions.find(s => s.homework_id === hw.id && s.student_id === profile?.id);
                  const isSubmitted = Boolean(sub);

                  // Apply urgency borders: red for first pending, blue for second, emerald for completed
                  const borderStyle = isSubmitted
                    ? 'border-l-4 border-l-emerald-500 bg-emerald-50/30'
                    : idx === 0
                    ? 'border-l-4 border-l-rose-500 bg-rose-50/30'
                    : 'border-l-4 border-l-indigo-500 bg-indigo-50/30';

                  return (
                    <div 
                      key={hw.id}
                      className={`p-3 rounded-xl border border-slate-200 ${borderStyle} transition`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-900 truncate">
                            {hw.title}
                          </p>
                          <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                            {hw.type.replace('_', ' ')} • Max {hw.max_score} pts
                          </p>
                        </div>

                        {isSubmitted ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 flex-shrink-0">
                            {sub?.status === 'graded' ? `${sub.score}/${hw.max_score}` : 'Done'}
                          </span>
                        ) : (
                          <Link
                            to={`/homework/${hw.id}`}
                            className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition flex-shrink-0"
                          >
                            Submit
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Link
              to="/homework"
              className="w-full mt-4 py-2 text-xs font-bold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors block text-center"
            >
              {t('viewAllHomework')}
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};
