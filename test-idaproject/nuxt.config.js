export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-idaproject',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/style/lib/normalize.css', '@/assets/style/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    // your settings here
    scss: ['@/assets/style/_mixins/*.scss', '@/assets/style/_vars/*.scss'],
    hoistUseStatements: true, // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
