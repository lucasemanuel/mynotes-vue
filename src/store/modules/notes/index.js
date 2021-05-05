import { index as listNotes } from '@/services/api/modules/note'
import { SET_NOTES_MAP } from './mutation-types'

const state = {
  notes_map: {}
}

const mutations = {
  [SET_NOTES_MAP] (state, payload) {
    console.log(payload)
    state.notes_map = payload
  }
}

const actions = {
  fetchNotes ({ commit }, payload = {}) {
    return new Promise((resolve, reject) => {
      const params = {}
      const { page, text, favorite } = payload
      if (payload.page !== undefined) params.page = page
      if (text !== undefined) params.text = text
      if (favorite !== undefined) params.favorite = favorite

      listNotes(params)
        .then(response => {
          commit(SET_NOTES_MAP, response.data)
          console.log(response)
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
