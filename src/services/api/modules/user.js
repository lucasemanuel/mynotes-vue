import api from '@/services/api'

export const create = payload => {
  return api.post('/users', payload)
}
