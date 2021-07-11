<template>
  <header class="text-gray-400 bg-gray-900 body-font">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
        flex-col
        md:flex-row
        items-center
      "
    >
      <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <nuxt-link to="/" class="mr-5 hover:text-white cursor-pointer">
          Home
        </nuxt-link>
        <nuxt-link to="/cart" class="mr-5 hover:text-white cursor-pointer">
          Cart
        </nuxt-link>
        <nuxt-link to="/orders" class="mr-5 hover:text-white cursor-pointer">
          Orders
        </nuxt-link>
        <nuxt-link to="/track-order" class="hover:text-white cursor-pointer">
          Track Order
        </nuxt-link>
      </nav>
      <a
        class="
          flex
          order-first
          lg:order-none
          lg:w-1/5
          title-font
          font-medium
          items-center
          text-white
          lg:items-center
          lg:justify-center
          mb-4
          md:mb-0
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          ></path>
        </svg>
        <span class="ml-3 text-xl xl:block lg:hidden">Basketiya</span>
      </a>
      <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <a
          href="#"
          class="block relative"
          @focus="profile_dropdown=!profile_dropdown"
          @focusout="profile_dropdown=false"
          tabindex="0"
        >
          <img @click="profile_dropdown=!profile_dropdown" alt="profil" src="/images/user.jpg" class="mx-auto object-cover rounded-full h-16 w-16"/>

          <div v-if="profile_dropdown" class="bg-gray-700 mt-2 absolute right-7 z-20 rounded-md">
            <div class="py-3 px-4 md:w-40 lg:w-56 xl:w-64 hover:bg-gray-600 rounded-md">
              <p class="text-gray-100 text-lg">Stripe</p>
            </div>
            <div class="py-3 px-4 md:w-40 lg:w-56 xl:w-64 hover:bg-gray-600 rounded-md">
              <p class="text-gray-100 text-lg">Mastercard</p>
            </div>
            <div class="py-3 px-4 md:w-40 lg:w-56 xl:w-64 hover:bg-gray-600 rounded-md">
              <p class="text-gray-100 text-lg">Paypal</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      profile_dropdown: false
    }
  }
}
</script>

<style>
</style>

