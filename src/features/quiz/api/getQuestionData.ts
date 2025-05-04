import { IQuestion } from "@/common/types/question.types";
import { fetchData } from "@/common/utils/fetchData";

export const getQuestionData = async (
  id: string
): Promise<IQuestion | null> => {
  const { questions } = await fetchData();

  const question = questions.find((question) => question.id === id);

  if (!question) {
    return null;
  }

  return question;
};
