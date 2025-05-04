import HomePage from "@/features/home/components/home-page/HomePage";
import { JSX } from "react";
import { Metadata } from "next";
import { getHomePageData } from "@/features/home/api/getHomePageData";

export const revalidate = 60;

export function generateMetadata(): Metadata {
  return {
    title: "Quiz App",
    description: "Quiz App",
  };
}

export default async function Home(): Promise<JSX.Element> {
  const { name, initialQuestionId } = await getHomePageData();

  return <HomePage quizTitle={name} initialQuesionId={initialQuestionId} />;
}
