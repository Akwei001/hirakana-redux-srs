"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

    if (!lastResult) return;

    try {
      const parsedResult: QuizResult = JSON.parse(lastResult);
      setResult(parsedResult);
    } catch (error) {
      console.error("Failed to parse lastResult from localStorage:", error);
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
            <Button
              onClick={() => router.push("/")}
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
            >
              Go Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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

          <div className="flex flex-col gap-3 pt-2">
            <Button
              onClick={() => router.push("/quiz")}
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
            >
              Study Again
            </Button>

            <Button
              onClick={() => router.push("/")}
              className="px-4 py-2 rounded-md border"
            >
              Back Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}