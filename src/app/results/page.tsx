import { getQuestionsData } from "@/api/getQuestionsData";
import ResultPage from "@/server-features/result-page/ResultPage";

export default function Page() {
  const questionsData = getQuestionsData();

  return <ResultPage data={questionsData} />;
}
