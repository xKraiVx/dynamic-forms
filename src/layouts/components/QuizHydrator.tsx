"use client";

import { useEffect } from "react";

import { IQuizSliceState } from "@/store/slices/quiz-slice/quizSlice";
import { useSetInitialState } from "@/store/slices/quiz-slice/quizSlice.hooks";
import { loadState } from "@/common/utils/localStorage";
import { LOCAL_STORAGE_QUIZ_KEY } from "@/common/constants/localStorageQuizKey";

export default function QuizHydrator(): null {
  const setInitialState = useSetInitialState();

  useEffect(() => {
    const initialState = loadState<IQuizSliceState>(LOCAL_STORAGE_QUIZ_KEY);

    if (!initialState) return;

    setInitialState(initialState);
  }, [setInitialState]);

  return null;
}
