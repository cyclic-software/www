<script>
const title = "Investors | cyclic.sh"
const description = ""
const imageUrl = "https://www.cyclic.sh/og/cyclic_vs_heroku_summary_large_image.png"
export default {
  head: {
    title,
    meta: [

      {hid: 'title', name: 'title', content: title},
      {hid: 'og:title', property: 'og:title', content: title},
      {hid: 'twitter:title', name: 'twitter:title', content: title},

      {hid: 'og:description', property: 'og:description', content: description},
      {hid: 'twitter:description', name: 'twitter:description', content: description},
      {hid: 'description', name: 'description', content: description},

      {hid: 'og:image', property: 'og:image', content: imageUrl },
      {hid: 'twitter:image', name: 'twitter:image', content: imageUrl },
      {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },

    ],
  }
}
</script>


<template>
<div class="wrapper">


  <b-container class="hero">
    <b-row>
      <b-col lg="1"></b-col>
      <b-col><h1>
          Investors
        </h1></b-col>
    </b-row>
    <b-row>
      <b-col lg="1"></b-col>
      <b-col md="7" lg="5" align-self="center">
        
        <div class="spacer-32"></div>
        
        <!-- cyclic is a thing that is built and it works -->
        <h4>Next-gen full stack web application platform</h4>
        <p>
          Cyclic <strong>eliminates learning curve</strong> and provides the incredible developer experience to 
          unlock the massive potential of next-gen serverless infrastructure so far out of reach for developers. 
          <!-- The massive potential of next-gen serverless infrastructure has previously been out of reach for developers. 
          Cyclic eliminates the learning curve and provides the incredible developer experience to unlock that massive potential.  -->
        </p>
        <!-- <p>
          We are driven to unlock the massive potential of next-gen serverless infrastructure by eliminating the learning curve and providing an incredible developer experience.
        </p> -->
        <!-- <p>
          Cyclic provides an incredible developer experience to unlock the massive potential of next-gen serverless infrastructure, previously out of reach to all but experts. 
        </p> -->

        <!-- there is a problem in the world -->
        <h4>Cloud software is changing</h4>
        <!-- There is a fundamental shift happening in how software is built.  -->


        <p>
          New on-demand, cloud-native services are enabling <strong>global scale applications with zero idle cost</strong>. 
          Innovative organizations are making investments into architecting with these primitives to reduce operating costs, accelerate time to market and feedback cycle. 
        </p>
        <p>
          At the same time, complexity has grown. An individual developer lacks tooling and cannot hope to realize these benefits
          without support from a platform team, a cloud architect and totally switching their stack.
        </p>
        <!--we have a big vision  -->
        <p>
          We believe that you should not have to think about cloud infrastructure when you code, the same way you don't think about transistors.
        </p>

        <h4>We have reached 20k+ developers</h4>
        <p>
          Our vision is being shared by more and more people every day. Over the past few months, we have grown exponentially to over 20 thousand developers with 5 thousand active weekly. 
          So far together, we have deployed code over 200 thousand times!
        </p>
        <p>
          We hope to help hundreds of thousands of developers by honing our product, introducing support for more programming languages and engaging more dev communities. 
        </p>
           
          
        
        
        
        <!-- join us on this journey  -->

      </b-col>
      <!-- <b-col lg="1" ></b-col> -->
      <b-col md="5" lg="5"  >
          <!--we are blowing up  -->
       
        <!-- <p>
          New on-demand, cloud-native services are enabling <strong>global scale applications with zero idle cost</strong> 
          while at the same time increasing the granularity and complexity of cloud.
        </p> -->
          
          <!-- 
            the granularity is making the cloud increasingly more complex. An individual developer cannot hope to realize these benefits
          without support from a platform team, a cloud architect and totally switching their stack, -->
          <!-- <p>Expectations have grown and it is the norm for to build infrastructure on Cloud services AWS, Azure and GCP have grown in complexity  </p> -->

    
          <!-- team -->
<!--           
        <h4>If we can do it you can do it</h4>
        <p>
          Cyclic itself is a showcase of what is possible. We are a team of two engineers, and are able to manage workloads from thousands of users. 
        </p>
           -->
        <div class="text-center mt-5">

        
        <div>
          <img src="images/logos/big_logo.png" width="300px"/>
        </div>
        <h3 class="mt-5">Join us on this journey</h3>
        <div>
          <p>
            To keep up with our progress or if you'd like to chat:
          </p>
          <p class="mt-3">
              <a href=""
              @click="track()" 
                 class="button outline-white w-button">Sign up for our investor update newsletter.</a>
            </p>
        </div>
        </div>
      </b-col>
      <b-col lg="1"></b-col>
    </b-row>
  </b-container>

  <CtaFullStackApps></CtaFullStackApps>

</div>
</template>

<script>

  export default {
    methods: {
      async track(url, e){
          try{
              let session_seconds = parseInt(e.timeStamp/1000)
                await gtag('event', 'investor_newsletter_sign_up', {
                'event_label' : window.location.href,
                'event_category' : 'typeform_link',
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

p strong {
  color: orange;;
}

.hero {
  margin-top: 30px;
  margin-bottom: 30px;
}

h1 {
  max-width: 800px;
  margin-bottom: 0px;
  font-size: 65px;
  line-height: 1.15em;
}

.hero-images {
  margin-top: 30px;
  margin-bottom: 30px;
}
.vs-images {
  display: grid;
  grid-template-columns: auto 55px auto;
  place-items: center;
}

.vs-image {
  /* min-width: 150px; */
  max-width: 150px;
  /* min-height: 150px; */
  max-height: 150px;
}

.vs-text {
  vertical-align: middle;
  font-size: 40px;
  align-self: center;
  text-align: center;
}
.feature-matrix .header {
  background: #2e59c7;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 5px 5px 0px 0px;
  font-size: 1.5rem;
  text-align: left;
}

.feature-matrix .row:not(.header) {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  /* background-color: rgba(86,61,124,.15); */
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.feature-matrix .row:not(.header):last-child {
  border-radius: 0px 0px 5px 5px;
}

/* Small aka under Medium of ≥768 */
@media screen and (max-width: 767px) {
  .feature-matrix .header {
    font-size: 1.2rem;
  }

  .feature-matrix .row:not(.header) {

    font-size: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
/* X-Small aka under Small of ≥567 */
@media screen and (max-width: 576px) {
  .feature-matrix .header {
    font-size: 1.1rem;
  }

  .feature-matrix .row:not(.header) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

.row .col {
  text-align: left;
}


.footnote {
  padding-left: 5px;
  padding-right: 5px;
}
.spacer-16 {
  min-height: 16;
  max-height: 16;
  min-width: 16;
  max-width: 16;
}
.spacer-32 {
  min-height: 32px;
  max-height: 32px;
  min-width: 32px;
  max-width: 32px;
}
.spacer-64 {
  min-height: 64px;
  max-height: 64px;
  min-width: 64px;
  max-width: 64px;
}
</style>
