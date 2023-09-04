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

    <!-- ********* COMPANIES ********* -->
    <div class="overflow-hidden w-full relative py-5">
      <div class="marquee flex w-full gap-12">
        <a href="#" class="text-7xl text-neutral-400 hover:text-white transition">
          <i class="ri-google-fill"></i>
        </a>

        <a href="#" class="text-7xl text-neutral-400 hover:text-white transition">
          <i class="ri-google-fill"></i>
        </a>
        
        <a href="#" class="text-7xl text-neutral-400 hover:text-white transition">
          <i class="ri-google-fill"></i>
        </a>

        <a href="#" class="text-7xl text-neutral-400 hover:text-white transition">
          <i class="ri-google-fill"></i>
        </a>

        <a href="#" class="text-7xl text-neutral-400 hover:text-white transition">
          <i class="ri-google-fill"></i>
        </a>
      </div>
    </div>

    <!-- ********* STATS ********* -->
    <div class="border !border-neutral-700 rounded-3xl flex flex-col sm:flex-row items-center justify-around p-5
    gap-16 mt-10 bg-neutral-800/20 w-full sm:flex-wrap">
      <StatCard
        stat="5,600+"
        text="Developers active this week"
      />
      <StatCard
        stat="95,000+"
        text="Developers on Cyclic"
      />
      <StatCard
        stat="1,000,000+"
        text="Builds triggered"
      />
    </div>

    <!-- ********* TESTIMONIALS ********* -->
    <div class="overflow-x-auto w-full pb-6">
      <div class="flex gap-5 w-max">
        <Testimonial
          v-for="testimonial of testimonials"
          :key="testimonial.name + Math.random()"
          :name="testimonial.name"
          :msg="testimonial.msg"
          :link="testimonial.link"
          :avatar="testimonial.avatar"
          :work="testimonial.work"
        />
      </div>
    </div>
  </section>
</template>

<script>
import StatCard from './StatCard.vue';
import Testimonial from './Testimonial.vue';
import { testimonials } from './testimonials';

  export default {
    name: 'TrustedBy',
    components: { StatCard, Testimonial },
    data() {
      return {
        testimonials
      }
    }
}
</script>

<style scoped>
  .marquee {
    animation: marquee 20s linear infinite; /* Adjust duration as needed */
  }

  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>