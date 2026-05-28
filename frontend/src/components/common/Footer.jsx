import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Globe, Code, Briefcase, MessageCircle } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  // Base classes changes based on route to seamlessly blend with landing page or dashboard
  const bgClass = isHome ? 'bg-slate-950 border-slate-900' : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800';
  const textClass = isHome ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400';
  const headingClass = isHome ? 'text-white' : 'text-slate-900 dark:text-white';
  const linkClass = isHome ? 'hover:text-blue-400' : 'hover:text-primary dark:hover:text-accent';

  return (
    <footer className={`border-t ${bgClass} pt-16 pb-8 transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-blue-500 font-bold text-xl mb-4">
              <BookOpen className="w-6 h-6" />
              <span>AI E-Learning</span>
            </Link>
            <p className={`${textClass} mb-6 max-w-sm`}>
              The premium platform for accelerating your tech career through AI-driven guidance, curated paths, and immersive gamification.
            </p>
            <div className="flex gap-4">
              <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center border ${isHome ? 'border-white/10 hover:bg-white/5 hover:border-white/20 text-slate-300' : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'} transition-all`}><Globe className="w-4 h-4" /></a>
              <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center border ${isHome ? 'border-white/10 hover:bg-white/5 hover:border-white/20 text-slate-300' : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'} transition-all`}><Code className="w-4 h-4" /></a>
              <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center border ${isHome ? 'border-white/10 hover:bg-white/5 hover:border-white/20 text-slate-300' : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'} transition-all`}><Briefcase className="w-4 h-4" /></a>
              <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center border ${isHome ? 'border-white/10 hover:bg-white/5 hover:border-white/20 text-slate-300' : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'} transition-all`}><MessageCircle className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className={`font-bold mb-4 ${headingClass}`}>Platform</h4>
            <ul className={`space-y-3 text-sm ${textClass}`}>
              <li><Link to="/courses" className={`transition-colors ${linkClass}`}>Explore Courses</Link></li>
              <li><Link to="/student/ai" className={`transition-colors ${linkClass}`}>AI Roadmaps</Link></li>
              <li><Link to="/student/portfolio" className={`transition-colors ${linkClass}`}>Portfolio Builder</Link></li>
              <li><Link to="/student/resume" className={`transition-colors ${linkClass}`}>Resume Builder</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-bold mb-4 ${headingClass}`}>Community</h4>
            <ul className={`space-y-3 text-sm ${textClass}`}>
              <li><a href="#" className={`transition-colors ${linkClass}`}>Leaderboard</a></li>
              <li><a href="#" className={`transition-colors ${linkClass}`}>Achievements</a></li>
              <li><a href="#" className={`transition-colors ${linkClass}`}>Discord Server</a></li>
              <li><a href="#" className={`transition-colors ${linkClass}`}>Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-bold mb-4 ${headingClass}`}>Company</h4>
            <ul className={`space-y-3 text-sm ${textClass}`}>
              <li><a href="#" className={`transition-colors ${linkClass}`}>About Us</a></li>
              <li><a href="#" className={`transition-colors ${linkClass}`}>Contact</a></li>
              <li><a href="#" className={`transition-colors ${linkClass}`}>Privacy Policy</a></li>
              <li><a href="#" className={`transition-colors ${linkClass}`}>Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-8" />

        <div className={`text-center text-sm ${textClass}`}>
          <p>© {new Date().getFullYear()} AI E-Learning Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
