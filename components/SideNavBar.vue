<template>
  <div class="h-screen w-screen text-white -mt-24 z-40 bg-gray-900 pl-28 px-4 py-14 fixed block">
    <svg
      class="absolute top-6 left-6 w-8 h-8"
      @click="close"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
    <div @click="close" class="flex flex-col space-y-4">
      <nuxt-link to="/" @click="close" class="text-3xl font-semibold">Home</nuxt-link>
      <nuxt-link to="/cart" @click="close" class="text-3xl font-semibold">Cart</nuxt-link>
      <nuxt-link to="/orders" @click="close" class="text-3xl font-semibold">Orders</nuxt-link>
      <nuxt-link to="/track-order" @click="close" class="text-3xl font-semibold">Track Order</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      console.log('emitting')
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>
