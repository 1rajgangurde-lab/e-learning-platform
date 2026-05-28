const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  }
}, { timestamps: true });

// Ensure a user can only wishlist a specific course once
wishlistSchema.index({ user: 1, course: 1 }, { unique: true });

module.exports = mongoose.model('Wishlist', wishlistSchema);
