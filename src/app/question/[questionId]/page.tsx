import { getQuestionData } from "@/api/getQuestionData";
import { IQuiz } from "@/common/types/question.types";
import { formData } from "@/form-data/formData";
import QuestionPage from "@/server-features/question-page/QuestionPage";
import { notFound } from "next/navigation";
import { JSX } from "react";

export const revalidate = 60;

export async function generateStaticParams() {
  const data = JSON.stringify(formData);
  const { questions }: IQuiz = JSON.parse(data);

  return questions.map(({ id }) => ({
    questionId: id,
    fallback: true,
  }));
}

interface IQuestionPageParams {
  questionId: string;
}

interface IBlogMetaDataProps {
  params: Promise<IQuestionPageParams>;
}

export default async function Page({
  params,
}: IBlogMetaDataProps): Promise<JSX.Element> {
  const { questionId } = await params;

  const question = getQuestionData(questionId);

  if (!question) {
    return notFound();
  }

  return <QuestionPage data={question} />;
}
