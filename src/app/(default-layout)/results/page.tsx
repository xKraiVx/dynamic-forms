import { getQuestionsData } from "@/api/getQuestionsData";
import ResultPage from "@/server-features/result-page/ResultPage";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Results",
    description: "You can see your results here",
  };
}

export default function Page() {
  const questionsData = getQuestionsData();

  return <ResultPage data={questionsData} />;
}
