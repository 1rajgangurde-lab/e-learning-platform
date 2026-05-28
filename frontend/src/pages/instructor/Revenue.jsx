import React from 'react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import RevenueChart from '../../components/instructor/RevenueChart';
import DashboardCard from '../../components/dashboard/DashboardCard';
import { DollarSign, TrendingUp, CreditCard, Activity } from 'lucide-react';

const Revenue = () => {
  return (
    <ThemeLayout hideParticles={false}>
      <div className="max-w-7xl mx-auto space-y-8 pb-12">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Revenue</h1>
          <p className="text-slate-400">Track your earnings and monitor course sales performance.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <DashboardCard title="Total Earnings" value="$12,400" icon={DollarSign} colorClass="text-emerald-400" />
          <DashboardCard title="This Month" value="$4,250" icon={TrendingUp} colorClass="text-blue-400" />
          <DashboardCard title="Pending Clearance" value="$850" icon={Activity} colorClass="text-yellow-400" />
          <DashboardCard title="Next Payout" value="Oct 1" icon={CreditCard} colorClass="text-purple-400" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <RevenueChart />
          </div>
          <div>
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 h-full">
              <h3 className="text-xl font-bold text-white mb-6">Top Earning Courses</h3>
              <div className="space-y-4">
                {[
                  { name: 'React Hooks Mastery', rev: 5400, percent: 45 },
                  { name: 'Node.js Microservices', rev: 3200, percent: 25 },
                  { name: 'Advanced GraphQL', rev: 2800, percent: 20 },
                  { name: 'UI/UX Fundamentals', rev: 1000, percent: 10 },
                ].map((course, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-xl hover:bg-slate-800/50 transition-colors">
                    <div>
                      <p className="font-bold text-slate-200 text-sm">{course.name}</p>
                      <p className="text-xs text-slate-500">{course.percent}% of total</p>
                    </div>
                    <span className="font-bold text-emerald-400">${course.rev.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default Revenue;
