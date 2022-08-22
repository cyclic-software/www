<template>

  <!-- <div id="nav-bar-animation" data-collapse="small" data-animation="default" data-duration="400" data-w-id="bd6f9588-23b4-f07d-9f3a-b6bd5f4c319c" data-easing="ease" data-easing2="ease" role="banner" class="nav-bar w-nav">
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
          <a href="release-notes" target="_blank" class="nav-link w-nav-link">Release Notes</a>
        </div>
        <div class="nav-cta-button-container">
          <a href="https://app.cyclic.sh/api/login" data-w-id="bd6f9588-23b4-f07d-9f3a-b6bd5f4c31b7" class="nav-link filled w-nav-link">Sign In</a>
        </div>
      </nav>
      <div class="menu-button w-nav-button"><img src="/images/White-Menu.svg" loading="lazy" width="24" alt="" class="menu-icon"></div>
    </div>
  </div> -->
<!--
<nav id="menu" class="navbar navbar-expand-lg">
  <div class="logo-div">
    <nuxt-link to="/" aria-current="page" class="navbar-brand">
      <img src="/images/cyclic-logo.png" loading="lazy" width="70" height="70" alt="Cyclic Logo" class="d-inline-block align-top">
    </nuxt-link>
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <nuxt-link to="/pricing">Pricing</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/blog">Blog</nuxt-link>
      </li>
      <li class="nav-item">
        <a href="https://docs.cyclic.sh/docs/intro" target="_blank">Docs</a>
      </li>
    </ul>

        <div class="nav-cta-button-container">
          <a href="https://app.cyclic.sh/api/login">Sign In</a>
        </div>
  </div>
</nav> -->

  <nav id="menu" class="navbar navbar-expand-sm navbar-dark">
    <nuxt-link to="/" class="navbar-brand">
      <img src="/images/cyclic-logo.png" class="logo-img"/>
    </nuxt-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <nuxt-link to="/pricing" class="nav-item nav-link">Pricing</nuxt-link>
      <nuxt-link to="/blog" class="nav-item nav-link">Blog</nuxt-link>
      <a href="https://app.cyclic.sh/api/login" class="nav-item nav-link" style="float: right;">Sign In</a>
    </div>
  </nav>


</template>


<style scoped>
  li.nav-item {
    margin-bottom: 0px
  }
  .navbar {
    position: -webkit-sticky;
    position: sticky;
    left: 0px;
    top: 0px;
    right: 0px;
    z-index: 200;
  }
  .logo-img {
    height: 60px
  }
</style>


<script>
  import chroma from "chroma-js"

  var scale = chroma.scale(['#0f2c4100', '#0b42d5']).domain([0, 550]);

  export default {
    methods: {
      handleScroll() {
        document.getElementById('menu').style['background-color'] = scale(window.pageYOffset);
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
