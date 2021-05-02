<template>
  <div :class="[`alert-${color}`]" class="alert" role="alert">
    <span class="message">
      {{ message }}
    </span>
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
      @click="$emit('remove')"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
import ToastMixin from 'vue-my-toasts/src/mixins/ToastMixin'
import TimerMixin from 'vue-my-toasts/src/mixins/TimerMixin'

export default {
  name: 'BootstrapComponent',
  mixins: [ToastMixin, TimerMixin],
  props: {
    title: {
      type: [String, Boolean],
      required: false,
      default: false
    }
  },
  computed: {
    color () {
      switch (this.type) {
        case 'base':
          return 'info'
        case 'warning':
          return 'warning'
        case 'error':
          return 'danger'
        case 'success':
          return 'success'
        default:
          return 'info'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.24);
  align-items: center;

  &-danger {
    background: lighten($color-danger, 20%);
    // border: lighten($color-danger, 8%) solid 1px;

    span {
      color: darken($color-danger, 32%);
    }
  }

  &-success {
    background: lighten($color-primary, 56%);
    // border: lighten($color-primary, 8%) solid 1px;

    span {
      color: darken($color-primary, 20%);
    }
  }

  .message {
    display: flex;
    margin-right: 8px;
    // color: #fff;
  }

  button {
    background: none;
    font-size: 24px;

    span {
      // color: #fff;
      font-weight: bold;
    }
  }
}
</style>
