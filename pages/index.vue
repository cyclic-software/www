<template>
<div>
    <div class="header_image fade_loop main_splash">      
      <!-- <img src="/images/Rectangle-240.svg" loading="lazy" alt="" class="absolute-image"> -->
    </div>
<div class="home_content">
  <b-container>
    <br/>
    <br/>
    <br/>
    <br/>
    <b-row>
      <b-col lg="12">
        <div class="text-center">
          <h1 class="header-large" style="font-size:75px;">
                Full stack apps
                </h1>
              <p class="paragraph caption">
                Connect your GitHub repo. We will build, deploy and manage the hosting. 
              </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
  <div class="spacer _16"></div>
  <b-container class="mt-5">
   <b-row>
      <b-col sm="6">
        <example-code/>
        <div class=" mt-3">
          <p class="paragraph caption">
              Start with what you know.
          </p>
        </div>
      </b-col>
      <b-col sm="6">
        <div class="text-center video_box" style="max-height:220px; overflow: hidden;">
          <video autoplay loop muted>
              <source src="/images/deploy_tour.mp4" type="video/mp4">
            Your browser does not support the video tag.
            </video>  
        </div>
        <div class=" mt-3">
          <p class="paragraph caption">
              Go from <code>git push</code> to go-live in <strong>under 10 seconds</strong>.
          </p>
        </div>
      </b-col>
    </b-row>
  


  </b-container>


  <b-container class="mt-5">
    <b-row>
      <b-col sm="4"></b-col>
      <b-col sm="4">
        <div class="text-center">
              <b-button class="m-1" @click="sign_up" variant='primary' size="lg">
                      <i class='fab  fa-github mr-2'></i>  Deploy with GitHub
              </b-button>

              <!-- <b-button class="m-1" href=" https://docs.cyclic.sh/docs/intro" target="_blank"
              variant='warning' size="md">
                      Documentation
              </b-button> -->
            </div>
      </b-col>
      <b-col sm="4"></b-col>
    </b-row> 
  </b-container>


  <div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>

  <frameworks />
  <div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
  <big-feature />

  
</div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<div class="spacer _16"></div>
<!-- 
  <div class="section hero home wf-section">
    <div class="container w-container">
      <div class="_12-columns tablet-center">
        <div class="column desk-6 tab-8 mob-12">
          <div>
            <h1 class="header-large">
              Full stack apps
              </h1>
            <p class="paragraph">
               Connect your GitHub repo. We will build, deploy and manage the hosting. 
            </p>
            <div class="spacer _16"></div>
          </div>
          <a href="https://app.cyclic.sh/api/login" 
          @click="sign_up('https://app.cyclic.sh/api/login', $event)" 
          class="button-2 w-button">Deploy a starter now!</a>
        </div>
        <div class="column desk-1 tab-0"></div>
        <div class="column desk-5 tab-10 mob-12">
          <video autoplay loop muted>
            <source src="/images/deploy_tour.mp4" type="video/mp4">
          Your browser does not support the video tag.
          </video>  
          <img class="hero-screenshot" src="/images/Screen-Shot-2021-06-21-at-2.53.30-PM.png" alt="Desktop and Mobile illustration" xstyle="opacity:0" sizes="(max-width: 479px) 92vw, (max-width: 767px) 71vw, (max-width: 991px) 64vw, 56vw" data-w-id="d4198aa4-5a08-cff0-3f9f-1696bf5129eb" srcset="/images/Screen-Shot-2021-06-21-at-2.53.30-PM-p-500.png 500w, /images/Screen-Shot-2021-06-21-at-2.53.30-PM-p-800.png 800w, /images/Screen-Shot-2021-06-21-at-2.53.30-PM-p-1080.png 1080w, /images/Screen-Shot-2021-06-21-at-2.53.30-PM-p-1600.png 1600w, /images/Screen-Shot-2021-06-21-at-2.53.30-PM.png 1606w">
        
        </div>
      </div>
    </div>
  </div>
 -->

  <SectionHero left>
    <template v-slot:img>
      <img src="/images/5.svg" alt="Abstract technical illustration" width="400" class="center-image"/>
    </template>
    <template v-slot:title>
      No Sleep
    </template>
    <template v-slot:text>
      Cyclic Apps are available immediately on demand. Even on free tier. Say hello to fast apps. Say goodbye to waiting
      30 seconds for containers to be provisioned and started.
    </template>
  </SectionHero>

  <SectionHero>
    <template v-slot:img>
      <img src="/images/6.svg" alt="Abstract technical illustration" width="400" class="center-image"/>
    </template>
    <template v-slot:title>
      Integrated Database and Storage
    </template>
    <template v-slot:text>
      Enable integrated NoSQL DynamoDB database table and S3 object storage. Use industry leading database and storage
      directly integrated, with permissions and environment variables pre-configured. Install the sdk and start making requests.
    </template>
  </SectionHero>


  <!-- <SectionHero left>
    <template v-slot:img>
      <img src="/images/4.svg" alt="Streaming logs product screenshot" width="400" class="center-image"/>
    </template>
    <template v-slot:title>
      Streaming Structured Logs
    </template>
    <template v-slot:text>
      Cyclic brings together application and API logs to give you a single, clear and organized view of everything that
      happened in your application between request and response.
    </template>
  </SectionHero> -->

  <!-- <SectionHero>
    <template v-slot:img>
      <img src="/images/8.svg" alt="Structured logs product screenshot" width="400" class="center-image"/>
    </template>
    <template v-slot:title>
      Log Search
    </template>
    <template v-slot:text>
      Stop jumping between windows and scrolling through logs. Full text search your app logs with zero config, on paid plans.
    </template>
  </SectionHero> -->

  <SectionHero left>
    <template v-slot:img>
      <img src="/images/1.svg" alt="Streaming logs product screenshot" width="400" class="center-image"/>
    </template>
    <template v-slot:title>
      Serverless Cron
    </template>
    <template v-slot:text>
      The power of cron with no servers. Single second resolution triggering. Automatically adjusted for your timezone
      and daylight savings. Pick the route, payload and schedule that works for you.
    </template>
  </SectionHero>



  <SectionHero>
    <template v-slot:img>
      <img src="/images/10.svg" alt="Structured logs product screenshot" width="400" class="center-image"/>
    </template>
    <template v-slot:title>
      Instant Environment Updates
    </template>
    <template v-slot:text>
      Update environment variables without having to restart servers. Environment configuration changes are applied in
      real time to application instances with zero-downtime.
    </template>
  </SectionHero>




