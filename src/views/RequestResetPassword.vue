<template>
  <section>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <form v-on:submit.prevent="handleSubmit(onSubmit)" novalidate>
        <h2>Esqueci minha senha</h2>
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
        const response = await this.$http.post('/', this.form)
        console.log(response)
      } catch (error) {
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

h2 {
  margin-bottom: 16px;
}
</style>
