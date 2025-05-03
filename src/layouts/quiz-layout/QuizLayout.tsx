import Container from "@/common/components/container/Container";
import { IQuestionStyle } from "@/common/types/question.types";
import Header from "@/layouts/default-layout/components/Header";
import { PropsWithChildren } from "react";
import { quizLayoutStyles } from "@/layouts/quiz-layout/utils/getQuizLayoutStyles";

interface IQuizLayoutProps extends PropsWithChildren {
  style: IQuestionStyle;
}

export default function QuizLayout({ children, style }: IQuizLayoutProps) {
  const containerClass = quizLayoutStyles(style);

  return (
    <div className={containerClass}>
      <Header />
      <Container size="sm">{children}</Container>
    </div>
  );
}
