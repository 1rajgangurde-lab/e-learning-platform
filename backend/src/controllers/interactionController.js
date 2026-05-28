const Comment = require('../models/Comment');
const Rating = require('../models/Rating');

exports.addComment = async (req, res, next) => {
  try {
    const comment = new Comment({
      user: req.user._id,
      course: req.body.courseId,
      text: req.body.text,
      parentComment: req.body.parentComment || null
    });
    await comment.save();
    res.status(201).json({ success: true, comment });
  } catch (error) {
    next(error);
  }
};

exports.addRating = async (req, res, next) => {
  try {
    const rating = await Rating.findOneAndUpdate(
      { user: req.user._id, course: req.body.courseId },
      { rating: req.body.rating, reviewText: req.body.reviewText },
      { upsert: true, new: true }
    );
    res.status(201).json({ success: true, rating });
  } catch (error) {
    next(error);
  }
};
