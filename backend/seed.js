const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./src/models/Course');
const Lesson = require('./src/models/Lesson');
const User = require('./src/models/User');

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/elearning');

const seedCourses = async () => {
  try {
    let instructor = await User.findOne({ role: 'instructor' });
    if (!instructor) {
      instructor = await User.findOne();
      if (!instructor) {
        console.log('No users found. Creating a dummy instructor...');
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
    console.log('Cleared existing courses & lessons');

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
        duration: 750, // 12h 30m in minutes
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
        duration: 1320, // 22h 0m
        isPublished: true,
      },
      {
        title: 'UI/UX Design Masterclass',
        description: 'Design beautiful, usable interfaces with Figma and Webflow.',
        instructor: instructor._id,
        thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
        price: 0, // Free course
        category: 'Design',
        level: 'Beginner',
        tags: ['Figma', 'UI/UX', 'Design'],
        duration: 345, // 5h 45m
        isPublished: true,
      }
    ]);

    const firstCourse = courses[0];
    const lessons = await Lesson.insertMany([
      {
        course: firstCourse._id,
        title: '1. Introduction to React',
        description: 'What is React and why should you use it?',
        videoUrl: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
        videoType: 'youtube',
        duration: 900,
        orderIndex: 1,
        isPreview: true,
        isPublished: true
      },
      {
        course: firstCourse._id,
        title: '2. Setup and Installation',
        description: 'Setting up your development environment.',
        videoUrl: 'https://www.youtube.com/watch?v=N3AkSS5hXMA',
        videoType: 'youtube',
        duration: 1200,
        orderIndex: 2,
        isPreview: false,
        isPublished: true
      }
    ]);
    
    await Lesson.insertMany([
      {
        course: courses[1]._id,
        title: '1. Hello Python',
        description: 'Your first python code.',
        videoUrl: 'https://www.youtube.com/watch?v=kqtD5dpn9C8',
        videoType: 'youtube',
        duration: 1800,
        orderIndex: 1,
        isPreview: true,
        isPublished: true
      }
    ]);

    firstCourse.lessons = lessons.map(l => l._id);
    await firstCourse.save();

    console.log('Successfully seeded 3 courses and multiple lessons! 🎉');
    process.exit(0);

  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedCourses();
