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
        <!-- Checkout form here -->
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Checkout form</h1>
        <div class="flex justify-center">
          <button
            class="
              text-green-500
              bg-transparent
              border border-solid border-green-500
              hover:bg-green-500
              hover:text-white
              active:bg-emerald-600
              font-bold
              uppercase
              px-20
              py-3
              rounded-full
              outline-none
              focus:outline-none
              mr-1
              mb-1
              ease-linear
              transition-all
              duration-150
            "
            type="button"
          >
            Confirm
          </button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          alt="hero"
          src="/svg/hero.svg"
        ></img>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
</style>
