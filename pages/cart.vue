<template>
  <div class="text-gray-400 bg-gray-900 body-font">
    <div class="px-4 pr-6 py-24 mx-auto">
      <h1 class="text-white text-3xl font-bold mb-10">Shopping Cart</h1>

      <div class="lg:grid lg:gap-3 lg:grid-cols-6 lg:flex-row space-x-4">
        <div class="col-span-4">
          <div class="flex flex-col space-y-2 divide-y-2 divide-gray-500">
            <div class="py-2">
              <CartItem />
            </div>
            <div class="py-2">
              <CartItem />
            </div>
            <div class="py-2">
              <CartItem />
            </div>
          </div>
        </div>
        <div class="col-span-2 mt-8 lg:mt-4">
          <div class="bg-gray-700 h-auto flex flex-col rounded-md px-4 py-8">
            <h1 class="mx-auto text-2xl justify-self-center text-white font-semibold">Order Summary</h1>
            <div class="flex items-center justify-between">
              <p class="mt-10 text-lg text-white">Order Items:</p>
              <p class="mt-10 text-lg font-bold text-white">13</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="mt-4 text-lg text-white">Total Price:</p>
              <p class="mt-4 text-lg font-bold text-white">510</p>
            </div>
            <p class="text-gray-400 text-lg mt-7">Coupon Code:</p>
            <input
              type="text"
              class="mt-2 rounded-md w-full px-3 py-2 text-white text-base md:w-4/6 lg:w-5/6 outline-none bg-gray-800
              border border-gray-700 focus:border-purple-700 focus:ring-2 focus:ring-purple-700 transition duration-150 ease-in-out shadow-sm"
            >
            <button class="mt-8 px-4 py-2 bg-purple-700 rounded-md shadow-md text-white text-lg">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style>
</style>

