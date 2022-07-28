let BASE_URL = ''
const BASE_TIMEOUT = 1000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else if (process.env.NODE_ENV === '生产环境：production') {
  BASE_URL = 'http://liyixue.org/dev'
} else {
  BASE_URL = 'http://yuebing.org/dev'
}

export { BASE_URL, BASE_TIMEOUT }
