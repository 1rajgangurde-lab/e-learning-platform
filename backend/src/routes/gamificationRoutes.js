const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');
const achievementController = require('../controllers/achievementController');
const { protect } = require('../middleware/authMiddleware');

// Wishlist
router.post('/wishlist/add', protect, wishlistController.addToWishlist);
router.delete('/wishlist/remove/:courseId', protect, wishlistController.removeFromWishlist);
router.get('/wishlist', protect, wishlistController.getWishlist);

// Achievements
router.get('/achievement', protect, achievementController.getAchievements);
router.post('/achievement/unlock', protect, achievementController.unlockAchievement);

module.exports = router;
