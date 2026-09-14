import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { UserRole } from '../../types';
import { ShieldCheck, GraduationCap, BookOpen } from 'lucide-react';

export const RoleSwitcher: React.FC = () => {
  const { role, switchDemoRole, profile } = useAuth();
  const { t } = useLanguage();

  const roles: { key: UserRole; label: string; icon: React.ReactNode; color: string; desc: string }[] = [
    { 
      key: 'student', 
      label: t('student'), 
      icon: <GraduationCap className="w-3.5 h-3.5" />, 
      color: 'bg-emerald-50 text-emerald-700 border-emerald-300',
      desc: 'Jasur (B2)' 
    },
    { 
      key: 'teacher', 
      label: t('teacher'), 
      icon: <BookOpen className="w-3.5 h-3.5" />, 
      color: 'bg-indigo-50 text-indigo-700 border-indigo-300',
      desc: 'Malika (CELTA)' 
    },
    { 
      key: 'admin', 
      label: t('admin'), 
      icon: <ShieldCheck className="w-3.5 h-3.5" />, 
      color: 'bg-purple-50 text-purple-700 border-purple-300',
      desc: 'Azamat' 
    }
  ];

  return (
    <div className="bg-slate-900 text-white px-3 py-1.5 text-xs flex flex-wrap items-center justify-between border-b border-slate-800 z-50">
      <div className="flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-slate-400 font-medium hidden sm:inline">{t('roleSwitchTitle')}</span>
        <span className="font-semibold text-slate-200">
          {profile?.full_name} ({role.toUpperCase()})
        </span>
      </div>

      <div className="flex items-center gap-1.5">
        {roles.map(r => {
          const isActive = role === r.key;
          return (
            <button
              key={r.key}
              type="button"
              onClick={() => switchDemoRole(r.key)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition text-xs font-semibold border ${
                isActive 
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-xs' 
                  : 'bg-slate-800 text-slate-300 border-slate-700/80 hover:bg-slate-700 hover:text-white'
              }`}
              title={`Switch role to ${r.label}`}
            >
              {r.icon}
              <span>{r.label}</span>
              <span className="text-[10px] opacity-75 hidden md:inline">({r.desc})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
