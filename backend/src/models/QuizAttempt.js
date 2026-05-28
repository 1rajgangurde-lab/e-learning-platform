const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, required: true },
  selectedOptions: [{ type: String }], // Store ObjectIds or text values
  isCorrect: { type: Boolean, default: false },
  pointsEarned: { type: Number, default: 0 }
}, { _id: false });

const quizAttemptSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  attemptNumber: { type: Number, default: 1 },
  score: { type: Number, default: 0 }, // Raw points
  percentage: { type: Number, default: 0 }, // 0-100
  passed: { type: Boolean, default: false },
  xpEarned: { type: Number, default: 0 },
  badgeEarned: { type: String, enum: ['None', 'Silver Badge', 'Gold Badge', 'Master Badge'], default: 'None' },
  startedAt: { type: Date, default: Date.now },
  submittedAt: { type: Date },
  timeTaken: { type: Number, default: 0 }, // in seconds
  answers: [answerSchema],
  wrongAnswers: { type: Number, default: 0 },
  tabSwitches: { type: Number, default: 0 }, // Anti-cheat layer
  status: { type: String, enum: ['in_progress', 'completed', 'auto_submitted'], default: 'in_progress' }
}, { timestamps: true });

module.exports = mongoose.model('QuizAttempt', quizAttemptSchema);
