import { IQuiz } from "@/common/types/question.types";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/json/data.json";

export const fetchData = async (): Promise<IQuiz> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
};
