<template>
  <div class=" p-4 w-full h-full">
    <a class="block relative h-48 rounded overflow-hidden">
      <img
        data-tilt
        data-tilt-scale="1.1"
        alt="ecommerce"
        class="object-contain bg-gray-50 object-center w-full h-full block"
        width="100%"
        height="100%"
        :src="`${$axios.defaults.baseURL}`+product.featured_image"
      >
    </a>
    <div class="mt-4 flex justify-between">
      <div class="">
        <h2 class="text-white title-font text-lg font-medium">
          {{product.name}}
        </h2>
        <p class="mt-1">
          ${{ product.price }}
        </p>
      </div>
      <div class="">
        <Button :click="AddToCart" class-name="btn btn-primary px-3 py-2" text="Add to cart" :loading="loading" success-text="Added to cart" />
      </div>
    </div>
  </div>
</template>

<script>
require('~/assets/js/vanilla-tilt.js')
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    loading: false
  }),
  mounted () {
    console.log(this.product)
  },
  methods: {
    async AddToCart () {
      this.loading = true
      if (!this.$auth.loggedIn) {
        this.$router.push('/login')
        this.loading = false
        return
      }
      await this.$axios.post('/add-to-cart/', {
        product_id: this.product.id
      })
        .then((response) => {
          this.$toast.success(response.data.message)
          this.loading = false
        })
        .catch((error) => {
          this.$toast.error(error)
        })
    }
  }
}
</script>

<style>
</style>
