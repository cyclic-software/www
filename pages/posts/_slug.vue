<template>
  <section class="section common-section space-y-12">
    <div class="px-4 lg:px-0 max-w-screen-lg mx-auto space-y-10">
      <!-- IMAGE SECTION -->
      <img :src="post.image" :alt="post.title" class="w-full rounded-2xl">

      <!-- TITLE & META SECTION -->
      <div class="space-y-8 border-b border-b-white/10 pb-6">
        <h1 class="text-6xl font-black">{{ post.title }}</h1>

        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <!-- DATE -->
            <div class="flex flex-col border-r border-r-white/20 pr-3 text-gray-400">
              <span class="font-black text-2xl">{{ formatDate(post.publishedOn).day }}</span>
              <span class="uppercase text-xs font-medium tracking-widest">
                {{ formatDate(post.publishedOn).month + ' ' + formatDate(post.publishedOn).year }}
              </span>
            </div>

            <!-- AUTHOR -->
            <span class="text-sm font-medium text-blue-400">By {{ post.author.name }}</span>
          </div>

          <!-- CATEGORY -->
          <div class="text-xs px-2 py-1 border border-white/20 rounded-full
          capitalize text-gray-300">
            {{ post.category || 'general' }}
          </div>
        </div>
      </div>


      <div class="grid grid-cols-1">
        <nuxt-content
          :document="post"
          class="prose prose-xl prose-invert prose-a:text-sky-300
          prose-blockquote:text-2xl prose-blockquote:border-sky-600 prose-h4:text-2xl
          prose-img:rounded-xl mx-auto w-full lg:w-max"
        ></nuxt-content>
      </div>
    </div>

    <HubspotBlogForm />

    <CtaLaunchHelloWorld></CtaLaunchHelloWorld>
  </section>
</template>

<script>
  export default {
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
      const post = await $content('posts', params.slug).fetch()
      const author = await $content('authors', post.author).fetch()

      post.author = {...author, id: post.author}

      // console.log(JSON.stringify(params.slug,null,2))
      // console.log(JSON.stringify(post.author,null,2))

      return { post }
    },
    methods: {
        formatDate(date) {
          // const options = { year: 'numeric', month: 'long', day: 'numeric' }
          // return new Date(date).toLocaleDateString('en', options)
          const dateObj = new Date(date)
          const day = dateObj.getDate()
          const month = dateObj
            .toLocaleString('default', { month: 'long' })
            .slice(0, 3)
          
          const year = dateObj.getFullYear()

          return {
            day,
            month,
            year
          }
        }
    },
    mounted() {
    if (typeof window !== 'undefined') {
      require('prismjs');
    }
  },
  }
</script>
