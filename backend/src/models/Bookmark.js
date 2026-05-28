const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
  timestamp: { type: Number, required: true }, // exact seconds in the video
  note: { type: String, required: true },
  color: { type: String, default: 'yellow' }
}, { timestamps: true });

module.exports = mongoose.model('Bookmark', bookmarkSchema);
