export const getCookie = (cookiesName: string) => {
  const results = document.cookie.match("(^|;) ?" + cookiesName + "=([^;]*)(;|$)");
  return results ? unescape(results[2]) : null;
};
