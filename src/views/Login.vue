<template>
  <layout-guest>
    <card>
      <validation-observer ref="observer" v-slot="{ handleSubmit }">
        <form v-on:submit.prevent="handleSubmit(onSubmit)" novalidate>
          <h2>Login no Mynotes</h2>
          <p>Entre agora no app</p>
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

          <button>Entrar</button>
          <router-link to="register">
            Crie sua conta
          </router-link>
          <router-link
            to="password/request-recovery-password"
            class="link-recovery-password"
          >
            Esqueci minha senha
          </router-link>
        </form>
      </validation-observer>
    </card>
  </layout-guest>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
    LayoutGuest: () => import('@/components/LayoutGuest'),
    Card: () => import('@/components/Card'),
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    async onSubmit () {
      try {
        await this.login(this.form)
        this.$router.push('/')
      } catch (error) {
        this.form.password = ''

        if (error.response.status) {
          this.$toasts.error('E-mail ou senha estão incorretos.')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_form.scss';
</style>
