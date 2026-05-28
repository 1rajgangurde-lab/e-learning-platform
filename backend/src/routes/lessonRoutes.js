const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles: authorize } = require('../middleware/roleMiddleware');
const { createLessonValidation } = require('../validators/lessonValidator');

router.get('/:courseId', protect, lessonController.getLessons);
router.post('/create', protect, authorize('Instructor', 'Admin'), createLessonValidation, lessonController.createLesson);

module.exports = router;
