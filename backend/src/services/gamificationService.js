const Wishlist = require('../models/Wishlist');
const Achievement = require('../models/Achievement');
const Streak = require('../models/Streak');

exports.addToWishlist = async (userId, courseId) => {
  return await Wishlist.findOneAndUpdate(
    { user: userId, course: courseId },
    { user: userId, course: courseId },
    { upsert: true, new: true }
  );
};

exports.removeFromWishlist = async (userId, courseId) => {
  return await Wishlist.findOneAndDelete({ user: userId, course: courseId });
};

exports.getWishlist = async (userId) => {
  return await Wishlist.find({ user: userId }).populate('course');
};

exports.unlockAchievement = async (userId, title, xpReward, badgeId) => {
  const achievement = new Achievement({ user: userId, title, xpReward, badge: badgeId });
  return await achievement.save();
};

exports.getUserAchievements = async (userId) => {
  return await Achievement.find({ user: userId }).populate('badge');
};
