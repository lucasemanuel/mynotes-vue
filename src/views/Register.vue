<template>
  <layout-guest :invert="true">
    <form>
      <h2>Registre-se no Mynotes</h2>
      <p>Cria uma conta agora</p>
      <label for="form-email">Email</label>
      <input type="email" id="form-email" />
      <label for="form-confirm-password">Password</label>
      <input type="password" id="form-password" />
      <label for="form-confirm-password">Confirme o Password</label>
      <input type="password" id="form-confirm-password" />
      <button>Criar</button>
      <router-link to="/">
        Entre no app
      </router-link>
    </form>
  </layout-guest>
</template>

<script>
export default {
  name: 'Register',
  components: {
    LayoutGuest: () => import('@/components/LayoutGuest')
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
