// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxtjs/kinde',
    '@nuxt/ui'
  ],
  kinde: {
    // middleware to your Nuxt application.
    //
    // middleware: false,
    //
  }
})
