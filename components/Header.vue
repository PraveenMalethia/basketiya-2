<template>
  <header class="overflow-visible sticky top-0 text-gray-400 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 body-font ">
    <transition name="sidenav" class="z-40 fixed top-0 left-0 right-0 bottom-0">
      <div v-if="side_nav">
        <SideNavBar @close="close" />
      </div>
    </transition>
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
        md:justify-start md:justify-between
        justify-end
        flex-row
        items-center
      ">
      <div
        class="absolute top-6 left-4 mr-4 text-white block md:hidden"
        :class="{ 'opacity-0 relative': side_nav }"
        @click="open"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-8 h-8 text-white p-2 bg-purple-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          />
        </svg>
      </div>
      <nav
        class="flex hidden md:block lg:w-2/5 flex-wrap items-center text-base"
      >
        <nuxt-link to="/" class="mr-5 hover:text-white cursor-pointer transition duration-200 ease-in-out">
          Home
        </nuxt-link>
        <nuxt-link to="/cart" class="mr-5 hover:text-white cursor-pointer transition duration-200 ease-in-out">
          Cart
        </nuxt-link>
        <nuxt-link to="/wishlist" class="mr-5 hover:text-white cursor-pointer transition duration-200 ease-in-out">
          Wishlist
        </nuxt-link>
        <nuxt-link to="/orders" class="mr-5 hover:text-white cursor-pointer transition duration-200 ease-in-out">
          Orders
        </nuxt-link>
        <nuxt-link to="/track-order" class="hover:text-white cursor-pointer transition duration-200 ease-in-out">
          Track Order
        </nuxt-link>
      </nav>
      <div class="lg:w-2/5 inline-flex lg:justify-end md:ml-5 lg:ml-0">
        <button
          class="block relative"
          tabindex="0"
          @focusout="profile_dropdown = false"
        >
          <img
            class="z-20 mx-auto rounded-full h-12 w-12  md:h-16 md:w-16"
            :class="{ 'opacity-0 relative': side_nav }"
            alt="profil"
            src="/images/user.jpg"
            @click="profile_dropdown = !profile_dropdown"
          />
          <transition name="toast" style="z-index: 1">
            <div
              v-if="profile_dropdown"
              class="
                bg-gray-700
                mt-2
                absolute
                right-7
                z-20
                rounded-md
                px-2
                py-2
              "
            >
              <div
                @click="()=>{
                  $router.push('/profile')
                  profile_dropdown = false
                }"
                class="
                  py-3
                  px-4
                  md:w-40
                  lg:w-56
                  xl:w-64
                  hover:bg-gray-600
                  rounded-md
                  transition
                  ease-in-out
                  duration-300
                "
              >
                <p class="text-gray-100 text-lg">
                  Profile
                </p>
              </div>
              <div
                @click="()=>{
                  $router.push('/orders')
                  profile_dropdown = false
                }"
                class="
                  py-3
                  px-4
                  md:w-40
                  lg:w-56
                  xl:w-64
                  hover:bg-gray-600
                  rounded-md
                  mt-2
                  transition
                  ease-in-out
                  duration-300
                "
              >
                <p class="text-gray-100 text-lg" to="/orders">
                  Orders
                </p>
              </div>
              <div
                class="
                  py-3
                  px-4
                  md:w-40
                  lg:w-56
                  xl:w-64
                  hover:bg-red-400
                  bg-red-600
                  rounded-md
                  mt-2
                  transition
                  ease-in-out
                  duration-300
                "
              >
                <p class="text-gray-100 text-lg">
                  Logout
                </p>
              </div>
            </div>
          </transition>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      profile_dropdown: false,
      side_nav: false
    }
  },
  methods: {
    close () {
      this.side_nav = false
      this.$emit('toogleSideNav', false)
    },
    open () {
      this.side_nav = true
      this.$emit('toogleSideNav', true)
    }
  }
}
</script>

<style scoped>
/* enter transitions */
.toast-enter {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top center;
}
.toast-enter-to {
  opacity: 0;
  transform: scale(1);
  transform-origin: top center;
}
.toast-enter-active {
  opacity: 1;
  z-index: 1;
  transition: all 0.3s ease;
}
/* leave transitions */
.toast-leave-from {
  transform: scaleY(1);
}
.toast-leave-to {
  transform: scaleY(0);
  transform-origin: top;
}
.toast-leave-active {
  transition: transform 0.3s ease;
}
.sidenav-enter {
  opacity: 1;
  transform: translateX(-100px);
}
.sidenav-enter-active {
  transition: all 0.3s ease;
}
.sidenav-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.sidenav-leave-active {
  transition: all 0.3s ease;
}
</style>
