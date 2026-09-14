import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  Group, Lesson, Attendance, Homework, HomeworkSubmission, 
  DailyWord, WordProgress, ChampionshipScore, Badge, AIContent, AttendanceStatus,
  GrammarExam, GrammarExamSubmission
} from '../types';
import { 
  SEED_GROUPS, SEED_LESSONS, SEED_HOMEWORK, SEED_SUBMISSIONS, 
  SEED_DAILY_WORDS, SEED_WORD_PROGRESS, SEED_CHAMPIONSHIP, SEED_BADGES
} from '../lib/seedData';
import { SEED_GRAMMAR_EXAMS } from '../data/seedGrammarExams';
import { getStorageItem, setStorageItem } from '../lib/storage';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { useAuth } from './AuthContext';
import { playSound } from '../lib/sound';
import { realtime } from '../lib/realtime';

interface LMSDataContextType {
  groups: Group[];
  lessons: Lesson[];
  attendance: Attendance[];
  homeworks: Homework[];
  submissions: HomeworkSubmission[];
  dailyWords: DailyWord[];
  wordProgress: WordProgress[];
  championshipScores: ChampionshipScore[];
  badges: Badge[];
  aiContents: AIContent[];
  grammarExams: GrammarExam[];
  examSubmissions: GrammarExamSubmission[];
  loading: boolean;
  
  // Actions
  addGroup: (newGroup: Omit<Group, 'id' | 'created_at'>) => Promise<void>;
  createGroup: (newGroup: Omit<Group, 'id' | 'created_at'>) => Promise<void>;
  addLesson: (newLesson: Omit<Lesson, 'id' | 'created_at'>) => Promise<void>;
  createLesson: (newLesson: Omit<Lesson, 'id' | 'created_at'>) => Promise<void>;
  completeLesson: (lessonId: string) => Promise<void>;
  markAttendance: (lessonId: string, studentId: string, status: AttendanceStatus, note?: string) => Promise<void>;
  createHomework: (hw: Omit<Homework, 'id' | 'created_at'>) => Promise<void>;
  submitHomework: (submission: Omit<HomeworkSubmission, 'id' | 'submitted_at'>) => Promise<void>;
  gradeHomework: (submissionId: string, score: number, feedback: string) => Promise<void>;
  gradeSubmission: (submissionId: string, score: number, feedback: string) => Promise<void>;
  addDailyWord: (word: Omit<DailyWord, 'id' | 'created_at'>) => Promise<void>;
  updateWordReview: (wordId: string, remembered: boolean) => Promise<void>;
  createGrammarExam: (exam: Omit<GrammarExam, 'id' | 'createdAt'>) => Promise<GrammarExam>;
  deleteGrammarExam: (examId: string) => Promise<void>;
  submitGrammarExam: (submission: Omit<GrammarExamSubmission, 'id' | 'submittedAt'>) => Promise<void>;
  addXP: (amount: number, reason?: string) => void;
  awardXp: (amount: number, reason?: string) => void;
  awardBadge: (badgeKey: string, title: string, description: string, icon: string) => void;
  saveAIContent: (content: Omit<AIContent, 'id' | 'created_at' | 'updated_at'>) => Promise<void>;
  resetSeason: () => void;
}

const LMSDataContext = createContext<LMSDataContextType | undefined>(undefined);

