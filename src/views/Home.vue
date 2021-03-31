<template>
  <div id="layout">
    <nav>
      <div class="container">
        <Logo size="24px" />
        <span>Sair</span>
      </div>
    </nav>
    <main>
      <div class="container">
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
          :isFavorite="true"
          createdAt="09/12/2020 - 21:17"
          updatedAt="10/12/2020 - 04:58"
        />
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
          :isFavorite="true"
          createdAt="09/12/2020 - 21:17"
          updatedAt="10/12/2020 - 04:58"
        />
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
          :isFavorite="false"
          createdAt="09/12/2020 - 21:17"
          updatedAt="10/12/2020 - 04:58"
        />
        <note
          content="assumenda laudanreuiruieuriueiourweriuewirj
          placeat delectus eaque magnam. Lorem ipsum dolor sit amet consectetu1.
          adipisicing elit. Reiciendis voluptates magnam maxime eius. Laborum,
          sunt incidunt laboriosam neque blanditiis id accusantium eius omnis,
          remm quia nulla, reprehenderit recusandae repellat libero! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Repudiandae officiis2
          vel222 quaerat ipsam??? Praesentium aperiam, quam natus dolore illum
          mollitia tempora sed iusto eniewre wtes magnam maxime eius. Laborum,
          sunt incidunt laboriosam neque blanditiis id accusantium eius omnis,
          remm quia nulla, reprehenderit recusandae repellat libero! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Repudiandae officiis2
          vel222 quaerat ipsam??? Praesentium aperiam, quam natus dolore illum
          mollitia tempora sed iusto enim. Beataem. Beatae perferendis similique tempora
          nisi non!"
          :isFavorite="false"
          createdAt="09/12/2020 - 21:17"
          updatedAt="10/12/2020 - 04:58"
        />
        <note
          content="assumenda laudantium labore qui dolores officia consectetur aquia quis
          placeat delectus eaque magnam. Lorem ipsum dolor sit amet consectetu1.
          adipisicing elit. Reiciendis voluptaewre wtes magnam maxime eius. Laborum,
          sunt incidunt laboriosam neque blanditiis id accusantium eius omnis,
          remm quia nulla, reprehenderit recusandae repellat libero! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Rsum dolor sit amet consectetu1.
          adipisicing elit. Reiciendis voluptaewre wtes magnam maxime eius. Laborum,
          sunt incidunt laboriosam neque blanditiis id accusantium eius omnis,
          remm quia nulla, reprehenderit recusandae repellat libero! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Repudiandae officiis2
          vel222 quaerat ipsam??? Praesentium aperiam, quam natus dolore illum
          mollitia tempora sed iusto enim. Beatae perferendis similique tempora
          nisi non!"
          :isFavorite="true"
          createdAt="09/12/2020 - 21:17"
          updatedAt="10/12/2020 - 04:58"
        />
        <note
          content="assumenda laudantium labore qui dolores officia consectetur aquia quis
          placeat delectus eaque magnam. Lorem ipsum dolor sit amet consectetu1.
          adipisicing elit. Reice wrew rwr ewr wriendis voluptates magnam maxime eius. Laborum,
          sunt incidunt laboriosam neque blanditiis id accusantium eius omnis,
          remm quia nulla, reprehenderit recusandae repellat libero! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Repudiandae officiis2
          vel222 quaerat ipsam??? Praesentium aperiam, quam natus dolore illum
          mollitia tempora sed iusto enim. Beatae perferendis similique tempora
          nisi non!"
          :isFavorite="false"
          createdAt="09/12/2020 - 21:17"
          updatedAt="10/12/2020 - 04:58"
        />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  components: {
    Logo: () => import('@/components/Logo'),
    Note: () => import('@/components/Note')
  }
}
</script>

<style lang="scss" scoped>
@mixin container {
  max-width: 1200px;
  padding: 0 15px;
}

#layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background: #e2e7e7;

  nav {
    background-color: $color-primary;

    div.container {
      @include container;
      display: flex;
      justify-content: space-between;
      line-height: 54px;
      margin: 0 auto;

      * {
        font-family: $font-primary;
        font-weight: 600;
        color: #fff;
        font-size: 24px;
      }
    }
  }

  main {
    overflow-y: auto;
    height: calc(100vh - 54px);

    div.container {
      @include container;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 24px auto;
    }
  }
}
</style>
