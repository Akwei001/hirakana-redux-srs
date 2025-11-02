"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function DeckCards() {
  const decks = [
    {
      name: "Hiragana",
      learned: 21,
      total: 46,
      progress: 45,
      streak: 3
    },
    {
      name: "Katakana", 
      learned: 9,
      total: 46,
      progress: 20,
      streak: 1
    },
    {
      name: "Japanese Vocabulary",
      learned: 65,
      total: 100,
      progress: 65,
      streak: 7
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
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">{deck.streak}</div>
                <div className="text-xs text-muted-foreground">Streak</div>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Study
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
 