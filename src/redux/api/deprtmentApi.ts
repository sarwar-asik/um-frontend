import { baseApi } from "./baseApi";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDepartment: build.mutation({
      query: (departmentData) => ({
        url: `/academic-departments`,
        method: "POST",
        data: departmentData,
      }),
      invalidatesTags:['department']
    }),
  }),
});

export const {useCreateDepartmentMutation} = departmentApi