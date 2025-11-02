"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";
import { store } from "../store";
import { Provider } from "react-redux";

// Note: Metadata export is not allowed in Client Components
// You'll need to move metadata to a separate file or handle it differently
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
