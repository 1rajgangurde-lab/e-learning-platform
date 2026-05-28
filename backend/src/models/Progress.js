const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
  
  // Video Tracking
  watchTime: { type: Number, default: 0 }, // exact seconds
  videoDuration: { type: Number, default: 0 },
  watchPercent: { type: Number, default: 0 },
  lastPosition: { type: Number, default: 0 }, // For resume feature
  resumeAvailable: { type: Boolean, default: false },
  
  // Reading Tracking (PDF/Resources)
  readingProgress: {
    resourceId: { type: String },
    readPercent: { type: Number, default: 0 },
    readTime: { type: Number, default: 0 }, // in seconds
    isRead: { type: Boolean, default: false }
  },

  isCompleted: { type: Boolean, default: false },
  completedAt: { type: Date },
  lastAccessed: { type: Date, default: Date.now }
}, { timestamps: true });

progressSchema.index({ user: 1, lesson: 1 }, { unique: true });

module.exports = mongoose.model('Progress', progressSchema);
