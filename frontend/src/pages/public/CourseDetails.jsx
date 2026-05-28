import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCourseById } from '../../hooks/useCourses';
import { useWishlistMutations, useWishlist } from '../../hooks/useWishlist';
import ThemeLayout from '../../components/ui/ThemeLayout';

// Course Components
import CourseHero from '../../components/course/CourseHero';
import CourseOverview from '../../components/course/CourseOverview';
import LessonSidebar from '../../components/course/LessonSidebar';
import CoursePlayer from '../../components/course/CoursePlayer';
import ResourcePanel from '../../components/course/ResourcePanel';
import QuizSection from '../../components/course/QuizSection';
import DiscussionPanel from '../../components/course/DiscussionPanel';
import ReviewSection from '../../components/course/ReviewSection';
import InstructorCard from '../../components/course/InstructorCard';
import CertificatePreview from '../../components/course/CertificatePreview';
import RecommendedCourses from '../../components/course/RecommendedCourses';
import ContinueLearningCard from '../../components/course/ContinueLearningCard';
import LearningRoadmap from '../../components/course/LearningRoadmap';
import NotesPanel from '../../components/course/NotesPanel';
import TimestampBookmarks from '../../components/course/TimestampBookmarks';
import CourseStats from '../../components/course/CourseStats';
import CourseProgressRing from '../../components/course/CourseProgressRing';
import LessonProgress from '../../components/course/LessonProgress';
import CourseAchievements from '../../components/course/CourseAchievements';
import ProjectSection from '../../components/course/ProjectSection';
import CourseFAQ from '../../components/course/CourseFAQ';

const TABS = ['Overview', 'Lessons', 'Resources', 'Quiz', 'Projects', 'Discussion', 'Reviews', 'Instructor', 'Certificate'];

