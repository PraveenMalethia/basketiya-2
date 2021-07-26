<template>
  <div class="bg-gray-900">
    <Header v-on:toogleSideNav="toogleSideNav"/>
    <div v-if="!showSideNav">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      showSideNav: false
    }
  },
  methods: {
    toogleSideNav (status) {
      this.showSideNav = status
    }
  }
}
</script>

<style>
* {
  -webkit-tap-highlight-color: transparent;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active
{
 -webkit-box-shadow: 0 0 0 30px #1F2937 inset !important;
}

input:-webkit-autofill
{
 -webkit-text-fill-color: white !important;
}
</style>
