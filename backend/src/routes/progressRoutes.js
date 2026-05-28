const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const { protect } = require('../middleware/authMiddleware');

router.get('/:courseId', protect, progressController.getProgress);
router.put('/update', protect, progressController.updateProgress);

module.exports = router;
