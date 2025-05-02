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

      if (answerIndex !== -1) {
        state[answerIndex] = action.payload;

        return state;
      }

      state.push(action.payload);

      return state;
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

export const { addAnswer, clearAnswers, setInitialState } = quizSlice.actions;
