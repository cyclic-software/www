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

          <h3 class="text-2xl">Security</h3>

          <p class="text-neutral-300">
            Self hosting without the hassle. Cyclic is a fully managed solution that runs in your AWS account. You have full control over your data and resources. Provide Cyclic control plane access and rest assured your data is safe and secure.
          </p>
        </div>

        <div class="space-y-5">
          <div class="w-20 h-20 bg-neutral-800 flex items-center justify-center
          text-2xl rounded-xl text-primary">
            <i class="ri-flashlight-fill"></i>
          </div>

          <h3 class="text-2xl">Speed</h3>

          <p class="text-neutral-300">
            Spin up and down preview environments without consuming DevOps resources that are better spent on production work. Its not a question of if you can, its a matter if it is the best use of your team's time.
          </p>
        </div>

        <div class="space-y-5">
          <div class="w-20 h-20 bg-neutral-800 flex items-center justify-center
          text-2xl rounded-xl text-primary">
            <i class="ri-checkbox-circle-line"></i>
          </div>

          <h3 class="text-2xl">Joy</h3>
            Liberate your product teams to pour their creative energy into building that next feature to delight your users. Stop having your infrastructure dictate your product roadmap.
          <p class="text-neutral-300">

          </p>
        </div>
      </div>


      <!-- ********* CALL TO ACTION ********* -->
      <div class="flex flex-col gap-2 items-center border !border-neutral-700 bg-neutral-800/20 rounded-2xl p-10
      space-y-5 text-center">
        <h2 class="text-3xl font-semibold">Bring Cyclic to Work</h2>

        <hr class="border-primary w-10">

        <p class="text-neutral-300 w-full md:w-[50%] leading-[160%]">
          Ready to build fast and ship features even faster? Get started today.
        </p>

        <div class="flex flex-col sm:flex-row sm:items-center gap-2">
          <a
            href="https://cyclic.typeform.com/to/HNNO8Bkp"
            class="bg-primary text-white capitalize flex items-center justify-center rounded-xl px-4 py-3
            gap-2 hover:no-underline hover:scale-105 transition w-full sm:w-[250px]"
          >
            Get Started
          </a>

          <!-- <a
            href="https://cyclic.typeform.com/to/HNNO8Bkp"
            class="border !border-neutral-500 text-white capitalize flex items-center justify-center rounded-xl px-4 py-3
            gap-2 hover:no-underline hover:!border-white transition w-full sm:w-[250px]"
            target="_blank"
          >
            Talk to an Engineer
            <i class="ri-arrow-right-up-line"></i>
          </a> -->

        </div>
      </div>

    </div>

  </section>
</template>

<script>
  export default {

  }
</script>
