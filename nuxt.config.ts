// https://nuxt.com/docs/api/configuration/nuxt-config

// ITU_BUILD=1 builds the static copy served at https://web.itu.edu.tr/karasu24/
const itu = !!process.env.ITU_BUILD
const base = itu ? '/karasu24/' : '/'

export default defineNuxtConfig({
  site: { url: itu ? 'https://web.itu.edu.tr' : 'https://karasu.me', name: 'Talha Karasu' },
  app: {
    baseURL: base,
    head: {
      title: 'Talha Karasu',
      charset: "utf-8",
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: `${base}favicon.ico` }],
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
    robotsTxt: !itu,
  },
  sitemap: {
    enabled: !itu,
  },
  routeRules: {
    '/cv': { redirect: `${base}files/talha-karasu-cv-en.pdf` },
    '/cv-en': { redirect: `${base}files/talha-karasu-cv-en.pdf` },
    '/garfield': { redirect: 'https://random-garfield.karasu.me' },
    '/g': { redirect: 'https://random-garfield.karasu.me' },
  },
})
