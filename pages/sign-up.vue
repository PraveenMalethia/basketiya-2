<template>
  <div>
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center h-screen">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-white">
            Sign Up And Create Account , Start Shopping Online  . . .
          </h1>
          <div class="lg:max-w-lg lg:w-full md:w-2/2 w-5/6">
            <img class="pa-5 mt-5 " src="/svg/hero2.svg" alt="">
          </div>
        </div>
        <div
          class="
            lg:w-2/6
            md:w-1/2
            bg-gray-800 bg-opacity-50
            rounded-lg
            p-8
            flex flex-col
            md:ml-auto
            w-full
            mt-10
            md:mt-0
          "
        >
          <h2 class="text-white text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div class="relative mb-4">
            <label
              for="full-name"
              class="leading-7 text-sm text-gray-400"
            >username</label>
            <input
              id="username"
              v-model="username"
              type="text"
              name="username"
              class="
                input-field
              "
            >
          </div>
          <div class="relative mb-4">
            <label
              for="email"
              class="leading-7 text-sm text-gray-400"
            >Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              name="email"
              class="
                input-field
              "
            >
          </div>
          <div class="relative mb-4">
            <label
              for="email"
              class="leading-7 text-sm text-gray-400"
            >Password</label>
            <input
              id="password"
              v-model="password1"
              type="password"
              name="password"
              class="
                input-field
              "
            >
          </div>
          <div class="relative mb-4">
            <label
              for="email"
              class="leading-7 text-sm text-gray-400"
            >Confirm Password</label>
            <input
              id="confirmpassword"
              v-model="password2"
              type="password"
              name="confirmpassword"
              class="
                input-field
              "
            >
          </div>
          <button
            class="
              btn-primary
              py-3
              px-8
            "
            @click="signUp"
          >
            Sign Up
          </button>
          <nuxt-link to="/login" class="text-xs mt-3">
            Have an Account ? Login
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  auth: false,
  data: () => {
    return {
      username: '',
      password1: '',
      password2: '',
      email: ''
    }
  },
  head: {
    title: 'Basketiya | Sig Up',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Basketiya | Create your account on basketiya. '
      }
    ]
  },
  methods: {
    signUp () {
      if (this.password1 !== this.password2) {
        alert('Passwords do not match')
        return
      }
      if (this.username === '') {
        alert('Username cannot be empty')
        return
      }
      if (this.email === '') {
        alert('Email cannot be empty')
        return
      }
      if (this.password1 === '') {
        alert('Password cannot be empty')
        return
      }
      if (this.password1.length < 6) {
        alert('Password must be at least 6 characters')
        return
      }
      this.$axios.post('/api/auth/registration/', {
        username: this.username,
        password1: this.password1,
        password2: this.password2,
        email: this.email
      })
        .then((response) => {
          if (response.status === 201) {
            alert('Successfully created account')
            this.$router.push('/login')
          } else {
            alert(response.data.message)
          }
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
    }
  }
}
</script>

<style>
</style>
