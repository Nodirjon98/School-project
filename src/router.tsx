import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

// Layout & Guards
import { AppLayout } from './components/layout/AppLayout';
import { ProtectedRoute } from './components/common/ProtectedRoute';

// Lazy Loaded Auth Pages
const Login = lazy(() => import('./pages/auth/Login').then(m => ({ default: m.Login })));
const Signup = lazy(() => import('./pages/auth/Signup').then(m => ({ default: m.Signup })));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword').then(m => ({ default: m.ForgotPassword })));
const StudentOnboarding = lazy(() => import('./pages/onboarding/StudentOnboarding').then(m => ({ default: m.StudentOnboarding })));

// Lazy Loaded Student Pages
const StudentDashboard = lazy(() => import('./pages/student/StudentDashboard').then(m => ({ default: m.StudentDashboard })));
const LessonsPage = lazy(() => import('./pages/student/LessonsPage').then(m => ({ default: m.LessonsPage })));
const HomeworkList = lazy(() => import('./pages/student/HomeworkList').then(m => ({ default: m.HomeworkList })));
const HomeworkSubmit = lazy(() => import('./pages/student/HomeworkSubmit').then(m => ({ default: m.HomeworkSubmit })));
const DailyWordsPage = lazy(() => import('./pages/student/DailyWordsPage').then(m => ({ default: m.DailyWordsPage })));
const GrammarPractice = lazy(() => import('./pages/student/GrammarPractice').then(m => ({ default: m.GrammarPractice })));
const IELTSWritingExaminer = lazy(() => import('./pages/student/IELTSWritingExaminer').then(m => ({ default: m.IELTSWritingExaminer })));
const SpeakingPractice = lazy(() => import('./pages/student/SpeakingPractice').then(m => ({ default: m.SpeakingPractice })));
const PlacementTestPage = lazy(() => import('./pages/student/PlacementTestPage').then(m => ({ default: m.PlacementTestPage })));
const ReadingCurriculumPage = lazy(() => import('./pages/student/ReadingCurriculumPage').then(m => ({ default: m.ReadingCurriculumPage })));
const RealWorldReadingPage = lazy(() => import('./pages/student/RealWorldReadingPage').then(m => ({ default: m.RealWorldReadingPage })));
const VocabContestPage = lazy(() => import('./pages/student/VocabContestPage').then(m => ({ default: m.VocabContestPage })));
const ToeflEssaysPage = lazy(() => import('./pages/student/ToeflEssaysPage').then(m => ({ default: m.ToeflEssaysPage })));
const TacticsForListeningPage = lazy(() => import('./pages/student/TacticsForListeningPage').then(m => ({ default: m.TacticsForListeningPage })));
const StudentPaymentsPage = lazy(() => import('./pages/student/StudentPaymentsPage').then(m => ({ default: m.StudentPaymentsPage })));
const KaraokePage = lazy(() => import('./pages/student/KaraokePage').then(m => ({ default: m.KaraokePage })));
const PodcastsPage = lazy(() => import('./pages/student/PodcastsPage').then(m => ({ default: m.PodcastsPage })));
const DialoguesPage = lazy(() => import('./pages/student/DialoguesPage').then(m => ({ default: m.DialoguesPage })));
const AchievementsPage = lazy(() => import('./pages/student/AchievementsPage').then(m => ({ default: m.AchievementsPage })));

// Lazy Loaded Teacher Pages
const TeacherDashboard = lazy(() => import('./pages/teacher/TeacherDashboard').then(m => ({ default: m.TeacherDashboard })));
const AttendanceManager = lazy(() => import('./pages/teacher/AttendanceManager').then(m => ({ default: m.AttendanceManager })));
const HomeworkManager = lazy(() => import('./pages/teacher/HomeworkManager').then(m => ({ default: m.HomeworkManager })));
const TacticsListeningManager = lazy(() => import('./pages/teacher/TacticsListeningManager').then(m => ({ default: m.TacticsListeningManager })));
const SpeakingAndVoiceManager = lazy(() => import('./pages/teacher/SpeakingAndVoiceManager').then(m => ({ default: m.SpeakingAndVoiceManager })));

