// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:8080'
    }
  },
  modules: [
    '@nuxt/devtools',
    "@nuxtjs/i18n",
    'nuxt-swiper',
  ],
  css: ["~/assets/scss/main.scss", "~/node_modules/bootstrap/dist/css/bootstrap.min.css"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/_colors.scss";',
        },
      },
    },
  },
  app: {
    head: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg', href: '/favicon.svg' }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
        },
      ],
    },
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    strategy: 'prefix_except_default',
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English(US)',
        file: 'en-US.js',
        isCatchallLocale: true
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Russia(RU)',
        file: 'ru-RU.js',
        isCatchallLocale: true
      },
    ],
    customRoutes: 'config',
    vueI18n: './i18n.config.ts'
  }
})