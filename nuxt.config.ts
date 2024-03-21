// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  extends: [ '@nuxt/ui-pro' ],
  modules: [ '@nuxt/ui', "@nuxtjs/tailwindcss" ],
  css: [ '~/assets/css/main.css' ],
  colorMode: {
    preference: 'light'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, maximum-scale=2.5, minimum-scale=0.2',
    }
  }
})