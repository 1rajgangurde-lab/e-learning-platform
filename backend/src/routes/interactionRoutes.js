const express = require('express');
const router = express.Router();
const interactionController = require('../controllers/interactionController');
const { protect } = require('../middleware/authMiddleware');
const { ratingValidation, commentValidation } = require('../validators/interactionValidator');

router.post('/comment', protect, commentValidation, interactionController.addComment);
router.post('/rating', protect, ratingValidation, interactionController.addRating);

module.exports = router;
