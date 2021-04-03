<template>
  <section>
    <div class="toggle">
      <button class="active">Criar</button>
      <button>Buscar</button>
    </div>
    <form id="formNote">
      <bookmark-button />
      <textarea
        type="textarea"
        rows="5"
        id="inputNote"
        placeholder="Anote aqui..."
      />
      <input type="text" id="inputSearch" placeholder="Estou buscando..." />
      <button type="submit">Enviar</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ToggleForm',
  components: {
    BookmarkButton: () => import('../components/buttons/BookmarkButton')
  }
}
</script>

<style lang="scss" scoped>
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
    z-index: 1;

    button {
      flex: 1;
      flex-shrink: 1;
      height: 100%;
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
    position: relative;
    top: -16px;

    .button-bookmark {
      align-self: flex-end;
      margin-right: 16px;
      top: 22px;
      position: relative;
    }

    textarea#inputNote {
      @include note;
      flex: 1;
      resize: none;
    }

    input#inputSearch {
      @include note;
      border-radius: 2px;
      display: none;
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
</style>
