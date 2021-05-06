import { login, recoveryPassword, logout } from '@/services/api/modules/auth'
import { setToken, removeToken } from '@/services/storage'

const actions = {
  login (context, payload) {
    return new Promise((resolve, reject) => {
      login(payload)
        .then(response => {
          const { token } = response.data
          setToken(token)
          resolve(response)
        })
        .catch(error => reject(error))
    })
  },
  logout () {
    return new Promise((resolve, reject) => {
      logout()
        .then(response => {
          removeToken()
          resolve(response)
        })
        .catch(error => reject(error))
    })
  },
  recoveryPassword (context, payload) {
    return recoveryPassword(payload)
  }
}

export default {
  actions
}
