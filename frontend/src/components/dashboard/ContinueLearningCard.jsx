import React from 'react';
import { PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContinueLearningCard = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg shadow-blue-500/20">
      <div className="relative z-10">
        <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm mb-4 inline-block">Jump Back In</span>
        <h3 className="text-2xl font-bold mb-2">Advanced React Patterns</h3>
        <p className="text-blue-100 text-sm mb-6 max-w-md">You're 45% through. Next up: <strong>Compound Components</strong>.</p>
        
        <Link to="/courses/1" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-sm">
          <PlayCircle className="w-5 h-5" />
          Resume Lesson
        </Link>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/10 blur-3xl rounded-full transform translate-x-1/2"></div>
    </div>
  );
};

export default ContinueLearningCard;
