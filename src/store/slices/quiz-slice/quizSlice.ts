import { IAnswer } from "@/common/types/answer";
import { store } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: IAnswer[] = [];

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<IAnswer>) => {
      const answerIndex = state.findIndex(
        (answer) => answer.questionId === action.payload.questionId
      );

      // If the answer already exists, update it
      if (answerIndex !== -1) {
        state[answerIndex] = action.payload;

        return state;
      }

      // If the answer doesn't exist, add it to the state
      state.push(action.payload);

      return state;
    },
    removeAnswersAfterTarget: (state, action: PayloadAction<string>) => {
      const targetIndex = state.findIndex(
        (answer) => answer.questionId === action.payload
      );

      console.log("targetIndex", targetIndex);

      if (targetIndex === -1) {
        return state;
      }
      const newState = state.slice(0, targetIndex + 1);
      return newState;
    },
    clearAnswers: () => {
      return initialState;
    },

    setInitialState: (state, action: PayloadAction<IAnswer[]>) => {
      state = action.payload;

      return state;
    },
  },
});

export type TRootState = ReturnType<typeof store.getState>;

export const {
  addAnswer,
  clearAnswers,
  removeAnswersAfterTarget,
  setInitialState,
} = quizSlice.actions;
