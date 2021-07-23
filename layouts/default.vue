<template>
  <div>
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
</style>
