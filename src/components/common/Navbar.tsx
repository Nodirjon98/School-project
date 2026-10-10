import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Flame, Zap, LogOut, Menu, User, 
  Award, ShieldCheck, GraduationCap, BookOpen, Camera 
} from 'lucide-react';
import { NotificationBell } from './NotificationBell';
import { ProfilePhotoModal } from '../student/ProfilePhotoModal';

interface NavbarProps {
  onToggleSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const location = useLocation();
  const { profile, role, signOut } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const L = (uz: string, en: string) => (language === 'en' ? en : uz);

  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes('/dashboard')) {
      return role === 'admin' ? L('Boshqaruv paneli', 'Admin overview') : L('Bosh sahifa', 'Home');
    }
    if (path.includes('/lessons')) return L('Darslarim', 'My lessons');
    if (path.includes('/homework')) return L('Uy vazifalari', 'Homework');
    if (path.includes('/daily-words')) return L("Kunlik so'zlar", 'Daily words');
    if (path.includes('/grammar')) return L('Grammatika', 'Grammar');
    if (path.includes('/championship')) return L('Chempionat', 'Championship');
    if (path.includes('/ai-studio')) return L('AI kontent', 'AI content');
    if (path.includes('/attendance')) return L('Davomat', 'Attendance');
    if (path.includes('/groups')) return L('Guruhlar', 'Groups');
    if (path.includes('/words')) return L("Lug'at bazasi", 'Word database');
    if (path.includes('/payments')) return L("To'lovlar", 'Payments');
    if (path.includes('/speaking')) return 'Speaking';
    if (path.includes('/ielts-writing')) return 'IELTS Writing';
    if (path.includes('/placement-test')) return L('Daraja testi', 'Placement test');
    if (path.includes('/achievements')) return L('Yutuqlar', 'Achievements');
    if (path.startsWith('/games/duel')) return 'Duel';
    if (path.startsWith('/games/battle')) return L("So'z jangi", 'Vocab battle');
    if (path.startsWith('/messages')) return L('Xabarlar', 'Messages');
    if (path.startsWith('/admin/leads')) return L('Arizalar', 'Leads');
    if (path.startsWith('/admin/registrations')) return L("Ro'yxatdan o'tganlar", 'Sign-ups');
    if (path.startsWith('/admin/conduct')) return L('Odob va tartib', 'Conduct');
    return 'Premier School';
  };

  const initials = profile?.full_name 
    ? profile.full_name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    : 'PS';

  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 flex-shrink-0 z-20">
      {/* Left side: Mobile Toggle + Page Title + Language Pill */}
      <div className="flex items-center gap-3 sm:gap-6">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition"
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <h1 className="text-sm sm:text-base lg:text-lg font-bold text-slate-800 tracking-tight line-clamp-1">
          {getPageTitle()}
        </h1>

        {/* Segmented Language Switcher (Professional Polish) */}
        <div className="hidden sm:flex bg-slate-100 p-1 rounded-lg border border-slate-200">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 text-xs transition rounded-md ${
              language === 'en'
                ? 'font-bold bg-white shadow-2xs text-slate-800'
                : 'font-semibold text-slate-500 hover:text-slate-700'
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage('uz')}
            className={`px-3 py-1 text-xs transition rounded-md ${
              language === 'uz'
                ? 'font-bold bg-white shadow-2xs text-slate-800'
                : 'font-semibold text-slate-500 hover:text-slate-700'
            }`}
          >
            UZ
          </button>
        </div>
      </div>

      {/* Right side: Gamification Tags, User Capsule */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Mobile Language button */}
        <div className="flex sm:hidden bg-slate-100 p-0.5 rounded-lg border border-slate-200">
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'uz' : 'en')}
            className="px-2 py-1 text-[11px] font-bold bg-white shadow-2xs rounded text-slate-700 uppercase"
          >
            {language}
          </button>
        </div>

        {/* CEFR Level Badge for Student */}
        {role === 'student' && (
          <div className="hidden md:flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100 shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider">{L('Daraja', 'Level')}</span>
            <span className="font-black text-xs">{profile?.level || 'A1'}</span>
          </div>
        )}

        {/* Streak Badge */}
        {role === 'student' && (profile?.streak ?? 0) > 0 && (
          <div 
            className="hidden sm:flex items-center gap-1.5 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200 text-xs font-bold"
            title={L('Ketma-ket faol kunlar', 'Daily streak')}
          >
            <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>{profile?.streak}{L(' kun', 'd')}</span>
          </div>
        )}

        {/* Real-time Notification Bell */}
        <NotificationBell />

        {/* Divider */}
        <div className="w-px h-6 bg-slate-200 mx-1 hidden sm:block"></div>

        {/* User Info & Avatar */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-900 leading-tight">
              {profile?.full_name || ''}
            </p>
            <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
              {role === 'student'
                ? `${L("O'quvchi", 'Student')}${profile?.group_name ? ` · ${profile.group_name}` : ''}`
                : role === 'teacher'
                ? L("O'qituvchi", 'Teacher')
                : 'Administrator'}
            </p>
          </div>

          <div className="relative group">
            <button
              type="button"
              onClick={() => setIsPhotoModalOpen(true)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-xs overflow-hidden bg-indigo-100 flex items-center justify-center font-bold text-slate-700 text-xs sm:text-sm hover:ring-2 hover:ring-indigo-500 transition cursor-pointer"
              title="Profil rasmini o'zgartirish"
            >
              {profile?.avatar_url ? (
                <img 
                  src={profile.avatar_url} 
                  alt={profile.full_name || 'User'} 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <span>{initials}</span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsPhotoModalOpen(true)}
              className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-xs border border-white hover:bg-indigo-700 cursor-pointer"
              title="Rasm yuklash"
            >
              <Camera className="w-2.5 h-2.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => signOut()}
            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition cursor-pointer"
            title={t('logout')}
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      <ProfilePhotoModal 
        isOpen={isPhotoModalOpen} 
        onClose={() => setIsPhotoModalOpen(false)} 
      />
    </header>
  );
};
