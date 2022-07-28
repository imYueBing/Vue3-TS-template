import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import yxRequest from './service'

import './assets/css/index.css'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn
})

app.use(createPinia())

app.use(router)

yxRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor(config) {
      console.log('单独请求的config')
      return config
    },
    responseInterceptor(res) {
      console.log('单独响应的 res')
      return res
    }
  }
})

/* yxRequest.request({
  url: '/home/multidata',
  method: 'GET'
}) */

app.mount('#app')
