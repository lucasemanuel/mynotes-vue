<template>
  <div id="layout">
    <nav>
      <div class="container">
        <Logo size="24px" />
        <span>Sair</span>
      </div>
    </nav>
    <main>
      <div class="container">
        <note-list />
      </div>
      <footer>
        <span>
          Github: <a href="https://lucasemanuel.github.io/#/">@lucasemanuel</a>
        </span>
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  components: {
    Logo: () => import('@/components/Logo'),
    NoteList: () => import('@/components/NoteList')
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

  nav {
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
    }
  }

  main {
    overflow-y: auto;
    height: calc(100vh - 54px);

    div.container {
      @include container;
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
    height: 96px;
    background: $color-font;
    color: #fff;
    font-size: 20px;
    font-weight: 300;

    * {
      color: inherit;
    }
  }
}
</style>
