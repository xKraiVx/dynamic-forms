import { IQuestionStyle } from "@/common/types/question.types";
import { fetchData } from "@/common/utils/fetchData";

export const getQuestionStyles = async (
  id: string
): Promise<IQuestionStyle | null> => {
  const { questions } = await fetchData();

  const question = questions.find((question) => question.id === id);
  if (!question) {
    return null;
  }

  return question.style;
};
