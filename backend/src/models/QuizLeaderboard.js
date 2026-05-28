const mongoose = require('mongoose');

const quizLeaderboardSchema = new mongoose.Schema({
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, required: true },
  percentage: { type: Number, required: true },
  timeTaken: { type: Number, required: true }, // For tie-breaking
  rank: { type: Number, default: 0 }
}, { timestamps: true });

// Compound index to ensure 1 user per quiz leaderboard entry
quizLeaderboardSchema.index({ quiz: 1, user: 1 }, { unique: true });

// Sort primarily by percentage (desc), then timeTaken (asc)
quizLeaderboardSchema.index({ quiz: 1, percentage: -1, timeTaken: 1 });

module.exports = mongoose.model('QuizLeaderboard', quizLeaderboardSchema);
