const mongoose = require('mongoose');

const lessonResourceSchema = new mongoose.Schema({
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
  title: { type: String, required: true },
  type: { type: String, enum: ['PDF', 'ZIP', 'DOC', 'PPT', 'IMAGE', 'OTHER'], required: true },
  fileUrl: { type: String, required: true },
  size: { type: Number } // file size in bytes
}, { timestamps: true });

module.exports = mongoose.model('LessonResource', lessonResourceSchema);
