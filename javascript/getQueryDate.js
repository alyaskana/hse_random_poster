export const getQueryDate = () => {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get("date");
};
