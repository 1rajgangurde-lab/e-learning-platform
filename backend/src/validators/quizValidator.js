const { body } = require('express-validator');
const { validate } = require('./index');

exports.createQuizValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('questions').isArray({ min: 1 }).withMessage('At least one question is required'),
  validate
];
