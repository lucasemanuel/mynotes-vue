import api from '@/services/api'

export const login = ({ email, password }) => {
  return api.post('/auth/login', {
    email,
    password
  })
}

export const logout = () => api.post('/auth/logout')

export const recoveryPassword = ({ email }) => {
  return api.post('/auth/recovery', { email })
}
