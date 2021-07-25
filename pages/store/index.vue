<template>
  <section class="text-gray-300 bg-gray-900 body-font">
    <div class="container px-5 py-16 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Welcome to Basketiya Store
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Here you can track your order .<br>
          <b>Enter order id and get details.</b>
        </p>
      </div>
      <div class="flex flex-wrap justify-center -m-4">
        <div v-for="product in products" :key="product.id">
          <Product :product="product" />
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <button
        @click="loadMore()"
        class="btn-secondary px-5 py-3">
        {{ loading ? "Loading . . ." : "Load More" }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      loading: false
    }
  },
  computed: {
    products () {
      return this.$store.state.store.products
    }
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
