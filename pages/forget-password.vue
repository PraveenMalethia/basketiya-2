<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20 mt-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-14 text-white">Forget Password ? </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">No problem , we got you , just submit the email of your account . We will send you a reset password link.</p>
      </div>
      <div class="flex lg:w-1/3 md:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
        <div class="relative sm:mb-0 flex-grow w-full">
          <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
          <input type="email" id="email" name="email" class="input-field">
        </div>
        <button class="py-2 px-8 btn-success">Reset</button>
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
