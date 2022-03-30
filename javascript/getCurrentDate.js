import { getQueryDate } from "./getQueryDate.js";
export const getCurrentDate = () => {
  const queryDate = getQueryDate();
  return queryDate ? new Date(queryDate) : new Date();
};
