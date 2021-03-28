<template>
  <layout-guest>
    <form>
      <h2>Login no Mynotes</h2>
      <p>Entre agora no app</p>
      <label for="form-email">Email</label>
      <input type="email" id="form-email" />
      <label for="form-password">Password</label>
      <input type="password" id="form-password" />
      <button>Entrar</button>
      <router-link to="register">
        Crie sua conta
      </router-link>
    </form>
  </layout-guest>
</template>

<script>
export default {
  name: 'Login',
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
