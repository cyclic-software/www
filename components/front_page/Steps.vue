<template>
  <section class="section grid grid-cols-1 sm:grid-cols-3 gap-4">
    <StepCard step_num="1" text="Join Cyclic" />
    <StepCard step_num="2" text="Connect GitHub" />
    <StepCard step_num="3" text="Deploy" />
  </section>
</template>

<script>
import StepCard from './StepCard.vue';

  export default {
    name: 'Steps',
    components: { StepCard }
}
</script>