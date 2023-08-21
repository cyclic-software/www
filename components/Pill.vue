<template>
  <div class="border !border-neutral-700 rounded-full px-3 py-1.5 text-sky-500 text-sm
  font-medium">
    {{ text }}
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
</script>