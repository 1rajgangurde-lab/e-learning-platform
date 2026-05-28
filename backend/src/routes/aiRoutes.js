const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect); // All AI features require authentication

router.post('/chat', aiController.chat);
router.post('/notes', aiController.generateNotes);
router.post('/summary', aiController.summarizeText);
router.post('/mcq', aiController.generateMCQs);
router.post('/roadmap', aiController.generateRoadmap);
router.post('/interview', aiController.generateInterviewPrep);

module.exports = router;
