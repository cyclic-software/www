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
          Use Cyclic to transform and bridge data flows between disparate systems.
        </p>
      </div>
    </div>

    <!-- ********* API INTEGRATIONS CONTENT ********* -->
    <div class="mt-10 space-y-16">
      <!-- ********* CONTENT ********* -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <NuxtImg format="webp" loading="lazy" class="w-full align-self-center" src="/images/api.svg" alt="API Integrations" />
        
        <div class="text-neutral-300 leading-[150%] space-y-5">
          <p>
            Off the self software services offer unprecedented flexibility and power to organizations. However, the proliferation of these services has created new challenges. How do you connect these services together to create a cohesive dataflow? How do you ensure that events in one system are reflected in another?
          </p>

          <h2 class="text-white font-semibold text-xl">Transform and bridge data flows between disparate systems.</h2>

          <p>
            Use Cyclic to transform payloads to conform to upstream extraction formats or downstream ingestion formats. Most systems are constrained in the style and format of data they can accept. Cyclic is well suited to transform payloads to conform to these constraints.
          </p>
          <p>
            Much of the time spent integrating systems is spent with provider's documentation that is only understandable to an engineer already well versed in the system being described. Cyclic accelerates the integration process by providing a visual interface to the dataflow. This allows for rapid feedback and deployment cycles for your engineering team.
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
            See the exact shape of data sent to Cyclic for ingestion. Use the network tab to view request headers and payloads.
          </p>
        </div>

        <div class="space-y-5">
          <div class="w-20 h-20 bg-neutral-800 flex items-center justify-center
          text-2xl rounded-xl text-primary">
            <i class="ri-flashlight-fill"></i>
          </div>

          <h3 class="text-2xl">Speed</h3>

          <p class="text-neutral-300">
            Zero downtime deployments happen in under a minute. This allows your team to integrate first and then iterate to finalized data transformation.
          </p>
        </div>

        <div class="space-y-5">
          <div class="w-20 h-20 bg-neutral-800 flex items-center justify-center
          text-2xl rounded-xl text-primary">
            <i class="ri-arrow-left-right-line"></i>
          </div>

          <h3 class="text-2xl">Flexibility</h3>

          <p class="text-neutral-300">
            Cyclic enables you to reshape inbound data flow and enrich them with API calls to other systems before transforming the data for downstream egress.
          </p>
        </div>
      </div>


      <!-- ********* CALL TO ACTION ********* -->
      <div class="flex flex-col gap-2 items-center border !border-neutral-700 bg-neutral-800/20 rounded-2xl p-10
      space-y-5 text-center">
        <h2 class="text-3xl font-semibold">Deploy an API now</h2>

        <hr class="border-primary w-10">

        <p class="text-neutral-300 w-full md:w-[50%] leading-[160%]">
          We have a starter template ready, all you have to do is press Deploy.
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
