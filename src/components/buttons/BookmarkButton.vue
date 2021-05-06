<template>
  <button
    class="button-bookmark button"
    :class="{ favorited: favorited }"
    type="button"
  >
    <font-awesome-icon :icon="iconBookmark" />
  </button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'BookmarkButton',
  components: {
    FontAwesomeIcon
  },
  props: {
    favorited: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      iconBookmark: faBookmark
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  @include buttonIcon;
  @include buttonIconColor(#fff, $color-primary);

  &:hover {
    @include buttonIconColor($color-primary, #fff);
  }

  &.favorited {
    @include buttonIconColor($color-primary, #fff);

    &:hover {
      @include buttonIconColor(#fff, $color-primary);
    }
  }
}
</style>
