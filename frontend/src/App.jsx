import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';

// Static Auth Components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import OTPVerify from './components/auth/OTPVerify';
import ResetPassword from './components/auth/ResetPassword';

import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import { ROLES } from './utils/constants';
import { AnimatePresence, motion } from 'framer-motion';
import { useSplash } from './hooks/useSplash';
import SplashScreen from './components/branding/SplashScreen';
import PageLoader from './components/ui/PageLoader';

// Public Pages (Static)
import Home from './pages/public/Home';
import CourseList from './pages/public/CourseList';
import CourseDetails from './pages/public/CourseDetails';
import PublicProfile from './pages/public/PublicProfile';

// Lazy Loaded Student Dashboards
const AIAssistant = lazy(() => import('./pages/student/AIAssistant'));
const StudentDashboard = lazy(() => import('./pages/dashboard/StudentDashboard'));
const Portfolio = lazy(() => import('./pages/student/Portfolio'));
const ResumeBuilder = lazy(() => import('./pages/student/ResumeBuilder'));
const MyCourses = lazy(() => import('./pages/student/MyCourses'));
const Profile = lazy(() => import('./pages/student/Profile'));
const Certificates = lazy(() => import('./pages/student/Certificates'));
const Achievements = lazy(() => import('./pages/student/Achievements'));
const Wishlist = lazy(() => import('./pages/student/Wishlist'));
const QuizPage = lazy(() => import('./pages/quiz/QuizPage'));
const QuizResultPage = lazy(() => import('./pages/quiz/QuizResultPage'));
const QuizReviewPage = lazy(() => import('./pages/quiz/QuizReviewPage'));

// Lazy Loaded Instructor Dashboards
const InstructorDashboard = lazy(() => import('./pages/dashboard/InstructorDashboard'));
const ManageCourses = lazy(() => import('./pages/instructor/ManageCourses'));
const CourseCreator = lazy(() => import('./pages/instructor/CourseCreator'));
const InstructorAnalytics = lazy(() => import('./pages/instructor/InstructorAnalytics'));
const InstructorProfile = lazy(() => import('./pages/instructor/InstructorProfile'));
const Revenue = lazy(() => import('./pages/instructor/Revenue'));
const Payouts = lazy(() => import('./pages/instructor/Payouts'));

// Lazy Loaded Admin Dashboards
const AdminDashboard = lazy(() => import('./pages/dashboard/AdminDashboard'));
const ManageUsers = lazy(() => import('./pages/admin/ManageUsers'));
const CourseModeration = lazy(() => import('./pages/admin/CourseModeration'));
const SystemReports = lazy(() => import('./pages/admin/SystemReports'));
const PlatformSettings = lazy(() => import('./pages/admin/PlatformSettings'));

// Helper component to redirect /dashboard to specific role dashboard
const DashboardRouter = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return <Navigate to={`/dashboard/${user.role}`} replace />;
};

// App Component
function App() {
  const { showSplash, completeSplash, isReady } = useSplash();

  if (!isReady) return null;

  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={completeSplash} />
        ) : (
          <motion.div key="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full h-full">
            <Router>
              <Suspense fallback={<PageLoader />}>
                <Routes>
            {/* Public Routes with MainLayout */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/verify-otp" element={<OTPVerify />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/user/:username" element={<PublicProfile />} />
            </Route>

            {/* Protected Routes (Authentication Required) */}
            <Route element={<ProtectedRoute />}>
              <Route element={<MainLayout />}>
                <Route path="/courses" element={<CourseList />} />
                <Route path="/courses/:id" element={<CourseDetails />} />
              </Route>
              <Route path="/dashboard" element={<DashboardRouter />} />
            </Route>

            <Route element={<DashboardLayout />}>
              {/* Student Routes */}
              <Route element={<ProtectedRoute allowedRoles={[ROLES.STUDENT]} />}>
                <Route path="/student/dashboard" element={<StudentDashboard />} />
                <Route path="/student/ai" element={<AIAssistant />} />
                <Route path="/student/courses" element={<MyCourses />} />
                <Route path="/student/portfolio" element={<Portfolio />} />
                <Route path="/student/resume" element={<ResumeBuilder />} />
                <Route path="/student/profile" element={<Profile />} />
                <Route path="/student/certificates" element={<Certificates />} />
                <Route path="/student/achievements" element={<Achievements />} />
                <Route path="/student/wishlist" element={<Wishlist />} />
                
                {/* Quiz Routes */}
                <Route path="/quiz/:id" element={<QuizPage />} />
                <Route path="/quiz/:id/result/:attemptId" element={<QuizResultPage />} />
                <Route path="/quiz/:id/review/:attemptId" element={<QuizReviewPage />} />
              </Route>

              {/* Instructor Routes */}
              <Route element={<ProtectedRoute allowedRoles={[ROLES.INSTRUCTOR]} />}>
                <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
                <Route path="/instructor/courses" element={<ManageCourses />} />
                <Route path="/instructor/create-course" element={<CourseCreator />} />
                <Route path="/instructor/analytics" element={<InstructorAnalytics />} />
                <Route path="/instructor/revenue" element={<Revenue />} />
                <Route path="/instructor/payouts" element={<Payouts />} />
                <Route path="/instructor/profile" element={<InstructorProfile />} />
              </Route>

              {/* Admin Routes */}
              <Route element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]} />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/users" element={<ManageUsers />} />
                <Route path="/admin/moderation" element={<CourseModeration />} />
                <Route path="/admin/reports" element={<SystemReports />} />
                <Route path="/admin/settings" element={<PlatformSettings />} />
              </Route>
            </Route>

            <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
              </Suspense>
            </Router>
          </motion.div>
        )}
      </AnimatePresence>
    </AuthProvider>
  );
}

export default App;
