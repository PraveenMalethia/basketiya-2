<template>
  <section class="text-gray-400 bg-gray-900 body-font relative">
    <div
      class="container
        mx-auto
        flex
        px-5
        py-24
        md:flex-row
        flex-col
        items-center">
      <div
        class="
          lg:w-2/3
          md:w-2/2
          flex flex-col
          md:ml-auto
          w-full
          md:py-8
          mt-8
          md:mt-0
        "
      >
        <h2 class="text-white text-lg mb-1 font-medium title-font">Checkout</h2>
        <p class="leading-relaxed mb-5">
          By default cash on delivery is enabled.
        </p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="
              input-field
            "
          />
        </div>
        <div class="relative mb-4">
          <label for="phone" class="leading-7 text-sm text-gray-400">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            class="
              input-field
            "
          />
        </div>
        <div class="relative mb-4">
          <label
          for="email"
          class="leading-7 text-sm text-gray-400"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="
              input-field
            "
          />
        </div>
        <div class="relative mb-4">
          <label for="address" class="leading-7 text-sm text-gray-400">Full Address</label>
          <input
            type="text"
            id="address"
            name="address"
            class="input-field"
          />
        </div>
        <div class="relative mb-4">
          <label for="landmark" class="leading-7 text-sm text-gray-400">Land mark</label>
          <input
            type="text"
            id="landmark"
            name="landmark"
            class="input-field"
          />
        </div>
        <div class="relative mb-4">
          <label
          for="message"
          class="leading-7 text-sm text-gray-400"
            >Special instruction</label
          >
          <textarea
            class="input-field"
            id="message"
            name="message"
          ></textarea>
        </div>
        <button
          class="
            btn-success
            px-8
            py-3
          "
        >
          Confirm
        </button>
        <p class="text-x=s text-gray-400 text-opacity-90 mt-3">
          by clicking CONFIRM button your order will be placed . Please check your details again.
        </p>
      </div>
      <div
        class="
          lg:w-full
          md:w-full
          bg-gray-900
          rounded-lg
          overflow-hidden
          p-10
          flex
          items-end
          justify-start
          relative
        "
      >
        <div class="lg:max-w-sm mx-auto my-auto lg:w-full md:w-4/4 w-6/6">
          <img src="/svg/Shopping_app.svg" alt="Checkout">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
</style>
