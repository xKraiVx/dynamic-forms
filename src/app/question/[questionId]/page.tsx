import { getQuestionData } from "@/features/quiz/api/getQuestionData";
import { getQuestionIds } from "@/features/quiz/api/getQuestionIds";
import QuestionPage from "@/features/quiz/components/quiz-page/QuestionPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { JSX } from "react";

interface IQuestionPageParams {
  questionId: string;
}

export interface IBlogMetaDataProps {
  params: Promise<IQuestionPageParams>;
}

export async function generateStaticParams() {
  const questionIds = await getQuestionIds();

  return questionIds.map((id) => ({
    questionId: id,
    fallback: true,
  }));
}

export async function generateMetadata({
  params,
}: IBlogMetaDataProps): Promise<Metadata> {
  const { questionId } = await params;

  const question = await getQuestionData(questionId);

  return {
    title: "Question",
    description: question?.text,
  };
}

export default async function Page({
  params,
}: IBlogMetaDataProps): Promise<JSX.Element> {
  const { questionId } = await params;

  const question = await getQuestionData(questionId);

  if (!question) {
    return notFound();
  }

  return <QuestionPage data={question} />;
}
