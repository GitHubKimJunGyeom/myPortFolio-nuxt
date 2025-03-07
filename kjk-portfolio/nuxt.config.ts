export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/i18n'
  ],
  i18n: {
    lazy: true,
    legacy: false,
    allowComposition: true,
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
  }
})