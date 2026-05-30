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
