<template>
  <div id="layout">
    <nav>
      <h1 id="logo">Mynotes</h1>
      <span>Favoritas</span>
      <form>
        <input type="text" placeholder="Ache suas anotações" />
      </form>
      <span>Sair</span>
    </nav>
    <main class="container">
      <note
        content="assumenda laudantium labore qui dolores officia consectetur aquia quis
          placeat delectus eaque magnam. Lorem ipsum dolor sit amet consectetu1.
          adipisicing elit. Reiciendis voluptates magnam maxime eius. Laborum,
          sunt incidunt laboriosam neque blanditiis id accusantium eius omnis,
          remm quia nulla, reprehenderit recusandae repellat libero! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Repudiandae officiis2
          vel222 quaerat ipsam??? Praesentium aperiam, quam natus dolore illum
          mollitia tempora sed iusto enim. Beatae perferendis similique tempora
          nisi non!"
        isFavorite="1"
        createdAt="09/12/2020 - 21:17"
        updatedAt="10/12/2020 - 04:58"
      />
    </main>
  </div>
</template>

<script>
export default {
  components: {
    Note: () => import('@/components/Note')
  }
}
</script>

<style lang="scss" scoped>
$width-container: 1200px;

#layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #e2e7e7;

  nav {
  }

  main.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: $width-container;
    min-height: calc(100vh - 56px - 24px);
    margin: 24px auto;
    padding: 15px;
  }
}
</style>
