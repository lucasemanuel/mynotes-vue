import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import users from './modules/users'
import notes from './modules/notes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    users,
    notes
  }
})
