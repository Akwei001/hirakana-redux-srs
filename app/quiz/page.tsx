"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getStudyDeck } from "@/app/data/kana";
import QuizProgressBar from "@/app/components/QuizProgressBar";
import FlipAnswerButton from "@/app/components/FlipAnswerButton";
import ConfidenceButtons from "@/app/components/ConfidenceButtons";

export default function QuizPage() {
  const router = useRouter();
  const [studyDeck] = useState(() => getStudyDeck());
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [correct, setCorrect] = useState(0);

  const currentCard = studyDeck[index];

  if (!currentCard) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <p className="text-muted-foreground">No cards available.</p>
      </div>
    );
  }

  const handleFlip = () => setIsFlipped(true);

  const handleAnswer = (rating: "knew" | "unsure" | "forgot") => {
    const nextCorrect = rating === "knew" ? correct + 1 : correct;
    const nextIndex = index + 1;
  
    setCorrect(nextCorrect);
  
    if (nextIndex >= studyDeck.length) {
      localStorage.setItem(
        "lastResult",
        JSON.stringify({
          correct: nextCorrect,
          total: studyDeck.length,
          deck: "Hiragana",
        })
      );
      router.push("/complete");
      return;
    }
  
    setIndex(nextIndex);
    setIsFlipped(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <QuizProgressBar current={index + 1} total={studyDeck.length} />

        <div className="flex flex-col items-center gap-4">
          <div className="text-8xl font-bold">{currentCard.symbol}</div>

          {isFlipped && (
            <div className="text-3xl text-muted-foreground font-medium">
              {currentCard.romaji}
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-4">
          <FlipAnswerButton onFlip={handleFlip} isFlipped={isFlipped} />
          <ConfidenceButtons onAnswer={handleAnswer} isVisible={isFlipped} />
        </div>
      </div>
    </div>
  );
}