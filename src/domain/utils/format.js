import { DATE_OPTIONS } from "../../constants/app";

export const makeDate = (date) => {
  const dateObj = new Date(date);

  return dateObj.toLocaleString("en-us", DATE_OPTIONS);
};
