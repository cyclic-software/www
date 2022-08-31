<template>
  <div class="footer wf-section">
    <div class="spacer _64"></div>
    <div class="footer-container w-container">
      <div class="_12-columns align-top">
        <div class="column desk-6 tab-12">
          <nuxt-link data-ix="logo" to="/" aria-current="page" class="footer-logo w-nav-brand w--current">
            <img src="/images/default-monochrome-white.svg" loading="lazy" alt="cyclic logo" class="image">
          </nuxt-link>
          <p class="paragraph-small no-margin">© 2021-2022 <a href="/" aria-current="page" class="w--current">Cyclic Software</a><br></p>
          <div class="spacer _64"></div>
        </div>
        <div class="column desk-2 tab-4 mob-6">
          <h5 class="footer-header">Compare</h5>
          <div class="footer-links-container">
            <nuxt-link to="vs-heroku">vs Heroku</nuxt-link>
          </div>
        </div>
        <div class="column desk-2 tab-4 mob-6">
          <div class="footer-links-container">
            <h5 class="footer-header">Share</h5>
            <a href="https://github.com/cyclic-software" target="_blank" class="footer-link">
              GitHub <i class="fab fa-github"></i>
            </a>
            <a href="https://discord.cyclic.sh" target="_blank" class="footer-link">
              Discord <i class="fab fa-discord"></i>
            </a>
            <a href="https://twitter.com/cyclicsoftware" target="_blank" class="footer-link">
              Twitter <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/company/cyclic-software/about" target="_blank" class="footer-link">
              LinkedIn <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div class="column desk-2 tab-4 mob-6">
          <div class="footer-links-container">
            <h5 class="footer-header">Company</h5>
            <nuxt-link to="/pricing" class="footer-link">Pricing</nuxt-link>
            <nuxt-link to="/blog" class="footer-link">Blog</nuxt-link>
            <a href="https://docs.cyclic.sh/" target="_blank" class="footer-link">Documentation</a>
            <!-- <a href="release-notes" class="footer-link">Release Notes</a> -->
            <nuxt-link to="/terms-of-service" class="footer-link">Terms of Service</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
