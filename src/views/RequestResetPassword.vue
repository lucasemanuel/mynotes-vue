<template>
  <section>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <form v-on:submit.prevent="handleSubmit(onSubmit)" novalidate>
        <h2>Esqueci minha senha</h2>
        <p>
          Você vai receber um email contendo o link para alterar a senha.
        </p>
        <validation-provider
          v-slot="{ errors, classes }"
          name="Email"
          rules="required|email"
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
        <button>Enviar</button>
        <router-link to="login">
          Retornar ao Login
        </router-link>
      </form>
    </validation-observer>
  </section>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  name: 'RequestResetPassword',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      form: {
        email: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        await this.$http.post('/auth/recovery', this.form)

        this.$toasts.push({
          type: 'success',
          message:
            'Email enviado com sucesso, verifique a sua caixa de entrada!',
          duration: 6000
        })
      } catch (error) {
        const { status } = error.response

        if (status === 403) {
          this.$toasts.warning(
            'Já foi enviado um email de recuperação de senha para essa conta.'
          )
        } else if (status === 400 || status === 404) {
          this.$toasts.error('Falha ao enviar link para resetar senha.')
        }
      } finally {
        this.form.email = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_form.scss';

section {
  padding: 24px;
}
</style>
