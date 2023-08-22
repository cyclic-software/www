<template>
  <div class="flex flex-col items-center gap-4">
    <h4 class="text-5xl font-bold">{{ stat }}</h4>
    <p class="text-neutral-300">{{ text }}</p>
    <hr class="w-8 border-primary">
  </div>
</template>

<script>
  export default {
    name: 'StatCard',
    props: {
      stat: {
        type: String,
        required: true
      },
      
      text: {
        type: String,
        required: true
      },
    }
  }
</script>