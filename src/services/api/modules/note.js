import api from '@/services/api'

export const index = () => api.get('/notes')
