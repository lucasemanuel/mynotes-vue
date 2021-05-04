<template>
  <section>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <form v-on:submit.prevent="handleSubmit(onSubmit)" novalidate>
        <h2>Nova senha</h2>
        <p>Altere a senha da sua conta.</p>
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
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  computed: {
    tokenRecovery () {
      return this.$route.params.code
    }
  },
  methods: {
    async onSubmit () {
      try {
        await this.$http.patch('/users', {
          ...this.form,
          token: this.tokenRecovery
        })

        this.$toasts.success('Senha alterada com sucesso.')
        this.$router.push({ name: 'Login' })
      } catch (error) {
        const { status } = error.response

        if (status !== 422) {
          this.$toasts.error('Falha ao atualizar senha!')
          setTimeout(() => {
            this.$toasts.warning(
              'Você está utilizando o link enviado por email?'
            )
          }, 2000)
        }
      } finally {
        this.form.password_confirmation = this.form.password = ''
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
