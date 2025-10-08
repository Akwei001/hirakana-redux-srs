import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-background min-h-screen flex flex-col items-center justify-center p-8">
  <div className="bg-card rounded-xl shadow-lg p-8 w-full max-w-md border border-border">
    <h1 className="text-3xl font-bold text-foreground mb-2">Test Card</h1>
    <p className="mb-4 text-muted-foreground">Hello Tailwind + ShadCN + Custom CSS!</p>
    <div className="h-4 w-full rounded bg-secondary mb-4 overflow-hidden">
      <div className="h-full w-1/2 rounded bg-accent transition-all"></div>
    </div>
    <button className="w-full py-3 rounded-lg font-bold text-primary-foreground bg-primary hover:bg-accent transition-all">
      Primary Button
    </button>
    <button className="w-full mt-4 py-3 rounded-lg border border-border text-foreground bg-secondary hover:bg-muted transition-all">
      Secondary Button
    </button>
  </div>
</div>

  );
};