<!--
  <SectionHero left>
    <template v-slot:img>
      <img src="/images/3.svg" alt="Abstract technical illustration" width="400" class="center-image"/>
    </template>
    <template v-slot:title>
      Features not Infrastructure
    </template>
    <template v-slot:text>
      Focus on business logic. Use familiar web frameworks. No cryptic CloudFormation errors. No mysterious API Gateway errors. No YAML parse errors. No hunting for CloudWatch log groups. No wasted time.
    </template>
  </SectionHero>

  <SectionHero>
    <template v-slot:img>
      <img src="/images/9.svg" alt="Abstract technical illustration" width="400" class="center-image"/>
    </template>
    <template v-slot:title>
      Serverless without the headache
    </template>
    <template v-slot:text>
      Most serverless offerings ask you to trade runtime operations headaches for design and build time headaches. Instead make your serverless framework and infrastructure work for you.
    </template>
  </SectionHero>
 -->


  <SectionHero left>
    <template v-slot:img>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/iK3ael3pQw8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
        srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href='https://www.youtube-nocookie.com/embed/iK3ael3pQw8?autoplay=1'><img src='https://i.ytimg.com/vi/iK3ael3pQw8/hqdefault.jpg' alt='Cyclic - Full stack serverless hosting platform'><span>▶</span></a>"
      >
      </iframe>
    </template>
    <template v-slot:title>
      Watch a product tour
    </template>
    <!-- <template v-slot:text>
    </template> -->
  </SectionHero>

  <CompanyStats />

  <!-- <div class="container-3 testimonial-block">
    <div class="h2-container testimonial-header">
      <h2 class="h2 dark">Testimonials that speak for themselves<br></h2>
    </div>
    <div id="seamless-replace" class="carousel-seamless">
      <div class="collection-list-wrapper testimonials w-dyn-list">
        <div role="list" class="collection-list w-dyn-items w-row">
          <div role="listitem" class="collection-item w-dyn-item w-col w-col-4">
            <div class="prof-pic"><img src="" loading="lazy" alt="" class="prof-pic-sall"></div>
            <div class="text-small">
              <h3 class="name"></h3>
              <blockquote class="quote-small"></blockquote>
            </div>
            <a href="#" class="social-link card w-inline-block">
              <div>Github</div>
            </a>
            <a href="#" class="social-link card twitter w-inline-block">
              <div>Twitter</div>
            </a>
            <a href="#" class="social-link card linkedin w-inline-block">
              <div>LinkedIn</div>
            </a>
          </div>
        </div>
        <div class="empty w-dyn-empty">
          <div>No items found.</div>
        </div>
        <div role="navigation" aria-label="List" class="w-pagination-wrapper carousel-slider">
          <a href="#" aria-label="Previous Page" class="w-pagination-previous arrow-right left"><svg class="w-pagination-previous-icon icon-small" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 12 12" transform="translate(0, 1)">
              <path fill="none" stroke="currentColor" fill-rule="evenodd" d="M8 10L4 6l4-4"></path>
            </svg></a>
          <a href="#" aria-label="Next Page" class="w-pagination-next arrow-right right"><svg class="w-pagination-next-icon icon-small" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 12 12" transform="translate(0, 1)">
              <path fill="none" stroke="currentColor" fill-rule="evenodd" d="M4 2l4 4-4 4"></path>
            </svg></a>
        </div>
      </div>
    </div>
  </div> -->
  <div class="section blue-gradient wf-section">
    <div class="container w-container">
      <div class="_12-columns align-top">
        <div class="column desk-12">
          <h2>The best code is the code you don&#x27;t have to write.</h2>
          <div class="spacer _48"></div>
        </div>
        <div class="column desk-4">
          <div class="text-box"><img src="/images/Frame-98.svg" alt="" class="icon">
            <h3>Run locally, run in the cloud.</h3>
            <p>An execution environment that feels familiar on both local and in the cloud. Optimize for speed from idea to live in production.</p>
            <div class="spacer _24"></div>
          </div>
        </div>
        <div class="column desk-4">
          <div class="text-box"><img src="/images/Frame-98-1.svg" alt="" class="icon">
            <h3>Build and Deploy in seconds.</h3>
            <p>The fastest build system you have ever seen. Seriously, you will be shocked. We sometimes refresh the page because we think we are seeing cached results. For real, it is that fast.</p>
            <div class="spacer _24"></div>
          </div>
        </div>
        <div class="column desk-4">
          <div class="text-box"><img src="/images/Frame-101.svg" alt="" class="icon">
            <h3>Scale up and Scale out.</h3>
            <p>Built and deployed with global scale enterprise grade serverless primates. Go from proof of concept to global load without re-architecting your app. </p>
            <div class="spacer _24"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CtaFullStackApps />
