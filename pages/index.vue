<template>
<div>
  <Hero/>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap justify-center -m-4">
        <div v-for="product in products" :key="product.id">
          <Product :product="product" />
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
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
