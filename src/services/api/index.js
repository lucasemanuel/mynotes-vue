import axios from 'axios'
import { getToken } from '@/services/storage'

const instance = axios.create({
  baseURL: process.env.VUE_APP_URL_API,
  timeout: 1000,
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json'
  }
})

if (getToken()) {
  instance.defaults.headers.common = {
    Authorization: `Bearer ${getToken()}`
  }
}

export default instance
