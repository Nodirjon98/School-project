import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { BookOpen, Clock, Calendar, FileText, Download, CheckCircle2 } from 'lucide-react';

export const LessonsPage: React.FC = () => {
  const { t } = useLanguage();
  const { lessons, groups } = useLMSData();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          {t('lessons')}
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Dars jadvali, o'rganilgan mavzular va yuklab olinadigan qo'shimcha materiallar
        </p>
      </div>

      <div className="space-y-4">
        {lessons.map((lesson, idx) => (
          <div 
            key={lesson.id}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-blue-600 text-sm shrink-0">
                #{idx + 1}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-bold text-slate-900">{lesson.title}</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    O'tildi
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-2">{lesson.topic}</p>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(lesson.lesson_date || lesson.date || Date.now()).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    18:30 - 20:00
                  </span>
                  <span>O'qituvchi: Malika Karimova</span>
                </div>
              </div>
            </div>

            {lesson.materials_name && (
              <div className="flex items-center gap-2 self-end sm:self-center">
                <a
                  href={lesson.materials_url || '#'}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Material yuklab olinmoqda: ${lesson.materials_name}`);
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs transition border border-blue-200"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{lesson.materials_name}</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
