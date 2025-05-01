import Typography from "@/common/components/typography/Typography";
import { IQuestion } from "@/common/types/question.types";
import OptionButton from "@/server-features/question-page/components/option-button/OptionButton";
import { JSX } from "react";

interface IQuestionPageProps {
  data: IQuestion;
}

export default function QuestionPage({
  data,
}: IQuestionPageProps): JSX.Element {
  const { text, options, id } = data;

  return (
    <>
      <Typography variant="heading">{text}</Typography>
      <div className="flex flex-col gap-2 mt-4">
        {options.map((option) => (
          <OptionButton key={option.id} questionId={id} {...option} />
        ))}
      </div>
    </>
  );
}
