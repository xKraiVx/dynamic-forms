"use client";

import { EActionType, IOption } from "@/common/types/question.types";
import ConditionOptionButton from "@/server-features/question-page/components/option-button/ConditionOptionButton";
import RedirectOptionButton from "@/server-features/question-page/components/option-button/RedirectOptionButton";
import SubmitOptionButton from "@/server-features/question-page/components/option-button/SubmitOptionButton";
import { JSX } from "react";

interface IOptionButtonProps extends IOption {
  questionId: string;
}

export default function OptionButton({
  label,
  action,
  value,
  questionId,
}: IOptionButtonProps): JSX.Element {
  console.log(action.type);

  switch (action.type) {
    case EActionType.REDIRECT:
      return (
        <RedirectOptionButton
          value={value}
          questionId={questionId}
          redirectId={action.questionId}
          label={label}
        />
      );
    case EActionType.SUBMIT:
      return <SubmitOptionButton label={label} />;
    case EActionType.CONDITION:
      return (
        <ConditionOptionButton
          label={label}
          questionId={questionId}
          value={value}
          conditions={action.conditions}
        />
      );
    default:
      throw new Error("Unknown action type");
  }
}
