"use client"
import {useRouter} from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import StartQuizButton from './StartQuizButton';
import { hiragana, katakana } from "@/app/data/kana";

export function DeckCards() {
  const router = useRouter();
  const decks = [
    {
      name: "Hiragana",
      learned: 21,
      total: 46,
      progress: 45,
      streak: 3,
      cards: hiragana,
    },
    {
      name: "Katakana", 
      learned: 9,
      total: 46,
      progress: 20,
      streak: 1,
      cards: katakana,
    },
    {
      name: "Japanese Vocabulary",
      learned: 65,
      total: 100,
      progress: 65,
      streak: 7,
      cards: [],
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {decks.map((deck) => (
        <Card key={deck.name}>
          <CardHeader>
            <CardTitle className="text-lg">{deck.name}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {deck.learned} / {deck.total} cards
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Progress Section */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Progress</span>
                <span className="text-sm font-medium">{deck.progress}%</span>
              </div>
              <Progress value={deck.progress} className="h-2 [&>div]:bg-accent bg-secondary" />
            </div>

            {/* Streak and Study Button */}
            <div className="flex items-center gap-3">
              <div>
                <div className="text-2xl font-bold">{deck.streak}</div>
                <div className="text-xs text-muted-foreground">Streak</div>
              </div>

              <div className="ml-auto flex items-center gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => router.push("/quiz")}
                  disabled={deck.name !== "Hiragana"}
                >
                  Study
                </Button>

                <StartQuizButton
                  deck={deck.name}
                  cards={deck.cards}
                  disabled={deck.cards.length === 0}
                  className="h-8 px-3"
                >
                  Start Quiz
                </StartQuizButton>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
 