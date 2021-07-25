<template>
<section class="text-gray-400 bg-gray-900 body-font relative">
    <div
      class="container
        mx-auto
        flex
        px-5
        py-24
        md:flex-row
        flex-col
        items-center">
      <div
        class="
          lg:w-2/3
          md:w-2/2
          flex flex-col
          md:ml-auto
          w-full
          md:py-8
          mt-8
          md:mt-0
        "
      >
        <h2 class="text-white text-lg font-medium title-font mb-5">Edit Profile</h2>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="
              input-field
            "
          />
        </div>
        <div class="relative mb-4">
          <label
          for="username"
          class="leading-7 text-sm text-gray-400"
            >Username</label
          >
          <input
            type="text"
            id="username"
            name="username"
            class="
              input-field
            "
          />
        </div>
        <div class="relative mb-4">
          <label
          for="bio"
          class="leading-7 text-sm text-gray-400"
            >Bio</label
          >
          <textarea
            class="input-field"
            id="bio"
            name="bio"
          ></textarea>
        </div>
        <div class="mb-6 w-full">
          <label
            for="upload-file"
            class="leading-7 text-sm text-gray-400"
              >Avatar</label
            >
          <input @change="onFileSelected" type="file" id="upload-file" hidden name="upload-file">
          <label for="upload-file" refs="upload-file" class="flex items-center space-x-4 mb-6 mt-4 bg-gray-800 border border-gray-700 px-4 w-auto py-2 text-gray-200 rounded-xl">
            <span class="border-r-2 border-gray-500 pr-4">Choose a file</span>
            <span class="text-sm" v-if="selectedFileName">
              {{ selectedFileName }}
            </span>
            <span class="text-sm" v-else>
              No file chosen ...
            </span>
          </label>
        </div>
        <button
          class="
            btn-primary
            py-3
          "
        >
          Confirm
        </button>
      </div>
      <div
        class="
          lg:w-full
          md:w-full
          bg-gray-900
          rounded-lg
          overflow-hidden
          p-10
          flex
          items-end
          justify-start
          relative
        "
      >
        <div class="lg:max-w-sm mx-auto my-auto lg:w-full md:w-4/4 w-6/6">
          <img src="/svg/profile-update.svg" alt="ProfileUpdate">
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      selectedFileName: null
    }
  },
  methods: {
    onFileSelected (event) {
      const file = event.target.files[0]
      if (file) {
        this.selectedFileName = file.name
      } else {
        this.selectedFileName = null
      }
    }
  }
}
</script>

<style>
</style>
