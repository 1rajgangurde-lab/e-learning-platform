const express = require('express');
const router = express.Router();
const {
  createQuiz,
  getQuiz,
  submitQuiz,
  getQuizResult,
  getLeaderboard
} = require('../controllers/quizController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/create', protect, authorize('instructor', 'admin'), createQuiz);
router.get('/:id', protect, getQuiz);
router.post('/:id/submit', protect, submitQuiz);
router.get('/result/:attemptId', protect, getQuizResult);
router.get('/:id/leaderboard', protect, getLeaderboard);

module.exports = router;
