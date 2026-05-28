const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  parentComment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }, // For nested replies
  text: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  isFlagged: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
