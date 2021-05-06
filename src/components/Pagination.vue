<template>
  <nav class="pagination">
    <button
      class="pagination-btn"
      :class="{ disabled: currentPage === 1 }"
      v-on:click="selectPage(1)"
    >
      «
    </button>
    <button
      class="pagination-btn"
      :class="{ active: page === currentPage }"
      v-for="page in lastPage"
      :key="page"
      v-on:click="selectPage(page)"
    >
      {{ page }}
    </button>
    <button
      class="pagination-btn"
      :class="{ disabled: currentPage === lastPage }"
      v-on:click="selectPage(lastPage)"
    >
      »
    </button>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      lastPage: state => state.notes.notes_map.last_page,
      currentPage: state => state.notes.notes_map.current_page
    })
  },
  methods: {
    ...mapActions(['fetchNotes']),
    async selectPage (page) {
      if (this.currentPage !== page) {
        await this.fetchNotes({ page })
        const element = document.getElementsByTagName('main')[0]
        element.scrollTo(0, 0)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
nav.pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  button.pagination-btn {
    @include buttonIcon;

    display: inline-block;
    background: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
    margin: auto 6px 12px;

    &.active {
      background: $color-font;
      color: #fff;
      cursor: auto;
    }

    &.disabled {
      cursor: auto;
    }
  }
}
</style>
