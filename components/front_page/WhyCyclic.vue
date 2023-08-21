<template>
  <section class="section flex flex-col items-center gap-8">
    <!-- ********* PILL TEXT ********* -->
    <Pill text="Loads of benefits" />
    
    <!-- ********* CTA TEXTS ********* -->
    <div class="space-y-6">
      <h2 class="font-extrabold text-4xl lg:text-5xl text-center">
        Why deploy your apps on Cyclic
      </h2>
  
      <p class="text-center text-neutral-300">
        Cyclic allows developers to focus on what really matters - building.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 mt-10 justify-center">
      <BenefitCard
        icon="ri-flashlight-fill"
        title="No sleep"
        text="Cyclic Apps are available immediately and on demand. Say goodbye to waiting 30 seconds for containers to be spun up. Even on free tier."
        no_border="top"
      />

      <BenefitCard
        icon="ri-earth-line"
        title="Worldwide"
        text="Code is deployed to where you are. Smart caching helps you deliver the best performance globally."
        no_border="top"
      />

      <BenefitCard
        icon="ri-rocket-2-line"
        title="Hyperscale"
        text="Scale up and down instantly. 1GB serverless compute handles EACH individual request."
        no_border="top"
      />

      <BenefitCard
        icon=""
        title="Spike resistant"
        text="Scale up and down instantly. 1GB serverless compute handles EACH individual request."
        no_border="top"
      />

      <BenefitCard
        icon="ri-arrow-up-down-line"
        title="Roll forward, roll back"
        text="Switch to different versions of your app's deployments."
        no_border="bottom"
      />

      <BenefitCard
        icon="ri-money-dollar-circle-fill"
        title="Match cost and value"
        text="Only pay for what you use."
        no_border="bottom"
      />
    </div>
  </section>
</template>

<script>
  import BenefitCard from './BenefitCard.vue';

  export default {
    name: 'WhyCyclic',
    components: { BenefitCard }
  }
</script>