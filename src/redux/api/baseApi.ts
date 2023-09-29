import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'
import { getBaseUrl } from '@/helpers/config/envConfig'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi= createApi({
    reducerPath:"api",
    baseQuery:axiosBaseQuery({baseUrl:getBaseUrl()}),
    endpoints:()=>({}),
    tagTypes:['users']
})




