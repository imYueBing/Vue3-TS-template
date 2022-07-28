import YxRequest from './request'

import { BASE_URL, BASE_TIMEOUT } from './request/config'

const yxRequest = new YxRequest({
  baseURL: BASE_URL,
  timeout: BASE_TIMEOUT,
  interceptors: {
    requestInterceptor: config => {
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCath: err => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: res => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCath: err => {
      console.log('响应失败的拦截')
      return err
    }
  }
})

export default yxRequest
