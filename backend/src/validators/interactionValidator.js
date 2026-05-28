const { body } = require('express-validator');
const { validate } = require('./index');

exports.ratingValidation = [
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
  validate
];

exports.commentValidation = [
  body('text').notEmpty().withMessage('Comment text is required'),
  validate
];
