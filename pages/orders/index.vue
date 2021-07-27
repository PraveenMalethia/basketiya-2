<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-16 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Your Orders
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Here are all of your orders.<br>
          <b>Click Order to see more details</b>
        </p>
      </div>
      <div v-for="i in 10" :key="i" class="flex flex-wrap -m-2">
        <nuxt-link
          :to="`/orders/${i}`"
          class="p-2 w-full items-center justify-center">
          <div
            class="
              h-full
              flex
              items-center
              p-8
              rounded-xl
              hover:bg-gray-700
              cursor-pointer
              transition
              duration-300
              easy-in-out
              transform hover:-translate-y-2 hover:scale-100
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
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  head: {
    title: 'Basketiya | All Orders',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Basketiya | All of your orders '
      }
    ]
  }
}
</script>

<style>
</style>
