<template>
  <div id="layout">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LayoutGuest'
}
</script>

<style lang="scss">
#layout {
  display: flex;
  align-items: center;
  height: 100vh;
  background: #e2e7e7;
  overflow-y: auto;

  @media (min-width: 744px) {
    justify-content: center;
    height: initial;
    min-height: 100vh;
  }
}
</style>
