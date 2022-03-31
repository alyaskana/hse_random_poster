export const convertDatetoSeed = (date) => {
  return Number(date.toLocaleDateString("en-US").split("/").join(""));
};
