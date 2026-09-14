import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  Group, Lesson, Attendance, Homework, HomeworkSubmission, 
  DailyWord, WordProgress, ChampionshipScore, Badge, AIContent, AttendanceStatus,
  GrammarExam, GrammarExamSubmission, Profile, CEFRLevel,
  StudentTelemetryLog, StudentActionEvent, TelemetryModule, ModuleTimeBreakdown
} from '../types';
import { 
  SEED_GROUPS, SEED_LESSONS, SEED_HOMEWORK, SEED_SUBMISSIONS, 
  SEED_DAILY_WORDS, SEED_WORD_PROGRESS, SEED_CHAMPIONSHIP, SEED_BADGES,
  SEED_PROFILES
} from '../lib/seedData';
import { PREMIER_OFFICIAL_STUDENTS } from '../data/premierStudentsData';
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
  students: Profile[];
  telemetryLogs: Record<string, StudentTelemetryLog>;
  actionEvents: StudentActionEvent[];
  loading: boolean;
  
  // Actions
  recordActiveTime: (studentId: string, module: TelemetryModule, activeSeconds: number, idleSeconds: number, currentPage?: string) => void;
  logStudentAction: (event: Omit<StudentActionEvent, 'id' | 'timestamp'>) => void;
  updateStudentTelemetry: (studentId: string, updates: Partial<StudentTelemetryLog>) => void;
  saveTeacherNote: (studentId: string, note: string) => void;
  addGroup: (newGroup: Omit<Group, 'id' | 'created_at'>) => Promise<void>;
  createGroup: (newGroup: Omit<Group, 'id' | 'created_at'>) => Promise<void>;
  updateGroup: (groupId: string, updates: Partial<Omit<Group, 'id' | 'created_at'>>) => Promise<void>;
  deleteGroup: (groupId: string) => Promise<void>;
  assignStudentToGroup: (studentId: string, groupId: string) => Promise<void>;
  removeStudentFromGroup: (studentId: string) => Promise<void>;
  deleteStudent: (studentId: string) => Promise<void>;
  updateStudentProfile: (studentId: string, updates: Partial<Profile>) => Promise<void>;
  registerStudentByAdmin: (studentData: { full_name: string; email: string; phone?: string; level?: CEFRLevel; group_id?: string; password?: string }) => Promise<Profile>;
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
  const [students, setStudents] = useState<Profile[]>(() => {
    const stored = getStorageItem<Profile[]>('premier_all_students', []);
    const deletedIds = new Set(getStorageItem<string[]>('premier_deleted_student_ids', []));
    const map = new Map<string, Profile>();

    // 1. Seed official premier students from real records (36 real students)
    PREMIER_OFFICIAL_STUDENTS.forEach((st) => {
      if (!deletedIds.has(st.id)) {
        map.set(st.id, st);
      }
    });

    // 2. Apply any updates from localStorage (filtering out legacy dummy mock student IDs)
    stored.forEach(r => {
      const isLegacyDummy = 
        r.id.startsWith('user-student-') || 
        r.id.startsWith('user-other-') || 
        (r.id.startsWith('student-') && !r.id.startsWith('student-official-') && !r.id.match(/^student-\d{13}/)) ||
        r.full_name === 'Jasur Rustamov' ||
        r.full_name === 'Nodira Karimova' ||
        r.full_name === 'Bekzod Toshmatov' ||
        r.full_name === 'Alisher Usmonov' ||
        r.full_name === 'Malika Toirova';

      if (r.role === 'student' && !deletedIds.has(r.id) && !isLegacyDummy) {
        const existing = map.get(r.id);
        if (existing) {
          map.set(r.id, { ...existing, ...r });
        } else if (r.id.startsWith('student-official-') || r.id.match(/^student-\d{13}/)) {
          map.set(r.id, r);
        }
      }
    });

    const allStudents = Array.from(map.values());
    if (stored.length !== allStudents.length) {
      setStorageItem('premier_all_students', allStudents);
    }

    return allStudents;
  });

  const [telemetryLogs, setTelemetryLogs] = useState<Record<string, StudentTelemetryLog>>(() => {
    const stored = getStorageItem<Record<string, StudentTelemetryLog>>('premier_student_telemetry', {});
    const cleaned: Record<string, StudentTelemetryLog> = {};
    Object.entries(stored).forEach(([k, v]) => {
      if (v.last_active_label?.includes('oldin') || v.last_active_label === 'Ayni paytda faol') {
        cleaned[k] = {
          ...v,
          online_status: 'offline',
          last_active_at: '',
          last_active_label: 'Hali kirmagan',
          total_active_seconds: 0,
          today_active_seconds: 0,
          weekly_active_seconds: 0,
          idle_paused_seconds: 0,
          verified_tasks_count: 0,
          module_breakdown: {
            stories_seconds: 0,
            vocab_seconds: 0,
            listening_seconds: 0,
            grammar_seconds: 0,
            homework_seconds: 0,
            speaking_seconds: 0,
            other_seconds: 0
          }
        };
      } else {
        cleaned[k] = v;
      }
    });
    return cleaned;
  });
  const [actionEvents, setActionEvents] = useState<StudentActionEvent[]>(() => {
    return getStorageItem<StudentActionEvent[]>('premier_student_action_events', []);
  });

  const [loading, setLoading] = useState(false);

  // Synchronize telemetry records for all official students
  useEffect(() => {
    setTelemetryLogs(prev => {
      let changed = false;
      const next = { ...prev };
      students.forEach((st, idx) => {
        if (!next[st.id]) {
          changed = true;
          next[st.id] = {
            id: `tel-${st.id}`,
            student_id: st.id,
            student_name: st.full_name,
            student_avatar: st.avatar_url,
            group_name: st.group_name || "Guruhga biriktirilmagan",
            group_id: st.group_id,
            phone: st.phone,
            level: st.level || 'B1',
            online_status: 'offline',
            current_page: undefined,
            current_module: undefined,
            device: 'mobile',
            last_active_at: '',
            last_active_label: 'Hali kirmagan',
            total_active_seconds: 0,
            today_active_seconds: 0,
            weekly_active_seconds: 0,
            idle_paused_seconds: 0,
            verified_tasks_count: 0,
            module_breakdown: {
              stories_seconds: 0,
              vocab_seconds: 0,
              listening_seconds: 0,
              grammar_seconds: 0,
              homework_seconds: 0,
              speaking_seconds: 0,
              other_seconds: 0
            },
            risk_level: 'normal',
            risk_reasons: undefined,
            teacher_notes: ''
          };
        } else {
          // Keep student profile data in sync
          if (next[st.id].group_name !== st.group_name || next[st.id].student_name !== st.full_name) {
            changed = true;
            next[st.id] = {
              ...next[st.id],
              student_name: st.full_name,
              group_name: st.group_name || "Guruhga biriktirilmagan",
              group_id: st.group_id
            };
          }
        }
      });
      return changed ? next : prev;
    });
  }, [students]);

  // Automatically keep groups' students_count dynamically in sync with actual assigned students
  useEffect(() => {
    setGroups(prevGroups => {
      let changed = false;
      const updated = prevGroups.map(g => {
        const count = students.filter(s => s.group_id === g.id && s.status !== 'left').length;
        if (g.students_count !== count) {
          changed = true;
          return { ...g, students_count: count };
        }
        return g;
      });
      return changed ? updated : prevGroups;
    });
  }, [students]);

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
  useEffect(() => { setStorageItem('premier_student_telemetry', telemetryLogs); }, [telemetryLogs]);
  useEffect(() => { setStorageItem('premier_student_action_events', actionEvents); }, [actionEvents]);

  // Sync students to storage
  useEffect(() => {
    setStorageItem('premier_all_students', students);
    const registered = getStorageItem<Profile[]>('premier_registered_users', []);
    const updated = [...registered];
    students.forEach(st => {
      const idx = updated.findIndex(u => u.id === st.id || u.email.toLowerCase() === st.email.toLowerCase());
      if (idx >= 0) {
        updated[idx] = { ...updated[idx], ...st };
      } else {
        updated.push(st);
      }
    });
    setStorageItem('premier_registered_users', updated);
  }, [students]);

  // Real-time listener for newly registered students
  useEffect(() => {
    const handleNewReg = (e: any) => {
      const newStudent = e.detail as Profile;
      if (newStudent && newStudent.role === 'student') {
        setStudents(prev => {
          if (prev.some(s => s.id === newStudent.id || s.email.toLowerCase() === newStudent.email.toLowerCase())) {
            return prev;
          }
          return [newStudent, ...prev];
        });
      }
    };
    window.addEventListener('premier:student_registered', handleNewReg);
    return () => window.removeEventListener('premier:student_registered', handleNewReg);
  }, []);

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

  const updateGroup = async (groupId: string, updates: Partial<Omit<Group, 'id' | 'created_at'>>) => {
    setGroups(prev => prev.map(g => {
      if (g.id === groupId) {
        return { ...g, ...updates };
      }
      return g;
    }));

    // If group name is updated, sync it with all students assigned to this group
    if (updates.name) {
      setStudents(prev => prev.map(s => {
        if (s.group_id === groupId) {
          return { ...s, group_name: updates.name };
        }
        return s;
      }));
    }

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('groups').update(updates).eq('id', groupId);
      } catch (e) {
        console.warn('Supabase updateGroup warning:', e);
      }
    }

    playSound('bell');
    realtime.publish({
      type: 'GROUP_UPDATED',
      title: 'Guruh yangilandi',
      message: `"${updates.name || 'Guruh'}" ma'lumotlari muvaffaqiyatli tahrirlandi`,
      actor: { id: profile?.id || 'admin', name: profile?.full_name || 'Admin', role: 'admin' }
    });
  };

  const deleteGroup = async (groupId: string) => {
    const target = groups.find(g => g.id === groupId);
    setGroups(prev => prev.filter(g => g.id !== groupId));

    // Release all students from this deleted group
    setStudents(prev => prev.map(s => {
      if (s.group_id === groupId) {
        return { ...s, group_id: undefined, group_name: undefined };
      }
      return s;
    }));

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('groups').delete().eq('id', groupId);
      } catch (e) {
        console.warn('Supabase deleteGroup warning:', e);
      }
    }

    playSound('pop');
    realtime.publish({
      type: 'GROUP_DELETED',
      title: "Guruh o'chirildi",
      message: `"${target?.name || 'Guruh'}" tizimdan o'chirildi`,
      actor: { id: profile?.id || 'admin', name: profile?.full_name || 'Admin', role: 'admin' }
    });
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

  const assignStudentToGroup = async (studentId: string, groupId: string): Promise<void> => {
    const targetGroup = groups.find(g => g.id === groupId);
    if (!targetGroup) return;

    setStudents(prev => prev.map(s => {
      if (s.id === studentId) {
        return {
          ...s,
          group_id: groupId,
          group_name: targetGroup.name,
          updated_at: new Date().toISOString()
        };
      }
      return s;
    }));

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('profiles').update({
          group_id: groupId,
          updated_at: new Date().toISOString()
        }).eq('id', studentId);
      } catch (e) {
        console.warn('Supabase assign student error:', e);
      }
    }

    playSound('levelup');
    realtime.publish({
      type: 'GROUP_ASSIGNED',
      title: "O'quvchi guruhga biriktirildi",
      message: `O'quvchi muvaffaqiyatli "${targetGroup.name}" guruhiga joylashtirildi.`,
      actor: { id: profile?.id || 'admin', name: profile?.full_name || 'Admin', role: 'admin' }
    });
  };

  const removeStudentFromGroup = async (studentId: string): Promise<void> => {
    setStudents(prev => prev.map(s => {
      if (s.id === studentId) {
        return {
          ...s,
          group_id: undefined,
          group_name: undefined,
          updated_at: new Date().toISOString()
        };
      }
      return s;
    }));

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('profiles').update({
          group_id: null,
          updated_at: new Date().toISOString()
        }).eq('id', studentId);
      } catch (e) {
        console.warn('Supabase remove student error:', e);
      }
    }
  };

  const updateStudentProfile = async (studentId: string, updates: Partial<Profile>): Promise<void> => {
    setStudents(prev => prev.map(s => {
      if (s.id === studentId) {
        return { ...s, ...updates, updated_at: new Date().toISOString() };
      }
      return s;
    }));

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('profiles').update(updates).eq('id', studentId);
      } catch (e) {
        console.warn('Supabase update student profile error:', e);
      }
    }
  };

  const registerStudentByAdmin = async (studentData: {
    full_name: string;
    email: string;
    phone?: string;
    level?: CEFRLevel;
    group_id?: string;
    password?: string;
  }): Promise<Profile> => {
    const targetGroup = studentData.group_id ? groups.find(g => g.id === studentData.group_id) : undefined;
    const newStudent: Profile = {
      id: `usr-${Date.now()}`,
      email: studentData.email.toLowerCase(),
      full_name: studentData.full_name,
      role: 'student',
      phone: studentData.phone || '',
      level: studentData.level || 'B1',
      group_id: studentData.group_id,
      group_name: targetGroup?.name,
      payment_status: 'pending',
      onboarding_completed: true,
      xp: 150,
      streak: 1,
      created_at: new Date().toISOString()
    };

    setStudents(prev => [newStudent, ...prev]);

    const reg = getStorageItem<Profile[]>('premier_registered_users', []);
    setStorageItem('premier_registered_users', [...reg, newStudent]);

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('profiles').upsert([newStudent]);
      } catch (e) {
        console.warn('Supabase registerStudentByAdmin error:', e);
      }
    }

    playSound('levelup');
    return newStudent;
  };

  const deleteStudent = async (studentId: string): Promise<void> => {
    const target = students.find(s => s.id === studentId);

    setStudents(prev => prev.filter(s => s.id !== studentId));

    const registered = getStorageItem<Profile[]>('premier_registered_users', []);
    setStorageItem('premier_registered_users', registered.filter(r => r.id !== studentId && r.email !== target?.email));

    const deletedIds = getStorageItem<string[]>('premier_deleted_student_ids', []);
    if (!deletedIds.includes(studentId)) {
      setStorageItem('premier_deleted_student_ids', [...deletedIds, studentId]);
    }

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('profiles').delete().eq('id', studentId);
      } catch (e) {
        console.warn('Supabase delete student error:', e);
      }
    }

    realtime.publish({
      type: 'GROUP_ASSIGNED',
      title: "O'quvchi o'chirildi",
      message: `${target?.full_name || "O'quvchi"} tizimdan o'chirildi.`,
      actor: { id: profile?.id || 'admin', name: profile?.full_name || 'Admin', role: 'admin' }
    });
  };

  const resetSeason = () => {
    setChampionshipScores(prev => prev.map(cs => ({ ...cs, xp: 0, lessons_attended: 0, homeworks_completed: 0 })));
  };

  const recordActiveTime = useCallback((
    studentId: string, 
    module: TelemetryModule, 
    activeSeconds: number, 
    idleSeconds: number, 
    currentPage?: string
  ) => {
    setTelemetryLogs(prev => {
      const current = prev[studentId];
      if (!current) return prev;

      const updatedModuleBreakdown = { ...current.module_breakdown };
      const key = `${module}_seconds` as keyof ModuleTimeBreakdown;
      if (key in updatedModuleBreakdown) {
        updatedModuleBreakdown[key] = (updatedModuleBreakdown[key] || 0) + activeSeconds;
      }

      return {
        ...prev,
        [studentId]: {
          ...current,
          online_status: activeSeconds > 0 ? 'online' : (idleSeconds > 0 ? 'idle' : current.online_status),
          last_active_at: new Date().toISOString(),
          last_active_label: 'Ayni paytda faol',
          current_page: currentPage || current.current_page,
          current_module: module,
          total_active_seconds: current.total_active_seconds + activeSeconds,
          today_active_seconds: current.today_active_seconds + activeSeconds,
          weekly_active_seconds: current.weekly_active_seconds + activeSeconds,
          idle_paused_seconds: current.idle_paused_seconds + idleSeconds,
          module_breakdown: updatedModuleBreakdown
        }
      };
    });
  }, []);

  const logStudentAction = useCallback((event: Omit<StudentActionEvent, 'id' | 'timestamp'>) => {
    const newEvent: StudentActionEvent = {
      ...event,
      id: `act-ev-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      timestamp: new Date().toISOString()
    };

    setActionEvents(prev => [newEvent, ...prev.slice(0, 199)]);

    if (event.details?.is_verified_productive) {
      setTelemetryLogs(prev => {
        const cur = prev[event.student_id];
        if (!cur) return prev;
        return {
          ...prev,
          [event.student_id]: {
            ...cur,
            verified_tasks_count: cur.verified_tasks_count + 1
          }
        };
      });
    }
  }, []);

  const updateStudentTelemetry = useCallback((studentId: string, updates: Partial<StudentTelemetryLog>) => {
    setTelemetryLogs(prev => {
      const cur = prev[studentId];
      if (!cur) return prev;
      return {
        ...prev,
        [studentId]: { ...cur, ...updates }
      };
    });
  }, []);

  const saveTeacherNote = useCallback((studentId: string, note: string) => {
    updateStudentTelemetry(studentId, { teacher_notes: note });
  }, [updateStudentTelemetry]);

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
        students,
        telemetryLogs,
        actionEvents,
        loading,
        recordActiveTime,
        logStudentAction,
        updateStudentTelemetry,
        saveTeacherNote,
        addGroup,
        createGroup: addGroup,
        updateGroup,
        deleteGroup,
        assignStudentToGroup,
        removeStudentFromGroup,
        deleteStudent,
        updateStudentProfile,
        registerStudentByAdmin,
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
