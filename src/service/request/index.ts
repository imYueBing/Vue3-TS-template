import axios from 'axios'

import type { AxiosInstance } from 'axios'
import type { IYxRequestInterceptors, IYxRequsetConfig } from './types'

class YxRequest {
  instance: AxiosInstance
  interceptors?: IYxRequestInterceptors

  constructor(config: IYxRequsetConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 从 config 中取出的拦截器是对应的实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCath
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCath
    )

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      config => {
        console.log('全局：请求成功的拦截')
        return config
      },
      err => {
        console.log('全局：请求失败的拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      config => {
        console.log('全局：响应成功的拦截')
        return config
      },
      err => {
        console.log('全局：响应失败的拦截')
        return err
      }
    )
  }

  request(config: IYxRequsetConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors?.requestInterceptor(config)
    }
    this.instance.request(config).then(res => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default YxRequest
