<template>
  <section class="section flex flex-col items-center gap-10 lg:gap-8">
    <!-- ********* PILL TEXT ********* -->
    <Pill text="Launch with confidence" />
    
    <!-- ********* CTA TEXTS ********* -->
    <div class="space-y-8">
      <h1 class="font-extrabold text-6xl lg:text-8xl tracking-normal text-center">
        Escape infrastructure. Unleash ideas.
      </h1>
  
      <p class="text-center text-neutral-300 text-lg">
        Build and run <strong>modern cloud-native serverless applications</strong> without piling on to the full stack.
        <!-- Connect your GitHub repo. We’ll build, deploy and manage the hosting. -->
      </p>
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
        href="https://docs.cyclic.sh/"
        class="button button-outline m-0 w-max"
        target="_blank"
      >
        Read Docs
      </a>
    </div>

    <!-- ********* CYCLIC PREVIEW ********* -->
    <img class="rounded-3xl mt-8 preview w-[95%]" src="/images/preview1.png" alt="">
  </section>
</template>

<script>

import Brand from "../Brand.vue";
import Pill from "../Pill.vue";
import ExampleCode from "./ExampleCode.vue";

export default {
  components:{
    ExampleCode,
    Pill,
    Brand
},
  methods:{
    async sign_up(url, e){
          try{
              let session_seconds = parseInt(e.timeStamp/1000)
                await gtag('event', 'cta_hero_deploy_starter_now', {
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
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;800;900&display=swap');

.preview {
  box-shadow: 10px 0px 60px 4px #162859;
}
.hero{
  position: relative;
    left: 0px;
    top: 0px;
    right: 0px;
    display: block;
    width: 100%;
    max-width: 1230px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 0px;
    padding-left: 0px;
    flex-direction: column;
    justify-content: center;
}

.big-headline{
  margin-left: 50px;
}
.big-head{
  @apply !text-8xl tracking-tight font-black !leading-[1];
}
  .circle_number {
    width: 30px;
    min-width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    border: 2px solid white;
    display: inline-block;
    line-height: 24px;
    font-weight: 900;
    margin-left: -11px;
    color: white;
    scale: 1.1;
    margin-right: 13px;
  }

  .caption {
    color: #bdbdbd;
    font-size: 18px;
  }

.video_box{
  border-radius: 8px;
  height:400px;
}
.btn-primary, .btn-primary:active{
    background-color: var(--pink);
    border-color: var(--pink);
    
}
.btn-primary:hover, .btn-primary:focus{
    background-color: var(--darkpink);
}
.steps{
  display: flex;
  align-items: center;
}
.step-caption{
  /* display: inline-block; */
}

@media screen and (max-width: 991px) {
  .hero{
    max-width: calc(100vw - 40px);
  }
  .video_box{
    box-shadow: 0px 0px 120px 4px #101e44;
  }
  .big-headline{
    margin-left: 30px;
  }
    .right-hero{
      margin-top: 100px;
    }
    .steps{
      margin-left: 10px;
      /* text-align: center;; */
    }

  }
  
  

</style>
