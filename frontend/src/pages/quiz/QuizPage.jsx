import React from 'react';
import { useParams } from 'react-router-dom';
import QuizPlayer from '../../components/quiz/QuizPlayer';

const QuizPage = () => {
  const { id } = useParams();
  return <QuizPlayer quizId={id} />;
};

export default QuizPage;
