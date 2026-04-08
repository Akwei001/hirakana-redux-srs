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

  const handleFlip = () => setIsFlipped(true);

  const handleAnswer = (rating: "knew" | "unsure" | "forgot") => {
    const nextCorrect = rating === "knew" ? correct + 1 : correct;
    const nextIndex = index + 1;

    if (nextIndex >= studyDeck.length) {
      // try/catch here because localStorage can fail in private browsing
      // or when storage is full — we don't want that to block navigation
      try {
        localStorage.setItem(
          "lastResult",
          JSON.stringify({
            correct: nextCorrect,
            total: studyDeck.length,
            deck: "Hiragana",
          })
        );
      } catch (error) {
        console.warn("Could not save result to localStorage:", error);
      }

      router.push("/complete");
    } else {
      setIndex(nextIndex);
      setIsFlipped(false);
      setCorrect(nextCorrect);
    }
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