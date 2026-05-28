const aiService = require('../services/aiService');

exports.chat = async (req, res) => {
  try {
    const { topic, message } = req.body;
    if (!message) return res.status(400).json({ success: false, message: 'Message is required' });
    
    const response = await aiService.generateChatResponse(topic, message);
    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.generateNotes = async (req, res) => {
  try {
    const { topic } = req.body;
    if (!topic) return res.status(400).json({ success: false, message: 'Topic is required' });

    const notes = await aiService.generateNotes(topic);
    res.json({ success: true, data: notes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.summarizeText = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ success: false, message: 'Text is required' });

    const summary = await aiService.summarizeText(text);
    res.json({ success: true, data: summary });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.generateMCQs = async (req, res) => {
  try {
    const { topic, difficulty } = req.body;
    if (!topic) return res.status(400).json({ success: false, message: 'Topic is required' });

    const mcqs = await aiService.generateMCQs(topic, difficulty);
    res.json({ success: true, data: mcqs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.generateRoadmap = async (req, res) => {
  try {
    const { skill } = req.body;
    if (!skill) return res.status(400).json({ success: false, message: 'Skill is required' });

    const roadmap = await aiService.generateRoadmap(skill);
    res.json({ success: true, data: roadmap });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.generateInterviewPrep = async (req, res) => {
  try {
    const { skill, difficulty } = req.body;
    if (!skill) return res.status(400).json({ success: false, message: 'Skill is required' });

    const questions = await aiService.generateInterviewQuestions(skill, difficulty);
    res.json({ success: true, data: questions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
