import React from 'react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import { useAdminDashboard } from '../../hooks/useDashboard';
import DashboardCard from '../../components/dashboard/DashboardCard';
import SystemHealthChart from '../../components/admin/SystemHealthChart';
import NotificationPanel from '../../components/dashboard/NotificationPanel';
import { Users, BookOpen, UserCheck, AlertTriangle, Activity, Database, Cpu, Megaphone, Shield } from 'lucide-react';
import { useNotifications } from '../../hooks/useNotifications';

const AdminDashboard = () => {
  const { data: stats, isLoading: statsLoading } = useAdminDashboard();
  const { data: notifications } = useNotifications();

  if (statsLoading) return <div className="p-8 text-center text-slate-500">Loading Dashboard...</div>;

  return (
    <ThemeLayout hideParticles={false}>
      <div className="space-y-8 max-w-7xl mx-auto pb-12">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Control Panel</h1>
          <p className="text-slate-400">Monitor system health, manage users, and view platform analytics.</p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <DashboardCard title="Active Users" value={stats?.activeUsers?.toLocaleString() || '12,450'} icon={Users} colorClass="text-blue-500" />
          <DashboardCard title="New Registrations" value={stats?.newRegistrations || '342'} icon={UserCheck} colorClass="text-purple-500" />
          <DashboardCard title="Total Courses" value={stats?.totalCourses || '485'} icon={BookOpen} colorClass="text-blue-400" />
          <DashboardCard title="Reports Queue" value={stats?.reportsQueue || '14'} icon={AlertTriangle} colorClass="text-amber-500" />
        </div>

        {/* System Health Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <DashboardCard title="System Health" value={`${stats?.systemHealth || '99'}%`} icon={Activity} colorClass="text-emerald-500" />
          <DashboardCard title="Storage Usage" value={`${stats?.storageUsage || '45'}%`} icon={Database} colorClass="text-blue-500" />
          <DashboardCard title="AI Requests" value={stats?.aiRequestsCount?.toLocaleString() || '45,210'} icon={Cpu} colorClass="text-purple-500" />
          <DashboardCard title="Active Alerts" value={stats?.announcements || '3'} icon={Megaphone} colorClass="text-red-500" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <SystemHealthChart />
          </div>

          <div className="space-y-8">
            {/* System Alerts */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 shadow-[0_0_20px_rgba(220,38,38,0.05)]">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-500" /> Security & Alerts
              </h2>
              <NotificationPanel notifications={notifications || []} />
            </div>
          </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default AdminDashboard;
