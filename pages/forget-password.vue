<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div
      class="container
        mx-auto
        flex
        px-4
        md:flex-row
        flex-col
        items-center
        h-screen"
    >
      <div
        class="
          lg:w-2/3
          md:w-2/2
          flex flex-col
          md:ml-auto
          w-full
          md:py-8
          mt-10
        "
      >
        <h1 class="text-white text-4xl font-medium title-font mb-5">
          Forget Password ?
        </h1>
        <p class="text-white text-lg">
          No problem , we got you , just submit the email of your account . We will send you a reset password link.
        </p>
        <div class="relative mb-4 mt-10">
          <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            class="
              input-field
            "
          >
          <button
            class="
              btn-success
              py-2
              w-1/3
            "
          >
            RESET
          </button>
          <nuxt-link
            to="/login"
            class="
              py-2
              ml-10
              text-white
              hover:text-gray-300
            "
          >
            LOGIN
          </nuxt-link>
        </div>
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
          <img src="/svg/forget-password.svg" alt="ProfileUpdate">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'auth',
  auth: false,
  head: {
    title: 'Basketiya | Forget Password',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Basketiya | Reset your password here. '
      }
    ]
  }
}
</script>

<style>

</style>
