import { setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo =({accessToken}:{accessToken:string})=>{
    // console.log(accessToken,"from storeUserInfo");
    
    setToLocalStorage("accessToken",accessToken as string)

}