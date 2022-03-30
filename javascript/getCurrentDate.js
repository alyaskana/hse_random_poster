export const getCurrentDate = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const queryDate = queryParams.get("date");
  return queryDate ? new Date(queryDate) : new Date();
};
