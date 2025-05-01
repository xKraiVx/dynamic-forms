import { LOCAL_STORAGE_QUIZ_KEY } from "@/common/constants/localStorageQuizKey";
import { saveState } from "@/common/utils/localStorage";
import { quizSlice } from "@/store/slices/quiz-slice/quizSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
  },
});

store.subscribe(() => {
  saveState(store.getState().quiz, LOCAL_STORAGE_QUIZ_KEY);
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
