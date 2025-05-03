"use client";

import Typography from "@/common/components/typography/Typography";
import { useFormatTextByState } from "@/common/hooks/useFormatTextByState";
import { IQuestion } from "@/common/types/question.types";
import OptionButton from "@/server-features/question-page/components/option-button/OptionButton";
import { JSX } from "react";

interface IQuestionPageProps {
  data: IQuestion;
}

export default function QuestionPage({
  data,
}: IQuestionPageProps): JSX.Element {
  const { text, options, id, style, description } = data;
  const formattedText = useFormatTextByState(text);

  console.log("QuestionPage data", style);

  return (
    <div className={style.mode}>
      <Typography variant="heading" className="mb-2">
        {formattedText}
      </Typography>
      {description && (
        <Typography variant="body" className="mb-4">
          {description}
        </Typography>
      )}
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <OptionButton key={option.id} questionId={id} {...option} />
        ))}
      </div>
    </div>
  );
}
