<template>
  <section class="text-gray-300 bg-gray-900 body-font">
    <div class="container px-5 py-16 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Welcome to Basketiya Store
        </h1>
      </div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div v-for="product in products" :key="product.id" class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Product :product="product" />
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="flex items-center justify-center">
      <button
        class="btn-secondary px-5 py-3"
        @click="loadMore()"
      >
        {{ loading ? "Loading . . ." : "Load More" }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      loading: false,
      products: []
    }
  },
  async fetch () {
    await this.$axios.get('https://fakestoreapi.com/products?limit=20')
      .then((response) => {
        this.products = response.data
      })
  },
  head: {
    title: 'Basketiya | Store',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Basketiya | Store page. '
      }
    ]
  },
  methods: {
    loadMore () {
      // this.$store.dispatch('loadMoreProducts')
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style>

</style>
