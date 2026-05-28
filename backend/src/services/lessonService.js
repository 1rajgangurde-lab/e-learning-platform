const Lesson = require('../models/Lesson');

exports.createLesson = async (lessonData) => {
  const lesson = new Lesson(lessonData);
  return await lesson.save();
};

exports.getLessonsByCourse = async (courseId) => {
  return await Lesson.find({ course: courseId, isDeleted: false }).sort('orderIndex');
};

exports.updateLesson = async (lessonId, updateData) => {
  return await Lesson.findOneAndUpdate(
    { _id: lessonId, isDeleted: false },
    updateData,
    { new: true, runValidators: true }
  );
};

exports.softDeleteLesson = async (lessonId) => {
  return await Lesson.findByIdAndUpdate(lessonId, { isDeleted: true, deletedAt: new Date() }, { new: true });
};
