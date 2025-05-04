"use client";

import { IQuestion } from "@/common/types/question.types";
import EmptyResult from "@/features/result/components/result-empty/ResultEmpty";
import ResultList from "@/features/result/components/result-list/ResultList";
import { useGetAnswers } from "@/store/slices/quiz-slice/quizSlice.hooks";
import { JSX } from "react";

interface IResultPageProps {
  data: IQuestion[];
}

function ResultPage({ data }: IResultPageProps): JSX.Element {
  const answers = useGetAnswers();

  if (answers.length === 0) {
    return <EmptyResult />;
  }

  return <ResultList answers={answers} questions={data} />;
}

export default ResultPage;
