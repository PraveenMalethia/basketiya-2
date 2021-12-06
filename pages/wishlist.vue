<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-16 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Your Wishlist
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
    title: 'Basketiya | Wishlist',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Basketiya | All of the products that you have wished for.'
      }
    ]
  }
}
</script>

<style>
</style>
