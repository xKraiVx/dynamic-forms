import { IAnswer } from "@/common/types/answer";
import {
  addAnswer,
  clearAnswers,
  setInitialState,
  TRootState,
} from "@/store/slices/quiz-slice/quizSlice";
import { useDispatch, useSelector } from "react-redux";

export const useAddAnswer = () => {
  const dispatch = useDispatch();

  return (answer: string | IAnswer) => {
    if (typeof answer === "string") {
      dispatch(addAnswer({ questionId: answer, value: null }));
      return;
    }

    dispatch(addAnswer(answer));
  };
};

export const useCleanAnswers = () => {
  const dispatch = useDispatch();

  return () => {
    dispatch(clearAnswers());
  };
};

export const useGetCurrentQuestionId = (): string => {
  const quiz = useSelector<TRootState, string>(
    (state) => state.quiz[state.quiz.length - 1]?.questionId
  );

  if (!quiz) {
    return "";
  }

  return quiz;
};

export const useGetAnswers = (): IAnswer[] => {
  const quiz = useSelector<TRootState, IAnswer[]>((state) => state.quiz);

  if (!quiz) {
    return [];
  }

  return quiz;
};

export const useGetIsFinished = (): boolean => {
  const quiz = useGetAnswers();
  const isFinished = quiz.every((answer) => !!answer.value);

  return isFinished;
};

export const useSetInitialState = () => {
  const dispatch = useDispatch();

  return (state: IAnswer[]) => {
    dispatch(setInitialState(state));
  };
};

export const useGetPrevAnswer = (): IAnswer | null => {
  const answers = useGetAnswers();
  const currentId = useGetCurrentQuestionId();

  const currenIdIndex = answers?.findIndex(
    (answer) => answer.questionId === currentId
  );

  if (currenIdIndex === -1) {
    return null;
  }

  return answers[currenIdIndex - 1];
};
