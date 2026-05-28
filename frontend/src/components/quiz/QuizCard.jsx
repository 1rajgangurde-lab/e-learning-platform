import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Target, PlayCircle, Award, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

const QuizCard = ({ quiz }) => {
  const getDifficultyColor = (level) => {
    switch(level) {
      case 'easy': return 'text-green-500 bg-green-50 dark:bg-green-500/10';
      case 'medium': return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-500/10';
      case 'hard': return 'text-red-500 bg-red-50 dark:bg-red-500/10';
      default: return 'text-slate-500 bg-slate-50 dark:bg-slate-500/10';
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getDifficultyColor(quiz.difficulty)}`}>
            {quiz.difficulty}
          </div>
          {quiz.certificateEligible && (
            <div className="flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-md" title="Certificate Eligible">
              <Award className="w-3 h-3" /> Cert
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
          {quiz.title}
        </h3>
        
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2 flex-grow">
          {quiz.description || "Test your knowledge with this quiz."}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <Clock className="w-4 h-4 text-slate-400" />
            <span className="font-medium">{quiz.timeLimit ? `${quiz.timeLimit / 60} mins` : 'No Limit'}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <Target className="w-4 h-4 text-slate-400" />
            <span className="font-medium">{quiz.passingScore}% to pass</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <BrainCircuit className="w-4 h-4 text-slate-400" />
            <span className="font-medium">{quiz.questions?.length || 0} Qs</span>
          </div>
        </div>

        <Link 
          to={`/quiz/${quiz._id}`}
          className="w-full py-3 px-4 rounded-xl font-bold text-white bg-primary hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
        >
          <PlayCircle className="w-5 h-5" /> Start Quiz
        </Link>
      </div>
    </motion.div>
  );
};

export default QuizCard;
