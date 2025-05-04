import Typography from "@/common/components/typography/Typography";
import HomeStartQuizButton from "@/features/home/components/home-start-quiz-button/HomeStartQuizButton";
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
      <HomeStartQuizButton
        quizTitle={quizTitle}
        initialQuesionId={initialQuesionId}
      />
    </>
  );
}
