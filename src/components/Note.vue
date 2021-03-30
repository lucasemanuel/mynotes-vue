<template>
  <div class="note" :class="{ favorited: isFavorite }">
    <p class="note-body">
      <button class="note-bookmark">
        <font-awesome-icon :icon="iconBookmark" />
      </button>
      {{ content }}
    </p>
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
import { faBookmark as faRegularBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as faSolidBookmark } from '@fortawesome/free-solid-svg-icons'

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
  computed: {
    iconBookmark: function () {
      console.log(this.isFavorite)
      return !this.isFavorite ? faRegularBookmark : faSolidBookmark
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
  border-radius: 4px;
  font-size: 18px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);

  &-body {
    .note-bookmark {
      width: 32px;
      height: 32px;
      margin: 0 2px;
      position: relative;
      top: -22px;
      float: right;
      background: #fff;
      border-radius: 4px;
      transition: background 600;
      transition-timing-function: ease;
      border: $color-primary solid 1px;
    }
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

  @mixin not-favorited {
    background: #fff;

    svg > path {
      transition: color 1s;
      color: $color-primary;
    }
  }

  @mixin favorited {
    background: $color-primary;

    svg > path {
      transition: color 1s;
      color: #fff;
    }
  }

  &.favorited {
    border: $color-primary solid 1px;

    .note-bookmark {
      @include favorited;

      &:hover {
        @include not-favorited;
      }
    }
  }

  &:not(.favorited) {
    .note-bookmark {
      @include not-favorited;

      &:hover {
        @include favorited;
      }
    }
  }
}
</style>
