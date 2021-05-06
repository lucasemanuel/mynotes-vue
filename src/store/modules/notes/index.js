import {
  index as listNotes,
  update as updateNote,
  mark as favoriteNote,
  remove as removeNote,
  create as createNote
} from '@/services/api/modules/note'
import {
  SET_NOTES_MAP,
  REMOVE_NOTE,
  SET_NOTE,
  SET_SEARCH_PARAMS
} from './mutation-types'

const state = {
  notes_map: {},
  search_params: {
    text: undefined,
    favorite: undefined
  }
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
  [SET_NOTE] (state, { id, note: newNote }) {
    let indexToReplace = 0
    const data = state.notes_map.data.filter((note, index) => {
      if (note.id === id) indexToReplace = index
      return note.id !== id
    })

    data.splice(indexToReplace, 0, newNote)
    state.notes_map.data = data
  },
  [SET_SEARCH_PARAMS] (
    state,
    payload = { text: undefined, favorite: undefined }
  ) {
    state.search_params = payload
  }
}

const actions = {
  fetchNotes ({ state, commit }, payload = {}) {
    const params = {}
    if (payload.page !== undefined) params.page = payload.page
    if (state.search_params.text !== undefined) {
      params.text = state.search_params.text
    }
    if (state.search_params.favorite !== undefined) {
      params.favorite = state.search_params.favorite
    }

    return new Promise((resolve, reject) => {
      listNotes(params)
        .then(response => {
          commit(SET_NOTES_MAP, response.data)
          resolve(response)
        })
        .catch(error => reject(error))
    })
  },
  addNote ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      createNote(payload)
        .then(response => {
          commit(SET_NOTE, { id: response.data.id, note: response.data })
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
  },
  updateNote ({ commit }, { id, body }) {
    return new Promise((resolve, reject) => {
      updateNote({ id, body })
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
