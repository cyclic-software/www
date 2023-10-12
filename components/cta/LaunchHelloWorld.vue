<template>
  <div class="relative w-full bg-neutral-800/20
  border !border-neutral-700 rounded-xl flex flex-col items-center
  gap-5 text-center p-8">
      <h2 class="text-4xl font-bold">Launch a hello world</h2>

      <p class="w-full md:w-[50%] text-neutral-300">
        Fork and deploy a hello world project onto Cyclic faster than it has taken to read this page. Experience the power.
      </p>

      <a
        href="https://app.cyclic.sh/api/login"
        @click="sign_up('https://app.cyclic.sh/api/login?utm_source=www&utm_medium=web&utm_campaign=cta', $event)"
        target="_blank"
        class="bg-primary text-white capitalize flex items-center justify-center rounded-xl px-4 py-3
        gap-2 hover:no-underline hover:scale-105 transition w-full md:w-max"
      >
        Deploy on Cyclic 🚀
      </a>
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
