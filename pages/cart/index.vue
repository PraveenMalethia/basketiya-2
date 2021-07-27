<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="flex flex-col text-center w-full py-16">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Your Cart
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Items that you have added in your cart.<br>
          <b>Click Proceed to Checkout to confirm</b>
        </p>
      </div>
    <div
      class="container
        mx-auto
        flex
        md:flex-row
        flex-col
        items-center
        "
      >
      <div class="lg:grid lg:gap-3 lg:grid-cols-6 lg:flex-row space-x-4">
        <div class="col-span-4">
          <div class="flex flex-col space-y-2">
            <div v-for="i in 3" :key="i" class="py-2 px-2">
              <CartItem :number="i"/>
            </div>
          </div>
        </div>
        <div class="col-span-2 mt-8 lg:mt-4">
          <div class="bg-transparent hover:bg-gray-800 h-auto flex flex-col rounded-md px-4 py-8 transition ease-in-out duration-300">
            <h1 class="mx-auto text-2xl justify-self-center text-white font-semibold">Order Summary</h1>
            <div class="flex items-center justify-between">
              <p class="mt-10 text-lg text-white">Order Items:</p>
              <p class="mt-10 text-lg font-bold text-white">₹ 13</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="mt-4 text-lg text-white">Total Price:</p>
              <p class="mt-4 text-lg font-bold text-white">₹ 510</p>
            </div>
            <nuxt-link
              class="
                mt-8
                text-purple-400
                bg-transparent
                border-2 border-solid border-purple-500
                hover:bg-purple-500
                hover:text-white
                active:bg-emerald-600
                font-bold
                uppercase
                px-8
                py-3
                rounded-2xl
                outline-none
                focus:outline-none
                mr-1
                mb-1
                ease-linear
                transition-all
                duration-150
                text-center"
              to="/cart/checkout">
                Proceed to Checkout
              </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  head: {
    title: 'Basketiya | Cart',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Basketiya | See your cart here ',
      },
    ],
  },
}
</script>

<style>
</style>
