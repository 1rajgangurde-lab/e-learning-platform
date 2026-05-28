const aiService = require('../services/aiService');
const Portfolio = require('../models/Portfolio');
const User = require('../models/User');

exports.getPublicPortfolio = async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    
    const portfolio = await Portfolio.findOne({ user: user._id }).populate('user', 'name username avatar bio skills');
    if (!portfolio) return res.status(404).json({ success: false, message: 'Portfolio not found' });
    
    res.status(200).json({ success: true, portfolio });
  } catch (error) {
    next(error);
  }
};

exports.getPortfolio = async (req, res, next) => {
  try {
    const portfolio = await aiService.getPortfolio(req.user._id);
    res.status(200).json({ success: true, portfolio });
  } catch (error) {
    next(error);
  }
};

exports.updatePortfolio = async (req, res, next) => {
  try {
    const portfolio = await aiService.updatePortfolio(req.user._id, req.body);
    res.status(200).json({ success: true, portfolio });
  } catch (error) {
    next(error);
  }
};
