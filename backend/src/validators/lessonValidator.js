const { body } = require('express-validator');
const { validate } = require('./index');

exports.createLessonValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('orderIndex').isNumeric().withMessage('Order index is required'),
  body('videoType').optional().isIn(['youtube', 'vimeo', 's3', 'cloudinary']),
  validate
];
