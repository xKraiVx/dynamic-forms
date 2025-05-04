import { getResultPageData } from "@/features/result/api/getResultPageData";
import ResultPage from "@/features/result/components/result-page/ResultPage";
import { Metadata } from "next";
import { JSX } from "react";

export function generateMetadata(): Metadata {
  return {
    title: "Results",
    description: "You can see your results here",
  };
}

export default async function Page(): Promise<JSX.Element> {
  const questionsData = await getResultPageData();

  return <ResultPage data={questionsData} />;
}
