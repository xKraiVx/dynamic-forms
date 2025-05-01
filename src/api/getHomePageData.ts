import { IQuiz } from "@/common/types/question.types";
import { formData } from "@/form-data/formData";

interface IHomePageData {
  name: string;
  initialQuestionId: string;
}

export const getHomePageData = (): IHomePageData => {
  const data = JSON.stringify(formData);
  const { name, initialQuestionId }: IQuiz = JSON.parse(data);

  return { name, initialQuestionId };
};
