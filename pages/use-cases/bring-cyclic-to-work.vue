<template>
  <section class="section common-section w-full gap-10">
    <div class="common-section pt-20">
      <!-- ********* PILL TEXT ********* -->
      <Pill text="Ship apps faster" />

      <!-- ********* CTA TEXTS ********* -->
      <div class="space-y-6">
        <h2 class="font-extrabold text-4xl lg:text-5xl text-center capitalize">
          Bring Cyclic to Work
        </h2>

        <p class="text-center text-neutral-300">
          Boost productivity of developers in your organization.
        </p>
      </div>
    </div>

    <!-- ********* CYCLIC TO WORK CONTENT ********* -->
    <div class="mt-10 space-y-16">
      <!-- ********* CONTENT ********* -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <img class="w-full align-self-center" src="/images/cyclic-to-work.svg" alt="">
        
        <div class="text-neutral-300 leading-[150%] space-y-5">
          <p>
            Are you ready to revolutionize your work environment and elevate your team's productivity? Look no further than Cyclic, the ultimate solution for streamlining your development and testing processes. With Cyclic, we empower you to bring your own AWS account, granting you unparalleled control and flexibility over your cloud resources. Say goodbye to the limitations of shared environments and experience the freedom to optimize your AWS setup according to your specific needs.
          </p>

          <p>
            But that's not all. Cyclic goes beyond AWS integration to supercharge your collaboration efforts. Our lightning-fast preview environments facilitate seamless teamwork, allowing your developers to iterate and innovate more efficiently. With disposable Dev/Test environments, we ensure consistency in your workflows, eliminating the hassle of environment setup and maintenance. Plus, by simplifying and automating these processes, Cyclic helps ease the burden on your DevOps team, allowing them to dedicate their precious time and expertise to solving production issues and driving your business forward.
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
      <!-- <div class="flex flex-col gap-2 items-center border !border-neutral-700 bg-neutral-800/20 rounded-2xl p-10
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
      </div> -->

    </div>

  </section>
</template>

<script>
  export default {
    
  }
</script>
