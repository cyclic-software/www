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
        We have a thriving and growing developer community. Become part of it. <a target="_blank" rel='noopener' href="https://discord.cyclic.sh" class="text-sky-500">Join our Discord</a> and say hi!
      </p>
    </div>

    <!-- ********* COMPANIES ********* -->
    <div class="logos">
      <div class="marquee">
        <NuxtImg loading="lazy" src="/images/google.svg" alt="Google" />
        <NuxtImg loading="lazy" src="/images/tango.svg" alt="Tango" />
        <NuxtImg loading="lazy" src="/images/takeit.svg" alt="TakeIt" />
        <NuxtImg loading="lazy" src="/images/gonation-dark.svg" alt="Gonation" />
        <NuxtImg loading="lazy" src="/images/docker.svg" alt="Docker" />
        <NuxtImg loading="lazy" src="/images/captur.svg" alt="Captur" />
        <NuxtImg loading="lazy" src="/images/black-knight.svg" alt="Black Knight" />
        <NuxtImg loading="lazy" src="/images/ibm.svg" alt="IBM" />
        <NuxtImg loading="lazy" src="/images/infrrd.svg" alt="Infrrd" />
        <NuxtImg loading="lazy" src="/images/people-ai.svg" alt="People AI" />
        <NuxtImg loading="lazy" src="/images/devrev.svg" alt="DevRev" />
        <NuxtImg loading="lazy" src="/images/outdoorsy.svg" alt="Outdoorsy" />
        <NuxtImg loading="lazy" src="/images/commerce-iq.svg" alt="CommerceIQ" />
        <NuxtImg loading="lazy" src="/images/kiva.svg" alt="Kiva" />
        <NuxtImg loading="lazy" src="/images/annalise.svg" alt="Annalise" />
        <NuxtImg loading="lazy" src="/images/duda.svg" alt="Duda" />
        <NuxtImg loading="lazy" src="/images/match-group.svg" alt="MatchGroup" />
      </div>
      <div class="marquee">
        <NuxtImg loading="lazy" src="/images/google.svg" alt="Google" />
        <NuxtImg loading="lazy" src="/images/tango.svg" alt="Tango" />
        <NuxtImg loading="lazy" src="/images/takeit.svg" alt="TakeIt" />
        <NuxtImg loading="lazy" src="/images/gonation-dark.svg" alt="Gonation" />
        <NuxtImg loading="lazy" src="/images/docker.svg" alt="Docker" />
        <NuxtImg loading="lazy" src="/images/captur.svg" alt="Captur" />
        <NuxtImg loading="lazy" src="/images/black-knight.svg" alt="Black Knight" />
        <NuxtImg loading="lazy" src="/images/ibm.svg" alt="IBM" />
        <NuxtImg loading="lazy" src="/images/infrrd.svg" alt="Infrrd" />
        <NuxtImg loading="lazy" src="/images/people-ai.svg" alt="People AI" />
        <NuxtImg loading="lazy" src="/images/devrev.svg" alt="DevRev" />
        <NuxtImg loading="lazy" src="/images/outdoorsy.svg" alt="Outdoorsy" />
        <NuxtImg loading="lazy" src="/images/commerce-iq.svg" alt="CommerceIQ" />
        <NuxtImg loading="lazy" src="/images/kiva.svg" alt="Kiva" />
        <NuxtImg loading="lazy" src="/images/annalise.svg" alt="Annalise" />
        <NuxtImg loading="lazy" src="/images/duda.svg" alt="Duda" />
        <NuxtImg loading="lazy" src="/images/match-group.svg" alt="MatchGroup" />
      </div>
    </div>

    <!-- ********* STATS ********* -->
    <div class="border !border-neutral-700 rounded-3xl flex flex-col sm:flex-row items-center justify-around p-5
    gap-16 mt-10 bg-neutral-800/20 w-full sm:flex-wrap">
      <StatCard
        stat="5,300+"
        text="Developers active this week"
      />
      <StatCard
        stat="108,000+"
        text="Developers on Cyclic"
      />
      <StatCard
        stat="1,240,000+"
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
  .logos {
    /* display: flex; */
    gap: 80px;
    overflow: hidden;
    padding: 60px 0;
    background: rgb(23,23,23);
    white-space: nowrap;
    position: relative;
    width: 100%;
  }

  .logos:before,
  .logos:after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    content: "";
    z-index: 2;
  }

  .logos:before {
    left: 0;
    background: linear-gradient(to left, rgba(23, 23, 23, 0), rgb(23,23,23));
  }

  .logos:after {
    right: 0;
    background: linear-gradient(to right, rgba(23, 23, 23, 0), rgb(23,23,23));
  }

  .logos:hover .marquee {
    /* animation-play-state: paused; */
  }
  .marquee {
    display: inline-block;
    width: max-content;
    animation: marquee 35s linear infinite; /* Adjust duration as needed */
  }

  .marquee img {
    display: inline-block;
    height: 50px;
    margin: 0 40px;
  }

  @keyframes marquee {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%); /* Adjust for the duplicated logos */
    }
  }
</style>