export const LMSDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { profile, updateProfile } = useAuth();

  const [groups, setGroups] = useState<Group[]>(() => getStorageItem('premier_groups', SEED_GROUPS));
  const [lessons, setLessons] = useState<Lesson[]>(() => getStorageItem('premier_lessons', SEED_LESSONS));
  const [attendance, setAttendance] = useState<Attendance[]>(() => getStorageItem('premier_attendance', []));
  const [homeworks, setHomeworks] = useState<Homework[]>(() => getStorageItem('premier_homeworks', SEED_HOMEWORK));
  const [submissions, setSubmissions] = useState<HomeworkSubmission[]>(() => getStorageItem('premier_submissions', SEED_SUBMISSIONS));
  const [dailyWords, setDailyWords] = useState<DailyWord[]>(() => getStorageItem('premier_daily_words', SEED_DAILY_WORDS));
  const [wordProgress, setWordProgress] = useState<WordProgress[]>(() => getStorageItem('premier_word_progress', SEED_WORD_PROGRESS));
  const [championshipScores, setChampionshipScores] = useState<ChampionshipScore[]>(() => getStorageItem('premier_championship', SEED_CHAMPIONSHIP));
  const [badges, setBadges] = useState<Badge[]>(() => getStorageItem('premier_badges', SEED_BADGES));
  const [aiContents, setAIContents] = useState<AIContent[]>(() => getStorageItem('premier_ai_contents', []));
  const [grammarExams, setGrammarExams] = useState<GrammarExam[]>(() => getStorageItem('premier_grammar_exams', SEED_GRAMMAR_EXAMS));
  const [examSubmissions, setExamSubmissions] = useState<GrammarExamSubmission[]>(() => getStorageItem('premier_grammar_submissions', []));
  const [loading, setLoading] = useState(false);

  // Persistence side-effects
  useEffect(() => { setStorageItem('premier_groups', groups); }, [groups]);
  useEffect(() => { setStorageItem('premier_lessons', lessons); }, [lessons]);
  useEffect(() => { setStorageItem('premier_attendance', attendance); }, [attendance]);
  useEffect(() => { setStorageItem('premier_homeworks', homeworks); }, [homeworks]);
  useEffect(() => { setStorageItem('premier_submissions', submissions); }, [submissions]);
  useEffect(() => { setStorageItem('premier_daily_words', dailyWords); }, [dailyWords]);
  useEffect(() => { setStorageItem('premier_word_progress', wordProgress); }, [wordProgress]);
  useEffect(() => { setStorageItem('premier_championship', championshipScores); }, [championshipScores]);
  useEffect(() => { setStorageItem('premier_badges', badges); }, [badges]);
  useEffect(() => { setStorageItem('premier_ai_contents', aiContents); }, [aiContents]);
  useEffect(() => { setStorageItem('premier_grammar_exams', grammarExams); }, [grammarExams]);
  useEffect(() => { setStorageItem('premier_grammar_submissions', examSubmissions); }, [examSubmissions]);

  // Sync with Supabase on mount if configured
  useEffect(() => {
    if (isSupabaseConfigured && supabase) {
      setLoading(true);
      Promise.all([
        supabase.from('groups').select('*'),
        supabase.from('lessons').select('*'),
        supabase.from('homeworks').select('*'),
        supabase.from('homework_submissions').select('*'),
        supabase.from('attendance').select('*'),
        supabase.from('daily_words').select('*')
      ]).then(([gRes, lRes, hRes, sRes, aRes, wRes]) => {
        if (gRes.data && gRes.data.length > 0) setGroups(gRes.data as Group[]);
        if (lRes.data && lRes.data.length > 0) setLessons(lRes.data as Lesson[]);
        if (hRes.data && hRes.data.length > 0) setHomeworks(hRes.data as Homework[]);
        if (sRes.data && sRes.data.length > 0) setSubmissions(sRes.data as HomeworkSubmission[]);
        if (aRes.data && aRes.data.length > 0) setAttendance(aRes.data as Attendance[]);
        if (wRes.data && wRes.data.length > 0) setDailyWords(wRes.data as DailyWord[]);
      }).finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  // Update user context for realtime manager
  useEffect(() => {
    realtime.setUserContext(profile?.id, profile?.role);
  }, [profile?.id, profile?.role]);

  // Real-time Event Subscription: updates state instantly without requiring a page refresh
  useEffect(() => {
    const unsubscribe = realtime.subscribe((event) => {
      if (event.type === 'ATTENDANCE_MARKED' && event.data) {
        const { lessonId, studentId, status, note } = event.data;
        setAttendance(prev => {
          const idx = prev.findIndex(a => a.lesson_id === lessonId && a.student_id === studentId);
          if (idx >= 0) {
            const next = [...prev];
            next[idx] = { ...next[idx], status, note };
            return next;
          } else {
            return [{
              id: `att-${Date.now()}`,
              lesson_id: lessonId,
              student_id: studentId,
              status,
              note,
              created_at: new Date().toISOString()
            }, ...prev];
          }
        });
      } else if (event.type === 'HOMEWORK_SUBMITTED' && event.data?.submission) {
        const sub = event.data.submission as HomeworkSubmission;
        setSubmissions(prev => [sub, ...prev.filter(s => s.id !== sub.id)]);
      } else if (event.type === 'HOMEWORK_GRADED' && event.data) {
        const { submissionId, score, feedback, gradedBy } = event.data;
        setSubmissions(prev => prev.map(s => s.id === submissionId ? {
          ...s,
          score,
          feedback,
          status: 'graded',
          graded_at: new Date().toISOString(),
          graded_by: gradedBy
        } : s));
      } else if (event.type === 'NEW_HOMEWORK' && event.data?.homework) {
        const hw = event.data.homework as Homework;
        setHomeworks(prev => [hw, ...prev.filter(h => h.id !== hw.id)]);
      } else if (event.type === 'LESSON_COMPLETED' && event.data?.lessonId) {
        // Mark lesson attendance or status
      } else if (event.type === 'EXAM_PUBLISHED' && event.data?.exam) {
        const ex = event.data.exam as GrammarExam;
        setGrammarExams(prev => [ex, ...prev.filter(e => e.id !== ex.id)]);
      } else if (event.type === 'EXAM_COMPLETED' && event.data?.submission) {
        const sub = event.data.submission as GrammarExamSubmission;
        setExamSubmissions(prev => [sub, ...prev.filter(s => s.id !== sub.id)]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const addXP = useCallback((amount: number, reason?: string) => {
    if (!profile) return;
    const newXP = (profile.xp || 0) + amount;
    updateProfile({ xp: newXP });
    playSound('levelup');

    // Update in championship scores
    setChampionshipScores(prev => {
      const existing = prev.find(cs => cs.student_id === profile.id);
      if (existing) {
        return prev.map(cs => cs.student_id === profile.id ? { ...cs, xp: cs.xp + amount } : cs)
          .sort((a, b) => b.xp - a.xp)
          .map((item, idx) => ({ ...item, rank: idx + 1 }));
      } else {
        const newEntry: ChampionshipScore = {
          id: `cs-${Date.now()}`,
          student_id: profile.id,
          month: new Date().toISOString().slice(0, 7),
          xp: newXP,
          rank: prev.length + 1,
          lessons_attended: 1,
          homeworks_completed: 1,
          group_name: 'Premier Student',
          student: profile
        };
        return [...prev, newEntry].sort((a, b) => b.xp - a.xp).map((item, idx) => ({ ...item, rank: idx + 1 }));
      }
    });
  }, [profile, updateProfile]);

  const awardBadge = useCallback((badgeKey: string, title: string, description: string, icon: string) => {
    if (!profile) return;
    const exists = badges.some(b => b.student_id === profile.id && b.badge_key === badgeKey);
    if (exists) return;

    const newBadge: Badge = {
      id: `badge-${Date.now()}`,
      student_id: profile.id,
      badge_key: badgeKey,
      title,
      description,
      icon,
      awarded_at: new Date().toISOString()
    };
    setBadges(prev => [newBadge, ...prev]);
    addXP(100, `Earned badge: ${title}`);
  }, [profile, badges, addXP]);

  const addGroup = async (newGroup: Omit<Group, 'id' | 'created_at'>) => {
    const item: Group = {
      ...newGroup,
      id: `group-${Date.now()}`,
      created_at: new Date().toISOString(),
      students_count: 0
    };
    setGroups(prev => [item, ...prev]);

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('groups').insert([item]);
      } catch (e) {
        console.warn('Supabase addGroup warning:', e);
      }
    }
  };

  const addLesson = async (newLesson: Omit<Lesson, 'id' | 'created_at'>) => {
    const item: Lesson = {
      ...newLesson,
      id: `lesson-${Date.now()}`,
      created_at: new Date().toISOString(),
    };
    setLessons(prev => [item, ...prev]);

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('lessons').insert([item]);
      } catch (e) {
        console.warn('Supabase addLesson warning:', e);
      }
    }
  };

  const completeLesson = async (lessonId: string) => {
    const targetLesson = lessons.find(l => l.id === lessonId);
    if (!profile) return;
    
    // Reward XP for attending/completing lesson
    addXP(50, `Completed lesson: ${targetLesson?.title || 'English Lesson'}`);

    // Broadcast real-time event to students & teachers
    realtime.publish({
      type: 'LESSON_COMPLETED',
      title: 'Lesson Completed',
      message: `${profile.full_name || 'Student'} completed lesson: "${targetLesson?.title || 'Lesson'}"`,
      actor: { id: profile.id, name: profile.full_name || 'Student', role: profile.role },
      data: { lessonId, lessonTitle: targetLesson?.title, studentId: profile.id }
    });
  };

  const markAttendance = async (lessonId: string, studentId: string, status: AttendanceStatus, note?: string) => {
    const existingIdx = attendance.findIndex(a => a.lesson_id === lessonId && a.student_id === studentId);
    let updated: Attendance[];
    let record: Attendance;
    if (existingIdx >= 0) {
      updated = [...attendance];
      record = { ...updated[existingIdx], status, note };
      updated[existingIdx] = record;
    } else {
      record = {
        id: `att-${Date.now()}`,
        lesson_id: lessonId,
        student_id: studentId,
        status,
        note,
        created_at: new Date().toISOString()
      };
      updated = [record, ...attendance];
    }
    setAttendance(updated);

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('attendance').upsert([record]);
      } catch (e) {
        console.warn('Supabase markAttendance warning:', e);
      }
    }

    const targetLesson = lessons.find(l => l.id === lessonId);

    // Push real-time attendance update instantly
    realtime.publish({
      type: 'ATTENDANCE_MARKED',
      title: 'Attendance Updated',
      message: `Attendance marked as ${status.toUpperCase()} for ${targetLesson?.title || 'Lesson'}`,
      actor: { id: profile?.id || 'teacher', name: profile?.full_name || 'Instructor', role: profile?.role || 'teacher' },
      targetUserId: studentId,
      data: { lessonId, studentId, status, note }
    });
  };

  const createHomework = async (hw: Omit<Homework, 'id' | 'created_at'>) => {
    const item: Homework = {
      ...hw,
      id: `hw-${Date.now()}`,
      created_at: new Date().toISOString()
    };
    setHomeworks(prev => [item, ...prev]);

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('homeworks').insert([item]);
      } catch (e) {
        console.warn('Supabase createHomework warning:', e);
      }
    }

    // Push real-time notification for new homework
    realtime.publish({
      type: 'NEW_HOMEWORK',
      title: 'New Assignment Available',
      message: `New homework "${item.title}" assigned (Due: ${item.due_date})`,
      actor: { id: profile?.id || 'teacher', name: profile?.full_name || 'Teacher', role: profile?.role || 'teacher' },
      data: { homework: item }
    });
  };

  const submitHomework = async (submission: Omit<HomeworkSubmission, 'id' | 'submitted_at'>) => {
    const targetHw = homeworks.find(h => h.id === submission.homework_id);
    const item: HomeworkSubmission = {
      ...submission,
      id: `sub-${Date.now()}`,
      submitted_at: new Date().toISOString(),
      homework_title: targetHw?.title || 'Assignment',
      student_name: profile?.full_name || 'Student',
      max_score: targetHw?.max_score || 100,
    };
    setSubmissions(prev => [item, ...prev.filter(s => s.homework_id !== submission.homework_id)]);
    
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('homework_submissions').upsert([item]);
      } catch (e) {
        console.warn('Supabase submitHomework warning:', e);
      }
    }

    // Reward XP for completing homework!
    addXP(item.score ? Math.round(item.score * 0.5) : 30, 'Submitted homework');

    // Push real-time event to teachers and students
    realtime.publish({
      type: 'HOMEWORK_SUBMITTED',
      title: 'Homework Submitted',
      message: `${profile?.full_name || 'Student'} submitted "${targetHw?.title || 'Assignment'}"`,
      actor: { id: profile?.id || 'student', name: profile?.full_name || 'Student', role: profile?.role || 'student' },
      data: { submission: item, homeworkId: submission.homework_id }
    });
  };

  const gradeHomework = async (submissionId: string, score: number, feedback: string) => {
    const existing = submissions.find(s => s.id === submissionId);
    setSubmissions(prev => prev.map(s => {
      if (s.id === submissionId) {
        return {
          ...s,
          score,
          feedback,
          status: 'graded',
          graded_at: new Date().toISOString(),
          graded_by: profile?.id
        };
      }
      return s;
    }));

    // Automatically reward target student with Championship XP upon teacher grading
    if (existing?.student_id) {
      const earnedXp = Math.round(score * 0.8);
      setChampionshipScores(prev => {
        const studentScore = prev.find(cs => cs.student_id === existing.student_id);
        if (studentScore) {
          return prev.map(cs => cs.student_id === existing.student_id ? { 
            ...cs, 
            xp: cs.xp + earnedXp, 
            homeworks_completed: (cs.homeworks_completed || 0) + 1 
          } : cs)
          .sort((a, b) => b.xp - a.xp)
          .map((item, idx) => ({ ...item, rank: idx + 1 }));
        }
        return prev;
      });
    }

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('homework_submissions').update({
          score,
          feedback,
          status: 'graded',
          graded_at: new Date().toISOString(),
          graded_by: profile?.id
        }).eq('id', submissionId);
      } catch (e) {
        console.warn('Supabase gradeHomework warning:', e);
      }
    }

    // Push real-time event to student
    realtime.publish({
      type: 'HOMEWORK_GRADED',
      title: 'Homework Graded',
      message: `Your assignment "${existing?.homework_title || 'Homework'}" was graded: ${score}/${existing?.max_score || 100}`,
      actor: { id: profile?.id || 'teacher', name: profile?.full_name || 'Instructor', role: profile?.role || 'teacher' },
      targetUserId: existing?.student_id,
      data: { submissionId, score, feedback, gradedBy: profile?.id }
    });
  };

  const addDailyWord = async (word: Omit<DailyWord, 'id' | 'created_at'>) => {
    const item: DailyWord = {
      ...word,
      id: `word-${Date.now()}`,
      created_at: new Date().toISOString()
    };
    setDailyWords(prev => [item, ...prev]);

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('daily_words').insert([item]);
      } catch (e) {
        console.warn('Supabase addDailyWord warning:', e);
      }
    }
  };

  const updateWordReview = async (wordId: string, remembered: boolean) => {
    if (!profile) return;
    setWordProgress(prev => {
      const existing = prev.find(wp => wp.word_id === wordId && wp.student_id === profile.id);
      if (existing) {
        const newBox = remembered ? Math.min(5, existing.box + 1) : 1;
        const mastered = newBox === 5;
        return prev.map(wp => wp.id === existing.id ? {
          ...wp,
          box: newBox,
          mastered,
          reviews_count: wp.reviews_count + 1,
          last_reviewed_at: new Date().toISOString()
        } : wp);
      } else {
        const foundWord = dailyWords.find(w => w.id === wordId);
        const newEntry: WordProgress = {
          id: `wp-${Date.now()}`,
          student_id: profile.id,
          word_id: wordId,
          box: remembered ? 2 : 1,
          next_review_date: new Date().toISOString().split('T')[0],
          reviews_count: 1,
          mastered: false,
          last_reviewed_at: new Date().toISOString(),
          word: foundWord
        };
        return [...prev, newEntry];
      }
    });

    if (remembered) {
      addXP(10, 'Mastered vocabulary word');
      playSound('correct');
    } else {
      playSound('wrong');
    }
  };

  const saveAIContent = async (content: Omit<AIContent, 'id' | 'created_at' | 'updated_at'>) => {
    const item: AIContent = {
      ...content,
      id: `content-${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    setAIContents(prev => [item, ...prev]);
  };

  const createGrammarExam = async (exam: Omit<GrammarExam, 'id' | 'createdAt'>): Promise<GrammarExam> => {
    const newExam: GrammarExam = {
      ...exam,
      id: `exam-${Date.now()}`,
      createdAt: new Date().toISOString(),
      createdBy: profile?.full_name || 'Instructor'
    };
    setGrammarExams(prev => [newExam, ...prev]);

    realtime.publish({
      type: 'EXAM_PUBLISHED',
      title: 'Yangi Grammatika Imtihoni',
      message: `"${newExam.title}" e'lon qilindi (${newExam.durationMinutes} daqiqa, ${newExam.questions.length} ta savol)`,
      actor: { id: profile?.id || 'instructor', name: profile?.full_name || 'Instructor', role: profile?.role || 'teacher' },
      data: { exam: newExam }
    });

    return newExam;
  };

  const deleteGrammarExam = async (examId: string): Promise<void> => {
    setGrammarExams(prev => prev.filter(e => e.id !== examId));
  };

  const submitGrammarExam = async (submission: Omit<GrammarExamSubmission, 'id' | 'submittedAt'>): Promise<void> => {
    const record: GrammarExamSubmission = {
      ...submission,
      id: `exsub-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      studentId: submission.studentId || profile?.id || 'student',
      studentName: submission.studentName || profile?.full_name || 'Student'
    };

    setExamSubmissions(prev => [record, ...prev]);

    if (record.passed) {
      addXP(150, `Passed Grammar Exam: ${record.examTitle}`);
    } else {
      addXP(30, `Completed Grammar Exam: ${record.examTitle}`);
    }

    realtime.publish({
      type: 'EXAM_COMPLETED',
      title: 'Grammatika Imtihoni Topshirildi',
      message: `${record.studentName} "${record.examTitle}" imtihonini ${record.percentage}% bilan ${record.passed ? 'muvaffaqiyatli topshirdi' : 'yakunladi'}`,
      actor: { id: record.studentId, name: record.studentName, role: 'student' },
      data: { submission: record }
    });
  };

  const resetSeason = () => {
    setChampionshipScores(prev => prev.map(cs => ({ ...cs, xp: 0, lessons_attended: 0, homeworks_completed: 0 })));
  };

  return (
    <LMSDataContext.Provider
      value={{
        groups,
        lessons,
        attendance,
        homeworks,
        submissions,
        dailyWords,
        wordProgress,
        championshipScores,
        badges,
        aiContents,
        grammarExams,
        examSubmissions,
        loading,
        addGroup,
        createGroup: addGroup,
        addLesson,
        createLesson: addLesson,
        completeLesson,
        markAttendance,
        createHomework,
        submitHomework,
        gradeHomework,
        gradeSubmission: gradeHomework,
        addDailyWord,
        updateWordReview,
        createGrammarExam,
        deleteGrammarExam,
        submitGrammarExam,
        addXP,
        awardXp: addXP,
        awardBadge,
        saveAIContent,
        resetSeason
      }}
    >
      {children}
    </LMSDataContext.Provider>
  );
};

export function useLMSData() {
  const context = useContext(LMSDataContext);
  if (!context) {
    throw new Error('useLMSData must be used within an LMSDataProvider');
  }
  return context;
}
