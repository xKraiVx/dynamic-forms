import { IQuestion, IQuiz } from "@/common/types/question.types";
import { formData } from "@/form-data/formData";

export const getQuestionData = (id: string): IQuestion | null => {
  const data = JSON.stringify(formData);
  const { questions }: IQuiz = JSON.parse(data);

  const question = questions.find((question) => question.id === id);

  if (!question) {
    return null;
  }

  return question;
};
