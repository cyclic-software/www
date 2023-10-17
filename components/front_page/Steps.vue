<template>
  <section class="section flex flex-col items-center gap-10 ">

    <Pill  text="Git push to go live in under 10 seconds"  />

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StepCard :step_num="1" text="Use what you know">
        <ExampleCode />
      </StepCard>

      <StepCard :step_num="2" text="git push">
        <div
          class="text-center video_box"
          style="max-height: 220px; overflow: hidden"
        >
          <video autoplay loop muted playsinline>
            <source src="/images/deploy_tour.webm" type="video/webm" />
            <source src="/images/deploy_tour.mp4" type="video/mp4" />
          </video>
        </div>
      </StepCard>

      <StepCard :step_num="3" text="Go live">
        <div class="logs-header">
          <div class="text-center video_box logs_gif" style="max-width:450px; overflow: hidden;">
            <video autoplay loop muted playsinline>
              <source src="/images/logs_demo.webm" type="video/webm" />
              <source src="/images/logs_demo.mp4" type="video/mp4" />
            </video>

          </div>

          <div class="metrics-img">
            <NuxtImg loading="lazy" src="/images/metrics.png" alt='Sample metrics' />
          </div>
        </div>
      </StepCard>
    </div>
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
<style scoped>
.logs-header{
  /* height: 100%; */
  /* width: 600px; */
  position: relative;
  margin: auto;
  /* box-shadow: 21px 0px 124px -26px #162859; */
}
.logs_gif{
  filter: contrast(1.4);
  height: 220px;
}
.metrics-img{
  position:absolute;
  bottom: -10px;
  width: 250px;
  right: 10px;

}
</style>
