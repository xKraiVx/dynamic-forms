import { formatTextByTemplate } from "@/common/utils/formatTextByTemplate";
import { useGetAnswers } from "@/store/slices/quiz-slice/quizSlice.hooks";
import { useMemo } from "react";

export const useFormatTextByState = (text?: string): string => {
  const answers = useGetAnswers();

  const formattedText = useMemo(
    () => formatTextByTemplate(answers, text),
    [text, answers]
  );

  return formattedText;
};
