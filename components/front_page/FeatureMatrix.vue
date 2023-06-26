<template>
    <b-container>
        <b-row>
          <b-col sm="2"></b-col>
            <b-col class=" text-center" sm="8" align-self="center">
                <div class="matrix-header">
                    Researching Cyclic? Just want the specs?
                </div>
                <div class="matrix-header mt-2">
                  Here are <strong>free</strong> tier features:
                </div>
            </b-col>
            <b-col sm="2"></b-col>
        </b-row>


      <b-row>
        <b-col align-self="center"  lg="3">
        </b-col>

        <b-col align-self="center"   lg="6">
          <div class="matrix mt-5">
            <div>Inactivity Timeout/Delay</div> <div class="check">None - Apps Never Sleep</div>
            <div>Hourly Limit</div> <div class="check">None - Unlimited</div>
            <div>Compute</div> <div class="check">1024 MB RAM</div>
            <div>Autoscaling</div> <div class="check">10 x 1024 MB</div>
            <div>API Requests</div> <div class="check">100,000/month per app</div>
            <div>Languages</div> <div class="check">JavaScript<br>TypeScript<br> Python<sup>BETA</sup><br> Go<sup>BETA</sup>
            </div>
            <div>Integrated Database</div> <div class="check">1 GB</div>
            <div>Integrated Object Storage</div> <div class="check">1 GB</div>
            <div>Builds</div> <div class="check">Unlimited</div>
            <div>Edge Locations</div> <div class="check">Closest of 18+ Regions</div>
            <div>Smart Caching</div> <div class="check">300+ Locations</div>
            <div>Precision Cron</div> <div class="check">3 jobs/app</div>
            <div>Logs History - Application</div> <div class="check">7 Days</div>
            <div>Logs History - Network</div> <div class="check">7 Days</div>
            <div>SSL Certificates</div> <div class="check">✓</div>
            <div>Custom Subdomains</div> <div class="check">✓</div>
            <div>Build on <code>git push</code></div> <div class="check">✓</div>

          </div>

        </b-col>
        <b-col align-self="center"  lg="3">
        </b-col>

      </b-row>

      <b-row class="mt-5">
          <b-col sm="4"></b-col>
            <b-col class=" text-center" sm="4" align-self="center">
              <b-button
                  href="https://app.cyclic.sh/api/login"
                  class="m-1"
                  @click="sign_up('https://app.cyclic.sh/api/login', $event)"
                  variant="primary" size="lg">
                    <i class="fab fa-github mr-2"></i> Deploy Now
                  </b-button>

            </b-col>
            <b-col sm="4"></b-col>
      </b-row>

    </b-container>

</template>

<script>

import ExampleCode from "./ExampleCode.vue";

export default {
  components:{
    ExampleCode
  },
  methods:{
    async sign_up(url, e){
          try{
              let session_seconds = parseInt(e.timeStamp/1000)
                await gtag('event', 'cta_matrix_deploy', {
                'event_label' : window.location.href,
                'event_category' : 'sign_up',
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

.btn-primary, .btn-primary:active{
    background-color: var(--pink);
    border-color: var(--pink);

}
.btn-primary:hover, .btn-primary:focus{
    background-color: var(--darkpink);
}

.matrix-header{
  margin: 0 40px;
    /* width: 20%; */
    /* height: 30px; */
    text-align: center;;
    font-size: 25px;
    line-height: 35px;;
    letter-spacing: 2px;;
    font-weight: 100;
}
.matrix-header strong{
  color: orange;;
}

.matrix{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 10px;
  color: var(--h-white);
  font-size: 18px;
  justify-items: left;
  text-align: left;;
}

.check{
  /* color: orange; */
  color: #9CCC65;
  line-height: 1.25em;
}

@media screen and (max-width: 991px) {
}
</style>
