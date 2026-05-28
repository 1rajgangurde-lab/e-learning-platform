const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles: authorize } = require('../middleware/roleMiddleware');
const imageUpload = require('../middleware/imageUpload');
const { createCourseValidation, courseSearchValidation } = require('../validators/courseValidator');

router.get('/', courseSearchValidation, courseController.getCourses);
router.get('/:id', courseController.getCourseById);
router.get('/:id/analytics', protect, authorize('Instructor', 'Admin'), courseController.getCourseAnalytics);
router.post('/create', protect, authorize('Instructor', 'Admin'), imageUpload.single('thumbnail'), createCourseValidation, courseController.createCourse);
router.put('/:id', protect, authorize('Instructor', 'Admin'), courseController.updateCourse);
router.delete('/:id', protect, authorize('Instructor', 'Admin'), courseController.deleteCourse);

module.exports = router;
