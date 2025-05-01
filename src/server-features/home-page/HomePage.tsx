import Button from "@/common/components/button/Button";
import { getQuestionPath } from "@/common/utils/getQuestionPath";
import { JSX } from "react";

interface IHomePageProps {
  quisTitle: string;
  initialQuesionId: string;
}

export default function HomePage({
  quisTitle,
  initialQuesionId,
}: IHomePageProps): JSX.Element {
  const href = getQuestionPath(initialQuesionId);

  return (
    <Button component="link" href={href}>
      {quisTitle}
    </Button>
  );
}
