import StatsCards from "./components/StatsCards";
import { DeckCards } from "./components/DeckCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl space-y-10">
        {/* Title card */}
        <header className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Japanese SRS Quiz App</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Hira-Kana Redux
            </h1>
            <p className="max-w-3xl text-muted-foreground">
              Practice Japanese kana with a focused quiz flow designed to help
              you recognise characters, answer quickly, and track progress over
              time.
            </p>
          </div>
        </header>

        {/* Stats */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
          <StatsCards />
        </div>

        {/* Decks */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Your Decks</h2>
          <DeckCards />
        </div>
      </section>
    </main>
  );
}
