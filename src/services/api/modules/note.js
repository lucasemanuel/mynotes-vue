import api from '@/services/api'

export const index = payload => {
  return api.get('/notes', { params: payload })
}
