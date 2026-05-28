import React from 'react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import GlassCard from '../../components/ui/GlassCard';
import DashboardCard from '../../components/dashboard/DashboardCard';
import XPProgressBar from '../../components/student/XPProgressBar';
import LearningTimeline from '../../components/student/LearningTimeline';
import CourseCompletionChart from '../../components/student/CourseCompletionChart';
import WeeklyXPChart from '../../components/student/WeeklyXPChart';
import GoalTracker from '../../components/student/GoalTracker';
import LearningCalendar from '../../components/student/LearningCalendar';
import AchievementTimeline from '../../components/student/AchievementTimeline';
import CertificateShowcase from '../../components/student/CertificateShowcase';
import ContinueLearningCard from '../../components/dashboard/ContinueLearningCard';
import { BookOpen, Trophy, Clock, Award } from 'lucide-react';

const StudentDashboard = () => {
  return (
    <ThemeLayout hideParticles={false}>
      <div className="space-y-8 max-w-7xl mx-auto pb-12">
        {/* Top Welcome & XP Area */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl pointer-events-none" />
            <GlassCard className="relative z-10 h-full p-8 border-slate-700/50 bg-gradient-to-br from-slate-900/90 to-[#0F172A]/90 flex flex-col justify-center overflow-hidden group">
              <div className="absolute -right-12 -top-12 opacity-10 group-hover:opacity-20 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                <BookOpen className="w-64 h-64 text-blue-500" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Learner</span> 👋</h1>
              <p className="text-slate-400 mb-8 max-w-md text-lg">You're making incredible progress. Stay focused and reach your weekly learning goals.</p>
              
              <div className="mt-auto">
                <XPProgressBar currentXP={3450} nextLevelXP={5000} level={12} />
              </div>
            </GlassCard>
          </div>
          
          <div className="space-y-6 flex flex-col">
            <GoalTracker current={4} target={5} />
            <CertificateShowcase />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <DashboardCard title="Total Courses" value="12" icon={BookOpen} colorClass="text-blue-400" />
          <DashboardCard title="Completed" value="8" icon={Trophy} colorClass="text-green-400" />
          <DashboardCard title="Hours Learned" value="142" icon={Clock} colorClass="text-purple-400" />
          <DashboardCard title="Certificates" value="5" icon={Award} colorClass="text-yellow-400" />
        </div>

        {/* Charts & Analytics */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <WeeklyXPChart />
            
            <div className="grid md:grid-cols-2 gap-6">
              <CourseCompletionChart />
              <LearningCalendar />
            </div>

            {/* Continue Learning */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Continue Learning</h2>
              </div>
              <ContinueLearningCard />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <AchievementTimeline />
            <LearningTimeline />
          </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default StudentDashboard;
