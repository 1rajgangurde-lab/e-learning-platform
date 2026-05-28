const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../services/uploadService');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'elearning/images',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
  },
});

const imageUpload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

module.exports = imageUpload;
