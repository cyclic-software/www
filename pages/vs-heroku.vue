<template>
<div class="wrapper">
  <div class="section hero">
    <p>
      Heroku is the one of the best known PaaS (Platform as a Service) vendors.
      It was founded in 2007 (two years before Node.js was first released).
    </p>
  </div>

  <b-container>
    <b-row class="feature-matrix">
      <b-col cols="8">1 of 3</b-col>
      <b-col>2 of 3</b-col>
      <b-col>3 of 3</b-col>
    </b-row>
  </b-container>

  <div class="section">
    <h2>Similar features of both:</h2>
    <p>
      Both Heroku and Cyclic offer a similar set of standard basic features.
    </p>
    <ul>
      <li>Push to deploy</li>
      <li>GitHub App integration</li>
      <li>$0 / month free tier</li>
    </ul>

    <h2>Where Cyclic does better:</h2>
    <p>
      Cyclic shines due to a modern cloud architecture and serverless design. If your service load is bursty or
      if you need to self host.
    </p>
    <ul>
      <li>No sleep - 10x-20x faster first requests (sub-1s vs 30s)</li>
      <li>No complicated cli: use the tools you know and love</li>
      <li>Zero Config - auto build, deploy and launch</li>
      <li>Self host in your own AWS account</li>
      <li>Deployed in 22 regions globally for faster response times</li>
      <li>Eject at anytime</li>
      <li>No technical lock-in</li>
      <li>No data lock-in</li>
      <li>No more paying for idle Dynos. Pay for the requests you use, autoscale from the start</li>
    </ul>
  </div>
</div>
</template>


<style scoped>

.feature-matrix b-col {
  border: 1px;
}

</style>
