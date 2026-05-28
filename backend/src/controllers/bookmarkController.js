const Bookmark = require('../models/Bookmark');

exports.addBookmark = async (req, res, next) => {
  try {
    const { courseId, lessonId, timestamp, note } = req.body;
    const bookmark = await Bookmark.create({
      user: req.user._id,
      course: courseId,
      lesson: lessonId,
      timestamp,
      note
    });
    res.status(201).json({ success: true, data: bookmark });
  } catch (error) {
    next(error);
  }
};

exports.getBookmarks = async (req, res, next) => {
  try {
    const bookmarks = await Bookmark.find({ 
      user: req.user._id, 
      lesson: req.params.lessonId 
    }).sort('timestamp');
    res.status(200).json({ success: true, data: bookmarks });
  } catch (error) {
    next(error);
  }
};
