import { authKey } from "@/constants/storagekey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  // console.log(accessToken,"from storeUserInfo");
  return setToLocalStorage(authKey, accessToken as string);
};

export const getUserInfo = () => {
  const authLocalStorageToken = getFromLocalStorage(authKey);
  console.log(authLocalStorageToken);
  if (authLocalStorageToken) {
    const decoded = decodedToken(authLocalStorageToken);
    return decoded;
  } else {
    return "";
  }
};


export const isLoggedIn = ()=>{
    const authLocalStorageToken = getFromLocalStorage(authKey);
    //! important !! used for if  authLocalStorageToken  is stay it will return true
     return !! authLocalStorageToken
}


export const removeUserInfo =(key:string)=>{
    return localStorage.removeItem(key)
}