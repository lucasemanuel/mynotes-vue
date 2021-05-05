import { login, recoveryPassword } from '@/services/api/modules/auth'
import { setToken } from '@/services/storage'

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
  recoveryPassword (context, payload) {
    return recoveryPassword(payload)
  }
}

export default {
  actions
}
