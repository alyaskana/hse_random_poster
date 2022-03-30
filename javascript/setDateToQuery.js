export const setDateToQuery = (date) => {
  const queryParams = new URLSearchParams(window.location.search);
  const tzoffset = new Date().getTimezoneOffset() * 60000;
  const localISOTime = new Date(date - tzoffset).toISOString().slice(0, 10);
  queryParams.set("date", localISOTime);
  history.pushState(null, null, "?" + queryParams.toString());
  window.location.reload();
};
