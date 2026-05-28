const Quiz = require('../models/Quiz');
const QuizAttempt = require('../models/QuizAttempt');
const QuizLeaderboard = require('../models/QuizLeaderboard');
const { awardXP, awardBadge } = require('./achievementService');

exports.gradeQuiz = async (quizId, userId, answers, timeTaken, tabSwitches) => {
  const quiz = await Quiz.findById(quizId);
  if (!quiz) throw new Error('Quiz not found');

  let totalScore = 0;
  let maxPossibleScore = 0;
  let wrongAnswersCount = 0;
  
  const processedAnswers = quiz.questions.map(question => {
    maxPossibleScore += question.points;
    const userAnswer = answers.find(a => a.questionId.toString() === question._id.toString());
    
    if (!userAnswer) {
      wrongAnswersCount++;
      return { questionId: question._id, selectedOptions: [], isCorrect: false, pointsEarned: 0 };
    }

    let isCorrect = false;
    
    const correctOptions = question.options.filter(o => o.isCorrect).map(o => o._id.toString());
    const userSelectedOptions = userAnswer.selectedOptions || [];
    
    if (correctOptions.length === userSelectedOptions.length && 
        correctOptions.every(val => userSelectedOptions.includes(val))) {
      isCorrect = true;
      totalScore += question.points;
    } else {
      wrongAnswersCount++;
      if (quiz.negativeMarking) {
        totalScore -= (question.points * 0.25);
      }
    }

    return {
      questionId: question._id,
      selectedOptions: userSelectedOptions,
      isCorrect,
      pointsEarned: isCorrect ? question.points : (quiz.negativeMarking && !isCorrect ? -(question.points * 0.25) : 0)
    };
  });

  totalScore = Math.max(0, totalScore);
  const percentage = Math.round((totalScore / maxPossibleScore) * 100);
  const passed = percentage >= quiz.passingScore;
  
  let xpEarned = 0;
  let badgeEarned = 'None';
  
  if (passed) {
    xpEarned = 20;
    await awardXP(userId, xpEarned, 'Passed Quiz');
    
    if (percentage === 100) {
      badgeEarned = 'Gold Badge';
      await awardBadge(userId, 'Gold Badge');
    } else if (percentage >= 90) {
      badgeEarned = 'Silver Badge';
      await awardBadge(userId, 'Silver Badge');
    }
  }

  if (passed) {
    await exports.updateLeaderboard(quiz._id, userId, totalScore, percentage, timeTaken);
  }

  const attemptCount = await QuizAttempt.countDocuments({ user: userId, quiz: quizId });

  const attempt = await QuizAttempt.create({
    user: userId,
    quiz: quizId,
    attemptNumber: attemptCount + 1,
    score: totalScore,
    percentage,
    passed,
    xpEarned,
    badgeEarned,
    submittedAt: new Date(),
    timeTaken,
    answers: processedAnswers,
    wrongAnswers: wrongAnswersCount,
    tabSwitches,
    status: 'completed'
  });

  return attempt;
};

exports.updateLeaderboard = async (quizId, userId, score, percentage, timeTaken) => {
  const existing = await QuizLeaderboard.findOne({ quiz: quizId, user: userId });
  
  if (!existing || percentage > existing.percentage || (percentage === existing.percentage && timeTaken < existing.timeTaken)) {
    if (existing) {
      existing.score = score;
      existing.percentage = percentage;
      existing.timeTaken = timeTaken;
      await existing.save();
    } else {
      await QuizLeaderboard.create({ quiz: quizId, user: userId, score, percentage, timeTaken });
    }
  }
};
