<template>
  <div class="w-80 flex justify-center items-center transform hover:scale-105 transition duration-400 ease-in-out">
    <div class="w-full p-4 h-full">
      <div
        class="
          flex flex-col
          justify-center
          p-8
          items-center
          bg-white
          rounded-lg
          flex-grow
        "
      >
        <nuxt-link
          :to="`/store/${product.id}`"
          class="prod-title"
        >
          <p class="text-2xl uppercase text-gray-900 font-bold">
            {{ product.category }}
          </p>
        </nuxt-link>
        <nuxt-link
          :to="`/store/${product.id}`"
          class="prod-img"
        >
          <img :src="product.image" width="100px" height="200px" class=" object-cover object-center">
        </nuxt-link>
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
          <p class="font-bold text-xl">
            65 $
          </p>
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
              font-bold
              ml-5
            "
          >
            Add to cart
          </button>
        </div>
      </div>
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
