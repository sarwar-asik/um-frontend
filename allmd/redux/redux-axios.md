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
import { IMeta } from "@/types";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      meta?: IMeta;
      contentType?: string; ///! for application/json
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
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
