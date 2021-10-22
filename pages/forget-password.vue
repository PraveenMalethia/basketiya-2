<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div
      class="
        container
        mx-auto
        flex
        px-5
        py-10
        md:flex-row
        flex-col
        items-center
        h-screen
      "
    >
      <div
        class="
          lg:flex-grow
          md:w-1/2
          lg:pr-24
          md:pr-16
          flex flex-col
          md:items-start
          md:text-left
          mb-10
          md:mb-0
          items-center
          text-center
        "
      >
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Forget Password ?
        </h1>
        <p class="mb-8 leading-relaxed">
          No problem , we got you , just submit the email of your account . We will send you a reset password link.
        </p>
        <div class="flex justify-center">
          <div class="flex w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
            <div class="relative sm:mb-0 flex-grow w-full">
              <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
              <input id="email" type="email" name="email" class="input-field">
            </div>
            <button class="py-2 px-8 btn-success xs:w-full sm:w-full lg:w-1/3">
              Reset
            </button>
          </div>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img src="/svg/forget-password.svg" alt="">
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
