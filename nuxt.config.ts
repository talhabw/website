// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: { url: 'https://web.itu.edu.tr', name: 'Talha Karasu' },
  app: {
    baseURL: '/karasu24/',
    head: {
      title: 'Talha Karasu',
      charset: "utf-8",
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        { name: 'description', content: 'Personal website of Talha Karasu' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  robots: {
    robotsTxt: false,
  },
  routeRules: {
    '/cv': { redirect: '/karasu24/files/talha-karasu-cv-en.pdf' },
    '/cv-en': { redirect: '/karasu24/files/talha-karasu-cv-en.pdf' },
    '/garfield': { redirect: 'https://random-garfield.karasu.me' },
    '/g': { redirect: 'https://random-garfield.karasu.me' },
  },
})
