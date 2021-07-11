export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "basketiya",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/auth-next"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  auth: {
    vuex: {
      namespace: "auth"
    },
    strategies: {
      local: {
        scheme: "refresh",
        endpoints: {
          login: {
            url: "http://127.0.0.1:8000/api/auth/login/",
            method: "POST"
          },
          refresh: {
            url: "http://127.0.0.1:8000/api/auth/token/refresh/",
            method: "post"
          },
          logout: {
            url: "http://127.0.0.1:8000/api/auth/logout/",
            method: "GET"
          },
          user: {
            url: "http://127.0.0.1:8000/api/auth/user/",
            method: "GET"
          }
        },
        token: {
          property: "access_token"
        },
        refreshToken: {
          property: "refresh_token",
          data: "refresh",
          maxAge: 60 * 60 * 24 * 5
        },
        user: {
          autoFetch: true,
          property: false
        }
      }
    },
    redirect: {
      login: "/login",
      logout: "/login",
      callback: "/login",
      home: "/"
    }
  },

  router: {
    // middleware: ["auth"]
  }
};
