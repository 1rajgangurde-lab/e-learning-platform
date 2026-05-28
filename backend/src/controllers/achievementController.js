const gamificationService = require('../services/gamificationService');

exports.getAchievements = async (req, res, next) => {
  try {
    const achievements = await gamificationService.getUserAchievements(req.user._id);
    res.status(200).json({ success: true, achievements });
  } catch (error) {
    next(error);
  }
};

exports.unlockAchievement = async (req, res, next) => {
  try {
    const { title, xpReward, badgeId } = req.body;
    const achievement = await gamificationService.unlockAchievement(req.user._id, title, xpReward, badgeId);
    res.status(201).json({ success: true, achievement });
  } catch (error) {
    next(error);
  }
};
