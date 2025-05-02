import Button from "@/common/components/button/Button";
import { IConditionRule } from "@/common/types/question.types";
import { getQuestionPath } from "@/common/utils/getQuestionPath";
import {
  useAddAnswer,
  useGetAnswers,
} from "@/store/slices/quiz-slice/quizSlice.hooks";
import { JSX, useMemo } from "react";

interface IConditionOptionButtonProps {
  label: string;
  questionId: string;
  value: string;
  conditions: IConditionRule[];
}

export default function ConditionOptionButton({
  label,
  questionId,
  value,
  conditions,
}: IConditionOptionButtonProps): JSX.Element {
  const answers = useGetAnswers();

  const redirectId = useMemo(
    () =>
      conditions.reduce((redirectId: string | null, condition) => {
        const { questionId, value, redirect } = condition;
        const isConditionMet =
          answers.find((answer) => answer.questionId === questionId)?.value ===
          value;

        if (isConditionMet) {
          return redirect;
        }

        return redirectId;
      }, null),
    [answers, conditions]
  );

  const addAnswer = useAddAnswer();

  const handleClick = () => {
    addAnswer({ questionId, value });
  };

  if (!redirectId) {
    throw new Error("No redirect ID found for the given conditions");
  }

  return (
    <Button
      component="link"
      onClick={handleClick}
      href={getQuestionPath(redirectId)}
    >
      {label}
    </Button>
  );
}
