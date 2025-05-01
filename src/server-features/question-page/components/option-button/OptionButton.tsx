"use client";

import Button from "@/common/components/button/Button";
import { EActionType, IOption } from "@/common/types/question.types";
import { getQuestionPath } from "@/common/utils/getQuestionPath";
import { JSX } from "react";

export default function OptionButton({
  label,
  action,
  value,
}: IOption): JSX.Element {
  const handleClick = () => {
    console.log("Button clicked", value);
  };

  switch (action.type) {
    case EActionType.REDIRECT:
      return (
        <Button
          component="link"
          onClick={handleClick}
          href={getQuestionPath(action.questionId)}
        >
          {label}
        </Button>
      );
    case EActionType.SUBMIT:
      console.log("Submit action triggered");
      return <Button>{label}</Button>;
    case EActionType.CONDITION:
      console.log("Condition action triggered");
      return <Button onClick={handleClick}>{label}</Button>;
    default:
      throw new Error("Unknown action type");
  }
}
