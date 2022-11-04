<template>
    <b-container class="hubble">
      <b-row>
        <b-col sm="6" align-self="center" >
          <h2 class="">Complete Visibility</h2>
          <p>
            Know what's going on in the backend in real time.
            <br>
            A unique <strong>fusion of API and application logs</strong> tells the complete story of each request. 
            <br>
            </p>
        </b-col>
        <b-col sm="6">

          <div class="logs-header">
            <div class="text-center video_box" style="max-width:450px; overflow: hidden;">
              <video playsinline="playsinline" autoplay muted loop>
                    <img src="/images/logs_demo.png" title="Your browser does not support the <video> tag"/>
                  <source src="/images/logs_demo.mp4" type="video/mp4">
                Your browser does not support the video tag.
                </video>  
            </div>
            <div class="metrics-img">
              <img src="/images/metrics.png"/>
            </div>
          </div>

        </b-col>
      

    </b-row>

  </b-container>

</template>

<script>
</script>
<style scoped>
@import './front_page.css';
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


.hubble {
  position: relative;
  padding: 100px;
  padding-top: 70px;
  height: 400px;
  display: block;
  background-size: cover;
  background-image: radial-gradient(circle at bottom,rgba(0,0,0,0) 1%,black),url(/images/logs.png);
  background-position-y: -57px;
  background-repeat: no-repeat;

}


.logs-header{
  height: 100%;
  width: 600px;
  position: relative;
  margin: auto;
  /* box-shadow: 21px 0px 124px -26px #162859; */
}
.metrics-img{
  position:absolute;
  bottom: -30px;
  width: 300px;
  right: 30px;
  

}



@media screen and (max-width: 991px) {
    .logs-header{
      max-width: 100%;;
      margin-top:30px;
    }


    .hubble{
        padding: 10% !important;
        height: 450px !important; 
    }

    .metrics-img{
      display: block;
    }
  
  

  }
  
  
</style>