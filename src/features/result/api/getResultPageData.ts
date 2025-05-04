import { IQuestion } from "@/common/types/question.types";
import { fetchData } from "@/common/utils/fetchData";

export const getResultPageData = async (): Promise<IQuestion[]> => {
  const { questions } = await fetchData();

  return questions;
};
