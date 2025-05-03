import { getQuestionData } from "@/api/getQuestionData";
import { IBlogMetaDataProps } from "@/app/question/[questionId]/layout";
import QuestionPage from "@/server-features/question-page/QuestionPage";
import { notFound } from "next/navigation";
import { JSX } from "react";

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
