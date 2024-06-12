// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  // content: {
  //   documentDriven: true
  // },
})
