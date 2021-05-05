import api from '@/services/api'

export const create = payload => {
  return api.post('/users', payload)
}

export const update = payload => {
  return api.patch('/users', payload)
}
