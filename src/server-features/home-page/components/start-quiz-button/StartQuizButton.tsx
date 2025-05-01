"use client";

import Button from "@/common/components/button/Button";
import { getQuestionPath } from "@/common/utils/getQuestionPath";
import {
  useCleanAnswers,
  useGetAnswers,
  useGetCurrentQuestionId,
  useGetIsFinished,
} from "@/store/slices/quiz-slice/quizSlice.hooks";
import { JSX } from "react";

interface IStartQuizButtonProps {
  quizTitle: string;
  initialQuesionId: string;
}

export default function StartQuizButton({
  quizTitle,
  initialQuesionId,
}: IStartQuizButtonProps): JSX.Element {
  const cleanAnswers = useCleanAnswers();
  const currentAnswerId = useGetCurrentQuestionId();
  const isFinished = useGetIsFinished();
  const asweres = useGetAnswers();

  const isAnswersEmpty = asweres.length === 0;

  const handleCleanAnswers = () => {
    if (!isFinished) {
      return;
    }

    cleanAnswers();
  };

  const href =
    currentAnswerId && !isFinished
      ? getQuestionPath(currentAnswerId)
      : getQuestionPath(initialQuesionId);

  const text = !isFinished && !isAnswersEmpty ? "Continue quiz" : quizTitle;

  return (
    <Button component="link" onClick={handleCleanAnswers} href={href}>
      {text}
    </Button>
  );
}
