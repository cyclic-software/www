<template>
  <nuxt-link class="capitalize text-sm text-neutral-300 hover:text-white transition" :to="path">
    {{ name }}
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      path: {
        type: String,
        required: true
      }
    }
  }
</script>