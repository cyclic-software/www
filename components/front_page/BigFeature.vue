<template>
    <b-container>
      <div class="">
      <b-row>
        <b-col align-self="center"  md="4">
          <div class="feature-container">
            <div class="text-center" >
            <div class="f-image"><i class="fas fa-bolt"></i></div>
            <br>
            <br>
            <h1 class="metal">No Sleep</h1>
            <br>
            <br>
          </div>
          <p class="text-center">
            Cyclic Apps are <strong>available immediately</strong> and on demand. 
            <br>
            <br>
            Say goodbye to waiting 30 seconds for containers to be spun up.
            <br>
            <br>
            <em>Even on free tier.</em> 

          </p>
          </div>
        </b-col>
        
        <b-col align-self="center"  md="4">
          <div class="feature-container worldwide">
            <div class="text-center" >
            <h1 class="metal">Worldwide</h1>
            <br>
            <br>
          </div>
          <p class="text-center">
            Code is deployed to where you are. 
            <br>
            <br>
            <strong>Smart caching</strong> helps you deliver the best performance globally.
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>

          </p>
          </div>
        </b-col>

        <b-col align-self="center"  md="4">
          <div class="feature-container">
            <div class="text-center" >
            <div class="f-image"><i class="fas fa-rocket"></i></div>
            <br>
            <br>
            <h1 class="metal">Hyper-Scale</h1>
            <br>
            <br>
          </div>
          <p class="text-center">
            Scale up and down <strong>instantly</strong>.
            <br>
            <br>
            1GB serverless compute handles <strong>EACH individual request</strong>.
            <br>
            <br>

          </p>
          </div>
        </b-col>
      </b-row>

      </div>
    </b-container>

</template>

<style scoped>
em{
  color: var(--pink)
}
p {
  color: var(--h-white)
}
p strong {
  color: white;
}
.metal{
  color: rgb(255,242,181);
  background-image: linear-gradient(rgb(255 255 255) 42%, rgb(183 183 183) 73%);
    -webkit-background-clip:text;
	-webkit-text-fill-color: transparent;
}
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
.f-image{
    /* border: 1px solid #152553;
    padding: 20px;
    border-radius: 8px;; */
    font-size: 110px;
    text-shadow: 0px 0px 80px #95b2ff;
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
    box-shadow: 21px 0px 124px -26px #162859;
    min-height: 500px;
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