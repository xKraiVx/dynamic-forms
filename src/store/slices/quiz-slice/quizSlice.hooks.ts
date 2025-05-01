import { IAnswer } from "@/common/types/answer";
import {
  addAnswer,
  clearAnswers,
  IQuizSliceState,
  removeAnswer,
  setCurrentQuestionId,
  setInitialState,
  setIsFinished,
  TRootState,
} from "@/store/slices/quiz-slice/quizSlice";
import { useDispatch, useSelector } from "react-redux";

export const useAddAnswer = () => {
  const dispatch = useDispatch();

  return (answer: IAnswer) => {
    dispatch(addAnswer(answer));
  };
};

export const useCleanAnswers = () => {
  const dispatch = useDispatch();

  return () => {
    dispatch(clearAnswers());
  };
};

export const useSetCurrentQuestionId = () => {
  const dispatch = useDispatch();

  return (questionId: string) => {
    dispatch(setCurrentQuestionId(questionId));
  };
};

export const useSetIsFinished = () => {
  const dispatch = useDispatch();
  return (isFinished: boolean) => {
    dispatch(setIsFinished(isFinished));
  };
};

export const useGetIsFinished = (): boolean => {
  const quiz = useSelector<TRootState, boolean>(
    (state) => state.quiz.isFinished
  );

  if (!quiz) {
    return false;
  }

  return quiz;
};

export const useGetCurrentQuestionId = (): string => {
  const quiz = useSelector<TRootState, string>(
    (state) => state.quiz.currentQuestionId
  );

  if (!quiz) {
    return "";
  }

  return quiz;
};

export const useRemoveAnswer = () => {
  const dispatch = useDispatch();

  return (questionId: string) => {
    dispatch(removeAnswer(questionId));
  };
};

export const useGetAnswers = (): IAnswer[] => {
  const quiz = useSelector<TRootState, IAnswer[]>(
    (state) => state.quiz.answers
  );

  if (!quiz) {
    return [];
  }

  return quiz;
};

export const useSetInitialState = () => {
  const dispatch = useDispatch();

  return (state: IQuizSliceState) => {
    dispatch(setInitialState(state));
  };
};

export const useGetLastAnswer = (): IAnswer | null => {
  const answers = useGetAnswers();

  if (answers.length === 0) {
    return null;
  }

  return answers[answers.length - 1];
};
