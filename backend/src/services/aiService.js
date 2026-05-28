const Portfolio = require('../models/Portfolio');
const Resume = require('../models/Resume');

// Note: This service could eventually wrap an LLM (like OpenAI) to auto-generate the feedback
// For now, it handles the DB logic for Portfolio and Resume

exports.updatePortfolio = async (userId, portfolioData) => {
  return await Portfolio.findOneAndUpdate(
    { user: userId },
    portfolioData,
    { new: true, upsert: true, runValidators: true }
  );
};

exports.getPortfolio = async (userId) => {
  return await Portfolio.findOne({ user: userId });
};

exports.updateResume = async (userId, resumeData) => {
  return await Resume.findOneAndUpdate(
    { user: userId },
    resumeData,
    { new: true, upsert: true, runValidators: true }
  );
};

exports.getResume = async (userId) => {
  return await Resume.findOne({ user: userId }).populate('recommendedCourses');
};

// --- AI Study Assistant Methods (Mocked for now) ---
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

exports.generateChatResponse = async (topic, message) => {
  await delay(1500);
  return {
    role: 'assistant',
    content: `Here is some information about **${topic || 'this topic'}**. \n\nYou asked: "${message}".\n\nThis is a simulated AI response. To implement real AI, you can integrate the \`@google/genai\` SDK here and pass the conversation history.`
  };
};

exports.generateNotes = async (topic) => {
  await delay(2000);
  return `
# Comprehensive Notes: ${topic}

## 1. Introduction
${topic} is a fundamental concept that plays a crucial role in modern development.

## 2. Key Concepts
- **Core Principle**: Understanding the basics is essential.
- **Advanced Patterns**: Once you master the basics, you can move to advanced usage.

## 3. Summary
These auto-generated notes serve as a starting point for your studies.
  `;
};

exports.summarizeText = async (text) => {
  await delay(2000);
  return `**AI Summary**: The provided text (length: ${text.length} characters) primarily discusses the core concepts of the topic. It highlights the importance of understanding the fundamentals and applying them in practical scenarios.`;
};

exports.generateMCQs = async (topic, difficulty) => {
  await delay(2000);
  return [
    {
      question: `What is the primary purpose of ${topic}?`,
      options: ['To optimize performance', 'To handle data storage', 'To provide a structured approach', 'None of the above'],
      correctAnswer: 'To provide a structured approach',
      explanation: `Providing a structured approach is the main goal when dealing with ${topic}.`
    },
    {
      question: `Which of the following is an advanced concept in ${topic}?`,
      options: ['Basic syntax', 'Variables', 'Memory Management', 'Printing to console'],
      correctAnswer: 'Memory Management',
      explanation: 'Memory management is typically considered an advanced concept.'
    },
    {
      question: `How does ${topic} handle errors?`,
      options: ['It ignores them', 'It uses try-catch blocks', 'It crashes immediately', 'It relies on the OS'],
      correctAnswer: 'It uses try-catch blocks',
      explanation: 'Try-catch blocks are standard for error handling.'
    }
  ];
};

exports.generateRoadmap = async (skill) => {
  await delay(2500);
  return [
    { step: 1, title: 'Basics & Fundamentals', description: 'Understand the core syntax and basic concepts.' },
    { step: 2, title: 'Intermediate Concepts', description: 'Learn about data structures, algorithms, and state management.' },
    { step: 3, title: 'Advanced Patterns', description: 'Master design patterns, performance optimization, and architecture.' },
    { step: 4, title: 'Real-world Projects', description: 'Build 3-4 comprehensive projects to showcase your skills.' },
    { step: 5, title: 'Interview Preparation', description: 'Practice coding problems and system design questions.' }
  ];
};

exports.generateInterviewQuestions = async (skill, difficulty) => {
  await delay(2000);
  return [
    { question: `Can you explain the main principles of ${skill}?`, hint: 'Think about its core use cases.' },
    { question: `What are the trade-offs of using ${skill} compared to alternatives?`, hint: 'Consider performance and scalability.' },
    { question: `Describe a time you used ${skill} to solve a complex problem.`, hint: 'Use the STAR method.' },
    { question: `How would you optimize a slow application built with ${skill}?`, hint: 'Mention profiling and caching.' }
  ];
};
