<template>
  <div class="note" :class="{ favorited: isFavorite }">
    <article class="note-body">
      <nav class="note-nav">
        <trash-button v-on:click.native="onDelete" />
        <bookmark-button
          :favorited="isFavorite"
          v-on:click.native="toggleFavoriteNote(id)"
        />
      </nav>
      <span contenteditable="true" @input="onChangeBody">
        {{ content }}
      </span>
    </article>
    <span class="note-dates">
      <span class="note-created-at">
        Criado em: {{ createdAt | data }} - {{ createdAt | hour }}
      </span>
      <span class="note-updated-at">
        Atualizado em: {{ updatedAt | data }} - {{ updatedAt | hour }}
      </span>
    </span>
  </div>
</template>

<script>
import TrashButton from './buttons/TrashButton'
import BookmarkButton from './buttons/BookmarkButton'

import _ from 'lodash'

import { mapActions } from 'vuex'

export default {
  name: 'Note',
  props: {
    id: {
      type: Number,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    updatedAt: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: true
    }
  },
  components: {
    TrashButton,
    BookmarkButton
  },
  data () {
    return {
      body: this.content
    }
  },
  watch: {
    body: function (newBody, oldBody) {
      this.debouncedGetBody()
    }
  },
  mounted () {
    this.debouncedGetBody = _.debounce(this.onUpdate, 1000)
  },
  methods: {
    ...mapActions(['deleteNote', 'toggleFavoriteNote', 'updateNote']),
    onDelete () {
      const result = confirm('Tem certeza que deseja excluir essa nota?')
      if (result) {
        this.deleteNote(this.id)
      }
    },
    onChangeBody (event) {
      this.body = event.target.innerText
    },
    onUpdate () {
      this.updateNote({
        id: this.id,
        body: this.body
      })
        .then(response => {
          this.$toasts.success('Nota atualizada com sucesso!')
        })
        .catch(error => {
          const status = error.response?.status

          if (status === 422) {
            const { errors } = error.response.data
            this.$toasts.error(errors[Object.keys(errors)[0]][0])
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.note {
  @include note;
  width: 100%;
  margin-bottom: 24px;

  &-body {
    .note-nav {
      position: relative;
      float: right;
      top: -22px;
      margin: 0 0 -10px 8px;

      *:not(:last-child) {
        margin-right: 8px;
      }
    }
  }

  .note-dates {
    display: block;
    margin-top: 8px;
    font-size: 16px;
    text-align: right;

    * {
      color: #757575;
      display: block;
    }

    @media (min-width: 600px) {
      .note-created-at::after {
        content: ' |';
      }

      .note-updated-at::before {
        content: ' ';
        white-space: pre;
      }

      * {
        display: inline-block;
      }
    }
  }
}
</style>
