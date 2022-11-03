<template>
    <b-container>
      <div class="">
      <b-row>

        <b-col align-self="center"  md="4">
            <div class="feature-container">
              <div class="text-center" >
              <br>
              <h2 class="metal">Code Scanning</h2>
              <br>
            </div>
            <p class="text-center">
              Cyclic Apps are <strong>available immediately</strong> and on demand. 
              <br>
              Say goodbye to waiting 30 seconds for containers to be spun up.
              <br>
              <em>Even on free tier.</em> 
            </p>
          </div>
        </b-col>
        

        <b-col align-self="center"  md="4">
            <div class="feature-container">
              <div class="text-center" >
              <br>
              <h2 class="metal">Instant Update</h2>
              <br>
            </div>
            <p class="text-center">
              Cyclic Apps are <strong>available immediately</strong> and on demand. 
              <br>
              Say goodbye to waiting 30 seconds for containers to be spun up.
              <br>
              <em>Even on free tier.</em> 
            </p>
          </div>
        </b-col>
        


        <b-col align-self="center"  md="4">
            <div class="feature-container">
              <div class="text-center" >
              <br>
              <h2 class="metal">Built-In Auth</h2>
              <br>
            </div>
            <p class="text-center">
              Cyclic Apps are <strong>available immediately</strong> and on demand. 
              <br>
              Say goodbye to waiting 30 seconds for containers to be spun up.
              <br>
              <em>Even on free tier.</em> 
            </p>
          </div>
        </b-col>
        
      </b-row>
      <b-row>

        <b-col align-self="center"  md="4">
        </b-col>
        

        <b-col align-self="center"  md="4">
            <div class="feature-container">
              <div class="text-center" >
              <br>
              <h2 class="metal">Fully Serverless</h2>
              <br>
            </div>
            <p class="text-center">
              Cyclic Apps are <strong>available immediately</strong> and on demand. 
              <br>
              Say goodbye to waiting 30 seconds for containers to be spun up.
              <br>
              <em>Even on free tier.</em> 
            </p>
          </div>
        </b-col>
        


        <b-col align-self="center"  md="4">
        </b-col>
        
      </b-row>

      </div>
    </b-container>

</template>

<style scoped>
h2{
  font-size: 30px;
  font-weight: 100;
}
p {
  color: var(--h-white)
}
p strong {
  color: orange;;
}



.f-header{
    font-size:20px;
    font-weight:500;
    text-align: center;;
    color: var(--h-white);
    border-right: 2px solid var(--h-white);
}
.f-image{
    /* border: 1px solid #152553;
    padding: 20px;
    border-radius: 8px;; */
    font-size: 110px;
    /* text-shadow: 0px 0px 80px #324f9f; */
    text-shadow: 0px 0px 80px #ca95ffa6;
    color: black;
}

.worldwide{
  background-image: url("/images/earth_rise.png");
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;

}
.feature-container{
    /* border: 1px solid #152553; */
    padding: 20px;
    border-radius: 8px;;
    /* box-shadow: 21px 0px 124px -26px #3f1841; */
    box-shadow: 21px 0px 124px -26px #162859;
    min-height: 300px;
    padding: 100px 50px;
    /* margin: auto 10px; */
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