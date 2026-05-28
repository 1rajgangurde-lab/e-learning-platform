const Streak = require('../models/Streak');
const streakService = require('../services/streakService');

exports.getStreak = async (req, res, next) => {
  try {
    const streak = await Streak.findOne({ user: req.user._id });
    if (!streak) {
      return res.status(200).json({ success: true, data: { currentStreak: 0, longestStreak: 0, activityHistory: [] } });
    }
    res.status(200).json({ success: true, data: streak });
  } catch (error) {
    next(error);
  }
};

exports.getLeaderboard = async (req, res, next) => {
  try {
    const leaderboard = await Streak.find()
      .populate('user', 'name avatar xp')
      .sort('-currentStreak')
      .limit(10);
    res.status(200).json({ success: true, data: leaderboard });
  } catch (error) {
    next(error);
  }
};

exports.freezeStreak = async (req, res, next) => {
  try {
    const streak = await Streak.findOne({ user: req.user._id });
    if (!streak || streak.freezeAvailable < 1) {
      return res.status(400).json({ success: false, message: 'No streak freezes available.' });
    }
    
    streak.freezeAvailable -= 1;
    streak.freezeUsedAt = new Date();
    await streak.save();

    res.status(200).json({ success: true, message: 'Streak freeze activated!', data: streak });
  } catch (error) {
    next(error);
  }
};
