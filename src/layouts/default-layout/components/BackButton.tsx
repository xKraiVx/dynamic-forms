"use client";

import Chevron from "@/common/components/icons/Chevron";
import { ICON_SIZE } from "@/common/constants/iconSize";
import { useGetQuestionId } from "@/common/hooks/useGetQuestionId";
import { getQuestionPath } from "@/common/utils/getQuestionPath";
import { useGetPrevAnswerOfTarget } from "@/store/slices/quiz-slice/quizSlice.hooks";
import Link from "next/link";
import { JSX, useMemo } from "react";

export default function BackButton(): JSX.Element | null {
  const questionId = useGetQuestionId();
  const prevAnswer = useGetPrevAnswerOfTarget(questionId);

  const lastQuestionId = useMemo(() => {
    if (!prevAnswer) {
      return null;
    }

    return prevAnswer.questionId;
  }, [prevAnswer]);

  if (!lastQuestionId || !questionId) {
    return null;
  }

  return (
    <Link
      href={getQuestionPath(lastQuestionId)}
      aria-label="Go back to previous question"
    >
      <Chevron width={ICON_SIZE} height={ICON_SIZE} />
    </Link>
  );
}
