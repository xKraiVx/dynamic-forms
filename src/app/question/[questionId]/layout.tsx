import { getQuestionData } from "@/api/getQuestionData";
import { IQuiz } from "@/common/types/question.types";
import { formData } from "@/form-data/formData";
import QuizLayout from "@/layouts/quiz-layout/QuizLayout";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";

export const revalidate = 60;

interface IQuestionPageParams {
  questionId: string;
}

export interface IBlogMetaDataProps {
  params: Promise<IQuestionPageParams>;
}

export async function generateStaticParams() {
  const data = JSON.stringify(formData);
  const { questions }: IQuiz = JSON.parse(data);

  return questions.map(({ id }) => ({
    questionId: id,
    fallback: true,
  }));
}

export default async function Layout({
  children,
  params,
}: PropsWithChildren & IBlogMetaDataProps) {
  const { questionId } = await params;

  const question = getQuestionData(questionId);

  if (!question) {
    return notFound();
  }

  const style = question.style;

  return <QuizLayout style={style}>{children}</QuizLayout>;
}
