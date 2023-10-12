<template>
  <nav id="menubar" class="fixed top-0 left-0 w-full z-50 bg-neutral-900/95 backdrop-blur">
    <div class="border-b border-neutral-800 px-4 sm:px-0 py-3">
      <div class="flex items-center justify-between w-full max-w-6xl mx-auto">
        <!-- ********* BRAND & LINKS********* -->
        <div class="flex items-center gap-5">
          <Brand />
  
          <div class="hidden md:block h-5 border-l border-neutral-700"></div>
  
          <div class="hidden md:flex items-center gap-5">
            <Navlink name="pricing" path="/pricing" />
            <Navlink name="blog" path="/blog" />
            <a class="text-sm capitalize text-neutral-300 hover:text-white transition" href="https://docs.cyclic.sh/" target="_blank">docs</a>
            <Navlink name="investors" path="/investors" />
            <Navlink name="updates" path="/updates" />

            <!-- USE CASES DROPDOWN -->
            <div class="relative group">
              <button class="flex items-center gap-1 text-neutral-300 group-hover:text-white">
                <span class="text-sm">Use Cases</span>
                <i class="ri-arrow-drop-down-line"></i>
              </button>
              
              <div class="absolute top-full hidden opacity-0 border !border-neutral-700 bg-neutral-800 p-2
              rounded-xl group-hover:grid group-hover:opacity-100 transition min-w-[120px] w-max grid-cols-1">
                <nuxt-link
                  class="capitalize text-neutral-300 hover:text-white px-3 py-2 hover:bg-neutral-700
                  rounded-lg transition w-full text-sm"
                  to="/use-cases/chatops"
                >
                  ChatOps: An Admin Bot
                </nuxt-link>

                <nuxt-link
                  class="capitalize text-neutral-300 hover:text-white px-3 py-2 hover:bg-neutral-700
                  rounded-lg transition w-full text-sm"
                  to="/use-cases/backends-for-frontends"
                >
                 Backends for Frontends
                </nuxt-link>

                <nuxt-link
                  class="capitalize text-neutral-300 hover:text-white px-3 py-2 hover:bg-neutral-700
                  rounded-lg transition w-full text-sm"
                  to="/use-cases/bring-cyclic-to-work"
                >
                  Bring Cyclic to Work
                </nuxt-link>

                <nuxt-link
                  class="capitalize text-neutral-300 hover:text-white px-3 py-2 hover:bg-neutral-700
                  rounded-lg transition w-full text-sm"
                  to="/use-cases/api-integrations"
                >
                  API Integrations
                </nuxt-link>

                <nuxt-link
                  class="capitalize text-neutral-300 hover:text-white px-3 py-2 hover:bg-neutral-700
                  rounded-lg transition w-full text-sm"
                  to="/vs-heroku"
                >
                  Cyclic vs Heroku
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ********* CONTROLS ********* -->
        <div class="flex !items-center gap-5">
          <button class="flex items-center justify-center h-10 w-10 border rounded-xl !border-neutral-700
          bg-neutral-800/20 hover:!border-white transition md:hidden"
          @click="menu_open=!menu_open">
            <i class="ri-menu-line"></i>
          </button>

          <div class="hidden md:flex items-center gap-5">
            <a
              href="https://github.com/cyclic-software"
              target="_blank"
              class="text-sm !no-underline text-neutral-400 hover:text-white transition
              flex items-center gap-2.5"
            >
              <i class="fab fa-github"></i>
            </a>

            <a
              href="https://discord.cyclic.sh"
              target="_blank"
              class="text-sm !no-underline text-neutral-400 hover:text-white transition
              flex items-center gap-2.5"
            >
              <i class="fab fa-discord"></i>
            </a>

            <a
              href="https://app.cyclic.sh/api/login"
              @click="sign_in('https://app.cyclic.sh/api/login', $event)"
              class="m-0 text-sm capitalize text-neutral-300 hover:text-white transition"
            >
              login
            </a>
    
            <a
              href="https://app.cyclic.sh/api/login"
              @click="sign_up('https://app.cyclic.sh/api/login', $event)"
              class="button button-primary m-0 w-max"
            >sign up</a>
          </div>
        </div>
      </div>
    </div>

    <!-- ********* BRING CYCLIC TO WORK BANNER ********* -->
    <div v-if="show_banner" class="border-b border-neutral-700 px-4 sm:px-0 py-2 bg-neutral-800">
      <div class="max-w-6xl mx-auto flex items-center gap-3 text-sm">
        <p class="font-semibold">Cyclic at Work</p>
        <div class="h-3 w-px border-l !border-neutral-600"></div>
        <p class="text-neutral-300">
          We are growing and looking for design partners. Part of a team that could use Cyclic at work?
          <a
            href="https://cyclic.typeform.com/to/HNNO8Bkp"
            class="text-sky-400 capitalize underline"
            target="_blank"
          >
            let's talk
          </a>
        </p>
        <button class="text-neutral-400 hover:text-white transition" @click="show_banner=false">
          <i class="ri-close-line"></i>
        </button>
      </div>
    </div>

    <!-- ********* MOBILE MENU ********* -->
    <div :class="`fixed top-0 right-0 ${menu_open ? 'translate-x-0':'translate-x-full'} flex flex-col md:hidden w-full h-screen
    bg-neutral-800 border-l border-neutral-700 transition`">
      <button class="flex items-center justify-center h-10 w-10 border rounded-xl !border-neutral-700
      bg-neutral-800/20 hover:!border-white transition md:hidden absolute top-4 right-5"
      @click="menu_open=false">
        <i class="ri-close-line"></i>
      </button>

      <div class="absolute top-4 left-4" @click="menu_open=false">
        <nuxt-link class="hover:no-underline" to="/">
          <Brand />
        </nuxt-link>
      </div>

      <div class="space-y-5 pt-24 px-6">
        <div class="grid grid-cols-1 gap-5" @click="menu_open=false">
          <nuxt-link
            class="capitalize text-neutral-300 hover:text-white px-3 py-2 hover:bg-neutral-700
            rounded-lg transition w-full"
            to="/pricing"
          >
            pricing
          </nuxt-link>
  
  
          <nuxt-link
            class="capitalize text-neutral-300 hover:text-white px-3 py-2 hover:bg-neutral-700
            rounded-lg transition"
            to="/blog"
          >
            blog
          </nuxt-link>
  
          <nuxt-link
            class="capitalize text-neutral-300 hover:text-white px-3 py-2 hover:bg-neutral-700
            rounded-lg transition"
            to="/investors"
          >
            investors
          </nuxt-link>
  
          <nuxt-link
            class="capitalize text-neutral-300 hover:text-white px-3 py-2 hover:bg-neutral-700
            rounded-lg transition"
            to="/updates"
          >
            updates
          </nuxt-link>
  
          <a
            class="capitalize text-neutral-300 hover:text-white px-3 py-2 hover:bg-neutral-700
            rounded-lg transition"
            href="https://docs.cyclic.sh/"
            target="_blank"
          >
            docs
          </a>
        </div>

        <!-- USE CASES DROPDOWN -->
        <div class="relative group w-full">
          <button class="flex items-center justify-between gap-1 capitalize text-neutral-300 hover:text-white px-3 py-2 hover:bg-neutral-700
          rounded-lg transition w-full">
            <span class="">Use Cases</span>
            <i class="ri-arrow-drop-down-line"></i>
          </button>
          
          <div @click="menu_open=false" class="hidden opacity-0 h-0 border !border-neutral-700 bg-neutral-800 p-2
          rounded-xl group-hover:grid group-hover:opacity-100 group-hover:h-max transition min-w-[120px] w-full grid-cols-1">
            <nuxt-link
              class="capitalize text-neutral-300 hover:text-white px-3 py-2 hover:bg-neutral-700
              rounded-lg transition w-full text-sm"
              to="/use-cases/chatops"
            >
              ChatOps: An Admin Bot
            </nuxt-link>

            <nuxt-link
              class="capitalize text-neutral-300 hover:text-white px-3 py-2 hover:bg-neutral-700
              rounded-lg transition w-full text-sm"
              to="/use-cases/backends-for-frontends"
            >
              Backends for Frontends
            </nuxt-link>

            <nuxt-link
              class="capitalize text-neutral-300 hover:text-white px-3 py-2 hover:bg-neutral-700
              rounded-lg transition w-full text-sm"
              to="/use-cases/bring-cyclic-to-work"
            >
              Bring Cyclic to Work
            </nuxt-link>
            
            <nuxt-link
              class="capitalize text-neutral-300 hover:text-white px-3 py-2 hover:bg-neutral-700
              rounded-lg transition w-full text-sm"
              to="/use-cases/api-integrations"
            >
              API Integrations
            </nuxt-link>

            <nuxt-link
              class="capitalize text-neutral-300 hover:text-white px-3 py-2 hover:bg-neutral-700
              rounded-lg transition w-full text-sm"
              to="/vs-heroku"
            >
              Cyclic vs Heroku
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 mt-10 px-6 gap-2">
        <div class="flex justify-center gap-4 py-4">
          <a
            href="https://github.com/cyclic-software"
            target="_blank"
            class="text-sm !no-underline text-neutral-400 hover:text-white transition
            flex items-center gap-2.5"
          >
            <i class="fab fa-github"></i>
          </a>

          <a
            href="https://discord.cyclic.sh"
            target="_blank"
            class="text-sm !no-underline text-neutral-400 hover:text-white transition
            flex items-center gap-2.5"
          >
            <i class="fab fa-discord"></i>
          </a>
        </div>

        <a
          href="https://app.cyclic.sh/api/login"
          @click="sign_in('https://app.cyclic.sh/api/login', $event)"
          class="border !border-neutral-700 text-white capitalize flex items-center justify-center rounded-xl px-4 py-3
          gap-2 hover:no-underline hover:!border-white transition w-full"
        >
          login
        </a>

        <a
          href="https://app.cyclic.sh/api/login"
          @click="sign_up('https://app.cyclic.sh/api/login', $event)"
          class="bg-primary text-white capitalize flex items-center justify-center rounded-xl px-4 py-3
          gap-2 hover:no-underline hover:scale-105 transition w-full"
        >sign up</a>
      </div>
    </div>
  </nav>
</template>

<script>
  import chroma from "chroma-js"
  import Brand from "./Brand.vue";
  import Navlink from "./Navlink.vue";

  var scale = chroma.scale(['#0f2c4100', '#0f2c41']).domain([0, 40]); //#0b42d5

  export default {
    data() {
        return {
            dark: false,
            scrolled: false,
            collapsed: null,
            show_banner: true,
            menu_open: false
        };
    },
    mounted() {
        this.handleScroll();
    },
    watch: {
        scrolled(v) {
            this.dark = v;
        },
        collapsed(v) {
            let menubar = document.getElementById('menubar');
            if (v)
                menubar.classList.remove('menu_collapsed');
            if (!v)
                menubar.classList.add('menu_collapsed');
        },
        dark(v) {
            let menubar = document.getElementById('menubar');
            if (v)
                menubar.classList.add('dark');
            if (!v)
                menubar.classList.remove('dark');
        }
    },
    methods: {
        async sign_in(url, e) {
            try {
                let session_seconds = parseInt(e.timeStamp / 1000);
                await gtag('event', 'header_sign_in', {
                    'event_label': window.location.href,
                    'event_category': 'sign_in',
                    'value': session_seconds,
                    'page': window.location,
                    'session_seconds': session_seconds,
                    'event_callback': function () {
                    }
                });
            }
            catch (e) {
            }
        },
        async sign_up(url, e) {
            try {
                let session_seconds = parseInt(e.timeStamp / 1000);
                await gtag('event', 'header_sign_up', {
                    'event_label': window.location.href,
                    'event_category': 'sign_up',
                    'value': session_seconds,
                    'page': window.location,
                    'session_seconds': session_seconds,
                    'event_callback': function () {
                    }
                });
            }
            catch (e) {
            }
        },
        handleScroll() {
            if (window.pageYOffset) {
                this.scrolled = true;
            }
            else {
                this.scrolled = false;
            }
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    components: { Brand, Navlink }
}

</script>


<style scoped>
  /* :root {
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
    @apply bg-black/90 border-b border-b-white/10 backdrop-blur-sm;
  } */



</style>

