const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  projectTitle: { type: String, required: true },
  githubLink: { type: String },
  demoLink: { type: String },
  fileUrl: { type: String },
  status: { type: String, enum: ['Pending', 'Reviewed', 'Approved'], default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Submission', submissionSchema);
