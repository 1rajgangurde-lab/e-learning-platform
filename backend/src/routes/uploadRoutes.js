const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles: authorize } = require('../middleware/roleMiddleware');
const { upload, uploadVideo, uploadRaw } = require('../config/cloudinary');

// Upload Image
router.post('/image', protect, authorize('Instructor', 'Admin'), upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' });
  res.status(200).json({ success: true, url: req.file.path });
});

// Upload Video
router.post('/video', protect, authorize('Instructor', 'Admin'), uploadVideo.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'No video uploaded' });
  res.status(200).json({ success: true, url: req.file.path });
});

// Upload Document (PDF/Raw)
router.post('/document', protect, authorize('Instructor', 'Admin'), uploadRaw.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'No document uploaded' });
  res.status(200).json({ success: true, url: req.file.path });
});

module.exports = router;
