export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/i18n'
  ],
  i18n: {
    lazy: true,
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
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    strategy: 'prefix',
    vueI18n: '~/i18n.config.ts',
  }
})