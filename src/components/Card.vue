<template>
  <main class="card" v-bind:class="styleClass">
    <aside>
      <logo />
      <p class="subtitle">Nosso app de notas favorito!</p>
      <p class="about">
        Tenha suas notas salvas e acesse elas de onde e quando quizer
      </p>
    </aside>
    <section>
      <slot />
    </section>
  </main>
</template>

<script>
export default {
  components: {
    Logo: () => import('@/components/Logo')
  },
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    styleClass: function () {
      return {
        'flex-row': !this.invert,
        'flex-row-reverse': this.invert
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  box-shadow: 0 16px 80px rgba(0, 0, 0, 0.32);

  p {
    font-size: 18px;
    font-weight: 300;
  }

  aside,
  section {
    padding: 24px;
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: $color-primary;
    color: #fff;
    text-align: center;

    .logo,
    span,
    .about,
    .subtitle {
      color: inherit;
    }

    .logo {
      font-size: 38px;
    }

    .about {
      margin-top: 32px;
      padding: 0 24px;
      font-size: 20px;
    }
  }

  section {
    flex: 1;
    background-color: #fff;
  }

  @media (min-width: 744px) {
    height: 600px;
    max-width: 888px;
    margin: 12px;
    overflow: auto;
    border-radius: 4px;

    &.flex-row-reverse {
      flex-direction: row-reverse;
    }

    &.flex-row {
      flex-direction: row;
    }

    aside {
      width: calc(40 * 888px / 100);
    }

    section {
      display: flex;
      align-items: center;
      flex: initial;
      width: calc(60 * 888px / 100);
      padding: 48px;
    }
  }
}
</style>
