const Course = require('../models/Course');

exports.createCourse = async (courseData) => {
  const course = new Course(courseData);
  return await course.save();
};

exports.getCourses = async (filter, options) => {
  const { page = 1, limit = 10, sort = '-createdAt' } = options;
  const skip = (page - 1) * limit;

  // Make sure we only get non-deleted courses
  filter.isDeleted = false;

  const courses = await Course.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .populate('instructor', 'name avatar');
    
  const total = await Course.countDocuments(filter);
  
  return {
    courses,
    total,
    totalPages: Math.ceil(total / limit),
    currentPage: parseInt(page)
  };
};

exports.getCourseById = async (courseId) => {
  return await Course.findOne({ _id: courseId, isDeleted: false }).populate('instructor', 'name avatar bio');
};

exports.updateCourse = async (courseId, updateData) => {
  return await Course.findOneAndUpdate(
    { _id: courseId, isDeleted: false },
    updateData,
    { new: true, runValidators: true }
  );
};

exports.softDeleteCourse = async (courseId) => {
  return await Course.findByIdAndUpdate(courseId, { isDeleted: true, deletedAt: new Date() }, { new: true });
};
