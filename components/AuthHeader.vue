<template>
  <header class="text-gray-400 bg-gray-900 body-font">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
        flex-col
        md:flex-row
        items-center
      "
    >
      <nav
        class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto"
      />
      <a
        class="
          flex
          order-first
          lg:order-none
          lg:w-1/5
          title-font
          font-medium
          items-center
          text-white
          lg:items-center
          lg:justify-center
          mb-4
          md:mb-0
        "
      >
        <nuxt-link to="/" class="block relative">
          <img
            alt="profil"
            src="/images/logo.jpg"
            class="mx-auto object-cover rounded-full h-16 w-16"
          >
        </nuxt-link>
      </a>
      <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0" />
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style>
</style>
