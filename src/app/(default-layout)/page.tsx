import HomePage from "@/server-features/home-page/HomePage";
import { JSX } from "react";
import { getHomePageData } from "@/api/getHomePageData";

export const revalidate = 60;

export default function Home(): JSX.Element {
  const { name, initialQuestionId } = getHomePageData();

  return <HomePage quizTitle={name} initialQuesionId={initialQuestionId} />;
}
