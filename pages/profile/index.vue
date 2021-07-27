<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div
      class="
        container
        mx-auto
        flex
        px-5
        py-24
        items-center
        justify-center
        flex-col
      "
    >
      <img
        class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        src="/images/profile.png"
      />
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Praveen Malethia
        </h1>
        <p class="leading-relaxed mb-8">
          Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
          tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt
          ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
          meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af
          fingerstache pitchfork.
        </p>
        <div class="flex justify-center">
          <nuxt-link
            class="
              inline-flex
              py-3
              px-8
              btn-primary
            "
            to="/profile/edit-profile"
          >
            Edit Profile
          </nuxt-link>
          <button
            class="
              ml-5
              btn-danger
              py-3
              px-8
            "
          >
            Delete Profile
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: 'Basketiya | Profile',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Basketiya | Your Profile '
      }
    ]
  }
}
</script>

<style>
</style>
