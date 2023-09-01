<template>
  <div class="relative border !border-neutral-700 rounded-2xl p-6 bg-neutral-800 space-y-4 w-[300px] lg:w-[500px]">
    <div class="absolute top-0 left-0 text-7xl text-neutral-600/50">
      <i class="ri-double-quotes-l"></i>
    </div>

    <p class="relative z-10 leading-[150%]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut velit voluptatem perspiciatis dignissimos cupiditate modi quos at ea vero laboriosam repellat labore odit provident, deleniti iusto amet nam blanditiis! Quae!
    </p>

    <div class="flex items-center gap-3">
      <div class="flex items-center justify-center w-12 h-12 bg-neutral-700 rounded-full">
        <i class="ri-user-6-line text-xl"></i>
      </div>

      <div class="">
        <p class="text-neutral-200">John Doe</p>
        <p class="!text-sm text-neutral-400">Founder at Nuclear AI</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Testimonial',
    props: {
      name: {
        type: String,
        required: true
      },
      
      msg: {
        type: String,
        required: true
      },
      
      work: {
        type: String,
      },
      
      link: {
        type: String,
      },
    }
  }
</script>