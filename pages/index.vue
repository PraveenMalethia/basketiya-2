<template>
  <div>
    <Hero />
    <Featuring />
    <section class="text-gray-300 bg-gray-900 body-font">
      <h1 class="text-center text-3xl">Featuring Products</h1>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap justify-center -m-4">
          <div v-for="product in products" :key="product.id">
            <Product :product="product" />
          </div>
        </div>
      </div>
    </section>
    <Tabs />
    <SectionDeals />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Basketiya | Home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Basketiya | Ecommerce Website for CWD.'
      }
    ]
  },
  data: () => {
    return {}
  },
  computed: {
    products () {
      return this.$store.state.store.products
    }
  }
}
</script>
