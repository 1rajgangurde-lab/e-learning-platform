const express = require('express');
const router = express.Router();
const streakController = require('../controllers/streakController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, streakController.getStreak);
router.get('/leaderboard', protect, streakController.getLeaderboard);
router.post('/freeze', protect, streakController.freezeStreak);

module.exports = router;
