"use client";

import { useEffect } from "react";

import { useSetInitialState } from "@/store/slices/quiz-slice/quizSlice.hooks";
import { loadState } from "@/common/utils/localStorage";
import { LOCAL_STORAGE_QUIZ_KEY } from "@/common/constants/localStorageQuizKey";
import { IAnswer } from "@/common/types/answer";

export default function QuizHydrator(): null {
  const setInitialState = useSetInitialState();

  useEffect(() => {
    const initialState = loadState<IAnswer[]>(LOCAL_STORAGE_QUIZ_KEY);

    if (!initialState) return;

    setInitialState(initialState);
  }, [setInitialState]);

  return null;
}
