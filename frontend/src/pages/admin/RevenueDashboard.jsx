import React from 'react';
import { DollarSign, TrendingUp, CreditCard, ShoppingCart, ArrowUpRight } from 'lucide-react';

const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-[#0F172A]/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 ${className}`}>
    {children}
  </div>
);

const RevenueDashboard = () => {
  const stats = [
    { title: 'Monthly Revenue', value: '$124,500', trend: '+15.2%', icon: DollarSign, colorClass: 'text-emerald-500' },
    { title: 'Course Sales', value: '$84,200', trend: '+10.4%', icon: ShoppingCart, colorClass: 'text-blue-500' },
    { title: 'Premium Subscriptions', value: '$40,300', trend: '+22.1%', icon: CreditCard, colorClass: 'text-purple-500' },
    { title: 'Instructor Payouts', value: '$62,400', trend: '+12.5%', icon: TrendingUp, colorClass: 'text-amber-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Revenue Dashboard</h1>
        <p className="text-slate-400">Track platform income, sales, subscriptions, and instructor payouts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <GlassCard key={i} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl bg-slate-800 ${stat.colorClass}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-emerald-400 flex items-center">
                <ArrowUpRight className="w-4 h-4 mr-1" /> {stat.trend}
              </span>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.title}</div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <GlassCard className="lg:col-span-2 h-[400px] flex flex-col">
          <h2 className="text-xl font-bold text-white mb-6">Revenue Growth</h2>
          <div className="flex-1 border border-white/5 border-dashed rounded-xl flex items-center justify-center text-slate-500">
            [ Area Chart: Revenue over 12 Months ]
          </div>
        </GlassCard>

        <GlassCard className="h-[400px] flex flex-col">
          <h2 className="text-xl font-bold text-white mb-6">Revenue Sources</h2>
          <div className="flex-1 border border-white/5 border-dashed rounded-xl flex items-center justify-center text-slate-500">
            [ Pie Chart: Courses vs Premium ]
          </div>
        </GlassCard>
      </div>

      <GlassCard>
        <h2 className="text-xl font-bold text-white mb-6">Top Selling Courses</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 text-sm">
                <th className="pb-3 px-4 font-medium">Course Name</th>
                <th className="pb-3 px-4 font-medium">Instructor</th>
                <th className="pb-3 px-4 font-medium">Sales</th>
                <th className="pb-3 px-4 font-medium">Revenue</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { name: 'Complete React Developer 2026', instructor: 'Sarah Drasner', sales: '1,245', revenue: '$124,500' },
                { name: 'Machine Learning A-Z', instructor: 'Kirill Eremenko', sales: '984', revenue: '$98,400' },
                { name: 'Advanced Node.js', instructor: 'Maximilian', sales: '850', revenue: '$85,000' },
              ].map((course, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 text-white font-medium">{course.name}</td>
                  <td className="py-4 px-4 text-slate-400">{course.instructor}</td>
                  <td className="py-4 px-4 text-slate-300">{course.sales}</td>
                  <td className="py-4 px-4 text-emerald-400 font-medium">{course.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
};

export default RevenueDashboard;
