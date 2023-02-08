<template>
  <footer class="border-t border-white/20 py-16 px-6 sm:px-10 xl:px-20
  bg-black/20 backdrop-blur">
    <div class="flex flex-col md:flex-row gap-20 justify-between max-w-screen-xl mx-auto">
      <!-- ********** LINKS ********** -->
      <div class="flex flex-wrap gap-16 sm:gap-20">
        <!-- ********** COMPANY ********** -->
        <div class="space-y-4">
          <h4 class="text-base font-semibold">Company</h4>
  
          <div class="flex flex-col gap-3 text-xs">
            <nuxt-link
              to="/pricing"
              class="text-base !no-underline text-neutral-400 hover:text-white transition"
            >
              Pricing
            </nuxt-link>
  
            <nuxt-link
              to="/blog"
              class="text-base !no-underline text-neutral-400 hover:text-white transition"
            >
              Blog
            </nuxt-link>
  
            <a
              href="https://docs.cyclic.sh/"
              target="_blank"
              class="text-base !no-underline text-neutral-400 hover:text-white transition"
            >
              Documentation
            </a>

            <nuxt-link
              to="/terms-of-service"
              class="text-base !no-underline text-neutral-400 hover:text-white transition"
            >
              Terms of Service
            </nuxt-link>
  
            <nuxt-link
              to="/privacy-policy"
              class="text-base !no-underline text-neutral-400 hover:text-white transition"
            >
              Privacy Policy
            </nuxt-link>
          </div>
        </div>

        <!-- ********** SOCIAL ********** -->
        <div class="space-y-4">
          <h4 class="text-base font-semibold">Share</h4>
  
          <div class="flex flex-col gap-3 text-xs">
            <a
              href="https://github.com/cyclic-software"
              target="_blank"
              class="text-base !no-underline text-neutral-400 hover:text-white transition
              flex items-center gap-2.5"
            >
              GitHub <i class="fab fa-github"></i>
            </a>
  
            <a
              href="https://discord.cyclic.sh"
              target="_blank"
              class="text-base !no-underline text-neutral-400 hover:text-white transition
              flex items-center gap-2.5"
            >
              Discord <i class="fab fa-discord"></i>
            </a>
  
            <a
              href="https://twitter.com/cyclic_sh"
              target="_blank"
              class="text-base !no-underline text-neutral-400 hover:text-white transition
              flex items-center gap-2.5"
            >
              Twitter <i class="fab fa-twitter"></i>
            </a>
  
            <a
              href="https://www.linkedin.com/company/cyclic-software/about"
              target="_blank"
              class="text-base !no-underline text-neutral-400 hover:text-white transition
              flex items-center gap-2.5"
            >
              LinkedIn <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <!-- ********** VS HEROKU ********** -->
        <div class="space-y-4">
          <h4 class="text-base font-semibold">Products</h4>
  
          <div class="flex flex-col gap-3 text-xs">
            <nuxt-link
              to="/vs-heroku"
              class="text-base !no-underline text-neutral-400 hover:text-white transition"
            >
              vs Heroku
            </nuxt-link>
          </div>
        </div>
      </div>
  
      <!-- ********** BRAND ********** -->
      <div class="flex flex-col gap-4">
        <nuxt-link
          data-ix="logo"
          to="/"
          aria-current="page"
          class=""
        >
          <img src="/images/default-monochrome-white.svg" loading="lazy" alt="cyclic logo" class="w-40 h-auto">
        </nuxt-link>
  
        <p class="paragraph-small no-margin">
          © 2021-{{ (1900+(new Date()).getYear()) }} <a href="/" aria-current="page" class="w--current">Cyclic Software</a>
        </p>
      </div>

    </div>
  </footer>
</template>
