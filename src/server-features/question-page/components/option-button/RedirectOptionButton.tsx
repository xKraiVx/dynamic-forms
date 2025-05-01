import Button from "@/common/components/button/Button";
import { getQuestionPath } from "@/common/utils/getQuestionPath";
import {
  useAddAnswer,
  useSetCurrentQuestionId,
} from "@/store/slices/quiz-slice/quizSlice.hooks";
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
  const setCurrentQuestionId = useSetCurrentQuestionId();

  const handleClick = () => {
    addAnswer({ questionId, value });
    setCurrentQuestionId(redirectId);
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
