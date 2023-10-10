<template>
  <div class="px-4 sm:px-0">
    <div class="relative w-full max-w-screen-xl h-80 mx-auto bg-[#245fff]
    rounded-xl overflow-hidden">
      <img
        src="/images/Rectangle-240-copy.svg"
        loading="lazy"
        alt="Deploy on Cyclic"
        class="absolute top-0 left-0"
      >
  
      <div class="absolute w-full h-full z-[1] flex flex-col items-center
      justify-center p-4 text-center">
        <h2 class="text-4xl font-bold mb-3">Launch a hello world</h2>

        <p class="text-lg w-full sm:w-[50%] mb-6">
          Fork and deploy a hello world project onto Cyclic faster than it has taken to read this page. Experience the power.
        </p>

        <a
          href="https://app.cyclic.sh/api/login"
          @click="sign_up('https://app.cyclic.sh/api/login?utm_source=www&utm_medium=web&utm_campaign=cta', $event)"
          target="_blank"
          class="button white w-button"
        >
          Deploy on Cyclic 🚀
        </a>
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
