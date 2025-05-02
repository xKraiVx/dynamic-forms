"use client";

import Chevron from "@/common/components/icons/Chevron";
import { ICON_SIZE } from "@/common/constants/iconSize";
import { useGetIsHomePage } from "@/common/hooks/useGetIsHomePage";
import { getQuestionPath } from "@/common/utils/getQuestionPath";
import { useGetPrevAnswer } from "@/store/slices/quiz-slice/quizSlice.hooks";
import Link from "next/link";
import { JSX, useMemo } from "react";

export default function BackButton(): JSX.Element | null {
  const prevAnswer = useGetPrevAnswer();
  const isHomePage = useGetIsHomePage();

  const lastQuestionId = useMemo(() => {
    if (!prevAnswer) {
      return null;
    }

    return prevAnswer.questionId;
  }, [prevAnswer]);

  if (!lastQuestionId || isHomePage) {
    return null;
  }

  // const handleClick = () => {
  //   setCurrentQuestionId(lastQuestionId);
  // };

  return (
    <Link href={getQuestionPath(lastQuestionId)}>
      <Chevron width={ICON_SIZE} height={ICON_SIZE} />
    </Link>
  );
}
