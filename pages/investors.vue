<script>
const title = "Investors | cyclic.sh"
const description = ""
// const imageUrl = "https://www.cyclic.sh/og/cyclic_vs_heroku_summary_large_image.png"
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

      // {hid: 'og:image', property: 'og:image', content: imageUrl },
      // {hid: 'twitter:image', name: 'twitter:image', content: imageUrl },
      // {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },

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

        <h4>Software is changing</h4>
        <p>
          <!-- Cloud native <strong>serverless</strong> architectures are enabling applications to grow from zero to global
          without redesign.  -->
          New cloud native <strong>serverless infrastructures</strong> are enabling flexible global scale applications. 
          They have <strong>zero cost at rest</strong> and are priced to match cost to value. 
          Innovative organizations are adopting these technologies for these benefits despite additional complexity of tooling, design and orchestration.
        </p>
        <div class="spacer-32"></div>

        <h4>Lower barriers - faster time to market</h4>
        <p>
          An individual developer, without learning a totally new stack or support from a platform team, lacks access
          to this massive potential. The global community of developers will <a href="https://dashboard.slashdata.co/" target="_blank">nearly double in the next 6 years</a>.
          Cyclic eliminates barriers to meet developers where they are. So even the most junior developer can take advantage of these technologies.
ies.
        </p>

        <div class="spacer-32"></div>
        <h4>A good start and yet so much more to do</h4>
        <p>
          Over <strong>20,000 developers have found us</strong> and signed up and thousands use Cyclic on a daily basis.
        </p>
        <p>
          We started with
          Javascript/Node.js <strong>full stack apps</strong>, but our vision extends well beyond that. We are a small
          team, crazy enough to think we will empower the next 20 million developers and are experienced enough to know
          we can't do it alone.
          <br>
        </p>
        <p>
          Join us on our journey.
        </p>
      </b-col>
      <!-- <b-col lg="1" ></b-col> -->
      <b-col md="5" lg="5"  >
        <div class="text-center mt-5">
          <div>
            <img src="images/logos/big_logo.png" width="300px"/>
          </div>
          <div class="spacer-32"></div>
          <h3 class="mt-5">Intrigued?</h3>
          <div>
            <p>
              Keep updated on our progress or schedule a call:
            </p>
            <p class="mt-4">
                <a href="https://cyclic.typeform.com/to/rTL1sd0X?ref=www&id=Segment-ID"
                @click="track()"
                  class="button outline-white w-button">Subscribe to Investor Updates</a>
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
