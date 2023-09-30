import { authKey } from "@/constants/storagekey";
import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// ! for remove ts type error
// @ts-ignore

instance.interceptors.response.use(function (response) {
    const responseObject: ResponseSuccessType = {
    //// ! these property depend on your server response data
      data: response?.data?.data,
      meta: response?.data?.meta,
    };

    return responseObject;
  },
  function (error) {
    const  responseObject:IGenericErrorResponse ={
            //// ! these property depend on your server response data
        statusCode:error?.response?.data?.statusCode || 500,
        message:error?.response?.data?.message || "something went wrong from axios for server",
        errorMessages:error?.response?.data?.errorMessage
    }
    // return Promise.reject(error);
    return responseObject
  }
);

export { instance };
