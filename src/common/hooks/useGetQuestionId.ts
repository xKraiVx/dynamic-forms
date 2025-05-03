import { getIsQuestionPage } from "@/common/utils/getIsQuestionPage";
import { usePathname } from "next/navigation";

export const useGetQuestionId = (): string | null => {
  const pathname = usePathname();
  const isQuestionPage = getIsQuestionPage(pathname);

  if (!isQuestionPage) {
    return null;
  }

  const questionId = pathname.split("/").pop() || "";

  return questionId;
};
