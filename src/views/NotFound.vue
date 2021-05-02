<template>
  <layout-guest>
    <header>
      <logo />
    </header>
    <h1 class="not-found-error">404</h1>
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

  h1.not-found-error {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 144px;
  }

  @media (min-width: 744px) {
    header {
      position: absolute;
      top: 0;
    }
  }
}
</style>
