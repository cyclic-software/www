<template>
  <section class="section common-section">
    <!-- ********* PILL TEXT ********* -->
    <Pill text="Want a demo?" />
    
    <!-- ********* CTA TEXTS ********* -->
    <div class="space-y-6">
      <h2 class="font-extrabold text-4xl lg:text-5xl text-center">
        Watch our product tour
      </h2>
  
      <p class="text-center text-neutral-300">
        Join our CEO Kam, for a quick tour of Cyclic.
      </p>
    </div>

    <!-- ********* CONTENT ********* -->
    <div class="video-container mt-10">
      <iframe
        class="rounded-2xl blue-shadow"
        src="https://www.youtube-nocookie.com/embed/UnhTGEtOD6M"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
        srcdoc="<style>
          *{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span,svg{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
          <a href='https://www.youtube-nocookie.com/embed/UnhTGEtOD6M?autoplay=1'>
            <img src='https://i.ytimg.com/vi/iK3ael3pQw8/hqdefault.jpg' alt='Cyclic - Full stack serverless hosting platform'>
            <span>▶</span>
          </a>"
      >
      </iframe>
    </div>
  </section>
</template>

<style scoped>
h1{
  font-weight: 100;;
}
.video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio (9 / 16 = 0.5625 or 56.25%) */
    width: 100%;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>