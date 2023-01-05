<template>
  <div class="banner wf-section">
    <div class="container w-container max-w-screen-xl">
      <div class="_12-columns align-center">
        <div class="column desk-12"><img src="/images/Rectangle-240-copy.svg" loading="lazy" alt="" class="absolute-image">
          <div class="cta-box">
            <div class="text-box _600px space-y-3">
              <h2 class="text-4xl font-bold">Launch a hello world</h2>
              <p class="text-lg">Fork and deploy a hello world project onto Cyclic faster than it has taken to read this page. Experience the power.</p>
              <div class="spacer _24"></div>
              <a href="https://app.cyclic.sh/api/login"
              @click="sign_up('https://app.cyclic.sh/api/login?utm_source=www&utm_medium=web&utm_campaign=cta', $event)" 
               target="_blank" class="button white w-button">Deploy on Cyclic 🚀</a>
            </div>
          </div>
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
                await gtag('event', 'cta_launch_hello_world', {
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
