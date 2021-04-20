<template>
  <layout-guest :invert="true">
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <form v-on:submit.prevent="handleSubmit(onSubmit)" novalidate>
        <h2>Registre-se no Mynotes</h2>
        <p>Cria uma conta agora</p>
        <validation-provider
          v-slot="{ errors, classes }"
          name="Email"
          rules="required|email|max:100"
          class="form-field"
        >
          <label for="form-email">Email</label>
          <input
            type="email"
            id="form-email"
            v-model="form.email"
            :class="classes"
            required
          />
          <span class="form-field-error">{{ errors[0] }}</span>
        </validation-provider>

        <validation-provider
          v-slot="{ errors, classes }"
          name="Senha"
          rules="required|min:6|max:32"
          class="form-field"
          vid="confirmation"
        >
          <label for="form-confirm-password">Senha</label>
          <input
            type="password"
            id="form-password"
            v-model="form.password"
            :class="classes"
            required
          />
          <span class="form-field-error">{{ errors[0] }}</span>
        </validation-provider>

        <validation-provider
          v-slot="{ errors, classes }"
          name="Repita a senha"
          rules="confirmed:confirmation"
          class="form-field"
        >
          <label for="form-confirm-password">Confirme a senha</label>
          <input
            type="password"
            id="form-confirm-password"
            v-model="form.password_confirmation"
            :class="classes"
            required
          />
          <span class="form-field-error">{{ errors[0] }}</span>
        </validation-provider>
        <button>Criar</button>
        <router-link to="/">
          Entre no app
        </router-link>
      </form>
    </validation-observer>
  </layout-guest>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  name: 'Register',
  components: {
    LayoutGuest: () => import('@/components/LayoutGuest'),
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      form: {
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      const form = this.form

      try {
        await this.$http.post('/users', form)
        this.$toasts.success('Usuário cadastrado com sucesso!')
        this.$router.push({ name: 'Login' })
      } catch (error) {
        this.form.password_confirmation = ''

        if (error.response.status === 422) {
          const { errors } = error.response.data
          this.$toasts.error(errors[Object.keys(errors)[0]][0])
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_form.scss';

form {
  h2 {
    font-family: $font-primary;
    font-weight: 700;
  }
  p {
    margin-bottom: 16px;
  }

  a {
    margin-top: 20px;
  }

  @media (min-width: 744px) {
    flex: 1;
  }
}
</style>
