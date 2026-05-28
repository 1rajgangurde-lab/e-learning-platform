const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['mcq', 'true_false', 'multiple_answer', 'fill_blank', 'match_column', 'coding', 'image_question'],
    required: true 
  },
  options: [{
    text: { type: String },
    isCorrect: { type: Boolean, default: false }
  }],
  explanation: { type: String },
  points: { type: Number, default: 1 }
});

const quizSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  title: { type: String, required: true },
  description: { type: String },
  timeLimit: { type: Number, default: 0 }, // in seconds, 0 = unlimited
  passingScore: { type: Number, default: 80 }, // percentage
  retakeLimit: { type: Number, default: 3 },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
  shuffleQuestions: { type: Boolean, default: false },
  shuffleOptions: { type: Boolean, default: false },
  negativeMarking: { type: Boolean, default: false },
  showExplanation: { type: Boolean, default: true },
  certificateEligible: { type: Boolean, default: false },
  questions: [questionSchema]
}, { timestamps: true });

module.exports = mongoose.model('Quiz', quizSchema);
