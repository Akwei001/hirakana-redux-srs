"use client"
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      className="px-4 py-2 rounded bg-card text-foreground border border-border"
      onClick={() => setIsDark((v) => !v)}
    >
      {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
