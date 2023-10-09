import { IDepartment, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    departments: build.query({
      query: (arg: Record<string, any>) => ({
        url: DEPARTMENT_URL,
        method: "GET",

        params: arg,
      }),
      transformResponse: (response: IDepartment, meta: IMeta) => {
        return {
          departments: response,
          meta: meta,
        };
      },
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
    department: build.query({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.department],
    }),
    updateDepartment: build.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/${data?.id}`,
        method: "PATCH",
        data: data?.body,
      }),
      invalidatesTags: [tagTypes.department],
    }),
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const {
  useDepartmentsQuery,
  useCreateDepartmentMutation,
  useDepartmentQuery,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation
} = departmentApi;
