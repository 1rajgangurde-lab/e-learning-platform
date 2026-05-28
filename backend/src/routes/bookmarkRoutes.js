const express = require('express');
const router = express.Router();
const bookmarkController = require('../controllers/bookmarkController');
const { protect } = require('../middleware/authMiddleware');

router.post('/add', protect, bookmarkController.addBookmark);
router.get('/:lessonId', protect, bookmarkController.getBookmarks);

module.exports = router;
