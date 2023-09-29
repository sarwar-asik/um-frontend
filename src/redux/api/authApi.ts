import { baseApi } from "./baseApi";


const AUTH_URL = '/auth'

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({ url: `${AUTH_URL}/login`, method: "POST",data:loginData }),
      invalidatesTags:['users']
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