const CourseDetails = () => {
  const { id } = useParams();
  const { data: response, isLoading } = useCourseById(id);
  const { data: wishlistData } = useWishlist();
  const { addToWishlist, removeFromWishlist } = useWishlistMutations();
  
  const [activeTab, setActiveTab] = useState('Overview');
  const [activeLesson, setActiveLesson] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const course = response?.data;
  const isWishlisted = wishlistData?.data?.some(w => w.course._id === id);

  if (isLoading) return <ThemeLayout hideParticles={true}><div className="min-h-screen flex items-center justify-center text-white">Loading...</div></ThemeLayout>;
  if (!course) return <ThemeLayout hideParticles={true}><div className="min-h-screen flex items-center justify-center text-white">Course not found</div></ThemeLayout>;

  const curriculum = [
    {
      title: 'Section 1: Introduction',
      lessons: [
        { _id: 'l1', title: 'Welcome to the Course', duration: '05:00', videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', isCompleted: true },
        { _id: 'l2', title: 'Setup & Installation', duration: '12:30', videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', isCompleted: false },
      ]
    },
    {
      title: 'Section 2: Core Concepts',
      lessons: [
        { _id: 'l3', title: 'Understanding the Architecture', duration: '18:45', isLocked: true },
        { _id: 'l4', title: 'Advanced Patterns', duration: '22:10', isLocked: true },
      ]
    }
  ];

  const handleWishlist = () => {
    if (isWishlisted) removeFromWishlist(id);
    else addToWishlist(id);
  };

  const handleLessonSelect = (lesson) => {
    if (lesson.isLocked) return;
    setActiveLesson(lesson);
    setIsPlaying(true);
    setActiveTab('Lessons');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // If user starts playing, ensure we're on lessons tab for the sidebar layout
    if (isPlaying && activeTab !== 'Lessons') {
      setActiveTab('Lessons');
    }
  }, [isPlaying]);

  return (
    <ThemeLayout hideParticles={false}>
      <div className="pb-20 relative z-10">
        {/* Hero Section */}
        {!isPlaying && (
          <div className="pt-8 pb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6">
              <CourseHero 
                course={course} 
                isWishlisted={isWishlisted}
                onWishlist={handleWishlist}
                onPlay={() => handleLessonSelect(curriculum[0].lessons[0])}
              />
            </div>
          </div>
        )}

        {/* Video Player Section (When playing) */}
        {isPlaying && (
          <div className="bg-slate-950/80 border-b border-slate-800/50 pt-8 pb-8 relative z-20 shadow-2xl">
            <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <CoursePlayer course={course} currentLesson={activeLesson} />
                <div className="mt-4 flex justify-between items-center bg-slate-900/50 p-4 rounded-xl border border-slate-800/50">
                  <h2 className="text-2xl font-bold text-white">{activeLesson?.title}</h2>
                  <button onClick={() => setIsPlaying(false)} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Exit Player</button>
                </div>
              </div>
              <div className="hidden lg:block space-y-6">
                <h3 className="font-bold text-white text-xl">Course Curriculum</h3>
                <LessonSidebar sections={curriculum} activeLesson={activeLesson} onSelectLesson={handleLessonSelect} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tabs Navigation */}
      <div className="bg-slate-900/50 backdrop-blur-md border-y border-slate-800/50 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-8">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-all duration-300 ${
                  activeTab === tab 
                    ? 'border-blue-500 text-blue-400 drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]' 
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-12 relative z-20">
        <div className="lg:col-span-2 space-y-16">
          
          {/* Always show continue learning on Overview or Lessons */}
          {(activeTab === 'Overview' || activeTab === 'Lessons') && !isPlaying && (
            <ContinueLearningCard 
              lastLesson={curriculum[0].lessons[0]} 
              progress={35} 
              onContinue={() => handleLessonSelect(curriculum[0].lessons[0])} 
            />
          )}

          {activeTab === 'Overview' && (
            <div className="space-y-16">
              <CourseOverview 
                description={course.description}
                outcomes={course.learningOutcomes}
                requirements={course.requirements}
                skills={['React', 'State Management', 'Hooks', 'Redux']}
              />
              <CourseFAQ />
            </div>
          )}

          {activeTab === 'Lessons' && (
            <div className="space-y-10 animate-fade-in">
              <h3 className="text-2xl font-bold text-white">Course Curriculum</h3>
              {/* Only show sidebar here if not playing (it moves to top right when playing) */}
              {!isPlaying && (
                <LessonSidebar sections={curriculum} activeLesson={activeLesson} onSelectLesson={handleLessonSelect} />
              )}
            </div>
          )}

          {activeTab === 'Resources' && (
            <div className="animate-fade-in space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Downloadable Resources</h3>
              <ResourcePanel resources={[
                { title: 'Complete Source Code', type: 'ZIP', size: '14.5 MB', url: '#' },
                { title: 'Architecture Diagram', type: 'PDF', size: '2.1 MB', url: '#' },
                { title: 'Official Documentation', type: 'Link', url: '#' },
                { title: 'Cheat Sheet', type: 'DOC', size: '1 MB', url: '#' }
              ]} />
            </div>
          )}

          {activeTab === 'Quiz' && (
            <QuizSection />
          )}

          {activeTab === 'Projects' && (
            <ProjectSection />
          )}

          {activeTab === 'Discussion' && (
            <DiscussionPanel />
          )}

          {activeTab === 'Reviews' && (
            <ReviewSection />
          )}

          {activeTab === 'Instructor' && (
            <div className="animate-fade-in space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Your Instructor</h3>
              <InstructorCard instructor={course.instructor} />
            </div>
          )}

          {activeTab === 'Certificate' && (
            <CertificatePreview progress={65} courseName={course.title} />
          )}
        </div>

        {/* Dynamic Right Sidebar content based on tabs */}
        <div className="space-y-8">
          <CourseProgressRing progress={65} />
          
          {(activeTab === 'Overview' || activeTab === 'Lessons') && (
            <CourseStats />
          )}

          {(activeTab === 'Lessons' || activeTab === 'Resources' || activeTab === 'Projects') && (
            <LessonProgress />
          )}

          {(activeTab === 'Lessons' || activeTab === 'Overview') && (
            <>
              <NotesPanel />
              <TimestampBookmarks />
            </>
          )}

          {(activeTab === 'Certificate' || activeTab === 'Reviews') && (
            <CourseAchievements />
          )}
          
          {activeTab === 'Overview' && (
            <LearningRoadmap sections={curriculum} />
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <RecommendedCourses />
      </div>
    </ThemeLayout>
  );
};

export default CourseDetails;
