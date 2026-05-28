const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/certificateController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, certificateController.getCertificates);
router.post('/generate', protect, certificateController.generateCertificate);

module.exports = router;
