<template>
  <section id="subscribe-form" class="subscribe-form wf-section">
    <div class="centered-container w-container">
      <h2 class="font-bold text-4xl mb-4">Subscribe to posts</h2>
      <p>Enter your email If you would like to get an email the next time we post.<br>We post about ~1-2x per month, and up to once a month about company news.<br></p>
    </div>
    <div class="container-5 w-container mt-4">
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
          src: 'https://js.hsforms.net/forms/shell.js'
        }
      ]
    }
  })
</script>
