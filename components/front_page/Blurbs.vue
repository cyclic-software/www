<template>
  <section class="section common-section">
    <!-- ********* PILL TEXT ********* -->
    <Pill text="Wait...there's more" />
    
    <!-- ********* CTA TEXTS ********* -->
    <div class="space-y-6">
      <h2 class="font-extrabold text-4xl lg:text-5xl text-center">
        The best code is the code you don&#x27;t have to write.
      </h2>
  
      <p class="text-center text-neutral-300">
        Focus on building, let us handle the rest.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      <div class="space-y-4 border !border-neutral-700 p-6 rounded-2xl bg-neutral-800/50">
        <img src="/images/Frame-98.svg" alt="" class="icon">
        <h3 class="font-semibold text-2xl">Run locally, run in the cloud.</h3>
        <p class="text-neutral-300">An execution environment that feels familiar on both local and in the cloud. Optimize for speed from idea to live in production.</p>
      </div>
    
      <div class="space-y-4 border !border-neutral-700 p-6 rounded-2xl bg-neutral-800/50">
        <img src="/images/Frame-98-1.svg" alt="" class="icon">
        <h3 class="font-semibold text-2xl">Build and Deploy in seconds.</h3>
        <p class="text-neutral-300">The fastest build system you have ever seen. Seriously, you will be shocked. We sometimes refresh the page because we think we are seeing cached results. For real, it is that fast.</p>
      </div>
    
      <div class="space-y-4 border !border-neutral-700 p-6 rounded-2xl bg-neutral-800/50">
        <img src="/images/Frame-101.svg" alt="" class="icon">
        <h3 class="font-semibold text-2xl">Scale up and Scale out.</h3>
        <p class="text-neutral-300">Built and deployed with global scale enterprise grade serverless primates. Go from proof of concept to global load without re-architecting your app. </p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Blurbs'
  }
</script>