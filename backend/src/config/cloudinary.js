const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'antigravity_elearning/images',
    allowedFormats: ['jpeg', 'png', 'jpg', 'webp'],
    resource_type: 'image'
  }
});

const videoStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'antigravity_elearning/videos',
    allowed_formats: ['mp4', 'mov', 'avi', 'mkv', 'webm'],
    resource_type: 'video'
  }
});

const rawStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'antigravity_elearning/documents',
    allowed_formats: ['pdf', 'zip', 'doc', 'docx'],
    resource_type: 'raw'
  }
});

const upload = multer({ storage: storage });
const uploadVideo = multer({ storage: videoStorage });
const uploadRaw = multer({ storage: rawStorage });

module.exports = { cloudinary, upload, uploadVideo, uploadRaw };
