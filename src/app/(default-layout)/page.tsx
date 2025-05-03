import HomePage from "@/server-features/home-page/HomePage";
import { JSX } from "react";
import { getHomePageData } from "@/api/getHomePageData";
import { Metadata } from "next";

export const revalidate = 60;

export function generateMetadata(): Metadata {
  return {
    title: "Quiz App",
    description: "Quiz App",
  };
}

export default function Home(): JSX.Element {
  const { name, initialQuestionId } = getHomePageData();

  return <HomePage quizTitle={name} initialQuesionId={initialQuestionId} />;
}
