const courseService = require('../services/courseService');

exports.createCourse = async (req, res, next) => {
  try {
    const courseData = { ...req.body, instructor: req.user._id };
    if (req.file) courseData.thumbnail = req.file.path;
    const course = await courseService.createCourse(courseData);
    res.status(201).json({ success: true, course });
  } catch (error) {
    next(error);
  }
};

exports.getCourses = async (req, res, next) => {
  try {
    const { search, category, level, duration, price, rating, language, sort, page = 1, limit = 10 } = req.query;
    const filter = { isDeleted: false, isPublished: true };

    if (search) {
      filter.$text = { $search: search };
    }
    if (category) filter.category = category;
    if (level) filter.level = level;
    if (language) filter.language = language;
    if (rating) filter.ratingAverage = { $gte: Number(rating) };
    if (duration) filter.duration = { $lte: Number(duration) };
    if (price) {
      if (price === 'free') filter.price = 0;
      else if (price === 'paid') filter.price = { $gt: 0 };
    }

    let sortObj = { createdAt: -1 };
    if (sort === 'popular') sortObj = { enrollmentCount: -1 };
    else if (sort === 'highest-rated') sortObj = { ratingAverage: -1 };
    else if (sort === 'price-low') sortObj = { price: 1 };
    else if (sort === 'price-high') sortObj = { price: -1 };

    const skip = (Number(page) - 1) * Number(limit);

    const Course = require('../models/Course');
    const courses = await Course.find(filter)
      .sort(sortObj)
      .skip(skip)
      .limit(Number(limit))
      .populate('instructor', 'name avatar');
      
    const total = await Course.countDocuments(filter);

    res.status(200).json({ success: true, count: courses.length, total, pages: Math.ceil(total / Number(limit)), data: courses });
  } catch (error) {
    next(error);
  }
};

exports.getCourseById = async (req, res, next) => {
  try {
    const Course = require('../models/Course');
    const course = await Course.findById(req.params.id).populate('instructor', 'name avatar bio');
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' });
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    next(error);
  }
};

exports.getCourseAnalytics = async (req, res, next) => {
  try {
    // Mock analytics for now
    const analytics = {
      views: 1250,
      enrollments: 450,
      completionRate: 65,
      watchTimeHours: 1200,
      ratingAverage: 4.8,
      revenue: 8500
    };
    res.status(200).json({ success: true, data: analytics });
  } catch (error) {
    next(error);
  }
};

exports.updateCourse = async (req, res, next) => {
  try {
    const course = await courseService.updateCourse(req.params.id, req.body);
    res.status(200).json({ success: true, course });
  } catch (error) {
    next(error);
  }
};

exports.deleteCourse = async (req, res, next) => {
  try {
    await courseService.softDeleteCourse(req.params.id);
    res.status(200).json({ success: true, message: 'Course deleted' });
  } catch (error) {
    next(error);
  }
};
