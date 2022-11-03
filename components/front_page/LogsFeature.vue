<template>
    <b-container class="hubble">
      <b-row>
        <b-col sm="6" align-self="center" >
          <h2 class="metal">Complete Visibility</h2>
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
              <video autoplay loop muted>
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
export default {
  data: {
    scrollPosition: null
  },
  
  methods: {
    updateScroll() {
      // console.log(this.scrollPosition)
      console.log(this.$el.getBoundingClientRect().top)
      // this.scrollPosition = window.scrollY
    }
  },
  
  mounted() {
    // window.removeEventListener('scroll', this.updateScroll)
    // window.addEventListener('scroll', this.updateScroll);
  },
  destroy() {
    // window.removeEventListener('scroll', this.updateScroll)
  }
}
</script>
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


.hubble {
  position: relative;
  padding: 100px;
  padding-top: 70px;
  height: 400px;
  display: block;
  /* background-image: url('/images/hubble.jpg'); */
  background-size: cover;
  /* background-position: bottom; */

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

</style>