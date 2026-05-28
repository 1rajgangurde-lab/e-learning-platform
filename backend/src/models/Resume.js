const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: String,
  company: String,
  duration: String,
  description: String
});

const educationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  year: String
});

const resumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true }, // One-to-one
  objective: { type: String },
  experience: [experienceSchema],
  education: [educationSchema],
  aiScore: { type: Number },
  aiFeedback: { type: String },
  atsScore: { type: Number },
  missingSkills: [String],
  recommendedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);
