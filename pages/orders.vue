<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Your Orders
        </h1>
        <!-- <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them.
        </p> -->
      </div>
      <div v-for="i in 10" :key="i" class="flex flex-wrap -m-2">
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div
            class="
              h-full
              flex
              items-center
              border-gray-800 border
              p-8
              rounded-xl
              hover:bg-gray-700
              cursor-pointer
              transition
              duration-300
              easy-in-out
              transform hover:-translate-x-2 hover:scale-100
            "
          >
            <img
              alt="team"
              class="
                w-16
                h-16
                bg-gray-100
                object-cover object-center
                flex-shrink-0
                rounded-full
                mr-4
              "
              src="https://dummyimage.com/80x80"
            />
            <div class="flex-grow">
              <h2 class="text-white title-font font-medium">
                Order number {{i}}
              </h2>
              <p class="text-green-300">Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {}
</script>

<style>
</style>
