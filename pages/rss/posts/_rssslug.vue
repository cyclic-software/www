<template>
  <div>
    <h1>{{ post.title }}</h1>
    <nuxt-content :document="post"></nuxt-content>
  </div>
</template>

<script>
  export default {
    layout: 'empty',
    head() {
      return {
        title: `${this.post.title} | cyclic.sh`,
        meta: [
          {hid: 'og:type', property: 'og:type', content: 'article'},

          {hid: 'article:published_time', property: 'article:published_time', content: this.post.publishedOn},
          // {hid: 'article:modified_time', name: 'article:modified_time', content: 'article'},
          // {hid: 'article:expiration_time', name: 'article:expiration_time', content: 'article'},
          {hid: 'article:author', property: 'article:author', content: this.post.author.name},
          {hid: 'article:section', property: 'article:section', content: this.post.category},
          // {hid: 'article:tag', name: 'article:tag', content: 'article'},
          // article:published_time - datetime - When the article was first published.
          // article:modified_time - datetime - When the article was last changed.
          // article:expiration_time - datetime - When the article is out of date after.
          // article:author - profile array - Writers of the article.
          // article:section - string - A high-level section name. E.g. Technology
          // article:tag - string array - Tag words associated with this article.

          {hid: 'title', name: 'title', content: `${this.post.title} | cyclic.sh`},
          {hid: 'og:title', property: 'og:title', content: `${this.post.title} | cyclic.sh`},
          {hid: 'twitter:title', name: 'twitter:title', content: `${this.post.title} | cyclic.sh`},

          {hid: 'og:description', property: 'og:description', content: this.post.summary },
          {hid: 'twitter:description', name: 'twitter:description', content: this.post.summary },
          {hid: 'description', name: 'description', content: this.post.summary },

          {hid: 'og:image', property: 'og:image', content: `https://www.cyclic.sh${this.post.image}` },
          {hid: 'twitter:image', name: 'twitter:image', content: `https://www.cyclic.sh${this.post.image}` },
          {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },

          {hid: 'twitter:label1', name: 'twitter:label1', content: 'Written by' },
          {hid: 'twitter:data1', name: 'twitter:data1', content: this.post.author.name },
          {hid: 'twitter:label2', name: 'twitter:label2', content: 'Published On' },
          {hid: 'twitter:data2', name: 'twitter:data2', content: this.post.publishedOn },
        ]
      }
    },
    async asyncData({ $content, params }) {
      const post = await $content('posts', params.rssslug).fetch()
      return { post }
    },
  }
</script>
