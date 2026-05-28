const mongoose = require('mongoose');

const streakSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  currentStreak: { type: Number, default: 0 },
  longestStreak: { type: Number, default: 0 },
  lastActivityDate: { type: Date }, // Triggered by actual learning
  
  // Streak Freeze Mechanics
  freezeAvailable: { type: Number, default: 1 }, // E.g., 1 freeze per month
  freezeUsedAt: { type: Date },
  
  // Heatmap tracking
  activityHistory: [{
    date: { type: Date, required: true },
    xpEarned: { type: Number, default: 0 },
    lessonsCompleted: { type: Number, default: 0 }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Streak', streakSchema);
