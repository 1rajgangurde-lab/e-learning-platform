const lessonService = require('../services/lessonService');

exports.createLesson = async (req, res, next) => {
  try {
    const lesson = await lessonService.createLesson(req.body);
    res.status(201).json({ success: true, lesson });
  } catch (error) {
    next(error);
  }
};

exports.getLessons = async (req, res, next) => {
  try {
    const lessons = await lessonService.getLessonsByCourse(req.params.courseId);
    res.status(200).json({ success: true, lessons });
  } catch (error) {
    next(error);
  }
};
