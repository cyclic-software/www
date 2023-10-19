<template>
  <section class="section common-section">
    <!-- ********* PILL TEXT ********* -->
    <Pill text="Available everywhere" />

    <!-- ********* CTA TEXTS ********* -->
    <div class="space-y-6">
      <h2 class="font-extrabold text-4xl lg:text-5xl text-center">
        Support users everywhere
      </h2>

      <p class="text-center text-neutral-300">
        Deploy your apps in multiple locations
      </p>
    </div>

    <!-- ********* WORLD MAP ********* -->
    <div class="">
      <NuxtImg
        format="webp"
        loading='lazy'
        src="/images/global-map.svg"
        alt="Cyclic Server Locations"
      />
    </div>
  </section>
</template>

<style>
  @keyframes pulsate {
    0%,
    100% {
      fill: #4DABFF;
      /* transform: translateY(0) */
    }
    50% {
      fill: white;
      /* transform: translateY(-3px) */
    }
  }

  .pulsate:nth-child(odd) {
    animation: linear 3s infinite alternate pulsate;
  }

  .pulsate:nth-child(even) {
    animation: 2s linear 3s infinite alternate pulsate;
  }
</style>

<script>



</script>
