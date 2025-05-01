import Button from "@/common/components/button/Button";
import { useSetIsFinished } from "@/store/slices/quiz-slice/quizSlice.hooks";
import { useRouter } from "next/navigation";
import { JSX } from "react";

interface ISubmitOptionButtonProps {
  label: string;
}

export default function SubmitOptionButton({
  label,
}: ISubmitOptionButtonProps): JSX.Element {
  const setIsFinished = useSetIsFinished();
  const push = useRouter().push;

  const handleSubmit = () => {
    setIsFinished(true);
    push("/results");
  };

  return (
    <Button type="submit" onClick={handleSubmit}>
      {label}
    </Button>
  );
}
