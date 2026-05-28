const Quiz = require('../models/Quiz');
const QuizAttempt = require('../models/QuizAttempt');
const QuizLeaderboard = require('../models/QuizLeaderboard');
const quizService = require('../services/quizService');

exports.createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.status(201).json({ success: true, data: quiz });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id).lean();
    if (!quiz) return res.status(404).json({ success: false, message: 'Quiz not found' });
    
    // Security: Strip out correct answers and explanations before sending to client
    quiz.questions = quiz.questions.map(q => {
      q.options = q.options.map(o => {
        delete o.isCorrect;
        return o;
      });
      delete q.explanation;
      return q;
    });

    res.json({ success: true, data: quiz });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.submitQuiz = async (req, res) => {
  try {
    const { answers, timeTaken, tabSwitches } = req.body;
    
    const attempt = await quizService.gradeQuiz(req.params.id, req.user.id, answers, timeTaken, tabSwitches);
    
    res.json({ success: true, data: attempt });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getQuizResult = async (req, res) => {
  try {
    // Populate the quiz to get the explanations back for the result screen
    const attempt = await QuizAttempt.findById(req.params.attemptId).populate('quiz');
      
    if (!attempt) return res.status(404).json({ success: false, message: 'Attempt not found' });
    if (attempt.user.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    res.json({ success: true, data: attempt });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await QuizLeaderboard.find({ quiz: req.params.id })
      .sort({ percentage: -1, timeTaken: 1 })
      .limit(10)
      .populate('user', 'name avatar');
      
    res.json({ success: true, data: leaderboard });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
