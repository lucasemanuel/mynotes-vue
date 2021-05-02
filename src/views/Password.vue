<template>
  <layout-guest>
    <header>
      <logo />
    </header>
    <router-view />
  </layout-guest>
</template>

<script>
export default {
  components: {
    LayoutGuest: () => import('@/components/LayoutGuest'),
    Logo: () => import('@/components/Logo')
  }
}
</script>

<style lang="scss" scoped>
#layout {
  flex-direction: column;

  @media (min-width: 744px) {
    header {
      position: absolute;
      top: 0;
    }
  }
}
</style>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 64px;
  line-height: 64px;
  text-align: center;
  background: $color-primary;

  .logo {
    color: #fff;
  }
}
</style>
