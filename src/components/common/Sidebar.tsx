import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { useInbox } from '../../contexts/InboxContext';
import {
  LayoutDashboard, BookOpen, CheckSquare, Sparkles,
  Trophy, ClipboardCheck, Users, BrainCircuit, BarChart3,
  Layers, Database, X, PenTool, Mic, Award, Swords, FileText, Headphones, CreditCard,
  Music, ShieldCheck, Gamepad2, ChevronDown, Library, Flame, UserPlus, Heart,
  ClipboardList, MessageSquare, Zap
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  /** Unread count shown as a pill (e.g. new sign-ups). */
  count?: number;
}

interface NavSection {
  category: string;
  items: NavItem[];
  /** Collapsible sections start closed unless one of their items is active. */
  collapsible?: boolean;
}

const icon = (Icon: React.ComponentType<{ className?: string }>) => <Icon className="w-4 h-4" />;

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { role, profile } = useAuth();
  const { language } = useLanguage();
  const { newStudentIds } = useLMSData();
  const { unreadTotal, newLeads } = useInbox();
  const location = useLocation();
  const L = (uz: string, en: string) => (language === 'en' ? en : uz);
  const messagesItem: NavItem = { label: L('Xabarlar', 'Messages'), path: '/messages', icon: icon(MessageSquare), count: unreadTotal };

  const isItemActive = (itemPath: string, isExactActive: boolean) => {
    if (isExactActive) return true;
    if (itemPath === '/admin/analytics') {
      return ['/admin/analytics', '/admin/monitoring', '/admin/performance', '/admin/activity']
        .some((p) => location.pathname.startsWith(p));
    }
    return false;
  };

  const libraryItems = (listeningPath: string): NavItem[] => [
    { label: 'Essential Grammar', path: '/essential-grammar', icon: icon(BookOpen) },
    { label: 'Stories for Reproduction', path: '/stories-for-reproduction', icon: icon(BookOpen) },
    { label: '4000 Essential Words', path: '/curriculum', icon: icon(BookOpen) },
    { label: 'Tactics for Listening', path: listeningPath, icon: icon(Headphones) },
    { label: 'Reading for the Real World', path: '/real-world-reading', icon: icon(BookOpen) },
  ];

  const studentSections: NavSection[] = [
    {
      category: L('Asosiy', 'Main'),
      items: [
        { label: L('Bosh sahifa', 'Home'), path: '/dashboard', icon: icon(LayoutDashboard) },
        { label: L('Darslarim', 'My lessons'), path: '/lessons', icon: icon(BookOpen) },
        { label: L('Uy vazifalari', 'Homework'), path: '/homework', icon: icon(CheckSquare) },
        { label: L("Kunlik so'zlar", 'Daily words'), path: '/daily-words', icon: icon(Layers) },
        messagesItem,
      ],
    },
    {
      category: L('Mashq', 'Practice'),
      items: [
        { label: 'Speaking (AI)', path: '/speaking', icon: icon(Mic) },
        { label: 'IELTS Writing', path: '/ielts-writing', icon: icon(PenTool) },
        { label: L('Grammatika imtihonlari', 'Grammar exams'), path: '/student/grammar-exams', icon: icon(Sparkles) },
        { label: L("So'z o'yinlari", 'Word games'), path: '/word-games', icon: icon(Gamepad2) },
        { label: 'Duel', path: '/games/duel', icon: icon(Swords) },
        { label: L('Daraja testi', 'Placement test'), path: '/placement-test', icon: icon(Award) },
      ],
    },
    {
      category: L('Kutubxona', 'Library'),
      collapsible: true,
      items: [
        ...libraryItems('/listening'),
        { label: L('Karaoke va podkastlar', 'Karaoke & podcasts'), path: '/karaoke', icon: icon(Music) },
      ],
    },
    {
      category: L('Natijalar', 'Progress'),
      items: [
        { label: L('Chempionat', 'Championship'), path: '/championship', icon: icon(Trophy) },
        { label: L("So'z bellashuvi", 'Vocab contest'), path: '/vocab-contest', icon: icon(Swords) },
        { label: L('Yutuqlar', 'Achievements'), path: '/achievements', icon: icon(Award) },
        { label: L("To'lovlarim", 'Payments'), path: '/student/payments', icon: icon(CreditCard) },
      ],
    },
  ];

  const teacherSections: NavSection[] = [
    {
      category: L('Asosiy', 'Main'),
      items: [
        { label: L('Bosh sahifa', 'Home'), path: '/teacher/dashboard', icon: icon(LayoutDashboard) },
        { label: L('Guruhlarim', 'My groups'), path: '/teacher/groups', icon: icon(Users) },
        { label: L("Ro'yxatdan o'tganlar", 'Sign-ups'), path: '/admin/registrations', icon: icon(UserPlus), count: newStudentIds.length },
        { label: L('Odob (yurakchalar)', 'Conduct'), path: '/admin/conduct', icon: icon(Heart) },
        { label: L('Davomat', 'Attendance'), path: '/teacher/attendance', icon: icon(ClipboardCheck) },
        { label: L('Uy vazifalari', 'Homework'), path: '/teacher/homework', icon: icon(CheckSquare) },
        { label: L("O'quvchilar nazorati", 'Student monitoring'), path: '/teacher/monitoring', icon: icon(ShieldCheck) },
        messagesItem,
      ],
    },
    {
      category: L('Vositalar', 'Tools'),
      items: [
        { label: L('Grammatika imtihonlari', 'Grammar exams'), path: '/admin/grammar-exams', icon: icon(Sparkles) },
        { label: L('Speaking markazi', 'Speaking hub'), path: '/teacher/speaking-hub', icon: icon(Mic) },
        { label: L('AI kontent', 'AI content'), path: '/ai-studio', icon: icon(BrainCircuit) },
        { label: L('Chempionat', 'Championship'), path: '/championship', icon: icon(Trophy) },
      ],
    },
    {
      category: L("Sinf o'yinlari", 'Class games'),
      items: [
        { label: L("So'z jangi", 'Vocab battle'), path: '/games/battle', icon: icon(Zap) },
        { label: 'Duel', path: '/games/duel', icon: icon(Swords) },
      ],
    },
    {
      category: L('Kutubxona', 'Library'),
      collapsible: true,
      items: [
        ...libraryItems('/teacher/listening'),
        { label: 'TOEFL Essays', path: '/toefl-essays', icon: icon(FileText) },
        { label: L("So'z o'yinlari", 'Word games'), path: '/word-games', icon: icon(Gamepad2) },
        { label: L("So'z bellashuvi", 'Vocab contest'), path: '/vocab-contest', icon: icon(Swords) },
      ],
    },
  ];

  const adminSections: NavSection[] = [
    {
      category: L('Boshqaruv', 'Management'),
      items: [
        { label: L('Bosh sahifa', 'Home'), path: '/admin/dashboard', icon: icon(BarChart3) },
        { label: L('Arizalar', 'Leads'), path: '/admin/leads', icon: icon(ClipboardList), count: newLeads },
        { label: L("Ro'yxatdan o'tganlar", 'Sign-ups'), path: '/admin/registrations', icon: icon(UserPlus), count: newStudentIds.length },
        messagesItem,
        { label: L('Odob (yurakchalar)', 'Conduct'), path: '/admin/conduct', icon: icon(Heart) },
        { label: L('Guruhlar', 'Groups'), path: '/admin/groups', icon: icon(Users) },
        { label: L("To'lovlar", 'Payments'), path: '/admin/payments', icon: icon(CreditCard) },
        { label: L('Analitika', 'Analytics'), path: '/admin/analytics', icon: icon(ShieldCheck) },
      ],
    },
    {
      category: L('Kontent', 'Content'),
      items: [
        { label: L("Lug'at bazasi", 'Word database'), path: '/admin/words', icon: icon(Database) },
        { label: L('Grammatika imtihonlari', 'Grammar exams'), path: '/admin/grammar-exams', icon: icon(Sparkles) },
        { label: L('Speaking markazi', 'Speaking hub'), path: '/admin/speaking-hub', icon: icon(Mic) },
        { label: L('AI kontent', 'AI content'), path: '/ai-studio', icon: icon(BrainCircuit) },
        { label: L('Chempionat', 'Championship'), path: '/championship', icon: icon(Trophy) },
      ],
    },
    {
      category: L("Sinf o'yinlari", 'Class games'),
      items: [
        { label: L("So'z jangi", 'Vocab battle'), path: '/games/battle', icon: icon(Zap) },
        { label: 'Duel', path: '/games/duel', icon: icon(Swords) },
      ],
    },
    {
      category: L('Kutubxona', 'Library'),
      collapsible: true,
      items: [
        ...libraryItems('/teacher/listening'),
        { label: L("So'z o'yinlari", 'Word games'), path: '/word-games', icon: icon(Gamepad2) },
      ],
    },
  ];

  const sections = role === 'admin' ? adminSections : role === 'teacher' ? teacherSections : studentSections;
  const roleLabel = role === 'admin' ? 'Administrator' : role === 'teacher' ? L("O'qituvchi", 'Teacher') : L("O'quvchi", 'Student');

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const sectionHasActive = (sec: NavSection) => sec.items.some((i) => location.pathname === i.path);

  const userXp = profile?.xp ?? 0;
  const xpPercentage = Math.min(100, Math.round(((userXp % 2000) / 2000) * 100));

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-[#0b0c1a] flex flex-col flex-shrink-0 text-slate-300 border-r border-white/5 transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand */}
        <div className="px-5 h-16 flex items-center justify-between border-b border-white/5">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center font-black text-white shadow-lg shadow-violet-500/20">
              P
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-white tracking-tight text-sm">Premier School</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold">{roleLabel}</span>
            </div>
          </NavLink>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 lg:hidden transition"
            aria-label={L('Menyuni yopish', 'Close menu')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-5 overflow-y-auto">
          {sections.map((sec) => {
            const open = !sec.collapsible || openSections[sec.category] || sectionHasActive(sec);
            return (
              <div key={sec.category} className="space-y-0.5">
                {sec.collapsible ? (
                  <button
                    type="button"
                    onClick={() => setOpenSections((s) => ({ ...s, [sec.category]: !open }))}
                    className="w-full flex items-center justify-between px-3 pb-1.5 text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase hover:text-slate-300 transition"
                    aria-expanded={open}
                  >
                    <span className="flex items-center gap-1.5"><Library className="w-3 h-3" /> {sec.category}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <div className="px-3 pb-1.5 text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase">
                    {sec.category}
                  </div>
                )}
                {open && sec.items.map((item) => (
                  <NavLink
                    key={item.path + item.label}
                    to={item.path}
                    onClick={() => {
                      if (window.innerWidth < 1024) onClose();
                    }}
                    className={({ isActive }) => {
                      const active = isItemActive(item.path, isActive);
                      return `relative flex items-center gap-2.5 px-3 py-2 text-[13px] rounded-lg transition-colors ${
                        active
                          ? 'bg-white/[0.07] text-white font-semibold before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-0.5 before:rounded-full before:bg-gradient-to-b before:from-indigo-400 before:to-fuchsia-400'
                          : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-100'
                      }`;
                    }}
                  >
                    {({ isActive }) => (
                      <>
                        <span className={isItemActive(item.path, isActive) ? 'text-indigo-300' : 'opacity-70'}>{item.icon}</span>
                        <span className="truncate">{item.label}</span>
                        {!!item.count && (
                          <span className="ml-auto rounded-full bg-fuchsia-500 px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
                            {item.count > 99 ? '99+' : item.count}
                          </span>
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            );
          })}
        </nav>

        {role === 'student' && (
          <div className="m-3 p-4 rounded-2xl border border-white/5 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold text-slate-400">{L('Oylik XP', 'Monthly XP')}</span>
              <span className="flex items-center gap-1 text-xs font-bold text-amber-300">
                <Flame className="w-3.5 h-3.5" /> {userXp.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-300 to-orange-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${xpPercentage}%` }}
              />
            </div>
          </div>
        )}
      </aside>
    </>
  );
};
