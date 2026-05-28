const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  iconUrl: { type: String, required: true },
  criteria: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Badge', badgeSchema);
