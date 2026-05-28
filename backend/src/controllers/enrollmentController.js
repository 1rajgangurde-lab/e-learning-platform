const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');
const Wishlist = require('../models/Wishlist');
const Wallet = require('../models/Wallet');
const achievementService = require('../services/achievementService');
const Notification = require('../models/Notification');

exports.enrollCourse = async (req, res, next) => {
  try {
    const { courseId } = req.body;
    const userId = req.user._id;

    // 1. Duplicate Check
    const existing = await Enrollment.findOne({ user: userId, course: courseId, isArchived: false });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Already enrolled in this course.' });
    }

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ success: false, message: 'Course not found.' });

    // 2. Payment Validation (Wallet)
    let wallet = await Wallet.findOne({ user: userId });
    if (!wallet) {
      wallet = await Wallet.create({ user: userId, balance: 1000 }); // Free demo money
    }

    if (course.price > 0) {
      if (wallet.balance < course.price) {
        return res.status(400).json({ success: false, message: 'Insufficient wallet balance.' });
      }
      wallet.balance -= course.price;
      wallet.transactions.push({
        type: 'Enroll',
        amount: -course.price,
        referenceId: course._id,
        description: `Enrollment in ${course.title}`
      });
      await wallet.save();
    }

    // 3. Create Enrollment
    const enrollment = await Enrollment.create({
      user: userId,
      course: courseId,
      status: 'active',
      paymentStatus: course.price > 0 ? 'paid' : 'free'
    });

    course.enrollmentCount += 1;
    await course.save();

    // 4. Remove Wishlist
    await Wishlist.findOneAndDelete({ user: userId, course: courseId });

    // 5. Award XP (+20)
    await achievementService.awardXP(userId, 20, 'Enrolled in a new course');

    // 6. Create Notification
    await Notification.create({
      recipient: userId,
      type: 'Enrollment',
      message: `Successfully enrolled in ${course.title}!`
    });

    res.status(201).json({ success: true, enrollment });
  } catch (error) {
    next(error);
  }
};

exports.archiveEnrollment = async (req, res, next) => {
  try {
    const { id } = req.params; // courseId or enrollmentId
    const { reason } = req.body;
    
    const enrollment = await Enrollment.findOne({
      user: req.user._id,
      $or: [{ _id: id }, { course: id }],
      isArchived: false
    });

    if (!enrollment) {
      return res.status(404).json({ success: false, message: 'Active enrollment not found.' });
    }

    enrollment.isArchived = true;
    enrollment.status = 'cancelled';
    enrollment.archivedAt = Date.now();
    enrollment.cancelReason = reason || 'User requested cancellation';
    
    await enrollment.save();
    res.json({ success: true, message: 'Enrollment archived successfully.' });
  } catch (error) {
    next(error);
  }
};

exports.getMyCourses = async (req, res, next) => {
  try {
    const enrollments = await Enrollment.find({ user: req.user._id })
      .populate('course')
      .sort('-createdAt');
      
    res.json({ success: true, count: enrollments.length, data: enrollments });
  } catch (error) {
    next(error);
  }
};

exports.getEnrollmentHistory = async (req, res, next) => {
  try {
    const enrollments = await Enrollment.find({ user: req.user._id, isArchived: true })
      .populate('course')
      .sort('-archivedAt');
      
    res.json({ success: true, count: enrollments.length, data: enrollments });
  } catch (error) {
    next(error);
  }
};