</div>
</template>

<script>




import CompanyStats from "../components/CompanyStats.vue";
import SectionHero from "~/components/SectionHero.vue";
import ExampleCode from "~/components/front_page/ExampleCode.vue";
import BigFeatures from "~/components/front_page/BigFeatures.vue";
import BigFeature from "~/components/front_page/BigFeature.vue";
import Frameworks from "~/components/front_page/Frameworks.vue";




export default {
    name: "Homepage",
    head() {
        return {
            meta: [
                { hid: "google-site-verification", name: "google-site-verification", content: "lmJwyO7CCfgF7HJ3lEAOAkbHn9JGkXKOa2o_iJsMAnQ" }
            ]
        };
    },
    components: { CompanyStats, SectionHero, ExampleCode,
      Frameworks,
      BigFeatures,
      BigFeature
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


  .section.blue-gradient {
    margin-right: 0px;
    margin-left: 0px;
    padding-right: 60px;
    padding-left: 60px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#245fff),
      color-stop(77%, #0f2c41)
    );
    background-image: linear-gradient(180deg, #245fff, #0f2c41 77%);
  }
  /* .section.blue-gradient {
    padding-right: 0px;
    padding-left: 0px;
  } */

  .home_content{
    max-width: 1400px;
    margin: 0 auto;
  }
  

  .header_image {
            background-image: url(/images/Rectangle-240.svg);
            background-repeat: no-repeat;
            /* background-position: left top; */
            /* padding-top: 95px; */
            /* margin-bottom: 60px; */
            /* animation: fade_loop 8s  infinite; */
            /* -webkit-animation-duration: 10s;
            animation-duration: 10s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both; */
            position: absolute;
            /* z-index: 1000; */
            top: 0;
            left: 0;
            right: 0;
            height: 100vh;
            width: 100%;
         }
         
         /* @-webkit-keyframes fade_loop {
            0% {
               opacity: 0;
               -webkit-transform: translateY(-20px);
            }
            100% {
               opacity: 1;
               -webkit-transform: translateY(0);
            }
         } */
         
         @keyframes fade_loop {
            0% {
               opacity: 0.9;
               transform: translateX(0px) scale(1);
            }
            50% {
               opacity: 1;
               transform: translateX(-20px) scale(1.07);
            }
            100% {
               opacity: 0.9;
               transform: translateX(0px) scale(1);
            }
         }
         
         .fade_loop {
            -webkit-animation-name: fade_loop;
            animation-name: fade_loop;
         }

.video_box{
  border: 2px solid #292929;
  border-radius: 8px;
}

.caption{
  text-align: center;;
  color: #bdbdbd
}
    


.main_splash{
   background:var(--background-pattern-dark);
      padding: 20px;
    color:white;
 
}

.main_splash{
  background: linear-gradient(to bottom,rgba(0,0,0,0) 11%,var(--background-color)),var(--background-pattern-dark)!important;
}



</style>
