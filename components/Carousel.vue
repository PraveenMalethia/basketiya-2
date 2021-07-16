<template>
  <div class="carousel" @keydown="checkSlide($event)" tabindex="0">
    <slot></slot>
      <button @click.prevent="next" class="z-20 bg-gray-800 opacity-75 p-4 text-white absolute top-2/4 -mt-5 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button @click.prevent="prev" class="z-20 bg-gray-800 opacity-75 p-4 text-white absolute top-2/4 -mt-5 left-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      slides: [],
      slideDirection: ''
    }
  },
  computed: {
    slidesLength () {
      return this.slides.length
    }
  },
  mounted () {
    this.slides = this.$children
    this.slides.map((slide, index) => {
      slide.index = index
      return slide.index
    })
  },
  methods: {
    next () {
      this.index++
      if (this.index >= this.slidesLength) {
        this.index = 0
      }
      console.log(this.index)
      this.slideDirection = 'slide-right'
    },
    prev () {
      this.index--
      if (this.index < 0) {
        this.index = this.slidesLength - 1
      }
      console.log(this.index)
      this.slideDirection = 'slide-left'
    },
    checkSlide (event) {
      if (event.keyCode === 39) {
        this.next()
      } else if (event.keyCode === 37) {
        this.prev()
      } else {
        return null
      }
    }
  }
}
</script>
<style>

</style>

<style>

</style>
