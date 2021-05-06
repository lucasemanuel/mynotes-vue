<template>
  <section>
    <div class="toggle">
      <button
        :class="{ active: toggle }"
        v-on:click="onToggle"
        v-bind:disabled="toggle"
      >
        Criar
      </button>
      <button
        :class="{ active: !toggle }"
        v-on:click="onToggle"
        v-bind:disabled="!toggle"
      >
        Buscar
      </button>
    </div>
    <form id="formNote" v-on:submit.prevent="onSubmit">
      <bookmark-button
        :favorited="form.is_favorite"
        v-on:click.native="onFavorite"
      />
      <textarea
        type="textarea"
        rows="5"
        id="inputNote"
        placeholder="Anote aqui..."
        v-model="form.body"
        v-if="toggle"
      />
      <input
        type="text"
        id="inputSearch"
        placeholder="Estou buscando..."
        v-model="form.body"
        v-else
      />
      <button type="submit">{{ this.toggle ? 'Salvar' : 'Buscar' }}</button>
    </form>
  </section>
</template>

<script>
import { SET_SEARCH_PARAMS } from '@/store/modules/notes/mutation-types'
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'ToggleForm',
  components: {
    BookmarkButton: () => import('../components/buttons/BookmarkButton')
  },
  data () {
    return {
      toggle: true,
      form: {
        body: '',
        is_favorite: false
      }
    }
  },
  methods: {
    ...mapActions(['fetchNotes', 'addNote']),
    ...mapMutations([SET_SEARCH_PARAMS]),
    resetForm () {
      this.form = {
        body: '',
        is_favorite: false
      }
    },
    onToggle () {
      this.toggle = !this.toggle
      this.resetForm()
    },
    onFavorite () {
      this.form.is_favorite = !this.form.is_favorite
    },
    async onSubmit () {
      if (this.toggle) {
        await this.addNote(this.form)
        this.resetForm()
      } else {
        await this[SET_SEARCH_PARAMS]({
          text: this.form.body,
          favorite: this.form.is_favorite ? 1 : undefined
        })
        await this.fetchNotes()
      }
    }
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
        cursor: initial;
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
      // display: none;
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
