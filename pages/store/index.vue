<template>
  <section class="text-gray-300 bg-gray-900 body-font">
    <h1 class="text-center text-3xl">Welcome to Basketiya Store</h1>
    <div class="container px-5 py-24 mx-auto">
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
