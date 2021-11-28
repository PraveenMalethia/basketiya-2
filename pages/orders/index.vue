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
      <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div class="container px-5 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-800">
            <div v-for="i in 10" :key="i" class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span
                  class="font-semibold title-font text-white"
                >CATEGORY</span>
                <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-white title-font mb-2">
                  Bitters hashtag waistcoat fashion axe chia unicorn
                </h2>
                <p class="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <nuxt-link
                  to="/orders/2"
                  class="text-indigo-400 inline-flex items-center mt-4"
                >
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>
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

<style></style>
