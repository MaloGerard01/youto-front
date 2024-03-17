// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt',
      'nuxt-swiper',
      '@samk-dev/nuxt-vcalendar',
  ],

  ssr: true,
  nitro: {
    baseURL: "http://localhost:8000",
    prerender: {
      crawlLinks: true,
      failOnError: false, 
    },
  },
  routeRules: {
    "/**": { swr: true },
    "/dashboard/**": { ssr: false },
  },
})
