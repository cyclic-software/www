<template>
  <div id="index-page">
    <div class="header_image fade_loop main_splash"></div>
    <div class="home_content">
      <div class="front-page-spacer"></div>
      <hero class='hero'/>

      <div class="front-page-spacer "></div>
      <frameworks/>
      <!-- <div class="front-page-spacer spacer-smaller"></div> -->
      <big-feature/>
      <div class="front-page-spacer spacer-smaller"></div>
      <languages/>
      <div class="front-page-spacer spacer-smaller"></div>
      <db-feature/>
      <div class="front-page-spacer"></div>
      <cron-feature/>
      <div class="front-page-spacer"></div>
      <logs-feature/>
      <div class="front-page-spacer"></div>
      <headline-thing class='mb-5'/>
      <small-feature/>
      <div class="front-page-spacer"></div>
      <CompanyStats/>
      <div class="front-page-spacer"></div>
      <product-demo/>
      <div class="front-page-spacer"></div>
      <blurbs/>
      <div class="front-page-spacer"></div>
      <CtaFullStackApps/>
      <div class="front-page-spacer"></div>
    </div>
  </div>
</template>

<script>
import CompanyStats from '../components/CompanyStats.vue'
import SectionHero from '~/components/SectionHero.vue'

import DbFeature from '~/components/front_page/DbFeature.vue'
import CronFeature from '~/components/front_page/CronFeature.vue'
import LogsFeature from '~/components/front_page/LogsFeature.vue'
import BigFeature from '~/components/front_page/BigFeature.vue'
import SmallFeature from '~/components/front_page/SmallFeature.vue'
import Frameworks from '~/components/front_page/Frameworks.vue'
import Languages from '~/components/front_page/Languages.vue'
import HeadlineThing from '~/components/front_page/HeadlineThing.vue'
import ProductDemo from '~/components/front_page/ProductDemo.vue'
import Blurbs from '~/components/front_page/Blurbs.vue'
import Hero from '~/components/front_page/Hero.vue'

export default {
  name: 'Homepage',
  head() {
    return {
      meta: [
        {
          hid: 'google-site-verification',
          name: 'google-site-verification',
          content: 'lmJwyO7CCfgF7HJ3lEAOAkbHn9JGkXKOa2o_iJsMAnQ',
        },
      ],
    }
  },
  components: {
    CompanyStats,
    SectionHero,
    Frameworks,
    DbFeature,
    Languages,
    CronFeature,
    LogsFeature,
    BigFeature,
    Blurbs,
    SmallFeature,
    HeadlineThing,
    ProductDemo,
    Hero,
  },
}
</script>

<style scoped>


.hero{
  animation: none !important;
}
#index-page{
  background-color: black !important;
}
h1,h2 {
    letter-spacing: 2px;
}

.paragraph{
    letter-spacing: 0.2px;;
}

.btn-primary, .btn-primary:active{
    background-color: var(--pink);
}
.btn-primary:hover, .btn-primary:focus{
    background-color: var(--darkpink);
}

em{
    color: var(--pink)
  }

.front-page-spacer{
  height: 150px;
}
.home_content {
  max-width: 1400px;
  margin: 0 auto;
}

.header-large {
  font-weight: 900;
}
.header_image {
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100%;
}

.main_splash {
  background: var(--background-pattern-dark);
  padding: 20px;
  color: white;
}

.main_splash {
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) -11%,
      var(--background-color)
    ),
    var(--background-pattern-dark) !important;
}

@keyframes fade_loop {
  0% {
    opacity: 0.9;
    transform: translateX(0px) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateX(-20px) scale(1.07);
  }
  100% {
    opacity: 0.9;
    transform: translateX(0px) scale(1);
  }
}

.fade_loop {
  -webkit-animation-name: fade_loop;
  animation-name: fade_loop;
}

@media screen and (max-width: 991px) {
  .spacer-smaller{
    height: 20px;
  }
}
  
</style>
