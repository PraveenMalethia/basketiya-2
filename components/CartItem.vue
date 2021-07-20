<template>
    <div
      class="h-full
        flex
        items-center
        border-gray-800 border
        p-5
        rounded-xl
        hover:bg-gray-700
        transition
        duration-300
        easy-in-out
        transform hover:-translate-y-2 hover:scale-100">
        <div class="p-1 w-1/2 md:w-1/6 flex-none overflow-hidden">
          <img src="/images/product3.jpg" class="w-full h-28 md:h-32 flex-none rounded-xl md:rounded-3xl object-cover object-center">
        </div>
        <div class="flex flex-col md:flex-row md:justify-between space-y-2 md:w-5/6 h-full md:space-x-4">
          <h3 class="text-2xl w-full md:w-2/6 font-semibold text-white ml-3 sm:text-xl">Nike Shoe</h3>
          <p class="text-xl text-white font-semibold">₹ 10.50</p>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-1 text-gray-200 rounded-md py-1">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <p class="text-xl text-white px-3">10</p>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
          <button
            class="text-red-500
              bg-transparent
              border border-solid border-red-500
              hover:bg-red-500
              hover:text-white
              active:bg-red-600
              font-bold
              uppercase
              px-4
              py-2
              rounded-full
              outline-none
              focus:outline-none
              mr-1
              mb-1
              ease-linear
              transition-all
              duration-150">
            Remove
          </button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
