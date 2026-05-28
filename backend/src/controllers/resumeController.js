const aiService = require('../services/aiService');

exports.getResume = async (req, res, next) => {
  try {
    const resume = await aiService.getResume(req.user._id);
    res.status(200).json({ success: true, resume });
  } catch (error) {
    next(error);
  }
};

exports.updateResume = async (req, res, next) => {
  try {
    const resume = await aiService.updateResume(req.user._id, req.body);
    res.status(200).json({ success: true, resume });
  } catch (error) {
    next(error);
  }
};
