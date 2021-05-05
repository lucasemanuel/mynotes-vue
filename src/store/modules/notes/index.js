import { index as listNotes } from '@/services/api/modules/note'
import { SET_NOTES_MAP } from './mutation-types'

const state = {
  notes_map: {}
}

const mutations = {
  [SET_NOTES_MAP] (state, payload) {
    state.notes_map = payload
  }
}

const actions = {
  fetchNotes ({ commit }) {
    return new Promise((resolve, reject) => {
      listNotes()
        .then(response => {
          commit(SET_NOTES_MAP, response.data)
          resolve(response)
        })
        .catch(error => reject(error))
    })
  }
}

export default {
  state,
  mutations,
  actions
}
