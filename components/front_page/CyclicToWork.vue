<template>
  <section class="section common-section">
    <!-- ********* PILL TEXT ********* -->
    <Pill text="Ship apps faster" />
    
    <!-- ********* CTA TEXTS ********* -->
    <div class="space-y-6">
      <h2 class="font-extrabold text-4xl lg:text-5xl text-center">
        Bring Cyclic to Work
      </h2>
  
      <p class="text-center text-neutral-300">
        Boost the productivity of developers in your organization
      </p>
    </div>

    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <NuxtImg class="w-[80%]" src="/images/cyclic-to-work.svg" loading="lazy" alt="Bring Cyclic to Work" />

      <div class="space-y-5">
        <div class="space-y-5 text-neutral-300">
          <p>Ready to boost your team's productivity? Bring your AWS account for ultimate control. Collaborate faster with rapid preview environments. Ensure consistency with disposable Dev/Test setups. Let Cyclic lighten the DevOps load, so your team can focus on production challenges. Embrace Cyclic and transform your work environment today!</p>
          <!-- <p>Are you ready to revolutionize your work environment and elevate your team's productivity? Look no further than Cyclic, the ultimate solution for streamlining your development and testing processes. With Cyclic, we empower you to bring your own AWS account, granting you unparalleled control and flexibility over your cloud resources. Say goodbye to the limitations of shared environments and experience the freedom to optimize your AWS setup according to your specific needs.</p>
          <p>But that's not all. Cyclic goes beyond AWS integration to supercharge your collaboration efforts. Our lightning-fast preview environments facilitate seamless teamwork, allowing your developers to iterate and innovate more efficiently. With disposable Dev/Test environments, we ensure consistency in your workflows, eliminating the hassle of environment setup and maintenance. Plus, by simplifying and automating these processes, Cyclic helps ease the burden on your DevOps team, allowing them to dedicate their precious time and expertise to solving production issues and driving your business forward</p> -->
        </div>
        
        <div class="">
          <nuxt-link to="/use-cases/bring-cyclic-to-work" class="button button-primary m-0 text-base w-max">
            Learn More
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>