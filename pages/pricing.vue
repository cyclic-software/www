
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
      <div class="max-w-screen-xl my-10 mx-auto px-4 sm:px-5 lg:px-0 space-y-12">
        <!-- ******** PAGE TITLE ******** -->
        <div class="w-full lg:w-max mx-auto text-center">
          <h1 class="text-6xl lg:text-7xl font-black capitalize m-0 mb-3 tracking-tight">
            Pay for what you use.
          </h1>
          <p class="text-lg text-neutral-300">
            Usage based pricing lets you start free and pay as your needs and app grows.
          </p>
        </div>

        <!-- ******** PLANS ******** -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          <!-- ****** FREE PLAN ****** -->
          <div class="flex flex-col gap-7 p-6 border !border-neutral-800
          bg-neutral-800/10 rounded-2xl hover:!border-white
          transition">
            <div class="space-y-4">
              <h4 class="text-3xl font-semibold">Free Forever</h4>
              <p class="text-neutral-300">Generous free tier to help you prototype and learn.</p>
            </div>

            <div class="space-y-5">
              <div class="flex gap-2">
                <span class="text-primary text-2xl font-bold">$</span>

                <p class="text-7xl text-white font-semibold">
                  0
                </p>

                <div class="">/ month</div>
              </div>

              <a
                href="https://app.cyclic.sh/api/login"
                @click="sign_up('https://app.cyclic.sh/api/login', $event)"
                class="w-full flex items-center justify-center rounded-xl py-3 px-6
                bg-primary text-white font-semibold text-lg hover:no-underline cursor-pointer
                hover:-translate-y-1 transition"
              >
                Start
              </a>

              <hr class="border-neutral-800">

              <div class="space-y-2 ">
                <p class="mb-4 text-neutral-300">Subject to fair use. Quotas are per app.</p>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">1 app</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">No inactivity delay</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">No hourly limit</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">1024 MB RAM Compute</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">10s duration</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">100 * 1024 MB Autoscaling</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">10 000 API requests / month</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Javascript, Typescript, Python<sup>BETA</sup>, Go<sup>BETA</sup></p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Personal Repositories</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">1 GB DynamoDB Database</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">1 GB S3 Storage</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Unlimited Builds</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">18+ Cloud Regions (Edge Locations)</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">300+ Locations (Smart Caching)</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">3 jobs / app (Precision Cron)</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">7-Day Log Retention</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">SSL Certificate</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Custom Subdomain</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Build on Git Push</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Community Support</p>
                </div>

              </div>
            </div>
          </div>

          <!-- ****** BUILD PLAN ****** -->
          <div class="flex flex-col gap-7 p-6 border !border-neutral-800
          bg-neutral-800/10 rounded-2xl hover:!border-white
          transition">
            <div class="space-y-4">
              <h4 class="text-3xl font-semibold">Usage Based</h4>
              <p class="text-neutral-300">Pay for what you use. Link value to cost.</p>
            </div>

            <div class="space-y-5">
              <div class="flex gap-2">
                <span class="text-primary text-2xl font-bold">$</span>

                <p class="text-7xl text-white font-semibold">
                  1
                </p>

                <div class="">/ app environment / month</div>
              </div>

              <a
                href="https://app.cyclic.sh/#/plan"
                target="_blank"
                class="w-full flex items-center justify-center rounded-xl py-3 px-6
                bg-primary text-white font-semibold text-lg hover:no-underline cursor-pointer
                hover:-translate-y-1 transition"
              >
                Upgrade
              </a>

              <hr class="border-neutral-800">

              <div class="space-y-2 ">
                <p class="mb-4 text-neutral-300">Consumption charges beyond quota.</p>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">All of Free Forever</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">App Environments</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Accelerated Startup</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Custom Domains</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Personal & Private Repositories</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">30s Duration</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">$0.50 / 10,000 API Requests</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">$0.05 / GB / month (S3 Storage)</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Precision Cron every minute</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Branch Environments</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Email Support</p>
                </div>

                <div class="mt-4 text-neutral-300">
                  Bring friends, earn credits!
                  <a class="text-primary" href="https://app.cyclic.sh/#/plan">Referral Program</a>.
                </div>
              </div>
            </div>
          </div>

          <!-- ****** TEAM PLAN ****** -->
          <div class="flex flex-col gap-7 p-6 border !border-neutral-800
          bg-neutral-800/10 rounded-2xl hover:!border-white
          transition">
            <div class="space-y-4">
              <h4 class="text-3xl font-semibold">Team</h4>
              <p class="text-neutral-300">Unlock additional developer productivity features.</p>
            </div>

            <div class="space-y-5">
              <div class="flex gap-2">
                <span class="text-primary text-2xl font-bold">$</span>

                <p class="text-7xl text-white font-semibold">
                  29
                </p>

                <div class="ml-1">/ team member <p class="text-sm text-neutral-300">When paid annually.</p></div>
              </div>

              <a
                href="https://cyclic.typeform.com/to/HNNO8Bkp"
                target="_blank"
                class="w-full flex items-center justify-center rounded-xl py-3 px-6
                bg-primary text-white font-semibold text-lg hover:no-underline cursor-pointer
                hover:-translate-y-1 transition"
              >
                Get Started
              </a>

              <hr class="border-neutral-800">

              <div class="space-y-2 ">
                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Unlimited Apps</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Personal, Private & Organization Repositories</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Unlimited Precision Crons</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Chat Support</p>
                </div>

                <div class="flex items-center gap-2">
                  <i class="ri-checkbox-circle-fill text-primary"></i>
                  <p class="text-neutral-200">Usage-based charges beyond quota</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- ****** ENTERPRISE PLAN ****** -->
        <div class="flex flex-col gap-7 p-6 border !border-neutral-800
        bg-neutral-800/10 rounded-2xl hover:!border-white
        transition">
          <div class="space-y-4">
            <h4 class="text-3xl font-semibold">Enterprise Scale</h4>
            <p class="text-neutral-300">
              Specialized data governance, security, compliance and auditing handled. Schedule a review
              and we can tailor a solution that meets your requirements.
            </p>
          </div>

          <div class="space-y-5">
            <hr class="border-neutral-800">

            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <i class="ri-checkbox-circle-fill text-primary"></i>
                <p class="text-neutral-200">Configurable data retention</p>
              </div>

              <div class="flex items-center gap-2">
                <i class="ri-checkbox-circle-fill text-primary"></i>
                <p class="text-neutral-200">Log drains</p>
              </div>

              <div class="flex items-center gap-2">
                <i class="ri-checkbox-circle-fill text-primary"></i>
                <p class="text-neutral-200">Configurable Log Retention</p>
              </div>

              <div class="flex items-center gap-2">
                <i class="ri-checkbox-circle-fill text-primary"></i>
                <p class="text-neutral-200">Multi-region Active-Active</p>
              </div>

              <div class="flex items-center gap-2">
                <i class="ri-checkbox-circle-fill text-primary"></i>
                <p class="text-neutral-200">BYO Cloud Account</p>
              </div>

              <div class="flex items-center gap-2">
                <i class="ri-checkbox-circle-fill text-primary"></i>
                <p class="text-neutral-200">BYO IdP / SSO</p>
              </div>

              <div class="flex items-center gap-2">
                <i class="ri-checkbox-circle-fill text-primary"></i>
                <p class="text-neutral-200">SOC2/PCI/HIPAA</p>
              </div>

              <div class="flex items-center gap-2">
                <i class="ri-checkbox-circle-fill text-primary"></i>
                <p class="text-neutral-200">Annual architectural reviews</p>
              </div>

              <div class="flex items-center gap-2">
                <i class="ri-checkbox-circle-fill text-primary"></i>
                <p class="text-neutral-200">Dedicated relationship manager</p>
              </div>
            </div>
          </div>

          <a
            href="https://cyclic.typeform.com/to/HNNO8Bkp"
            target="_blank"
            class="w-full flex items-center justify-center rounded-xl py-3 px-6
            bg-primary text-white font-semibold text-lg hover:no-underline cursor-pointer
            hover:-translate-y-1 transition lg:max-w-xs ml-auto"
          >
            Schedule a Review
          </a>
        </div>

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
