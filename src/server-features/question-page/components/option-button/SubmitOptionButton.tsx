import Button from "@/common/components/button/Button";
import { useAddAnswer } from "@/store/slices/quiz-slice/quizSlice.hooks";
import { useRouter } from "next/navigation";
import { JSX } from "react";

interface ISubmitOptionButtonProps {
  label: string;
  questionId: string;
  value: string;
}

export default function SubmitOptionButton({
  label,
  questionId,
  value,
}: ISubmitOptionButtonProps): JSX.Element {
  const addAnswer = useAddAnswer();

  const push = useRouter().push;

  const handleSubmit = () => {
    addAnswer({ questionId, value });
    push("/results");
  };

  return (
    <Button type="submit" onClick={handleSubmit}>
      {label}
    </Button>
  );
}
