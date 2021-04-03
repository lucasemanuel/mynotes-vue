<template>
  <button class="button-trash button">
    <font-awesome-icon :icon="iconTrash" />
  </button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'TrashButton',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      iconTrash: faTrash
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  @include buttonIcon;
  @include buttonIconColor($color-danger, #fff);

  &:hover {
    @include buttonIconColor(#fff, $color-danger);
  }
}
</style>
