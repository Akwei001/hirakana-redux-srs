import Image from "next/image";
import StatsCards from "./components/StatsCards";
import { DeckCards } from "./components/DeckCards";

export default function Home() {
  return (
 <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">
            Continue your learning journey with spaced repetition
          </p>
        </div>

        {/* Stats Cards */}
        <StatsCards />

        {/* Your Decks Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-6">Your Decks</h2>
          <DeckCards />
        </div>
      </div>
    </div>

  );
};
