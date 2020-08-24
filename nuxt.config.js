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
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: process.env.npm_package_description || "" },
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
    treeShake: true, // process.env.NODE_ENV === "production"
    customVariables: ["~/assets/variables.scss"],
    theme: {
      options: {
        customProperties: true,
      },
      dark: true,
      light: false,
      themes: {
        light: {
          primary: "#003F7A",
          secondary: "#A34100",
          accent: "#8d8dac",
          info: "#3A6EA5",
          success: "#88aa44",
          error: "#f4442e",
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

          // primary: "#C1EF37",
          // secondary: "#5A656E",
          // secondary: "#5A656E",
          // accent: "#1CB8AC",
          // info: "#30EAE5",
          // success: "#23DF23",
          // error: "#F08304",
          // warning: "#C0FF01",
          // background: "#212528",
          // primary: colors.blue.darken2,
          // accent: colors.grey.darken7,
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
  /*
   ** Build configuration
   */
  build: {
    publicPath: "",
    // publicPath: ({ isDev }) => isDev ? "_nuxt" : "dist",
    // publicPath: "https://pawelmucha.com/vue",
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
