import React from 'react';

const QuestionItem = ({ question, index, selectedOptions, onOptionSelect }) => {
  
  const handleSelect = (optionId) => {
    if (question.type === 'mcq' || question.type === 'true_false') {
      onOptionSelect(question._id, [optionId]); // Single selection
    } else if (question.type === 'multiple_answer') {
      const isSelected = selectedOptions.includes(optionId);
      const newSelection = isSelected
        ? selectedOptions.filter(id => id !== optionId)
        : [...selectedOptions, optionId];
      onOptionSelect(question._id, newSelection);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
      <div className="flex gap-4 items-start mb-6">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
          {index + 1}
        </span>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white pt-1">
          {question.questionText}
        </h3>
      </div>

      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedOptions.includes(option._id);
          const isMultiple = question.type === 'multiple_answer';
          
          return (
            <label 
              key={option._id}
              className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                isSelected 
                  ? 'border-primary bg-blue-50 dark:bg-blue-900/20' 
                  : 'border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700'
              }`}
            >
              <div className={`w-5 h-5 flex-shrink-0 border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center ${
                isMultiple ? 'rounded-md' : 'rounded-full'
              } ${isSelected ? 'border-primary bg-primary' : ''}`}>
                {isSelected && (
                  <div className={`bg-white ${isMultiple ? 'w-3 h-3 rounded-sm' : 'w-2 h-2 rounded-full'}`} />
                )}
              </div>
              <span className="text-slate-700 dark:text-slate-300 font-medium">{option.text}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionItem;
