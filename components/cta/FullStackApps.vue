<template>
  <section class="section">
    <div class="common-section border !border-neutral-700 bg-neutral-800/20 rounded-2xl p-10">
      <h2 class="text-4xl font-bold">
        Full Stack Serverless Apps
      </h2>

      <p class="text-neutral-300">
        Deploy a full stack serverless app on cyclic in seconds. Bring your own repo or fork and install a starter from
        our library:
      </p>

      <div class="flex flex-col md:flex-row items-center md:justify-center gap-3 w-full">
        <a href="https://app.cyclic.sh/api/login"
          @click="sign_up('https://app.cyclic.sh/api/login?utm_source=www&amp;utm_medium=web&amp;utm_campaign=cta', $event)"
          class="bg-primary text-white capitalize flex items-center justify-center rounded-xl px-4 py-3
          gap-2 hover:no-underline hover:scale-105 transition w-full md:w-max"
        >
          Deploy on Cyclic 🚀
        </a>

        <a
          href="https://docs.cyclic.sh/docs/intro"
          class="border !border-neutral-700 text-white capitalize flex items-center justify-center rounded-xl px-4 py-3
          gap-2 hover:no-underline hover:!border-white transition w-full md:w-max"
        >Read the Docs 📒</a>
      </div>
    </div>
  </section>
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
