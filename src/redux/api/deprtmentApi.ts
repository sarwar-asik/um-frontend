import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    departments: build.query({
      query: () => ({
        url: DEPARTMENT_URL,
        method: "GET",
      }),
      providesTags: [tagTypes.department],
    }),
    createDepartment: build.mutation({
      query: (departmentData) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data: departmentData,
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const { useDepartmentsQuery,useCreateDepartmentMutation } = departmentApi;
