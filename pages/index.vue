<template>
  <div>
    <Hero />
    <Featuring />
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div v-for="product in products" :key="product.id" class="lg:w-1/4 md:w-1/2 p-4 w-full">
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
  auth: false,
  data: () => {
    return {
      products: []
    }
  },
  async fetch () {
    await this.$axios
      .get('/')
      .then((response) => {
        this.products = response.data
      })
      .catch((error) => {
        this.$toast.error(error)
      })
  },
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
  }
}
</script>
