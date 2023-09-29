export const setToLocalStorage = (key: string, token: string) => {
  console.log(
    "🚀 ~ file: local-storage.ts:2 ~ setToLocalStorage ~ token:",
    token
  );
  if (!key || typeof window === "undefined") {
    return "";
  }
  localStorage.setItem(key, token);
};
