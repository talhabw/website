// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: { url: 'https://karasu.me', name: 'Talha Karasu' },
  app: {
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
  routeRules: {
    '/cv': { redirect: '/files/talha-karasu-cv-en.pdf' },
    '/cv-en': { redirect: '/files/talha-karasu-cv-en.pdf' },
    '/cv-tr': { redirect: '/files/talha-karasu-cv-tr.pdf' },
    '/garfield': { redirect: 'https://random-garfield.karasu.me' },
    '/g': { redirect: 'https://random-garfield.karasu.me' },
  },
})
