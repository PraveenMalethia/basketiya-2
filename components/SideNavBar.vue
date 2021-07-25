<template>
  <div class="h-screen min-w-max text-white z-40 pl-8 px-4 py-14 bg-gray-800 fixed top-0 left-0 right-0 bottom-0 block">
    <svg
      class="absolute top-6 left-2/4 w-8 h-8"
      @click="close"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 32 32"
    >
      <path fill="#222831" d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z"></path>
    </svg>
    <div @click="close" class="flex flex-col mt-10 space-y-4">
      <nuxt-link
        to="/"
        @click="close"
        class="text-xl font-semibold hover:bg-gray-700 p-2 pl-4 rounded-l-xl transition duration-300 easy-in-out"
        :class="{'bg-gradient-to-l from-gray-700 text-indigo-600 border-r-2 border-indigo-600':getCurrentUrl == '/'}"
        >
        Home
      </nuxt-link>
      <nuxt-link
        to="/cart"
        @click="close"
        class="text-xl font-semibold hover:bg-gray-700 p-2 pl-4 track-order rounded-l-xl transition duration-300 easy-in-out"
        :class="{'bg-gradient-to-l from-gray-700 text-indigo-600 border-r-2 border-indigo-600':getCurrentUrl == '/cart'}"

        >
        Cart
      </nuxt-link>
      <nuxt-link
        to="/orders"
        @click="close"
        class="text-xl font-semibold hover:bg-gray-700 p-2 pl-4 rounded-l-xl transition duration-300 easy-in-out"
        :class="{'bg-gradient-to-l from-gray-700 text-indigo-600 border-r-2 border-indigo-600':getCurrentUrl == '/orders'}"

        >
        Orders
      </nuxt-link>
      <nuxt-link
        to="/track-order"
        @click="close"
        class="text-xl font-semibold hover:bg-gray-700 p-2 pl-4 rounded-l-xl transition duration-300 easy-in-out"
        :class="{'bg-gradient-to-l from-gray-700 text-indigo-600 border-r-2 border-indigo-600':getCurrentUrl == '/track-order'}"

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
