import React, { useState } from 'react';
import { Plus, Trash2, CheckCircle, HelpCircle } from 'lucide-react';

const QuizEditor = ({ quizData, setQuizData }) => {
  const [questions, setQuestions] = useState(quizData?.questions || []);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionText: '',
        type: 'mcq',
        points: 10,
        options: [
          { text: '', isCorrect: true },
          { text: '', isCorrect: false }
        ]
      }
    ]);
  };

  const updateQuestion = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;
    setQuestions(updated);
    setQuizData({ ...quizData, questions: updated });
  };

  const updateOption = (qIndex, oIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex].text = value;
    setQuestions(updated);
    setQuizData({ ...quizData, questions: updated });
  };

  const setCorrectOption = (qIndex, oIndex) => {
    const updated = [...questions];
    updated[qIndex].options = updated[qIndex].options.map((opt, i) => ({
      ...opt,
      isCorrect: i === oIndex
    }));
    setQuestions(updated);
    setQuizData({ ...quizData, questions: updated });
  };

  const addOption = (qIndex) => {
    const updated = [...questions];
    updated[qIndex].options.push({ text: '', isCorrect: false });
    setQuestions(updated);
  };

  const removeQuestion = (qIndex) => {
    const updated = questions.filter((_, i) => i !== qIndex);
    setQuestions(updated);
    setQuizData({ ...quizData, questions: updated });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-2 border-b border-slate-700">
        <h4 className="font-bold text-slate-300 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-purple-400" /> Quiz Questions
        </h4>
        <span className="text-xs text-slate-500 font-bold">{questions.length} Questions</span>
      </div>

      {questions.map((q, qIndex) => (
        <div key={qIndex} className="p-4 rounded-xl border border-slate-700/50 bg-slate-900/30 space-y-4">
          <div className="flex justify-between gap-4">
            <div className="flex-1">
              <label className="block text-xs font-bold text-slate-400 mb-1">Question {qIndex + 1}</label>
              <input 
                type="text" 
                value={q.questionText}
                onChange={(e) => updateQuestion(qIndex, 'questionText', e.target.value)}
                placeholder="Enter your question here..."
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:border-purple-500 outline-none"
              />
            </div>
            <button onClick={() => removeQuestion(qIndex)} className="mt-5 p-2 h-max text-slate-500 hover:text-red-400 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 pl-4 border-l-2 border-slate-800">
            <label className="block text-xs font-bold text-slate-400">Options (Select Correct Answer)</label>
            {q.options.map((opt, oIndex) => (
              <div key={oIndex} className="flex items-center gap-3">
                <button 
                  onClick={() => setCorrectOption(qIndex, oIndex)}
                  className={`p-1.5 rounded-full border transition-colors ${opt.isCorrect ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-slate-800 border-slate-700 text-slate-600 hover:border-slate-500'}`}
                >
                  <CheckCircle className="w-4 h-4" />
                </button>
                <input 
                  type="text" 
                  value={opt.text}
                  onChange={(e) => updateOption(qIndex, oIndex, e.target.value)}
                  placeholder={`Option ${oIndex + 1}`}
                  className={`flex-1 px-3 py-1.5 rounded-lg text-sm outline-none transition-all ${opt.isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-100' : 'bg-slate-800 border border-slate-700 text-slate-300 focus:border-slate-500'}`}
                />
              </div>
            ))}
            <button onClick={() => addOption(qIndex)} className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1 mt-2">
              <Plus className="w-3 h-3" /> Add Option
            </button>
          </div>
        </div>
      ))}

      <button 
        onClick={addQuestion}
        className="w-full py-3 rounded-xl border border-dashed border-slate-600 hover:border-purple-500/50 bg-slate-800/30 hover:bg-slate-800 text-sm font-bold text-purple-400 transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" /> Add Question
      </button>
    </div>
  );
};

export default QuizEditor;
