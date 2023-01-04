<template>
  <div class="hero">
      <b-row>
        <b-col lg="6" align-self="center">
          <div class="ml-12 space-y-10">
            <div class="">
              <p class="big-head">full</p>
              <p class="big-head">stack</p>
              <p class="big-head">apps</p>
            </div>

            <p class="text-gray-400">
              Connect your GitHub repo.
              <br>
               We will build, deploy and manage the
              hosting.
            </p>

            <div class="">
              <b-button
              href="https://app.cyclic.sh/api/login" 
              class="m-1" 
              @click="sign_up('https://app.cyclic.sh/api/login', $event)" 
              variant="primary" size="lg">
                <i class="fab fa-github mr-2"></i> Deploy Now
              </b-button>
            </div>
          </div>
        </b-col>
        <b-col lg="6"  align-self="center" class="right-hero">
          <div class="mb-1">
            <div class="paragraph caption steps">
              <div class="circle_number">1</div>
              <div class="step-caption">Start with what you know.</div></div>
          </div>
          <example-code />
          <br>
          <div class="mb-1 mt-5">
            <div class="paragraph caption steps">
              <div class="circle_number">2</div>
              <div class="step-caption">Go from <code>git push</code> to go-live in
                <strong>under 10 seconds</strong>.
              </div> 
            </div>
          </div>
          

          <div
            class="text-center video_box"
            style="max-height: 220px; overflow: hidden"
          >
            <!-- <video autoplay="autoplay" muted loop> -->
              <img src="/images/deploy_tour.gif" >
            <!-- <video playsinline="playsinline" autoplay muted loop>
                Your browser does not support the video tag.
              <source src="/images/deploy_tour.mp4" type="video/mp4" />
            </video> -->
          </div>
          
        </b-col>
      </b-row>
  </div>
</template>

<script>

import ExampleCode from "./ExampleCode.vue";

export default {
  components:{
    ExampleCode
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
