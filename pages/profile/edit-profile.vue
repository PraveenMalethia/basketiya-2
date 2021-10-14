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
        items-center"
    >
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
        <h2 class="text-white text-lg font-medium title-font mb-5">
          Edit Profile
        </h2>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="
              input-field
            "
            v-model="user.name"
          />
        </div>
        <div class="relative mb-4">
          <label for="username" class="leading-7 text-sm text-gray-400"
            >Username</label
          >
          <input
            type="text"
            id="username"
            name="username"
            class="
              input-field
            "
            v-model="user.username"
          />
        </div>
        <div class="relative mb-4">
          <label for="bio" class="leading-7 text-sm text-gray-400">Bio</label>
          <textarea
            class="input-field"
            id="bio"
            name="bio"
            v-model="user.bio"
          ></textarea>
        </div>
        <div class="mb-6 w-full">
          <label
          for="upload-file"
          class="leading-7 text-sm text-gray-400"
          >Avatar</label><br/>
          <a
          :href="$axios.defaults.baseURL+ user.image"
          target="_blank"
            >Current Image :
            <span class="text-blue-500">{{ user.image }}</span></a
          >
          <input
            id="upload-file"
            @change="onFileSelected"
            type="file"
            hidden
            name="upload-file"
            accept="image/png, image/jpeg"
          />
          <label
            for="upload-file"
            refs="upload-file"
            class="flex items-center space-x-4 mb-6 mt-4 bg-gray-800 border border-gray-700 px-4 w-auto py-2 text-gray-200 rounded-xl"
          >
            <span class="border-r-2 border-gray-500 pr-4">Choose a file</span>
            <span
              v-if="selectedFileName"
              class="text-sm"
            >
              {{ selectedFileName }}
            </span>
            <span v-else class="text-sm">
              No file chosen ...
            </span>
          </label>
        </div>
        <button
          class="
            btn-success
            py-3
          "
        >
          Update
        </button>
        <nuxt-link to="/reset-password" class="btn-secondary py-3 px-3 mt-3">
          change Password
        </nuxt-link>
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
          <img src="/svg/profile-update.svg" alt="ProfileUpdate" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedFileName: null,
      user: {
        image: '/images/profile.png',
        name: 'Srikar Kandula',
        username: 'Sriks.k',
        bio: 'Backend dev with some python and javascript skills.'
      }
    }
  },
  head: {
    title: 'Basketiya | Edit Profile',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Basketiya | Edit or update your profile .'
      }
    ]
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

<style></style>
