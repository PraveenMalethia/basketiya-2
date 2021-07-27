<template>
  <div>
    <section class="text-gray-400 bg-gray-900 body-font relative">
      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
          class="
            lg:w-1/1
            md:w-1/2
            bg-gray-900
            rounded-lg
            overflow-hidden
            sm:mr-10
            p-3
            flex
            items-end
            justify-center
            relative
          "
        >
          <img
            src="/svg/login.svg"
          >
        </div>
        <div
          class="
            lg:w-1/3
            md:w-1/2
            flex flex-col justify-center
            md:ml-auto
            w-full
            md:py-8
            mt-10
            md:mt-0
            shadow-lg
            rounded-3xl
            p-6
            bg-gray-800
          "
        >
          <h1 class="text-white text-center lg:text-4xl md:text-2xl sm:text-xl mb-1 font-medium title-font">
            Login
          </h1>
          <div class="relative mb-4">
            <label
              for="username"
              class="leading-7 text-sm text-gray-400"
            >Username</label>
            <input
              id="username"
              v-model="username"
              type="text"
              name="username"
              class="
                w-full
                bg-gray-800
                rounded
                border border-gray-700
                focus:border-purple-500
                focus:ring-4 focus:ring-purple-900
                text-base
                outline-none
                text-gray-100
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label
              for="password"
              class="leading-7 text-sm text-gray-400"
            >Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              name="password"
              class="
                w-full
                bg-gray-800
                rounded
                border border-gray-700
                focus:border-purple-500
                focus:ring-4 focus:ring-purple-900
                text-base
                outline-none
                text-gray-100
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out"
            />
          </div>
          <button
            class="
            py-3
            px-8
            mt-5
            btn-primary"
            @click="submit()"
          >
            Login
          </button>
          <nuxt-link
            class="
            mt-5
            px-8 py-3
            btn-success"
            to="/sign-up"
          >
            Sign Up
          </nuxt-link>
          <p class="text-center mt-4">Or</p>
          <nuxt-link
            class="
            text-white
            py-2
            px-6
            mt-5
            focus:outline-none
            hover:bg-gray-900
            rounded-xl
            transition
            ease-in-out
            duration-400
            border-2
            border-gray-900
            text-center
            text-lg"
            to="/forget-password"
          >
            Forget Password ?
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Basketiya | Account Login',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Basketiya | Login to your account.'
      }
    ]
  },
  layout: 'auth',
  data: () => ({
    username: '',
    password: '',
    show: false
  }),
  methods: {
    async submit () {
      const credentials = {
        username: this.username,
        password: this.password
      }
      await this.$auth.loginWith('local', { data: credentials })
    },
    clear () {
      this.username = ''
      this.password = ''
    }
  }
}
</script>

<style>
</style>
