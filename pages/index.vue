<template>
  <div id="index-page">
    <div class="pt-20">
      <hero/>
      <Steps />
      <WhyCyclic />
      <Supported />
      <Blurbs />
      <TrustedBy />
      <feature-matrix/>
      <Infrastructure />
      <CyclicToWork />
      <GlobalLocations />
      <product-demo/>
      <Campaign />
    </div>
  </div>
</template>

<script>

import SectionHero from '~/components/SectionHero.vue'

import ProductDemo from '~/components/front_page/ProductDemo.vue'
import Blurbs from '~/components/front_page/Blurbs.vue'
import Hero from '~/components/front_page/Hero.vue'
import FeatureMatrix from '~/components/front_page/FeatureMatrix.vue'
import Steps from '~/components/front_page/Steps.vue'
import Supported from '~/components/front_page/Supported.vue'
import WhyCyclic from '~/components/front_page/WhyCyclic.vue'
import TrustedBy from '~/components/front_page/TrustedBy.vue'
import Infrastructure from '~/components/front_page/Infrastructure.vue'
import Campaign from '~/components/front_page/Campaign.vue'
import CyclicToWork from '~/components/front_page/CyclicToWork.vue'
import GlobalLocations from '~/components/front_page/GlobalLocations.vue'

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
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "Cyclic Software",
            "alternateName": "Cyclic",
            "url": "https://www.cyclic.sh",
            "logo": "https://www.cyclic.sh/images/logos/logo-text-blue.png",
            "sameAs": [
              "https://twitter.com/cyclic_sh",
              "https://www.youtube.com/@CyclicSh",
              "https://www.linkedin.com/company/cyclic-software/about",
              "https://github.com/cyclic-software",
              "https://www.cyclic.sh/"
            ]
          })
        }
      ]
    }
  },
  components: {
    SectionHero,
    Blurbs,
    ProductDemo,
    Hero,
    FeatureMatrix,
    Steps,
    Supported,
    WhyCyclic,
    TrustedBy,
    Infrastructure,
    Campaign,
    CyclicToWork,
    GlobalLocations
},
  async created(){
    // warmup cms
    await fetch('https://release-notes.cyclic.app/_healthcheck')
  }
}
</script>

<style scoped>


/* #index-page{
  background-color: black !important;
} */
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

  .banner{
    /* position: absolute;
    width: 100%;
    z-index: 90; */
  }

  .b-content{
    max-width: 1250px;
    text-align: left;
    margin: 0 auto;
    padding: 20px;
  }
  .b-content h2{
    /* font-family: Arial, Helvetica, sans-serif; */
    letter-spacing: normal;;
    font-size:25px;
    font-weight:500;
    /* color: white; */
  }
  .b-content p{
    font-family: Arial, Helvetica, sans-serif;
    /* font-size: 1.1rem;; */
  }
  .b-content ul{
    margin-left: 20px;
  }
  .header-alert{
    color: white;
    /* color: #ffc008; */
    background-color: #080e20;
    border-radius: 10px;
    /* backdrop-filter: blur(5px); */
    border: 0px solid #ffc008;
    animation: popup 0.2s;

  }


@keyframes popup {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(1);
  }
}
</style>
