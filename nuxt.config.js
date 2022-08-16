const title = "Cyclic.sh - Fullstack Javascript Apps - Deploy and Host in Seconds"
const description = "Fullstack Javascript Apps: Front-end, Backend, Database, Scheduled tasks. All running with zero-config."

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // ssr: false,

  env: {
    dev: process.env.NODE_ENV !== 'production'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },

      { hid: 'og:locale', property: 'og:locale', content: 'en_US'},
      { hid: 'og:type', property: 'og:type', content: 'website'},
      { hid: 'og:site_name', property: 'og:site_name', content: 'Cyclic.sh'},

      {hid: 'title', name: 'title', content: title},
      {hid: 'og:title', property: 'og:title', content: title},
      {hid: 'twitter:title', name: 'twitter:title', content: title},

      {hid: 'og:description', property: 'og:description', content: description},
      {hid: 'twitter:description', name: 'twitter:description', content: description},
      {hid: 'description', name: 'description', content: description}

    ],
    link: [{ hid: 'icon', rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

    script: [
      {
        src: 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=60d0f076b69e2d55ce24614e',
        integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
        crossorigin: 'anonymous',
        body: true,
        defer: true,
        async: true
      },{
        src: '/js/webflow.js',
        body: true,
        defer: true,
        async: true
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@static/css/normalize.css",
    "@static/css/webflow.css",
    "@static/css/www-cyclic.webflow.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@/modules/generator'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    ['@nuxtjs/axios', {
      // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
      baseURL: '/',
    }],
    // https://go.nuxtjs.dev/pwa
    ['@nuxtjs/pwa', {
      // PWA module configuration: https://go.nuxtjs.dev/pwa
        manifest: {
          lang: 'en',
        },
      },
    ],
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  //   baseURL: '/',
  // },

  // // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     lang: 'en',
  //   },
  // },

  // // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  sitemap: {
    hostname: 'https://www-builder.cyclic.sh',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    fallback: '404.html',
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true })
        .where({ path: { $in: ['posts'] } })
        .only(['path']).fetch()
      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  }
}
