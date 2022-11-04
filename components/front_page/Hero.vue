<template>
  <div>
    <b-container>
      <b-row>
        <b-col lg="6" align-self="center">
          <div class="big-headline" >
            <div class="big-head">full</div>
            <div class="big-head">stack</div>
            <div class="big-head">apps</div>
            <!-- <h1 class="header-large metal" style="font-size: 75px">
              Full stack apps
            </h1> -->
            <p class="caption">
              Connect your GitHub repo.
              <br>
               We will build, deploy and manage the
              hosting.
            </p>
                <!-- <div class="text-center"> -->
                  <b-button
                  href="https://app.cyclic.sh/api/login" 
                  class="m-1" 
                  @click="sign_up('https://app.cyclic.sh/api/login', $event)" 
                  variant="primary" size="lg">
                    <i class="fab fa-github mr-2"></i> Deploy Now
                  </b-button>
                <!-- </div>
              </b-col>
              <b-col sm="4"></b-col>
            </b-row> -->
            
          </div>
        </b-col>
        <b-col lg="6"  align-self="center" class="right-hero">
          <div class="mb-1">
            <div class="paragraph caption steps">
              <div class="circle_number">1</div>
              Start with what you know.</div>
          </div>
          <example-code />
          <br>
          <div class="mb-1 mt-5">
            <div class="paragraph caption steps">
              <div class="circle_number">2</div> Go from <code>git push</code> to go-live in
              <strong>under 10 seconds</strong>.
            </div>
          </div>
          

          <div
            class="text-center video_box"
            style="max-height: 220px; overflow: hidden"
          >
            <!-- <video autoplay="autoplay" muted loop> -->
            <video playsinline="playsinline" autoplay muted loop>
              <img src="/images/deploy_tour.gif" title="Your browser does not support the <video> tag">
                Your browser does not support the video tag.
              <source src="/images/deploy_tour.mp4" type="video/mp4" />
            </video>
          </div>
          
        </b-col>
      </b-row>
    </b-container>
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
@import './front_page.css';
.big-headline{
  margin-left: 50px;
}
.big-head{
  font-size:100px;
  font-weight:900;
  height: 90px;
  /* font-family: Raleway, sans-serif; */
}
  .circle_number {
    width: 30px;
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


@media screen and (max-width: 991px) {
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
