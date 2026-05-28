import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { BookOpen, LogOut, User } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl border-b bg-[#0F172A]/80 border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-blue-500 font-bold text-xl">
          <BookOpen className="w-6 h-6" />
          <span>AI E-Learning</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 font-medium text-slate-300">
          <Link to="/courses" className="transition-colors hover:text-white">Courses</Link>
          <Link to="/student/ai" className="transition-colors hover:text-white">AI Roadmap</Link>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4 text-slate-300">
              <Link to={`/${user.role.toLowerCase()}/dashboard`} className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white">
                <User className="w-5 h-5" />
                <span className="hidden sm:inline">{user.name}</span>
              </Link>
              <button onClick={logout} className="p-2 transition-colors rounded-full text-slate-400 hover:text-red-400 hover:bg-white/10">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="px-4 py-2 rounded-xl font-medium transition-colors border text-white border-white/20 hover:bg-white/10">Log In</Link>
              <Link to="/register" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
