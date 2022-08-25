<template>
<div class="wrapper">
  <div class="section hero">
    <p>
      Heroku is the one of the best known PaaS (Platform as a Service) vendors.
      It was founded in 2007 (two years before Node.js was first released). Both
      Heroku and Cyclic offer a similar set of standard basic features. Here is a
      breakdown of some of the ways there compare against each other.
    </p>
  </div>

  <b-container class="feature-matrix">
    <b-row class="header-row">
      <b-col cols="6">Compute</b-col>
      <b-col>Cyclic</b-col> <b-col>Heroku</b-col>
    </b-row>
    <b-row>
      <b-col cols="6">Always on</b-col>
      <b-col>✔︎</b-col><b-col>Paid</b-col>
    </b-row>
    <b-row>
      <b-col cols="6">Cold start time</b-col>
      <b-col>~200ms</b-col><b-col>~30s</b-col>
    </b-row>
    <b-row>
      <b-col cols="6">Global app deployment</b-col>
      <b-col>22 regions</b-col><b-col>2 regions</b-col>
    </b-row>
    <b-row>
      <b-col cols="6">Self hosting option (Bring Your Own Cloud)</b-col>
      <b-col>✔︎</b-col><b-col>x</b-col>
    </b-row>
  </b-container>

  <div class="spacer-64"></div>

  <b-container class="feature-matrix">
    <b-row class="header-row">
      <b-col cols="6">Storage</b-col>
      <b-col>Cyclic</b-col> <b-col>Heroku</b-col>
    </b-row>
    <b-row>
      <b-col cols="6">Integrated database</b-col>
      <b-col>DynamoDB</b-col><b-col>PostgreSQL</b-col>
    </b-row>
    <b-row>
      <b-col cols="6">Integrated object storage</b-col>
      <b-col>S3</b-col><b-col>extra addon</b-col>
    </b-row>
  </b-container>

  <div class="spacer-64"></div>

  <b-container class="feature-matrix">
    <b-row class="header-row">
      <b-col cols="6">DevX</b-col>
      <b-col>Cyclic</b-col><b-col>Heroku</b-col>
    </b-row>
    <b-row>
      <b-col cols="6">Push to deploy</b-col>
      <b-col>✔︎</b-col><b-col>✔︎</b-col>
    </b-row>
    <b-row>
      <b-col cols="6">GitHub app integration</b-col>
      <b-col>✔︎</b-col><b-col>✔︎</b-col>
    </b-row>
    <b-row>
      <b-col cols="6">Zero-config</b-col>
      <b-col>✔︎</b-col><b-col>x</b-col>
    </b-row>
  </b-container>

  <div class="spacer-64"></div>

  <b-container class="feature-matrix">
    <b-row class="header-row">
      <b-col cols="6">Pricing</b-col>
      <b-col>Cyclic</b-col> <b-col>Heroku</b-col>
    </b-row>
    <b-row>
      <b-col cols="6">Free tier</b-col>
      <b-col>✔︎</b-col><b-col>✔︎</b-col>
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

.feature-matrix {
  border: 1px;
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
