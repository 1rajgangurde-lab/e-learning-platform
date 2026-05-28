import React, { useState, useEffect, useRef } from 'react';
import { useQuiz, useQuizMutations } from '../../hooks/useQuiz';
import { useNavigate } from 'react-router-dom';
import QuestionItem from './QuestionItem';
import QuizTimer from './QuizTimer';
import toast from 'react-hot-toast';
import { AlertTriangle, Send } from 'lucide-react';

const QuizPlayer = ({ quizId }) => {
  const { data: quiz, isLoading } = useQuiz(quizId);
  const { submitQuiz, isSubmitting } = useQuizMutations();
  const navigate = useNavigate();

  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [tabSwitches, setTabSwitches] = useState(0);
  const [status, setStatus] = useState('in_progress'); // in_progress, completed
  const startTimeRef = useRef(Date.now());

  // Anti-Cheat Layer
  useEffect(() => {
    if (!quiz || status !== 'in_progress') return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitches(prev => {
          const newCount = prev + 1;
          toast.error(`Warning: Tab switching detected! (${newCount}/3)`);
          
          if (newCount >= 3) {
            toast.error('Quiz Auto-Submitted due to multiple tab switches.', { duration: 5000 });
            handleAutoSubmit(newCount);
          }
          return newCount;
        });
      }
    };

    window.addEventListener('visibilitychange', handleVisibilityChange);
    return () => window.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [quiz, status]);

  const handleOptionSelect = (questionId, selectedOptions) => {
    setAnswers(prev => {
      const existing = prev.find(a => a.questionId === questionId);
      if (existing) {
        return prev.map(a => a.questionId === questionId ? { ...a, selectedOptions } : a);
      }
      return [...prev, { questionId, selectedOptions }];
    });
  };

  const handleAutoSubmit = async (finalTabSwitches = tabSwitches) => {
    if (status !== 'in_progress') return;
    setStatus('completed');
    
    const timeTaken = Math.floor((Date.now() - startTimeRef.current) / 1000);
    
    try {
      const attempt = await submitQuiz({
        quizId,
        payload: { answers, timeTaken, tabSwitches: finalTabSwitches }
      });
      navigate(`/quiz/${quizId}/result/${attempt._id}`);
    } catch (error) {
      console.error(error);
      setStatus('in_progress'); // Revert if fails
    }
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (confirm('Are you sure you want to submit your quiz?')) {
      handleAutoSubmit(tabSwitches);
    }
  };

  if (isLoading) return <div className="p-8 text-center animate-pulse text-slate-500 font-medium">Loading Quiz...</div>;
  if (!quiz) return <div className="p-8 text-center text-red-500">Quiz not found</div>;

  const currentQuestion = quiz?.questions?.[currentQuestionIndex];
  const currentSelectedOptions = answers.find(a => a.questionId === currentQuestion?._id)?.selectedOptions || [];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Header & Status Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm mb-8 border border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{quiz?.title}</h1>
          <p className="text-sm text-slate-500 font-medium">Question {currentQuestionIndex + 1} of {quiz?.questions?.length || 0}</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {tabSwitches > 0 && (
            <div className="flex items-center gap-1 text-orange-500 bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-lg text-sm font-bold">
              <AlertTriangle className="w-4 h-4" />
              Warnings: {tabSwitches}/3
            </div>
          )}
          <QuizTimer 
            timeLimit={quiz.timeLimit} 
            onTimeUp={() => handleAutoSubmit(tabSwitches)} 
            isPaused={status !== 'in_progress'}
          />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((currentQuestionIndex + 1) / (quiz?.questions?.length || 1)) * 100}%` }}
        />
      </div>

      {/* Question Item */}
      {currentQuestion && (
        <QuestionItem 
          question={currentQuestion}
          index={currentQuestionIndex}
          selectedOptions={currentSelectedOptions}
          onOptionSelect={handleOptionSelect}
        />
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8">
        <button 
          onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
          disabled={currentQuestionIndex === 0}
          className="px-6 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 transition-colors"
        >
          Previous
        </button>

        {currentQuestionIndex === (quiz?.questions?.length || 1) - 1 ? (
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-6 py-3 rounded-xl font-bold text-white bg-green-500 hover:bg-green-600 disabled:opacity-70 flex items-center gap-2 transition-colors shadow-lg shadow-green-500/20"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Quiz'} <Send className="w-4 h-4" />
          </button>
        ) : (
          <button 
            onClick={() => setCurrentQuestionIndex(prev => Math.min((quiz?.questions?.length || 1) - 1, prev + 1))}
            className="px-6 py-3 rounded-xl font-bold text-white bg-primary hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizPlayer;
