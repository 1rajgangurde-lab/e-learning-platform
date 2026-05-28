const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String },
  image: { type: String }
});

const portfolioSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true }, // One-to-one
  theme: { type: String, default: 'modern' },
  about: { type: String },
  title: { type: String },
  projects: [projectSchema],
  skills: [String],
  socialLinks: {
    github: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    website: { type: String }
  },
  aiFeedback: { type: String },
  skillScore: { type: Number },
  recommendedProjects: [String],
  careerSuggestion: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', portfolioSchema);
