<template>
  <article>
    <h1>{{ post.title }}</h1>
    <p>Published: {{ formatDate(post.publishedOn) }}</p>
    <nuxt-content :document="post" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const post = await $content('posts', params.slug).fetch()

      return { post }
    },
    methods: {
        formatDate(date) {
          const options = { year: 'numeric', month: 'long', day: 'numeric' }
          return new Date(date).toLocaleDateString('en', options)
        }
    }
  }
</script>
