const progressService = require('../services/progressService');

exports.updateProgress = async (req, res, next) => {
  try {
    const { courseId, lessonId, watchTime, isCompleted } = req.body;
    const progress = await progressService.updateProgress(req.user._id, courseId, lessonId, watchTime, isCompleted);
    res.status(200).json({ success: true, progress });
  } catch (error) {
    next(error);
  }
};

exports.getProgress = async (req, res, next) => {
  try {
    const progress = await progressService.getCourseProgress(req.user._id, req.params.courseId);
    res.status(200).json({ success: true, progress });
  } catch (error) {
    next(error);
  }
};
