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
        <section>
          <div class="toggle">
            <button class="active">Criar</button>
            <button>Buscar</button>
          </div>

          <form id="formNote">
            <textarea
              type="textarea"
              rows="5"
              id="form-note"
              placeholder="Anote aqui..."
            />
            <input
              type="text"
              id="form-search"
              placeholder="Estou buscando..."
            />
            <button type="submit">Enviar</button>
          </form>
        </section>
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

    section {
      display: flex;
      flex-direction: column;
      width: 100%;

      div.toggle {
        display: flex;
        border-radius: 2px;
        overflow: hidden;
        height: 32px;
        width: 220px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
        background: #fff;
        margin-bottom: 16px;

        button {
          flex: 1;
          flex-shrink: 1;
          height: 100%;
          // font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          background: #fff;
          transition: $transition-background-color;

          &:hover {
            background: #{$color-primary}11;
            color: $color-primary;
          }

          &.active {
            background: #{$color-primary};
            color: #fff;
          }
        }
      }

      #formNote {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 24px;

        textarea {
          @include note;
          flex: 1;
          resize: none;
          // display: none;
        }

        input#form-search {
          @include note;
          border-radius: 2px;
        }

        button[type='submit'] {
          width: 120px;
          height: 32px;
          margin-top: 16px;
          align-self: flex-end;
          border-radius: 2px;
          background: $color-primary;
          color: #fff;
          font-weight: 600;
          text-transform: uppercase;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
          transition: $transition-background-color;

          &:hover {
            background: #fff;
            color: $color-primary;
          }
        }
      }
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
