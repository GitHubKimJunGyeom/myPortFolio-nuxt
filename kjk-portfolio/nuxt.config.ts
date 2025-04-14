export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/scripts'
  ],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/style/main.css'],

  site: {
    url: 'https://tokyokimportfolio.vercel.app',
    defaultLocale: 'ja',
    indexable: true,
  },
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://tokyokimportfolio.vercel.app/sitemap_index.xml',
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
  },

  content: {
    renderer: {
      anchorLinks: false,
    },
    preview: {
      api: 'https://api.nuxt.studio',
      dev: true,
    },
  },

  mdc: {
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-dark',
        light: 'github-light',
      },
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    viewTransition: true,
  },

  compatibilityDate: '2025-01-05',

  i18n: {
    locales: [
      { code: 'ja', name: 'Japanese', language: 'ja-JP' },
      { code: 'ko', name: 'Korean', language: 'ko-KR' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    strategy: 'prefix',
    defaultLocale: 'ja',
    vueI18n: '~/i18n.config.ts',
  },

  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      },
    ],
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
    provider: 'iconify',
  },

  ogImage: {
    zeroRuntime: true,
  },
  
})
