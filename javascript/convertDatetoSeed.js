export const convertDatetoSeed = (date) => {
  return Number(date.toLocaleDateString().split("/").join(""));
};
