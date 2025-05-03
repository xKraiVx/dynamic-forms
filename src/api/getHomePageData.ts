import { IQuiz } from "@/common/types/question.types";

//Get data from formData.ts file (development only)
// import { formData } from "@/form-data/formData";

//Get data from formData.ts file (production only)
//Get the data from formData.json file
import formData from "@/form-data/formData.json";

interface IHomePageData {
  name: string;
  initialQuestionId: string;
}

export const getHomePageData = (): IHomePageData => {
  const data = JSON.stringify(formData);
  const { name, initialQuestionId }: IQuiz = JSON.parse(data);

  return { name, initialQuestionId };
};
