import { GITHUB_NAME_PATTERN } from "../../constants/app";

export const isValidSearchTerm = (text) => {
  const regExp = new RegExp(GITHUB_NAME_PATTERN);

  return regExp.test(text);
};
