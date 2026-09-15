import React, { useState, useEffect } from 'react';
import { 
  Clock, Activity, Users, UserCheck, BarChart3, TrendingUp, 
  Search, Filter, ShieldCheck, CheckCircle2, Headphones, Mic, 
  BookOpen, FileEdit, Award, Eye, Download, Monitor, Smartphone, 
  Tablet, Sparkles, X, ChevronRight, Layers, ArrowUpRight, CreditCard
} from 'lucide-react';
import { StudentActivityMetric, TeacherActivityMetric, PlatformAuditAction } from '../../types';
import { 
  getStoredStudentActivities, getStoredTeacherActivities, getStoredPlatformAudit 
} from '../../data/paymentAndAnalyticsData';
import { useLMSData } from '../../contexts/LMSDataContext';

export const AdminActivityAnalytics: React.FC = () => {
  const { telemetryLogs, actionEvents, students: lmsStudents } = useLMSData();

  const [students, setStudents] = useState<StudentActivityMetric[]>([]);
  const [teachers, setTeachers] = useState<TeacherActivityMetric[]>([]);
  const [auditLogs, setAuditLogs] = useState<PlatformAuditAction[]>([]);

  const [activeTab, setActiveTab] = useState<'students' | 'teachers' | 'logs'>('students');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<StudentActivityMetric | null>(null);
  const [timeFilter, setTimeFilter] = useState<'all' | 'today' | 'week'>('all');

  useEffect(() => {
    const baseActivities = getStoredStudentActivities();
    const merged = baseActivities.map(st => {
      const tel = telemetryLogs[st.student_id];
      if (!tel) return st;

      const activeMins = Math.round((tel.today_active_seconds || 0) / 60);

      return {
        ...st,
        today_hours: Number((activeMins / 60).toFixed(1)),
        total_time_minutes: Math.max(st.total_time_minutes, activeMins),
        status: tel.online_status,
        last_active: tel.last_active_label || st.last_active,
        device: tel.device || st.device
      };
    });

    lmsStudents.forEach(ls => {
      if (!merged.some(m => m.student_id === ls.id)) {
        const tel = telemetryLogs[ls.id];
        const activeMins = Math.round((tel?.today_active_seconds || 0) / 60);
        merged.push({
          id: `act-${ls.id}`,
          student_id: ls.id,
          student_name: ls.full_name,
          avatar_url: ls.avatar_url,
          group_name: ls.group_name || "Guruhga biriktirilmagan",
          level: ls.level || 'B1',
          total_time_minutes: activeMins,
          today_hours: Number((activeMins / 60).toFixed(1)),
          weekly_hours: Number((activeMins / 60).toFixed(1)),
          streak_days: 1,
          idle_time_blocked_minutes: Math.round((tel?.idle_paused_seconds || 0) / 60),
          parameter_mastery: {
            speaking: 6.5,
            listening: 7.0,
            vocabulary: 7.5,
            grammar: 6.5,
            fluency: 6.5
          },
          device: tel?.device || 'mobile',
          status: tel?.online_status || 'offline',
          last_active: tel?.last_active_label || 'Hali kirmagan'
        });
      }
    });

    merged.sort((a, b) => {
      const getScore = (s: typeof a) => {
        if (s.status === 'online') return 3;
        if (s.status === 'idle') return 2;
        if (s.total_time_minutes > 0 || s.last_active !== 'Hali kirmagan') return 1;
        return 0;
      };
      const diff = getScore(b) - getScore(a);
      if (diff !== 0) return diff;
      return b.total_time_minutes - a.total_time_minutes;
    });

    setStudents(merged);
    setTeachers(getStoredTeacherActivities());

    const baseAudit = getStoredPlatformAudit();
    const liveAudit = (actionEvents || []).map(ev => ({
      id: ev.id,
      timestamp: ev.timestamp,
      user_name: ev.student_name,
      user_role: 'student' as const,
      user_avatar: undefined,
      action_type: ev.action_type,
      action_description: ev.details?.title || ev.action_type,
      module: ev.module,
      ip_address: '178.218.201.24',
      device_info: 'Smartfon / Kompyuter',
      status: 'success' as const
    }));
    setAuditLogs([...liveAudit, ...baseAudit]);
  }, [telemetryLogs, actionEvents, lmsStudents]);

  const formatMinutes = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    if (h === 0) return `${m} daqiqa`;
    return `${h} soat ${m > 0 ? `${m} daq` : ''}`;
  };

  // KPIs
  const totalStudentMinutes = students.reduce((acc, s) => acc + s.total_time_minutes, 0);
  const onlineCount = students.filter(s => s.status === 'online').length;
  const avgFluency = (students.reduce((acc, s) => acc + s.parameter_mastery.fluency, 0) / (students.length || 1)).toFixed(1);
  const totalHomeworksGraded = teachers.reduce((acc, t) => acc + t.homeworks_graded, 0);

  // Filter students
  const filteredStudents = students.filter(s => {
    const matchesSearch = s.student_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.group_name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
              Nazorat & Audit Markazi
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-xs font-semibold text-slate-500">Faoliyat va vaqt tahlili</span>
          </div>
          <h1 className="text-2xl font-black text-slate-950 tracking-tight">
            O'quvchi & O'qituvchi Faoliyati Nazorati
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            O'quvchilar platformada qancha vaqt sarflagani, qaysi parametrlarni (Speaking, Listening, Vocabulary) qay darajada o'zlashtirayotgani va o'qituvchilar samaradorligi.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200 shadow-2xs self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('students')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'students'
                ? 'bg-white text-indigo-700 shadow-2xs font-extrabold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>O'quvchilar ({students.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('teachers')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'teachers'
                ? 'bg-white text-indigo-700 shadow-2xs font-extrabold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>O'qituvchilar ({teachers.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'logs'
                ? 'bg-white text-indigo-700 shadow-2xs font-extrabold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Jonli Audit Jurnali</span>
          </button>
        </div>
      </div>

      {/* Top Metric Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Jami O'rganish Vaqti:</span>
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-black text-slate-950">
              {formatMinutes(totalStudentMinutes)}
            </span>
          </div>
          <div className="mt-2 text-[11px] font-semibold text-slate-500 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Talabalar tomonidan platformada sarflangan</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ayni Paytda Onlayn:</span>
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <Activity className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-emerald-600">{onlineCount} nafar</span>
            <span className="text-xs text-slate-500">/ {students.length} o'quvchi</span>
          </div>
          <div className="mt-2 text-[11px] font-semibold text-emerald-700">
            Jonli dars va audio mashg'ulotlarda
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">O'rtacha Speaking Band:</span>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
              <Mic className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-black text-slate-950">{avgFluency}</span>
            <span className="text-xs font-bold text-slate-500 ml-1">/ 9.0 Band</span>
          </div>
          <div className="mt-2 text-[11px] font-semibold text-amber-700">
            Mr. Safoyev simulyatorida sinalgan
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Vazifalar Tekshiruvi:</span>
            <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-black text-slate-950">{totalHomeworksGraded} ta</span>
          </div>
          <div className="mt-2 text-[11px] font-semibold text-purple-700">
            O'qituvchilar tezkorligi: 1.8 soat
          </div>
        </div>
      </div>

      {/* TAB 1: STUDENTS ACTIVITY & PARAMETER BREAKDOWN */}
      {activeTab === 'students' && (
        <div className="space-y-4">
          {/* Search bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="O'quvchi ismi yoki guruhi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 outline-hidden"
              />
            </div>
            <div className="text-xs text-slate-500 font-semibold">
              Jami {filteredStudents.length} nafar o'quvchi faoliyati nazoratda
            </div>
          </div>

          {/* Students Table */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4">O'quvchi</th>
                    <th className="py-3.5 px-4">Holat / Qurilma</th>
                    <th className="py-3.5 px-4">Umumiy Vaqt</th>
                    <th className="py-3.5 px-4">Modullar Taqsimoti</th>
                    <th className="py-3.5 px-4">Parametrlar (IELTS / 9)</th>
                    <th className="py-3.5 px-4">Tactics Units</th>
                    <th className="py-3.5 px-4 text-right">Amal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {filteredStudents.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-50/70 transition">
                      {/* Name and Group */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={s.student_avatar}
                            alt={s.student_name}
                            className="w-9 h-9 rounded-xl object-cover border border-slate-200"
                          />
                          <div>
                            <span className="font-extrabold text-slate-900 block">{s.student_name}</span>
                            <span className="text-[11px] text-slate-500">{s.group_name}</span>
                          </div>
                        </div>
                      </td>

                      {/* Status & Device */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${
                            s.status === 'online' ? 'bg-emerald-500 animate-pulse' :
                            s.status === 'idle' ? 'bg-amber-400' : 'bg-slate-300'
                          }`}></span>
                          <span className="text-xs capitalize font-semibold text-slate-700">{s.status}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                          {s.device === 'desktop' ? <Monitor className="w-3 h-3" /> :
                           s.device === 'mobile' ? <Smartphone className="w-3 h-3" /> : <Tablet className="w-3 h-3" />}
                          <span>{s.last_active}</span>
                        </div>
                      </td>

                      {/* Total Time */}
                      <td className="py-3.5 px-4">
                        <span className="font-extrabold text-slate-900 block">
                          {formatMinutes(s.total_time_minutes)}
                        </span>
                        <span className="text-[10px] text-emerald-600 font-bold">
                          Bugun: {s.today_time_minutes} daq
                        </span>
                      </td>

                      {/* Module Breakdown Bar */}
                      <td className="py-3.5 px-4 w-60">
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
                            <span>Speaking: {s.module_breakdown.speaking_minutes}m</span>
                            <span>Listening: {s.module_breakdown.listening_tactics_minutes}m</span>
                            <span>Words: {s.module_breakdown.vocabulary_4000_minutes}m</span>
                          </div>
                          {/* Segmented bar */}
                          <div className="w-full h-2 rounded-full bg-slate-100 flex overflow-hidden">
                            <div
                              className="bg-indigo-500 h-full"
                              style={{ width: `${(s.module_breakdown.speaking_minutes / s.total_time_minutes) * 100}%` }}
                              title="Speaking"
                            />
                            <div
                              className="bg-amber-500 h-full"
                              style={{ width: `${(s.module_breakdown.listening_tactics_minutes / s.total_time_minutes) * 100}%` }}
                              title="Listening Tactics"
                            />
                            <div
                              className="bg-emerald-500 h-full"
                              style={{ width: `${(s.module_breakdown.vocabulary_4000_minutes / s.total_time_minutes) * 100}%` }}
                              title="Vocabulary"
                            />
                            <div
                              className="bg-purple-500 h-full"
                              style={{ width: `${(s.module_breakdown.reading_minutes / s.total_time_minutes) * 100}%` }}
                              title="Reading"
                            />
                          </div>
                        </div>
                      </td>

                      {/* Parameter Mastery */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div>
                            <span className="text-[10px] text-slate-400 block font-bold">Fluency</span>
                            <span className="font-extrabold text-indigo-700">{s.parameter_mastery.fluency}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 block font-bold">Lexical</span>
                            <span className="font-extrabold text-purple-700">{s.parameter_mastery.lexical_resource}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 block font-bold">Pronun.</span>
                            <span className="font-extrabold text-amber-700">{s.parameter_mastery.pronunciation}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 block font-bold">Listen</span>
                            <span className="font-extrabold text-emerald-700">{s.parameter_mastery.listening_accuracy_percent}%</span>
                          </div>
                        </div>
                      </td>

                      {/* Tactics Units Done */}
                      <td className="py-3.5 px-4">
                        <span className="font-extrabold text-slate-900">{s.tactics_units_done} / 24 unit</span>
                        <div className="text-[10px] text-slate-500">{s.words_mastered} ta so'z</div>
                      </td>

                      {/* Action */}
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => setSelectedStudent(s)}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-bold transition flex items-center gap-1 ml-auto cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Audit Kartasi</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TEACHERS AUDIT & PERFORMANCE */}
      {activeTab === 'teachers' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {teachers.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-2xs p-6 space-y-5"
            >
              {/* Teacher Info */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <img
                    src={t.avatar_url}
                    alt={t.teacher_name}
                    className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-2xs"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-black text-lg text-slate-900">{t.teacher_name}</h3>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300 text-[10px] font-black uppercase">
                        Faol
                      </span>
                    </div>
                    <p className="text-xs text-indigo-600 font-bold">{t.teacher_title}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{t.last_active}</p>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs">
                <div>
                  <span className="text-slate-400 block uppercase font-bold text-[10px]">O'qitish Vaqti:</span>
                  <span className="font-black text-slate-900 text-base mt-0.5 block">{t.total_teaching_hours} soat</span>
                  <span className="text-[10px] text-emerald-600 font-bold">Bugun: {t.today_hours}s</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-bold text-[10px]">Guruh & O'quvchilar:</span>
                  <span className="font-black text-slate-900 text-base mt-0.5 block">{t.active_groups_count} ta guruh</span>
                  <span className="text-[10px] text-slate-500 font-semibold">{t.total_students_count} talaba</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-bold text-[10px]">Reyting / Fikrlar:</span>
                  <span className="font-black text-amber-600 text-base mt-0.5 block">★ {t.feedback_quality_score}</span>
                  <span className="text-[10px] text-slate-500">Ijobiy baholash</span>
                </div>
              </div>

              {/* Turnaround & Homeworks */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-bold">Vazifalarni tekshirish tezligi (Turnaround):</span>
                  <span className="font-extrabold text-emerald-700">~{t.avg_grading_turnaround_hours} soat ichida</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-bold">Jami tekshirilgan ishlar:</span>
                  <span className="font-extrabold text-slate-900">{t.homeworks_graded} ta topshiriq</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-bold">Davomat kiritish intizomi:</span>
                  <span className="font-extrabold text-indigo-700">{t.attendance_logging_rate}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${t.attendance_logging_rate}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: LIVE AUDIT LOG */}
      {activeTab === 'logs' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xs overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-extrabold text-slate-900 text-sm">
              Xronologik Harakatlar Jurnali (Real-Time Activity Audit)
            </h3>
            <span className="text-xs text-slate-500 font-semibold">
              Barcha o'quvchi, o'qituvchi va tizim hodisalari saqlanadi
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {auditLogs.map((log) => (
              <div key={log.id} className="p-4 hover:bg-slate-50 transition flex items-start gap-3.5">
                <div className={`p-2.5 rounded-xl shrink-0 ${
                  log.module === 'speaking' ? 'bg-indigo-50 text-indigo-600' :
                  log.module === 'listening' ? 'bg-amber-50 text-amber-600' :
                  log.module === 'vocabulary' ? 'bg-emerald-50 text-emerald-600' :
                  log.module === 'payment' ? 'bg-purple-50 text-purple-600' :
                  'bg-blue-50 text-blue-600'
                }`}>
                  {log.module === 'speaking' ? <Mic className="w-4 h-4" /> :
                   log.module === 'listening' ? <Headphones className="w-4 h-4" /> :
                   log.module === 'vocabulary' ? <BookOpen className="w-4 h-4" /> :
                   log.module === 'payment' ? <CreditCard className="w-4 h-4" /> :
                   <Activity className="w-4 h-4" />}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-slate-900 text-xs">{log.actor_name}</span>
                    <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase ${
                      log.actor_role === 'student' ? 'bg-slate-100 text-slate-700' :
                      log.actor_role === 'teacher' ? 'bg-indigo-100 text-indigo-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {log.actor_role}
                    </span>
                    <span className="text-[11px] text-slate-400">• {log.timestamp}</span>
                  </div>

                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">{log.action_description}</p>

                  <div className="flex items-center gap-3 mt-1.5 text-[11px] text-slate-400">
                    {log.duration_minutes && (
                      <span className="flex items-center gap-1 text-slate-500 font-semibold">
                        <Clock className="w-3 h-3" />
                        <span>{log.duration_minutes} daqiqa sarflandi</span>
                      </span>
                    )}
                    {log.device && (
                      <span className="text-slate-400">Qurilma: {log.device}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Student Detailed Audit Modal / Drawer */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={selectedStudent.student_avatar}
                  alt={selectedStudent.student_name}
                  className="w-10 h-10 rounded-xl object-cover border border-slate-700"
                />
                <div>
                  <h2 className="font-extrabold text-base">{selectedStudent.student_name}</h2>
                  <p className="text-xs text-slate-400">{selectedStudent.group_name} • {selectedStudent.level}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
              {/* Summary stat cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-100 text-xs">
                  <span className="text-indigo-700 font-bold uppercase text-[10px] block">Jami Platforma Vaqti:</span>
                  <span className="font-black text-indigo-950 text-base mt-1 block">
                    {formatMinutes(selectedStudent.total_time_minutes)}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs">
                  <span className="text-emerald-700 font-bold uppercase text-[10px] block">Speaking Mashqlari:</span>
                  <span className="font-black text-emerald-950 text-base mt-1 block">
                    {selectedStudent.speaking_sessions_count} ta sessiya
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-100 text-xs">
                  <span className="text-amber-700 font-bold uppercase text-[10px] block">Vazifalar Intizomi:</span>
                  <span className="font-black text-amber-950 text-base mt-1 block">
                    {selectedStudent.homework_completion_rate}% bajarilgan
                  </span>
                </div>
              </div>

              {/* Exact Module Time Breakdown */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <h4 className="font-extrabold text-xs text-slate-700 uppercase tracking-wider mb-3">
                  Qaysi Modullarda Qancha Vaqt Sarflangan:
                </h4>
                <div className="space-y-2.5 text-xs">
                  <div>
                    <div className="flex justify-between font-bold text-slate-800 mb-1">
                      <span>🎤 Mr. Safoyev IELTS Speaking Simulyatori</span>
                      <span>{formatMinutes(selectedStudent.module_breakdown.speaking_minutes)}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${(selectedStudent.module_breakdown.speaking_minutes / selectedStudent.total_time_minutes) * 100}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-800 mb-1">
                      <span>🎧 Tactics for Listening (Oxford 3rd Ed)</span>
                      <span>{formatMinutes(selectedStudent.module_breakdown.listening_tactics_minutes)}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: `${(selectedStudent.module_breakdown.listening_tactics_minutes / selectedStudent.total_time_minutes) * 100}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-800 mb-1">
                      <span>📚 4000 Essential English Words</span>
                      <span>{formatMinutes(selectedStudent.module_breakdown.vocabulary_4000_minutes)}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(selectedStudent.module_breakdown.vocabulary_4000_minutes / selectedStudent.total_time_minutes) * 100}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-800 mb-1">
                      <span>📖 Reading Mastery & TOEFL Writing</span>
                      <span>{formatMinutes(selectedStudent.module_breakdown.reading_minutes + selectedStudent.module_breakdown.writing_toefl_minutes)}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: `${((selectedStudent.module_breakdown.reading_minutes + selectedStudent.module_breakdown.writing_toefl_minutes) / selectedStudent.total_time_minutes) * 100}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Exact Skill Mastery Radar/Bar */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <h4 className="font-extrabold text-xs text-slate-700 uppercase tracking-wider mb-3">
                  IELTS Parametrlari O'zlashtirish Darajasi:
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-400 font-bold block text-[10px]">Fluency & Coherence:</span>
                    <span className="text-lg font-black text-indigo-700">{selectedStudent.parameter_mastery.fluency} / 9.0</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">Tezlik va fikrlar ulanishi yuqori</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-400 font-bold block text-[10px]">Lexical Resource (So'z boyligi):</span>
                    <span className="text-lg font-black text-purple-700">{selectedStudent.parameter_mastery.lexical_resource} / 9.0</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{selectedStudent.words_mastered} ta akademik so'z</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-400 font-bold block text-[10px]">Pronunciation (Talaffuz & Intonatsiya):</span>
                    <span className="text-lg font-black text-amber-700">{selectedStudent.parameter_mastery.pronunciation} / 9.0</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">Fonetik aniqlik a'lo</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-400 font-bold block text-[10px]">Listening Comprehension:</span>
                    <span className="text-lg font-black text-emerald-700">{selectedStudent.parameter_mastery.listening_accuracy_percent}%</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">Tactics: {selectedStudent.tactics_units_done} unit bajarildi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
