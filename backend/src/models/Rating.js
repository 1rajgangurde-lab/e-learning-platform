const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  reviewText: { type: String }
}, { timestamps: true });

ratingSchema.index({ user: 1, course: 1 }, { unique: true });

module.exports = mongoose.model('Rating', ratingSchema);
