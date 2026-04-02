'use client'

import { useState } from "react";



export default function QuizPage() {


  const [index, setIndex]         = useState(0);     // which card
const [isFlipped, setIsFlipped] = useState(false); // answer showing?
const [correct, setCorrect]     = useState(0);     // score tracker

  return (
    <div className="space-y-2">
      <div>QuizPage</div>
      <div className="text-sm text-muted-foreground">
        Card {index + 1} · {isFlipped ? "Answer" : "Prompt"} · Correct {correct}
      </div>
      <div className="flex gap-2">
        <button className="underline" onClick={() => setIsFlipped((v) => !v)}>
          Flip
        </button>
        <button className="underline" onClick={() => setIndex((v) => v + 1)}>
          Next
        </button>
        <button className="underline" onClick={() => setCorrect((v) => v + 1)}>
          Mark Correct
        </button>
      </div>
    </div>
  )
}

