export const getIsQuestionPage = (pathname: string): boolean => {
  const isQuestionPage = pathname.includes("/question");

  return isQuestionPage;
};
