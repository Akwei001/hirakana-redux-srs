"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-background to-primary/5 px-6 py-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-24 -right-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-2xl items-center justify-center">
          <Card className="w-full border-primary/10 bg-card/70 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-card/60">
            <CardHeader className="pb-4">
              <CardTitle className="text-center">No result found</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 text-center">
              <p className="text-sm text-muted-foreground">
                Finish a quiz first to see your results here.
              </p>
              <Button onClick={() => router.push("/")} className="w-full">
                Back Home
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const percent =
    result.total > 0 ? Math.round((result.correct / result.total) * 100) : 0;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-background to-primary/5 px-6 py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-24 -right-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-2xl items-center justify-center">
        <Card className="w-full border-primary/10 bg-card/70 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-card/60">
          <CardHeader className="pb-4">
            <CardTitle className="text-center">Session Complete</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg border bg-background/40 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Score</p>
                  <p className="mt-1 text-4xl font-semibold tracking-tight">
                    {result.correct}
                    <span className="text-muted-foreground">/{result.total}</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Accuracy</p>
                  <p className="mt-1 text-2xl font-semibold">{percent}%</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Progress</span>
                  <span>
                    {result.correct} correct
                  </span>
                </div>
                <Progress value={percent} />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border bg-background/40 p-4">
                <p className="text-xs text-muted-foreground">Deck</p>
                <p className="mt-1 truncate font-medium">{result.deck}</p>
              </div>
              <div className="rounded-lg border bg-background/40 p-4">
                <p className="text-xs text-muted-foreground">Cards reviewed</p>
                <p className="mt-1 font-medium">{result.total}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => router.push("/quiz")} className="sm:flex-1">
                Study Again
              </Button>
              <Button
                onClick={() => router.push("/")}
                variant="outline"
                className="sm:flex-1"
              >
                Back Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}