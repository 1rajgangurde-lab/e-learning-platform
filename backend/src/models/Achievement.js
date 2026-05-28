const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  xpReward: { type: Number, default: 0 },
  badge: { type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }, // Optional link to a badge
  unlockedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Achievement', achievementSchema);
