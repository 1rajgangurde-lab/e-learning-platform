import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, BookOpen, Award, User, Briefcase, 
  Settings, Users, FileText, BarChart, PlusCircle, Lightbulb, CheckSquare, DollarSign, CreditCard, Shield
} from 'lucide-react';
import { ROLES } from '../../utils/constants';

const Sidebar = () => {
  const { user } = useAuth();

  const getLinks = () => {
    switch (user?.role) {
      case ROLES.STUDENT:
        return [
          { name: 'Dashboard', path: '/student/dashboard', icon: LayoutDashboard },
          { name: 'My Courses', path: '/student/my-courses', icon: BookOpen },
          { name: 'AI Study Tools', path: '/student/ai', icon: Lightbulb },
          { name: 'Achievements', path: '/student/achievements', icon: Award },
          { name: 'Portfolio', path: '/student/portfolio', icon: Briefcase },
          { name: 'Profile', path: '/student/profile', icon: User },
        ];
      case ROLES.INSTRUCTOR:
        return [
          { name: 'Dashboard', path: '/instructor/dashboard', icon: LayoutDashboard },
          { name: 'My Courses', path: '/instructor/courses', icon: BookOpen },
          { name: 'Create Course', path: '/instructor/create-course', icon: PlusCircle },
          { name: 'Analytics', path: '/instructor/analytics', icon: BarChart },
          { name: 'Revenue', path: '/instructor/revenue', icon: DollarSign },
          { name: 'Payouts', path: '/instructor/payouts', icon: CreditCard },
          { name: 'Profile', path: '/instructor/profile', icon: User },
        ];
      case ROLES.ADMIN:
        return [
          { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
          { name: 'Users', path: '/admin/users', icon: Users },
          { name: 'Moderation', path: '/admin/moderation', icon: Shield },
          { name: 'Reports', path: '/admin/reports', icon: FileText },
          { name: 'Settings', path: '/admin/settings', icon: Settings },
        ];
      default:
        return [];
    }
  };

  const links = getLinks();

  return (
    <aside className="w-64 bg-[#0F172A]/80 backdrop-blur-xl border-r border-white/5 min-h-[calc(100vh-4rem)] p-4 flex flex-col gap-2 transition-all">
      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-3">Menu</div>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium ${
                isActive 
                  ? 'bg-blue-500/10 text-blue-400 shadow-[inset_2px_0_0_0_rgba(59,130,246,1)]' 
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
              }`
            }
          >
            <Icon className="w-5 h-5" />
            {link.name}
          </NavLink>
        );
      })}
    </aside>
  );
};

export default Sidebar;
