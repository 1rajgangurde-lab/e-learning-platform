import React from 'react';
import { PlayCircle, CheckCircle, Lock } from 'lucide-react';

const LessonAccordion = ({ section, activeLesson, onSelectLesson }) => {
  return (
    <div className="mb-4">
      <h3 className="font-bold text-slate-900 dark:text-white mb-2 px-2">{section.title}</h3>
      <div className="space-y-1">
        {section.lessons.map(lesson => {
          const isActive = activeLesson?._id === lesson._id || activeLesson?.id === lesson.id;
          return (
            <button
              key={lesson._id || lesson.id}
              onClick={() => onSelectLesson(lesson)}
              className={`w-full text-left px-4 py-3 rounded-xl flex items-start gap-3 transition-all duration-300 ${
                isActive 
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.15)]' 
                  : 'hover:bg-slate-800/50 border border-transparent hover:border-slate-700/50 text-slate-300'
              }`}
            >
              {lesson.isCompleted ? (
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]" />
              ) : lesson.isLocked ? (
                <Lock className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
              ) : (
                <PlayCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
              )}
              
              <div className="flex-1 min-w-0">
                <p className={`font-medium text-sm line-clamp-2 ${isActive ? 'text-white' : 'text-slate-300'}`}>{lesson.title}</p>
                <p className={`text-xs mt-1 ${isActive ? 'text-blue-300' : 'text-slate-500'}`}>
                  {lesson.duration}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const LessonSidebar = ({ sections = [], activeLesson, onSelectLesson }) => {
  return (
    <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 shadow-inner rounded-2xl p-4 max-h-[800px] overflow-y-auto custom-scrollbar">
      {sections.map((section, idx) => (
        <LessonAccordion 
          key={idx} 
          section={section} 
          activeLesson={activeLesson} 
          onSelectLesson={onSelectLesson} 
        />
      ))}
    </div>
  );
};

export default LessonSidebar;
