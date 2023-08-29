const fs = require('fs').promises;
const path = require('path');


const hostname = process.NODE_ENV === 'production' ? 'https://www.cyclic.sh' : 'http://localhost:3000';
// console.log(process.env)
const title = "Cyclic.sh - Fullstack Javascript Apps - Deploy and Host in Seconds"
const description = "Fullstack Javascript Apps: Front-end, Backend, Database, Scheduled tasks. All running with zero-config."


let posts = [];

const constructFeedItem = async (post, dir, hostname) => {
  //note the path used here, we are using a dummy page with an empty layout in order to not send that data along with our other content
  // const filePath = path.join(__dirname, `dist/rss/posts/${post.slug}/index.html`);
  const filePath = path.join(__dirname, `dist/posts/${post.slug}/index.html`);
  const content = await fs.readFile(filePath, 'utf8');
  const url = `${hostname}/${dir}/${post.slug}`;

  console.log(url)

  return {
    title: post.title,
    id: url,
    link: url,
    description: post.description,
    content: content
  }
}
const create = async (feed, args) => {
  const [filePath, ext] = args;
  feed.options = {
    title: "Cyclic Blog",
    description: "Company blog for Cyclic Software. All about startups, serverless, technical stories and advice.",
    link: `${hostname}/blog/rss.${ext}`
  }
  const { $content } = require('@nuxt/content')
  if (posts === null || posts.length === 0) {
    posts = await $content(filePath)
              .where({ "hidden": { "$ne": true } })
              .sortBy("publishedOn", "desc")
              .fetch();
  }
  for (const post of posts) {
    const feedItem = await constructFeedItem(post, filePath, hostname);
    feed.addItem(feedItem);
  }
  return feed;
}

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
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'format-detection', content: 'telephone=no' },

      { hid: 'og:locale', property: 'og:locale', content: 'en_US'},
      { hid: 'og:type', property: 'og:type', content: 'website'},
      { hid: 'og:site_name', property: 'og:site_name', content: 'Cyclic.sh'},

      {hid: 'title', name: 'title', content: title},
      {hid: 'og:title', property: 'og:title', content: title},
      {hid: 'twitter:title', name: 'twitter:title', content: title},

      {hid: 'og:description', property: 'og:description', content: description},
      {hid: 'twitter:description', name: 'twitter:description', content: description},
      {hid: 'description', name: 'description', content: description},

      {hid: 'og:image', property: 'og:image', content: `https://www.cyclic.sh/og/summary_large_image.png` },
      {hid: 'twitter:image', name: 'twitter:image', content: `https://www.cyclic.sh/og/summary_large_image.png` },
      {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },

    ],
    link: [
      { hid: 'icon', rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.5.0/remixicon.css' },
    ],

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
    "@static/css/titillium.css",
    // "@static/css/normalize.css",
    // "@static/css/webflow.css",
    // "@static/css/www-cyclic.webflow.css",
    "@static/css/main.css",
    "@static/css/custom.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/prism' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@/modules/generator',
    'bootstrap-vue/nuxt',
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
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
    '@nuxtjs/feed',
    '@nuxtjs/sitemap',
    '@nuxtjs/markdownit'
  ],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },

  // Fonts.
  googleFonts: {
    families: {
      'Titillium+Web': true,
      Inter: true,
      Figtree: [400,500,600,700,800,900],
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  //   baseURL: '/',
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     lang: 'en',
  //   },
  // },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  
  // Feed module configuration: https://content.nuxtjs.org/v1/community/integrations/
  feed: [{
    path: '/blog/rss.xml',
    create,
    cacheTime: 1000 * 60 * 60, // 1hr
    type: 'rss2',
    data: ['posts','xml']
  }],

  sitemap: {
    hostname: 'https://www.cyclic.sh',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      }
    }
  },

  generate: {
    fallback: '404.html',
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true })
        .where({ path: { $in: ['posts'] } })
        .only(['path']).fetch()
      // console.log(files)
      let baseRoutes = files.map((file) => {
        let res = file.path === '/index' ? '/' : file.path
        console.log(`${file} => ${res}`)
        return res
      })
      let rssRoutes = files.map(file => file.path === '/index' ? '/' : '/rss'+file.path)
      // console.log(baseRoutes)
      // console.log(rssRoutes)
      return [...baseRoutes,...rssRoutes]
    }
  },
  router: {
    base: '/'
  },
}
