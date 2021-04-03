<template>
  <div class="note" :class="{ favorited: isFavorite }">
    <article class="note-body">
      <nav class="note-nav">
        <trash-button />
        <bookmark-button :favorited="true" />
      </nav>
      {{ content }}
    </article>
    <span class="note-dates">
      <span class="note-dates">
        <span class="note-created-at">Criado em: {{ createdAt }}</span>
        <span class="note-updated-at">Atualizado em: {{ updatedAt }}</span>
      </span>
    </span>
  </div>
</template>

<script>
import TrashButton from './buttons/TrashButton'
import BookmarkButton from './buttons/BookmarkButton'

export default {
  name: 'Note',
  props: {
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
    font-weight: 600;
    text-align: right;
    color: #484949;

    * {
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
