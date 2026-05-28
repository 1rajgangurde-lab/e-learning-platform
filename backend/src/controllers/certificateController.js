const Certificate = require('../models/Certificate');
const Enrollment = require('../models/Enrollment');
const Notification = require('../models/Notification');
const achievementService = require('../services/achievementService');
const crypto = require('crypto');

exports.generateCertificate = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { courseId } = req.body;

    const enrollment = await Enrollment.findOne({ user: userId, course: courseId });
    if (!enrollment) return res.status(404).json({ success: false, message: 'Enrollment not found.' });

    if (enrollment.progressPercent < 100) {
      return res.status(400).json({ success: false, message: 'You must complete 100% of the course to generate a certificate.' });
    }

    // Check if already issued
    let certificate = await Certificate.findOne({ user: userId, course: courseId });
    if (certificate) {
      return res.status(200).json({ success: true, certificate, message: 'Certificate already generated.' });
    }
    
    // Generate unique cert ID
    const certificateId = crypto.randomBytes(8).toString('hex').toUpperCase();
    
    certificate = new Certificate({
      user: userId,
      course: courseId,
      certificateUrl: `https://dummy-cert-url.com/${certificateId}`,
      certificateId
    });
    
    await certificate.save();

    // Mark enrollment as completed and certificate issued
    if (enrollment.status !== 'completed') {
      enrollment.status = 'completed';
      enrollment.completedAt = Date.now();
      await achievementService.awardXP(userId, 100, 'Course Completed');
    }
    
    enrollment.certificateIssued = true;
    await enrollment.save();

    // Award +50 XP for Certificate
    await achievementService.awardXP(userId, 50, 'Certificate Earned');

    // Notify User
    await Notification.create({
      recipient: userId,
      type: 'Gamification',
      message: `Certificate Unlocked! +50 XP`
    });

    res.status(201).json({ success: true, certificate });
  } catch (error) {
    next(error);
  }
};

exports.getCertificates = async (req, res, next) => {
  try {
    const certificates = await Certificate.find({ user: req.user._id }).populate('course', 'title thumbnail');
    res.status(200).json({ success: true, certificates });
  } catch (error) {
    next(error);
  }
};
