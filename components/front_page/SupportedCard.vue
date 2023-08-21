<template>
  <div class="flex items-center justify-center text-7xl text-neutral-400 hover:text-white transition">
    <i :class="`fab ${icon}`"></i>
  </div>
</template>

<script>
  export default {
    name: 'SupportedCard',
    props: {
      name: {
        type: String,
      },

      icon: {
        type: String,
        required: true
      }
    }
  }
</script>