<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="flex flex-col justify-between gap-2 relative border !border-neutral-700 rounded-2xl p-6 bg-neutral-800 space-y-4 w-[300px] lg:w-[500px]
    hover:no-underline group"
  >
    <div class="absolute top-0 left-0 text-7xl text-neutral-600/50">
      <i class="ri-double-quotes-l"></i>
    </div>

    <p class="relative z-10 leading-[150%] group-hover:text-sky-300 transition">
      {{ msg }}
    </p>

    <div class="flex items-center gap-3">
      <div class="flex items-center justify-center w-12 h-12 bg-neutral-700 rounded-full overflow-hidden">
        <NuxtImg v-if="avatar" :src="avatar" class="w-full h-full bg-cover" :alt="name" />
        <i v-else class="ri-user-6-line text-xl"></i>
      </div>

      <div class="">
        <p class="text-neutral-200">{{ name }}</p>
        <p v-if="work" class="!text-sm text-neutral-400">{{ work }}</p>
      </div>
    </div>
  </a>
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
      
      avatar: {
        type: String,
      },
    }
  }
</script>