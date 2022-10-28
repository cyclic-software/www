<template>

<div>
  <div id="menubar">
    <b-navbar id="menu" toggleable="md" type="dark" variant="none">
      <!-- <div id="menu-content"> -->
        <b-navbar-brand to="/" class="navbar-brand">
          <img src="/images/cyclic-logo.png" class="logo-img"/>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav @show="collapsed=false;" @hidden="collapsed=true;">
          <b-navbar-nav>
            <b-nav-item to="/pricing">Pricing</b-nav-item>
            <b-nav-item to="/blog">Blog</b-nav-item>
            <b-nav-item href="https://docs.cyclic.sh/" target="_blank">Docs</b-nav-item>
            <b-nav-item to="/vs-heroku">vs Heroku</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item 
            href="https://app.cyclic.sh/api/login"
            >
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

<script>
  import chroma from "chroma-js"

  var scale = chroma.scale(['#0f2c4100', '#0f2c41']).domain([0, 40]); //#0b42d5

  export default {
    data(){
      return {
        dark: false,
        scrolled: false,
        collapsed: null,
      }
    },
    mounted(){
      this.handleScroll()
    },
    watch:{
      scrolled(v){
          this.dark = v;
      },
      collapsed(v){
        let menubar = document.getElementById('menubar')
        if(v)menubar.classList.remove('menu_collapsed')
        if(!v)menubar.classList.add('menu_collapsed')
      },
      dark(v){
        let menubar = document.getElementById('menubar')
        if(v)menubar.classList.add('dark')
        if(!v)menubar.classList.remove('dark')
      }
    },
    methods: {
      async sign_in(url, e){
          try{
              let session_seconds = parseInt(e.timeStamp/1000)
                await gtag('event', 'header_sign_in', {
                'event_label' : window.location.href,
                'event_category' : 'sign_in',
                'value' : session_seconds,

                'page' : window.location,
                'session_seconds': session_seconds,
                'event_callback': function() {
                    window.location = url
                  }
                });  
            }catch(e){
                window.location = url
            }
      },
      handleScroll() {
        if(window.pageYOffset){
          this.scrolled = true;
        }
        else{
          this.scrolled = false;
        }
      }
    },
    beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

</script>


<style scoped>
  :root {
    --menu-height: 65px;
  }
  .navbar-brand {
    min-width: 85px;
  }
  #menu {
    min-height: 65px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1200px;
    width: 100%;
  }
  #menubar {
    z-index:100;
    position: fixed;
    width: 100%;
    padding-right: 40px;
    padding-left: 40px;
    transition:  background-color 0.3s;
  }

  .sp-65 {
    min-height: 65px;
  }
  .logo-img {
    height: 55px
  }
  .nav-item{
    margin: 10px
  }
  
  .dark, .menu_collapsed{
    background:#0f2c41; ;;
  }



</style>

