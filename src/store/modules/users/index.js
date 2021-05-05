import {
  create as createUser,
  update as UpdateUser
} from '@/services/api/modules/user'

const actions = {
  addUser (context, payload) {
    return createUser(payload)
  },
  updatePassword (context, payload) {
    return UpdateUser(payload)
  }
}

export default {
  actions
}
