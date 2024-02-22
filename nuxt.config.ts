// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/kinde',
    '@nuxtjs/tailwindcss',
    '@nuxt/ui'
  ],
  kinde: {
    authDomain: 'https://<your_kinde_subdomain>.kinde.com',
    clientId: '<your_kinde_client_id>',
    // middleware to your Nuxt application.
    // 
    // middleware: false,
    // 
  }
})
