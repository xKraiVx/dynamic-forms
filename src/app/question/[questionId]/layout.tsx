import { IBlogMetaDataProps } from "@/app/question/[questionId]/page";
import { getQuestionStyles } from "@/layouts/quiz-layout/api/getQuestionStyles";
import QuizLayout from "@/layouts/quiz-layout/QuizLayout";
import { PropsWithChildren } from "react";

export const revalidate = 60;

export default async function Layout({
  children,
  params,
}: PropsWithChildren & IBlogMetaDataProps) {
  const { questionId } = await params;

  const style = await getQuestionStyles(questionId);

  return <QuizLayout style={style}>{children}</QuizLayout>;
}
