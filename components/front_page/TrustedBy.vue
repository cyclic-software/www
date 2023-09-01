<template>
  <section class="section common-section">
    <!-- ********* PILL TEXT ********* -->
    <Pill text="Developers love us" />
    
    <!-- ********* CTA TEXTS ********* -->
    <div class="space-y-6">
      <h2 class="font-extrabold text-4xl lg:text-5xl text-center">
        Trusted by tens of thousands of developers
      </h2>
  
      <p class="text-center text-neutral-300">
        We have a thriving and growing developer community. Become part of it. <a target="_blank" href="https://discord.cyclic.sh" class="text-sky-500">Join our Discord</a> and say hi!
      </p>
    </div>
    
    <div class="border !border-neutral-700 rounded-3xl flex flex-col sm:flex-row items-center justify-around p-5
    gap-16 mt-10 bg-neutral-800/20 w-full sm:flex-wrap">
      <StatCard
        stat="5,600+"
        text="Developers active this week"
      />
      <StatCard
        stat="85,150+"
        text="Developers on Cyclic"
      />
      <StatCard
        stat="963,000+"
        text="Builds triggered"
      />
    </div>

    <!-- TESTIMONIALS -->
    <div class="overflow-x-auto w-full pb-6">
      <div class="flex gap-5 w-max">
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  </section>
</template>

<script>
import StatCard from './StatCard.vue';
import Testimonial from './Testimonial.vue';

  export default {
    name: 'TrustedBy',
    components: { StatCard, Testimonial }
}
</script>