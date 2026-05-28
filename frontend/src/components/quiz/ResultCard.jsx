import React from 'react';
import { useQuizResult } from '../../hooks/useQuiz';
import { CheckCircle, XCircle, Clock, Trophy, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BadgeUnlock from '../gamification/BadgeUnlock';

const ResultCard = ({ attemptId }) => {
  const { data: attempt, isLoading } = useQuizResult(attemptId);
  const navigate = useNavigate();

  if (isLoading) return <div className="p-8 text-center animate-pulse font-medium text-slate-500">Loading Results...</div>;
  if (!attempt) return <div className="p-8 text-center text-red-500">Result not found</div>;

  const { quiz, percentage, score, timeTaken, badgeEarned, passed, xpEarned, wrongAnswers, tabSwitches } = attempt;

  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;
  
  const isPerfect = percentage === 100;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <BadgeUnlock active={badgeEarned !== 'None'} badge={badgeEarned} />
      
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-800 text-center relative overflow-hidden">
        {/* Background Accents */}
        <div className={`absolute -top-32 -left-32 w-64 h-64 rounded-full blur-3xl opacity-20 ${passed ? 'bg-green-500' : 'bg-red-500'}`} />
        <div className={`absolute -bottom-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-20 ${passed ? 'bg-blue-500' : 'bg-red-500'}`} />

        <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2 relative z-10">
          {passed ? 'Congratulations!' : 'Keep Practicing!'}
        </h1>
        <p className="text-slate-500 font-medium mb-10 relative z-10">{quiz?.title}</p>

        {/* Circular Score */}
        <div className="relative w-48 h-48 mx-auto mb-12 z-10">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100 dark:text-slate-800" />
            <circle 
              cx="96" cy="96" r="88" 
              stroke="currentColor" 
              strokeWidth="12" 
              fill="transparent" 
              strokeDasharray={2 * Math.PI * 88}
              strokeDashoffset={2 * Math.PI * 88 * (1 - percentage / 100)}
              className={`${passed ? 'text-green-500' : 'text-red-500'} transition-all duration-1000 ease-out`} 
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-black text-slate-900 dark:text-white">{percentage}%</span>
            <span className="text-sm font-bold text-slate-500 mt-1">Score: {score} pts</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 relative z-10">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
            <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <div className="text-sm text-slate-500 font-medium">Time Taken</div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">{minutes}m {seconds}s</div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
            <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
            <div className="text-sm text-slate-500 font-medium">XP Earned</div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">+{xpEarned}</div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
            <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <div className="text-sm text-slate-500 font-medium">Correct</div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">{(quiz?.questions?.length || 0) - wrongAnswers}</div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
            <XCircle className="w-6 h-6 text-red-500 mx-auto mb-2" />
            <div className="text-sm text-slate-500 font-medium">Wrong</div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">{wrongAnswers}</div>
          </div>
        </div>

        {tabSwitches > 0 && (
          <div className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 p-4 rounded-xl text-sm font-medium mb-8 relative z-10">
            Note: {tabSwitches} tab switches were recorded during this attempt.
          </div>
        )}

        <div className="flex justify-center gap-4 relative z-10">
          <button 
            onClick={() => navigate(-1)} // Go back to course
            className="px-8 py-4 rounded-xl font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            Back to Course
          </button>
          
          <button 
            onClick={() => navigate(`/quiz/${quiz?._id}/review/${attempt?._id}`)}
            className="px-8 py-4 rounded-xl font-bold text-white bg-primary hover:bg-blue-600 flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
          >
            Review Answers <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
