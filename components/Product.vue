<template>
  <div class="w-80 flex justify-center items-center transform hover:rotate-3 transition duration-300 ease-in-out">
    <div class="w-full p-4">
      <nuxt-link
        :to="`/store/${product.name}`"
        class="
          card
          flex flex-col
          justify-center
          p-10
          bg-gray-300
          rounded-lg
          shadow-2xl
        "
      >
        <div class="prod-title">
          <p class="text-2xl uppercase text-gray-900 font-bold">Puma Shoes</p>
          <p class="uppercase text-sm text-gray-400">
            The best shoes in the marketplace
          </p>
        </div>
        <div class="prod-img">
          <img :src="product.img" class="w-full object-cover object-center" />
        </div>
        <div
          class="
            flex flex-col
            md:flex-row
            justify-between
            items-center
            text-gray-900
            mt-5
          "
        >
          <p class="font-bold text-xl">65 $</p>
          <button
            class="
              px-6
              py-2
              transition
              ease-in
              duration-200
              uppercase
              rounded-full
              hover:bg-gray-800
              hover:text-white
              border-2 border-gray-900
              focus:outline-none
            "
          >
            Add to cart
          </button>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>
