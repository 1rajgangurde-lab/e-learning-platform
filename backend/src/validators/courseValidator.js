const { body, query } = require('express-validator');
const { validate } = require('./index');

exports.createCourseValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('category').notEmpty().withMessage('Category is required'),
  body('price').optional().isNumeric().withMessage('Price must be a number'),
  validate
];

exports.courseSearchValidation = [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  validate
];
