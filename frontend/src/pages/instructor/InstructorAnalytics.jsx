import React from 'react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import RevenueChart from '../../components/instructor/RevenueChart';
import StudentInsights from '../../components/instructor/StudentInsights';
import DashboardCard from '../../components/dashboard/DashboardCard';
import { TrendingUp, Users, Star, DollarSign } from 'lucide-react';

const InstructorAnalytics = () => {
  return (
    <ThemeLayout hideParticles={false}>
      <div className="max-w-7xl mx-auto space-y-8 pb-12">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Overview</h1>
          <p className="text-slate-400">Deep dive into your revenue and student engagement metrics.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <DashboardCard title="Monthly Revenue" value="$4,250" icon={DollarSign} colorClass="text-emerald-400" />
          <DashboardCard title="New Enrollments" value="342" icon={Users} colorClass="text-blue-400" />
          <DashboardCard title="Avg Course Rating" value="4.8" icon={Star} colorClass="text-yellow-400" />
          <DashboardCard title="Growth Rate" value="+18%" icon={TrendingUp} colorClass="text-purple-400" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <StudentInsights />
          </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default InstructorAnalytics;
