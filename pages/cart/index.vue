<template>
  <section class="text-gray-600 body-font relative">
    <div class="flex flex-col text-center w-full py-16">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        Your Cart
      </h1>
      <p class="lg:w-2/3 md:w-full mx-auto leading-relaxed text-base">
        Items that you have added in your cart.<br>
        <b>Click Proceed to Checkout to confirm</b>
      </p>
    </div>
    <div class="container mx-auto flex sm:flex-nowrap flex-wrap">
      <div
        class="lg:w-full md:w-1/2 sm:w-full  rounded-lg overflow-hidden flex items-end justify-start relative"
      >
        <div class="flex flex-col">
          <div v-for="i in 3" :key="i" class="py-2 px-2">
            <CartItem :number="i" />
          </div>
        </div>
      </div>
      <div
        class="
          flex flex-col
          md:ml-auto
          w-max-md
          md:mt-0
          p-4
        "
      >
        <h2 class="text-white text-lg mb-1 font-medium title-font">
          Checkout
        </h2>
        <p class="leading-relaxed mb-5">
          By default cash on delivery is enabled.
        </p>
        <div class="relative mb-4">
          <label for="address" class="leading-7 text-sm text-gray-400">Full Address</label>
          <input
            id="address"
            type="text"
            name="address"
            class="input-field"
          >
        </div>
        <div class="relative mb-4">
          <label for="landmark" class="leading-7 text-sm text-gray-400">Land mark</label>
          <input
            id="landmark"
            type="text"
            name="landmark"
            class="input-field"
          >
        </div>
        <div class="relative mb-4">
          <label
            for="message"
            class="leading-7 text-sm text-gray-400"
          >
            Special instruction
          </label>
          <textarea
            id="message"
            class="input-field"
            name="message"
          />
        </div>
        <Button :click="Checkout" class-name="btn btn-primary px-3 py-2" text="Confirm" :loading="loading" success-text="Order Placed Successfully" />
        <p class="text-x=s text-gray-400 text-opacity-90 mt-3">
          by clicking CONFIRM button your order will be placed . Please check your details again.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    loading: false
  }),
  head: {
    title: 'Basketiya | Cart',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Basketiya | See your cart here'
      }
    ]
  },
  methods: {
    Checkout () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style></style>
