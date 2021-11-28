<template>
  <button
    :disabled="isDisabled"
    :class="
      `${className} flex justify-center
        ${ loading ? 'hover:bg-gray-900 px-3 py-3' :'border-2' }
        ${ success ? 'btn-success' : 'btn-primary' } `"
    @click="Click"
  >
    <div
      v-if="loading"
      style="border-top-color:transparent"
      class="p-1 w-6 h-6 border-4 border-gray-50 border-solid rounded-full animate-spin -mt-0.5"
    />
    <span v-else>{{ success ? successText : Defaulttext }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: true
    },
    successText: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      required: false
    },
    // eslint-disable-next-line vue/require-default-prop
    click: {
      type: Function,
      required: true
    },
    // eslint-disable-next-line vue/require-default-prop
    to: {
      type: String,
      required: false
    }
  },
  data: () => ({
    success: false
  }),
  computed: {
    isDisabled () {
      // you can  check your form is filled or not here.
      return this.loading === true
    },
    Defaulttext () {
      return this.text ? this.text : this.successText
    }
  },
  methods: {
    Click () {
      if (this.click) {
        this.click()
      } else if (this.to) {
        this.$router.push(this.to)
      }
      this.success = true
    }
  }
}
</script>

<style>

</style>
