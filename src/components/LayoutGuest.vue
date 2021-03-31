<template>
  <div id="layout">
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
  </div>
</template>

<script>
export default {
  name: 'LayoutGuest',
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
#layout {
  display: flex;
  align-items: center;
  height: 100vh;
  background: #e2e7e7;
  overflow-y: auto;

  p {
    font-size: 18px;
    font-weight: 300;
  }

  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    box-shadow: 0 16px 80px rgba(0, 0, 0, 0.32);

    aside,
    section {
      padding: 24px;
    }

    aside {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #1d2124;
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
  }

  @media (min-width: 744px) {
    justify-content: center;
    height: initial;
    min-height: 100vh;

    .flex-row-reverse {
      flex-direction: row-reverse;
    }

    .flex-row {
      flex-direction: row;
    }

    .card {
      height: 600px;
      max-width: 888px;
      margin: 12px;
      overflow: auto;
      border-radius: 4px;

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
}
</style>
