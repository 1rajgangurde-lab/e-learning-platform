const Streak = require('../models/Streak');
const achievementService = require('./achievementService');

exports.updateStreak = async (userId) => {
  try {
    let streak = await Streak.findOne({ user: userId });
    
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Start of today

    if (!streak) {
      // First ever activity
      streak = await Streak.create({
        user: userId,
        currentStreak: 1,
        longestStreak: 1,
        lastActivityDate: today,
        activityHistory: [{ date: today, xpEarned: 10, lessonsCompleted: 0 }]
      });
      await achievementService.awardXP(userId, 50, 'First Activity Streak!');
      return streak;
    }

    const lastActivity = new Date(streak.lastActivityDate);
    lastActivity.setHours(0, 0, 0, 0);

    const diffTime = Math.abs(today - lastActivity);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      // Already active today, update history
      const historyIndex = streak.activityHistory.findIndex(h => 
        new Date(h.date).getTime() === today.getTime()
      );
      if (historyIndex !== -1) {
        streak.activityHistory[historyIndex].lessonsCompleted += 1;
      } else {
        streak.activityHistory.push({ date: today, xpEarned: 10, lessonsCompleted: 1 });
      }
    } else if (diffDays === 1) {
      // Active yesterday, increment streak
      streak.currentStreak += 1;
      if (streak.currentStreak > streak.longestStreak) {
        streak.longestStreak = streak.currentStreak;
      }
      streak.lastActivityDate = today;
      streak.activityHistory.push({ date: today, xpEarned: 10, lessonsCompleted: 1 });
      
      if (streak.currentStreak === 7) {
        await achievementService.awardXP(userId, 100, '7 Day Streak!');
      } else if (streak.currentStreak === 30) {
        await achievementService.awardXP(userId, 500, '30 Day Streak Master!');
      }
    } else {
      // Missed more than 1 day
      // Check for Freeze logic
      if (streak.freezeAvailable > 0 && diffDays <= 2) {
        streak.freezeAvailable -= 1;
        streak.freezeUsedAt = new Date();
        streak.currentStreak += 1; // Kept alive!
      } else {
        streak.currentStreak = 1; // Reset
      }
      streak.lastActivityDate = today;
      streak.activityHistory.push({ date: today, xpEarned: 10, lessonsCompleted: 1 });
    }

    await streak.save();
    return streak;
  } catch (error) {
    console.error('Streak update error:', error);
  }
};
