export type ActionType = "redirect" | "submit" | "condition";

export enum EActionType {
  REDIRECT = "redirect",
  SUBMIT = "submit",
  CONDITION = "condition",
}

export interface IRedirectAction {
  type: EActionType.REDIRECT;
  questionId: string;
}

export interface ISubmitAction {
  type: EActionType.SUBMIT;
}

export interface IConditionRule {
  questionId: string;
  value: string;
  redirect: string;
}

export interface IConditionAction {
  type: EActionType.CONDITION;
  conditions: IConditionRule[];
}

export type IAction = IRedirectAction | ISubmitAction | IConditionAction;

export interface IOption {
  id: string;
  label: string;
  value?: string;
  action: IAction;
}

export interface IQuestionStyle {
  mode: "dark" | "light";
  textAlign: "left" | "center";
}

export interface IQuestion {
  id: string;
  text: string;
  options: IOption[];
  style: IQuestionStyle;
}

export interface IQuiz {
  id: string;
  initialQuestionId: string;
  name: string;
  questions: IQuestion[];
}
