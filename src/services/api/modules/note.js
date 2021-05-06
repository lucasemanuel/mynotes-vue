import api from '@/services/api'

export const index = payload => {
  return api.get('/notes', { params: payload })
}

export const update = ({ id, body }) => {
  return api.put(`/notes/${id}`, {
    body
  })
}

export const mark = id => {
  return api.patch(`/notes/${id}`)
}

export const remove = id => {
  return api.delete(`/notes/${id}`)
}
