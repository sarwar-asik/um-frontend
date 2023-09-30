#### Redux RTK with axios >>>

` npm i axios`

https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#axios-basequery

###### create a file src>interface>common.ts :::

\*\*create src>interface>index.ts :::

```ts
export * from "./common";
```

```ts
export interface IMeta {
  page: number;
  limit: number;
  total: number;
}
```

###### create a file src>helpers>axiosBaseQuery.ts :::

```ts
import { IMeta } from '@/types'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios from 'axios'
import type { AxiosRequestConfig, AxiosError } from 'axios'
import { instance as axiosInstance } from './axios.instance'

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
      meta?:IMeta;
      contentType?:string; //! for application/json
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params,contentType }) => {
    try {
      const result = await axiosInstance({ url: baseUrl + url, method, data, params,headers:{
        contentType: contentType || "application/json"
      } })
      // console.log(result,"result from axiosBaseQuery.ts");
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

```

#### include the axiosBaseApi in src>redux>api>baseApi.ts :::

```ts
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: `${getBaseUrl}/api/v1` }), //// here included axios baseApi
  endpoints: () => ({}),
  tagTypes: ["users"],
});

export const {} = baseApi;
```

#### post data to server src>redux>api>authApi.ts :::

```ts
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
```

##### add the base api in src>redux>rootReducer.ts :::

```ts
import { baseApi } from "./api/baseApi";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
};
```

### create axios instance for res,err from server in src>helpers>axios.instance.ts :::

```ts
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


```