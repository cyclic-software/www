<template>
  <section class="section flex flex-col items-center text-center gap-20">
    <h5 class="text-sm uppercase tracking-[8px] text-neutral-300 leading-[150%]">
      supported languages & frameworks
    </h5>

    <div class="flex flex-wrap justify-center gap-16">
      <SupportedCard icon="fa-python" />
      <SupportedCard icon="fa-react" />
      <SupportedCard icon="fa-js" />
      <SupportedCard icon="ri-vuejs-line" />
      <SupportedCard icon="fa-node" />
      <SupportedCard icon="fa-golang" />
    </div>
  </section>
</template>

<script>
import SupportedCard from './SupportedCard.vue';

  export default {
    name: 'Supported',
    components: { SupportedCard }
}
</script>