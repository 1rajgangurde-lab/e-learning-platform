const Submission = require('../models/Submission');
const Lesson = require('../models/Lesson');

// @desc    Submit a project
// @route   POST /api/submissions
// @access  Private (Student)
exports.submitProject = async (req, res) => {
  try {
    const { course, projectTitle, githubLink, demoLink, fileUrl } = req.body;
    
    // In a real app, verify they are enrolled in the course.
    const submission = await Submission.create({
      user: req.user.id,
      course,
      projectTitle,
      githubLink,
      demoLink,
      fileUrl
    });

    res.status(201).json({ success: true, data: submission });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all submissions for a course (Instructor)
// @route   GET /api/submissions/course/:courseId
// @access  Private (Instructor/Admin)
exports.getCourseSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({ course: req.params.courseId })
      .populate('user', 'name email avatar')
      .sort({ createdAt: -1 });
      
    res.json({ success: true, count: submissions.length, data: submissions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Grade/Update a submission
// @route   PUT /api/submissions/:id/grade
// @access  Private (Instructor/Admin)
exports.gradeSubmission = async (req, res) => {
  try {
    const { status } = req.body;
    
    const submission = await Submission.findByIdAndUpdate(
      req.params.id, 
      { status }, 
      { new: true }
    );

    if (!submission) {
      return res.status(404).json({ success: false, message: 'Submission not found' });
    }

    res.json({ success: true, data: submission });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
