<template>
  <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <div class="w-full flex items-center justify-center lg:w-1/2">
          <Carousel class="relative h-64 lg:h-full md:w-1/3 sm:w-2/3 overflow-hidden lg:w-full w-full z-10">
            <CarouselSlide v-for="(image,index) in product.image" :key="image" :index="index" class="absolute top-0 bottom-0 left-0 right-0">
              <img
                alt="ecommerce"
                class="
                  w-full
                  lg:w-auto
                  lg:h-auto
                  h-64
                  mx-auto
                  object-cover object-center
                  rounded
                  xl:h-full
                "
                :src="image"
              >
            </CarouselSlide>
          </Carousel>
        </div>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            BRAND NAME
          </h2>
          <h1 class="text-white text-3xl title-font font-medium mb-1">
            {{ product.name }}
          </h1>
          <div class="flex mb-4">
            <span class="flex items-center">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-indigo-400"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-indigo-400"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-indigo-400"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-indigo-400"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-indigo-400"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
              <span class="ml-3">4 Reviews</span>
            </span>
            <span
              class="
                flex
                ml-3
                pl-3
                py-2
                border-l-2 border-gray-800
                text-gray-500
                space-x-2
              "
            >
              <a>
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  />
                </svg>
              </a>
              <a>
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  />
                </svg>
              </a>
              <a>
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                  />
                </svg>
              </a>
            </span>
          </div>
          <p class="leading-relaxed">
            {{ product.description }}
          </p>
          <div
            class="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5"
          >
            <div class="flex">
              <span class="mr-3">Color</span>
              <button
                class="
                  border-2 border-gray-800
                  rounded-full
                  w-6
                  h-6
                  focus:outline-none
                "
              />
              <button
                class="
                  border-2 border-gray-800
                  ml-1
                  bg-gray-700
                  rounded-full
                  w-6
                  h-6
                  focus:outline-none
                "
              />
              <button
                class="
                  border-2 border-gray-800
                  ml-1
                  bg-indigo-500
                  rounded-full
                  w-6
                  h-6
                  focus:outline-none
                "
              />
            </div>
            <div class="flex ml-6 items-center">
              <span class="mr-3">Size</span>
              <div class="relative">
                <select
                  class="
                    rounded
                    border border-gray-700
                    focus:ring-2 focus:ring-indigo-900
                    bg-transparent
                    appearance-none
                    py-2
                    focus:outline-none
                    focus:border-indigo-500
                    text-white
                    pl-3
                    pr-10
                  "
                >
                  <option class="bg-gray-900">
                    SM
                  </option>
                  <option class="bg-gray-900">
                    M
                  </option>
                  <option class="bg-gray-900">
                    L
                  </option>
                  <option class="bg-gray-900">
                    XL
                  </option>
                </select>
                <span
                  class="
                    absolute
                    right-0
                    top-0
                    h-full
                    w-10
                    text-center text-gray-600
                    pointer-events-none
                    flex
                    items-center
                    justify-center
                  "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div
            class="flex"
          >
            <span
              class="title-font font-medium text-2xl text-white"
            >₹ {{ product.price }}</span>
            <button
              class="
              text-purple-500
                bg-transparent
                border-2 border-solid border-purple-500
                hover:bg-purple-500
                hover:text-white
                flex
                ml-auto
                py-2
                px-6
                uppercase
                text-xl
                focus:outline-none
                rounded-2xl
                font-bold
                transition
                easy-in-out
                duration-300
              "
            >
              Add To cart
            </button>
            <button
              class="
                rounded-full
                w-10
                h-10
                bg-gray-800
                p-0
                border-0
                inline-flex
                items-center
                justify-center
                text-gray-500
                hover:text-red-500
                ml-4
                transition
                easy-in-out
                duration-300
                transform
                hover:scale-110
              "
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      product: {}
    }
  },
  head: {
    title: 'Basketiya | Product details',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Basketiya | Product detail page '
      }
    ]
  },
  mounted () {
    const id = this.$route.params.slug
    this.product = this.$axios.get('https://fakestoreapi.com/products/' + id)
      .then((response) => {
        this.product = response.data
      })
  }
}
</script>

<style>

</style>
