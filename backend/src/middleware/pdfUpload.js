const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../services/uploadService');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'elearning/pdfs',
    allowed_formats: ['pdf'],
  },
});

const pdfUpload = multer({
  storage: storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});

module.exports = pdfUpload;
