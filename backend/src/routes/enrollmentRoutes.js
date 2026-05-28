const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, enrollmentController.enrollCourse);
router.get('/mycourses', protect, enrollmentController.getMyCourses);
router.get('/history', protect, enrollmentController.getEnrollmentHistory);
router.put('/archive/:id', protect, enrollmentController.archiveEnrollment);

module.exports = router;
