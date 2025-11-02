"use client"
 
 import React from 'react'
// StartQuizButton.tsx
import { useDispatch } from 'react-redux';
import { startQuiz } from '@/store/quizSlice';
import { useRouter } from 'next/navigation';
import { KanaChar } from '@/app/data/kana'; // Import your type
import { Button } from '@/components/ui/button';

type StartQuizButtonProps = {
  deck: string;
  cards: KanaChar[];
};

function StartQuizButton({ deck, cards }: StartQuizButtonProps ) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleStartQuiz = () => {
    dispatch(startQuiz({ deck, cards }));
    router.push('/quiz'); // go to quiz page
  };

  return (
    <Button onClick={handleStartQuiz}>
      Start Quiz
    </Button>
  );
}

export default StartQuizButton