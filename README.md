# Hira-Kana Redux

A Japanese kana study app built with Next.js and React.  
This project focuses on a simple, testable spaced-repetition-style quiz flow for practicing hiragana.

## Overview

Hira-Kana Redux is a portfolio project designed to show a clean learning flow, practical state handling, basic persistence, and room for future SRS improvements.

Current MVP flow:
- Start a study session
- Review a limited shuffled hiragana deck
- Flip a card to reveal the answer
- Mark confidence level
- See the final score on the completion page

## Features

- Hiragana quiz flow with a limited study deck
- Randomised card order per session
- Quiz completion screen with score summary
- Progress bar during study sessions
- Result persistence with localStorage
- Reusable UI components built with shadcn/ui

## Tech Stack

- Next.js
- React
- TypeScript / JavaScript
- Tailwind CSS
- shadcn/ui
- localStorage for basic persistence

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/Akwei001/hirakana-redux-srs.git
cd hirakana-redux-srs
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Usage

1. Open the app from the dashboard/start screen.
2. Start a hiragana quiz session.
3. Flip each card to reveal the romaji.
4. Rate your confidence.
5. Review your score on the completion page.

## Testing

Add your current test commands here when ready, for example:

```bash
npm run test
npm run cypress:open
```

If tests are still being added, say that clearly:
- Unit and E2E tests are planned as part of the next milestone.

## Project Structure

```bash
app/
  complete/
  components/
  data/
  quiz/
components/
  ui/
```

- `app/quiz` contains the core study flow.
- `app/complete` displays the saved quiz result.
- `app/data` stores kana deck data and deck helpers.
- `components/ui` contains shared UI primitives.

## Architecture Notes

The current MVP uses local component state for quiz flow and `localStorage` for basic result persistence.  
This keeps the initial implementation simple while leaving room for Redux-based session and SRS logic in later iterations.

## Future Improvements

- Move session logic into Redux Toolkit
- Add proper SRS progression rules
- Add Cypress and Jest coverage
- Expand deck support beyond the first hiragana set
- Improve mobile polish and accessibility

## Why I Built This

I built Hira-Kana Redux as a portfolio project to practice shipping a realistic frontend product rather than just building isolated UI components.  
The goal was to create a small but complete study app with a clear user flow, reusable components, and practical state management decisions.