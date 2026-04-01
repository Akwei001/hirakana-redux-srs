import Image from "next/image";
import StatsCards from "./components/StatsCards";
import { DeckCards } from "./components/DeckCards";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
 <main className="min-h-screen bg-background p-6">

  
      <section className="max-w-6xl mx-auto">
        {/* Header */}
     <div className="mx-auto max-w-5xl space-y-6"> 
      <div className="rounded-2xl border bg-card p-6 shadow-sm">
        <div className="space-y-2"> 
          <p className="text-sm text-muted-foreground">Japanese SRS Quiz App</p>
          <h1 className="text-3xl font-bold tracking-tight">
              Hira-Kana Redux
            </h1>
                <p className="text-muted-foreground">Practice Japanese kana with a focused quiz flow designed to help
                you recognise characters, answer quickly, and track progress over time.
                </p>
          
        </div>
      </div>
     </div>
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
      </section>
  </main>

  );
};
