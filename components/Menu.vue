<template>

  <!-- <nav id="menu" class="navbar navbar-expand-sm navbar-dark">
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
  </nav> -->

<div>
  <b-navbar id="menu" toggleable="md" type="dark" variant="none" fixed="top">
    <b-navbar-brand to="/" class="navbar-brand">
        <img src="/images/cyclic-logo.png" class="logo-img"/>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/pricing">Pricing</b-nav-item>
        <b-nav-item to="/blog">Blog</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://app.cyclic.sh/api/login">
          Sign In
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>


<style scoped>
  /* li.nav-item {
    margin-bottom: 0px
  } */
  /* .navbar {
    position: -webkit-sticky;
    position: sticky;
    left: 0px;
    top: 0px;
    right: 0px;
    z-index: 200;
  } */
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
