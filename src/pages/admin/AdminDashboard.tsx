import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { TodayPanel } from '../../components/admin/TodayPanel';
import { 
  Users, BookOpen, CheckSquare, BarChart3, 
  TrendingUp, ArrowRight, Clock, CreditCard, AlertTriangle, Monitor, Smartphone, UserPlus
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { profile } = useAuth();
  const { t } = useLanguage();
  const { groups, homeworks, submissions, dailyWords, students, attendance, actionEvents, telemetryLogs, newStudentIds } = useLMSData();

  const activeStudentsCount = students.filter(s => s.status === 'active').length;
  const unassignedCount = students.filter(s => !s.group_id && s.status !== 'left').length;
  const telemetryList = Object.values(telemetryLogs || {});
  const onlineCount = telemetryList.filter(s => s.online_status === 'online').length;
  const idleCount = telemetryList.filter(s => s.online_status === 'idle').length;
  const activeTodayCount = telemetryList.filter(s => (s.today_active_seconds || 0) > 0 || (s.last_active_at && s.last_active_label !== 'Hali kirmagan')).length;
  const recentlyActiveStudents = telemetryList
    .filter(s => s.online_status === 'online' || s.online_status === 'idle' || (s.today_active_seconds || 0) > 0 || (s.last_active_at && s.last_active_label !== 'Hali kirmagan'))
    .sort((a, b) => {
      const timeB = b.last_active_at ? new Date(b.last_active_at).getTime() : 0;
      const timeA = a.last_active_at ? new Date(a.last_active_at).getTime() : 0;
      return timeB - timeA;
    });

  const attendanceRate = attendance.length > 0
    ? Math.round((attendance.filter(a => a.status === 'present').length / attendance.length) * 100)
    : 0;

  const submissionRate = homeworks.length > 0 && students.length > 0
    ? Math.round((submissions.length / (homeworks.length * students.length)) * 100)
    : 0;

  return (
    <div className="space-y-6">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[28px] bg-[#0b0c1a] text-white p-6 sm:p-8">
        <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-violet-600/30 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-28 left-20 h-72 w-72 rounded-full bg-indigo-600/25 blur-[90px]" />
        <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">Premier School</p>
            <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">Boshqaruv paneli</h1>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              O'quvchilar, guruhlar, davomat va to'lovlar — bir joyda.
            </p>
            <Link
              to="/admin/analytics?tab=monitoring"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-white/10 transition"
            >
              <span className={`w-2 h-2 rounded-full ${onlineCount > 0 ? 'bg-emerald-400 animate-pulse' : idleCount > 0 ? 'bg-amber-400' : 'bg-slate-500'}`} />
              {onlineCount > 0 ? `${onlineCount} ta onlayn` : idleCount > 0 ? `${idleCount} ta pauzada` : activeTodayCount > 0 ? `${activeTodayCount} ta bugun kirgan` : 'Hozir hech kim onlayn emas'}
            </Link>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Link to="/admin/groups" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-bold hover:bg-slate-100 transition">
              <Users className="w-4 h-4" /> Guruhlar
            </Link>
            <Link to="/admin/payments" className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-5 py-2.5 text-sm font-semibold hover:bg-white/15 transition">
              <CreditCard className="w-4 h-4" /> To'lovlar
            </Link>
            <Link to="/admin/analytics?tab=performance" className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-5 py-2.5 text-sm font-semibold hover:bg-white/15 transition">
              <TrendingUp className="w-4 h-4" /> Analitika
            </Link>
          </div>
        </div>
      </section>

      <TodayPanel />

      {/* Unassigned Students Alert Banner */}
      {unassignedCount > 0 && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">
                {unassignedCount} ta o'quvchi guruhga biriktirilmagan
              </h4>
              <p className="text-[11px] text-slate-500">
                O'quvchilarni darajasiga mos guruhlarga joylashtiring va to'lov grafigini belgilang.
              </p>
            </div>
          </div>
          <Link
            to="/admin/registrations"
            className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition shadow-xs whitespace-nowrap text-center"
          >
            Guruhlarga joylash
          </Link>
        </div>
      )}

      {/* Latest sign-ups */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h3 className="flex items-center gap-2 text-[15px] font-bold text-slate-900">
            <UserPlus className="w-4 h-4 text-indigo-600" /> Oxirgi ro'yxatdan o'tganlar
            {newStudentIds.length > 0 && (
              <span className="rounded-full bg-fuchsia-500 px-2 py-0.5 text-[10px] font-bold text-white">{newStudentIds.length} yangi</span>
            )}
          </h3>
          <Link to="/admin/registrations" className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800">
            Barchasi <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        {students.filter(s => s.auth_id).length === 0 ? (
          <p className="py-6 text-center text-sm text-slate-500">Hali hech kim ro'yxatdan o'tmagan.</p>
        ) : (
          <ul className="divide-y divide-slate-100">
            {students
              .filter(s => s.auth_id)
              .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''))
              .slice(0, 5)
              .map(st => (
                <li key={st.id} className="flex items-center justify-between gap-3 py-2.5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">
                      {st.full_name || st.email}
                      {newStudentIds.includes(st.id) && <span className="ml-2 rounded-full bg-indigo-600 px-1.5 py-0.5 text-[9px] font-bold text-white align-middle">Yangi</span>}
                    </p>
                    <p className="truncate text-xs text-slate-500">{st.email}{st.phone ? ` · ${st.phone}` : ''}</p>
                  </div>
                  <span className={`shrink-0 text-xs font-semibold ${st.group_id ? 'text-emerald-700' : 'text-amber-700'}`}>
                    {st.group_id ? (st.group_name || 'Guruhda') : 'Guruhsiz'}
                  </span>
                </li>
              ))}
          </ul>
        )}
      </section>

      {/* 4 KPI Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200/70 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">O'quvchilar</span>
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{students.length} nafar</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> {activeStudentsCount} ro'yxatda
            </span>
            {onlineCount > 0 ? (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-black border border-emerald-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {onlineCount} onlayn
              </span>
            ) : idleCount > 0 ? (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-black border border-amber-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                {idleCount} pauzada
              </span>
            ) : activeTodayCount > 0 ? (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200">
                {activeTodayCount} bugun kirgan
              </span>
            ) : null}
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/70 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Faol Guruhlar</span>
            <BookOpen className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{groups.length} ta guruh</div>
          <span className="text-[11px] text-slate-500 font-medium block mt-1 truncate">
            {groups.length > 0 ? groups.map(g => g.name).slice(0, 2).join(', ') : "Guruhlar ochilmagan"}
          </span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/70 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">O'rtacha Davomat</span>
            <CheckSquare className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{attendanceRate}%</div>
          <span className={`text-[11px] font-bold flex items-center gap-1 mt-1 ${attendance.length > 0 ? 'text-emerald-600' : 'text-slate-400 font-medium'}`}>
            {attendance.length > 0 ? (
              <>
                <TrendingUp className="w-3 h-3" /> {attendance.length} ta dars qaydi
              </>
            ) : (
              "Hali darslar boshlanmagan"
            )}
          </span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/70 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Vazifalar topshirilishi</span>
            <BarChart3 className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{submissionRate}%</div>
          <span className={`text-[11px] font-bold block mt-1 ${submissions.length > 0 ? 'text-purple-600' : 'text-slate-400 font-medium'}`}>
            {submissions.length > 0 ? `${submissions.length} ta tekshirildi` : "Hali vazifalar topshirilmagan"}
          </span>
        </div>
      </div>

      {/* Recently Active Students Banner */}
      {recentlyActiveStudents.length > 0 && (
        <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border border-emerald-200/80 rounded-2xl p-5 shadow-2xs">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <h3 className="text-sm font-black text-slate-900">
                Yaqinda kirgan o'quvchilar ({recentlyActiveStudents.length})
              </h3>
            </div>
            <Link to="/admin/analytics?tab=monitoring" className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
              <span>Batafsil nazorat</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {recentlyActiveStudents.slice(0, 4).map(st => {
              const isCurOnline = st.online_status === 'online';
              const isCurIdle = st.online_status === 'idle';

              return (
                <Link
                  key={st.student_id}
                  to="/admin/analytics?tab=monitoring"
                  className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition flex items-center gap-3 group"
                >
                  <div className="relative shrink-0">
                    <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 font-black flex items-center justify-center text-xs">
                      {st.student_name.slice(0, 2).toUpperCase()}
                    </div>
                    <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
                      isCurOnline ? 'bg-emerald-500 animate-pulse' :
                      isCurIdle ? 'bg-amber-400' : 'bg-slate-400'
                    }`} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-extrabold text-slate-900 group-hover:text-indigo-600 transition text-xs truncate">{st.student_name}</div>
                    <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                      {st.device === 'desktop' ? <Monitor className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
                      <span className="font-bold text-indigo-600 truncate">{st.last_active_label || 'Faol'}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Grid: Groups Distribution & Real-time Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Groups Distribution */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/70 shadow-[0_1px_2px_rgba(15,23,42,0.04)] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Guruhlar</span>
            </h3>
            <Link to="/admin/groups" className="text-xs text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-1">
              <span>Barchasini ko'rish</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-3">
            {groups.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-xs">
                Guruhlar mavjud emas
              </div>
            ) : (
              groups.map((group) => {
                const groupStudentsCount = students.filter(s => s.group_id === group.id).length;
                return (
                  <div key={group.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-slate-900">{group.name}</h4>
                        <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-indigo-100 text-indigo-700">
                          {group.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{[group.teacher_name, group.schedule].filter(Boolean).join(' • ')}</p>
                      <div className="flex gap-3 text-xs text-slate-600 mt-2">
                        {group.room && <><span>{group.room}</span><span>•</span></>}
                        <span className="font-semibold text-slate-800">{groupStudentsCount} nafar o'quvchi</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Faol
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Real LMS Events Feed */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/70 shadow-[0_1px_2px_rgba(15,23,42,0.04)] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>So'nggi tizim hodisalari</span>
            </h3>
          </div>

          {actionEvents.length === 0 ? (
            <div className="p-8 text-center bg-slate-50/70 rounded-xl border border-dashed border-slate-200">
              <Clock className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <h4 className="text-xs font-bold text-slate-700">Hozircha tizimda hodisalar qayd etilmagan</h4>
              <p className="text-[11px] text-slate-400 mt-1 max-w-xs mx-auto">
                O'quvchilar platformaga kirishi bilan hodisalar shu yerda ko'rinadi.
              </p>
            </div>
          ) : (
            <div className="space-y-2.5 text-xs">
              {actionEvents.slice(0, 6).map((evt) => {
                const isLogin = evt.action_type === 'LOGIN';
                const isIdle = evt.action_type === 'IDLE_PAUSE';
                const isResume = evt.action_type === 'RESUME_ACTIVE';
                const isPage = evt.action_type === 'PAGE_VIEW';
                
                const title = 
                  isLogin ? "Platformaga kirdi" :
                  isIdle ? "Avto-Pauza (Ekrandan uzoqlashdi)" :
                  isResume ? "Darsga qaytdi" :
                  isPage ? (evt.details?.title || "Sahifani ko'rdi") :
                  evt.action_type;

                const badgeBg = 
                  isLogin ? "bg-emerald-100 text-emerald-800" :
                  isIdle ? "bg-amber-100 text-amber-800" :
                  isResume ? "bg-teal-100 text-teal-800" :
                  "bg-indigo-100 text-indigo-800";

                return (
                  <div key={evt.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3 hover:bg-slate-100/70 transition">
                    <div className="flex items-start gap-2.5 min-w-0">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase shrink-0 mt-0.5 ${badgeBg}`}>
                        {isLogin ? "Kirish" : isIdle ? "Pauza" : isResume ? "Faol" : "Sahifa"}
                      </span>
                      <div className="min-w-0">
                        <span className="font-extrabold text-slate-900 block truncate">{evt.student_name}</span>
                        <span className="text-slate-600 text-[11px] block truncate mt-0.5">
                          {evt.details?.extra_info || title}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 shrink-0 mt-0.5">
                      {new Date(evt.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