// Lazy Loaded Admin Pages
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const GroupManager = lazy(() => import('./pages/admin/GroupManager').then(m => ({ default: m.GroupManager })));
const DailyWordsManager = lazy(() => import('./pages/admin/DailyWordsManager').then(m => ({ default: m.DailyWordsManager })));
const PaymentManagementPage = lazy(() => import('./pages/admin/PaymentManagementPage').then(m => ({ default: m.PaymentManagementPage })));
const AdminActivityAnalytics = lazy(() => import('./pages/admin/AdminActivityAnalytics').then(m => ({ default: m.AdminActivityAnalytics })));
const StudentPerformanceAnalytics = lazy(() => import('./pages/admin/StudentPerformanceAnalytics').then(m => ({ default: m.StudentPerformanceAnalytics })));

// Lazy Loaded Shared Pages
const AIContentStudio = lazy(() => import('./pages/shared/AIContentStudio').then(m => ({ default: m.AIContentStudio })));
const Championship = lazy(() => import('./pages/shared/Championship').then(m => ({ default: m.Championship })));

const PageLoader: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center p-8">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Yuklanmoqda...</span>
    </div>
  </div>
);

const HomeRedirect: React.FC = () => {
  const { role, user, profile } = useAuth();
  if (!user && !profile) return <Navigate to="/login" replace />;
  if (role === 'admin') return <Navigate to="/admin/dashboard" replace />;
  if (role === 'teacher') return <Navigate to="/teacher/dashboard" replace />;
  return <Navigate to="/dashboard" replace />;
};

export const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Onboarding Wizard (7 steps) */}
        <Route
          path="/onboarding"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentOnboarding />
            </ProtectedRoute>
          }
        />

        {/* Protected Main App Shell with Sidebar and Navbar */}
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          {/* Default route */}
          <Route path="/" element={<HomeRedirect />} />

          {/* Student Routes */}
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/homework" element={<HomeworkList />} />
          <Route path="/homework/:id" element={<HomeworkSubmit />} />
          <Route path="/daily-words" element={<DailyWordsPage />} />
          <Route path="/curriculum" element={<ReadingCurriculumPage />} />
          <Route path="/reading-curriculum" element={<ReadingCurriculumPage />} />
          <Route path="/real-world-reading" element={<RealWorldReadingPage />} />
          <Route path="/reading-for-the-real-world" element={<RealWorldReadingPage />} />
          <Route path="/toefl-essays" element={<ToeflEssaysPage />} />
          <Route path="/toefl-essays/:topicId" element={<ToeflEssaysPage />} />
          <Route path="/vocab-contest" element={<VocabContestPage />} />
          <Route path="/vocabulary-contest" element={<VocabContestPage />} />
          <Route path="/ielts-writing" element={<IELTSWritingExaminer />} />
          <Route path="/speaking" element={<SpeakingPractice />} />
          <Route path="/listening" element={<TacticsForListeningPage />} />
          <Route path="/tactics-listening" element={<TacticsForListeningPage />} />
          <Route path="/karaoke" element={<KaraokePage />} />
          <Route path="/podcasts" element={<PodcastsPage />} />
          <Route path="/dialogues" element={<DialoguesPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/placement-test" element={<PlacementTestPage />} />
          <Route path="/grammar" element={<GrammarPractice />} />
          <Route path="/student/payments" element={<StudentPaymentsPage />} />

          {/* Teacher Routes */}
          <Route
            path="/teacher/dashboard"
            element={
              <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/listening"
            element={
              <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                <TacticsListeningManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/speaking-hub"
            element={
              <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                <SpeakingAndVoiceManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/groups"
            element={
              <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                <GroupManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/attendance"
            element={
              <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                <AttendanceManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/homework"
            element={
              <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                <HomeworkManager />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/speaking-hub"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <SpeakingAndVoiceManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/groups"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <GroupManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/words"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <DailyWordsManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/payments"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <PaymentManagementPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/activity"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminActivityAnalytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/performance"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <StudentPerformanceAnalytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/performance-analytics"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <StudentPerformanceAnalytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/analytics"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <StudentPerformanceAnalytics />
              </ProtectedRoute>
            }
          />

          {/* Shared Routes */}
          <Route
            path="/ai-studio"
            element={
              <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                <AIContentStudio />
              </ProtectedRoute>
            }
          />
          <Route path="/championship" element={<Championship />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};
