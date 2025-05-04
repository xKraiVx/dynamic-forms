import { IQuestionStyle } from "@/common/types/question.types";
import { DARK_MODE_BG_STYLES } from "@/layouts/quiz-layout/constants/quizLayoutStyles";
import cn from "classnames";

export const quizLayoutStyles = (style: IQuestionStyle | null) => {
  const { mode, textAlign } = style || {
    mode: "light",
    textAlign: "left",
  };

  const containerClass = cn(
    mode,
    textAlign,
    "min-h-screen",
    mode === "dark" && DARK_MODE_BG_STYLES,
    textAlign === "left" && "text-left",
    textAlign === "center" && "text-center"
  );

  return containerClass;
};
