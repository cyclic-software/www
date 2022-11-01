<template>
    <b-container class=" feature-container">
        <b-row>
      <b-col sm="4">
        <div class="feature1">
          <h3>No Sleep</h3>
          <div class="caption">
            Cyclic Apps are available immediately on demand. 
            Even on free tier. 
            Say hello to fast apps. Say goodbye to waiting
            30 seconds for containers to be provisioned and started.
          </div>
        </div>
      </b-col>
      <b-col sm="4">
        <div class="feature1">
          <h3>Worldwide</h3>
        </div>
      </b-col>
      <b-col sm="4">
        <div class="feature1">
          <h3>Database and Storage</h3>
        </div>
      </b-col>
      <b-col sm="4">
        <div class="feature1">
          <h3>Precision Cron</h3>
        </div>
      </b-col>

      <b-col sm="4">
        <div class="feature1">
          <h3>Hyper scale</h3>
        </div>
      </b-col>

      <b-col sm="4">
        <div class="feature1">
          <h3>Serverless</h3>
        </div>
      </b-col>

    </b-row>

  </b-container>

</template>

<style scoped>
.f-header{
    font-size:20px;
    font-weight:500;
    text-align: center;;
    color: var(--h-white);
    border-right: 2px solid var(--h-white);
}
h4 {
    color: var(--h-white);
    font-size: 20px;
}
.feature-container{
    border: 1px solid #152553;
    padding: 20px;
    border-radius: 8px;;
    box-shadow: 0px 0px 60px 4px #162859;
}

/* @keyframes glow{
  to {
    box-shadow: 0px 0px 30px 20px #535FED;
  }
} */
.build-things{
    display: flex
}
.build-thing{
    width: 20%;
    /* height: 30px; */
    text-align: center;;
    font-size: 20px;
    font-weight: 100;
}
</style>