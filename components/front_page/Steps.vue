<template>
  <section class="section grid grid-cols-1 sm:grid-cols-3 gap-20 sm:gap-4">
    <StepCard :step_num="1" text="Start with what you know">
      <ExampleCode />
    </StepCard>

    <StepCard :step_num="2" text="git push">
      <div
        class="text-center video_box"
        style="max-height: 220px; overflow: hidden"
      >
        <img src="/images/deploy_tour.gif" >
      </div>
    </StepCard>

    <StepCard :step_num="3" text="Go live" />
  </section>
</template>

<script>
import ExampleCode from './ExampleCode.vue';
import StepCard from './StepCard.vue';

  export default {
    name: 'Steps',
    components: { StepCard, ExampleCode }
}
</script>