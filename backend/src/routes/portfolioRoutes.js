const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');
const { protect } = require('../middleware/authMiddleware');

router.get('/public/:username', portfolioController.getPublicPortfolio);
router.get('/', protect, portfolioController.getPortfolio);
router.post('/', protect, portfolioController.updatePortfolio);
router.put('/', protect, portfolioController.updatePortfolio);

module.exports = router;
