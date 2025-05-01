import { IAnswer } from "@/common/types/answer";
import { store } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IQuizSliceState {
  answers: IAnswer[];
  currentQuestionId: string;
  isFinished: boolean;
}

export const initialState: IQuizSliceState = {
  answers: [],
  currentQuestionId: "",
  isFinished: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<IAnswer>) => {
      state.answers.push(action.payload);

      return state;
    },
    removeAnswer: (state, action: PayloadAction<string>) => {
      state.answers = state.answers.filter(
        (answer) => answer.questionId !== action.payload
      );

      return state;
    },
    clearAnswers: () => {
      return initialState;
    },
    setCurrentQuestionId: (state, action: PayloadAction<string>) => {
      state.currentQuestionId = action.payload;

      return state;
    },
    setIsFinished: (state, action: PayloadAction<boolean>) => {
      state.isFinished = action.payload;

      return state;
    },

    setInitialState: (state, action: PayloadAction<IQuizSliceState>) => {
      state = action.payload;

      return state;
    },
  },
});

export type TRootState = ReturnType<typeof store.getState>;

export const {
  addAnswer,
  removeAnswer,
  clearAnswers,
  setIsFinished,
  setCurrentQuestionId,
  setInitialState,
} = quizSlice.actions;
