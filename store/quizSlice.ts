// store/quizSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { KanaChar } from '../app/data/kana';

// Initial state design
interface QuizState {
  currentDeck: string | null;
  quizSession: KanaChar[];
  currentCardIndex: number;
  answers: Record<number, boolean>;
  leitnerBoxes: Record<string, number>; // id/symbol to box number
  stats: {
    streak: number;
    correct: number;
    total: number;
  };
  quizActive: boolean;
}

const initialState: QuizState = {
  currentDeck: null,
  quizSession: [],
  currentCardIndex: 0,
  answers: {},
  leitnerBoxes: {},
  stats: { streak: 0, correct: 0, total: 0 },
  quizActive: false,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz: (state, action: PayloadAction<{ deck: string, cards: KanaChar[] }>) => {
      state.currentDeck = action.payload.deck;
      state.quizSession = action.payload.cards;
      state.currentCardIndex = 0;
      state.answers = {};
      state.quizActive = true;
    },
    answerCard: (state, action: PayloadAction<{ cardIdx: number, correct: boolean, symbol: string }>) => {
      state.answers[action.payload.cardIdx] = action.payload.correct;
      state.stats.total += 1;
      if (action.payload.correct) {
        state.stats.correct += 1;
        // promote Leitner box (+1, max 5)
        state.leitnerBoxes[action.payload.symbol] = Math.min(
          (state.leitnerBoxes[action.payload.symbol] || 1) + 1,
          5
        );
      } else {
        // reset Leitner box to 1 if wrong
        state.leitnerBoxes[action.payload.symbol] = 1;
      }
      state.currentCardIndex += 1;
    },
    endQuiz: state => {
      state.quizActive = false;
      state.stats.streak += 1; // for demo; real logic may vary
    },
    resetQuiz: state => {
      Object.assign(state, initialState);
    }
  }
});

export const { startQuiz, answerCard, endQuiz, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
