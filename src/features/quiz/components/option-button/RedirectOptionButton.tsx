import Button from "@/common/components/button/Button";
import { getQuestionPath } from "@/common/utils/getQuestionPath";
import { useAddAnswer } from "@/store/slices/quiz-slice/quizSlice.hooks";
import { JSX } from "react";

interface IRedirectOptionButtonProps {
  label: string;
  questionId: string;
  redirectId: string;
  value: string;
}

export default function RedirectOptionButton({
  label,
  questionId,
  redirectId,
  value,
}: IRedirectOptionButtonProps): JSX.Element {
  const addAnswer = useAddAnswer();

  const handleClick = () => {
    addAnswer({ questionId, value });
    addAnswer(redirectId);
  };

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
