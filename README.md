# Hira-Kana Redux

A spaced-repetition flashcard app for learning Japanese Hiragana and Katakana,
built with Next.js, TypeScript, and Tailwind CSS.

![App Screenshot](public/screenshot.png)

## Live Demo

🔗 [hirakana-redux.vercel.app](https://hirakana-redux.vercel.app)

---

## About

Hira-Kana Redux is a portfolio project I built to combine two things I'm
actively working on: improving my Japanese and developing my skills as a
frontend developer.

The app uses a flashcard flip model with self-rated confidence scoring
(Knew it / Unsure / Forgot) to simulate spaced repetition. Sessions are
shuffled on each load and progress is persisted to localStorage so your
last result is always visible on the dashboard.

---

## Features

- Flashcard quiz flow — see the kana, flip to reveal the romaji, rate yourself
- Full Hiragana deck (100+ characters including dakuten and yōon combos)
- Shuffled sessions on every load
- Session results saved to localStorage
- Dashboard showing deck progress and streak
- Dark / light mode toggle
- Responsive — works on mobile and desktop

---

## Stack

| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org) | Framework (App Router) |
| [TypeScript](https://www.typescriptlang.org) | Type safety throughout |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [ShadCN UI](https://ui.shadcn.com) | Component library |
| [Lucide React](https://lucide.dev) | Icons |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

Clone the repo and install dependencies:

    git clone https://github.com/Akwei001/hirakana-redux-srs.git
    cd hirakana-redux-srs
    npm install
    npm run dev

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

### `app/`

- **page.tsx** — Dashboard showing stats and deck selection
- **quiz/page.tsx** — Active quiz session, flip cards and rate confidence
- **complete/page.tsx** — Results screen showing session summary
- **data/kana.ts** — All hiragana and katakana data plus the `getStudyDeck` utility
- **components/** — Feature-level components used across pages

### `app/components/`

- **DeckCards.tsx** — Deck selection cards with progress bars
- **StatsCards.tsx** — Dashboard stat tiles (progress, streak, active decks)
- **QuizProgressBar.tsx** — Progress indicator during a session
- **FlipAnswerButton.tsx** — Button to reveal the romaji answer
- **ConfidenceButtons.tsx** — Knew it / Unsure / Forgot rating buttons

### `components/ui/`

ShadCN UI primitives — Button, Card, Progress, Input and others.

---

## How It Works

### Data layer

All kana data lives in `app/data/kana.ts` as a typed `KanaChar` array.
Characters with ambiguous romanisations (ぢ, づ) are flagged with
`skipInQuiz: true` and filtered out before a session starts.

### Study session

`getStudyDeck()` filters out skipped cards and shuffles the remaining deck
using a Fisher-Yates algorithm. A new shuffle runs on every session start
so no two sessions are the same.

### Persistence

When a session ends the result is written to `localStorage`. The dashboard
reads this on load and shows your last session score. The write is wrapped
in a `try/catch` so a failure in private browsing mode never blocks
navigation to the results screen.

---

## Roadmap

- [ ] Katakana deck
- [ ] True SRS scheduling (interval-based card weighting)
- [ ] Per-card history tracking
- [ ] Cypress E2E tests
- [ ] Jest unit tests for core logic

---

## Running Tests

Tests are in progress — Jest and Cypress setup coming soon.

    npm run test

---

## Author

**Akwei** — junior frontend developer based in Birmingham, UK.

- GitHub: [@Akwei001](https://github.com/Akwei001)
- Portfolio: _coming soon_

---

## Licence

MIT