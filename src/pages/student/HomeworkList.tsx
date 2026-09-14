import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { 
  CheckSquare, Clock, CheckCircle2, AlertCircle, 
  Calendar, FileText, ChevronRight 
} from 'lucide-react';

export const HomeworkList: React.FC = () => {
  const { profile } = useAuth();
  const { t } = useLanguage();
  const { homeworks, submissions } = useLMSData();

  const [filter, setFilter] = useState<'all' | 'pending' | 'submitted'>('all');

  const getSubmission = (hwId: string) => {
    return submissions.find(s => s.homework_id === hwId && s.student_id === profile?.id);
  };

  const filteredHomework = homeworks.filter(hw => {
    const sub = getSubmission(hw.id);
    if (filter === 'pending') return !sub;
    if (filter === 'submitted') return Boolean(sub);
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            {t('homeworkTitle')}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            {t('homeworkSubtitle')}
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 self-start">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              filter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            Barchasi ({homeworks.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('pending')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              filter === 'pending' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            Topshirilmagan
          </button>
          <button
            type="button"
            onClick={() => setFilter('submitted')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              filter === 'submitted' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            Topshirilgan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredHomework.map(hw => {
          const sub = getSubmission(hw.id);
          const isSubmitted = Boolean(sub);
          const isGraded = sub?.status === 'graded';
          const dueDateObj = new Date(hw.due_date);
          const isLate = !isSubmitted && dueDateObj < new Date();

          return (
            <div 
              key={hw.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                    {hw.type.replace('_', ' ')}
                  </span>

                  {isGraded ? (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {sub.score} / {hw.max_score} ball
                    </span>
                  ) : isSubmitted ? (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      Tekshirilmoqda
                    </span>
                  ) : isLate ? (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200">
                      Kechikkan
                    </span>
                  ) : (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      Topshirish kerak
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1">{hw.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                  {hw.description}
                </p>
              </div>

              <div>
                {/* Due Date & Teacher */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Muddat: {dueDateObj.toLocaleDateString()}</span>
                  </div>
                  <span>{hw.teacher_name || 'Malika Karimova'}</span>
                </div>

                {/* Feedback preview if graded */}
                {isGraded && sub.feedback && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 mb-3">
                    <span className="font-bold text-slate-900 block mb-0.5">O'qituvchi izohi:</span>
                    <p className="italic">"{sub.feedback}"</p>
                  </div>
                )}

                <Link
                  to={`/homework/${hw.id}`}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs transition ${
                    isSubmitted
                      ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                  }`}
                >
                  <span>{isSubmitted ? 'Javoblarni ko\'rish' : t('submitHomeworkBtn')}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
