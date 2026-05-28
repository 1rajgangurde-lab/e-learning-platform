import React from 'react';
import { useEnrollmentMutations, useMyCourses } from '../../hooks/useEnrollment';
import { PlayCircle, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EnrollButton = ({ courseId, price }) => {
  const { data } = useMyCourses();
  const { enroll, isEnrolling } = useEnrollmentMutations();
  const navigate = useNavigate();

  const isEnrolled = Array.isArray(data?.data?.data) && data?.data?.data.some(enrollment => 
    (enrollment.course._id === courseId || enrollment.course === courseId) && !enrollment.isArchived
  );

  if (isEnrolled) {
    return (
      <button 
        onClick={() => navigate(`/courses/${courseId}`)}
        className="w-full py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20 mb-3 flex justify-center items-center gap-2"
      >
        <PlayCircle className="w-5 h-5" />
        Resume Learning
      </button>
    );
  }

  return (
    <button 
      onClick={() => enroll(courseId)}
      disabled={isEnrolling}
      className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 mb-3 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {isEnrolling ? (
        <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
      ) : (
        `Enroll Now ${price === 0 ? '(Free)' : `($${price})`}`
      )}
    </button>
  );
};

export default EnrollButton;
