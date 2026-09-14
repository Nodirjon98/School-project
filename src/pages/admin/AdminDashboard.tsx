import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { 
  Users, BookOpen, CheckSquare, BarChart3, 
  TrendingUp, Award, Building, Sparkles, Plus, ArrowRight 
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { profile } = useAuth();
  const { t } = useLanguage();
  const { groups, homeworks, submissions, dailyWords, students } = useLMSData();

  const unassignedCount = students.filter(s => !s.group_id).length;

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
              to="/admin/performance"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-400 text-slate-950 font-black text-xs hover:bg-emerald-300 transition shadow-sm"
            >
              <TrendingUp className="w-4 h-4" />
              <span>📊 Performance Analytics (Recharts)</span>
            </Link>
            <Link
              to="/admin/activity"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-500 transition shadow-sm"
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
          <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" /> Faol o'quvchilar bazasi
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Faol Guruhlar</span>
            <BookOpen className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{groups.length} ta guruh</div>
          <span className="text-[11px] text-slate-500 font-medium block mt-1">Oybek va Chorsu filiallari</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">O'rtacha Davomat</span>
            <CheckSquare className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">93.8%</div>
          <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" /> Yuqori intizom
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Vazifalar topshirilishi</span>
            <BarChart3 className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">89.2%</div>
          <span className="text-[11px] text-purple-600 font-bold block mt-1">
            {submissions.length} ta tekshirildi
          </span>
        </div>
      </div>

      {/* Grid: Campus & Quick Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Branch / Campus Stats */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-4 h-4 text-blue-600" />
              <span>Filiallar holati (Tashkent)</span>
            </h3>
            <span className="text-xs text-slate-400">2 ta faol bino</span>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Oybek Filiali (Asosiy bino)</h4>
                <p className="text-xs text-slate-500">Mirobod tumani, Oybek ko'chasi 14</p>
                <div className="flex gap-3 text-xs text-slate-600 mt-2">
                  <span>6 ta sinf xonasi</span>
                  <span>•</span>
                  <span>32 o'quvchi</span>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Ochiq (100% quvvat)
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Chorsu Filiali (IELTS Markazi)</h4>
                <p className="text-xs text-slate-500">Shayxontohur tumani, Zarqaynar 3</p>
                <div className="flex gap-3 text-xs text-slate-600 mt-2">
                  <span>4 ta sinf xonasi</span>
                  <span>•</span>
                  <span>16 o'quvchi</span>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Ochiq (75% quvvat)
              </span>
            </div>
          </div>
        </div>

        {/* Recent LMS Events Feed */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
          <h3 className="text-sm font-bold text-slate-900">So'nggi tizim hodisalari</h3>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 flex items-start justify-between">
              <div>
                <span className="font-bold text-blue-950 block">Yangi o'quvchi ro'yxatdan o'tdi</span>
                <span className="text-slate-600">Jasur Rustamov onboarding testini yakunladi (CEFR B2)</span>
              </div>
              <span className="text-[10px] text-slate-400">10 daq avval</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between">
              <div>
                <span className="font-bold text-slate-900 block">Uy vazifasi topshirildi</span>
                <span className="text-slate-600">IELTS Task 2 inshosi Malika Karimova tekshiruviga yuborildi</span>
              </div>
              <span className="text-[10px] text-slate-400">45 daq avval</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between">
              <div>
                <span className="font-bold text-slate-900 block">Davomat saqlandi</span>
                <span className="text-slate-600">IELTS Intensive guruhida 92% qatnashish qayd etildi</span>
              </div>
              <span className="text-[10px] text-slate-400">2 soat avval</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
