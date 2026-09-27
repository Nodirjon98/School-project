import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import {
  Flame, Zap, Trophy, BookOpen, Clock,
  CheckCircle2, ArrowRight, Sparkles,
  Layers, ChevronRight, Award, Music, Headphones, Mic, PenTool,
  Calendar, MapPin, Camera, ClipboardList, GraduationCap
} from 'lucide-react';
import { AIStudyAssistant } from '../../components/student/AIStudyAssistant';
import { WeeklyTimetable } from '../../components/schedule/WeeklyTimetable';
import { ProfilePhotoModal } from '../../components/student/ProfilePhotoModal';

const UZ_WEEKDAYS = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
const UZ_MONTHS = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'];

const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => (
  <div className={`bg-white rounded-3xl border border-slate-200/70 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ${className}`}>{children}</div>
);

const CardHeader: React.FC<{ title: string; action?: React.ReactNode }> = ({ title, action }) => (
  <div className="flex items-center justify-between mb-4">
    <h3 className="font-bold text-slate-900 text-[15px] tracking-tight">{title}</h3>
    {action}
  </div>
);

export const StudentDashboard: React.FC = () => {
  const { profile } = useAuth();
  const { language } = useLanguage();
  const L = (uz: string, en: string) => (language === 'en' ? en : uz);
  const {
    lessons, homeworks, submissions, dailyWords,
    championshipScores, attendance, completeLesson, groups
  } = useLMSData();

  const [showTimetable, setShowTimetable] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const myGroup = groups.find(g => g.id === profile?.group_id);

  const sortedChampionship = [...championshipScores].sort((a, b) => a.rank - b.rank);
  const userRank = championshipScores.find(cs => cs.student_id === profile?.id)?.rank;
  const userXp = profile?.xp ?? 0;
  const streak = profile?.streak ?? 0;

  const submittedHwIds = new Set(submissions.filter(s => s.student_id === profile?.id).map(s => s.homework_id));
  const pendingHw = homeworks.filter(h => !submittedHwIds.has(h.id));
  const nextHw = pendingHw[0];

  const featuredWord = dailyWords[0];
  const firstName = profile?.full_name?.split(' ')[0] || '';
  const hour = new Date().getHours();
  const greeting = hour < 12 ? L('Xayrli tong', 'Good morning') : hour < 18 ? L('Xayrli kun', 'Good afternoon') : L('Xayrli kech', 'Good evening');
  // Browsers ship incomplete uz-UZ locale data, so format the Uzbek date by hand.
  const now = new Date();
  const todayStr = language === 'en'
    ? now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
    : `${UZ_WEEKDAYS[now.getDay()]}, ${now.getDate()}-${UZ_MONTHS[now.getMonth()]}`;
  const initials = profile?.full_name ? profile.full_name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : '';

  const practice = [
    { to: '/speaking', label: 'Speaking', sub: L("AI bilan suhbat", 'Talk with AI'), icon: Mic, tone: 'from-emerald-500/15 to-emerald-500/0 text-emerald-600' },
    { to: '/ielts-writing', label: 'IELTS Writing', sub: L('Insho baholash', 'Essay scoring'), icon: PenTool, tone: 'from-violet-500/15 to-violet-500/0 text-violet-600' },
    { to: '/essential-grammar', label: L('Grammatika', 'Grammar'), sub: L('114 mavzu', '114 units'), icon: Sparkles, tone: 'from-indigo-500/15 to-indigo-500/0 text-indigo-600' },
    { to: '/listening', label: 'Listening', sub: 'Tactics, 24 unit', icon: Headphones, tone: 'from-sky-500/15 to-sky-500/0 text-sky-600' },
    { to: '/curriculum', label: '4000 Words', sub: L("So'z va o'qish", 'Words & reading'), icon: BookOpen, tone: 'from-teal-500/15 to-teal-500/0 text-teal-600' },
    { to: '/karaoke', label: L('Karaoke', 'Karaoke'), sub: L("Qo'shiq bilan", 'With songs'), icon: Music, tone: 'from-fuchsia-500/15 to-fuchsia-500/0 text-fuchsia-600' },
  ];

  const stats = [
    { label: L('Ketma-ket kun', 'Day streak'), value: `${streak}`, icon: Flame, tone: 'text-orange-500 bg-orange-50' },
    { label: 'XP', value: userXp.toLocaleString(), icon: Zap, tone: 'text-indigo-600 bg-indigo-50' },
    { label: L('Reyting', 'Rank'), value: userRank ? `#${userRank}` : '—', icon: Trophy, tone: 'text-amber-600 bg-amber-50' },
    { label: L('Vazifalar', 'Tasks'), value: `${pendingHw.length}`, icon: ClipboardList, tone: 'text-rose-600 bg-rose-50' },
  ];

  return (
    <div className="space-y-6">
      {/* Today hero */}
      <section className="relative overflow-hidden rounded-[28px] bg-[#0b0c1a] text-white p-6 sm:p-8">
        <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-violet-600/30 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-indigo-600/25 blur-[90px]" />
        <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex items-start gap-4">
            <button
              type="button"
              onClick={() => setIsPhotoModalOpen(true)}
              className="relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center font-black text-lg ring-1 ring-white/10 cursor-pointer group"
              title={L('Profil rasmini o\'zgartirish', 'Change photo')}
            >
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt="" className="w-full h-full object-cover" />
              ) : (
                <span>{initials}</span>
              )}
              <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <Camera className="w-4 h-4" />
              </span>
            </button>
            <div>
              <p className="text-xs font-medium text-slate-400 capitalize">{todayStr}</p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight">
                {greeting}{firstName ? `, ${firstName}` : ''}
              </h2>
              <p className="mt-2 text-sm text-slate-300 max-w-lg">
                {nextHw
                  ? L(`Bugungi asosiy vazifa: «${nextHw.title}».`, `Today's main task: “${nextHw.title}”.`)
                  : L("Barcha vazifalar bajarilgan. Bugun 15 daqiqa mashq qiling.", 'All tasks done. Practice for 15 minutes today.')}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-full bg-white/10 ring-1 ring-white/10 font-semibold">
                  {L('Daraja', 'Level')} {profile?.level || 'A1'}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-slate-300">
                  {myGroup ? myGroup.name : L('Guruh biriktirilmagan', 'No group yet')}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {nextHw ? (
              <Link
                to={`/homework/${nextHw.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-bold hover:bg-slate-100 transition"
              >
                {L('Vazifani bajarish', 'Start task')} <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link
                to="/speaking"
                className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-bold hover:bg-slate-100 transition"
              >
                {L('Mashqni boshlash', 'Start practice')} <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            <Link
              to="/daily-words"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-5 py-2.5 text-sm font-semibold hover:bg-white/15 transition"
            >
              <Layers className="w-4 h-4" /> {L("Kunlik so'zlar", 'Daily words')}
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="relative mt-7 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0b0c1a]/90 px-4 py-3.5">
              <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400">
                <s.icon className="w-3.5 h-3.5" /> {s.label}
              </div>
              <div className="mt-1 text-xl font-extrabold tracking-tight">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      {!profile?.level_estimate && (
        <Link
          to="/placement-test"
          className="group flex items-center justify-between gap-4 rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 px-5 py-4 hover:border-amber-300 transition"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center"><Award className="w-5 h-5" /></div>
            <div>
              <p className="text-sm font-bold text-slate-900">{L('Darajangizni aniqlang', 'Find your level')}</p>
              <p className="text-xs text-slate-600">{L('30 savollik daraja testi — 10 daqiqa, sertifikat bilan.', '30-question placement test — 10 minutes, with certificate.')}</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Homework */}
          <Card className="p-5 sm:p-6">
            <CardHeader
              title={L('Uy vazifalari', 'Homework')}
              action={<span className="text-xs font-semibold text-slate-500">{pendingHw.length} {L('ta kutilmoqda', 'pending')}</span>}
            />
            <div className="space-y-2.5">
              {homeworks.slice(0, 4).map((hw) => {
                const sub = submissions.find(s => s.homework_id === hw.id && s.student_id === profile?.id);
                return (
                  <div key={hw.id} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${sub ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900 truncate">{hw.title}</p>
                        <p className="text-xs text-slate-500">
                          {hw.due_date ? `${L('Muddat', 'Due')}: ${`${new Date(hw.due_date).getDate()}-${UZ_MONTHS[new Date(hw.due_date).getMonth()]}`}` : ''} · {L('maks.', 'max')} {hw.max_score}
                        </p>
                      </div>
                    </div>
                    {sub ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                        <CheckCircle2 className="w-4 h-4" />
                        {sub.status === 'graded' ? `${sub.score}/${hw.max_score}` : L('Topshirildi', 'Submitted')}
                      </span>
                    ) : (
                      <Link to={`/homework/${hw.id}`} className="shrink-0 rounded-full bg-slate-900 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-slate-700 transition">
                        {L('Bajarish', 'Open')}
                      </Link>
                    )}
                  </div>
                );
              })}
              {homeworks.length === 0 && (
                <p className="text-sm text-slate-500 py-6 text-center">{L("Hozircha uy vazifasi yo'q", 'No homework yet')}</p>
              )}
            </div>
            <Link to="/homework" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700">
              {L('Barcha vazifalar', 'All homework')} <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </Card>

          {/* Practice grid */}
          <Card className="p-5 sm:p-6">
            <CardHeader title={L('Mashq qilish', 'Practice')} />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {practice.map((p) => (
                <Link
                  key={p.to}
                  to={p.to}
                  className={`group rounded-2xl border border-slate-100 bg-gradient-to-br ${p.tone.split(' ').slice(0, 2).join(' ')} p-4 hover:border-slate-200 hover:shadow-sm transition`}
                >
                  <p.icon className={`w-5 h-5 ${p.tone.split(' ')[2]}`} />
                  <p className="mt-3 text-sm font-bold text-slate-900">{p.label}</p>
                  <p className="text-xs text-slate-500">{p.sub}</p>
                </Link>
              ))}
            </div>
          </Card>

          {/* Schedule & lessons */}
          <Card className="p-5 sm:p-6">
            <CardHeader
              title={L('Dars jadvali', 'Schedule')}
              action={myGroup && (
                <button
                  type="button"
                  onClick={() => setShowTimetable(!showTimetable)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 hover:bg-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  {showTimetable ? L('Yashirish', 'Hide') : L('Haftalik jadval', 'Weekly view')}
                </button>
              )}
            />
            {myGroup ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-sm">
                  <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3.5 py-3 text-slate-700">
                    <Clock className="w-4 h-4 text-indigo-500 shrink-0" /> {myGroup.schedule}
                  </div>
                  {myGroup.room && (
                    <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3.5 py-3 text-slate-700">
                      <MapPin className="w-4 h-4 text-rose-500 shrink-0" /> {myGroup.room}
                    </div>
                  )}
                  {myGroup.teacher_name && (
                    <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3.5 py-3 text-slate-700">
                      <GraduationCap className="w-4 h-4 text-violet-500 shrink-0" /> {myGroup.teacher_name}
                    </div>
                  )}
                </div>
                {showTimetable && (
                  <div className="pt-4">
                    <WeeklyTimetable groups={groups} userGroupId={myGroup.id} isStudentView={true} />
                  </div>
                )}
              </>
            ) : (
              <p className="rounded-2xl bg-amber-50 border border-amber-100 px-4 py-3 text-sm text-amber-800">
                {L("Siz hali guruhga biriktirilmagansiz. Administrator tez orada guruh tayinlaydi.", 'You have not been assigned to a group yet.')}
              </p>
            )}

            {lessons.length > 0 && (
              <div className="mt-5 space-y-2.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{L("So'nggi darslar", 'Recent lessons')}</p>
                {lessons.slice(0, 3).map((lesson) => {
                  const attended = attendance.find(a => a.lesson_id === lesson.id && a.student_id === profile?.id)?.status === 'present';
                  return (
                    <div key={lesson.id} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 px-4 py-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900 truncate">{lesson.title}</p>
                        <p className="text-xs text-slate-500 truncate">{lesson.topic}</p>
                      </div>
                      {attended ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700"><CheckCircle2 className="w-4 h-4" /> {L('Qatnashdim', 'Attended')}</span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => completeLesson(lesson.id)}
                          className="shrink-0 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700 hover:bg-indigo-100 transition cursor-pointer"
                        >
                          {L('Belgilash', 'Check in')} +50 XP
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </Card>

          <AIStudyAssistant initialExpanded={false} />
        </div>

        {/* Side column */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {featuredWord && (
            <Card className="p-5 sm:p-6 overflow-hidden relative">
              <CardHeader title={L('Kun so\'zi', 'Word of the day')} />
              <p className="font-display text-4xl italic text-slate-900 leading-none">{featuredWord.word}</p>
              <p className="mt-2 text-xs text-slate-500">
                {featuredWord.phonetic ? `${featuredWord.phonetic} · ` : ''}{featuredWord.part_of_speech}
              </p>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">{featuredWord.definition}</p>
              {featuredWord.translation_uz && (
                <p className="mt-2 text-sm font-semibold text-indigo-700">{featuredWord.translation_uz}</p>
              )}
              {(featuredWord.example_sentence || featuredWord.example) && (
                <p className="mt-3 border-l-2 border-indigo-200 pl-3 text-xs italic text-slate-500">
                  {featuredWord.example_sentence || featuredWord.example}
                </p>
              )}
              <Link to="/daily-words" className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-slate-900 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition">
                {L("Takrorlashni boshlash", 'Start review')} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
          )}

          <Card className="p-5 sm:p-6">
            <CardHeader
              title={L('Chempionat', 'Championship')}
              action={<span className="text-[11px] font-semibold text-slate-500">{L('Shu oy', 'This month')}</span>}
            />
            <div className="space-y-1.5">
              {sortedChampionship.slice(0, 5).map((scorer, i) => {
                const name = scorer.student_name || scorer.student?.full_name || '';
                const isMe = scorer.student_id === profile?.id;
                return (
                  <div key={scorer.id || i} className={`flex items-center gap-3 rounded-2xl px-3 py-2 ${isMe ? 'bg-indigo-50 ring-1 ring-indigo-100' : ''}`}>
                    <span className={`w-5 text-center text-sm font-black ${i === 0 ? 'text-amber-500' : i === 1 ? 'text-slate-400' : i === 2 ? 'text-orange-600' : 'text-slate-400'}`}>{i + 1}</span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">
                      {name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                    </div>
                    <p className="flex-1 min-w-0 truncate text-sm font-semibold text-slate-900">{name}</p>
                    <span className="text-xs font-bold text-slate-600">{(scorer.total_score || scorer.score || scorer.xp || 0).toLocaleString()}</span>
                  </div>
                );
              })}
              {sortedChampionship.length === 0 && (
                <p className="text-sm text-slate-500 py-4 text-center">{L("Reyting hali shakllanmagan", 'No rankings yet')}</p>
              )}
            </div>
            <Link to="/championship" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700">
              {L("To'liq reyting", 'Full leaderboard')} <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </Card>

          <Link
            to="/student/grammar-exams"
            className="group rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-6 text-white hover:shadow-lg hover:shadow-violet-500/20 transition"
          >
            <Award className="w-6 h-6 text-white/90" />
            <p className="mt-4 text-lg font-extrabold tracking-tight">{L('Grammatika imtihonlari', 'Grammar exams')}</p>
            <p className="mt-1 text-sm text-white/75">{L("Bilimingizni sinab ko'ring va XP yig'ing.", 'Test yourself and earn XP.')}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold">
              {L('Boshlash', 'Start')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>

      <ProfilePhotoModal isOpen={isPhotoModalOpen} onClose={() => setIsPhotoModalOpen(false)} />
    </div>
  );
};
