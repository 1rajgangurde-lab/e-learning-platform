const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./src/routes/authRoutes');
const courseRoutes = require('./src/routes/courseRoutes');
const lessonRoutes = require('./src/routes/lessonRoutes');
const quizRoutes = require('./src/routes/quizRoutes');
const enrollmentRoutes = require('./src/routes/enrollmentRoutes');
const progressRoutes = require('./src/routes/progressRoutes');
const certificateRoutes = require('./src/routes/certificateRoutes');
const interactionRoutes = require('./src/routes/interactionRoutes');
const portfolioRoutes = require('./src/routes/portfolioRoutes');
const resumeRoutes = require('./src/routes/resumeRoutes');
const notificationRoutes = require('./src/routes/notificationRoutes');
const gamificationRoutes = require('./src/routes/gamificationRoutes');
const aiRoutes = require('./src/routes/aiRoutes');
const wishlistRoutes = require('./src/routes/wishlistRoutes');
const streakRoutes = require('./src/routes/streakRoutes');
const bookmarkRoutes = require('./src/routes/bookmarkRoutes');
const uploadRoutes = require('./src/routes/uploadRoutes');
const submissionRoutes = require('./src/routes/submissionRoutes');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { errorHandler } = require('./src/middleware/errorHandler');

const app = express();

// Middleware
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100,
});
app.use('/api', limiter);
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Mount routers
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/enroll', enrollmentRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/interactions', interactionRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/streak', streakRoutes);
app.use('/api/bookmarks', bookmarkRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/submissions', submissionRoutes);
app.use('/api', gamificationRoutes);
app.use('/api/v1/ai', aiRoutes);

// TEMPORARY SEED ENDPOINT
app.get('/api/seed', async (req, res) => {
  try {
    const mongoose = require('mongoose');
    const Course = require('./src/models/Course');
    const Lesson = require('./src/models/Lesson');
    const User = require('./src/models/User');

    let instructor = await User.findOne({ role: 'instructor' });
    if (!instructor) {
      instructor = await User.findOne();
      if (!instructor) {
        instructor = await User.create({
          name: 'Jane Doe',
          email: 'instructor@test.com',
          password: 'password123',
          role: 'instructor'
        });
      } else {
        instructor.role = 'instructor';
        await instructor.save();
      }
    }

    await Course.deleteMany({});
    await Lesson.deleteMany({});

    const courses = await Course.insertMany([
      {
        title: 'Master React & Next.js',
        description: 'Learn modern React, Next.js, Hooks, and Redux from scratch.',
        instructor: instructor._id,
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
        price: 49.99,
        category: 'Web Development',
        level: 'Intermediate',
        tags: ['React', 'Next.js', 'Frontend'],
        duration: 750,
        isPublished: true,
      },
      {
        title: 'Complete Python Bootcamp',
        description: 'Go from zero to hero in Python 3. Build real projects.',
        instructor: instructor._id,
        thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?w=800&q=80',
        price: 89.99,
        category: 'Data Science',
        level: 'Beginner',
        tags: ['Python', 'Data Science', 'Programming'],
        duration: 1320,
        isPublished: true,
      },
      {
        title: 'UI/UX Design Masterclass',
        description: 'Design beautiful, usable interfaces with Figma and Webflow.',
        instructor: instructor._id,
        thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
        price: 0,
        category: 'Design',
        level: 'Beginner',
        tags: ['Figma', 'UI/UX', 'Design'],
        duration: 345,
        isPublished: true,
      }
    ]);

    const firstCourse = courses[0];
    const lessons = await Lesson.insertMany([
      { course: firstCourse._id, title: '1. Introduction to React', description: 'What is React and why should you use it?', videoUrl: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8', videoType: 'youtube', duration: 900, orderIndex: 1, isPreview: true, isPublished: true },
      { course: firstCourse._id, title: '2. Setup and Installation', description: 'Setting up your development environment.', videoUrl: 'https://www.youtube.com/watch?v=N3AkSS5hXMA', videoType: 'youtube', duration: 1200, orderIndex: 2, isPreview: false, isPublished: true }
    ]);
    
    await Lesson.insertMany([
      { course: courses[1]._id, title: '1. Hello Python', description: 'Your first python code.', videoUrl: 'https://www.youtube.com/watch?v=kqtD5dpn9C8', videoType: 'youtube', duration: 1800, orderIndex: 1, isPreview: true, isPublished: true }
    ]);

    firstCourse.lessons = lessons.map(l => l._id);
    await firstCourse.save();

    res.json({ message: 'Successfully seeded 3 courses and multiple lessons! 🎉' });
  } catch (error) {
    console.error('Error seeding data:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  const mongoose = require('mongoose');
  const dbState = mongoose.connection.readyState;
  res.json({ 
    message: 'E-Learning API is running!',
    database_status: dbState === 1 ? 'Connected to MongoDB ✅' : 'Disconnected ❌',
    endpoints: '/api/auth'
  });
});

app.use(errorHandler);

module.exports = app;
