<template>
  <div id="app">
    <main class="card">
      <aside>
        <h1 class="logo"><span>My</span>notes</h1>
        <p class="subtitle">Nosso app de notas favorito!</p>
        <p class="about">
          Tenha suas notas salvas e acesse elas de onde e quando quizer.
        </p>
      </aside>
      <section>
        <form>
          <h2>Login no Mynotes</h2>
          <p>Entre agora no app.</p>
          <label for="form-email">Email</label>
          <input type="email" id="form-email" />
          <label for="form-password">Password</label>
          <input type="password" id="form-password" />
          <button>Sign in</button>
          <a href="#">Crie sua conta</a>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
@import '@/styles/_form.scss';

#app {
  display: flex;
  align-items: center;
  height: 100vh;
  background: #e2e7e7;
  overflow-y: auto;

  p {
    font-size: 18px;
    font-weight: 300;
  }

  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    box-shadow: 0 16px 80px rgba(0, 0, 0, 0.32);

    aside,
    section {
      padding: 24px;
    }

    aside {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #1d2124;
      color: #fff;
      text-align: center;

      .logo {
        font-family: $font-primary;
        font-size: 38px;
        text-transform: uppercase;

        span {
          font-family: inherit;
          font-weight: 400;
        }
      }

      .about {
        font-size: 20px;
        margin-top: 32px;
        padding: 0 24px;
      }
    }

    section {
      flex: 1;
      background-color: #fff;

      h2 {
        font-family: $font-primary;
        font-weight: 700;
      }

      form > p {
        margin-bottom: 16px;
      }

      a {
        margin-top: 20px;
      }
    }
  }

  @media (min-width: 744px) {
    justify-content: center;

    .card {
      flex-direction: row;
      height: 600px;
      max-width: 888px;
      margin: 12px;
      overflow: auto;
      border-radius: 4px;

      aside {
        width: calc(40 * 888px / 100);
      }

      section {
        display: flex;
        align-items: center;
        flex: initial;
        width: calc(60 * 888px / 100);
        padding: 48px;

        form {
          flex: 1;
        }
      }
    }
  }
}
</style>
