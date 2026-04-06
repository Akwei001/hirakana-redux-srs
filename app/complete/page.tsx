"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type QuizResult = {
  correct: number;
  total: number;
  deck: string;
};

export default function CompletePage() {
  const router = useRouter();
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    const lastResult = localStorage.getItem("lastResult");

    if (lastResult) {
      setResult(JSON.parse(lastResult));
    }
  }, []);

  if (!result) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle>No result found</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Finish a quiz first to see your results here.
            </p>
            <button
              onClick={() => router.push("/")}
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
            >
              Go Home
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  console.log(result);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle>Session Complete</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-2xl font-bold">
            {result.correct} / {result.total}
          </p>
          <p className="text-muted-foreground">
            Deck: {result.deck}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}