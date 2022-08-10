<template>
  <div v-if="notFound">
    <!-- Show your 404 content. -->
    Page not found
  </div>
  <div v-else>
    <RenderContent
      :key="$route.path"
      model="page"
      @contentLoaded="contentLoaded"
      @contentError="contentError"
      :options="{
        url: $route.path,
      }"
    />
  </div>
</template>

<script>
// import { builder, RenderContent } from '@builder.io/vue'
import Vue from 'vue'

// Replace with your Public API Key.
// builder.init("99d57cd26dcd4e0cbc917e798102b081")

export default Vue.extend({
  data: () => ({
    notFound: false,
  }),
  // components: { RenderContent },
  methods: {
    contentLoaded(content) {
      if (!content) {
        if (this.$nuxt.context.ssrContext) {
          this.$nuxt.context.ssrContext.res.statusCode = 404
        }
        this.notFound = true
      }
    },
    contentError(err) {
      // Handle errors here.
    },
  },
})
</script>
