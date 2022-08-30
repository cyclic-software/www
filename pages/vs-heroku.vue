<template>
<div class="wrapper">
<!--
  <b-container>
    <b-row align-h="center">
      <b-col cols="2"></b-col>
      <b-col>



      </b-col>
      <b-col cols="2"></b-col>
    </b-row>
  </b-container> -->


  <div class="section hero">
    <b-container>
      <b-row align-h="center">
        <b-col cols="8">
          <p>
            Heroku is the one of the best known PaaS (Platform as a Service) vendors.
            It was founded in 2007 (two years before Node.js was first released). Both
            Heroku and Cyclic offer a similar set of standard basic features. Here is a
            breakdown of some of the ways there compare against each other.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>

  <b-container class="feature-matrix">
    <b-row class="header" align-h="center">
      <b-col cols="4">Compute</b-col>
      <b-col cols="2">Cyclic</b-col>
      <b-col cols="2">Heroku</b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="4">Always on</b-col>
      <b-col cols="2">✔︎</b-col>
      <b-col cols="2">Paid</b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="4">Cold start time</b-col>
      <b-col cols="2">~200ms</b-col>
      <b-col cols="2">~30s</b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="4">Global app deployment</b-col>
      <b-col cols="2">22 regions</b-col>
      <b-col cols="2">2 regions</b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="4">Self hosting option (Bring Your Own Cloud)</b-col>
      <b-col cols="2">✔︎</b-col>
      <b-col cols="2"><strong>X</strong></b-col>
    </b-row>
  </b-container>

  <div class="spacer-64"></div>

  <b-container class="feature-matrix">
    <b-row class="header" align-h="center">
      <b-col cols="4">Storage</b-col>
      <b-col cols="2">Cyclic</b-col>
      <b-col cols="2">Heroku</b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="4">Integrated database</b-col>
      <b-col cols="2">DynamoDB</b-col>
      <b-col cols="2">PostgreSQL</b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="4">Integrated object storage</b-col>
      <b-col cols="2">S3</b-col>
      <b-col cols="2">extra addon</b-col>
    </b-row>
  </b-container>

  <div class="spacer-64"></div>

  <b-container class="feature-matrix">
    <b-row class="header" align-h="center">
      <b-col cols="4">DevX</b-col>
      <b-col cols="2">Cyclic</b-col>
      <b-col cols="2">Heroku</b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="4">Push to deploy</b-col>
      <b-col cols="2">✔︎</b-col>
      <b-col cols="2">✔︎</b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="4">GitHub app integration</b-col>
      <b-col cols="2">✔︎</b-col>
      <b-col cols="2">✔︎</b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="4">Zero-config</b-col>
      <b-col cols="2">✔︎</b-col>
      <b-col cols="2">x</b-col>
    </b-row>
  </b-container>

  <div class="spacer-64"></div>

  <b-container class="feature-matrix">
    <b-row class="header" align-h="center">
      <b-col cols="4">Pricing</b-col>
      <b-col cols="2">Cyclic</b-col>
      <b-col cols="2">Heroku</b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="4">Free tier</b-col>
      <b-col cols="2">✔︎</b-col>
      <b-col cols="2"><strong>X</strong></b-col>
    </b-row>
  </b-container>

  <div class="spacer-64"></div>

  <div class="section">
    <p>
      Cyclic shines due to a modern cloud architecture and serverless design. If your service load is bursty or
      if you need to self host.
    </p>
    <ul>
      <li>No complicated cli: use the tools you know and love</li>
      <li>Zero Config - auto build, deploy and launch</li>
      <li>Eject at anytime</li>
      <li>No technical lock-in</li>
      <li>No data lock-in</li>
      <li>No more paying for idle Dynos. Pay for the requests you use, autoscale from the start</li>
    </ul>
  </div>
</div>
</template>


<style scoped>

.feature-matrix .header {
  background: darkblue;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 3px 3px 0px 0px;
}

.feature-matrix .header {
  font-size: 1.5rem;
  text-align: left;
}

.row .col {
  text-align: center;
}

.feature-matrix .row:not(.header) {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    /* background-color: rgba(86,61,124,.15); */
    border: 1px solid white;/* rgba(86,61,124,.2); */
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
