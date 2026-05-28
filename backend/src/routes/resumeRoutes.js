const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, resumeController.getResume);
router.post('/', protect, resumeController.updateResume);
router.put('/', protect, resumeController.updateResume);

module.exports = router;
