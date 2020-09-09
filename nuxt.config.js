// import colors from "vuetify/es5/util/colors"

export default {
  server: {
    port: 8000, // default: 3000
    host: "0.0.0.0", // default: localhost
  },

  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: "spa",
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: "static",
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    // titleTemplate: "%s - " + process.env.npm_package_name,
    // title: process.env.npm_package_name || "",
    title: "Vue Dashboard",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Vue Dashboard" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    "@nuxtjs/vuetify",
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    // treeShake makes dev builds slower
    // but the custom SCSS variables are available then
    treeShake: true, // process.env.NODE_ENV === "production"
    customVariables: ["~/assets/variables.scss"],
    theme: {
      options: {
        customProperties: true, // enables var(--v-primary-base) and similar
      },
      dark: true,
      light: true,
      themes: {
        light: {
          primary: "#1976D2",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
          background: "#ebebeb",
        },
        dark: {
          background: "#181A25",
          primary: "#A44730",
          accent: "#9A1C01",
          secondary: "#4E7D67",
          info: "#6C719D",
          warning: "#7D4800",
          error: "#700200",
          success: "#7A7029",
        },
      },
    },
  },

  /*
   ** Generate configuration
   */
  generate: {
    fallback: true,
  },
  router: {
    base: "/vue-dashboard/",
  },

  /*
   ** Build configuration
   */
  build: {
    // publicPath: "",
    // publicPath: ({ isDev }) => isDev ? "_nuxt" : "dist",
    extractCSS: true,

    filenames: {
      app: ({ isDev }) => { return isDev ? "[name].js" : "js/[name].[contenthash:5].js" },
      chunk: ({ isDev }) => { return isDev ? "[name].js" : "js/[name].[contenthash:5].js" },
      css: ({ isDev }) => { return isDev ? "[name].css" : "css/[name].[contenthash:5].css" },
      static: ({ isDev }) => { return isDev ? "static/[name].[ext]" : "static/[name].[contenthash:5].[ext]" },
      img: ({ isDev }) => { return isDev ? "[path][name].[ext]" : "img/[name].[contenthash:5].[ext]" },
      font: ({ isDev }) => { return isDev ? "[path][name].[ext]" : "fonts/[name].[contenthash:5].[ext]" },
    },

    splitChunks: {
      layouts: false,
      pages: true,
      commons: false,
    },

    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) { }
  },
}
