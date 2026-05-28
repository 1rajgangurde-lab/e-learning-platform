require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./src/models/Course');
const User = require('./src/models/User');

const seedCourses = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/elearning');
    console.log('Connected to DB');

    // Find an instructor to assign courses to
    let instructor = await User.findOne({ role: 'instructor' });
    if (!instructor) {
      instructor = await User.create({
        name: 'John Instructor',
        email: 'instructor@test.com',
        password: 'password123',
        role: 'instructor',
        isVerified: true
      });
      console.log('Created dummy instructor');
    }

    const mockCourses = [
      {
        title: 'Complete Web Development Bootcamp',
        description: 'Learn full-stack web development from scratch using modern technologies like React, Node.js, and MongoDB.',
        instructor: instructor._id,
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=60&w=400&fm=webp',
        category: 'Web Development',
        level: 'Beginner',
        price: 49.99,
        duration: 1200,
        lessons: 50,
        isPublished: true,
        ratingAverage: 4.8,
        enrollmentCount: 1500
      },
      {
        title: 'Advanced React Patterns',
        description: 'Master React by learning advanced design patterns, performance optimization, and custom hooks.',
        instructor: instructor._id,
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=60&w=400&fm=webp',
        category: 'Web Development',
        level: 'Advanced',
        price: 79.99,
        duration: 600,
        lessons: 24,
        isPublished: true,
        ratingAverage: 4.9,
        enrollmentCount: 850
      },
      {
        title: 'UI/UX Design Masterclass',
        description: 'Learn the principles of UI/UX design and how to create stunning interfaces using Figma.',
        instructor: instructor._id,
        thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=60&w=400&fm=webp',
        category: 'Design',
        level: 'Beginner',
        price: 0,
        duration: 300,
        lessons: 15,
        isPublished: true,
        ratingAverage: 4.7,
        enrollmentCount: 2200
      },
      {
        title: 'Data Science with Python',
        description: 'A comprehensive guide to Data Science, Machine Learning, and Data Analysis using Python and Pandas.',
        instructor: instructor._id,
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=60&w=400&fm=webp',
        category: 'Data Science',
        level: 'Intermediate',
        price: 59.99,
        duration: 900,
        lessons: 40,
        isPublished: true,
        ratingAverage: 4.6,
        enrollmentCount: 1100
      },
      {
        title: 'iOS Mobile App Development',
        description: 'Learn Swift and build beautiful native iOS apps from scratch.',
        instructor: instructor._id,
        thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=60&w=400&fm=webp',
        category: 'Mobile App',
        level: 'Beginner',
        price: 89.99,
        duration: 1500,
        lessons: 60,
        isPublished: true,
        ratingAverage: 4.5,
        enrollmentCount: 600
      },
      {
        title: 'Digital Marketing Fundamentals',
        description: 'Master SEO, social media marketing, and email campaigns to grow your business.',
        instructor: instructor._id,
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=400&fm=webp',
        category: 'Marketing',
        level: 'Beginner',
        price: 0,
        duration: 240,
        lessons: 12,
        isPublished: true,
        ratingAverage: 4.3,
        enrollmentCount: 3400
      }
    ];

    // Delete existing dummy courses or clear them
    // For safety, we will just insert these and avoid deleting user data,
    // or we can delete courses by this dummy instructor.
    await Course.deleteMany({ instructor: instructor._id });
    
    await Course.insertMany(mockCourses);
    console.log('Successfully seeded 6 courses!');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding courses:', error);
    process.exit(1);
  }
};

seedCourses();
