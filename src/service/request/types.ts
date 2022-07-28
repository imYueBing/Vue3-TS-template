import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface IYxRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCath?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCath?: (error: any) => any
}

interface IYxRequsetConfig extends AxiosRequestConfig {
  interceptors?: IYxRequestInterceptors
}

export type { IYxRequestInterceptors, IYxRequsetConfig }
