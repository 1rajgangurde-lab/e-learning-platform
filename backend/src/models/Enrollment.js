const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  status: { type: String, enum: ['active', 'completed', 'cancelled', 'archived'], default: 'active' },
  paymentStatus: { type: String, enum: ['pending', 'paid', 'failed', 'free'], default: 'free' },
  enrollmentDate: { type: Date, default: Date.now },
  completedAt: { type: Date },
  progressPercent: { type: Number, default: 0 },
  xpEarned: { type: Number, default: 0 },
  certificateIssued: { type: Boolean, default: false },
  cancelReason: { type: String },
  archivedAt: { type: Date },
  isArchived: { type: Boolean, default: false }
}, { timestamps: true });

// Prevent duplicate enrollments
enrollmentSchema.index({ user: 1, course: 1 }, { unique: true });

module.exports = mongoose.model('Enrollment', enrollmentSchema);
