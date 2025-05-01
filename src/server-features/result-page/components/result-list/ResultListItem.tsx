import Typography from "@/common/components/typography/Typography";
import { IAnswer } from "@/common/types/answer";
import { IQuestion } from "@/common/types/question.types";
import { JSX, useMemo } from "react";

interface IResultListItemProps {
  questions: IQuestion[];
  answer: IAnswer;
}

export default function ResultListItem({
  questions,
  answer,
}: IResultListItemProps): JSX.Element {
  const question = useMemo(
    () => questions.find((question) => question.id === answer.questionId),
    [answer, questions]
  );

  const questionText = question?.text;
  const answerText = useMemo(
    () =>
      question?.options.find((option) => option.value === answer.value)?.label,
    [question, answer]
  );

  return (
    <div>
      <Typography variant="heading" className="mb-4">
        {questionText}
      </Typography>
      <Typography variant="body" className="mb-4">
        {answerText}
      </Typography>
    </div>
  );
}
