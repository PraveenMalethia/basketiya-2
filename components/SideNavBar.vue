<template>
  <div class="h-screen min-w-max text-white z-40 pl-8 px-4 py-14 bg-gray-800 fixed top-0 left-0 right-0 bottom-0 block">
    <svg
      class="absolute top-7 left w-6 h-8"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3"
      viewBox="0 0 32 32"
      @click="close"
    >
      <path fill="#222831" d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z" />
    </svg>
    <div class="flex flex-col mt-12 space-y-4" @click="close">
      <nuxt-link
        to="/"
        class="text-xl font-semibold hover:bg-gray-700 p-4 pl-4 rounded-l-xl transition duration-300 easy-in-out"
        :class="{'bg-gradient-to-l from-gray-700 text-white border-r-2 border-indigo-600':getCurrentUrl == '/'}"
        @click="close"
      >
        Home
      </nuxt-link>
      <nuxt-link
        to="/cart"
        class="text-xl font-semibold hover:bg-gray-700 p-4 pl-4 track-order rounded-l-xl transition duration-300 easy-in-out"
        :class="{'bg-gradient-to-l from-gray-700 text-white border-r-2 border-indigo-600':getCurrentUrl == '/cart'}"
        @click="close"
      >
        Cart
      </nuxt-link>
      <nuxt-link
        to="/orders"
        class="text-xl font-semibold hover:bg-gray-700 p-4 pl-4 rounded-l-xl transition duration-300 easy-in-out"
        :class="{'bg-gradient-to-l from-gray-700 text-white border-r-2 border-indigo-600':getCurrentUrl == '/orders'}"
        @click="close"
      >
        Orders
      </nuxt-link>
      <nuxt-link
        to="/track-order"
        class="text-xl font-semibold hover:bg-gray-700 p-4 pl-4 rounded-l-xl transition duration-300 easy-in-out"
        :class="{'bg-gradient-to-l from-gray-700 text-white border-r-2 border-indigo-600':getCurrentUrl == '/track-order'}"
        @click="close"
      >
        Track Order
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getCurrentUrl () {
      const path = window.location.pathname
      return path
    }
  },
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
