import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { 
  Users, BookOpen, CheckSquare, BarChart3, 
  TrendingUp, Award, Building, Sparkles, Plus, ArrowRight, Clock 
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { profile } = useAuth();
  const { t } = useLanguage();
  const { groups, homeworks, submissions, dailyWords, students, attendance, actionEvents, telemetryLogs } = useLMSData();

  const activeStudentsCount = students.filter(s => s.status === 'active').length;
  const unassignedCount = students.filter(s => !s.group_id && s.status !== 'left').length;
  const onlineCount = Object.values(telemetryLogs || {}).filter(s => s.online_status === 'online').length;

  const attendanceRate = attendance.length > 0
    ? Math.round((attendance.filter(a => a.status === 'present').length / attendance.length) * 100)
    : 0;

  const submissionRate = homeworks.length > 0 && students.length > 0
    ? Math.round((submissions.length / (homeworks.length * students.length)) * 100)
    : 0;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-800 via-indigo-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-200 block mb-1">
            Premier School Tashkent • Boshqaruv Markazi
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Administrator Paneli
          </h1>
          <p className="text-xs sm:text-sm text-purple-100 mt-1 leading-relaxed">
            O'quv markaz faoliyati, guruhlar, davomat ko'rsatkichlari va Gemini AI generatsiyalarini boshqaring.
          </p>

          <div className="flex flex-wrap gap-2.5 mt-6">
            <Link
              to="/admin/monitoring"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-400 text-slate-950 font-black text-xs hover:bg-emerald-300 transition shadow-sm"
            >
              <span className={`w-2 h-2 rounded-full ${onlineCount > 0 ? 'bg-emerald-950 animate-ping' : 'bg-emerald-800'}`} />
              <span>🟢 Jonli Nazorat ({onlineCount} Onlayn)</span>
            </Link>
            <Link
              to="/admin/performance"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-500 transition shadow-sm"
            >
              <TrendingUp className="w-4 h-4" />
              <span>📊 Performance Analytics</span>
            </Link>
            <Link
              to="/admin/activity"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-700 text-white font-bold text-xs hover:bg-purple-600 transition shadow-sm"
            >
              <span>⏱️ Faoliyat & Nazorat (Audit)</span>
            </Link>
            <Link
              to="/teacher/listening"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-500 text-white font-bold text-xs hover:bg-sky-400 transition shadow-sm"
            >
              <span>🎧 Tactics for Listening</span>
            </Link>
            <Link
              to="/admin/speaking-hub"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition shadow-sm"
            >
              <span>🎙️ Mr. Safoyev Voice</span>
            </Link>
            <Link
              to="/admin/groups"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-purple-900 font-bold text-xs hover:bg-purple-50 transition shadow-sm"
            >
              <Users className="w-4 h-4" />
              <span>Guruhlar & O'quvchilar</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Unassigned Students Alert Banner */}
      {unassignedCount > 0 && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center font-black text-base shrink-0">
              ⚠️
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">
                {unassignedCount} ta yangi ro'yxatdan o'tgan o'quvchi guruhga biriktirilishini kutmoqda
              </h4>
              <p className="text-[11px] text-slate-500">
                O'quvchilarni darajasiga mos guruhlarga joylashtiring va to'lov grafigini belgilang.
              </p>
            </div>
          </div>
          <Link
            to="/admin/groups"
            className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition shadow-xs whitespace-nowrap text-center"
          >
            Guruhlarga joylash →
          </Link>
        </div>
      )}

      {/* 4 KPI Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">O'quvchilar</span>
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{students.length} nafar</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> {activeStudentsCount} ro'yxatda
            </span>
            {onlineCount > 0 && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-black border border-emerald-200">
                🟢 {onlineCount} onlayn
              </span>
            )}
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Faol Guruhlar</span>
            <BookOpen className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{groups.length} ta guruh</div>
          <span className="text-[11px] text-slate-500 font-medium block mt-1 truncate">
            {groups.length > 0 ? groups.map(g => g.name).slice(0, 2).join(', ') : "Guruhlar ochilmagan"}
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
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

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
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

      {/* Grid: Groups Distribution & Real-time Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Groups Distribution */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Guruhlar va O'quvchilar Taqsimoti</span>
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
                      <p className="text-xs text-slate-500 mt-0.5">{group.teacher_name} • {group.schedule}</p>
                      <div className="flex gap-3 text-xs text-slate-600 mt-2">
                        <span>{group.room || "Asosiy Bino"}</span>
                        <span>•</span>
                        <span className="font-semibold text-slate-800">{groupStudentsCount} nafar o'quvchi</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Faol (Ochiq)
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Real LMS Events Feed */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>So'nggi tizim hodisalari</span>
            </h3>
            <span className="text-xs text-slate-400">Jonli telemetriya</span>
          </div>

          {actionEvents.length === 0 ? (
            <div className="p-8 text-center bg-slate-50/70 rounded-xl border border-dashed border-slate-200">
              <Clock className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <h4 className="text-xs font-bold text-slate-700">Hozircha tizimda hodisalar qayd etilmagan</h4>
              <p className="text-[11px] text-slate-400 mt-1 max-w-xs mx-auto">
                Login-parollar tarqatilib, o'quvchilar va ustozlar platformada dars qilishi bilanoq barcha hodisalar bu yerda real vaqtda aks etadi.
              </p>
            </div>
          ) : (
            <div className="space-y-3 text-xs">
              {actionEvents.slice(0, 4).map((evt) => (
                <div key={evt.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3">
                  <div>
                    <span className="font-bold text-slate-900 block">{evt.action_type}</span>
                    <span className="text-slate-600">{evt.student_name}: {evt.target_title || evt.module}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 shrink-0">
                    {new Date(evt.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
