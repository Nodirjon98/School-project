import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  LayoutDashboard, BookOpen, CheckSquare, Sparkles, 
  Trophy, ClipboardCheck, Users, BrainCircuit, BarChart3, 
  Layers, Database, X, PenTool, Mic, Award, Swords, FileText, Headphones, CreditCard, Clock, TrendingUp, Music, Radio, MessagesSquare 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  badge?: string;
}

interface NavSection {
  category?: string;
  items: NavItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { role, profile } = useAuth();
  const { t } = useLanguage();

  const studentSections: NavSection[] = [
    {
      category: "ASOSIY",
      items: [
        { label: t('dashboard'), path: '/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
        { label: t('lessons'), path: '/lessons', icon: <BookOpen className="w-4 h-4" /> },
        { label: t('homework'), path: '/homework', icon: <CheckSquare className="w-4 h-4" />, badge: 'Due' },
        { label: "Mening To'lovlarim", path: '/student/payments', icon: <CreditCard className="w-4 h-4 text-emerald-400" />, badge: 'Cheklar' },
      ]
    },
    {
      category: "O'QUV DASTURI",
      items: [
        { label: '4000 Words & Reading', path: '/curriculum', icon: <BookOpen className="w-4 h-4 text-emerald-400" />, badge: 'A1-C2' },
        { label: 'Tactics for Listening', path: '/listening', icon: <Headphones className="w-4 h-4 text-sky-400" />, badge: 'Oxford' },
        { label: 'Karaoke & Podkastlar', path: '/karaoke', icon: <Music className="w-4 h-4 text-purple-400" />, badge: 'Audio' },
        { label: 'Reading for Real World', path: '/real-world-reading', icon: <BookOpen className="w-4 h-4 text-indigo-400" /> },
      ]
    },
    {
      category: "AI & AMALIYOT",
      items: [
        { label: 'Speaking w/ Mr. Safoyev', path: '/speaking', icon: <Mic className="w-4 h-4 text-emerald-400" />, badge: 'Live AI' },
        { label: 'IELTS Writing AI', path: '/ielts-writing', icon: <PenTool className="w-4 h-4 text-indigo-400" />, badge: 'Band 9' },
        { label: 'CEFR Diagnostic', path: '/placement-test', icon: <Award className="w-4 h-4 text-amber-400" />, badge: 'Cert' },
      ]
    },
    {
      category: "BELLASHUV & YUTUQLAR",
      items: [
        { label: 'Vocab Contest Arena', path: '/vocab-contest', icon: <Swords className="w-4 h-4 text-amber-400" />, badge: '1v1 Live' },
        { label: t('dailyWords'), path: '/daily-words', icon: <Layers className="w-4 h-4" />, badge: 'SRS' },
        { label: t('championship'), path: '/championship', icon: <Trophy className="w-4 h-4 text-amber-400" /> },
        { label: 'Yutuqlar & Sertifikatlar', path: '/achievements', icon: <Award className="w-4 h-4 text-amber-300" /> },
      ]
    }
  ];

  const teacherSections: NavSection[] = [
    {
      category: "ASOSIY",
      items: [
        { label: t('dashboard'), path: '/teacher/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
        { label: t('myGroups'), path: '/teacher/groups', icon: <Users className="w-4 h-4" /> },
        { label: t('attendance'), path: '/teacher/attendance', icon: <ClipboardCheck className="w-4 h-4" /> },
        { label: t('homework'), path: '/teacher/homework', icon: <CheckSquare className="w-4 h-4" /> },
      ]
    },
    {
      category: "O'QUV MATERIALARI",
      items: [
        { label: '4000 Words Curriculum', path: '/curriculum', icon: <BookOpen className="w-4 h-4 text-emerald-400" />, badge: 'Books 1-6' },
        { label: 'Tactics for Listening', path: '/teacher/listening', icon: <Headphones className="w-4 h-4 text-sky-400" />, badge: '24 Units' },
        { label: 'Reading for Real World', path: '/real-world-reading', icon: <BookOpen className="w-4 h-4 text-indigo-400" /> },
        { label: 'TOEFL 6.0 Essays', path: '/toefl-essays', icon: <FileText className="w-4 h-4 text-indigo-400" /> },
      ]
    },
    {
      category: "AI & BELLASHUV",
      items: [
        { label: 'Speaking & Voice Hub', path: '/teacher/speaking-hub', icon: <Mic className="w-4 h-4 text-emerald-400" />, badge: 'Mr Safoyev' },
        { label: t('aiStudio'), path: '/ai-studio', icon: <BrainCircuit className="w-4 h-4 text-indigo-400" />, badge: 'Gemini 3.8' },
        { label: 'Vocab Contest Arena', path: '/vocab-contest', icon: <Swords className="w-4 h-4 text-amber-400" /> },
        { label: t('championship'), path: '/championship', icon: <Trophy className="w-4 h-4" /> },
      ]
    }
  ];

  const adminSections: NavSection[] = [
    {
      category: "BOSHQARUV & MOLIYA",
      items: [
        { label: t('adminAnalytics'), path: '/admin/dashboard', icon: <BarChart3 className="w-4 h-4" /> },
        { label: "O'zlashtirish Analytics", path: '/admin/performance', icon: <TrendingUp className="w-4 h-4 text-emerald-400" /> },
        { label: "To'lovlar & Kassa", path: '/admin/payments', icon: <CreditCard className="w-4 h-4 text-emerald-400" />, badge: 'Moliya' },
        { label: t('manageGroups'), path: '/admin/groups', icon: <Users className="w-4 h-4" /> },
      ]
    },
    {
      category: "AKADEMIK BAZA",
      items: [
        { label: '4000 Words Curriculum', path: '/curriculum', icon: <BookOpen className="w-4 h-4 text-emerald-400" /> },
        { label: t('manageWords'), path: '/admin/words', icon: <Database className="w-4 h-4" /> },
        { label: 'Tactics for Listening', path: '/teacher/listening', icon: <Headphones className="w-4 h-4 text-sky-400" /> },
        { label: 'Reading for Real World', path: '/real-world-reading', icon: <BookOpen className="w-4 h-4 text-indigo-400" /> },
      ]
    },
    {
      category: "NAZORAT & AI",
      items: [
        { label: "Faoliyat Audit Log", path: '/admin/activity', icon: <Clock className="w-4 h-4 text-indigo-400" /> },
        { label: 'Speaking & Voice Hub', path: '/admin/speaking-hub', icon: <Mic className="w-4 h-4 text-emerald-400" /> },
        { label: t('aiStudio'), path: '/ai-studio', icon: <BrainCircuit className="w-4 h-4 text-indigo-400" /> },
        { label: t('championship'), path: '/championship', icon: <Trophy className="w-4 h-4 text-amber-400" /> },
      ]
    }
  ];

  const sections = role === 'admin' ? adminSections : role === 'teacher' ? teacherSections : studentSections;
  const userXp = profile?.xp || 1240;
  const xpPercentage = Math.min(100, Math.max(15, Math.round(((userXp % 2000) / 2000) * 100)));

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-slate-900 flex flex-col flex-shrink-0 text-slate-300 border-r border-slate-800 transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white shadow-sm">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white tracking-tight text-sm">Premier School</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                LMS • Tashkent
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 lg:hidden transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Portal Role Badge */}
        <div className="px-5 py-2 bg-slate-800/40 border-b border-slate-800/80 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {role.toUpperCase()} PORTAL
          </span>
          <span className="text-[10px] font-semibold text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/60">
            Tashkent Hub
          </span>
        </div>

        {/* Categorized Nav links */}
        <nav className="flex-1 px-3 py-3 space-y-4 overflow-y-auto">
          {sections.map((sec, secIdx) => (
            <div key={sec.category || secIdx} className="space-y-1">
              {sec.category && (
                <div className="px-3 pt-1 pb-1 text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                  {sec.category}
                </div>
              )}
              {sec.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    if (window.innerWidth < 1024) onClose();
                  }}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2 transition-colors text-xs font-medium rounded-lg ${
                      isActive
                        ? 'bg-indigo-600/20 text-indigo-300 font-bold border-l-2 border-indigo-500'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className={isActive ? 'text-indigo-400' : 'opacity-70'}>
                          {item.icon}
                        </span>
                        <span className="truncate">{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className={`text-[9px] px-1.5 py-0.2 rounded font-bold uppercase tracking-wide flex-shrink-0 ${
                          isActive 
                            ? 'bg-indigo-500/30 text-indigo-200 border border-indigo-500/50' 
                            : 'bg-slate-800 text-slate-400 border border-slate-700'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        {/* Monthly XP Widget in Sidebar (Professional Polish) */}
        <div className="p-4 m-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Monthly XP
            </span>
            <span className="text-xs font-bold text-amber-400">
              {userXp.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-amber-400 h-full rounded-full transition-all duration-500" 
              style={{ width: `${xpPercentage}%` }}
            />
          </div>
        </div>
      </aside>
    </>
  );
};
