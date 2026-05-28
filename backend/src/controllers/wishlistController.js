const Wishlist = require('../models/Wishlist');
const Course = require('../models/Course');

exports.addToWishlist = async (req, res) => {
  try {
    const { courseId } = req.body;
    
    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' });

    // Check if already wishlisted
    const existing = await Wishlist.findOne({ user: req.user.id, course: courseId });
    if (existing) return res.status(400).json({ success: false, message: 'Course already in wishlist' });

    const wishlistItem = await Wishlist.create({ user: req.user.id, course: courseId });
    res.status(201).json({ success: true, data: wishlistItem });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.removeFromWishlist = async (req, res) => {
  try {
    const { id } = req.params; // Can be courseId
    const deleted = await Wishlist.findOneAndDelete({ user: req.user.id, course: id });
    
    if (!deleted) return res.status(404).json({ success: false, message: 'Not found in wishlist' });
    
    res.json({ success: true, message: 'Removed from wishlist' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getWishlist = async (req, res) => {
  try {
    const items = await Wishlist.find({ user: req.user.id })
      .populate('course')
      .sort('-createdAt');
    res.json({ success: true, count: items.length, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getWishlistCount = async (req, res) => {
  try {
    const count = await Wishlist.countDocuments({ user: req.user.id });
    res.json({ success: true, data: count });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
