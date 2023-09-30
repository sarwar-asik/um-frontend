export const setToLocalStorage = (key: string, token: string) => {
  console.log(
    "🚀 ~ file: local-storage.ts:2 ~ setToLocalStorage ~ token:",
    token
  );
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};


export const getFromLocalStorage = (key: string) => {
    console.log("🚀 ~ file: local-storage.ts:14 ~ getFromLocalStorage ~ key:", key)
    
    if (!key || typeof window === "undefined") {
      return "";
    }
    return localStorage.getItem(key);
  };
  