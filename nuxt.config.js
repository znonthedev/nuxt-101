import en from './locales/en.json'
import ar from './locales/ar.json'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "i18n-test",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: ""}
    ],
    link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/rtl.scss',
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
      },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "nuxt-i18n"
  ],
  i18n: {
    locales: [
      {code: 'en', iso: 'en-US', file: 'en.js'},
      {code: 'ar', iso: 'fr-FR', file: 'ar.js'},
    ],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {en, ar}
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  fontawesome: {
    icons: {
      brands: true,
      solid: true
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
