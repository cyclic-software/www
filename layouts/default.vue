<template>
  <div>
    <Menu></Menu>
    <Nuxt></Nuxt>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  head: {
    // css: [
    //   "/css/normalize.css",
    //   "/css/webflow.css",
    //   "/css/www-cyclic.webflow.css"
    // ],
    script: [
      // { src: '/head.js' },
      // Supported since 1.0
      {
        src: 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=60d0f076b69e2d55ce24614e',
        integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
        crossorigin: 'anonymous',
        body: true,
      },
      { src: '/js/webflow.js', body: true },
      // { src: '/defer.js', defer: '' }
    ]
  }
}
</script>
