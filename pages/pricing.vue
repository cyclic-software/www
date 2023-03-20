
<script>
  const title = "Cyclic.sh Pricing: Start for free pay for what you use, migrate to your own cloud"
  const description = "Free to start - Compare pricing plans that let you grow on your terms. Host in your cloud account when you are ready."
  const imageUrl = 'https://www.cyclic.sh/og/pricing_summary_large_image.png'

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

        {hid: 'og:image', property: 'og:image', content: imageUrl },
        {hid: 'twitter:image', name: 'twitter:image', content: imageUrl },
        {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  }
</script>

<template>
  <div>
    <div class="wrapper gradient-bg">
      <div class="max-w-screen-xl mx-auto">
        <div class="section">
          <div class="container center-align w-container">
            <div class="text-box center-align">
              <h1 class="text-7xl font-black capitalize m-0 mb-4 tracking-tight">
                Pay for what you use.
              </h1>
              <p>
                Consumption based pricing lets you start free and pay as your needs and app grows.
              </p>
              <div class="spacer _48"></div>
            </div>

            <div class="_12-columns align-stretch align-center">
              <div class="column desk-4">
                <div class="pricing-card space-y-4">
                  <div class="top-block"></div>
                  <h2 class="text-4xl font-bold">Free Forever</h2>
                  <p>Generous free tier lets you prototype and learn.</p>
                  <div class="spacer _24"></div>
                  <a href="https://app.cyclic.sh/api/login"
                    @click="sign_up('https://app.cyclic.sh/api/login', $event)"
                  class="button outline-white w-button">Start</a>
                  <div class="spacer _24"></div>
                  <h3 class="no-margin text-2xl">$0<span class="regular">/month</span></h3>
                  <p class="paragraph-small">subject to fair use, quotas are per-app</p>
                  <div class="tick-list w-richtext">
                    <div class="matrix ">
                      <div class="catg">Apps</div> <div class="check">1 app</div>
                      <div class="catg">Inactivity Delay</div> <div class="check">None - Apps Never Sleep</div>
                      <div class="catg">Hourly Limit</div> <div class="check">None - Unlimited</div>
                      <div class="catg">Compute</div> <div class="check">1024 MB RAM</div>
                      <div class="catg">Duration</div> <div class="check">10s</div>
                      <div class="catg">Autoscaling</div> <div class="check">100 x 1024 MB</div>
                      <div class="catg">API Requests</div> <div class="check">10,000/month per app</div>
                      <div class="catg">Languages</div> <div class="check">JavaScript<br>TypeScript<br> Python<sup>*</sup></div>
                      <div class="catg">Repositories</div> <div class="check">Personal</div>
                      <div class="catg">Database</div> <div class="check">1 GB (DynamoDB)</div>
                      <div class="catg">Permanent Storage</div> <div class="check">1 GB (S3)</div>
                      <div class="catg">Builds</div> <div class="check">Unlimited</div>
                      <div class="catg">Edge Locations</div> <div class="check">18+ Cloud Regions</div>
                      <div class="catg">Smart Caching</div> <div class="check">300+ Locations</div>
                      <div class="catg">Precision Cron</div> <div class="check">3 jobs/app</div>
                      <div class="catg">Logs Retention</div> <div class="check">7 Days</div>
                      <div class="catg">SSL Certificates</div> <div class="check">✓</div>
                      <div class="catg">Custom Subdomains</div> <div class="check">✓</div>
                      <div class="catg">Build on <code>git push</code></div> <div class="check">✓</div>
                      <div class="catg">Support</div> <div class="check">Community</div>

                    </div>
                    <br>
                    <br>
                    <p>
                      * Want to try Cyclic with Python?
                      <br>
                      > <a href="https://cyclic.typeform.com/to/baT1BAHZ">Join Wait List</a>

                    </p>
                    <br>
                  </div>
                </div>
              </div>

              <div class="column desk-4">
                <div class="pricing-card blue space-y-4">
                  <div class="top-block blue"></div>
                  <h2 class="text-4xl font-bold">Usage based</h2>
                  <p>
                    Unlock additional developer productivity features.
                  </p>
                  <div class="spacer _24"></div>
                  <a href="https://app.cyclic.sh/#/plan" target="_blank" class="button no-margin w-button">Upgrade</a>
                  <div class="spacer _24"></div>
                  <h3 class="no-margin text-2xl">$3<span class="regular"> /month</span></h3>
                  <p class="paragraph-small">
                    plus consumption charges beyond quota
                  </p>
                  <!-- <p>All of Free plus:</p> -->
                  <div class="tick-list w-richtext">

                    <div class="matrix ">
                      <div class="catg">Apps</div> <div class="check">Unlimited</div>
                      <div class="catg">Accelerated Startup</div> <div class="check">✓</div>
                      <div class="catg">Custom Domains</div> <div class="check">✓</div>
                      <div class="catg">Repositories</div> <div class="check">Personal <br> Private</div>
                      <div class="catg">Duration</div> <div class="check">30s</div>
                      <div class="catg">API Requests</div> <div class="check">$0.50 / 10k invokes</div>
                      <div class="catg">File storage (S3)</div> <div class="check">$0.05 /GB /month</div>
                      <div class="catg">Precision Cron</div> <div class="check">Up to every minute</div>
                      <div class="catg">Branch Environments</div> <div class="check">✓</div>
                      <div class="catg">Support</div> <div class="check">Email</div>
                    </div>
                    <br>
                    <div class="catg">Including everything in "Free Forever"</div>

                  </div>
                  <br>
                  <br>
                  <p>
                    Bring friends, get apps and credits!
                    <br>
                    > <a href="https://app.cyclic.sh/#/plan">Referral Program</a></p>
                </div>
              </div>

              <div class="column desk-4">
                <div class="pricing-card dark-blue space-y-4">
                  <h2 class="text-4xl font-bold">Enterprise Scale</h2>
                  <p>
                    Specialized data governance, security, compliance and auditing handled. Schedule a review
                    and we can tailor a solution that meets your requirements.
                  </p>
                  <p class="paragraph-small"></p>
                  <div class="tick-list w-richtext">
                    <ul>
                      <li>Configurable data retention</li>
                      <li>Log drains</li>
                      <li>Configurable Log Retention</li>
                      <li>Multi-region Active-Active</li>
                      <li>BYO Cloud Account</li>
                      <li>BYO IdP / SSO</li>
                      <li>SOC2/PCI/HIPAA</li>
                      <li>Annual architectural reviews</li>
                      <li>Dedicated relationship manager</li>
                    </ul>
                  </div>

                  <div class="spacer _48"></div>

                  <div style="width: 100%; text-align:center;">
                    <a style="display: inline-block;"
                      target="_blank" href="https://cyclic.typeform.com/to/HNNO8Bkp"
                      class="button w-button">Schedule a Review</a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="spacer _64"></div>

        <!--  <CtaLaunchHelloWorld></CtaLaunchHelloWorld> -->
      </div>

    </div>
  </div>
</template>

<script>
export default {
    methods:{
      async sign_up(url, e){
          try{
              let session_seconds = parseInt(e.timeStamp/1000)
                await gtag('event', 'cta_pricing_free_forever', {
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
.col-2 {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
@media screen and (max-width: 991px) {

  .col-2 {
    columns: 1;
    -webkit-columns: 1;
    -moz-columns: 1;
  }
}

.matrix{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 15px;
  /* color: var(--h-white); */
  font-size: 18px;
  justify-items: left;
  text-align: left;;
}

.catg{
  font-size: 15px;
  color: var(--h-white);
}
.catg:before{
  width: 10px;
  height: 10px;
  content: '';
  padding-left: 20px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNSAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjUgMS41TDUgMTBMMSA2IiBzdHJva2U9IiMyNDVGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=);
  background-position: 0px 6px;
  background-size: 16px;
  background-repeat: no-repeat;
}

.matrix .check{
  color: #dce3f0;
  line-height: 1.25em;
}

</style>
