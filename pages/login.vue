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
          "
        >
          <h2 class="text-white text-lg mb-1 font-medium title-font">
            Login
          </h2>
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
                focus:ring-2 focus:ring-purple-900
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
                focus:ring-2 focus:ring-purple-900
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
            text-white
            bg-purple-500
            border-0
            py-2
            px-6
            focus:outline-none
            hover:bg-purple-600
            rounded
            text-lg"
            @click="submit()"
          >
            Login
          </button>
          <button
            class="
            text-white
            bg-green-500
            border-0
            py-2
            px-6
            mt-2
            focus:outline-none
            hover:bg-purple-600
            rounded
            text-lg"
            @click="$router.push('/sign-up')"
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data: () => ({
    username: '',
    password: '',
    show: false
  }),
  head () {
    return {
      title: 'Login',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
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
