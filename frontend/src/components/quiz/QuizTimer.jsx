import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const QuizTimer = ({ timeLimit, onTimeUp, isPaused }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    if (timeLimit <= 0 || isPaused) return;
    
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, timeLimit, isPaused, onTimeUp]);

  if (timeLimit <= 0) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  const isUrgent = timeLeft < 60; // Less than 1 minute

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono font-bold ${
      isUrgent ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 animate-pulse' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
    }`}>
      <Clock className="w-5 h-5" />
      <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
    </div>
  );
};

export default QuizTimer;
