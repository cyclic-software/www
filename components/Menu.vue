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
  <div id="menubar">
    <b-navbar id="menu" toggleable="md" type="dark" variant="none">
      <!-- <div id="menu-content"> -->
        <b-navbar-brand to="/" class="navbar-brand">
          <img src="/images/cyclic-logo.png" class="logo-img"/>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" float="right"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/pricing">Pricing</b-nav-item>
            <b-nav-item to="/blog">Blog</b-nav-item>
            <b-nav-item href="https://docs.cyclic.sh/" target="_blank">Docs</b-nav-item>
            <b-nav-item to="/vs-heroku">vs Heroku</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="https://app.cyclic.sh/api/login">
              Sign In
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      <!-- </div> -->
    </b-navbar>
  </div>
  <div class="sp-65"></div>
</div>

</template>


<style scoped>
  :root {
    --menu-height: 65px;
  }
  .navbar-collapse.collapse.show {
    background: #0f2c41;
    width: 100%;
  }
  .navbar-brand {
    min-width: 85px;
  }
  /* #nav-collapse .show {
    padding-left: 120px;
  } */
  #menu {
    min-height: 65px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1200px;
    width: 100%;
    /* display:flex; */
  }
  #menubar {
    z-index:100;
    position: fixed;
    /* left: 0px;
    top: 0px;
    right: 0px;
    display: block; */
    width: 100%;
    /* max-width: 1230px; */
    /* margin-right: auto;
    margin-left: auto; */
    padding-right: 40px;
    padding-left: 40px;
    /* flex-direction: column;
    justify-content: center; */
  }

  .sp-65 {
    min-height: 65px;
  }
  .logo-img {
    /* position: fixed;
    top: 5px; */
    height: 55px
  }
  .nav-item{
    margin: 10px
  }
</style>


<script>
  import chroma from "chroma-js"

  var scale = chroma.scale(['#0f2c4100', '#0f2c41']).domain([0, 40]); //#0b42d5

  export default {
    methods: {
      handleScroll() {
        document.getElementById('menubar').style['background-color'] = scale(window.pageYOffset);
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
