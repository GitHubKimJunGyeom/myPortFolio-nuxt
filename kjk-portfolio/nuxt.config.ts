export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/i18n'
  ],
  i18n: {
    strategy: 'prefix_except_default', // デフォルト言語はプレフィックス無し
    defaultLocale: 'ja',
    locales: [
      { code: 'ja', language: 'ja-JP', name: 'Japanese', file: 'ja.ts' },
      { code: 'ko', language: 'ko-KR', name: 'korea', file: 'ko.ts' },
    ],
    lazy: true,
    langDir: 'locales',
  }
})