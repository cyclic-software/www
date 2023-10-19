<template>
  <section id="subscribe-form" class="common-section border !border-neutral-700 rounded-2xl w-full
  lg:w-[80%] px-7 py-10 bg-neutral-800/20">
    <div class="flex flex-col items-center text-center">
      <h2 class="font-bold text-4xl mb-4">Subscribe to posts</h2>
      <p>Enter your email If you would like to get an email the next time we post.<br>We post about ~1-2x per month, and up to once a month about company news.<br></p>
    </div>
    
    <div class="mt-4">
      <div id="embedded-form"></div>
    </div>
  </section>
</template>

<script>
  // hbspt = require('static/hubspot/forms/shell.js')
  export default({
    data() {
      return {
        create: true
      }
    },
    mounted() {
      console.log(`in HubspotBlogForm create: ${this.create}`)
      if (this.create) {
        this.create = false
        console.log('about to create form')
        window.hbspt.forms.create({
          region: "na1",
          portalId: "9213379",
          formId: "37c53da9-83fc-4c77-af25-644648ce2eb2",
          target: '#embedded-form', // notice we target the div id
        });
      }
    },
    head: {
      script: [
        {
          // src: '@static/hubspot/forms/shell.js'
          src: 'https://js.hsforms.net/forms/shell.js',
          async: true
        }
      ]
    }
  })
</script>
