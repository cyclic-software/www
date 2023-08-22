<template>
  <section class="section common-section">
    <!-- ********* PILL TEXT ********* -->
    <Pill text="Still not convinced?" />
    
    <!-- ********* CTA TEXTS ********* -->
    <div class="space-y-6">
      <h2 class="font-extrabold text-4xl lg:text-5xl text-center">
        Watch our product tour
      </h2>
  
      <p class="text-center text-neutral-300">
        Join our cool C.E.O, Kam, for a quick tour of Cyclic.
      </p>
    </div>

    <!-- ********* CONTENT ********* -->
    <div class="w-full mt-10">
      <iframe
        class="aspect-auto w-full lg:w-[90%] mx-auto h-[400px] rounded-2xl blue-shadow"
        src="https://www.youtube-nocookie.com/embed/UnhTGEtOD6M"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
        srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href='https://www.youtube-nocookie.com/embed/UnhTGEtOD6M?autoplay=1'><img src='https://i.ytimg.com/vi/iK3ael3pQw8/hqdefault.jpg' alt='Cyclic - Full stack serverless hosting platform'><span>▶</span></a>"
      >
      </iframe>
    </div>
  </section>
</template>

<style scoped>
h1{
  font-weight: 100;;
}

</style>