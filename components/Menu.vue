<template>
  <div id="nav-bar-animation" data-collapse="small" data-animation="default" data-duration="400" data-w-id="bd6f9588-23b4-f07d-9f3a-b6bd5f4c319c" data-easing="ease" data-easing2="ease" role="banner" class="nav-bar w-nav">
    <div class="nav-container w-container">
      <div class="logo-div">
        <nuxt-link to="/" aria-current="page" class="nav-logo w-inline-block w--current">
          <img src="/images/Group-1.png" loading="lazy" width="68" alt="" class="image-2">
        </nuxt-link>
      </div>
      <nav role="navigation" class="nav-content w-nav-menu">
        <div class="nav-menu">
          <nuxt-link to="/pricing" class="nav-link w-nav-link">Pricing</nuxt-link>
          <nuxt-link to="/blog" class="nav-link w-nav-link">Blog</nuxt-link>
          <a href="https://docs.cyclic.sh/docs/intro" target="_blank" class="nav-link w-nav-link">Docs</a>
          <a href="release-notes.html" target="_blank" class="nav-link w-nav-link">Release Notes</a>
        </div>
        <div class="nav-cta-button-container">
          <a href="https://app.cyclic.sh/api/login" data-w-id="bd6f9588-23b4-f07d-9f3a-b6bd5f4c31b7" class="nav-link filled w-nav-link">Sign In</a>
        </div>
      </nav>
      <div class="menu-button w-nav-button"><img src="/images/White-Menu.svg" loading="lazy" width="24" alt="" class="menu-icon"></div>
    </div>
  </div>
</template>

<script>
  import chroma from "chroma-js"

  var scale = chroma.scale(['#0b42d500', '#0b42d5']).domain([0, 400]);

  export default {
    methods: {
      handleScroll() {
        document.getElementById('nav-bar-animation').style['background-color'] = scale(window.pageYOffset);
        // console.log(window.scrollY)
      }
    },
    beforeMount () {
      this.handleScroll()
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

</script>

