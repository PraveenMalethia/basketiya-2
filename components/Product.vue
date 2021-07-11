<template>
  <div class="lg:w-1/4 md:w-1/2 p-4">
    <a class="block relative h-48 rounded overflow-hidden">
      <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="product.img">
    </a>
    <div class="mt-4">
      <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
      <h2 class="text-white title-font text-lg font-medium">The Catalyzer</h2>
      <p class="mt-1">$16.00</p>
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
