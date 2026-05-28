export const dashboardMock = {
  studentStats: {
    totalCourses: 12,
    completedCourses: 4,
    learningHours: 124,
    xpPoints: 3450,
    learningStreak: 12,
    achievements: 8,
    certificates: 3,
    weeklyGoalProgress: 85,
    leaderboardRank: 42
  },
  instructorStats: {
    totalStudents: 1248,
    publishedCourses: 8,
    revenue: 12450,
    averageRating: 4.8,
    courseCompletion: 68,
    studentRetention: 85,
    assignmentReviews: 24,
    pendingApprovals: 5
  },
  adminStats: {
    activeUsers: 24592,
    newRegistrations: 1205,
    totalCourses: 1248,
    reportsQueue: 12,
    systemHealth: 99.9,
    storageUsage: 65,
    aiRequestsCount: 15420,
    announcements: 3
  },
  revenueChart: [
    { name: 'Jan', revenue: 4000, students: 2400 },
    { name: 'Feb', revenue: 3000, students: 1398 },
    { name: 'Mar', revenue: 2000, students: 9800 },
    { name: 'Apr', revenue: 2780, students: 3908 },
    { name: 'May', revenue: 1890, students: 4800 },
    { name: 'Jun', revenue: 2390, students: 3800 },
    { name: 'Jul', revenue: 3490, students: 4300 },
  ],
  courseProgress: [
    { name: 'React Patterns', progress: 80 },
    { name: 'Node.js API', progress: 45 },
    { name: 'UI/UX Design', progress: 20 },
    { name: 'MongoDB', progress: 100 },
  ],
  leaderboard: [
    { id: 1, name: 'Alex S.', xp: 4500, rank: 1, avatar: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Sarah M.', xp: 4200, rank: 2, avatar: 'https://via.placeholder.com/40' },
    { id: 3, name: 'John D.', xp: 3900, rank: 3, avatar: 'https://via.placeholder.com/40' },
    { id: 4, name: 'You', xp: 3450, rank: 42, avatar: 'https://via.placeholder.com/40' },
  ],
  recentActivity: [
    { id: 1, title: 'Completed Lesson', description: 'Compound Components in React', time: '2 hours ago', type: 'lesson' },
    { id: 2, title: 'Earned Badge', description: '7-Day Streak Achieved', time: '5 hours ago', type: 'achievement' },
    { id: 3, title: 'Passed Quiz', description: 'React Hooks Assessment (95%)', time: '1 day ago', type: 'quiz' },
  ],
  notifications: [
    { id: 1, title: 'New Course Available', message: 'Advanced GraphQL is now live.', date: 'Today' },
    { id: 2, title: 'Assignment Graded', message: 'You received an A on Node.js Project.', date: 'Yesterday' }
  ]
};
