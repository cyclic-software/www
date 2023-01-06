<template>
    <div class="section wf-section wide">
    <div class="container center-align">
      <div class="spacer _64"></div>
      <div class="text-box _600px space-y-4">
        <h2 class="text-4xl font-bold">
          Full Stack Serverless Apps
        </h2>
        <p class="text-lg">
          Deploy a full stack serverless app on cyclic in seconds. Bring your own repo or fork and install a starter from
          our library:
        </p>

        <div class="spacer _16"></div>
        <div class="w-row">
          <div class="w-col w-col-6">
            <a href="https://app.cyclic.sh/api/login"
             @click="sign_up('https://app.cyclic.sh/api/login?utm_source=www&amp;utm_medium=web&amp;utm_campaign=cta', $event)"
             class="button white helloworld-cta w-button">DEPLOY ON CYCLIC 🚀</a>
          </div>
          <div class="w-col w-col-6">
            <a href="https://docs.cyclic.sh/docs/intro" class="button white helloworld-cta w-button">READ THE DOCS 📒</a>
          </div>
        </div>
        <div class="spacer _16"></div>

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
                await gtag('event', 'cta_full_stack_serverless_apps', {
                'event_label' : window.location.href,
                'event_category' : 'sign_up',
                'value' : session_seconds,

                'page' : window.location,
                'session_seconds': session_seconds,
                'event_callback': function() {
                    window.location = url
                  }
                });  
            }catch(e){
                window.location = url
            }
      }
    }
}
</script>


<style scoped>
  .top-gradient {
    top: 0px;
    right: 0px;
  }
  .wide {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 60px;
    padding-right: 60px;
  }

</style>
