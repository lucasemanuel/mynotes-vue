<template>
  <div id="layout">
    <nav class="header">
      <div class="container">
        <Logo size="24px" />
        <button type="button" class="exit" v-on:click="onLogout">Sair</button>
      </div>
    </nav>
    <main>
      <div class="container">
        <toggle-form />
        <note-list />
        <pagination />
      </div>
      <footer>
        <span>
          Github:
          <a href="https://lucasemanuel.github.io/#/">@lucasemanuel</a>
          - (<a href="https://github.com/lucasemanuel/mynotes">repo</a>)
        </span>
      </footer>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {
    Logo: () => import('@/components/Logo'),
    NoteList: () => import('@/components/NoteList'),
    ToggleForm: () => import('@/components/ToggleForm'),
    Pagination: () => import('@//components/Pagination')
  },
  created () {
    this.fetchNotes()
  },
  methods: {
    ...mapActions(['fetchNotes', 'logout']),
    async onLogout () {
      await this.logout()
      this.$toasts.success('Até mais!')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin container {
  max-width: 1200px;
  padding: 0 15px;
}

#layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background: #e2e7e7;

  nav.header {
    background-color: $color-primary;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);

    div.container {
      @include container;
      display: flex;
      justify-content: space-between;
      line-height: 54px;
      margin: 0 auto;

      * {
        font-family: $font-primary;
        font-weight: 600;
        color: #fff;
        font-size: 24px;
      }

      button.exit {
        background: none;
      }
    }
  }

  main {
    overflow-y: auto;
    height: calc(100vh - 54px);

    div.container {
      @include container;
      min-height: calc(100vh - 54px - 64px - 24px * 2);
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 24px auto;
    }
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    background: $color-font;
    color: #fff;
    font-size: 20px;
    font-weight: 400;

    * {
      color: inherit;
    }
  }
}
</style>
