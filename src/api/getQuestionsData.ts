import { IQuestion, IQuiz } from "@/common/types/question.types";
import { formData } from "@/form-data/formData";

export const getQuestionsData = (): IQuestion[] => {
  const data = JSON.stringify(formData);
  const { questions }: IQuiz = JSON.parse(data);

  return questions;
};
