<script>
const title = "Heroku vs Cyclic: Feature and pricing comparison | cyclic.sh"
const description = "Heroku compared to Cyclic for features, pricing and developer experience."
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

      // {hid: 'og:image', property: 'og:image', content: `https://www.cyclic.sh/summary_large_image.png` },
      // {hid: 'twitter:image', name: 'twitter:image', content: `https://www.cyclic.sh/summary_large_image.png` },
      // {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },

    ],
  }
}
</script>


<template>
<div class="wrapper">


  <b-container class="hero">
    <b-row>
      <b-col sm="1"></b-col>
      <b-col md="6" align-self="center">
        <h1>
          Heroku vs Cyclic
        </h1>
        <div class="spacer-32"></div>
        <p>
            Heroku is the one of the best known PaaS (Platform as a Service) vendors.
          It was founded in 2007 (two years before Node.js was first released). Both
          Heroku and Cyclic offer a similar set of standard basic features.
        </p>
        <p>
          Heroku is built around a concept of "Dynos". These are lightweight containers
          that are priced liked servers but have some attributes of on-demand serverless
          style runtimes with elastic scale up. The downside is that you still pay for idle.
        </p>
        <p>
          Cyclic is a good alternative to Heroku if you are looking for a modern cloud architecture,
          serverless hosting infrastructure, easy on-boarding experience, a bursty or
          inconsistent workload. Or if self-hosting is required (BYO cloud account).
          Pay for the requests you use, auto-scale from the start.
        </p>
        <p>
          Here is a breakdown Heroku compared to Cyclic on individual features:
        </p>
      </b-col>
      <!-- <b-col lg="1" ></b-col> -->
      <b-col md="3" class="hero-images" align-self="center">
        <!-- <b-row align-h="center">
          <b-col cols="12" align-self="center"> -->
            <div class="vs-images">
              <img class="vs-image" src="/images/vs/heroku-logo-solid-gradient.svg" width="150px"/>
              <!-- <div class="spacer-16"></div> -->
              <div class="vs-text">vs</div>
              <!-- <div class="spacer-16"></div> -->
              <img class="vs-image" src="/images/logos/icon-dark.svg" width="150px"/>
            </div>
          <!-- </b-col>
        </b-row> -->
      </b-col>
      <b-col sm="1"></b-col>
    </b-row>
  </b-container>


  <b-container>
    <b-row align-h="center">
      <b-col md="2"></b-col>
      <b-col>
          <b-container class="feature-matrix">
            <b-row class="header" align-h="center">
              <b-col cols="6">Compute</b-col>
              <b-col cols="3">Cyclic</b-col>
              <b-col cols="3">Heroku</b-col>
            </b-row>
            <b-row align-h="center">
              <b-col cols="6">Always on</b-col>
              <b-col cols="3">✔︎</b-col>
              <b-col cols="3">Paid</b-col>
            </b-row>
            <b-row align-h="center">
              <b-col cols="6">Inactivity Delay</b-col>
              <b-col cols="3">~200ms</b-col>
              <b-col cols="3">~30s</b-col>
            </b-row>
            <b-row align-h="center">
              <b-col cols="6">Global app deployment</b-col>
              <b-col cols="3">22 regions</b-col>
              <b-col cols="3">2 regions</b-col>
            </b-row>
            <b-row align-h="center">
              <b-col cols="6">Self hosting option (Bring Your Own Cloud)</b-col>
              <b-col cols="3">✔︎</b-col>
              <b-col cols="3"><strong>X</strong></b-col>
            </b-row>
          </b-container>

          <div class="spacer-64"></div>

          <b-container class="feature-matrix">
            <b-row class="header" align-h="center">
              <b-col cols="6">Storage</b-col>
              <b-col cols="3">Cyclic</b-col>
              <b-col cols="3">Heroku</b-col>
            </b-row>
            <b-row align-h="center">
              <b-col cols="6">Integrated database</b-col>
              <b-col cols="3">DynamoDB</b-col>
              <b-col cols="3">PostgreSQL</b-col>
            </b-row>
            <b-row align-h="center">
              <b-col cols="6">Integrated object storage</b-col>
              <b-col cols="3">S3</b-col>
              <b-col cols="3">extra addon</b-col>
            </b-row>
          </b-container>

          <div class="spacer-64"></div>

          <b-container class="feature-matrix">
            <b-row class="header" align-h="center">
              <b-col cols="6">DevX</b-col>
              <b-col cols="3">Cyclic</b-col>
              <b-col cols="3">Heroku</b-col>
            </b-row>
            <b-row align-h="center">
              <b-col cols="6">Push to deploy</b-col>
              <b-col cols="3">✔︎</b-col>
              <b-col cols="3">✔︎</b-col>
            </b-row>
            <b-row align-h="center">
              <b-col cols="6">GitHub app integration</b-col>
              <b-col cols="3">✔︎</b-col>
              <b-col cols="3">✔︎</b-col>
            </b-row>
            <b-row align-h="center">
              <b-col cols="6">Zero-config</b-col>
              <b-col cols="3">✔︎</b-col>
              <b-col cols="3">x</b-col>
            </b-row>
          </b-container>

          <div class="spacer-64"></div>

          <b-container class="feature-matrix">
            <b-row class="header" align-h="center">
              <b-col cols="6">Pricing</b-col>
              <b-col cols="3">Cyclic</b-col>
              <b-col cols="3">Heroku</b-col>
            </b-row>
            <b-row align-h="center">
              <b-col cols="6">Free tier</b-col>
              <b-col cols="3">✔︎</b-col>
              <b-col cols="3"><strong>X</strong></b-col>
            </b-row>
            <b-row align-h="center">
              <b-col cols="6">Consumption based pricing (stop paying for idle capacity)</b-col>
              <b-col cols="3">✔︎</b-col>
              <b-col cols="3">
                <strong>X</strong>
                <small>(discountinued as of 11/28/2022)</small>
              </b-col>
            </b-row>
          </b-container>

          <div class="spacer-64"></div>
      </b-col>
      <b-col md="2"></b-col>
    </b-row>
  </b-container>

  <CtaFullStackApps></CtaFullStackApps>

</div>
</template>


<style scoped>

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
  xmin-width: 75px;
}


.feature-matrix .header {
  background: #2e59c7;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 5px 5px 0px 0px;
}

.feature-matrix .header {
  font-size: 1.5rem;
  text-align: left;
}

.row .col {
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
