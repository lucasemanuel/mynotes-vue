<template>
  <h1 class="logo" :style="style"><span>My</span>notes</h1>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    size: {
      type: String
    },
    color: {
      type: String
    }
  },
  computed: {
    fontSize () {
      return this.size ? 'font-size: ' + this.size + ';' : null
    },
    textColor () {
      return this.color ? 'color:' + this.color + ';' : null
    },
    style () {
      return this.fontSize + this.textColor
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  font-family: $font-primary;
  text-transform: uppercase;

  span {
    color: inherit;
    font-family: inherit;
    font-weight: 400;
  }
}
</style>
