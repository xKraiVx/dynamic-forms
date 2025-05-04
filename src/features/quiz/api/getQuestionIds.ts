import { fetchData } from "@/common/utils/fetchData";

export const getQuestionIds = async (): Promise<string[]> => {
  const { questions } = await fetchData();

  const questionIds = questions.map((question) => question.id);

  if (!questionIds) {
    return [];
  }

  return questionIds;
};
