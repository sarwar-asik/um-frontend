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
        "Content-Type": contentType || "application/json"
      } })
      // console.log(result,"result from axiosBaseQuery.ts");
      // return { data: result.data }
      return result

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
