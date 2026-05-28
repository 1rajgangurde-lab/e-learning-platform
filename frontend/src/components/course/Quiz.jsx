import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

const Quiz = ({ questions = [] }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  // Mock questions if none provided
  const data = questions.length > 0 ? questions : [
    {
      question: "What is the primary purpose of a React Component?",
      options: ["To style the DOM", "To manage backend state", "To encapsulate reusable UI logic", "To connect to databases"],
      answer: 2
    },
    {
      question: "Which hook is used for side effects in React?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      answer: 1
    }
  ];

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    if (idx === data[currentIdx].answer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < data.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  const isComplete = showResult && currentIdx === data.length - 1;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
      <div className="mb-6 flex justify-between items-center text-sm font-medium text-slate-500">
        <span>Question {currentIdx + 1} of {data.length}</span>
        {isComplete && <span className="text-primary font-bold">Score: {score}/{data.length}</span>}
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
        {data[currentIdx].question}
      </h3>

      <div className="space-y-3">
        {data[currentIdx].options.map((opt, idx) => {
          const isCorrect = showResult && idx === data[currentIdx].answer;
          const isWrong = showResult && selected === idx && idx !== data[currentIdx].answer;

          return (
            <motion.button
              key={idx}
              whileHover={!showResult ? { scale: 1.01 } : {}}
              whileTap={!showResult ? { scale: 0.99 } : {}}
              onClick={() => handleSelect(idx)}
              disabled={showResult}
              className={cn(
                "w-full p-4 rounded-xl border text-left flex justify-between items-center transition-colors",
                !showResult && "border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 text-slate-700 dark:text-slate-300",
                isCorrect && "border-green-500 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300",
                isWrong && "border-red-500 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300",
                showResult && !isCorrect && !isWrong && "border-slate-200 dark:border-slate-800 opacity-50 text-slate-500"
              )}
            >
              <span>{opt}</span>
              {isCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
              {isWrong && <XCircle className="w-5 h-5 text-red-500" />}
            </motion.button>
          );
        })}
      </div>

      {showResult && !isComplete && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleNext}
          className="mt-6 w-full py-3 bg-primary text-white font-medium rounded-xl flex justify-center items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          Next Question <ArrowRight className="w-4 h-4" />
        </motion.button>
      )}

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-center border border-blue-100 dark:border-blue-900/50"
        >
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Quiz Completed!</h4>
          <p className="text-slate-600 dark:text-slate-400 mb-4">You scored {score} out of {data.length}. Keep learning to improve your score.</p>
          <button className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Continue Course
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Quiz;
