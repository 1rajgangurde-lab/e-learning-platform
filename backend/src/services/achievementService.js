const User = require('../models/User');
const Achievement = require('../models/Achievement');
const Notification = require('../models/Notification');

exports.awardXP = async (userId, amount, reason) => {
  try {
    const user = await User.findById(userId);
    if (!user) return;
    
    user.xp += amount;
    await user.save();

    await Notification.create({
      recipient: userId,
      type: 'Gamification',
      message: `You earned +${amount} XP for: ${reason || 'Learning'}`
    });

    await this.checkMilestones(user);

    return user.xp;
  } catch (error) {
    console.error('Gamification Error:', error);
  }
};

exports.checkMilestones = async (user) => {
  try {
    const milestones = [
      { xpRequired: 100, title: 'Century Mark', type: 'Level' },
      { xpRequired: 1000, title: 'Grandmaster', type: 'Level' }
    ];

    for (let m of milestones) {
      if (user.xp >= m.xpRequired) {
        const existing = await Achievement.findOne({ user: user._id, title: m.title });
        if (!existing) {
          await Achievement.create({
            user: user._id,
            title: m.title,
            description: `Reached ${m.xpRequired} XP!`,
            type: m.type,
            xpReward: 50
          });
          
          await Notification.create({
            recipient: user._id,
            type: 'Achievement',
            message: `Achievement Unlocked: ${m.title}!`
          });

          user.xp += 50;
          await user.save();
        }
      }
    }
  } catch (error) {
    console.error('Milestone Error:', error);
  }
};

exports.awardBadge = async (userId, badgeTitle) => {
  try {
    const existing = await Achievement.findOne({ user: userId, title: badgeTitle });
    if (!existing) {
      await Achievement.create({
        user: userId,
        title: badgeTitle,
        description: `Awarded for excellent performance!`,
        type: 'Badge',
        xpReward: 0
      });
      await Notification.create({
        recipient: userId,
        type: 'Achievement',
        message: `Badge Unlocked: ${badgeTitle}!`
      });
    }
  } catch (error) {
    console.error('Badge Error:', error);
  }
};
