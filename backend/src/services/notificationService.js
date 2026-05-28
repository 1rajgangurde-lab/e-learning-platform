const Notification = require('../models/Notification');

exports.createNotification = async (recipientId, type, message, link, priority) => {
  const notif = new Notification({ recipient: recipientId, type, message, link, priority });
  return await notif.save();
};

exports.getUserNotifications = async (userId) => {
  return await Notification.find({ recipient: userId }).sort('-createdAt').limit(20);
};

exports.markAsRead = async (notificationId, userId) => {
  return await Notification.findOneAndUpdate(
    { _id: notificationId, recipient: userId },
    { readStatus: true },
    { new: true }
  );
};

exports.deleteNotification = async (notificationId, userId) => {
  return await Notification.findOneAndDelete({ _id: notificationId, recipient: userId });
};
