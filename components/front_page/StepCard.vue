<template>
  <div class="flex flex-col items-center gap-5">
    <div class="border !border-neutral-600 rounded-full flex items-center justify-center
    w-14 h-14">
      {{ step_num }}
    </div>

    <div class="h-60 w-full bg-neutral-800 rounded-2xl"></div>

    <h3 class="text-2xl">{{ text }}</h3>
  </div>
</template>

<script>
  export default {
    props: {
      step_num: {
        type: Number,
        required: true
      },

      text: {
        type: String,
        required: true
      },

      image: {
        type: String
      }
    }
  }
</script>