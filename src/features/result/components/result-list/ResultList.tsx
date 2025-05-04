import Button from "@/common/components/button/Button";
import Typography from "@/common/components/typography/Typography";
import { IAnswer } from "@/common/types/answer";
import { IQuestion } from "@/common/types/question.types";
import ResultListItem from "@/features/result/components/result-list/ResultListItem";
import { JSX } from "react";

interface IResultListProps {
  answers: IAnswer[];
  questions: IQuestion[];
}

export default function ResultList({
  answers,
  questions,
}: IResultListProps): JSX.Element {
  return (
    <>
      <Typography variant="heading" className="mb-4">
        Result Page
      </Typography>
      {answers.map((answer) => (
        <ResultListItem
          key={answer.questionId}
          answer={answer}
          questions={questions}
        />
      ))}
      <Button component="link" href="/">
        Home Page
      </Button>
    </>
  );
}
