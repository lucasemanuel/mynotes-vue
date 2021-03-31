<template>
  <div class="note" :class="{ favorited: isFavorite }">
    <article class="note-body">
      <nav class="note-nav">
        <button class="button-close button">
          <font-awesome-icon :icon="iconTrash" />
        </button>
        <button class="button-bookmark button">
          <font-awesome-icon :icon="iconBookmark" />
        </button>
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBookmark, faTrash } from '@fortawesome/free-solid-svg-icons'

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
  data () {
    return {
      iconBookmark: faBookmark,
      iconTrash: faTrash
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
.note {
  width: 100%;
  margin-bottom: 24px;
  padding: 16px;
  word-break: break-word;
  border-radius: 4px;
  font-size: 18px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);

  @mixin whiteBlack {
    background: #fff;

    svg > path {
      transition: color 1s;
      color: $color-primary;
    }
  }

  @mixin blackWhite {
    background: $color-primary;

    svg > path {
      transition: color 1s;
      color: #fff;
    }
  }

  &-body {
    .note-nav {
      position: relative;
      float: right;
      top: -22px;
      margin: 0 0 -10px 8px;

      .button {
        width: 32px;
        height: 32px;
        background: #fff;
        border-radius: 4px;
        transition: background 0.5s;
        transition-timing-function: ease-in-out;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

        &:first-child {
          margin-right: 8px;

          &:hover {
            @include blackWhite;
          }
        }
      }
    }
    // .button {

    //   &-close {
    //   }
    // }
  }

  .note-dates {
    display: block;
    margin-top: 4px;
    font-size: 16px;
    font-weight: 600;
    text-align: right;
    color: #484949;

    .note-created-at,
    .note-updated-at {
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

      .note-created-at,
      .note-updated-at {
        display: inline-block;
      }
    }
  }

  &.favorited {
    .button-bookmark {
      @include blackWhite;

      &:hover {
        @include whiteBlack;
      }
    }
  }

  &:not(.favorited) {
    .button-bookmark {
      @include whiteBlack;

      &:hover {
        @include blackWhite;
      }
    }
  }
}
</style>
