export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/i18n'
  ],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'ja',
    locales: [
      { 
        code: 'ja', 
        file: 'ja.ts' 
      },
      { 
        code: 'ko', 
        file: 'ko.ts' 
      },
    ],
    lazy: true,
    langDir: '/i18n/lang/'
  }
})