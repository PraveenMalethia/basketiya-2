<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div
      class="
        container
        mx-auto
        flex
        px-5
        py-24
        md:flex-row
        flex-col
        items-center
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
          mb-16
          md:mb-0
          items-center
          text-center
        "
      >
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Before they sold out readymade
          gluten
        </h1>
        <p class="mb-8 leading-relaxed">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
          try-hard chambray.
        </p>
        <div class="flex justify-center">
          <nuxt-link
            class="
              btn-primary
              px-8 py-3
              mr-1 mb-1
            "
            to="/store"
          >
            Let's start shopping . . . {{ $store.state.categories.counters }}
          </nuxt-link>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          alt="hero"
          src="/svg/hero.svg"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    // addOne () {
    //   this.$store.commit('categories/increment')
    // }
  }
}
</script>

<style>
</style>
