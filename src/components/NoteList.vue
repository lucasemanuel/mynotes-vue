<template>
  <div class="list">
    <note
      v-for="note in notes"
      :key="note.id"
      :id="note.id"
      :content="note.body"
      :isFavorite="!!note.is_favorite"
      :createdAt="note.created_at"
      :updatedAt="note.updated_at"
    >
      { note.body }
    </note>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NoteList',
  components: {
    Note: () => import('@/components/Note')
  },
  computed: {
    ...mapState({
      notes: state => state.notes.notes_map.data
    })
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
}
</style>
