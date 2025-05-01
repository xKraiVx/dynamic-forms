"use client";

import Chevron from "@/common/components/icons/Chevron";
import { ICON_SIZE } from "@/common/constants/iconSize";
import { useGetIsHomePage } from "@/common/hooks/useGetIsHomePage";
import { getQuestionPath } from "@/common/utils/getQuestionPath";
import {
  useGetLastAnswer,
  useRemoveAnswer,
  useSetCurrentQuestionId,
} from "@/store/slices/quiz-slice/quizSlice.hooks";
import Link from "next/link";
import { JSX, useMemo } from "react";

export default function BackButton(): JSX.Element | null {
  const removeAnswer = useRemoveAnswer();
  const setCurrentQuestionId = useSetCurrentQuestionId();
  const lastAnswer = useGetLastAnswer();
  const isHomePage = useGetIsHomePage();

  const lastQuestionId = useMemo(() => {
    if (!lastAnswer) {
      return null;
    }

    return lastAnswer.questionId;
  }, [lastAnswer]);

  if (!lastQuestionId || isHomePage) {
    return null;
  }

  const handleClick = () => {
    removeAnswer(lastQuestionId);
    setCurrentQuestionId(lastQuestionId);
  };

  return (
    <Link href={getQuestionPath(lastQuestionId)} onClick={handleClick}>
      <Chevron width={ICON_SIZE} height={ICON_SIZE} />
    </Link>
  );
}
