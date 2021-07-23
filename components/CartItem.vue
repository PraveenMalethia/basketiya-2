<template>
    <div
      class="h-full
        flex
        items-center
        justify-between
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
        <div class="flex flex-col items-center md:flex-row md:justify-between space-y-2 md:w-5/6 h-full md:space-x-4">
          <h3 class="text-2xl w-full md:w-2/6 font-semibold text-white sm:text-xl">Nike Shoe</h3>
          <p class="text-xl text-white font-semibold">₹ 10.50</p>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-1 text-gray-200 rounded-md py-1">
              <button class="flex-none rounded-full bg-red border-2 border-gray-300 px-3 pb-0 hover:bg-gray-300 hover:text-black transition easy-in-out duration-200 text-3xl"> - </button>
              <p class="text-xl text-white px-3">10</p>
              <button class="flex-none rounded-full bg-red border-2 border-green-500 px-3 py-1 hover:bg-green-500 transition easy-in-out duration-200 text-xl"> + </button>
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
