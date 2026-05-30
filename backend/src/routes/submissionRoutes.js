const express = require('express');
const router = express.Router();
const {
  submitProject,
  getCourseSubmissions,
  gradeSubmission
} = require('../controllers/submissionController');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles: authorize } = require('../middleware/roleMiddleware');

router.post('/', protect, submitProject);
router.get('/course/:courseId', protect, authorize('Instructor', 'Admin'), getCourseSubmissions);
router.put('/:id/grade', protect, authorize('Instructor', 'Admin'), gradeSubmission);

module.exports = router;
