import axios from 'axios'
import { getToken, removeToken } from '@/services/storage'

const instance = axios.create({
  baseURL: process.env.VUE_APP_URL_API,
  timeout: 1000,
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json'
  }
})

instance.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  response => response,
  error => {
    const status = error.response?.status
    const { url } = error.response?.config

    if ((status === 401) & !url.includes('login')) {
      removeToken()
      document.location.reload()
    }
    return Promise.reject(error)
  }
)

export default instance
