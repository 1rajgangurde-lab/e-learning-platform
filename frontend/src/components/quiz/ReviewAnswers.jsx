import React from 'react';
import { useQuizResult } from '../../hooks/useQuiz';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowLeft } from 'lucide-react';

const ReviewAnswers = () => {
  const { attemptId } = useParams();
  const { data: attempt, isLoading } = useQuizResult(attemptId);
  const navigate = useNavigate();

  if (isLoading) return <div className="p-8 text-center animate-pulse text-slate-500">Loading Review...</div>;
  if (!attempt) return <div className="p-8 text-center text-red-500">Result not found</div>;

  const { quiz, answers } = attempt;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white mb-8 font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Results
      </button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Review Answers</h1>
        <p className="text-slate-500 font-medium">{quiz?.title}</p>
      </div>

      <div className="space-y-6">
        {quiz?.questions?.map((question, index) => {
          const userAnswer = answers?.find(a => a.questionId === question._id);
          const isCorrect = userAnswer?.isCorrect;

          return (
            <div key={question._id} className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex gap-4 items-start mb-6">
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                  isCorrect ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white pt-1 mb-1">
                    {question.questionText}
                  </h3>
                  <div className={`text-sm font-bold flex items-center gap-1 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                    {isCorrect ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    {isCorrect ? `Correct (+${userAnswer.pointsEarned} pts)` : `Incorrect (${userAnswer?.pointsEarned || 0} pts)`}
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6 pl-12">
                {question.options?.map((option) => {
                  const isUserSelected = userAnswer?.selectedOptions?.includes(option._id);
                  const isOptionCorrect = option.isCorrect;
                  
                  let borderClass = 'border-slate-200 dark:border-slate-700';
                  let bgClass = '';
                  
                  if (isOptionCorrect && isUserSelected) {
                    borderClass = 'border-green-500';
                    bgClass = 'bg-green-50 dark:bg-green-900/20';
                  } else if (isOptionCorrect && !isUserSelected) {
                    borderClass = 'border-green-500 border-dashed';
                  } else if (!isOptionCorrect && isUserSelected) {
                    borderClass = 'border-red-500';
                    bgClass = 'bg-red-50 dark:bg-red-900/20';
                  }

                  return (
                    <div key={option._id} className={`flex items-center gap-4 p-4 rounded-xl border-2 ${borderClass} ${bgClass}`}>
                      <div className={`w-5 h-5 flex-shrink-0 border-2 rounded-full flex items-center justify-center ${
                        isUserSelected ? (isOptionCorrect ? 'border-green-500 bg-green-500' : 'border-red-500 bg-red-500') : 'border-slate-300 dark:border-slate-600'
                      }`}>
                        {isUserSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <span className={`font-medium ${
                        isOptionCorrect ? 'text-green-700 dark:text-green-400' : (isUserSelected ? 'text-red-700 dark:text-red-400' : 'text-slate-700 dark:text-slate-300')
                      }`}>{option.text}</span>
                    </div>
                  );
                })}
              </div>

              {quiz.showExplanation && question.explanation && (
                <div className="pl-12">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/50">
                    <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-1">Explanation:</h4>
                    <p className="text-slate-700 dark:text-slate-300">{question.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewAnswers;
