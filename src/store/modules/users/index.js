import { create as createUser } from '@/services/api/modules/user'

const actions = {
  addUser (context, payload) {
    return createUser(payload)
  }
}

export default {
  actions
}
