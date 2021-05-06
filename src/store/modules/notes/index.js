import {
  index as listNotes,
  remove as removeNote,
  mark as favoriteNote
} from '@/services/api/modules/note'
import { SET_NOTES_MAP, REMOVE_NOTE, SET_NOTE } from './mutation-types'

const state = {
  notes_map: {}
}

const mutations = {
  [SET_NOTES_MAP] (state, payload) {
    state.notes_map = payload
  },
  [REMOVE_NOTE] (state, id) {
    state.notes_map.data = state.notes_map.data.filter(note => {
      return note.id !== id
    })
  },
  [SET_NOTE] (state, { id, note }) {
    const data = state.notes_map.data.filter(note => {
      return note.id !== id
    })
    data.splice(0, 0, note)
    state.notes_map.data = data
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
  },
  deleteNote ({ commit }, id) {
    return new Promise((resolve, reject) => {
      removeNote(id)
        .then(response => {
          commit(REMOVE_NOTE, id)
          resolve(response)
        })
        .catch(error => reject(error))
    })
  },
  toggleFavoriteNote ({ commit }, id) {
    return new Promise((resolve, reject) => {
      favoriteNote(id)
        .then(response => {
          commit(SET_NOTE, { id, note: response.data })
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
