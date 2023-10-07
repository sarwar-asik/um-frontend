import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";


// const authApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     userLogin: build.mutation({
//       query: (loginData) => ({ url: `${AUTH_URL}/login`, method: "POST",data:loginData}),
//       invalidatesTags:["user"]
//     }),
//   }),
// });





//! for login user   ///
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
