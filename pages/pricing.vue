
<script>
  const title = "Cyclic.sh Pricing: Start for free pay for what you use, migrate to your own cloud"
  const description = "Free to start - Compare pricing plans that let you grow on your terms. Host in your cloud account when you are ready."
  const imageUrl = 'https://www.cyclic.sh/og/pricing_summary_large_image.png'

  export default {
    data() {
      return {
        stripe: (process.env.dev)? {
          solo: "https://buy.stripe.com/test_3cs6qA6i7awJczmdQQ",
          grow: "https://buy.stripe.com/test_14kbKUfSH8oBare3cd"
        } : {
          solo: "https://buy.stripe.com/dR6g091JE2e45XObII",
          grow: "https://buy.stripe.com/3cs01b0FAaKAfyo7st"
        }
      }
    },
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
    <div class="wrapper">
      <div class="section">
        <div class="container center-align w-container">
          <div class="text-box center-align">
            <h1>Pay for what you use.</h1>
            <p>
              Consumption based pricing lets you start free and pay as your needs and app grows.
            </p>
            <div class="spacer _48"></div>
          </div>
          <div class="_12-columns align-stretch align-center">
            <div class="column desk-4">
              <div class="pricing-card">
                <div class="top-block"></div>
                <h2>Free Forever</h2>
                <p>Generous free tier lets you prototype and learn.</p>
                <div class="spacer _24"></div>
                <a href="https://app.cyclic.sh/api/login" class="button outline-white w-button">Start</a>
                <div class="spacer _24"></div>
                <h3 class="no-margin">$0<span class="regular">/month</span></h3>
                <p class="paragraph-small">subject to fair use</p>
                <!-- <p></p> -->
                <div class="tick-list w-richtext">
                  <ul>
                    <li>3 apps</li>
                    <li>100,000 API requests</li>
                    <li>1GB runtime memory</li>
                    <li>512MB /tmp storage</li>
                    <li>1GB Object Storage (AWS S3)</li>
                    <li>1GB Database Storage (AWS DynamoDB)</li>
                    <li>Unlimited blazing fast builds</li>
                    <li>Public GitHub repositories</li>
                    <li>Hosted close to you</li>
                    <li>3 Cron tasks per app</li>
                    <li>7 day log retention</li>
                    <li>Community support</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="column desk-4">
              <div class="pricing-card blue">
                <div class="top-block blue"></div>
                <h2>Solo</h2>
                <p>
                  Unlock additional developer productivity features.
                </p>
                <div class="spacer _24"></div>
                <a :href="stripe.solo" target="_blank" class="button no-margin w-button">Upgrade</a>
                <div class="spacer _24"></div>
                <h3 class="no-margin">$9<span class="regular"> /month</span></h3>
                <p class="paragraph-small">
                  plus consumption charges beyond quota
                </p>
                <p>All of Free plus:</p>
                <div class="tick-list w-richtext">
                  <ul>
                    <li>10 apps</li>
                    <li>Private GitHub repositories</li>
                    <li>10 Cron tasks per app</li>
                    <li>Search structured logs<sup>*</sup></li>
                    <li>Branch based preview envs</li>
                    <li>30 day log retention</li>
                    <li>Email support</li>
                  </ul>
                </div>
                <p>(Learn about our <a href="https://app.cyclic.sh/#/account">referral program</a>)</p>
                <p><sup>*</sup> Coming soon</p>
              </div>
            </div>
            <div class="column desk-4">
              <div class="pricing-card">
                <div class="top-block"></div>
                <h2>Grow</h2>
                <p>
                  Take your company and apps to the next level.
                </p>
                <div class="spacer _24"></div>
                <a :href="stripe.grow" target="_blank" class="button no-margin w-button">Buy</a>
                <div class="spacer _24"></div>
                <h3 class="no-margin">$299<span class="regular"> /month</span></h3>
                <p class="paragraph-small"><br></p>
                <p>All of Solo plus:</p>
                <div class="tick-list w-richtext">
                  <ul>
                    <li>Unlimited apps</li>
                    <li>Unlimited users</li>
                    <li>Organization GitHub accounts</li>
                    <li>Unlimited Cron tasks</li>
                    <li>90 day log retention</li>
                    <li>Chat support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="section">
        <div class="container center-align w-container">
          <div class="_12-columns align-stretch align-center">
            <div class="column desk-2"></div>
            <div class="column desk-8">
              <div class="pricing-card dark-blue">
                <h2>Enterprise Scale</h2>
                <p>
                  Specialized data governance, security, compliance and auditing handled. Schedule a review
                  and we can tailor a solution that meets your requirements.
                </p>
                <p class="paragraph-small"></p>
                <div class="tick-list w-richtext">
                  <ul>
                    <li>Configurable data retention</li>
                    <li>Log drains</li>
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
            <div class="column desk-2"></div>
          </div>
        </div>
      </div>

      <div class="spacer _64"></div>

      <!--  <CtaLaunchHelloWorld></CtaLaunchHelloWorld> -->

    </div>
  </div>
</template>


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

</style>
