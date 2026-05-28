import React from 'react';
import { useParams } from 'react-router-dom';
import ResultCard from '../../components/quiz/ResultCard';
import LeaderboardCard from '../../components/quiz/LeaderboardCard';

const QuizResultPage = () => {
  const { id, attemptId } = useParams();
  
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <ResultCard attemptId={attemptId} />
      <LeaderboardCard quizId={id} />
    </div>
  );
};

export default QuizResultPage;
