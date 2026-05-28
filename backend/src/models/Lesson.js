const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  title: { type: String, required: true },
  content: { type: String },
  type: { type: String, enum: ['video', 'quiz', 'project', 'resource'], default: 'video' },
  videoUrl: { type: String },
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
  resource: { type: String },
  duration: { type: Number, default: 0 }, // in minutes
  orderIndex: { type: Number, required: true },
  isFreePreview: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Lesson', lessonSchema);
