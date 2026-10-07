import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import {
  Users, CheckSquare, ClipboardCheck, Calendar, Clock, ArrowRight, CheckCircle2,
  MapPin, Headphones, Mic, BrainCircuit, LayoutGrid
} from 'lucide-react';
import { WeeklyTimetable } from '../../components/schedule/WeeklyTimetable';

export const TeacherDashboard: React.FC = () => {
  const { profile } = useAuth();
  const { language } = useLanguage();
  const L = (uz: string, en: string) => (language === 'en' ? en : uz);
  const { groups, lessons, homeworks, submissions, students } = useLMSData();
  const [viewMode, setViewMode] = useState<'cards' | 'timetable'>('cards');

  const pendingGrading = submissions.filter(s => s.status === 'submitted');
  const recentSubmissions = submissions.slice(0, 6);
  const groupIds = new Set(groups.map(g => g.id));
  const myStudentsCount = students.filter(s => s.group_id && groupIds.has(s.group_id)).length;
  const hour = new Date().getHours();
  const greeting = hour < 12 ? L('Xayrli tong', 'Good morning') : hour < 18 ? L('Xayrli kun', 'Good afternoon') : L('Xayrli kech', 'Good evening');

  const stats = [
    { label: L('Guruhlar', 'Groups'), value: groups.length, sub: `${myStudentsCount} ${L("o'quvchi", 'students')}`, icon: Users },
    { label: L('Tekshirish kerak', 'To grade'), value: pendingGrading.length, sub: L('topshiriq', 'submissions'), icon: CheckSquare },
    { label: L('Darslar', 'Lessons'), value: lessons.length, sub: L('rejalashtirilgan', 'scheduled'), icon: ClipboardCheck },
  ];

  const tools = [
    { to: '/teacher/listening', label: 'Tactics for Listening', icon: Headphones },
    { to: '/teacher/speaking-hub', label: L('Speaking markazi', 'Speaking hub'), icon: Mic },
    { to: '/ai-studio', label: L('AI kontent', 'AI content'), icon: BrainCircuit },
  ];

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[28px] bg-[#0b0c1a] text-white p-6 sm:p-8">
        <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-indigo-600/30 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-28 left-20 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-[90px]" />
        <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">{L("O'qituvchi paneli", 'Teacher workspace')}</p>
            <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
              {greeting}{profile?.full_name ? `, ${profile.full_name}` : ''}
            </h1>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              {pendingGrading.length > 0
                ? L(`${pendingGrading.length} ta topshiriq baholashni kutmoqda.`, `${pendingGrading.length} submissions are waiting for grading.`)
                : L('Barcha topshiriqlar baholangan. Bugungi davomatni belgilashni unutmang.', 'Everything is graded. Remember to take attendance today.')}
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Link to="/teacher/attendance" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-bold hover:bg-slate-100 transition">
              <ClipboardCheck className="w-4 h-4" /> {L('Davomat', 'Attendance')}
            </Link>
            <Link to="/teacher/homework" className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-5 py-2.5 text-sm font-semibold hover:bg-white/15 transition">
              <CheckSquare className="w-4 h-4" /> {L('Vazifalar', 'Homework')}
            </Link>
          </div>
        </div>

        <div className="relative mt-7 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0b0c1a]/90 px-4 py-4">
              <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400"><s.icon className="w-3.5 h-3.5" /> {s.label}</div>
              <div className="mt-1 text-2xl font-extrabold">{s.value}</div>
              <div className="text-[11px] text-slate-500">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Groups & timetable */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">{L('Guruhlarim', 'My groups')}</h2>
          <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1 text-xs">
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-semibold transition cursor-pointer ${viewMode === 'cards' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              <LayoutGrid className="w-3.5 h-3.5" /> {L('Kartalar', 'Cards')}
            </button>
            <button
              type="button"
              onClick={() => setViewMode('timetable')}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-semibold transition cursor-pointer ${viewMode === 'timetable' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              <Calendar className="w-3.5 h-3.5" /> {L('Haftalik jadval', 'Weekly')}
            </button>
          </div>
        </div>

        {viewMode === 'timetable' ? (
          <WeeklyTimetable groups={groups} />
        ) : groups.length === 0 ? (
          <p className="rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
            {L('Sizga hali guruh biriktirilmagan.', 'No groups assigned yet.')}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {groups.map(group => {
              const count = students.filter(s => s.group_id === group.id).length;
              return (
                <div key={group.id} className="flex flex-col justify-between rounded-3xl border border-slate-200/70 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-bold text-indigo-700">{group.level}</span>
                      <span className="text-xs text-slate-500">{count} {L("o'quvchi", 'students')}</span>
                    </div>
                    <h3 className="mt-3 text-base font-bold text-slate-900">{group.name}</h3>
                    <div className="mt-2 space-y-1 text-xs text-slate-600">
                      <p className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" /> {group.schedule}</p>
                      {group.room && <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {group.room}</p>}
                    </div>
                  </div>
                  <div className="mt-5 flex gap-2">
                    <Link to="/teacher/attendance" className="flex-1 rounded-full border border-slate-200 py-2 text-center text-xs font-semibold text-slate-700 hover:bg-slate-50 transition">
                      {L('Davomat', 'Attendance')}
                    </Link>
                    <Link to="/teacher/homework" className="flex-1 rounded-full bg-slate-900 py-2 text-center text-xs font-semibold text-white hover:bg-slate-700 transition">
                      {L('Vazifalar', 'Homework')}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Submissions */}
        <section className="lg:col-span-2 rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] overflow-hidden">
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-100">
            <h2 className="text-[15px] font-bold text-slate-900">{L("So'nggi topshiriqlar", 'Recent submissions')}</h2>
            <Link to="/teacher/homework" className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700">
              {L('Barchasi', 'View all')} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          {recentSubmissions.length === 0 ? (
            <p className="p-10 text-center text-sm text-slate-500">{L('Hozircha topshiriqlar yo\'q', 'No submissions yet')}</p>
          ) : (
            <div className="divide-y divide-slate-100">
              {recentSubmissions.map((sub) => {
                const hw = homeworks.find(h => h.id === sub.homework_id);
                const graded = sub.status === 'graded';
                return (
                  <div key={sub.id} className="flex items-center justify-between gap-4 px-5 sm:px-6 py-3.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-9 h-9 shrink-0 rounded-xl flex items-center justify-center ${graded ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                        {graded ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900 truncate">{sub.student_name}</p>
                        <p className="text-xs text-slate-500 truncate">{hw?.title || sub.homework_title}</p>
                      </div>
                    </div>
                    {graded ? (
                      <span className="shrink-0 text-xs font-bold text-emerald-700">{sub.score}/{hw?.max_score ?? 100}</span>
                    ) : (
                      <Link to="/teacher/homework" className="shrink-0 rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-slate-700 transition">
                        {L('Baholash', 'Grade')}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Tools */}
        <section className="rounded-3xl border border-slate-200/70 bg-white p-5 sm:p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <h2 className="text-[15px] font-bold text-slate-900 mb-4">{L('Vositalar', 'Tools')}</h2>
          <div className="space-y-2">
            {tools.map((tool) => (
              <Link key={tool.to} to={tool.to} className="group flex items-center justify-between rounded-2xl border border-slate-100 px-4 py-3 hover:border-slate-200 hover:bg-slate-50 transition">
                <span className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center"><tool.icon className="w-4 h-4" /></span>
                  {tool.label}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
