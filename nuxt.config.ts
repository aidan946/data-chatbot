// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/kinde',
    '@nuxt/ui',
    '@nuxtjs/color-mode'
  ],
  kinde: {
    // middleware to your Nuxt application.
    //
    // middleware: false,
    //
  }
})
