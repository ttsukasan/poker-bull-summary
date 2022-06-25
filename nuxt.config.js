export default {
  target: 'static',
  router: {
    base: '/poker-bull-summary/'
  },
  head: {
    title: 'poker-bull-summary',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/poker-bull-summary/favicon.ico' }
    ]
  },
  css: [
    '@/assets/css/main.css',
    'boxicons/css/boxicons.min.css'
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/postcss8'
  ],
  modules: [
    '@nuxtjs/gtm',
  ],
  // Googleタグマネージャー
  gtm: {
    id: 'G-F3H3V1BRGG'
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
  }
}
