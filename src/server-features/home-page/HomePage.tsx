import Typography from "@/common/components/typography/Typography";
import StartQuizButton from "@/server-features/home-page/components/start-quiz-button/StartQuizButton";
import { JSX } from "react";

interface IHomePageProps {
  quizTitle: string;
  initialQuesionId: string;
}

export default function HomePage({
  quizTitle,
  initialQuesionId,
}: IHomePageProps): JSX.Element {
  return (
    <>
      <Typography variant="heading" className="mb-4">
        Test application
      </Typography>
      <StartQuizButton
        quizTitle={quizTitle}
        initialQuesionId={initialQuesionId}
      />
    </>
  );
}
