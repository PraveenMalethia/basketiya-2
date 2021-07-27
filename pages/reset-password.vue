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
        <h2 class="text-white text-lg mb-5 font-medium title-font">Change Password</h2>
        <div class="relative mb-4">
          <label for="password" class="leading-7 text-sm text-gray-400">New Password</label>
          <input
            type="password"
            id="password"
            name="password"
            class="
              input-field
            "
          />
        </div>
        <div class="relative mb-4">
          <label for="repeat_password" class="leading-7 text-sm text-gray-400">Repeat Password</label>
          <input
            type="password"
            id="repeat_password"
            name="repeat_password"
            class="
              input-field
            "
          />
        </div>
        <button
          class="
            btn-success
            px-8
            py-3
          "
        >
          Update
        </button>
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
          <img src="/svg/reset-password.svg" alt="reset_password">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: 'Basketiya | Reset Password',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Basketiya | Change your password here. '
      }
    ]
  }
}
</script>

<style>
</style>
