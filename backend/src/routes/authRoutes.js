const express = require('express');
const {
  register,
  login,
  logout,
  refresh,
  forgotPassword,
  verifyOTP,
  resetPassword,
  profile,
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh', refresh);
router.post('/forgot', forgotPassword);
router.post('/verify-otp', verifyOTP);
router.post('/reset', resetPassword);
router.get('/profile', protect, profile);

module.exports = router;
