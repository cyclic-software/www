<script>
  const title = "Sign Up for Cyclic | cyclic.sh"
  const description = "Sign up to deploy full stack javascript apps."
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
      ],
    }
  }
  </script>

<template>

<div class="wrapper">
  <b-container class="hero">
    <b-row>
      <b-col sm="0" md="2" lg="3"></b-col>
      <b-col md="6" align-self="center">
        <h1>
          Full stack apps
        </h1>
        <p class="paragraph">
          Connect your GitHub repo. We will build, deploy and manage the hosting. Authorize our GitHub app and you
          will have a fully featured software pipeline. See how quick and easy hosting can be.
        </p>
        <div class="spacer _16"></div>
        <a href="https://app.cyclic.sh/api/login"
          @click="sign_up('https://app.cyclic.sh/api/login', $event)" 
         class="button-2 w-button">Sign Up</a>
      </b-col>
    </b-row>
  </b-container>
</div>

</template>

<script>
export default {
    methods:{
      async sign_up(url, e){
          try{
              let session_seconds = parseInt(e.timeStamp/1000)
                await gtag('event', 'cta_sign_up_component', {
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

  .hero {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .section.blue-gradient {
    margin-right: 0px;
    margin-left: 0px;
    padding-right: 60px;
    padding-left: 60px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#245fff),
      color-stop(77%, #0f2c41)
    );
    background-image: linear-gradient(180deg, #245fff, #0f2c41 77%);
  }
  /* .section.blue-gradient {
    padding-right: 0px;
    padding-left: 0px;
  } */
  .spacer-64 {
    min-height: 64px;
    max-height: 64px;
    min-width: 64px;
    max-width: 64px;
  }
</style>
