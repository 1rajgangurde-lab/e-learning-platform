const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { addToWishlist, removeFromWishlist, getWishlist, getWishlistCount } = require('../controllers/wishlistController');

router.use(protect);

router.post('/add', addToWishlist);
router.delete('/remove/:id', removeFromWishlist);
router.get('/', getWishlist);
router.get('/count', getWishlistCount);

module.exports = router;
