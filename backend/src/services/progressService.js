const Progress = require('../models/Progress');
const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');
const streakService = require('./streakService');
const achievementService = require('./achievementService');

exports.updateProgress = async (userId, courseId, lessonId, updateData) => {
  const { watchTime, videoDuration, isCompleted, readingProgress } = updateData;
  
  let watchPercent = 0;
  if (videoDuration && videoDuration > 0) {
    watchPercent = Math.min((watchTime / videoDuration) * 100, 100);
  }

  let progress = await Progress.findOne({ user: userId, lesson: lessonId });
  
  const wasAlreadyCompleted = progress?.isCompleted;
  const isNowCompleted = isCompleted || watchPercent >= 90; // Auto complete if 90% watched

  if (!progress) {
    progress = new Progress({
      user: userId,
      course: courseId,
      lesson: lessonId,
    });
  }

  progress.watchTime = watchTime !== undefined ? watchTime : progress.watchTime;
  progress.videoDuration = videoDuration || progress.videoDuration;
  progress.watchPercent = watchPercent || progress.watchPercent;
  progress.lastPosition = watchTime !== undefined ? watchTime : progress.lastPosition;
  progress.resumeAvailable = true;
  progress.lastAccessed = Date.now();
  
  if (readingProgress) {
    progress.readingProgress = { ...progress.readingProgress, ...readingProgress };
    if (progress.readingProgress.readPercent >= 90) progress.readingProgress.isRead = true;
  }

  if (!wasAlreadyCompleted && isNowCompleted) {
    progress.isCompleted = true;
    progress.completedAt = Date.now();
    await achievementService.awardXP(userId, 10, 'Lesson Completed');
    await streakService.updateStreak(userId); // Trigger streak on completion
  }

  await progress.save();

  // Update Enrollment Overall Progress
  await this.recalculateEnrollmentProgress(userId, courseId);

  return progress;
};

exports.recalculateEnrollmentProgress = async (userId, courseId) => {
  try {
    const course = await Course.findById(courseId);
    if (!course) return;
    
    const totalLessons = 10; // Dummy fallback for total lessons

    const completedProgresses = await Progress.countDocuments({ 
      user: userId, 
      course: courseId, 
      isCompleted: true 
    });

    const progressPercent = Math.min(Math.round((completedProgresses / totalLessons) * 100), 100);

    const enrollment = await Enrollment.findOne({ user: userId, course: courseId });
    if (enrollment) {
      const wasCompleted = enrollment.progressPercent === 100;
      enrollment.progressPercent = progressPercent;
      
      if (!wasCompleted && progressPercent === 100) {
        enrollment.status = 'completed';
        enrollment.completedAt = Date.now();
        await achievementService.awardXP(userId, 100, 'Course Mastered');
      }
      
      await enrollment.save();
    }
  } catch (error) {
    console.error('Progress recalculation error:', error);
  }
};

exports.getCourseProgress = async (userId, courseId) => {
  return await Progress.find({ user: userId, course: courseId });
};
