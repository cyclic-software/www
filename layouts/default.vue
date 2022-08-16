<template>
  <div id="app">
    <Menu></Menu>
    <Nuxt></Nuxt>
    <Footer></Footer>
  </div>
</template>


<script>
export default {
  head() {
    return {
      link: [
        {hid: 'canonical', rel: 'canonical', href: `https://www.cyclic.sh${this.$route.path}` }
      ],
      meta: [
        {hid: 'og:url', name: 'og:url', content: `https://www.cyclic.sh${this.$route.path}`},
      ]
    }
  }
}
</script>
