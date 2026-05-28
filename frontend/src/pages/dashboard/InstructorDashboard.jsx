import React from 'react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import { useInstructorDashboard } from '../../hooks/useDashboard';
import { useAnalytics as useInstructorAnalytics } from '../../hooks/useAnalytics';
import DashboardCard from '../../components/dashboard/DashboardCard';
import RevenueChart from '../../components/instructor/RevenueChart';
import QuickActionPanel from '../../components/dashboard/QuickActionPanel';
import StudentInsights from '../../components/instructor/StudentInsights';
import PayoutCard from '../../components/instructor/PayoutCard';
import { Users, BookOpen, DollarSign, Star, TrendingUp, UserCheck, Activity, Award } from 'lucide-react';

const InstructorDashboard = () => {
  const { data: stats, isLoading: statsLoading } = useInstructorDashboard();
  const { data: analytics, isLoading: analyticsLoading } = useInstructorAnalytics('instructor');

  if (statsLoading || analyticsLoading) return <div className="p-8 text-center text-slate-500">Loading Dashboard...</div>;

  return (
    <ThemeLayout hideParticles={false}>
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Instructor Dashboard</h1>
        <p className="text-slate-400">Manage your courses, students, and revenue.</p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <DashboardCard title="Total Students" value={stats?.totalStudents || 1240} icon={Users} colorClass="text-blue-400" />
        <DashboardCard title="Published Courses" value={stats?.publishedCourses || 4} icon={BookOpen} colorClass="text-purple-400" />
        <DashboardCard title="Total Revenue" value={`$${stats?.revenue || '12,400'}`} icon={DollarSign} colorClass="text-emerald-400" />
        <DashboardCard title="Average Rating" value={stats?.averageRating || '4.8'} icon={Star} colorClass="text-yellow-400" />
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <DashboardCard title="Course Completion" value={`${stats?.courseCompletion}%`} icon={Award} colorClass="bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400" />
        <DashboardCard title="Student Retention" value={`${stats?.studentRetention}%`} icon={UserCheck} colorClass="bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" />
        <DashboardCard title="Assignments to Grade" value={stats?.assignmentReviews} icon={Activity} colorClass="bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" />
        <DashboardCard title="Pending Approvals" value={stats?.pendingApprovals} icon={TrendingUp} colorClass="bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <RevenueChart />
          
          <div className="grid md:grid-cols-2 gap-6">
            <StudentInsights />
            <PayoutCard />
          </div>
        </div>

        <div className="space-y-8">
          <QuickActionPanel />
        </div>
      </div>
    </div>
    </ThemeLayout>
  );
};

export default InstructorDashboard;
