export interface IQuestionResult {
  questionId: string;
  value: string;
}

export interface IQuizResult {
  questions: IQuestionResult[];
}
