"use client"
 
import { useDispatch } from 'react-redux';
import { startQuiz } from '@/store/quizSlice';
import { useRouter } from 'next/navigation';
import { KanaChar } from '@/app/data/kana'; // Import your type
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";

type StartQuizButtonProps = {
  deck: string;
  cards: KanaChar[];
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
};

function StartQuizButton({ deck, cards, disabled, className, children }: StartQuizButtonProps ) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleStartQuiz = () => {
    if (disabled) return;
    dispatch(startQuiz({ deck, cards }));
    router.push('/quiz'); // go to quiz page
  };

  return (
    <Button
      onClick={handleStartQuiz}
      disabled={disabled}
      className={cn(className)}
    >
      {children ?? "Start Quiz"}
    </Button>
  );
}

export default StartQuizButton