import { fetchData } from "@/common/utils/fetchData";

interface IHomePageData {
  name: string;
  initialQuestionId: string;
}

export const getHomePageData = async (): Promise<IHomePageData> => {
  const data = await fetchData();

  const { name, initialQuestionId } = data;

  return { name, initialQuestionId };
};
