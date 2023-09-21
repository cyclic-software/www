<template>
  <section class="section common-section w-full gap-10">
    <div class="common-section pt-20">
      <!-- ********* PILL TEXT ********* -->
      <Pill text="Easy BFFs" />

      <!-- ********* CTA TEXTS ********* -->
      <div class="space-y-6">
        <h2 class="font-extrabold text-4xl lg:text-5xl text-center capitalize">
          Backends for Frontends
        </h2>

        <p class="text-center text-neutral-300">
          Use Cyclic to develop and deploy BFF architectures.
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
            In the Backends for Frontends (BFF) pattern, each frontend gets its own backend, optimized to meet its specific needs. 
          </p>
          <p>
            Cyclic.sh's reliance on AWS resources gives applications a strong foundation for scalability and reliability while allowing for easy isolation of services. By leveraging AWS Lambda for serverless functions, it allows for a highly scalable backends that can adjust to varying loads without manual intervention. The use of AWS API Gateway ensures secure and efficient routing of API calls from each specialized frontend to the respective backend service. For data storage and retrieval, the integration with AWS DynamoDB offers a performant and flexible NoSQL database. 
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

          <h3 class="text-2xl">Reduced maintenance overhead</h3>
          <p class="text-neutral-300">
            While BFF does reduce the complexity of each individual component, multiple such component can burden and complicate release management. Cyclic.sh's integration with GitHub and AWS allows for a streamlined CI/CD pipeline that can be easily managed and scaled.  
          </p>
          <p>
            One-click rollbacks with detailed deployment history that is directly linked to version control making change management for multiple components easy.
          </p>
        </div>

        <div class="space-y-5">
          <div class="w-20 h-20 bg-neutral-800 flex items-center justify-center
          text-2xl rounded-xl text-primary">
            <i class="ri-flashlight-fill"></i>
          </div>

          <h3 class="text-2xl">Fast Dev </h3>

          <p class="text-neutral-300">
            Isolated components reduce the complexity of the codebase and allow for faster development cycles. Many of the components need to be developed and tested in tandem. Cyclic.sh's environment management allows for easy creation of environments that can be used by individual developers without having to share. 
          </p>
          <p>
            Serverless makes this very cheap since you only pay for activity, whether you have 1 or 100 environments.
          </p>
        </div>

        <div class="space-y-5">
          <div class="w-20 h-20 bg-neutral-800 flex items-center justify-center
          text-2xl rounded-xl text-primary">
            <i class="ri-checkbox-circle-line"></i>
          </div>

          <h3 class="text-2xl">Monitoring</h3>

          <p class="text-neutral-300">
            One of the challenges with BFF is the increased complexity of monitoring. Cyclic.sh's integration with AWS CloudWatch allows for easy monitoring of components. With BFF architectures being heavily reliant on API's -  Cyclic.sh's dashboard provides a unique logging and monitoring experience that fuses application logs with API logs.
          </p>
        </div>
      </div>


      <!-- ********* CALL TO ACTION ********* -->
      <div class="flex flex-col gap-2 items-center border !border-neutral-700 bg-neutral-800/20 rounded-2xl p-10
      space-y-5 text-center">
        <h2 class="text-3xl font-semibold">Deploy a BFF now</h2>

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
