import api from '@/services/api'

export const index = payload => {
  return api.get('/notes', { params: payload })
}

export const remove = id => {
  return api.delete(`/notes/${id}`)
}

export const mark = id => {
  return api.patch(`/notes/${id}`)
}
