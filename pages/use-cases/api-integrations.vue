<template>
  <section class="section common-section w-full gap-10">
    <div class="common-section pt-20">
      <!-- ********* PILL TEXT ********* -->
      <Pill text="Integrate APIs" />

      <!-- ********* CTA TEXTS ********* -->
      <div class="space-y-6">
        <h2 class="font-extrabold text-4xl lg:text-5xl text-center capitalize">
          API Integrations
        </h2>

        <p class="text-center text-neutral-300">
          Use Cyclic to improve response times with less manual effort.
        </p>
      </div>
    </div>

    <!-- ********* API INTEGRATIONS CONTENT ********* -->
    <div class="mt-10 space-y-16">
      <!-- ********* CONTENT ********* -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <img class="w-full align-self-center" src="/images/chatops.svg" alt="">
        
        <div class="text-neutral-300 leading-[150%] space-y-5">
          <p>
            Modern software organizations are able to build systems that were in the realm of science fiction only decades ago. However, the complexity of these systems has grown exponentially. Expectations of users and internal users have also grown.
          </p>
          <p>
            The ChatOps paradigm inverts the access pattern for most administrative workflows. In a simplified model the three components of the system are, the ChatBot, the administrator and the software system in question. Sessions maybe initiated by either an external event (ie email, webhook or cron), a system trigger or directly by the administrator directly to the ChatBot.
          </p>
          <p>
            Authentication is handled by the embedded Authn system of the chat system. A first tier of authorization maybe provided by the chat system with the option of further authz being performed by the ChatBot. The ChatBot may also be used to provide a first tier of authorization with the option of further authz being performed by the ChatBot.
          </p>
        </div>
      </div>

      <!-- ********* BENEFITS ********* -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="space-y-5">
          <div class="w-20 h-20 bg-neutral-800 flex items-center justify-center
          text-2xl rounded-xl text-primary">
            <i class="ri-eye-line"></i>
          </div>

          <h3 class="text-2xl">Visibility</h3>

          <p class="text-neutral-300">
            Create team wide visibility in to the flow of operations work. By surfacing events and actions into a shared channel more members of the team are able to see the work being done. This creates a shared sense of ownership and builds team moral.
          </p>
        </div>

        <div class="space-y-5">
          <div class="w-20 h-20 bg-neutral-800 flex items-center justify-center
          text-2xl rounded-xl text-primary">
            <i class="ri-flashlight-fill"></i>
          </div>

          <h3 class="text-2xl">Speed</h3>

          <p class="text-neutral-300">
            Provide employees with the relevant information in the same UI window they are already interacting in. By delegating information gathering and common followup linking to the ChatBot you free your coworkers to collaborate.
          </p>
        </div>

        <div class="space-y-5">
          <div class="w-20 h-20 bg-neutral-800 flex items-center justify-center
          text-2xl rounded-xl text-primary">
            <i class="ri-checkbox-circle-line"></i>
          </div>

          <h3 class="text-2xl">Effectiveness</h3>

          <p class="text-neutral-300">
            ChatOps allows for seamless operation of "human-in-the-loop" interactions while mantaining InfoSec and DataSec compliant actions. Chat messages often provide several possible actions as well as deep links for administrators to quickly jump into other systems to take further action.
          </p>
        </div>
      </div>


      <!-- ********* CALL TO ACTION ********* -->
      <div class="flex flex-col gap-2 items-center border !border-neutral-700 bg-neutral-800/20 rounded-2xl p-10
      space-y-5 text-center">
        <h2 class="text-3xl font-semibold">Deploy an API now</h2>

        <hr class="border-primary w-10">

        <p class="text-neutral-300 w-full md:w-[50%] leading-[160%]">
          We have the starter template ready, all you have to do is press ‘Deploy’.
        </p>

        <div class="flex flex-col sm:flex-row sm:items-center gap-2">
          <a
            href="https://app.cyclic.sh/api/login"
            class="bg-primary text-white capitalize flex items-center justify-center rounded-xl px-4 py-3
            gap-2 hover:no-underline hover:scale-105 transition w-full sm:w-[250px]"
          >
            Deploy
          </a>

          <a
            href="https://cyclic.typeform.com/to/HNNO8Bkp"
            class="border !border-neutral-500 text-white capitalize flex items-center justify-center rounded-xl px-4 py-3
            gap-2 hover:no-underline hover:!border-white transition w-full sm:w-[250px]"
            target="_blank"
          >
            Talk to an Engineer
            <i class="ri-arrow-right-up-line"></i>
          </a>

        </div>
      </div>

    </div>

  </section>
</template>

<script>
  export default {
    data() {
      return {
        tab: 'regular'
      }
    }
  }
</script>
