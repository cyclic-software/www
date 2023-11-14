<template>
  <section class="section common-section">
    <!-- ********* PILL TEXT ********* -->
    <Pill text="A free tier that's actually useful" />
    
    <!-- ********* CTA TEXTS ********* -->
    <div class="space-y-6">
      <h2 class="font-extrabold text-4xl lg:text-5xl text-center">
        Researching Cyclic? Just want the specs?
      </h2>
  
      <p class="text-center text-neutral-300">
        Get started now. Here is what you get with the <strong>Free</strong> tier:
      </p>
    </div>

    <div class="border !border-neutral-700 rounded-2xl mt-10 p-6 w-full lg:w-2/3
    space-y-5 bg-neutral-800/20">
      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">Inactivity Delay</p>
        <p class="text-white text-end">None - Apps Never Sleep</p>
      </div>

      <hr class="border-neutral-800">

      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">Hourly Limit</p>
        <p class="text-white text-end">None - Unlimited</p>
      </div>

      <hr class="border-neutral-800">

      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">Compute</p>
        <p class="text-white text-end">1024 MB RAM</p>
      </div>

      <hr class="border-neutral-800">

      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">Autoscaling</p>
        <p class="text-white text-end">100 x 1024 MB</p>
      </div>

      <hr class="border-neutral-800">

      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">API Requests</p>
        <p class="text-white text-end">1000 / month / app</p>
      </div>

      <hr class="border-neutral-800">

      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">Languages</p>

        <div class="text-end">
          <p class="text-white text-end">JavaScript</p>
          <p class="text-white text-end">TypeScript</p>
          <p class="text-white text-end">Python</p>
          <p class="text-white text-end">Go</p>
        </div>
      </div>

      <hr class="border-neutral-800">

      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">Integrated Database</p>
        <p class="text-white">1 GB (AWS DynamoDB)</p>
      </div>

      <hr class="border-neutral-800">

      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">Integrated Object Storage</p>
        <p class="text-white">1 GB (AWS S3)</p>
      </div>

      <hr class="border-neutral-800">

      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">Builds</p>
        <p class="text-white text-end">Unlimited</p>
      </div>

      <hr class="border-neutral-800">

      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">Edge Locations</p>
        <p class="text-white text-end">Closest of 18+ Regions</p>
      </div>

      <hr class="border-neutral-800">

      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">Smart Caching</p>
        <p class="text-white text-end">300+ Locations</p>
      </div>

      <hr class="border-neutral-800">

      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">Precision Cron</p>
        <p class="text-white text-end">3 jobs / app</p>
      </div>

      <hr class="border-neutral-800">

      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">Logs History - Application</p>
        <p class="text-white text-end">7 Days</p>
      </div>

      <hr class="border-neutral-800">

      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">Logs History - Network</p>
        <p class="text-white text-end">7 Days</p>
      </div>

      <hr class="border-neutral-800">

      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">SSL Certificates</p>
        <p class="text-white text-end">✓</p>
      </div>

      <hr class="border-neutral-800">

      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">Custom Subdomains</p>
        <p class="text-white text-end">✓</p>
      </div>

      <hr class="border-neutral-800">

      <div class="flex items-center justify-between gap-10 lg:gap-20">
        <p class="text-neutral-300">Build on <code>git push</code></p>
        <p class="text-white text-end">✓</p>
      </div>
    </div>

    <!-- ********* CONTROLS ********* -->
    <div class="flex items-center justify-center gap-3 w-full">
      <a
        href="https://app.cyclic.sh/api/login"
        class="button button-primary m-0 text-base w-max"
        @click="sign_up('https://app.cyclic.sh/api/login', $event)"
      >
        <Brand :hideText="true" :small="true" />
        deploy now
      </a>

      <a
        href="/pricing"
        class="button button-outline m-0 w-max"
        target="_blank"
      >
        Get more features
      </a>
    </div>
  </section>
</template>

<script>

import ExampleCode from "./ExampleCode.vue";

export default {
  components:{
    ExampleCode
  },
  methods:{
    async sign_up(url, e){
          try{
              let session_seconds = parseInt(e.timeStamp/1000)
                await gtag('event', 'cta_matrix_deploy', {
                'event_label' : window.location.href,
                'event_category' : 'sign_up',
                'value' : session_seconds,
                'page' : window.location,
                'session_seconds': session_seconds,
                'event_callback': function() {
                  }
                });
            }catch(e){
            }
      }
    }

}

</script>


<style scoped>

p strong {
  color: orange;;
}




.check{
  /* color: orange; */
  color: #9CCC65;
  line-height: 1.25em;
}

@media screen and (max-width: 991px) {
}
</style>
