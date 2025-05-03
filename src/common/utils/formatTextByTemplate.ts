import { IAnswer } from "@/common/types/answer";
import { capitalizeFirstLetter } from "@/common/utils/capitalizeFirstLetter";

const REG_EX = /\{%([^%]+)%\}/g;

export const formatTextByTemplate = (
  answers: IAnswer[],
  text?: string
): string => {
  if (!text) {
    return "";
  }

  const matches = text.match(REG_EX) || [];

  const formattedText = matches.reduce((formattedText: string, match) => {
    const [questionId, value, conditionalText] = match
      .replace(REG_EX, "$1")
      .split(":");

    if (!value) {
      //NOTE: format {%questionId%} to {answer value}
      const answer = answers.find((answer) => questionId === answer.questionId);

      formattedText = formattedText.replace(
        match,
        answer?.value?.toString() ?? ""
      );

      return formattedText;
    }

    //NOTE: format {%questionId:value:conditionalText%} to {conditionalText based on answer value}

    const answer = answers.find((answer) =>
      questionId.includes(answer.questionId)
    );

    const isValueValid = answer?.value === value;

    if (isValueValid) {
      formattedText = formattedText.replace(match, conditionalText);

      return formattedText;
    }

    //NOTE: if the answer value is not valid, remove the match from the text and log a warning

    console.warn(
      `The answer ${questionId} value "${answer?.value}" does not match the expected value "${value}".`
    );
    formattedText = formattedText.replace(match, "");

    return formattedText;
  }, text);

  return capitalizeFirstLetter(formattedText);
};
