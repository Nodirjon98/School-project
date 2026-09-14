import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { 
  Users, CheckSquare, ClipboardCheck, Sparkles, 
  Calendar, Clock, ArrowRight, BookOpen, Plus, Radio, CheckCircle2, Award 
} from 'lucide-react';

export const TeacherDashboard: React.FC = () => {
  const { profile } = useAuth();
  const { t } = useLanguage();
  const { groups, lessons, homeworks, submissions, gradeHomework } = useLMSData();

  // Find submissions pending grading
  const pendingGrading = submissions.filter(s => s.status === 'submitted');
  const recentSubmissions = submissions.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-700 via-blue-700 to-slate-900 rounded-3xl p-6 sm:p-8 text-white">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-200 block mb-1">
            Premier School Tashkent • O'qituvchi Boshqaruvi
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Xush kelibsiz, {profile?.full_name || 'Ustoz'}!
          </h1>
          <p className="text-xs sm:text-sm text-indigo-100 mt-1 leading-relaxed">
            Bugungi darslar davomatini belgilang, uy vazifalarini tekshiring va Groq AI orqali dars rejalari tuzing.
          </p>

          <div className="flex flex-wrap gap-2.5 mt-6">
            <Link
              to="/teacher/listening"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-500 text-white font-bold text-xs hover:bg-sky-400 transition shadow-sm"
            >
              <span>🎧 Tactics for Listening (24 Units)</span>
            </Link>
            <Link
              to="/teacher/speaking-hub"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition shadow-sm"
            >
              <span>🎙️ Mr. Safoyev Ovoz Kloni</span>
            </Link>
            <Link
              to="/teacher/attendance"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-indigo-700 font-bold text-xs hover:bg-indigo-50 transition shadow-sm"
            >
              <ClipboardCheck className="w-4 h-4" />
              <span>Davomat</span>
            </Link>
            <Link
              to="/teacher/homework"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600/60 border border-white/20 text-white font-semibold text-xs hover:bg-indigo-600 transition"
            >
              <CheckSquare className="w-4 h-4" />
              <span>Vazifalar ({pendingGrading.length})</span>
            </Link>
          </div>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block">Guruhlarim</span>
            <span className="text-2xl font-black text-slate-900">{groups.length} ta guruh</span>
            <span className="text-[10px] text-blue-600 font-semibold block">36 o'quvchi biriktirilgan</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
            <CheckSquare className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block">Tekshirish kerak</span>
            <span className="text-2xl font-black text-slate-900">{pendingGrading.length} ta insho</span>
            <span className="text-[10px] text-amber-600 font-semibold block">Baholash kutilmoqda</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
            <ClipboardCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block">Bugungi darslar</span>
            <span className="text-2xl font-black text-slate-900">{lessons.length} ta</span>
            <span className="text-[10px] text-emerald-600 font-semibold block">Oybek & Chorsu</span>
          </div>
        </div>
      </div>

      {/* Groups Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-slate-900">Mening faol guruhlarim</h2>
          <Link to="/teacher/groups" className="text-xs font-semibold text-blue-600 hover:underline">
            Barchasini ko'rish
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {groups.map(group => (
            <div key={group.id} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    CEFR {group.level}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">{group.students_count || 12} o'quvchi</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1">{group.name}</h3>
                <p className="text-xs text-slate-500 mb-3">{group.room || 'Room 304'}</p>
                <div className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 mb-4">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{group.schedule}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex gap-2">
                <Link
                  to="/teacher/attendance"
                  className="flex-1 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs text-center transition"
                >
                  Davomat
                </Link>
                <Link
                  to="/teacher/homework"
                  className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs text-center transition"
                >
                  Vazifalar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Submissions & Progress Stream */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <h2 className="text-base font-bold text-slate-900">Real-Time O'quvchi Faoliyati va Vazifalar</h2>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              Live Sync
            </span>
          </div>
          <span className="text-xs text-slate-400">Avtomatik yangilanish</span>
        </div>

        <div className="divide-y divide-slate-100">
          {recentSubmissions.map((sub) => {
            const hw = homeworks.find(h => h.id === sub.homework_id);
            const isGraded = sub.status === 'graded';

            return (
              <div key={sub.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isGraded ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-amber-50 text-amber-600 border border-amber-200'
                  }`}>
                    {isGraded ? <CheckCircle2 className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900">{sub.student_name || 'Student'}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isGraded ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {isGraded ? `Baholandi: ${sub.score}/${hw?.max_score || 100}` : 'Baholash kutilmoqda'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Vazifa: <span className="font-semibold text-slate-800">{hw?.title || sub.homework_title || 'Homework Assignment'}</span>
                    </p>
                    {sub.feedback && (
                      <p className="text-[11px] text-slate-500 mt-1 italic bg-slate-50 p-1.5 rounded border border-slate-100">
                        Izoh: "{sub.feedback}"
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:self-center">
                  {!isGraded ? (
                    <>
                      <button
                        type="button"
                        onClick={() => gradeHomework(sub.id, 95, "A'lo darajada bajarilgan. Lexical resource va grammar accuracy yuqori.")}
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition cursor-pointer"
                      >
                        95 ball (A'lo)
                      </button>
                      <button
                        type="button"
                        onClick={() => gradeHomework(sub.id, 85, "Yaxshi natija. Grammatik tuzilmalarga e'tibor qaratildi.")}
                        className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition cursor-pointer"
                      >
                        85 ball
                      </button>
                    </>
                  ) : (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
                      Yakunlandi
                    </span>
                  )}
                  <Link
                    to="/teacher/homework"
                    className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition text-xs"
                    title="Batafsil ko'rish"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
